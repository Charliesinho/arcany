const express = require( 'express' );
const mongoose = require( 'mongoose' );

const { createServer } = require( 'http' );
const { Server } = require( 'socket.io' );

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");    
    });

const Player = require( './playerSchema.js' );
const { NONAME } = require('dns');

const tickRate = 60;
const speed = 5.5;
const projectileSpeed = 25;

let players = [];
const inputsMap = {};
let animPlayerStore = {};
let lastLookPlayerStore = {};
let projectiles = [];
let weaponAngleStore = {};
let chatMessageStore = {};
let blockMovementStore = {};
let usernames = {};
let inventoryStore = {};
let myPlayer = {};


function tick() {
    for (const player of players) {
        const inputs = inputsMap[player.id];
        const anim = animPlayerStore[player.id];
        const lastLooked = lastLookPlayerStore[player.id];
        const weaponAngle = weaponAngleStore[player.id];
        let chatMessage = chatMessageStore[player.id];
        const blockMovement = blockMovementStore[player.id];
        const username = usernames[player.id];  
        const clientPlayer = myPlayer[player.id];
        
       
            if (player.id === clientPlayer.socket) {                
                player.health = clientPlayer.health;    
                player.inventory = clientPlayer.inventory;
            }
        
        
        if (player.chatTimer > 1) {

            player.chatTimer -= 20;

        } else {

            chatMessageStore[player.id] = "none";
        }

        if (blockMovement === false) {
            if (inputs.up) {
                player.y -= speed;
            } else if (inputs.down) {
                player.y += speed;
            }
    
            if (inputs.left) {
                player.x -= speed;
            } else if (inputs.right) {
                player.x += speed;
            }
        }      


        player.anim = anim;
        player.lastLooked = lastLooked;
        player.weaponAngle = weaponAngle;
        player.chatMessage = chatMessage;
        player.username = username;
    }

    for (const projectile of projectiles) {

        projectile.x += Math.cos(projectile.angle) * projectileSpeed;
        projectile.y += Math.sin(projectile.angle) * projectileSpeed;
        projectile.timeLeft -= 5;

        for (const player of players) {
            const username = usernames[player.id]; 

            if (player.id === projectile.playerId) continue;
            const distance = Math.sqrt(
                (player.x + 15 - projectile.x) ** 2 + (player.y + 15 - projectile.y) ** 2
                );
                if (distance <= 15) {
                    
                    if (player.health > 1) {
                        player.health -= 1;
                        updateHealth(username, player.health, player.id);
                    } else {
                        player.x = 1280;
                        player.y = 1220;
                        player.health = 3;
                        updateHealth(username, player.health, player.id);
                    }
                    projectile.timeLeft = -1;
                    break;
                }
        }
    }

    projectiles = projectiles.filter((projectile) => projectile.timeLeft > 0);

    io.emit('players', players);
    io.emit("projectiles", projectiles);
}

async function updateHealth(username, health, id) {    
    const playerHealth = await Player.findOneAndUpdate({username: username}, {health: health}, {new: true});    
    myPlayer[id].health = playerHealth.health;
    console.log()
}

async function main() {

    await mongoose.connect( 'mongodb://0.0.0.0:27017/arcany', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });  

    io.on('connect', (socket) => {
        console.log("socket", socket.id)

        inputsMap[socket.id] = {
            up: false,
            down: false,
            left: false,
            right: false,
        };

        animPlayerStore[socket.id] = "idleRight";
        lastLookPlayerStore[socket.id] = "right";
        weaponAngleStore[socket.id] = 0;
        chatMessageStore[socket.id] = "none";
        blockMovementStore[socket.id] = false;
        usernames[socket.id] = "none";
        myPlayer[socket.id] = {socket: 0, health: 3}
        inventoryStore[socket.id] = [];
        

        players.push({
            id: socket.id,
            username: "none",
            x: 1280,
            y: 1220,

            health: 3,

            inventory: [],

            anim: false,
            lastLooked: "right",

            weaponAngle: 0,

            chatMessage: "none",
            blockMovement: false,
            chatTimer: 0,
            
        });

        socket.on("fishing", () => {
            const sardin = {
                type: "fish",
                name: "sardin",
                value: 1,
                image: "./inventory/sarding.png",
                    };
            const ballo = {
                 type: "fish",
                 name: "ballo",
                 value: 3,
                 image: "./inventory/ballo.jpg",
                    };
            const number = Math.floor(Math.random() * (100 - 1 + 1) + 1);

            async function fishing() {
                const player = await Player.findOne({socket: socket.id}).exec();
                if (player.inventory.length <= 11) {

                    if (number < 80) {
                        player.inventory.push(sardin);
                    } else {
                        player.inventory.push(ballo);
                    }
        
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
    
                    myPlayer[socket.id] = player;
                }
              }
              fishing();
        });

        socket.on("loginInfo", (info) => {
            const username = info.username;
            const password = info.password;
            const id = socket.id;
            const action = info.action;

            async function playerLogin() {
                const playerData = await Player.findOne({username: username}).exec();
    
                if (playerData && playerData.password === password) {
                    const newPlayerData = await Player.findOneAndUpdate({username: username}, {socket: id}, {new: true});   
                    usernames[socket.id] = username;  
                    myPlayer[socket.id] = newPlayerData;      
                    inventoryStore[socket.id] = myPlayer[socket.id];

                    const loginAttempt = "success";
                    io.to(id).emit('loginAttempt', loginAttempt);

                    // const frog = {
                    //     type: "food",
                    //     name: "frog",
                    //     value: 2,
                    //     image: "./inventory/commonFrog.png",
                    // };

                    // const inventoryArray = await Player.findOne({username: username}).exec();
                    // inventoryArray.inventory.push(frog);

                    // await Player.findOneAndUpdate({username: username}, {inventory: inventoryArray.inventory}, {new: true});

                } else if (playerData && playerData.password !== password) { 
                    const loginAttempt = "failed";
                    io.to(id).emit('loginAttempt', loginAttempt); 
                }             
            };
            async function playerCreate() {   
                const playerData = await Player.findOne({username: username}).exec();
                
                if (!playerData) {
                    const newPlayerData = await Player.create({username: username, password: password, socket: id}, {new: true});
                    usernames[socket.id] = username;  
                    myPlayer[socket.id] = newPlayerData;

                    const loginAttempt = "success";
                    io.to(id).emit('loginAttempt', loginAttempt); 
                } else if (playerData) { 
                    const loginAttempt = "existing";
                    io.to(id).emit('loginAttempt', loginAttempt); 
                }     
            };
            
            if (action === "login") {
                playerLogin();
            }
            else if (action === "create") {
                playerCreate();
            };
        });
    
        socket.on("inputs", (inputs) => {
            inputsMap[socket.id] = inputs;
        });

        socket.on("animPlayer", (animPlayerSocket) => {
            animPlayerStore[socket.id] = animPlayerSocket;            
        });

        socket.on("lastLookPlayer", (lastLookPlayer) => {                    
            lastLookPlayerStore[socket.id] = lastLookPlayer;  
        });

        socket.on("weaponAngle", (weaponAngle) => {                    
            weaponAngleStore[socket.id] = weaponAngle;  
        });

        socket.on("chatMessage", (chatMessage) => {                    
            chatMessageStore[socket.id] = chatMessage; 
            
            for (const player of players) {
                if (player.id === socket.id) {
                    player.chatTimer = 5000;                    
                }
            }         
        });
        
        socket.on("blockMovement", (blockMovement) => {                    
            blockMovementStore[socket.id] = blockMovement;  
        });

        socket.on("projectile", (angle) => {  
            const player = players.find(player => player.id === socket.id)                  
            projectiles.push({
                angle,
                x: player.x + 20,
                y: player.y + 50,
                timeLeft: 200,
                playerId: socket.id,
            }) 
        });

        socket.on("disconnect", () => {
            players = players.filter((player) => player.id !== socket.id);
        })
    });
    
    app.use(express.static( 'public' ));

    const PORT  = process.env.PORT || 3000;
    
    httpServer.listen(PORT );
    
    let lastUpdate = Date.now();
    setInterval(() => {
        const now = Date.now();
        const delta = now - lastUpdate;
        tick(delta);
        lastUpdate = now;        
    }, 1000 / tickRate);
}

main();
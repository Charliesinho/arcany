const express = require( 'express' );
const mongoose = require( 'mongoose' );

const { createServer } = require( 'http' );
const { Server } = require( 'socket.io' );

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const db = mongoose.connection;
    db.on("MONGO ERROR:", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");    
    });

const Player = require( './playerSchema.js' );
const { NONAME } = require('dns');

const tickRate = 60;
const speed = 5.5;
const projectileSpeed = 25;

let players = [];
const enemies = [];
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
                player.souls = clientPlayer.souls;
                player.artifacts = clientPlayer.artifacts;

                player.weapon = clientPlayer.weapon;
                player.armor = clientPlayer.armor;
                player.artifact = clientPlayer.artifact;

                player.fishingLevel = clientPlayer.fishing;
            }
        
        
        if (player.chatTimer > 1) {

            player.chatTimer -= 20;

        } else {

            chatMessageStore[player.id] = "none";
        }

        // if (blockMovement === false) {
        //     if (inputs.up) {
        //         player.y -= speed;
        //     } else if (inputs.down) {
        //         player.y += speed;
        //     }
    
        //     if (inputs.left) {
        //         player.x -= speed;
        //     } else if (inputs.right) {
        //         player.x += speed;
        //     }
        // }      


        player.anim = anim;
        player.lastLooked = lastLooked;
        player.weaponAngle = weaponAngle;
        player.chatMessage = chatMessage;
        player.username = username;

        if (player.invincible) {
            player.iFrames--;
            if (player.iFrames <= 0) {
                player.iFrames = 75;
                player.invincible = false;
            }
        }
    }

    for (const enemy of enemies) {

        if (enemy.enabled) {
            if (enemy.x > enemy.nextTarget.x) {
                enemy.x -= enemy.speed;
            } else if (enemy.x < enemy.nextTarget.x) {
                enemy.x += enemy.speed;
            } 
    
            if (enemy.y > enemy.nextTarget.y) {
                enemy.y -= enemy.speed;
            } else if (enemy.y < enemy.nextTarget.y) {
                enemy.y += enemy.speed;
            } 
    
            enemy.nextTargetCount--;
            if (enemy.nextTargetCount <= 0) {
                enemy.nextTarget = slimeGetRandomCoords(enemy.originX, enemy.originY);
                enemy.nextTargetCount = 100;
            }

            for (const player of players) {
                const username = usernames[player.id]; 
                const distance = Math.sqrt(
                    (player.x + 15 - enemy.x) ** 2 + (player.y + 15 - enemy.y) ** 2
                    );
                    if (distance <= 15 && !player.invincible) {
                        
                        if (player.health > 1) {
                            player.health -= 1;
                            updateHealth(username, player.health, player.id);
                        } else {
                            player.x = 1280;
                            player.y = 1220;
                            player.health = 3;
                            updateHealth(username, player.health, player.id);
                        }
                        player.invincible = true;
                        break;
                    }
                }
        } else {
            enemy.disabledTimer--;
            if (enemy.disabledTimer <= 0) {
                enemy.disabledTimer = 500;
                enemy.enabled = true;
            }
        }

        io.emit("enemies", enemies);
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

        for (const enemy of enemies)
        {
            const distance = Math.sqrt(
                (enemy.x + 20 - projectile.x) ** 2 + (enemy.y + 20 - projectile.y) ** 2
                );
                if (distance <= 20) {
                    
                    if (enemy.health > 1) {
                        enemy.health -= 1;
                        updateEnemyHealth(enemy);
                    } else {
                        enemy.enabled = false;
                        enemy.health = 4;
                        updateEnemyHealth(enemy);
                    }
                    projectile.timeLeft = -1;
                    break;
                }
        }
    }

    projectiles = projectiles.filter((projectile) => projectile.timeLeft > 0);

    io.emit("enemies", enemies);
    io.emit('players', players);
    io.emit("projectiles", projectiles);
}

setInterval(tick, 16.67);

async function updateHealth(username, health, id) {    
    const playerHealth = await Player.findOneAndUpdate({username: username}, {health: health}, {new: true}); 
    if (playerHealth) {
        myPlayer[id].health = playerHealth.health;
    }
}
async function updateEnemyHealth(enemy) {    
    const updateEnemy = enemies.indexOf(enemy);
    updateEnemy.health -= 1;
}

async function main() {

    await mongoose.connect( 'mongodb+srv://Cfroz:Charlie12345!@cluster0.qbivfie.mongodb.net/', {
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
        myPlayer[socket.id] = {socket: 0, health: 3, weapon: [], artifact: [], souls: [], artifacts: [],  fishing: 0}
        inventoryStore[socket.id] = [];
        

        players.push({
            id: socket.id,
            username: "none",
            x: 2880,
            y: 3568,

            health: 3,
            fishingLevel: 0,

            inventory: [],
            weapon: [],
            armor: [],
            artifact: [],
            souls: [],
            artifacts: [],

            anim: false,
            lastLooked: "right",

            weaponAngle: 0,

            chatMessage: "none",
            blockMovement: false,
            chatTimer: 0,

            iFrames: 75,
            invincible: false,
            
        });

        socket.on("playerLocation", (playerLocation) => {
            async function locate() {
            for (const player of players) {
                if (player.id === socket.id) {
                      player.x = playerLocation[0];
                      player.y = playerLocation[1];
                    //   console.log("recieving:", playerLocation[0])
                }
            }
            }
            locate()
        })

        socket.on("fishing", () => {

            //Level 1

            const sardin = {
                type: "fish",
                name: "sardin",
                value: 1,
                image: "./inventory/sarding.png",
            };
            const stick = {
                type: "weapon",
                name: "stick",
                value: 2,
                image: "./inventory/stick.png",
            };

            //Level 2

            const ballo = {
                 type: "fish",
                 name: "ballo",
                 value: 3,
                 image: "./inventory/ballo.jpg",
            };
            
            //Level 3

            const bass = {
                type: "fish",
                name: "bass",
                value: 5,
                image: "./inventory/bass.png",
            };

             //Level 5

             const octopus = {
                type: "fish",
                name: "octopus",
                value: 5,
                image: "./inventory/octopus.png",
            };
                 

            const number = Math.floor(Math.random() * (100 - 1 + 1) + 1);

            async function fishing() {

                const player = await Player.findOne({socket: socket.id}).exec();

                let fishingLevelNum = Math.trunc(player.fishing / 1000);
                
                if (player.inventory.length <= 8) {

                    //Level 1

                    if (fishingLevelNum < 1) {

                        if (number < 80) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                        }
                    }

                    //Level 2

                    else if (fishingLevelNum < 3) {

                        if (number < 80) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 
                        
                        else if (number < 90) {
                            player.inventory.push(ballo);
                            io.to(socket.id).emit('obtained', ballo);
                            const fishingLevel = player.fishing + 500;
                            player.fishing += 500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 
                        
                        else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                        }
                    }

                    //Level 3

                    else if (fishingLevelNum < 6) {

                        if (number < 50) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 
                        
                        else if (number < 75) {
                            player.inventory.push(ballo);
                            io.to(socket.id).emit('obtained', ballo);
                            const fishingLevel = player.fishing + 500;
                            player.fishing += 500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 

                        else if (number < 85) {
                            player.inventory.push(bass);
                            io.to(socket.id).emit('obtained', bass);
                            const fishingLevel = player.fishing + 1000;
                            player.fishing += 1000;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 
                        
                        else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                        }
                    }

                    //Level 4

                    else if (fishingLevelNum < 12 || fishingLevelNum >= 12) {

                        if (number < 20) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 
                        
                        else if (number < 50) {
                            player.inventory.push(ballo);
                            io.to(socket.id).emit('obtained', ballo);
                            const fishingLevel = player.fishing + 500;
                            player.fishing += 500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 

                        else if (number < 87) {
                            player.inventory.push(bass);
                            io.to(socket.id).emit('obtained', bass);
                            const fishingLevel = player.fishing + 1000;
                            player.fishing += 1000;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 

                        else if (number < 97) {
                            player.inventory.push(octopus);
                            io.to(socket.id).emit('obtained', octopus);
                            const fishingLevel = player.fishing + 1500;
                            player.fishing += 1500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true});
                        } 
                        
                        else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                        }
                    }
        
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});

                    myPlayer[socket.id] = player;
                }
              }
              fishing();
        });

        socket.on("consumable", (item) => {
            async function consume() {
                const player = await Player.findOne({socket: socket.id}).exec();

                if (item.type === "soul") {
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;

                    if (item.name === "warrior") {
                        let arraySoul = [item];
                        myPlayer[socket.id].armor = arraySoul;
                        await Player.findOneAndUpdate({socket: socket.id}, {armor:  myPlayer[socket.id].armor}, {new: true});
                    }
                } else if (item.type === "artifact") {
                    //await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;

                    if (item.name === "rags") {
                        let arrayArtifacts = [item];
                        myPlayer[socket.id].artifact = arrayArtifacts;
                        await Player.findOneAndUpdate({socket: socket.id}, {artifact:  myPlayer[socket.id].artifact}, {new: true});
                    }
                } else {
                    player.inventory.splice(item.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;      
                    
                    if (item.name === "stick") {
                        let arrayWeapon = [item];
                        myPlayer[socket.id].weapon = arrayWeapon;
                        await Player.findOneAndUpdate({socket: socket.id}, {weapon:  arrayWeapon}, {new: true});
                    }
                    
                    if (item.name === "bass" || item.name === "octopus") {
                        myPlayer[socket.id].health = 3;
                        await Player.findOneAndUpdate({socket: socket.id}, {health:  myPlayer[socket.id].health}, {new: true});
                    }

                    if (myPlayer[socket.id].health < 2) {
    
                        if (item.name === "ballo") {
                            myPlayer[socket.id].health += 2;
                            await Player.findOneAndUpdate({socket: socket.id}, {health:  myPlayer[socket.id].health}, {new: true});
                        }

                    }

                    if (myPlayer[socket.id].health < 3) {
    
                        if (item.name === "sardin") {
                            myPlayer[socket.id].health += 1;
                            await Player.findOneAndUpdate({socket: socket.id}, {health:  myPlayer[socket.id].health}, {new: true});
                        }

                        if (item.name === "ballo") {
                            myPlayer[socket.id].health += 1;
                            await Player.findOneAndUpdate({socket: socket.id}, {health:  myPlayer[socket.id].health}, {new: true});
                        }
                    }
    
                }
              };
              consume()
        });

        socket.on("unequip", (equipment) => {
            async function unequip() {

                if (equipment.type === "soul") {
                    const player = await Player.findOne({socket: socket.id}).exec();
    
                    player.souls = [equipment];
                    player.armor.splice(equipment.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {armor: player.armor}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {souls: player.souls}, {new: true});
    
                    myPlayer[socket.id] = player;   
                } else if (equipment.type === "artifact") {
                    const player = await Player.findOne({socket: socket.id}).exec();
    
                    player.artifact.splice(equipment.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {artifact: player.artifact}, {new: true});
    
                    myPlayer[socket.id] = player;   
                } else {
                    const player = await Player.findOne({socket: socket.id}).exec();
    
                    player.inventory.push(equipment);
                    player.weapon.splice(equipment.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {weapon: player.weapon}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
    
                    myPlayer[socket.id] = player;      
                } 
                
              };
              unequip()
        })

        socket.on("toDelete", (arrayOfIndexes) => {
            async function deleteItems() {

                if (arrayOfIndexes.length !== 0) {
                    const player = await Player.findOne({socket: socket.id}).exec();
                    
                    let playerInventory =  player.inventory;
                    arrayOfIndexes.sort((a, b) => b - a);

                    arrayOfIndexes.forEach(index => {
                        playerInventory.splice(index, 1); 
                      });

                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: playerInventory}, {new: true});
    
                    myPlayer[socket.id] = player;      
                } 
              };
              deleteItems()
        })

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

                    const baseSoul = {
                        name: "warrior",
                        image: "./inventory/warriorSoul.png",
                        type: "soul",
                    }

                    const baseCape = {
                        name: "rags",
                        image: "./inventory/baseCape.png",
                        type: "artifact",
                    }
                    await Player.findOneAndUpdate({socket: socket.id}, {souls: [baseSoul]}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {artifacts: [baseCape]}, {new: true});
                    const playerData = await Player.findOne({username: username}).exec();

                    myPlayer[socket.id] = playerData;
                    

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

        socket.on("loadEnemies", (_enemies) => {
            const newEnemy = {
                damage: 0,
                health: 3,
                width: 100,
                height: 100,
                img: "slime.png",
                speed: 2,
                spriteSheetAmt: 4,
                type: "slime",
                x: 1000,
                y: 1000,
                originX: 1000,
                originY: 1000,
                nextTarget: {x: 1100, y: 1100},
                nextTargetCount: 100,
                enabled: true,
                disabledTimer: 500,
            }

            enemies.push(newEnemy)

            enemies[socket.id] = enemies;
        })
    
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

    const PORT  = process.env.PORT || 5000;

    httpServer.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    
    let lastUpdate = Date.now();
    setInterval(() => {
        const now = Date.now();
        const delta = now - lastUpdate;
        //tick(delta);
        lastUpdate = now;        
    }, 1000 / tickRate);
}

function slimeGetRandomCoords(originX, originY) {
    let newCoords = {
        x: Math.floor(Math.random() * ((originX - 500) - (originX + 500)) + (originX + 500)),
        y: Math.floor(Math.random() * ((originY - 500) - (originY + 500)) + (originY + 500))
    }
    return newCoords;
}

main();
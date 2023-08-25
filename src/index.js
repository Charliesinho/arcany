const express = require( 'express' );

const { createServer } = require( 'http' );
const { Server } = require( 'socket.io' );

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const tickRate = 50;
const speed = 2.5;
const projectileSpeed = 15;

let timeout;

let players = [];
const inputsMap = {};
let animPlayerStore = {};
let lastLookPlayerStore = {};
let projectiles = [];
let weaponAngleStore = {};
let chatMessageStore = {};
let blockMovementStore = {};

function tick(delta) {
    for (const player of players) {
        const inputs = inputsMap[player.id];
        const anim = animPlayerStore[player.id];
        const lastLooked = lastLookPlayerStore[player.id];
        const weaponAngle = weaponAngleStore[player.id];
        const chatMessage = chatMessageStore[player.id];
        const blockMovement = blockMovementStore[player.id];

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
    }

    for (const projectile of projectiles) {
        projectile.x += Math.cos(projectile.angle) * projectileSpeed;
        projectile.y += Math.sin(projectile.angle) * projectileSpeed;
        projectile.timeLeft -= delta;

        for (const player of players) {
            if (player.id === projectile.playerId) continue;
            const distance = Math.sqrt(
                (player.x + 15 - projectile.x) ** 2 + (player.y + 15 - projectile.y) ** 2
                );
                if (distance <= 15) {
                    player.x = 1280;
                    player.y = 1220;
                    projectile.timeLeft = -1;
                    break;
                }
        }
    }

    projectiles = projectiles.filter((projectile) => projectile.timeLeft > 0);

    io.emit('players', players);
    io.emit("projectiles", projectiles);
}

async function main() {
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

        players.push({
            id: socket.id,
            x: 1280,
            y: 1220,

            anim: false,
            lastLooked: "right",

            weaponAngle: 0,

            chatMessage: "none",
            blockMovement: false,
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
            
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                chatMessageStore[socket.id] = "none";
            }, 5000);
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
    },tick, 1000 / tickRate);
}

main();
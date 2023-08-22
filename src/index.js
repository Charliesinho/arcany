const express = require( 'express' );

const { createServer } = require( 'http' );
const { Server } = require( 'socket.io' );

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const tickRate = 60;
const speed = 3.5;

let players = [];
const inputsMap = {};
let animPlayerStore = {};
let lastLookPlayerStore = {};

function tick() {
    for (const player of players) {
        const inputs = inputsMap[player.id];
        const anim = animPlayerStore[player.id];
        const lastLooked = lastLookPlayerStore[player.id];
        // console.log(lastLooked)

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

        player.anim = anim;
        player.lastLooked = lastLooked;
    }

    io.emit('players', players);
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

        players.push({
            id: socket.id,
            x: 180,
            y: 320,
            anim: false,
            lastLooked: "right",
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

        socket.on("disconnect", () => {
            players = players.filter((player) => player.id !== socket.id);
        })
    });
    
    app.use(express.static( 'public' ));
    
    httpServer.listen(3000);

    setInterval(tick, 1000 / tickRate);
}

main();
const mapLobby = new Image();
mapLobby.src = "lobby.png"

const character = new Image();
character.src = "player.png"

const canvasLobby = document.getElementById('canvas-lobby');
canvasLobby.width = window.innerWidth;
canvasLobby.height = window.innerHeight;

const canvas = canvasLobby.getContext("2d");

const socket = io(`ws://localhost:3000`);

let players = [];

socket.on("connect", () => {
    console.log("connected");
})

socket.on('players', (serverPlayers) => {
    players = serverPlayers;
})

const inputs = {
    up: false,
    down: false,
    left: false,
    right: false,
  };
let animPlayer = "idleRight";
let lastLookPlayer = "right";
  
  window.addEventListener("keydown", (e) => {
    if (e.key === "w") {
      inputs["up"] = true;
    } else if (e.key === "s") {
      inputs["down"] = true;
    } else if (e.key === "d") {
      inputs["right"] = true;
      animPlayer = "runRight";
      lastLookPlayer = "right";
    } else if (e.key === "a") {
      inputs["left"] = true;
      animPlayer = "runLeft";
      lastLookPlayer = "left";
    }
    
    socket.emit("inputs", inputs);
    socket.emit("animPlayer", animPlayer);
    socket.emit("lastLookPlayer", lastLookPlayer);
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "w") {
      inputs["up"] = false;
    } else if (e.key === "s") {
      inputs["down"] = false;
    } else if (e.key === "d") {
      inputs["right"] = false;
    } else if (e.key === "a") {
      inputs["left"] = false;
    }
     if (inputs["up"] === false &&
     inputs["down"] === false &&
     inputs["right"] === false && 
     inputs["left"] === false) {
        animPlayer = "idleRight";
     }
     
    socket.emit("inputs", inputs);
    socket.emit("animPlayer", animPlayer);
  });

  let playerSpriteWidth = character.width / 6;
  let playerSpriteHeight = character.height / 4;
  const playerWidth = character.width / 6;
  const playerHeight = character.height / 4;
  let framesPlayerTotal = 4;
  let frameCurrentPlayer = 0;
  let playerCutX = 0;
  let playerCutY = 0;
  let playerFramesDrawn = 0;

function canvasLobbyLoop() {
    canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);
    canvas.imageSmoothingEnabled = false

    const myPlayer = players.find((player) => player.id === socket.id);
    let cameraX = 0;
    let cameraY = 0;
    if (myPlayer) {
        cameraX = myPlayer.x - canvasLobby.width / 2;
        cameraY = myPlayer.y - canvasLobby.height / 2 + 100;
    }

    canvas.drawImage(mapLobby, -150 - cameraX, -180 - cameraY, 3000, 3000);

    for (const player of players) {
        if (player.anim === "idleRight" && player.lastLooked === "right") {
            frameCurrentPlayer = frameCurrentPlayer % 4;
            playerCutX = frameCurrentPlayer * playerWidth;
            canvas.drawImage(character, playerCutX, playerCutY, playerWidth, playerHeight, player.x - cameraX -30, player.y - cameraY, playerWidth - 510, playerHeight - 510);
        }
        if (player.anim === "idleRight" && player.lastLooked === "left") {
            frameCurrentPlayer = frameCurrentPlayer % 4;
            playerCutX = frameCurrentPlayer * playerWidth;
            canvas.drawImage(character, playerCutX, playerCutY +600, playerWidth, playerHeight, player.x - cameraX -30, player.y - cameraY, playerWidth - 510, playerHeight - 510);
        }
        if (player.anim === "runRight") {
            frameCurrentPlayer = frameCurrentPlayer % 6;
            playerCutX = frameCurrentPlayer * playerWidth;
            canvas.drawImage(character, playerCutX, playerCutY +1200, playerWidth, playerHeight, player.x - cameraX -30, player.y - cameraY, playerWidth - 510, playerHeight - 510);
        }
        if (player.anim === "runLeft") {
            frameCurrentPlayer = frameCurrentPlayer % 6;
            playerCutX = frameCurrentPlayer * playerWidth;
            canvas.drawImage(character, playerCutX, playerCutY +1800, playerWidth, playerHeight, player.x - cameraX -30, player.y - cameraY, playerWidth - 510, playerHeight - 510);
        }
    };

    playerFramesDrawn++;
    if(playerFramesDrawn >= 8) {
        frameCurrentPlayer++;
        playerFramesDrawn = 0;
    }


    window.requestAnimationFrame(canvasLobbyLoop);
}
window.requestAnimationFrame(canvasLobbyLoop);



const mapLobby = new Image();
mapLobby.src = "lobby.png";

const character = new Image();
character.src = "player.png";

const canvasLobby = document.getElementById("canvas-lobby");
canvasLobby.width = window.innerWidth;
canvasLobby.height = window.innerHeight;

const canvas = canvasLobby.getContext("2d");

const socket = io(`ws://localhost:3000`);

let players = [];
let projectiles = [];

let cameraShakeX = -150;
let cameraShakeY = -180;

function cameraShake() {
    let counter = 0;
    const interval = setInterval(function() {
        if (counter > 3) {
            cameraShakeX = -150;
            cameraShakeY = -180;
            clearInterval(interval);
            return;
        }
        counter++;
        cameraShakeX = Math.floor(Math.random() * (-140 - -160 + 1)) + -160;
        cameraShakeY = Math.floor(Math.random() * (-170 - -190 + 1)) + -190;
        console.log("shakey")
    }, 30)
    
}

socket.on("connect", () => {
  console.log("connected");
});

socket.on("players", (serverPlayers) => {
  players = serverPlayers;
});

socket.on("projectiles", (serverProjectiles) => {
  projectiles = serverProjectiles;
});

const inputs = {
  up: false,
  down: false,
  left: false,
  right: false,
};
let animPlayer = "idleRight";
let lastLookPlayer = "right";
let angleMouse;

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
  if (
    inputs["up"] === false &&
    inputs["down"] === false &&
    inputs["right"] === false &&
    inputs["left"] === false
  ) {
    animPlayer = "idleRight";
  }

  socket.emit("inputs", inputs);
  socket.emit("animPlayer", animPlayer);
});
window.addEventListener("click", (e) => {
  const angle = Math.atan2(
    e.clientY - canvasLobby.height / 2,
    e.clientX - canvasLobby.width / 2
  );
  socket.emit("projectile", angle);
  cameraShake();
});
window.addEventListener("mousemove", (e) => {
    angleMouse = Math.atan2(
      e.clientY - canvasLobby.height / 2,
      e.clientX - canvasLobby.width / 2
    );
    socket.emit("weaponAngle", angleMouse);
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
  canvas.imageSmoothingEnabled = false;

  const myPlayer = players.find((player) => player.id === socket.id);
  let cameraX = 0;
  let cameraY = 0;
  if (myPlayer) {
    cameraX = myPlayer.x - canvasLobby.width / 2;
    cameraY = myPlayer.y - canvasLobby.height / 2 + 100;
  }

  canvas.drawImage(mapLobby, cameraShakeX - cameraX, cameraShakeY - cameraY, 3000, 3000);

  for (const player of players) {
    if (player.anim === "idleRight" && player.lastLooked === "right") {
      frameCurrentPlayer = frameCurrentPlayer % 4;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        character,
        playerCutX,
        playerCutY,
        playerWidth,
        playerHeight,
        player.x - cameraX - 30,
        player.y - cameraY,
        playerWidth - 510,
        playerHeight - 510
      );
    }
    if (player.anim === "idleRight" && player.lastLooked === "left") {
      frameCurrentPlayer = frameCurrentPlayer % 4;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        character,
        playerCutX,
        playerCutY + 600,
        playerWidth,
        playerHeight,
        player.x - cameraX - 30,
        player.y - cameraY,
        playerWidth - 510,
        playerHeight - 510
      );
    }
    if (player.anim === "runRight") {
      frameCurrentPlayer = frameCurrentPlayer % 6;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        character,
        playerCutX,
        playerCutY + 1200,
        playerWidth,
        playerHeight,
        player.x - cameraX - 30,
        player.y - cameraY,
        playerWidth - 510,
        playerHeight - 510
      );
    }
    if (player.anim === "runLeft") {
      frameCurrentPlayer = frameCurrentPlayer % 6;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        character,
        playerCutX,
        playerCutY + 1800,
        playerWidth,
        playerHeight,
        player.x - cameraX - 30,
        player.y - cameraY,
        playerWidth - 510,
        playerHeight - 510
      );
    }
    
    canvas.save(); // Save the current canvas state
    canvas.translate(player.x - cameraX +18, player.y - cameraY +50); // Translate to the player's position
    canvas.rotate(player.weaponAngle); // Rotate based on the mouse angle

    canvas.fillStyle = "black"; // Set the fill color to black
    canvas.fillRect(0, -7.5, 60, 15); // Draw the rectangle centered around the rotated point

    canvas.restore(); // Restore the canvas state to what it was before translation and rotation
  }

  for (const projectile of projectiles) {
    canvas.fillStyle = "#fffff";
    canvas.beginPath();
    canvas.arc(
      projectile.x - cameraX,
      projectile.y - cameraY,
      10,
      0,
      2 * Math.PI
    );
    canvas.fill();
  }

  playerFramesDrawn++;
  if (playerFramesDrawn >= 8) {
    frameCurrentPlayer++;
    playerFramesDrawn = 0;
  }

  window.requestAnimationFrame(canvasLobbyLoop);
}
window.requestAnimationFrame(canvasLobbyLoop);

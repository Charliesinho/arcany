const mapLobby = new Image();
mapLobby.src = "lobby.png";

const character = new Image();
character.src = "player.png";

const WeaponStick = new Image();
WeaponStick.src = "stick.png";

const bulletStick = new Image();
bulletStick.src = "bulletStick.png";

const chatBubble = new Image();
chatBubble.src = "chatBubble.png";

const nameBubbleGreen = new Image();
nameBubbleGreen.src = "nameBubbleGreen.png";

const canvasLobby = document.getElementById("canvas-lobby");
canvasLobby.width = window.innerWidth;
canvasLobby.height = window.innerHeight;

const canvas = canvasLobby.getContext("2d");

const socket = io(`ws://localhost:3000`);

let players = [];
let projectiles = [];

let cameraShakeX = -150;
let cameraShakeY = -180;

const chatInput = document.getElementById("chatInput");
let blockMovement = true;
socket.emit("blockMovement", blockMovement);    

const playerInfoCorner = document.getElementById("playerInfoCorner");
const loginBox = document.getElementById("login");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const createButton = document.getElementById("createButton");
const healthImage = document.getElementById("hearts");
const fishingBar = document.getElementById("fishingBar");
const fishingGame = document.getElementById("fishingMinigame");
const inventoryWindow = document.getElementById("inventoryWindow");
const inventorySlots = {
 inventorySlot0: document.querySelector(".inventorySlot0"),
 inventorySlot1: document.querySelector(".inventorySlot1"),
 inventorySlot2: document.querySelector(".inventorySlot2"),
 inventorySlot3: document.querySelector(".inventorySlot3"),
 inventorySlot4: document.querySelector(".inventorySlot4"),
 inventorySlot5: document.querySelector(".inventorySlot5"),
 inventorySlot6: document.querySelector(".inventorySlot6"),
 inventorySlot7: document.querySelector(".inventorySlot7"),
 inventorySlot8: document.querySelector(".inventorySlot8"),
 inventorySlot9: document.querySelector(".inventorySlot9"),
 inventorySlot10: document.querySelector(".inventorySlot10"),
 inventorySlot11: document.querySelector(".inventorySlot11")
};

let shootingBlock = true;

let myPlayer;

chatInput.style.display = "none";
playerInfoCorner.style.display = "none";
fishingGame.style.display = "none";
inventoryWindow.style.visibility = "hidden";

function handleLogin(action) {  
  
  const usernameAttempt = usernameInput.value;
  const passwordAttempt = passwordInput.value;

  const loginInfo = {      
        username: usernameAttempt,      
        password: passwordAttempt,
        action: action,     
  }

  socket.emit("loginInfo", loginInfo);

}

loginButton.addEventListener("click", function(){
  handleLogin("login");
});

createButton.addEventListener("click", function(){
  handleLogin("create");
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (chatInput === document.activeElement) {
            if (chatInput.value) {
                const chatMessage = chatInput.value;
                e.preventDefault();
                socket.emit("chatMessage", chatMessage);           
                chatInput.value = "";  
                chatInput.disabled = true;    
                chatInput.disabled = false;    
                blockMovement = false;
                socket.emit("blockMovement", blockMovement);    
            }
        } else {
            chatInput.focus();
            blockMovement = true;
            socket.emit("blockMovement", blockMovement); 
        }
    }
});

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
    }, 30)
};

function interactInventory(item, index) {
  if (inventorySlots[`inventorySlot${index}`].style.background !== "none") {
    if(consumeAvailable === true) {
      
      consumeAvailable = false;

      setTimeout(() => {
        consumeAvailable = true;
      }, 3000);
      const consumable = {
        name: item.name,
        index: index
      }
      inventorySlots[`inventorySlot${index}`].style.background = `none`;
      inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));

      if(item.type === "fish" || item.type === "food") {
        socket.emit("consumable", consumable);                      
      }
    }
  }
};

let consumeAvailable = true;

socket.on("connect", (socket) => {
  console.log("connected");
});

socket.on("players", (serverPlayers) => {
  players = serverPlayers;
  myPlayer = players.find((player) => player.id === socket.id);

  if (myPlayer.health === 3) {
    healthImage.src = "./fullHearts.png";
  } else if (myPlayer.health === 2) {
    healthImage.src = "./halfHearts.png";
  } else if (myPlayer.health === 1) {
    healthImage.src = "./emptyHearts.png";
  }
 
 
  inventorySlots[`inventorySlot0`].style.background = `none`;
  if(myPlayer.inventory.length !== 0) {
    for (const item of myPlayer.inventory) {
        const index = myPlayer.inventory.indexOf(item);      
        inventorySlots[`inventorySlot${index}`].style.background = `url(${item.image})`;
        inventorySlots[`inventorySlot${index}`].style.backgroundSize = 'cover';
        inventorySlots[`inventorySlot${index + 1}`].style.background = `none`;

        inventorySlots[`inventorySlot${index}`].addEventListener("mousedown", (e) => interactInventory(item, index));           
    };
  }
});

socket.on("projectiles", (serverProjectiles) => {
  projectiles = serverProjectiles;
});

socket.on("loginAttempt", (msg) => { 

  if(msg === "success") {
    loginBox.style.display = "none";
    loginButton.style.display = "none";
    createButton.style.display = "none";
    chatInput.style.display = "block";
    playerInfoCorner.style.display = "block";
    inventoryWindow.style.visibility = "visible";
  
    blockMovement = false;
    socket.emit("blockMovement", blockMovement);  

    shootingBlock = false;
  } else if (msg === "failed") {
    passwordInput.style.background = "#ff5471";
    passwordInput.style.color = "white";
  } else if (msg === "existing") {
    usernameInput.style.background = "#ff5471";
    usernameInput.style.color = "white";       
  }
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

let mainSkillCooldown = 0;

let fishing = false;
let width = 1;

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

  //Fishing Minigame
  if(e.key === "e" && fishAvailable === true && fishing === false) {

    fishingGame.style.display = "block";
    fishing = true;    

    const number = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000);

    function fishingStart() {

      const interval = setInterval(() => {
        width += 1;        
        if (width < 100) {
          fishingBar.style.width = width + "%";
        } else {
          width = 1;
          clearInterval(interval);
          fishing = false;
          fishingBar.style.width = width + "%";;
          fishingGame.style.display = "none";
        }       
      }, 5);

    };

    setTimeout(() => {
      fishingStart();      
    }, number);

    
  };
  if(e.key === "e" && fishAvailable === true && fishing === true) {
    if (width < 90 && width > 70) {
      socket.emit("fishing", "trying");
      width = 100;
    };
  }
   //Fishing Minigame
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
window.addEventListener("mousedown", (e) => {
  if (shootingBlock === false) {
    if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {
        const angle = Math.atan2(
          e.clientY - canvasLobby.height / 2,
          e.clientX - canvasLobby.width / 2
        );
        socket.emit("projectile", angle);
        cameraShake();

        const interval = setInterval(() => {
            if (mainSkillCooldown > 10) {
                mainSkillCooldown = 0;
                clearInterval(interval);
            }
            mainSkillCooldown++;
        }, 50);
    }
  }
});
window.addEventListener("mousemove", (e) => {
    angleMouse = Math.atan2(
      e.clientY - canvasLobby.height / 2,
      e.clientX - canvasLobby.width / 2
    );
    socket.emit("weaponAngle", angleMouse);
  });

//Player Animation
let playerSpriteWidth = character.width / 6;
let playerSpriteHeight = character.height / 4;
const playerWidth = character.width / 6;
const playerHeight = character.height / 4;
let framesPlayerTotal = 4;
let frameCurrentPlayer = 0;
let playerCutX = 0;
let playerCutY = 0;
let playerFramesDrawn = 0;
//Player Animation

//Fishing Area
let fishingArea = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0,
};
let fishAvailable = false;
//Fishing Area

function canvasLobbyLoop() {
  canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);
  canvas.imageSmoothingEnabled = false;

  let cameraX = 0;
  let cameraY = 0;
  if (myPlayer) {
    cameraX = myPlayer.x - canvasLobby.width / 2;
    cameraY = myPlayer.y - canvasLobby.height / 2 + 100;

    if (myPlayer.x > fishingArea.minX && 
        myPlayer.x < fishingArea.maxX &&
        myPlayer.y > fishingArea.minY && 
        myPlayer.y < fishingArea.maxY) {
          fishAvailable = true;
      } else {
          fishAvailable = false;
      };

  }

  canvas.drawImage(mapLobby, cameraShakeX - cameraX, cameraShakeY - cameraY, 3000, 3000);
  
  //Fishing Area
  fishingArea.minX = cameraShakeX - cameraX + 1500;
  fishingArea.minY = cameraShakeY - cameraY + 1800;
  fishingArea.maxX = fishingArea.minX + 580;
  fishingArea.maxY = fishingArea.minY + 1000;
  //Fishing Area

  for (const player of players) {

    //Movement
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
    //Movement
    
    // Weapon
    canvas.save(); // Save the current canvas state
    canvas.translate(player.x - cameraX +18, player.y - cameraY +50); // Translate to the player's position
    canvas.rotate(player.weaponAngle); // Rotate based on the mouse angle
    canvas.drawImage(WeaponStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
    canvas.restore(); // Restore the canvas state to what it was before translation and rotation
    // Weapon

    //Chat
    if (player.chatMessage !== "none") {
        canvas.drawImage(chatBubble, player.x - cameraX -85, player.y - cameraY -100, 200, 60)
    
        canvas.font = "bolder 14px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "gray";
        canvas.fillText(player.chatMessage, player.x - cameraX +15, player.y - cameraY -70);
    }
    //Chat

    //Username
        canvas.drawImage(nameBubbleGreen, player.x - cameraX -33, player.y - cameraY -26, 80,23)
    
        canvas.font = "bolder 14px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "gray";
        canvas.fillText(player.username, player.x - cameraX +15, player.y - cameraY -10);
    //Username
}

  for (const projectile of projectiles) {
    canvas.drawImage(bulletStick, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
    // canvas.beginPath();
    // canvas.arc(
    //   projectile.x - cameraX,
    //   projectile.y - cameraY,
    //   10,
    //   0,
    //   2 * Math.PI
    // );
    // canvas.fill();
  }

  playerFramesDrawn++;
  if (playerFramesDrawn >= 8) {
    frameCurrentPlayer++;
    playerFramesDrawn = 0;
  }

  window.requestAnimationFrame(canvasLobbyLoop);
}
window.requestAnimationFrame(canvasLobbyLoop);

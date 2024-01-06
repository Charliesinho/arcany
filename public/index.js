const mapLobby = new Image();
mapLobby.src = "lobby.png";

const character = new Image();
character.src = "player.png";

const slime = new Image();
slime.src = "slime.png";

const WeaponStick = new Image();
WeaponStick.src = "stick.png";

const bulletStick = new Image();
bulletStick.src = "bulletStick.png";

const chatBubble = new Image();
chatBubble.src = "chatBubble.png";

const nameBubbleGreen = new Image();
nameBubbleGreen.src = "nameBubbleGreen.png";

const canvasLobby = document.getElementById("canvas-lobby");
const widthMinus20vw = window.innerWidth - (20 * window.innerWidth / 100);
canvasLobby.width = widthMinus20vw;
canvasLobby.height = window.innerHeight;

const canvas = canvasLobby.getContext("2d");

const socket = io(`ws://localhost:3000`);
const socket = io(`https://arcany.up.railway.app/`);

let players = [];
let enemies = [];
let projectiles = [];

let cameraShakeX = -150;
let cameraShakeY = -180;

const chatInput = document.getElementById("chatInput");
let blockMovement = true;
socket.emit("blockMovement", blockMovement);   

const menuUi = document.getElementById("ui");
menuUi.style.width = window.innerWidth;
menuUi.style.height = window.innerHeight;
const soulImg = document.getElementById("soulImg");
const circleCharacter = document.getElementById("circleCharacter");
const mountainsUi = document.getElementById("mountainsUi");
const usernameMenu = document.getElementById("usernameMenu");

const fishingBarHit = document.getElementById("fishingBarHit");

const body = document.getElementById("body");
const fishingLevel = document.getElementById("fishingLevel");
const obtainedItem = document.querySelector("#obtainedItem");
const uiTop = document.getElementById("uiTop");
const playerInfoCorner = document.getElementById("playerInfoCorner");
const loginBox = document.getElementById("login");
const loginArt = document.getElementById("loginArt");
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
const equippedItems = {
  weapon: document.querySelector(".weaponEquipped"),
  soul: document.querySelector(".soulEquipped"),
}
const soulsInventory = {
  soul1: document.querySelector(".soul1"),
}
const inventorySwitcher = document.querySelector(".inventorySwicther")
const soulsSwitcher = document.querySelector(".soulsSwitcher")
const inventoryWindowShow = document.querySelector(".inventoryHide")
inventoryWindowShow.style.display = "flex"
const soulsWindowShow = document.querySelector(".soulsHide")
soulsWindowShow.style.display = "none";
const deleteButton = document.querySelector(".deleteButton")
const catchGif = document.getElementById("catchGif");

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
  socket.emit("loadEnemies", enemies);
}

loginButton.addEventListener("click", function(){
  handleLogin("login");
});

createButton.addEventListener("click", function(){
  handleLogin("create");
});

uiTop.addEventListener("click", function(){
  menuUi.style.top = "100vh"
  body.style.overflow = "none"
});

playerInfoCorner.addEventListener("click", function(){
  menuUi.style.top = "0vh"
  body.style.overflowY = "hidden"
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

let deleting = false;

inventorySwitcher.addEventListener("click", function () {
  inventoryWindowShow.style.display = "flex";
  soulsWindowShow.style.display = "none";
})

soulsSwitcher.addEventListener("click", function () {
  inventoryWindowShow.style.display = "none";
  soulsWindowShow.style.display = "flex";

  deleting = false;
  inventoryWindowShow.style.background = "var(--backgroundObjects)";
  deleteButton.style.background = "rgb(255, 110, 110)";
})

deleteButton.addEventListener("click", function () {
  if (deleting && inventoryWindowShow.style.display === "flex") {
    deleting = false;
    inventoryWindowShow.style.background = "var(--backgroundObjects)";
    deleteButton.style.background = "rgb(255, 110, 110)";
  } 
  
  else if (deleting === false && inventoryWindowShow.style.display === "flex") {
    deleting = true;
    inventoryWindowShow.style.background = "rgb(255, 72, 121)";
    deleteButton.style.background = "rgb(255, 72, 121)";
  }
})

function interactInventory(item, index) {
  if (item.type !== "soul") {
    if (inventorySlots[`inventorySlot${index}`].style.background !== "none") {
      if(consumeAvailable === true && deleting === false) {
        
        consumeAvailable = false;
  
        setTimeout(() => {
          consumeAvailable = true;
        }, 3000);
  
        const consumable = {
          name: item.name,
          index: index,
          image: item.image,
          type: item.type
        }
        inventorySlots[`inventorySlot${index}`].style.background = `none`;
        inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));
  
        if(item.type === "fish" || item.type === "food") {
          socket.emit("consumable", consumable);                      
        }
  
        if (item.type === "weapon") {
          socket.emit("consumable", consumable);
        }
      }
    }
  } else {

    if(consumeAvailable === true) {
        
      consumeAvailable = false;

      setTimeout(() => {
        consumeAvailable = true;
      }, 3000);

      if (item.name === "warrior") {
        socket.emit("consumable", item);
      }
    }
  }
};

let itemsToDelete = [];
let timeoutDelete;
let deleteSelect = true;

function deleteInventory(item, index) {
  if (item.type !== "soul") {
    if (inventorySlots[`inventorySlot${index}`].style.background !== "none" && deleteSelect && !itemsToDelete.includes(index)) {

        itemsToDelete.push(index);

        deleteSelect = false

        setTimeout(() => {
          deleteSelect = true
        }, 100);

        clearTimeout(timeoutDelete);

        timeoutDelete = setTimeout(() => {
          
          inventorySlots[`inventorySlot0`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot1`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot2`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot3`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot4`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot5`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot6`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot7`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot8`].style.border = `solid 2px black`;

          socket.emit("toDelete", itemsToDelete);
          itemsToDelete = [];
        }, 2000);

        inventorySlots[`inventorySlot${index}`].style.border = `solid 2px white`;
        inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => deleteInventory(item, index));
      
    } else if (itemsToDelete.includes(index) && deleteSelect) {

        let indexItem = itemsToDelete.indexOf(index);

        itemsToDelete.splice(indexItem, 1);
        inventorySlots[`inventorySlot${index}`].style.border = `solid 2px black`;

        deleteSelect = false

        setTimeout(() => {
          deleteSelect = true
        }, 100);

        clearTimeout(timeoutDelete);

        timeoutDelete = setTimeout(() => {
          
          inventorySlots[`inventorySlot0`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot1`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot2`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot3`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot4`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot5`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot6`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot7`].style.border = `solid 2px black`;
          inventorySlots[`inventorySlot8`].style.border = `solid 2px black`;
          
          socket.emit("toDelete", itemsToDelete);
          itemsToDelete = [];
        }, 2000);
    }
  }
};

function interactEquipment (item, index) {

  if(consumeAvailable === true && deleting === false) {

    if (item.type === "weapon") {
      
      if (myPlayer.inventory.length <= 8) {

          consumeAvailable = false;
  
          setTimeout(() => {
            consumeAvailable = true;
          }, 3000);
  
          if (equippedItems[`weapon`].style.background !== "none") {
        
              const equipment = {
                name: item.name,
                index: index,
                image: item.image,
                type: item.type
              }
        
              socket.emit("unequip", equipment);
          }       
      }
    }

    if (item.type === "soul") {

        console.log(consumeAvailable)
        if(consumeAvailable === true) {
        
          consumeAvailable = false;
    
          setTimeout(() => {
            consumeAvailable = true;
          }, 3000);

          if (equippedItems[`soul`].style.background !== "none") {
        
              socket.emit("unequip", item);
          }       
        }
    } 
  }
};

function obtainedAnim (image) {

  obtainedItem.classList.remove('obtainedAnim');
  catchGif.classList.remove('starsAnim');

  setTimeout(() => {
    obtainedItem.style.background = `url(${image})`;
    obtainedItem.style.backgroundSize = "cover"
    obtainedItem.classList.add('obtainedAnim');
    catchGif.classList.add('starsAnim');
  }, 500);
}

let consumeAvailable = true;

socket.on("connect", (socket) => {
  console.log("connected");
});

//Main Player Function

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

  usernameMenu.innerHTML = myPlayer.username;

  let fishingLevelNum = Math.trunc(myPlayer.fishingLevel / 1000);
  
  if (fishingLevelNum < 1) {
    fishingLevel.innerHTML = "1";
  }
  else if (fishingLevelNum < 3) {
    fishingLevel.innerHTML = "2";
  }
  else if (fishingLevelNum < 6) {
    fishingLevel.innerHTML = "3";
  }
  else if (fishingLevelNum < 12) {
    fishingLevel.innerHTML = "4";
  }
  else {
    fishingLevel.innerHTML = "5";
    fishingLevel.style.color = "white"
    fishingLevel.style.textShadow = "0 0 2px white"
  }

  if (myPlayer.souls.length) {
    for (const soul of myPlayer.souls) {
      if (soul.name = "warrior") {
        soulsInventory[`soul1`].style.background = `url(${soul.image})`;
        soulsInventory[`soul1`].style.backgroundSize = 'cover';
        soulsInventory[`soul1`].addEventListener("mousedown", (e) => interactInventory(soul), 0); 
      }
    }
  }

  if (myPlayer.armor.length) {
    for (const item of myPlayer.armor) {
      equippedItems[`soul`].style.background = `url(${item.image})`;
      equippedItems[`soul`].style.backgroundSize = 'cover';
  
      if (item.name === "warrior") {
        soulImg.src = "./souls/basicWarrior.png";
        mountainsUi.style.background = "url(\"./soulsEnviroments/mountains.png\")"
        mountainsUi.style.filter = "blur(2px)";
        mountainsUi.style.backgroundPosition = "center";
        menuUi.style.background = "linear-gradient(hsl(184, 100%, 87%) 0%, rgb(209, 175, 147) 100%)";
        circleCharacter.style.background = ""
        usernameMenu.style.color = "";
        usernameMenu.style.textShadow = "";
      }
    }
  } else {
    soulImg.src = "./souls/souless.png"
    mountainsUi.style.background = "url(\"./soulsEnviroments/desert.png\")"
    mountainsUi.style.filter = "blur(2px) saturate(.3)";
    mountainsUi.style.backgroundPosition = "bottom";
    mountainsUi.style.backgroundRepeat = "no-repeat";
    menuUi.style.background = "linear-gradient(hsl(0, 0%, 100%) 0%, rgb(154, 126, 109) 100%)";
    circleCharacter.style.background = "linear-gradient(rgb(255, 111, 111) 0%, #ff1515 100%)";
    usernameMenu.style.color = "rgb(255, 255, 255)";
    usernameMenu.style.textShadow = "0 0 10px rgb(255, 255, 255)";
  }

  if (myPlayer.armor.length) {
    equippedItems[`soul`].addEventListener("mousedown", (e) => interactEquipment(myPlayer.souls[0]), 0);      
  }  else {
    equippedItems[`soul`].style.background = `none`;
  }

  for (const item of myPlayer.weapon) {
    equippedItems[`weapon`].style.background = `url(${item.image})`;
    equippedItems[`weapon`].style.backgroundSize = 'cover';
  }
  
  if (myPlayer.weapon.length) {
    equippedItems[`weapon`].addEventListener("mousedown", (e) => interactEquipment(myPlayer.weapon[0]), 0);      
  }  else {
    equippedItems[`weapon`].style.background = `none`;
  }
 
  inventorySlots[`inventorySlot0`].style.background = `none`;

  
    
    if (myPlayer.inventory.length !== 0) {
      for (let i = 0; i < myPlayer.inventory.length; i++) {
  
          inventorySlots[`inventorySlot${i}`].style.background = `url(${myPlayer.inventory[i].image})`;
          inventorySlots[`inventorySlot${i}`].style.backgroundSize = '70px';
          inventorySlots[`inventorySlot${i}`].style.backgroundPosition = 'center';
          inventorySlots[`inventorySlot${i}`].style.backgroundRepeat = 'no-repeat';
          if ( inventorySlots[`inventorySlot${i + 1}`]) {
            inventorySlots[`inventorySlot${i + 1}`].style.background = `none`;
          };
          if ( inventorySlots[`inventorySlot${i + 2}`]) {
            inventorySlots[`inventorySlot${i + 2}`].style.background = `none`;
          };
          if ( inventorySlots[`inventorySlot${i + 3}`]) {
            inventorySlots[`inventorySlot${i + 3}`].style.background = `none`;
          };
          if ( inventorySlots[`inventorySlot${i + 4}`]) {
            inventorySlots[`inventorySlot${i + 4}`].style.background = `none`;
          };
          if ( inventorySlots[`inventorySlot${i + 5}`]) {
            inventorySlots[`inventorySlot${i + 5}`].style.background = `none`;
          };
          if ( inventorySlots[`inventorySlot${i + 6}`]) {
            inventorySlots[`inventorySlot${i + 6}`].style.background = `none`;
          };
          if ( inventorySlots[`inventorySlot${i + 7}`]) {
            inventorySlots[`inventorySlot${i + 7}`].style.background = `none`;
          };
          if ( inventorySlots[`inventorySlot${i + 8}`]) {
            inventorySlots[`inventorySlot${i + 8}`].style.background = `none`;
          };

          if (deleting) {
            inventorySlots[`inventorySlot${i}`].addEventListener("mousedown", (e) => deleteInventory(myPlayer.inventory[i], i));      
          } else {
            inventorySlots[`inventorySlot${i}`].addEventListener("mousedown", (e) => interactInventory(myPlayer.inventory[i], i));     
          }
      };
    } else {
      inventorySlots[`inventorySlot0`].style.background = `none`;
      inventorySlots[`inventorySlot1`].style.background = `none`;
      inventorySlots[`inventorySlot2`].style.background = `none`;
      inventorySlots[`inventorySlot3`].style.background = `none`;
      inventorySlots[`inventorySlot4`].style.background = `none`;
      inventorySlots[`inventorySlot5`].style.background = `none`;
      inventorySlots[`inventorySlot6`].style.background = `none`;
      inventorySlots[`inventorySlot7`].style.background = `none`;
      inventorySlots[`inventorySlot8`].style.background = `none`;
    }
  
});

socket.on("enemies", (serverEnemies) => {
  enemies = serverEnemies;
});

socket.on("projectiles", (serverProjectiles) => {
  projectiles = serverProjectiles;
});

socket.on("obtained", (item) => {
  const image = item.image;
  obtainedAnim(image);
});

socket.on("loginAttempt", (msg) => { 

  if(msg === "success") {
    loginBox.style.display = "none";
    loginButton.style.display = "none";
    createButton.style.display = "none";
    loginArt.style.display = "none";
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
let width = 20;
let marginFish = -50;

window.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "z" ) {
    inputs["up"] = true;
  } else if (e.key === "s") {
    inputs["down"] = true;
  } else if (e.key === "d") {
    inputs["right"] = true;
    animPlayer = "runRight";
    lastLookPlayer = "right";
  } else if (e.key === "a" || e.key === "q") {
    inputs["left"] = true;
    animPlayer = "runLeft";
    lastLookPlayer = "left";
  }

  socket.emit("inputs", inputs);
  socket.emit("animPlayer", animPlayer);
  socket.emit("lastLookPlayer", lastLookPlayer);

  //Fishing Minigame

  if(e.key === "e" && fishAvailable === true && fishing === false) {

    fishingBarHit.classList.add('startFish');

    fishingGame.style.display = "block";
    blockMovement = true;
    fishing = true;    
    socket.emit("blockMovement", blockMovement); 

    const number = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000);

    function fishingStart() {

      fishingBarHit.classList.remove('startFish');

      const interval = setInterval(() => {
          
        marginFish += .5;  

        if (marginFish < 100) {
          
          fishingBar.style.marginLeft = marginFish + "%";
        } else {
          marginFish = -50;
          clearInterval(interval);
          fishingBar.style.marginLeft = marginFish + "%";
          
          setTimeout(() => {
            
            fishingGame.style.display = "none";
            fishing = false;
            blockMovement = false;
            socket.emit("blockMovement", blockMovement); 
            fishingBarHit.classList.remove('noFish');
            
          }, 800);

          setTimeout(() => {
            fishingBarHit.classList.add('noFish');
          }, 300);
        }       
      }, 5);

    };

    setTimeout(() => {
      fishingStart();      
    }, number);

    
  };
  if(e.key === "e" && fishAvailable === true && fishing === true) {
    
    if (marginFish < 60 && marginFish > 40) {

      socket.emit("fishing", "trying");
      cameraShake();
      marginFish = 100;
    };
  }
   //Fishing Minigame
});
window.addEventListener("keyup", (e) => {
  if (e.key === "w" || e.key === "z") {
    inputs["up"] = false;
  } else if (e.key === "s") {
    inputs["down"] = false;
  } else if (e.key === "d") {
    inputs["right"] = false;
  } else if (e.key === "a" || e.key === "q") {
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

body.addEventListener("mousedown", (e) => {
  if (shootingBlock === false) {
    if (myPlayer.weapon[0]) {
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

// Enemy
const enemyWidth = slime.width / 4;
const enemyHeight = slime.height / 1;
let framesEnemyTotal = 4;
let frameCurrentEnemy = 0;
let enemyCutX = 0;
let enemyCutY = 0;
let enemyFramesDrawn = 0;
let enemyAnimDelay = 2;

//Fishing Area
let fishingArea = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0,
};
let fishAvailable = false;


let lastFrameTime = 0;
const targetFrameTime = 1000 / 60; // 60 frames per second

function canvasLobbyLoop(timestamp) {
  const deltaTime = timestamp - lastFrameTime;

  if (deltaTime >= targetFrameTime) {
    lastFrameTime = timestamp - (deltaTime % targetFrameTime);
  canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);
  canvas.imageSmoothingEnabled = false;

  let cameraX = 0;
  let cameraY = 0;
  if (myPlayer) {
    cameraX = myPlayer.x - canvasLobby.width / 2 + 10;
    cameraY = myPlayer.y - canvasLobby.height / 2 + 50;

    if (myPlayer.x > fishingArea.minX && 
        myPlayer.x < fishingArea.minX + fishingArea.maxX &&
        myPlayer.y > fishingArea.minY && 
        myPlayer.y < fishingArea.minY + fishingArea.maxY) {
          fishAvailable = true;
      } else {
          fishAvailable = false;
      };
  }

  canvas.drawImage(mapLobby, cameraShakeX - cameraX, cameraShakeY - cameraY, 3000, 3000);
  
  //Fishing Area
  fishingArea.minX = 1500 - cameraShakeX - cameraX;
  fishingArea.minY = 1800 - cameraShakeY - cameraY;
  fishingArea.maxX = 580;
  fishingArea.maxY = 1000;
  canvas.fillStyle = "black";
  canvas.fillRect(fishingArea.minX, fishingArea.minY, fishingArea.maxX, fishingArea.maxY);
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
   if (player.weapon[0]) {
     if (player.weapon[0].name === "stick") {
       canvas.drawImage(WeaponStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
     }
    }
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

  for (const enemy of enemies) {
    if (enemy.enabled) {
      frameCurrentEnemy = frameCurrentEnemy % 4;
      enemyCutX = frameCurrentEnemy * enemyWidth;
      canvas.drawImage(
        slime,
        enemyCutX,
        enemyCutY,
        enemyWidth,
        enemyHeight,
        enemy.x - cameraX - 30,
        enemy.y - cameraY,
        enemy.width,
        enemy.height
      );
    }
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

  enemyAnimDelay--
  if (enemyAnimDelay <= 0)
  {
    enemyFramesDrawn++
    if (enemyFramesDrawn >= framesEnemyTotal) {
      frameCurrentEnemy++;
      enemyFramesDrawn = 0;
    }
    enemyAnimDelay = 2;
  }
  window.requestAnimationFrame(canvasLobbyLoop);

  } else {
    // Not enough time has passed, wait for the next frame
    window.requestAnimationFrame(canvasLobbyLoop);
  }
}
window.requestAnimationFrame(canvasLobbyLoop);

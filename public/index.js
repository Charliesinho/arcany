//Change this to push >

// const socket = io(`ws://localhost:5000`);
const socket = io(`https://arcany.up.railway.app/`);

//Change this to push <

window.onload = function() {
  window.scrollTo(0, 0);
};

const mapLobby = new Image();
mapLobby.src = "baseMap.png";

const character = new Image();
character.src = "./skins/player.png";

const frogWarriorSkin = new Image();
frogWarriorSkin.src = "./skins/frogWarrior.png";

const cape = new Image();
cape.src = "./capes/cape.png";

const transparentCape = new Image();
transparentCape.src = "./capes/transparent.png";

const slime = new Image();
slime.src = "slime.png";

const WeaponStick = new Image();
WeaponStick.src = "stick.png";

const bulletStick = new Image();
bulletStick.src = "bulletStick.png";

const chatBubble = new Image();
chatBubble.src = "chatBubble.png";

const nameBubbleGreen = new Image();
nameBubbleGreen.src = "./nameTags/nameTaglvl1.png";

const audioClick = new Audio("./audios/tapWood.wav");
audioClick.volume = 0.8;
audioClick.loop = false;

const audioEquip = new Audio("./audios/equip.mp3");
audioEquip.loop = false;

const audioSplash = new Audio("./audios/splash.mp3");
audioSplash.loop = false;

const audioSuccess = new Audio("./audios/success.mp3");
audioSuccess.loop = false;

const audioShootNature = new Audio("./audios/shootNature.mp3");
audioShootNature.loop = false;
audioShootNature.volume = 0.5;

const audioIntro = new Audio("./audios/audioIntro.mp3");
audioShootNature.loop = false;

const loggedIn = new Audio("./audios/loggedIn.mp3");
loggedIn.loop = false;

const grasslandsLoop1 = new Audio("./audios/grassLandsLoop1.mp3");
grasslandsLoop1.loop = true;

const grasslandsEnviroment = new Audio("./audios/grasslandsEnviroment.mp3");
grasslandsEnviroment.loop = true;

const footsteps = new Audio("./audios/footsteps.mp3");
footsteps.loop = true;
footsteps.volume = 0.5;


const canvasLobby = document.getElementById("canvas-lobby");
const widthMinus20vw = window.innerWidth - (20 * window.innerWidth / 100);
canvasLobby.width = widthMinus20vw;
canvasLobby.height = window.innerHeight;

const canvas = canvasLobby.getContext("2d");

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

const openerScreenButton = document.getElementById("openerScreen-button");
const openerScreen = document.getElementById("openerScreen");

const loginScreen = document.getElementById("loginScreen");

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
  artifact: document.querySelector(".artifactEquipped"),
}
const soulsInventory = {
  soul1: document.querySelector(".soul1"),
}

const artifactInventory = {
  cape1: document.querySelector(".cape1"),
}

const catchGif = document.getElementById("catchGif");

//Mouse cursor >
const customCursor = document.querySelector('.custom-cursor');
const pointerActivator = document.querySelectorAll('.pointerActivator');

document.addEventListener('mousemove', function(e) {
  customCursor.style.left = e.pageX + 'px';
  customCursor.style.top = e.pageY + 'px';
});

pointerActivator.forEach(item => {
  item.addEventListener('mouseenter', function() {
    customCursor.style.backgroundImage = "url('../cursors/pointer.png')";
  });

  item.addEventListener('mouseleave', function() {
    customCursor.style.backgroundImage = "url('../cursors/default.png')";
  });
});
//Mouse cursor <

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

openerScreenButton.addEventListener("click", function() {
  loginScreen.style.display = "block";
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  setTimeout(() => {
    openerScreen.classList.add('animIntro');
    audioIntro.play();    
  }, 500);
  audioClick.play();
});

loginButton.addEventListener("click", function(){
  handleLogin("login");
  audioClick.play();
});

createButton.addEventListener("click", function(){
  handleLogin("create");
  audioClick.play();
});

// uiTop.addEventListener("click", function(){
//   menuUi.style.top = "100vh"
//   body.style.overflow = "none"
// });

// playerInfoCorner.addEventListener("click", function(){
//   menuUi.style.top = "0vh"
//   body.style.overflowY = "hidden"
// });

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

//Switch inventories >

const inventorySwitcher = document.querySelector(".inventorySwicther")
const soulsSwitcher = document.querySelector(".soulsSwitcher")
const capeSwitcher = document.querySelector(".capeSwitcher")

const inventoryWindowShow = document.querySelector(".inventoryHide")
inventoryWindowShow.style.display = "flex"

const soulsWindowShow = document.querySelector(".soulsHide")
soulsWindowShow.style.display = "none";

const capeWindowShow = document.querySelector(".capeHide")
capeWindowShow.style.display = "none";

const deleteButton = document.querySelector(".deleteButton")

inventorySwitcher.addEventListener("click", function () {
  audioClick.play();
  inventoryWindowShow.style.display = "flex";
  soulsWindowShow.style.display = "none";
  capeWindowShow.style.display = "none";
})

soulsSwitcher.addEventListener("click", function () {
  audioClick.play();
  inventoryWindowShow.style.display = "none";
  soulsWindowShow.style.display = "flex";
  capeWindowShow.style.display = "none";

  deleting = false;
  inventoryWindowShow.style.background = "var(--backgroundObjects)";
  deleteButton.style.background = "rgb(255, 110, 110)";
})

capeSwitcher.addEventListener("click", function () {
  audioClick.play();
  inventoryWindowShow.style.display = "none";
  soulsWindowShow.style.display = "none";
  capeWindowShow.style.display = "flex";

  deleting = false;
  inventoryWindowShow.style.background = "var(--backgroundObjects)";
  deleteButton.style.background = "rgb(255, 110, 110)";
})

deleteButton.addEventListener("click", function () {
  audioClick.play();
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

//Switch inventories <

//Inventory interaction >

function interactInventory(item, index) {
  if (item.type === "soul") {

    if(consumeAvailable === true) {
        
      consumeAvailable = false;

      setTimeout(() => {
        consumeAvailable = true;
      }, 3000);

      if (item.name === "warrior") {
        socket.emit("consumable", item);
      }
    }
  } else if (item.type === "artifact") {

    if(consumeAvailable === true) {
        
      consumeAvailable = false;

      setTimeout(() => {
        consumeAvailable = true;
      }, 3000);

      if (item.name === "rags") {
        socket.emit("consumable", item);
      }
    }
  } else {
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

    if (item.type === "artifact") {
      if(consumeAvailable === true) {
      
        consumeAvailable = false;
  
        setTimeout(() => {
          consumeAvailable = true;
        }, 3000);

        if (equippedItems[`artifact`].style.background !== "none") {
      
            socket.emit("unequip", item);
        }       
      }
  } 
  }
};

//Inventory interaction <

function obtainedAnim (image) {

  obtainedItem.classList.remove('obtainedAnim');
  catchGif.classList.remove('starsAnim');
  audioSuccess.play();

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

//Main Player Function >

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
    fishingLevel.style.textShadow = "0 0 3px white"
  }

  if (myPlayer.souls.length) {
    for (const soul of myPlayer.souls) {
      if (soul.name = "warrior") {
        soulsInventory[`soul1`].style.background = `url(${soul.image})`;
        soulsInventory[`soul1`].style.backgroundSize = 'cover';
        soulsInventory[`soul1`].addEventListener("mousedown", (e) => {
          interactInventory(soul);
          audioEquip.play();
        
        }); 
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

  if (myPlayer.artifacts.length) {
    for (const artifact of myPlayer.artifacts) {
      if (artifact.name = "rags") {
        artifactInventory[`cape1`].style.background = `url(${artifact.image})`;
        artifactInventory[`cape1`].style.backgroundSize = 'cover';
        artifactInventory[`cape1`].addEventListener("mousedown", (e) => {
          interactInventory(artifact);
          audioEquip.play();        
        }); 
      }
    }
  }

  if (myPlayer.armor.length) {
    equippedItems[`soul`].addEventListener("mousedown", (e) => {
      interactEquipment(myPlayer.souls[0])
      audioClick.play();
    });      
  }  else {
    equippedItems[`soul`].style.background = `none`;
  }

  if (myPlayer.artifact.length) {

    equippedItems[`artifact`].style.background = `url(${myPlayer.artifact[0].image})`;
    equippedItems[`artifact`].style.backgroundSize = 'cover';

    equippedItems[`artifact`].addEventListener("mousedown", (e) => {
      interactEquipment(myPlayer.artifact[0])
      audioClick.play();
    });      
  }  else {
    equippedItems[`artifact`].style.background = `none`;
  }

  for (const item of myPlayer.weapon) {
    equippedItems[`weapon`].style.background = `url(${item.image})`;
    equippedItems[`weapon`].style.backgroundSize = 'cover';
  }
  
  if (myPlayer.weapon.length) {
    equippedItems[`weapon`].addEventListener("mousedown", (e) => {
      interactEquipment(myPlayer.weapon[0]);
      audioClick.play();
    });      
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
            inventorySlots[`inventorySlot${i}`].addEventListener("mousedown", (e) => {
              deleteInventory(myPlayer.inventory[i], i);
              audioClick.play();
            
            });      
          } else {
            inventorySlots[`inventorySlot${i}`].addEventListener("mousedown", (e) => {
              interactInventory(myPlayer.inventory[i], i);
              audioClick.play();
            });     
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

//Main Player Function <

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
    audioIntro.pause();
    loggedIn.play();
    setInterval(canvasLobbyLoop, 16.67);
    
    loginScreen.classList.add('downLogIn');
    chatInput.style.display = "block";
    playerInfoCorner.style.display = "block";
    inventoryWindow.style.visibility = "visible";
    menuUi.style.display = "flex"
    
    setTimeout(() => {
      loginBox.style.display = "none";
      loginButton.style.display = "none";
      createButton.style.display = "none";
      loginArt.style.display = "none";
    
      blockMovement = false;
      socket.emit("blockMovement", blockMovement);  
  
      shootingBlock = false;

      grasslandsLoop1.play();
      grasslandsEnviroment.play();
      
    }, 2000);

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

//Player movement >
let allowedMoveUpUp = true;
let allowedMoveUpDown = true;
let allowedMoveUpLeft = true;
let allowedMoveUpRight = true;

let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

let playerX = 2880;
let playerY = 3568;

let playerLocation = [playerX, playerY];

setInterval(() => {
  playerLocation = [playerX, playerY];
  socket.emit("playerLocation", playerLocation);
  socket.emit("inputs", inputs);
}, 100);

window.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "z" ) {
    footsteps.play();
    footsteps.loop = true;

    movingUp = true;  
  } else if (e.key === "s") {
    footsteps.play();
    footsteps.loop = true;

    movingDown = true;
  } else if (e.key === "d") {
    footsteps.play();
    footsteps.loop = true;
    animPlayer = "runRight";
    lastLookPlayer = "right";

    movingRight = true;
  } else if (e.key === "a" || e.key === "q") {
    footsteps.play();
    footsteps.loop = true;
    animPlayer = "runLeft";
    lastLookPlayer = "left";

    movingLeft = true;
  }

  // socket.emit("inputs", inputs);
  socket.emit("animPlayer", animPlayer);
  socket.emit("lastLookPlayer", lastLookPlayer);

  //Fishing Minigame >

  if(e.key === "e" && fishAvailable === true && fishing === false) {

    fishingBarHit.classList.add('startFish');

    audioSplash.play();

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
      audioClick.play();
    };
  }

  //Fishing Minigame <
});

window.addEventListener("keyup", (e) => {
  if (e.key === "w" || e.key === "z") {
    movingUp = false;
  } else if (e.key === "s") {
    movingDown = false;
  } else if (e.key === "d") {
    movingRight = false;
  } else if (e.key === "a" || e.key === "q") {
    // inputs["left"] = false;
    movingLeft = false;
  }
  if (
    movingUp === false &&
    movingDown === false &&
    movingRight === false &&
    movingLeft === false
  ) {
    animPlayer = "idleRight";
    footsteps.pause();
    footsteps.loop = false;
  }

  socket.emit("inputs", inputs);
  socket.emit("animPlayer", animPlayer);
});
//Player movement <

//Weapon shoot >
canvasLobby.addEventListener("mousedown", (e) => {
  if (shootingBlock === false) {
    if (myPlayer.weapon[0]) {
      if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {
        audioShootNature.play();
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
//Weapon shoot <

//Weapon aim >
window.addEventListener("mousemove", (e) => {
    angleMouse = Math.atan2(
      e.clientY - canvasLobby.height / 2,
      e.clientX - canvasLobby.width / 2
    );
    socket.emit("weaponAngle", angleMouse);

    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // This provides a smooth scrolling effect (not supported in all browsers)
      });
    }
});
//Weapon aim <

//Player Animation >
let playerSpriteWidth = character.width / 4;
let playerSpriteHeight = character.height / 4;
let playerWidth = character.width / 4;
let playerHeight = character.height / 4;
let playerZoomX = 315;
let playerZoomY = 470;

let framesPlayerTotal = 4;
let frameCurrentPlayer = 0;
let playerCutX = 0;
let playerCutY = 0;
let playerFramesDrawn = 0;
//Player Animation <

let frameCurrentMap = 0;
let mapCutX = 0;
let mapCutY = 0;
let mapFramesDrawn = 0;

// Enemy >

const enemyWidth = slime.width / 4;
const enemyHeight = slime.height / 1;
let framesEnemyTotal = 4;
let frameCurrentEnemy = 0;
let enemyCutX = 0;
let enemyCutY = 0;
let enemyFramesDrawn = 0;
let enemyAnimDelay = 2;

// Enemy <

//Fishing Permissions >

let fishingArea = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0,
};
let fishAvailable = false;

//Fishing Permissions <

let lastFrameTime = 0;
const targetFrameTime = 1000 / 60; // 60 frames per second

//Base Map Canvas >

function canvasLobbyLoop() {

  let cameraX = 0;
  let cameraY = 0;
  if (myPlayer) {
    cameraX = playerX - canvasLobby.width / 2 + 10;
    cameraY = playerY - canvasLobby.height / 2 + 50;
  }
  
  canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);
  canvas.imageSmoothingEnabled = false;
  
  // canvas.drawImage(mapLobby, cameraShakeX - cameraX, cameraShakeY - cameraY, 4500, 4500);

  //Map Animation >

  frameCurrentMap = frameCurrentMap % 4;
  mapCutX = frameCurrentMap * 1000;

  canvas.drawImage(
    mapLobby,
    mapCutX,
    mapCutY,
    1000,
    1000,
    cameraShakeX - cameraX,
    cameraShakeY - cameraY,
    4500,
    4500,
  );

  mapFramesDrawn++;

  if (mapFramesDrawn >= 10) {
    frameCurrentMap++;
    mapFramesDrawn = 0;
  }

  //Map Animation <

  //Local Actions >
  
  if (myPlayer) {

    //Player Movement >
    if (movingLeft && allowedMoveUpLeft) {
      inputs["left"] = true;
      playerX -= 4;
    } else {
      inputs["left"] = false;
    }
    if (movingRight && allowedMoveUpRight) {
      inputs["right"] = true;
      playerX += 4;
    } else {
      inputs["right"] = false;
    }
    if (movingUp && allowedMoveUpUp) {
      inputs["up"] = true;
      playerY -= 4;
    } else {
      inputs["up"] = false;
    }
    if (movingDown && allowedMoveUpDown) {
      inputs["down"] = true;
      playerY += 4;
    } else {
      inputs["down"] = false;
    }
    
    //Player Movement <

    //Player Collision >
    let playerColminX = playerX - cameraX -25;
    let playerColminY = playerY - cameraY + 80;
    let playerColLengthX = playerWidth - 310;
    let playerColLengthY = playerHeight - 540;
    canvas.beginPath();
    canvas.fillStyle = "rgb(255, 0, 13, 0.0)"; //Change the last value to 0.3 to male it visible
    canvas.fillRect(playerColminX, playerColminY, playerColLengthX, playerColLengthY);
    //Player Collision <

    //Player Location >
    // console.log(myPlayer.x, myPlayer.y)
    //Player Location <

    //Grasslands walls >
    let wallsVisibility = 0.0;
    
    //Leftwall of island
    const grassLeftWallX = 2630 - cameraShakeX - cameraX;
    const grassLeftWallY = 3100 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassLeftWallX, grassLeftWallY, -20, 600);

    //Wall right of the dock
    const grassRightWallX1 = 3500 - cameraShakeX - cameraX;
    const grassRightWallY1 = 3100 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX1, grassRightWallY1, 20, 600);
    
    //Wall right top of the island
    const grassRightWallX2 = 3280 - cameraShakeX - cameraX;
    const grassRightWallY2 = 3040 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX2, grassRightWallY2, 20, 300);

    //Wall right down of the island
    const grassRightWallX3 = 3280 - cameraShakeX - cameraX;
    const grassRightWallY3 = 3460 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX3, grassRightWallY3, 20, 300);

    //Walls of the shop
    const grassRightWallX4 = 2980 - cameraShakeX - cameraX;
    const grassRightWallY4 = 3010 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX4, grassRightWallY4, 200, 300);

    //Wall bottom of the island
    const grassRightWallX5 = 2580 - cameraShakeX - cameraX;
    const grassRightWallY5 = 3600 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX5, grassRightWallY5, 800, 20);

    //Wall top of the island
    const grassRightWallX6 = 2630 - cameraShakeX - cameraX;
    const grassRightWallY6 = 3230 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX6, grassRightWallY6, 800, 20);

    //Wall top of the island
    const grassRightWallX7 = 2980 - cameraShakeX - cameraX;
    const grassRightWallY7 = 3250 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX7, grassRightWallY7, 800, 20);

    //Wall top of the dock
    const grassRightWallX8 = 3280 - cameraShakeX - cameraX;
    const grassRightWallY8 = 3320 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX8, grassRightWallY8, 800, 20);

    //Wall down of the dock
    const grassRightWallX9 = 3280 - cameraShakeX - cameraX;
    const grassRightWallY9 = 3460 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX9, grassRightWallY9, 800, 20);

    //Blockers Right
    if (
      playerColminX + playerColLengthX > grassRightWallX1 && playerColminY > grassRightWallY1 && playerColminY < grassRightWallY1 + 600 && playerColminX < grassRightWallX1 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX2 && playerColminY > grassRightWallY2 && playerColminY < grassRightWallY2 + 300 && playerColminX < grassRightWallX2 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX3 && playerColminY > grassRightWallY3 && playerColminY < grassRightWallY3 + 300 && playerColminX < grassRightWallX3 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX4 && playerColminY > grassRightWallY4 && playerColminY < grassRightWallY4 + 300 && playerColminX < grassRightWallX4 + 20
      
      ) {
      allowedMoveUpRight = false;
    } else {
      allowedMoveUpRight = true;
    }

    //Blockers left
    if (
      playerColminX < grassLeftWallX && playerColminY > grassLeftWallY && playerColminY < grassLeftWallY + 600 && playerColminX > grassLeftWallX - 20
      ||
      playerColminX < grassRightWallX4 + 200 && playerColminY > grassRightWallY4 && playerColminY < grassRightWallY4 + 300 && playerColminX > grassRightWallX4
      ) {
      allowedMoveUpLeft = false;
    } else {
      allowedMoveUpLeft = true;
    }

    //Blockers top
    if (
      playerColminX + playerColLengthX > grassRightWallX4 && playerColminY > grassRightWallY4 && playerColminY < grassRightWallY4 + 300 && playerColminX < grassRightWallX4 + 200
      ||
      playerColminX + playerColLengthX > grassRightWallX6 && playerColminY + playerColLengthY > grassRightWallY6 && playerColminY < grassRightWallY6 + 20 && playerColminX < grassRightWallX6 + 800
      ||
      playerColminX + playerColLengthX > grassRightWallX7 && playerColminY + playerColLengthY > grassRightWallY7 && playerColminY < grassRightWallY7 + 20 && playerColminX < grassRightWallX7 + 800
      ||
      playerColminX + playerColLengthX > grassRightWallX8 && playerColminY + playerColLengthY > grassRightWallY8 && playerColminY < grassRightWallY8 + 20 && playerColminX < grassRightWallX8 + 800
      ) {
      allowedMoveUpUp = false;
    } else {
      allowedMoveUpUp = true;
    }

    //Blockers down
    if (
      playerColminX + playerColLengthX > grassRightWallX5 && playerColminY + playerColLengthY > grassRightWallY5 && playerColminY < grassRightWallY5 + 20 && playerColminX < grassRightWallX5 + 800
      ||
      playerColminX + playerColLengthX > grassRightWallX9 && playerColminY + playerColLengthY > grassRightWallY9 && playerColminY < grassRightWallY9 + 20 && playerColminX < grassRightWallX9 + 800
      ) {
      allowedMoveUpDown = false;
    } else {
      allowedMoveUpDown = true;
    }

    //GrassLands walls <
    
    //Fishing Area >
    fishingArea.minX = 3350 - cameraShakeX - cameraX;
    fishingArea.minY = 3380 - cameraShakeY - cameraY;
    fishingArea.maxX = 250;
    fishingArea.maxY = 100;
    canvas.beginPath();
    canvas.fillStyle = "rgb(0, 89, 255, 0.0)"; //Change the last value to 0.3 to male it visible
    canvas.fillRect(fishingArea.minX, fishingArea.minY, fishingArea.maxX, fishingArea.maxY); 
    
    if (playerColminX > fishingArea.minX && 
      playerColLengthX + playerColLengthX < fishingArea.minX + fishingArea.maxY + 200 &&
      playerColminY > fishingArea.minY && 
      playerColLengthY + playerColLengthY < fishingArea.minY + fishingArea.maxY - 350) {
        fishAvailable = true;
      } else {
        fishAvailable = false;
      };
    //Fishing Area <
    }

  //Local Actions <


  for (const player of players) {

    //Armor >
    let armor = character;

    if (player.armor[0]) {
      if (player.armor[0].name === "warrior") {
        armor = frogWarriorSkin;
      } else {
        armor = character;
      }
    }
    //Armor <

    //Cape > 
    let artifact = transparentCape;

    if (player.artifact[0]) {
      if (player.artifact[0].name === "rags") {
        artifact = cape;
      } else {
        artifact = transparentCape;
      }
    }
    //Cape <

    //Movement >
    if (player.username === myPlayer.username) {
      if (player.anim === "idleRight" && player.lastLooked === "right") {
        frameCurrentPlayer = frameCurrentPlayer % 4;
        playerCutX = frameCurrentPlayer * playerWidth;
        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 575,
          playerWidth,
          playerHeight,
          playerX - cameraX -30,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 575,
          playerWidth,
          playerHeight,
          playerX - cameraX -30,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      if (player.anim === "idleRight" && player.lastLooked === "left") {
        frameCurrentPlayer = frameCurrentPlayer % 4;
        playerCutX = frameCurrentPlayer * playerWidth;
        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 1728,
          playerWidth,
          playerHeight,
          playerX - cameraX -15,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 1728,
          playerWidth,
          playerHeight,
          playerX - cameraX -15,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      if (player.anim === "runRight") {
        frameCurrentPlayer = frameCurrentPlayer % 4;
        playerCutX = frameCurrentPlayer * playerWidth;
        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY,
          playerWidth,
          playerHeight,
          playerX - cameraX -30,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY,
          playerWidth,
          playerHeight,
          playerX - cameraX -30,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      if (player.anim === "runLeft") {
        frameCurrentPlayer = frameCurrentPlayer % 4;
        playerCutX = frameCurrentPlayer * playerWidth;
        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 1150,
          playerWidth,
          playerHeight,
          playerX - cameraX - 15,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 1150,
          playerWidth,
          playerHeight,
          playerX - cameraX - 15,
          playerY - cameraY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
    } else {
    if (player.anim === "idleRight" && player.lastLooked === "right") {
      frameCurrentPlayer = frameCurrentPlayer % 4;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        armor,
        playerCutX,
        playerCutY + 575,
        playerWidth,
        playerHeight,
        player.x - cameraX -30,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
      canvas.drawImage(
        artifact,
        playerCutX,
        playerCutY + 575,
        playerWidth,
        playerHeight,
        player.x - cameraX -30,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
    }
    if (player.anim === "idleRight" && player.lastLooked === "left") {
      frameCurrentPlayer = frameCurrentPlayer % 4;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        armor,
        playerCutX,
        playerCutY + 1728,
        playerWidth,
        playerHeight,
        player.x - cameraX -15,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
      canvas.drawImage(
        artifact,
        playerCutX,
        playerCutY + 1728,
        playerWidth,
        playerHeight,
        player.x - cameraX -15,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
    }
    if (player.anim === "runRight") {
      frameCurrentPlayer = frameCurrentPlayer % 4;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        armor,
        playerCutX,
        playerCutY,
        playerWidth,
        playerHeight,
        player.x - cameraX -30,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
      canvas.drawImage(
        artifact,
        playerCutX,
        playerCutY,
        playerWidth,
        playerHeight,
        player.x - cameraX -30,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
    }
    if (player.anim === "runLeft") {
      frameCurrentPlayer = frameCurrentPlayer % 4;
      playerCutX = frameCurrentPlayer * playerWidth;
      canvas.drawImage(
        armor,
        playerCutX,
        playerCutY + 1150,
        playerWidth,
        playerHeight,
        player.x - cameraX - 15,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
      canvas.drawImage(
        artifact,
        playerCutX,
        playerCutY + 1150,
        playerWidth,
        playerHeight,
        player.x - cameraX - 15,
        player.y - cameraY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
    }
  }
    //Movement <

    // Weapon
   if (player.weapon[0]) {

    if (player.username === myPlayer.username) { 
      canvas.save(); // Save the current canvas state
      canvas.translate(playerX - cameraX +18, playerY - cameraY +50); // Translate to the player's position
      canvas.rotate(player.weaponAngle); // Rotate based on the mouse angle
      if (player.weapon[0].name === "stick") {
        canvas.drawImage(WeaponStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
      }
    } else {
      canvas.save(); // Save the current canvas state
      canvas.translate(player.x - cameraX +18, player.y - cameraY +50); // Translate to the player's position
      canvas.rotate(player.weaponAngle); // Rotate based on the mouse angle
      if (player.weapon[0].name === "stick") {
        canvas.drawImage(WeaponStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
      }
     }

    }
    canvas.restore(); // Restore the canvas state to what it was before translation and rotation
    // Weapon

    //Chat
    if (player.chatMessage !== "none") {
        canvas.drawImage(chatBubble, player.x - cameraX -85, player.y - cameraY -120, 200, 60)

        canvas.beginPath();
        canvas.font = "bolder 14px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "gray";
        canvas.fillText(player.chatMessage, player.x - cameraX +15, player.y - cameraY -90);
    }
    //Chat

    //Username
    if (player.username === myPlayer.username) {  
      canvas.drawImage(nameBubbleGreen, playerX - cameraX -40, playerY- cameraY -51, 100,50)

      canvas.beginPath();
      canvas.font = "bolder 14px Arial";
      canvas.textAlign = "center";
      canvas.fillStyle = "black";
      canvas.fillText(player.username, playerX - cameraX +10, playerY - cameraY -10);
    } else {
      canvas.drawImage(nameBubbleGreen, player.x - cameraX -40, player.y - cameraY -51, 100,50)

      canvas.beginPath();
      canvas.font = "bolder 14px Arial";
      canvas.textAlign = "center";
      canvas.fillStyle = "black";
      canvas.fillText(player.username, player.x - cameraX +10, player.y - cameraY -10);
    }
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
  
}

//Base Map Canvas <

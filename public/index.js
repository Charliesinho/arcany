//Change this to push >

const socket = io(`ws://localhost:5000`);
// const socket = io(`https://arcany.up.railway.app/`);

//Change this to push <

window.onload = async function() {
  window.scrollTo(0, 0);
};

const mapLobby = new Image();
mapLobby.src = "baseMap.png";

const islandOneMap = new Image();
islandOneMap.src = "./islands/islandOne.png";

const character = new Image();
character.src = "./skins/player.png";

const frogWarriorSkin = new Image();
frogWarriorSkin.src = "./skins/frogWarrior.png";

const cape = new Image();
cape.src = "./capes/cape.png";

const fishermanCape = new Image();
fishermanCape.src = "./capes/mellyCape.png";

const transparentCape = new Image();
transparentCape.src = "./capes/transparent.png";

const slime = new Image();
slime.src = "slime.png";

const slimeDMG = new Image();
slimeDMG.src = "slimeDMG.png";

const WeaponStick = new Image();
WeaponStick.src = "stick.png";


const arcaneStaffCommon = new Image();
arcaneStaffCommon.src = "arcaneStaffCommon.png";

const nuclearStaffCommon = new Image();
nuclearStaffCommon.src = "nuclearStaffCommon.png";

const solarStaffCommon = new Image();
solarStaffCommon.src = "solarStaffCommon.png";

const WeaponWillowStick = new Image();
WeaponWillowStick.src = "willowStick.png";

const bulletStick = new Image();
bulletStick.src = "bulletStick.png";

const bulletStickBlue = new Image();
bulletStickBlue.src = "bulletStickBlue.png";

const chatBubble = new Image();
chatBubble.src = "chatBubble.png";

const nameBubbleGreen = new Image();
nameBubbleGreen.src = "./nameTags/nameTaglvl1.png";

const Structure1 = new Image();
Structure1.src = "./structures/Structure1.png";

const audioClick = new Audio("./audios/tapWood.wav");
audioClick.volume = 1;
audioClick.loop = false;

const oilFry = new Audio("./audios/oilFry.wav");
oilFry.loop = true;
oilFry.volume = 0.3;

const cookingSong = new Audio("./audios/cookingSong.mp3");
cookingSong.loop = true;
cookingSong.volume = 0.3;

const audioQuestObtained = new Audio("./audios/questObtained.wav");
audioQuestObtained.volume = 0.4;
audioQuestObtained.loop = false;

const audioEquip = new Audio("./audios/equip.mp3");
audioEquip.loop = false;

const audioBuy = new Audio("./audios/buy.wav");
audioBuy.loop = false;
audioBuy.volume = 0.3;

const audioSplash = new Audio("./audios/splash.mp3");
audioSplash.loop = false;

const audioSuccess = new Audio("./audios/success.mp3");
audioSuccess.loop = false;

const audioShootNature = new Audio("./audios/shootNature.wav");
audioShootNature.loop = false;
audioShootNature.volume = 0.3;

const splatAudio = new Audio("./audios/splat.mp3");
splatAudio.loop = false;
splatAudio.volume = 0.3;

const audioIntro = new Audio("./audios/introTune.wav");
audioIntro.loop = true;
audioIntro.volume = 0.5;

const shopSong = new Audio("./audios/shopSong.mp3");
shopSong.loop = true;
shopSong.volume = 0.5;

const loggedIn = new Audio("./audios/loggedIn.mp3");
loggedIn.loop = false;
loggedIn.volume = 0.3;

const grasslandsLoop1 = new Audio("./audios/seaShanty.mp3");
grasslandsLoop1.loop = true;
grasslandsLoop1.volume = 0.0;

const grasslandsEnviroment = new Audio("./audios/grasslandsEnviroment.mp3");
grasslandsEnviroment.loop = true;

const levelUpAudio = new Audio("./audios/levelUp.mp3");
levelUpAudio.loop = false;

const audioCardFlip = new Audio("./audios/cardFlip.wav");
audioCardFlip.loop = false;

const pop = new Audio("./audios/pop.wav");
pop.loop = false;

const openShopAudio = new Audio("./audios/openShop.wav");
openShopAudio.loop = false;

const openCookingAudio = new Audio("./audios/kitchen.wav");
openCookingAudio.loop = false;

const cookingAudio = new Audio("./audios/cooking.wav");
cookingAudio.loop = false;

const startCookAudio = new Audio("./audios/startCook.wav");
startCookAudio.loop = false;

const seaShantyAudio = new Audio("./audios/seaShanty.mp3");
seaShantyAudio.loop = true;
seaShantyAudio.volume = 0.3;

const openChestAudio = new Audio("./audios/openChest.wav");
openChestAudio.loop = false;
openChestAudio.volume = 0.4;

const paperAudio = new Audio("./audios/paper.wav");
paperAudio.loop = false;

const motorAudio = new Audio("./audios/motor.flac");
motorAudio.loop = true;
motorAudio.volume = 0.1;

const footsteps = new Audio("./audios/footsteps.mp3");
footsteps.loop = true;
footsteps.volume = 0.3;

const enemyHitAudio = new Audio("./audios/enemyHit.mp3");
enemyHitAudio.loop = false;
enemyHitAudio.volume = 0.3;

const sizzle = new Audio("./audios/sizzle.wav");
sizzle.loop = false;
sizzle.volume = 0.05;

const metalPan = new Audio("./audios/metalPan.ogg");
metalPan.loop = false;
metalPan.volume = 0.2;




const canvasLobby = document.getElementById("canvas-lobby");
const widthMinus20vw = window.innerWidth - 290;
canvasLobby.width = widthMinus20vw;
canvasLobby.height = window.innerHeight;

const canvas = canvasLobby.getContext("2d");

let players = [];
let enemies = [];
let enemiesClient = [];
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

const boatExploreMinigame = document.getElementById("boatExploreMinigame");
const exploreMinigameBeach = document.getElementById("exploreMinigameBeach");
const progressBarExploreMinigame = document.getElementById("progressBarExploreMinigame");
const islandExploreMinigame = document.getElementById("islandExploreMinigame");

const body = document.getElementById("body");
const fishingLevel = document.getElementById("fishingLevel");
const cookingLevel = document.getElementById("cookingLevel");
const exploringLevel = document.getElementById("exploringLevel");
const combatLevel = document.getElementById("combatLevel");
const obtainedItem = document.querySelector("#obtainedItem");
const levelUp = document.querySelector(".levelUp");
const levelUpCircle = document.querySelector(".levelUpCircle");

const shop = document.querySelector(".shop");
const cookingPot = document.querySelector(".cookingPot");
const cookingContainer = document.querySelector("#cookingContainer");
const shopItem3 = document.querySelector(".shopItem3");
const shopItem1 = document.querySelector(".shopItem1");
const shopItem4 = document.querySelector(".shopItem4");
const shopItem5 = document.querySelector(".shopItem5");

const rewardChest = document.querySelector(".rewardChest");
const rewardFrame = document.getElementById("rewardFrame");

const cookingItem = document.querySelector(".cookingItem");
const container = document.getElementById('cookingContainer');
const paddle = document.getElementById('paddle');
const cookingPotMin = document.getElementById('cookingPotMin');
const cookingBarParent = document.getElementById('cookingBarParent');
const cookingBarChild = document.getElementById('cookingBarChild');
const logos = document.querySelectorAll('.cookingItem');
const cookingItem1 = document.querySelector(".cookingItem1");
const cookingItem3 = document.querySelector(".cookingItem3");

const craftingContainer = document.querySelector("#craftingContainer");
const craftingItem1 = document.querySelector("#craftingItem1");
const craftingItem2 = document.querySelector("#craftingItem2");

const exploreMapIsland1 = document.querySelector(".exploreMapIsland1");
const rockExploreMinigame = document.querySelector(".rockExploreMinigame");

const questHubIcon = document.querySelector(".cardsIcon");
const questHub = document.querySelector(".questHub");

const exploreMap = document.getElementById("exploreMap");
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
const playerCoinsAmount = document.getElementById("playerCoinsAmount");
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
  cape2: document.querySelector(".cape2"),
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
  // socket.emit("loadEnemies", enemies);
}

openerScreenButton.addEventListener("click", function() {
  loginScreen.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  setTimeout(() => {
    openerScreen.classList.add('animIntro');
    audioIntro.play();
  }, 500);
  
  setTimeout(() => {
    loginBox.style.marginRight = "0"
    
  }, 4000);
  audioClick.play();
});

loginButton.addEventListener("click", function (event) {
  event.preventDefault()
  handleLogin("login");
  audioClick.play();
});

createButton.addEventListener("click", function(){
  event.preventDefault()
  handleLogin("create");
  audioClick.play();
});

//Quest system >

questHubIcon.addEventListener("click", function(){
  questHub.style.display = "flex"
  paperAudio.play();

  //Upadate quests hub >

  updateQuestHub()

  
  //Upadate quests hub <
});

function updateQuestHub() {

  for (const questline of myPlayer.questsOngoing) {

    
    for (const quest of questline) {
  
      const img = document.createElement('img');

      console.log(quest);
      
      if (quest.completed === true) {
        img.src = `./cardsShop/quest${quest.name}${quest.step}Comp.png`;
      } else if (quest.started) {
        img.src = `./cardsShop/quest${quest.name}${quest.step}.png`;
      } else {
        img.src = `./cardsShop/questHidden.png`;
      }
      
      img.classList.add('cardShop', 'pointerActivator', `${quest.name}Step${quest.step}`);
    
      const questItemsDiv = document.querySelector('.questItems');
    
      if (questItemsDiv) {
        const existingImage = document.querySelectorAll(`.${quest.name}Step${quest.step}`)
  
        if (!existingImage.length) {
  
          questItemsDiv.appendChild(img);
          const addedImg = document.querySelector(`.${quest.name}Step${quest.step}`)
          const cardFlipperHandler = () => cardFlipper(quest);

          if (quest.started) {
            addedImg.addEventListener("click", cardFlipperHandler)
          }
        }
      }
    }

  }

}

function cardFlipper (quest) {
  let questCompleted = quest.completed
  const addedImg = document.querySelector(`.${quest.name}Step${quest.step}`)

  if (addedImg.src.includes(`${quest.name}${quest.step}info`)) {
    addedImg.classList.add("turnCard");
    audioCardFlip.play();

    setTimeout(() => {
      if (questCompleted === true) {
        addedImg.src = `./cardsShop/quest${quest.name}${quest.step}Comp.png`;
      } else {
        addedImg.src = `./cardsShop/quest${quest.name}${quest.step}.png`;
      }
    }, 250);

    setTimeout(() => {
      addedImg.classList.remove("turnCard");
    }, 500);

  } else {

    addedImg.classList.add("turnCard");
    audioCardFlip.play();

    setTimeout(() => {
      addedImg.src = `./cardsShop/quest${quest.name}${quest.step}info.png`
    }, 250);

    setTimeout(() => {
      addedImg.classList.remove("turnCard");
    }, 500);
  }
}

shopItem5.addEventListener("click", function(){
  socket.emit("questStart", "slime");
});

socket.on("questStarted", (quest) => {
    obtainedAnim(`./cardsShop/quest${quest[0].name}${quest[0].step}.png`)
    audioQuestObtained.play()
})

socket.on("questStepComp", (quest) => {
  async function questCompleted() {
    obtainedAnim(`./cardsShop/quest${quest.name}${quest.step}Comp.png`)
    audioQuestObtained.play()

    const questCard1 = document.querySelector("."+quest.name+"Step1")
    const questCard2 = document.querySelector("."+quest.name+"Step2")
    const questCard3 = document.querySelector("."+quest.name+"Step3")
    const questCard4 = document.querySelector("."+quest.name+"Step4")
    const questCard5 = document.querySelector("."+quest.name+"Step5")
    
    questCard1?.remove()
    questCard2?.remove()
    questCard3?.remove()
    questCard4?.remove()
    questCard5?.remove()
    
  }
  questCompleted()

})

function progressQuestCounter(questItem, step) {
  for (const questStep of questItem) {
    if (questStep.completed === false && questStep.obj > 0) {
      let questObj = {
        step: questStep,
        questLine: questItem
      }
      socket.emit("questProgressed", [questObj, step]);
      break;
    }
  }
}

//Quest system <

// Explore minigame >

const parentWidthExplore = exploreMinigameBeach.offsetWidth;
const parentHeightExplore = exploreMinigameBeach.offsetHeight;
const boatWidth = boatExploreMinigame.offsetWidth;
const leftPositionBoat = (parentWidthExplore - boatWidth) / 2;
boatExploreMinigame.style.left = leftPositionBoat + 'px';

let boatPositionLimits = 1;

let positionRock1 = 0;

function moveRock1ChildImg() {

  const rockImg = new Image();
  rockImg.src = './exploreMinigame/rock.png';
  rockImg.className = 'rockExploreMinigame';

  const numbers = [0, 300, -300];
  const randomIndex = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(randomIndex)

  let positionRock = -500;
  rockImg.style.position = 'absolute';
  rockImg.style.top = positionRock + 'px';
  rockImg.style.left = randomIndex + leftPositionBoat + 'px';

  exploreMinigameBeach.appendChild(rockImg);

  function moveRock() {
    positionRock += 5;

    if (positionRock >= window.innerHeight) {

      rockImg.parentNode.removeChild(rockImg);
      return;
    }

    rockImg.style.top = positionRock + 'px';

    requestAnimationFrame(moveRock);
  }

  moveRock();
  checkCollisions()
}

let progressExploreWidth = 0;

function exploreProgressBar () {
  progressExploreWidth += 2;
  progressBarExploreMinigame.style.width = progressExploreWidth + "px";

  if (progressExploreWidth > 320) {
    progressExploreWidth = 0;
    clearInterval(progressExploreWidthInterval);
    handleExploreWin();
  }

}

function checkCollisions() {
  const boatRect = boatExploreMinigame.getBoundingClientRect();

  const rocks = document.querySelectorAll('.rockExploreMinigame');
  rocks.forEach((rock) => {
    const rockRect = rock.getBoundingClientRect();
    if (
      boatRect.left < rockRect.right &&
      boatRect.right > rockRect.left &&
      boatRect.top < rockRect.bottom &&
      boatRect.bottom > rockRect.top
    ) {
      handleCollision();
    }
  });
}

function handleCollision() {
  clearInterval(exploreMinigameInterval);
  clearInterval(progressExploreWidthInterval);
  exploreMinigameBeach.style.visibility = "hidden"
  socket.emit("changeRoom", "baseMap");
  intervalCanvasBase = setInterval(canvasLobbyLoop, 16.67);
  grassOpenExplore = false;
  exploreMap.style.display = "block";
  progressExploreWidth = 0;
  seaShantyAudio.currentTime = 0;

  motorAudio.currentTime = 0;
  seaShantyAudio.pause()

  motorAudio.pause()
}

let islandExploreTop = 100;

function handleExploreWin() {
  clearInterval(exploreMinigameInterval);


  const islandIntervalExplore = setInterval(() => {
    islandExploreTop -= 1;
    islandExploreMinigame.style.top = `-${islandExploreTop}%`

    if (islandExploreTop <= 10) {
      socket.emit("islandOneExplored");
      socket.emit("changeRoom", "islandOne");
      seaShantyAudio.currentTime = 0;

      motorAudio.currentTime = 0;
      seaShantyAudio.pause()

      motorAudio.pause()
      audioSuccess.play()
      islandExploreTop = 100;
      islandExploreMinigame.style.top = "-100%"
      clearInterval(islandIntervalExplore)
      exploreMinigameBeach.style.visibility = "hidden"
      intervalCanvasBase = setInterval(canvasIslandOneLoop, 16.67);
      grassOpenExplore = false;
      exploreMap.style.display = "block";
      progressExploreWidth = 0;
    }
  }, 50);
}

let exploreMinigameInterval;
let progressExploreWidthInterval;

exploreMapIsland1.addEventListener("click", () => {
        clearInterval(intervalCanvasBase);
        exploreMap.style.visibility = "hidden";
        exploreMap.style.display = "none";
        exploreMinigameBeach.style.visibility = "visible";
        seaShantyAudio.play()

        motorAudio.play()
        IslandChestOpened = false;
        rewardChest.style.left = `0%`;
        exploreMinigameInterval = setInterval(() => {
          moveRock1ChildImg()
        }, 800);
        progressExploreWidthInterval = setInterval(() => {
          exploreProgressBar()
        }, 200);
});

rewardChest.addEventListener("click", () => {
  openChestIsland ()
});

let currentLeft = 0

function openChestIsland () {
  if (IslandChestOpened === false) {

    IslandChestOpened = true;

    const openChest = setInterval(() => {

      if (currentLeft >= 700) {
        clearInterval(openChest)

        openChestAudio.play()

        socket.emit("rewardChest", "islandOne");

        setTimeout(() => {
          currentLeft = 0
        }, 1000);
      }

      rewardChest.style.left = `-${currentLeft}%`;

      currentLeft += 100;
    }, 50);
  }

}

// Explore minigame <


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
    // if (e.key === "o") {
    //   clearInterval(intervalCanvasBase)

    //   canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);

    //   setTimeout(() => {
    //     console.log("canvas restarted")
    //     intervalCanvasBase = setInterval(canvasLobbyLoop, 16.67);
    //   }, 2000);
    // }

    if (exploreMinigameBeach.style.visibility !== "hidden") {
      let currentPositionBoat = boatExploreMinigame.style.left.slice(0, -2)
      let currentPositionBoatNum = parseFloat(currentPositionBoat)

      if (e.key === "d" && boatPositionLimits < 2) {
        currentPositionBoatNum += 300
        boatPositionLimits += 1
        boatExploreMinigame.style.left = `${currentPositionBoatNum}px`;
      }
      if (e.key === "q" && boatPositionLimits > 0) {
        currentPositionBoatNum -= 300
        boatPositionLimits -= 1
        boatExploreMinigame.style.left = `${currentPositionBoatNum}px`;
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

//Cooking >

let paddleXPos = (container.clientWidth / 2) - (paddle.clientWidth / 2);
paddle.style.left = `${paddleXPos}px`;
cookingPotMin.style.left = `${paddleXPos}px`;

let logoDataList = [];

logos.forEach( function (logo, index) {
  const xPos = index === 0 ? 140 : index === 1 ? 460 : 100;  // Random start position
  const yPos = 200;
  const xSpeed = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
  const ySpeed = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);

  logo.style.left = `${xPos}px`;
  logo.style.top = `${yPos}px`;

  logoDataList.push({
    element: logo,
    xPos,
    yPos,
    xSpeed,
    ySpeed
  });
});

function createSmoke(x, y) {
    const numParticles = 20;  // Number of smoke particles to create
    for (let i = 0; i < numParticles; i++) {
        const smoke = document.createElement('div');

        // Randomize the initial position of the smoke around the collision point
        const randomXOffset = (Math.random() - 0.5) * 100; // Random offset in X direction
        const randomYOffset = (Math.random() - 0.5) * 20; // Random offset in Y direction

        smoke.style.position = 'absolute';
        smoke.style.width = '50px'; // Starting width
        smoke.style.height = '50px'; // Starting height
        smoke.style.backgroundColor = `rgb(212, 193, 171)`; // Start with dark grey
        smoke.style.borderRadius = '0%'; // Circular smoke particle
        smoke.style.left = `${x + randomXOffset}px`;
        smoke.style.top = `${y + randomYOffset}px`;
        smoke.style.animation = `rotate ${randomYOffset}s infinite linear`;
        smoke.style.opacity = "0";
        // smoke.style.zIndex = `998`;
        container.appendChild(smoke);

        // Variables for random trajectory and animation
        let opacity = 0;
        let size = 50; // Start size of the smoke particle
        let randomXSpeed = (Math.random() - 0.5) * 4;  // Random horizontal speed
        let currentX = x + randomXOffset;
        let currentY = y + randomYOffset;
        let randomYSpeed = Math.random() * 10 + 5;  // Random upward speed

        const smokeInterval = setInterval(() => {
            randomYSpeed *= 0.99;
      
            currentX += randomXSpeed; // Move sideways
            currentY -= randomYSpeed; // Move upwards
            size -= 1;  // Decrease size of the smoke particle

            if (size < 35) {
              opacity += 0.05
            }
            

            // Calculate color based on the size
            const colorProgress = Math.max(size / 50, 0); // Value between 0 and 1
            const greyValue = Math.floor(255 + (255 * (1 - colorProgress))); // Interpolate from dark grey (105) to white (255)
            smoke.style.backgroundColor = `rgb(${greyValue}, ${greyValue}, ${greyValue})`;

            smoke.style.left = `${currentX}px`;
            smoke.style.top = `${currentY}px`;
            smoke.style.width = `${size}px`;
            smoke.style.height = `${size}px`;
            smoke.style.opacity = opacity;

            // Remove the smoke when it fades out
            if (size <= 0) {
                clearInterval(smokeInterval);
                container.removeChild(smoke);
            }
        }, 30);
    }
}

function endCooking(element) {
  element.style.width = `0%`;
  socket.emit("toDelete", cookedItems);
  cookedItems = [];
  currentlyCooking = false;
  cookingItem1.src = "./Textures/itemPlaceholder.png";
  cookingItem3.src = "./Textures/itemPlaceholder.png";
  
  setTimeout(() => {
    socket.emit("cooking", cookingArray);
    cookingArray = [];
  }, 1000);

  noMovement = false;


  logoDataList = [];
  
  logos.forEach( function (logo, index) {
    const xPos = index === 0 ? 140 : index === 1 ? 460 : 100;  // Random start position
    const yPos = 200;
    const xSpeed = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
    const ySpeed = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
  
    logo.style.left = `${xPos}px`;
    logo.style.top = `${yPos}px`;
  
    logoDataList.push({
      element: logo,
      xPos,
      yPos,
      xSpeed,
      ySpeed
    });

  });
  clearInterval(cookingInterval);

  setTimeout(() => {
    logoDataList.forEach((logoData) => {
      logoData.element.style.left = `${logoData.xPos}px`;
      logoData.element.style.top = `${logoData.yPos}px`;
    })
  }, 100);
}

function moveLogos() {
    logoDataList.forEach((logoData) => {
      logoData.xPos += logoData.xSpeed;
      logoData.yPos += logoData.ySpeed;
  
      // Check for collision with container boundaries
      if (logoData.xPos + 200 >= container.clientWidth || logoData.xPos <= 0) {
        logoData.xSpeed = -logoData.xSpeed;
      }
  
      if (logoData.yPos + 200 >= container.clientHeight || logoData.yPos <= 0) {
        logoData.ySpeed = -logoData.ySpeed;
      }
  
      // Check if the logo is touching the paddle (paddle: width 200px, height 50px, 150px above the bottom)
      const paddleYPos = container.clientHeight - 50 - paddle.clientHeight; // Y position of the top of the paddle
      if (
        logoData.xPos + 200 > paddleXPos &&                                  // Logo's right side hits the paddle's left side
        logoData.xPos < paddleXPos + paddle.clientWidth &&                   // Logo's left side hits the paddle's right side
        logoData.yPos + 200 >= paddleYPos &&                                 // Logo hits the top of the paddle
        logoData.yPos <= paddleYPos + paddle.clientHeight                    // Logo is within the paddle height range
      ) {
        sizzle.play()
        // Increase the speed upon collision, but cap the maximum speed to 10
        logoData.xSpeed = Math.sign(logoData.xSpeed) * Math.min(Math.abs(logoData.xSpeed * 5), 20);
        logoData.ySpeed = -Math.min(Math.abs(logoData.ySpeed * 5), 20);  // Bounce upward with increased speed
  
        // Gradually restore the speed to normal over time
        const restoreSpeedInterval = setInterval(() => {
          logoData.xSpeed *= 0.96;  // Smoothly decrease horizontal speed
          logoData.ySpeed *= 0.96;  // Smoothly decrease vertical speed
  
          // Stop decreasing speed once it's close to the original speed
          if (Math.abs(logoData.xSpeed) < 2 && Math.abs(logoData.ySpeed) < 2) {
            clearInterval(restoreSpeedInterval);
            logoData.xSpeed = Math.sign(logoData.xSpeed) * Math.max(Math.abs(logoData.xSpeed), 1);  // Ensure min speed
            logoData.ySpeed = Math.sign(logoData.ySpeed) * Math.max(Math.abs(logoData.ySpeed), 1);  // Ensure min speed
          }
        }, 50);  // Update speed every 50ms
  
        // Increase the cooking bar width
        function increaseWidthByOnePercent(element) {
          const parentWidth = element.parentElement.clientWidth;
          const currentWidthPercent = parseFloat(window.getComputedStyle(element).width) / parentWidth * 100;
          let newWidthPercent;
          if (currentWidthPercent <= 99) {
            newWidthPercent = currentWidthPercent + 8;
          } else {
            endCooking(element)
          }
          element.style.width = `${newWidthPercent}%`;
        }
  
        increaseWidthByOnePercent(cookingBarChild);
  
        // Generate smoke effect
        createSmoke(paddleXPos + paddle.clientWidth / 2, paddleYPos);
      }
  
      // Apply the new position to the logo
      logoData.element.style.left = `${logoData.xPos}px`;
      logoData.element.style.top = `${logoData.yPos}px`;
    });
}
  
function movePaddleWithKeys(event) {
  const middlePos = container.clientWidth / 2 - (paddle.clientWidth / 2); // Middle position
  const rightPos = container.clientWidth - paddle.clientWidth;      // Right position
  const leftPos = 0;                                                  // Left position

  // Move paddle based on current position and key pressed
  if (event.key === 'ArrowLeft') {
    if (paddleXPos === rightPos) {
      paddleXPos = middlePos; // Move from right to middle
    } else if (paddleXPos === middlePos) {
      paddleXPos = leftPos;   // Move from middle to left
    }
  } else if (event.key === 'ArrowRight') {
    if (paddleXPos === leftPos) {
      paddleXPos = middlePos; // Move from left to middle
    } else if (paddleXPos === middlePos) {
      paddleXPos = rightPos;  // Move from middle to right
    }
  }

  // Apply the new position to the paddle
  paddle.style.left = `${paddleXPos}px`;
  cookingPotMin.style.left = `${paddleXPos}px`;

}

document.addEventListener('keydown', movePaddleWithKeys);

//Cooking <

//Crafting >

let craftSuccessBar = 0;
let craftFailedBar = 0;

let isAnimating = false; // Flag to track animation status
let position1 = 0, step1 = 8;
let position2 = 600, step2 = -8;

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        const image1 = document.getElementById('craftingItem1').getBoundingClientRect();
        const image2 = document.getElementById('craftingItem2').getBoundingClientRect();
        const centerCraft = document.getElementById('centerCraft');
        const progressCraftChild = document.getElementById('progressCraftChild');
        const failedCraftChild = document.getElementById('failedCraftchild');

        if (grassOpenCrafting && isAnimating) {
            if (isIntersecting(image1, image2)) {
                craftSuccessBar += 25;
                progressCraftChild.style.width = craftSuccessBar + "%";
                centerCraft.style.width = "196px";
                centerCraft.style.height = "196px";

                setTimeout(() => {
                    centerCraft.style.width = "186px";
                    centerCraft.style.height = "186px";
                }, 100);
            } else {
                craftFailedBar += 25;
                failedCraftChild.style.width = craftFailedBar + "%";
                centerCraft.style.width = "176px";
                centerCraft.style.height = "176px";

                setTimeout(() => {
                    centerCraft.style.width = "186px";
                    centerCraft.style.height = "186px";
                }, 100);
            }

            // Check if either bar reached 100%
            if (craftSuccessBar >= 100 || craftFailedBar >= 100) {
                endCrafting(); // End the animation and reset everything
            }
        }
    }
});

function isIntersecting(rect1, rect2) {
    return rect1.right >= rect2.left && rect1.left <= rect2.right;
}

// Function to animate the images
function animateImage(image, position, step, imageId) {
    function move() {
        if (!isAnimating) return; // Stop movement if the game is no longer animating

        if (imageId === 1) {
            position1 += step1;
            if (position1 >= 600 || position1 <= 0) {
                step1 = -step1; // Reverse direction when reaching the boundaries
            }
            image.style.left = position1 + 'px';
            image.style.transform = `rotate(${position1}deg)`; // Rotate while moving
        } else {
            position2 += step2;
            if (position2 >= 600 || position2 <= 0) {
                step2 = -step2; // Reverse direction when reaching the boundaries
            }
            image.style.left = position2 + 'px';
            image.style.transform = `rotate(${position2}deg)`; // Rotate while moving
        }

        if (isAnimating) {
            requestAnimationFrame(move); // Continue the animation
        }
    }

    requestAnimationFrame(move); // Start the animation
}

// Start the animations
function startAnimations() {
    isAnimating = true; // Set the flag to true
    animateImage(document.getElementById('craftingItem1'), position1, step1, 1);
    animateImage(document.getElementById('craftingItem2'), position2, step2, 2);
}

// Function to stop animations and reset everything
function endCrafting() {
    isAnimating = false; // Stop any further animation

    // Log "end"
    console.log('end');

    // Reset positions, bars, and animations
    resetCrafting();
}

// Reset the crafting game to its initial state
function resetCrafting() {
    // Reset progress bars
    craftSuccessBar = 0;
    craftFailedBar = 0;

    const progressCraftChild = document.getElementById('progressCraftChild');
    const failedCraftChild = document.getElementById('failedCraftchild');
    progressCraftChild.style.width = "0%";
    failedCraftChild.style.width = "0%";

    // Reset images' positions
    position1 = 0;
    position2 = 600;
    step1 = 8;
    step2 = -8;

    const image1 = document.getElementById('craftingItem1');
    const image2 = document.getElementById('craftingItem2');
    image1.style.left = "0px";
    image2.style.left = "600px";

    setTimeout(() => {
      socket.emit("crafting", craftingArray);
      craftingArray = [];
    }, 1000);

    craftingInterval = null;
    // socket.emit("toDelete", craftedItems);
    craftedItems = []
    currentlyCrafting = false;
    craftingItem1.src = "./Textures/itemPlaceholder.png";
    craftingItem2.src = "./Textures/itemPlaceholder.png";
}



//Crafting <


//Inventory interaction >

let cookingArray = [];
let cookingInterval = null;
let cookedItems = []

let craftingArray = [];
let craftingInterval = null;
let craftedItems = []

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


      socket.emit("consumable", item);
    }
  } else {

    if (cookingContainer.style.display == "block" && currentlyCooking === false) {

      if (inventorySlots[`inventorySlot${index}`].style.background !== "none") {
        if(consumeAvailable === true && deleting === false) {

          if (item.type === "questItem" || item.type === "food") {
            return;
          }

          consumeAvailable = false;

          setTimeout(() => {
            consumeAvailable = true;
          }, 500);
          
          console.log("cooking")
          pop.play()

          cookedItems.push(index)
          
          if (cookingArray.length === 0) {
            cookingArray.push(item);
            cookingItem1.src = item.image;
          }
          else if (cookingArray.length === 1) {
            cookingArray.push(item);
            cookingItem3.src = item.image;
            noMovement = true

            setTimeout(() => {
              startCookAudio.play();
              currentlyCooking = true;
              cookingInterval = setInterval(moveLogos, 10);
            }, 1000);
          }
          

          // inventorySlots[`inventorySlot${index}`].style.background = `none`;
          // inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));

          // if(item.type === "fish" || item.type === "food") {
          //   socket.emit("cooking", item);
          // }

        }
      }

    }
    if (craftingContainer.style.display == "block" && currentlyCrafting === false) {

      if (inventorySlots[`inventorySlot${index}`].style.background !== "none") {
        if(consumeAvailable === true && deleting === false) {

          if (item.type !== "stick" && item.type !== "gem") {
            return;
          }
          
          consumeAvailable = false;
          
          setTimeout(() => {
            consumeAvailable = true;
          }, 500);
          
          pop.play()
          
         
          if (craftingArray[0]?.type !== item.type) {
            if (craftingArray.length === 0) {
              craftedItems.push(index)
              craftingArray.push(item);
              craftingItem1.src = item.image;
            }
            else if (craftingArray.length === 1) {
              craftedItems.push(index)
              craftingArray.push(item);
              craftingItem2.src = item.image;
              noMovement = true
  
              setTimeout(() => {
                startCookAudio.play();
                currentlyCrafting = true;
                startAnimations();
              }, 1000);
            }
          }
          

          // inventorySlots[`inventorySlot${index}`].style.background = `none`;
          // inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));

          // if(item.type === "fish" || item.type === "food") {
          //   socket.emit("cooking", item);
          // }

        }
      }

    }
    else if (shop.style.display !== "flex") {

      if (inventorySlots[`inventorySlot${index}`].style.background !== "none") {
        if(consumeAvailable === true && deleting === false) {

          consumeAvailable = false;

          setTimeout(() => {
            consumeAvailable = true;
          }, 1000);

          const consumable = {
            name: item.name,
            index: index,
            image: item.image,
            type: item.type,
            value: item.value
          }
          inventorySlots[`inventorySlot${index}`].style.background = `none`;
          inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));

          if(item.type === "food") {
            socket.emit("consumable", consumable);
          }

          if (item.type === "weapon") {
            socket.emit("consumable", consumable);
          }
        }
      }

    }
    else {

      if (inventorySlots[`inventorySlot${index}`].style.background !== "none") {
        if(consumeAvailable === true && deleting === false) {

          consumeAvailable = false;

          audioBuy.play();

          setTimeout(() => {
            consumeAvailable = true;
          }, 1000);

          const consumable = {
            name: item.name,
            index: index,
            image: item.image,
            type: item.type,
            value: item.value
          }
          inventorySlots[`inventorySlot${index}`].style.background = `none`;
          inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));

          if(item.type === "food") {
            socket.emit("selling", consumable);
          }

          if (item.type === "weapon") {
            socket.emit("selling", consumable);
          }

        }
      }

    }
  }
};

let itemsToDelete = [];
let timeoutDelete;
let deleteSelect = true;

function deleteInventory(item, index) {
  if (deleting) {
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
  }
};

function interactEquipment (item, index) {

  if(consumeAvailable === true && deleting === false) {

    if (item.type === "weapon") {

      if (myPlayer.inventory.length <= 8) {

          consumeAvailable = false;

          setTimeout(() => {
            consumeAvailable = true;
          }, 1000);

          if (equippedItems[`weapon`].style.background !== "none") {

              const equipment = {
                name: item.name,
                index: index,
                image: item.image,
                type: item.type
              }

              console.log(myPlayer)
              socket.emit("unequip", equipment);
          }
      }
    }

    if (item.type === "soul") {
        if(consumeAvailable === true) {

          consumeAvailable = false;

          setTimeout(() => {
            consumeAvailable = true;
          }, 1000);

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
        }, 1000);

        if (equippedItems[`artifact`].style.background !== "none") {

            socket.emit("unequip", item);
        }
      }
  }
  }
};

function buyItem (item) {
  socket.emit("buyItem", item);
}

//Inventory interaction <

function obtainedAnim (image) {

  obtainedItem.classList.remove('obtainedAnim');
  catchGif.classList.remove('starsAnim');
  audioSuccess.play();

  setTimeout(() => {
    obtainedItem.style.background = `url(${image})`;
    obtainedItem.style.backgroundSize = "contain"
    obtainedItem.classList.add('obtainedAnim');
    catchGif.classList.add('starsAnim');
  }, 500);
}

let consumeAvailable = true;

socket.on("connect", (socket) => {
  console.log("connected");
});

shopItem1.addEventListener("mousedown", (e) => {
  buyItem("stick");
  audioBuy.play();
});

shopItem4.addEventListener("mousedown", (e) => {
  buyItem("melrodSeed");
  audioBuy.play();
});

//Main Player Function >

let generalLevel = 0;
let generalLevelCooking = 0;
let generalLevelExploring = 0;
let generalLevelCombat= 0;

let oldFishingLevel = 0;
let newFishingLevel = 0;
let changeFishingLevel = true;
let fishingLevelSimple = 0;

let oldCookingLevel = 0;
let newCookingLevel = 0;
let changeCookingLevel = true;
let cookingLevelSimple = 0;

let oldExploringLevel = 0;
let newExploringLevel = 0;
let changeExploringLevel = true;
let exploringLevelSimple = 0;

let oldCombatLevel = 0;
let newCombatLevel = 0;
let changeCombatLevel = true;
let combatLevelSimple = 0;

socket.on("player", (serverPlayer) => {

  const index = players.findIndex((player) => player.id === serverPlayer.id);
  if (index !== -1) {
    // If the player already exists, update its data
    players[index] = serverPlayer;
  } else {
    // If the player is new, add it to the array
    players.push(serverPlayer);
  }
  // players = serverPlayers;
  myPlayer = players.find((player) => player.id === socket.id);

  players = players.filter((player) => player.room === myPlayer.room);

  if (myPlayer.health === 3) {
    healthImage.src = "./fullHearts.png";
  } else if (myPlayer.health === 2) {
    healthImage.src = "./halfHearts.png";
  } else if (myPlayer.health === 1) {
    healthImage.src = "./emptyHearts.png";
  }

  usernameMenu.innerHTML = myPlayer.username;
  playerCoinsAmount.innerHTML = myPlayer.currency
  // console.log(myPlayer)

  //Adapt shop to player >
    if (myPlayer.questsOngoing.some(questItem => questItem[0].name === "SlimyProblem") && shopItem5 && myPlayer.room === "baseMap") {
      shopItem5.parentNode?.removeChild(shopItem5)
    }
  //Adapt shop to player <

   // Combat level >

   let combatLevelNum = Math.trunc(myPlayer.combatLevel / 1000);

   if (changeCombatLevel === true && myPlayer.combatLevel !== 0) {
     if (combatLevelNum < 1) {
       newCombatLevel = 1;
     }
     else if (combatLevelNum < 3) {
       newCombatLevel = 2;
     }
     else if (combatLevelNum < 6) {
       newCombatLevel = 3;
     }
     else if (combatLevelNum < 12) {
       newCombatLevel = 4;
     }
     else {
       newCombatLevel = 5;
     }
 
     changeCombatLevel = false;
   }
 
   if (combatLevelNum < 1) {
    combatLevel.innerHTML = "1";
    combatLevelSimple = 1;
   }
   else if (combatLevelNum < 3) {
    combatLevel.innerHTML = "2";
    combatLevelSimple = 2;
   }
   else if (combatLevelNum < 6) {
    combatLevel.innerHTML = "3";
    combatLevelSimple = 3;
   }
   else if (combatLevelNum < 12) {
    combatLevel.innerHTML = "4";
    combatLevelSimple = 4;
   }
   else {
    combatLevel.innerHTML = "5";
    combatLevelSimple = 5;
    combatLevel.style.color = "white"
    combatLevel.style.textShadow = "0 0 3px white"
   }
 
   if (combatLevelSimple > newCombatLevel && myPlayer.combatLevel !== 0) {
     changeCombatLevel = true;
     levelUp.src = "./Textures/levellUpCombat.png"
     levelUp.classList.add('fadeInAnim');
     levelUpCircle.classList.add('rotateAnim');
     levelUp.style.display = "block";
     levelUpCircle.style.display = "block";
     levelUpAudio.play();
 
     setTimeout(() => {
       levelUp.style.display = "none";
       levelUpCircle.style.display = "none";
       levelUp.classList.remove('fadeInAnim');
       levelUpCircle.classList.remove('rotateAnim');
     }, 5000);
   }
 
   generalLevelCombat = combatLevelSimple;
 
   // Combat level <

  // Exploring level >

  let exploringLevelNum = Math.trunc(myPlayer.exploringLevel / 1000);

  if (changeExploringLevel === true && myPlayer.exploringLevel !== 0) {
    if (exploringLevelNum < 1) {
      newExploringLevel = 1;
    }
    else if (exploringLevelNum < 3) {
      newExploringLevel = 2;
    }
    else if (exploringLevelNum < 6) {
      newExploringLevel = 3;
    }
    else if (exploringLevelNum < 12) {
      newExploringLevel = 4;
    }
    else {
      newExploringLevel = 5;
    }

    changeExploringLevel = false;
  }

  if (exploringLevelNum < 1) {
   exploringLevel.innerHTML = "1";
   exploringLevelSimple = 1;
  }
  else if (exploringLevelNum < 3) {
   exploringLevel.innerHTML = "2";
   exploringLevelSimple = 2;
  }
  else if (exploringLevelNum < 6) {
   exploringLevel.innerHTML = "3";
   exploringLevelSimple = 3;
  }
  else if (exploringLevelNum < 12) {
   exploringLevel.innerHTML = "4";
   exploringLevelSimple = 4;
  }
  else {
   exploringLevel.innerHTML = "5";
   exploringLevelSimple = 5;
   exploringLevel.style.color = "white"
   exploringLevel.style.textShadow = "0 0 3px white"
  }

  if (exploringLevelSimple > newExploringLevel && myPlayer.exploringLevel !== 0) {
    changeExploringLevel = true;
    levelUp.src = "./Textures/levellUpExploring.png"
    levelUp.classList.add('fadeInAnim');
    levelUpCircle.classList.add('rotateAnim');
    levelUp.style.display = "block";
    levelUpCircle.style.display = "block";
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUpCircle.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
      levelUpCircle.classList.remove('rotateAnim');
    }, 5000);
  }

  generalLevelExploring = exploringLevelSimple;

  // Exploring level <

  // Cooking level >

  let cookingLevelNum = Math.trunc(myPlayer.cookingLevel / 1000);

  if (changeCookingLevel === true && myPlayer.cookingLevel !== 0) {
    if (cookingLevelNum < 1) {
      newCookingLevel = 1;
    }
    else if (cookingLevelNum < 3) {
      newCookingLevel = 2;
    }
    else if (cookingLevelNum < 6) {
      newCookingLevel = 3;
    }
    else if (cookingLevelNum < 12) {
      newCookingLevel = 4;
    }
    else {
      newCookingLevel = 5;
    }

    changeCookingLevel = false;
  }

  if (cookingLevelNum < 1) {
    cookingLevel.innerHTML = "1";
    cookingLevelSimple = 1;
  }
  else if (cookingLevelNum < 3) {
    cookingLevel.innerHTML = "2";
    cookingLevelSimple = 2;
  }
  else if (cookingLevelNum < 6) {
    cookingLevel.innerHTML = "3";
    cookingLevelSimple = 3;
  }
  else if (cookingLevelNum < 12) {
    cookingLevel.innerHTML = "4";
    cookingLevelSimple = 4;
  }
  else {
    cookingLevel.innerHTML = "5";
    cookingLevelSimple = 5;
    cookingLevel.style.color = "white"
    cookingLevel.style.textShadow = "0 0 3px white"
  }

  if (cookingLevelSimple > newCookingLevel && myPlayer.cookingLevel !== 0) {
    changeCookingLevel = true;
    levelUp.src = "./Textures/levellUpCooking.png"
    levelUp.classList.add('fadeInAnim');
    levelUpCircle.classList.add('rotateAnim');
    levelUp.style.display = "block";
    levelUpCircle.style.display = "block";
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUpCircle.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
      levelUpCircle.classList.remove('rotateAnim');
    }, 5000);
  }

  generalLevelCooking = cookingLevelSimple;

  // Cooking level <

  // Fishing level >

  let fishingLevelNum = Math.trunc(myPlayer.fishingLevel / 1000);

  if (changeFishingLevel === true && myPlayer.fishingLevel !== 0) {
    if (fishingLevelNum < 1) {
      newFishingLevel = 1;
    }
    else if (fishingLevelNum < 3) {
      newFishingLevel = 2;
    }
    else if (fishingLevelNum < 6) {
      newFishingLevel = 3;
    }
    else if (fishingLevelNum < 12) {
      newFishingLevel = 4;
    }
    else {
      newFishingLevel = 5;
    }

    changeFishingLevel = false;
  }

  if (fishingLevelNum < 1) {
    fishingLevel.innerHTML = "1";
    fishingLevelSimple = 1;
  }
  else if (fishingLevelNum < 3) {
    fishingLevel.innerHTML = "2";
    fishingLevelSimple = 2;
  }
  else if (fishingLevelNum < 6) {
    fishingLevel.innerHTML = "3";
    fishingLevelSimple = 3;
  }
  else if (fishingLevelNum < 12) {
    fishingLevel.innerHTML = "4";
    fishingLevelSimple = 4;
  }
  else {
    fishingLevel.innerHTML = "5";
    fishingLevelSimple = 5;
    fishingLevel.style.color = "white"
    fishingLevel.style.textShadow = "0 0 3px white"
  }

  if (fishingLevelSimple > newFishingLevel && myPlayer.fishingLevel !== 0) {
    changeFishingLevel = true;
    levelUp.src = "./Textures/levellUp.png"
    levelUp.classList.add('fadeInAnim');
    levelUpCircle.classList.add('rotateAnim');
    levelUp.style.display = "block";
    levelUpCircle.style.display = "block";
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUpCircle.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
      levelUpCircle.classList.remove('rotateAnim');
    }, 5000);
  }

  generalLevel = fishingLevelSimple;

  // Fishing level <

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
      if (artifact.name === "rags") {
        artifactInventory[`cape1`].style.background = `url(${artifact.image})`;
        artifactInventory[`cape1`].style.backgroundSize = 'cover';
        if (!myPlayer.artifact.length) {
          artifactInventory[`cape1`].addEventListener("mousedown", (e) => {
            interactInventory(artifact);
            audioEquip.play();
          });
        }
      }

      if (artifact.name === "fisherman") {
        artifactInventory[`cape2`].style.background = `url(${artifact.image})`;
        artifactInventory[`cape2`].style.backgroundSize = 'cover';
        if (!myPlayer.artifact.length) {
          artifactInventory[`cape2`].addEventListener("mousedown", (e) => {
            interactInventory(artifact);
            audioEquip.play();
          });
        }
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

  // inventorySlots[`inventorySlot0`].style.background = `none`;

  if (myPlayer.inventory.length !== 0) {
      // console.log(myPlayer.inventory)
      for (let i = 0; i < 9; i++) {


        if (myPlayer.inventory[i]) {
          inventorySlots[`inventorySlot${i}`].style.background = `url(${myPlayer.inventory[i].image})`;
        } else {
          inventorySlots[`inventorySlot${i}`].style.background = `none`;
        }

          inventorySlots[`inventorySlot${i}`].style.backgroundSize = '70px';
          inventorySlots[`inventorySlot${i}`].style.backgroundPosition = 'center';
          inventorySlots[`inventorySlot${i}`].style.backgroundRepeat = 'no-repeat';

          function deleteInventoryReference () {
            deleteInventory(myPlayer.inventory[i], i);
            audioClick.play();
          }
          
          if (deleting) {
            inventorySlots[`inventorySlot${i}`].addEventListener("mousedown", deleteInventoryReference);
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
  console.log("OBTAINED", item)
  const image = item.image;
  obtainedAnim(image);

  //Quest progress >
    if (myPlayer.questsOngoing.some(questItem => questItem[0].name === "SlimyProblem" && item.name === "sardin")) {
      let questItem = myPlayer.questsOngoing.find(questItem => questItem[0].name === "SlimyProblem");
      progressQuestCounter(questItem, 2);
    }
  //Quest progress <

});

let cookingColor = 0;

socket.on("startCooking", (item) => {
  const image = item.image;
  cookingItem.style.backgroundImage = `url(${image})`
  cookingItem.style.backgroundSize = "cover"
  console.log("cooking started")
  cookingAudio.play()
  cookingAudio.loop = true

  const intervalCooking = setInterval(() => {

    if (cookingColor > 1) {
      clearInterval(intervalCooking)
      cookingColor = 0;
      cookingItem.style.backgroundImage = `none`
      currentlyCooking = false

      cookingAudio.pause();
      cookingAudio.currentTime = 0;
      cookingAudio.loop = false

      socket.emit("cookingFinished", item);
    }

    cookingItem.style.filter = `sepia(${cookingColor})`
    cookingColor += 0.15;

  }, 1000);
});

let intervalCanvasBase;

socket.on("loginAttempt", (msg) => {

  if(msg === "success") {
    audioIntro.pause();
    loggedIn.play();
    intervalCanvasBase = setInterval(canvasLobbyLoop, 16.67); //Initial canvas
    // intervalCanvasBase = setInterval(canvasIslandOneLoop, 16.67); //Initial canvas
    console.log("heqksdoqjsdo")

    console.log("logged in")

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

let grassShopAvailable = false;
let grassOpenShop = false;

let IslandChestAvailable = false;
let IslandOpenChest = false;
let IslandChestOpened = false;

let grassCookingAvailable = false;
let grassOpenCooking = false;
let currentlyCooking = false;

let grassCraftingAvailable = false;
let grassOpenCrafting = false;
let currentlyCrafting = false;

let grassExploreAvailable = false;
let grassOpenExplore = false;

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

let noMovement = false;

setInterval(() => {
  playerLocation = [playerX, playerY];
  socket.emit("playerLocation", playerLocation);
  socket.emit("inputs", inputs);
}, 100);

window.addEventListener("keydown", (e) => {
  questHub.style.display = "none"

  if (!noMovement) {

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

  }

  //Fishing Minigame >

  if(e.key === "e" && fishAvailable === true && fishing === false) {

    fishingBarHit.classList.add('startFish');
    noMovement = true

    audioSplash.play();

    fishingGame.style.display = "block";
    fishing = true;

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
          noMovement = false

          setTimeout(() => {

            fishingGame.style.display = "none";
            fishing = false;
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

    if (marginFish < 65 && marginFish > 35) {

      socket.emit("fishing", "trying");
      cameraShake();
      marginFish = 100;
      audioClick.play();
      noMovement = false
    };
  }

  //Fishing Minigame <


  //Shop grasslands open >

  if(e.key === "e" && grassShopAvailable & !grassOpenShop) {
    grassOpenShop = true;
    openShopAudio.play();
  } else if (e.key === "e" && grassShopAvailable & grassOpenShop) {
    grassOpenShop = false;
  }

  //Shop grasslands open <

  //Cooking grasslands open >

  if(e.key === "e" && grassCookingAvailable & !grassOpenCooking) {
    grassOpenCooking = true;
    openCookingAudio.play();
    cookingSong.play()
    oilFry.play()
  } else if (e.key === "e" && grassCookingAvailable & grassOpenCooking) {
    cookingSong.pause()
    oilFry.pause()
    grassOpenCooking = false;
  }

  //Cooking grasslands open <
  
  //Crafting grasslands open >

  if(e.key === "e" && grassCraftingAvailable & !grassOpenCrafting) {
    grassOpenCrafting = true;
    noMovement = true

  } else if (e.key === "e" && grassCraftingAvailable & grassOpenCrafting) {
    noMovement = false
    grassOpenCrafting = false;
  }

  //Crafting grasslands open <

  //Explore grasslands open >

  if(e.key === "e" && grassExploreAvailable & !grassOpenExplore) {
    grassOpenExplore = true;
    paperAudio.play();
  } else if (e.key === "e" && grassExploreAvailable & grassOpenExplore) {
    grassOpenExplore = false;
  }

  //Explore grasslands open <

  //Chest island open >

  if(e.key === "e" && IslandChestAvailable & !IslandOpenChest) {
    IslandOpenChest = true;
    console.log(IslandOpenChest)
    openShopAudio.play();
  } else if (e.key === "e" && IslandChestAvailable & IslandOpenChest) {
    IslandOpenChest = false;
  }

  //Chest island open <

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
let projectilesClient = [];
let recoil = 0;
let shooting = false;

canvasLobby.addEventListener("mousedown", (e) => {
  if (shootingBlock === false) {
    if (myPlayer.weapon[0]) {
      if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {
        audioShootNature.play();
          const angle = Math.atan2(
            e.clientY - canvasLobby.height / 2,
            e.clientX - canvasLobby.width / 2
          );
          // socket.emit("projectile", angle);
          // cameraShake();

          if (myPlayer?.weapon[0].name === "arcaneStaffCommon") {

            projectilesClient.push({
              angle,
              x: myPlayer.x + 20,
              y: myPlayer.y + 50,
              timeLeft: 200,
              playerId: socket.id,
            }) 

            shooting = true;

            setTimeout(() => {
              shooting = false;
            }, 20);
  
            const interval = setInterval(() => {
                if (mainSkillCooldown > 2) {
                    mainSkillCooldown = 0;
                    recoil = 0
                    clearInterval(interval);
                }
                mainSkillCooldown++;
                recoil += 4
            }, 20);
          }
          else if (myPlayer?.weapon[0].name === "solarStaffCommon") {

            projectilesClient.push({
              angle,
              x: myPlayer.x + 20,
              y: myPlayer.y + 50,
              timeLeft: 200,
              playerId: socket.id,
            }) 

            shooting = true;

            setTimeout(() => {
              shooting = false;
            }, 20);
  
            const interval = setInterval(() => {
                if (mainSkillCooldown > 2) {
                    mainSkillCooldown = 0;
                    recoil = 0
                    clearInterval(interval);
                }
                mainSkillCooldown++;
                recoil += 4
            }, 20);
          }
          else if (myPlayer?.weapon[0].name === "nuclearStaffCommon") {

            projectilesClient.push({
              angle,
              x: myPlayer.x + 20,
              y: myPlayer.y + 50,
              timeLeft: 200,
              playerId: socket.id,
            }) 

            shooting = true;

            setTimeout(() => {
              shooting = false;
            }, 20);
  
            const interval = setInterval(() => {
                if (mainSkillCooldown > 2) {
                    mainSkillCooldown = 0;
                    recoil = 0
                    clearInterval(interval);
                }
                mainSkillCooldown++;
                recoil += 4
            }, 20);
          }

          else if (myPlayer?.weapon[0].name === "willowStick") {

            const bullet1 = angle + 0.1
            const bullet2 = angle - 0.1

            projectilesClient.push({
              bullet1,
              x: myPlayer.x + 20,
              y: myPlayer.y + 50,
              timeLeft: 200,
              playerId: socket.id,
            }) 

            projectilesClient.push({
              bullet2,
              x: myPlayer.x + 20,
              y: myPlayer.y + 50,
              timeLeft: 200,
              playerId: socket.id,
            }) 

            shooting = true;

            setTimeout(() => {
              shooting = false;
            }, 70);
  
            const interval = setInterval(() => {
                if (mainSkillCooldown > 2) {
                    mainSkillCooldown = 0;
                    recoil = 0
                    clearInterval(interval);
                }
                mainSkillCooldown++;
                recoil += 8
            }, 50);
          }

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
    // socket.emit("weaponAngle", angleMouse);

    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    }
});
//Weapon aim <

//Player Animation >
let playerSpriteWidth = character.width / 6;
let playerSpriteHeight = character.height / 4;
let playerWidth = character.width / 6;
let playerHeight = character.height / 4;
let playerZoomX = 140;
let playerZoomY = 140;
let generalZoom = 5;

let framesPlayerTotal = 6;
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

let enemyWidth = slime.width / 4;
let enemyHeight = slime.height / 1;
let framesEnemyTotal = 4;
let frameCurrentEnemy = 0;
let enemyCutX = 0;
let enemyCutY = 0;
let enemyFramesDrawn = 0;
let enemyAnimDelay = 2;

function spawnSlime() {

  const Slime = {
    damage: 0,
    health: 3,
    width: 100,
    height: 100,
    img: "slime.png",
    speed: 0.5,
    spriteSheetAmt: 4,
    type: "slime",
    x: 3552,
    y: 3594,
    originX: 3552,
    originY: 3694,
    nextTarget: slimeGetRandomCoords(),
    nextTargetCount: Math.floor(Math.random() * 100) + 50,
    enabled: true,
    disabledTimer: 500,
    damaged: 0,
    angle: 0
  }
  setTimeout(() => {   
    enemiesClient.push(Slime)
  }, 3000);

}

spawnSlime()

function slimeGetRandomCoords() {
  const minX = 3552 - 500;
  const maxX = 3552 + 100;
  const minY = 3694 - 250;
  const maxY = 3694 - 100;
  let newCoords = {
      x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
      y: Math.floor(Math.random() * (minY - maxY + 1)) + minY,
  }
  return newCoords;
}

let slimeSpawn = true;

// Enemy <

//Permissions >

let fishingArea = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0,
};
let fishAvailable = false;

//Permissions <

let lastFrameTime = 0;
const targetFrameTime = 1000 / 60; // 60 frames per second

//Drawing order >
const islandOneObj = [
  {
    img: Structure1,
    x: 2750,
    y: 3768,
    width: 49,
    height: 77
  }
]

function drawOnTop (img, x, y, width, height, cx, cy) {
  canvas.drawImage(
    img,
    x - (width * generalZoom) - cx,
    y - (height * generalZoom) - cy,
    width * generalZoom,
    height * generalZoom,
  );
}
//Drawing order <

//Base Map Canvas >

function canvasLobbyLoop() {
  // canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);
  canvas.clearRect(0, 0, 4500, 4500);
  canvas.imageSmoothingEnabled = false;

  let cameraX = 0;
  let cameraY = 0;
  if (myPlayer) {
    cameraX = playerX - canvasLobby.width / 2 + 10;
    cameraY = playerY - canvasLobby.height / 2 + 50;
  }


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

    for (const projectile of projectilesClient) {
      projectile.x += Math.cos(projectile.angle || projectile.bullet1 || projectile.bullet2) * 35;
      projectile.y += Math.sin(projectile.angle || projectile.bullet1 || projectile.bullet2) * 35;
    }

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
    let playerColminX = playerX - cameraX - 30;
    let playerColminY = playerY - cameraY + 50;
    let playerColLengthX = playerWidth + 50;
    let playerColLengthY = playerHeight + 22;
    canvas.beginPath();
    canvas.fillStyle = "rgb(255, 0, 13, 0.0)"; //Change the last value to 0.3 to make it visible
    canvas.fillRect(playerColminX, playerColminY, playerColLengthX, playerColLengthY);
    //Player Collision <


    //Player Location >
    // console.log(myPlayer.x, myPlayer.y)
    //Player Location <

    //Grasslands walls >
    let wallsVisibility = 0.0;

    //Shop Grasslands activator >
    const grasslandsShopx = 2980 - cameraShakeX - cameraX;
    const grasslandsShopY = 3090 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(255, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grasslandsShopx, grasslandsShopY, 200, 300);

    if (playerColminX + playerColLengthX > grasslandsShopx && playerColminY + playerColLengthY > grasslandsShopY && playerColminY < grasslandsShopY + 300 && playerColminX < grasslandsShopx + 200) {
      if (grassOpenShop &&  shop.style.display !== "flex") {
        shop.style.display = "flex";
        shop.style.top = "20px";
        grasslandsEnviroment.pause();
        shopSong.play();
      } else if (!grassOpenShop) {
        shop.style.display = "none";
        shopSong.pause();
        shopSong.currentTime = 0;
        grasslandsEnviroment.play();
      }
      grassShopAvailable = true;
    } else {
      grassShopAvailable = false;
      grassOpenShop = false;
      shop.style.display = "none";
      grasslandsEnviroment.play();
      shopSong.pause();
      shopSong.currentTime = 0;
    }

    if (fishingLevelSimple >= 5) {
      shopItem3.src = "./cardsShop/shopMellyCape.png"
    }
    //Shop Grasslands activator <

    //Cooking Grasslands activator >
    const grasslandsCookingx = 2300 - cameraShakeX - cameraX;
    const grasslandsCookingY = 3000 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(255, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grasslandsCookingx, grasslandsCookingY, 200, 300);

    if (playerColminX + playerColLengthX > grasslandsCookingx && playerColminY + playerColLengthY > grasslandsCookingY && playerColminY < grasslandsCookingY + 300 && playerColminX < grasslandsCookingx + 200) {
      if (grassOpenCooking) {
        cookingContainer.style.display = "block";
      } else {
        cookingContainer.style.display = "none";
      }
      grassCookingAvailable = true;
    } else {
      grassCookingAvailable = false;
      grassOpenCooking = false;
      cookingPot.style.opacity = "0";
    }
    //Cooking Grasslands activator <
    
    //Crafting Grasslands activator >
    const grasslandsCraftingx = 2600 - cameraShakeX - cameraX;
    const grasslandsCraftingY = 3000 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(255, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grasslandsCraftingx, grasslandsCraftingY, 200, 300);

    if (playerColminX + playerColLengthX > grasslandsCraftingx && playerColminY + playerColLengthY > grasslandsCraftingY && playerColminY < grasslandsCraftingY + 300 && playerColminX < grasslandsCraftingx + 200) {
      if (grassOpenCrafting) {
        craftingContainer.style.display = "block";
      } else {
        craftingContainer.style.display = "none";
      }
      grassCraftingAvailable = true;
    } else {
      grassCraftingAvailable = false;
      grassOpenCrafting = false;
    }
    //Crafting Grasslands activator <

    //Explore Grasslands activator >
    const grasslandsExplorex = 2000 - cameraShakeX - cameraX;
    const grasslandsExploreY = 3300 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 255, 0, ${wallsVisibility})`;
    canvas.fillRect(grasslandsExplorex, grasslandsExploreY, 200, 300);

    if (playerColminX + playerColLengthX > grasslandsExplorex && playerColminY + playerColLengthY > grasslandsExploreY && playerColminY < grasslandsExploreY + 300 && playerColminX < grasslandsExplorex + 200) {
      if (grassOpenExplore) {
        exploreMap.style.visibility = "visible";
      } else {
        exploreMap.style.visibility = "hidden";
      }
      grassExploreAvailable = true;
    } else {
      grassExploreAvailable = false;
      grassOpenExplore = false;
      exploreMap.style.visibility = "hidden";
    }
    //Explore Grasslands activator <

    //Leftwall of island
    const grassLeftWallX = 2130 - cameraShakeX - cameraX;
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
    const grassRightWallX5 = 1580 - cameraShakeX - cameraX;
    const grassRightWallY5 = 3600 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX5, grassRightWallY5, 2200, 20);

    //Wall top of the island
    const grassRightWallX6 = 2630 - cameraShakeX - cameraX;
    const grassRightWallY6 = 3230 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX6, grassRightWallY6, 800, 20);

    //Wall top of the island
    const grassRightWallX7 = 1980 - cameraShakeX - cameraX;
    const grassRightWallY7 = 3230 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX7, grassRightWallY7, 1200, 20);

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
      playerColminX + playerColLengthX > grassRightWallX5 && playerColminY + playerColLengthY > grassRightWallY5 && playerColminY < grassRightWallY5 + 20 && playerColminX < grassRightWallX5 + 2200
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
    if (player.room === myPlayer.room) {

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
        } else if (player.artifact[0].name === "fisherman") {
          artifact = fishermanCape;
        } else {
          artifact = transparentCape;
        }
      }
      //Cape <

      //Movement >
      if (player.username === myPlayer.username) {
        playerWidth = character.width / 6
        playerHeight = character.height / 4;

        if (player.anim === "idleRight" && player.lastLooked === "right") {
          frameCurrentPlayer = frameCurrentPlayer % 4;

          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "idleRight" && player.lastLooked === "left") {
          frameCurrentPlayer = frameCurrentPlayer % 4;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runRight") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runLeft") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
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
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "idleRight" && player.lastLooked === "left") {
          frameCurrentPlayer = frameCurrentPlayer % 4;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runRight") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runLeft") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
    }
      //Movement <

      // Weapon >
     if (player.weapon[0]) {

      if (player.username === myPlayer.username) {
        // console.log(player.weapon[0])
        canvas.save(); // Save the current canvas state
        canvas.translate(playerX - cameraX +18 - recoil, playerY - cameraY +70); // Translate to the player's position
        canvas.rotate(angleMouse); // Rotate based on the mouse angle
        if (player.weapon[0].name === "solarStaffCommon") {
          canvas.drawImage(solarStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
        }
        else if (player.weapon[0].name === "arcaneStaffCommon") {
          canvas.drawImage(arcaneStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
        }
        else if (player.weapon[0].name === "nuclearStaffCommon") {
          canvas.drawImage(nuclearStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
        }
      } else {
        canvas.save(); // Save the current canvas state
        canvas.translate(player.x - cameraX +18, player.y - cameraY +50); // Translate to the player's position
        canvas.rotate(player.weaponAngle); // Rotate based on the mouse angle
        console.log(player.weapon[0])
        if (player.weapon[0].name === "solarStaffCommon") {
          canvas.drawImage(solarStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
        }
        else if (player.weapon[0].name === "arcaneStaffCommon") {
          canvas.drawImage(arcaneStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
        }
        else if (player.weapon[0].name === "nuclearStaffCommon") {
          canvas.drawImage(nuclearStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
        }
       }

      }
      canvas.restore(); // Restore the canvas state to what it was before translation and rotation
      // Weapon <

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

        canvas.beginPath();
        canvas.font = "bolder 10px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(Math.trunc((player.cookingLevel / 1000) + (player.fishingLevel / 1000)) , playerX - cameraX + 10, playerY - cameraY - 32.5);
      } else {
        canvas.drawImage(nameBubbleGreen, player.x - cameraX -40, player.y - cameraY -51, 100,50)

        canvas.beginPath();
        canvas.font = "bolder 14px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(player.username, player.x - cameraX +10, player.y - cameraY -10);


        canvas.beginPath();
        canvas.font = "bolder 10px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(Math.trunc((player.cookingLevel / 1000) + (player.fishingLevel / 1000)), playerX - cameraX + 10, playerY - cameraY - 32.5);
      }
      //Username

    }

}

  for (const projectile of projectilesClient) {
    if (myPlayer?.weapon[0]?.name === "solarStaffCommon") {
      canvas.drawImage(bulletStick, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
    }
    if (myPlayer?.weapon[0]?.name === "arcaneStaffCommon") {
      canvas.drawImage(bulletStickBlue, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
    }
  }

  playerFramesDrawn++;
  if (playerFramesDrawn >= 6) {
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

let particles = [];

//Island One Map Canvas >

function canvasIslandOneLoop() {
  // canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);
  canvas.clearRect(0, 0, 4500, 4500);
  canvas.imageSmoothingEnabled = false;

  let cameraX = 0;
  let cameraY = 0;
  if (myPlayer) {
    cameraX = playerX - canvasLobby.width / 2 + 10;
    cameraY = playerY - canvasLobby.height / 2 + 50;
  }


  // canvas.drawImage(mapLobby, cameraShakeX - cameraX, cameraShakeY - cameraY, 4500, 4500);

  //Map Animation >

  // frameCurrentMap = frameCurrentMap % 4;
  // mapCutX = frameCurrentMap * 1000;

  canvas.drawImage(
    islandOneMap,
    mapCutX,
    mapCutY,
    1000,
    1000,
    cameraShakeX - cameraX,
    cameraShakeY - cameraY,
    4500,
    4500,
  );


  for (const obj of islandOneObj) {
    if ((playerY - cameraY + 120) >= (obj.y - cameraY)) {
      drawOnTop(obj.img, obj.x, obj.y, obj.width, obj.height, cameraX, cameraY)
    }
  }

  mapFramesDrawn++;

  if (mapFramesDrawn >= 10) {
    frameCurrentMap++;
    mapFramesDrawn = 0;
  }

  //Map Animation <

  const maxParticles = 1;

  if (shooting) {
    for (let i = 0; i < maxParticles; i++) {
      const angle = angleMouse + (Math.random() * 0.2 * 2 - 0.2);; // Random angle
      const radius = Math.random() * 20; // Random radius (adjust as needed)
      const speed = Math.floor(Math.random() * (20 - 8 + 1)) + 8;; // Random speed (adjust as needed)
      const size = 10; // Random size between 3 and 8
      const particleX = myPlayer.x;
      const particleY = myPlayer.y;

      const randomNumber = Math.floor(Math.random() * 2) + 1;
      
      if (randomNumber === 1) {
        if (myPlayer?.weapon[0]?.name === "stick") {
          particles.push({ x: 1, y: 1, size: size, color: '#ffde8c', speed: speed, angle: angle, initalX: particleX, intialY: particleY });
        }
        else if (myPlayer?.weapon[0]?.name === "willowStick") {
          particles.push({ x: 1, y: 1, size: size, color: '#8affd4', speed: speed, angle: angle, initalX: particleX, intialY: particleY });
        }
      } else {

        particles.push({ x: 1, y: 1, size: size, color: 'white', speed: speed, angle: angle, initalX: particleX, intialY: particleY });
      }

    }

  }

  particles.forEach(particle => {
    canvas.beginPath();
    canvas.fillStyle = particle.color;
    canvas.fillRect(particle.initalX + particle.x - cameraX - 10, particle.intialY + particle.y - cameraY + 50, particle.size, particle.size);

    // Move particles
    particle.x += Math.cos(particle.angle) * particle.speed;
    particle.y += Math.sin(particle.angle) * particle.speed;

    // Decrease size over time
    particle.size -= 0.1;
    particle.speed -= 0.05 * particle.speed
  });

  particles = particles.filter(particle => particle.size > 0 );


  //Local Actions >

  if (myPlayer) {

    for (const projectile of projectilesClient) {
      projectile.x += Math.cos(projectile.angle || projectile.bullet1 || projectile.bullet2) * 35;
      projectile.y += Math.sin(projectile.angle || projectile.bullet1 || projectile.bullet2) * 35;
    }

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
    let playerColminX = playerX - cameraX - 30;
    let playerColminY = playerY - cameraY + 70;
    let playerColLengthX = playerWidth + 50;
    let playerColLengthY = playerHeight + 22;
    canvas.beginPath();
    canvas.fillStyle = "rgb(255, 0, 13, 0.0)"; //Change the last value to 0.3 to make it visible
    canvas.fillRect(playerColminX, playerColminY, playerColLengthX, playerColLengthY);
    console.log(playerX - 30 - 150, playerY + 70 - 180)
    //Player Collision <


    //Player Location >
    // console.log(myPlayer.x, myPlayer.y)
    //Player Location <

    //Grasslands walls >
    let wallsVisibility = 0.0;

    //Chest Grasslands activator >
    const grasslandsShopx = 3180 - cameraShakeX - cameraX;
    const grasslandsShopY = 2700 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(255, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grasslandsShopx, grasslandsShopY, 200, 300);

    if (playerColminX + playerColLengthX > grasslandsShopx && playerColminY + playerColLengthY > grasslandsShopY && playerColminY < grasslandsShopY + 300 && playerColminX < grasslandsShopx + 200) {
      if (IslandOpenChest) {
        rewardFrame.style.visibility = "visible";
        rewardFrame.style.opacity = "1";
      } else {
        rewardFrame.style.opacity = "0";
        rewardFrame.style.visibility = "hidden";
      }
      IslandChestAvailable = true;
    } else {
      IslandChestAvailable = false;
      IslandOpenChest = false;
      rewardFrame.style.visibility = "hidden";
    }
    //Chest Grasslands activator <

    //Cooking Grasslands activator >
    const grasslandsCookingx = 0 - cameraShakeX - cameraX;
    const grasslandsCookingY = 0 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(255, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grasslandsCookingx, grasslandsCookingY, 200, 300);

    if (playerColminX + playerColLengthX > grasslandsCookingx && playerColminY + playerColLengthY > grasslandsCookingY && playerColminY < grasslandsCookingY + 300 && playerColminX < grasslandsCookingx + 200) {
      if (grassOpenCooking) {
        cookingPot.style.opacity = "1";
      } else {
        cookingPot.style.opacity = "0";
      }
      grassCookingAvailable = true;
    } else {
      grassCookingAvailable = false;
      grassOpenCooking = false;
      cookingPot.style.opacity = "0";
    }
    //Cooking Grasslands activator <

    //Explore Grasslands activator >
    const grasslandsExplorex = 2000 - cameraShakeX - cameraX;
    const grasslandsExploreY = 3300 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 255, 0, ${wallsVisibility})`;
    canvas.fillRect(grasslandsExplorex, grasslandsExploreY, 200, 300);

    if (playerColminX + playerColLengthX > grasslandsExplorex && playerColminY + playerColLengthY > grasslandsExploreY && playerColminY < grasslandsExploreY + 300 && playerColminX < grasslandsExplorex + 200) {
      if (grassOpenExplore) {
        exploreMap.style.visibility = "visible";
        exploreMap.style.opacity = "visible";
      } else {
        exploreMap.style.visibility = "hidden";
      }
      grassExploreAvailable = true;
    } else {
      grassExploreAvailable = false;
      grassOpenExplore = false;
      exploreMap.style.visibility = "hidden";
    }
    //Explore Grasslands activator <

    //Leftwall of island
    const grassLeftWallX = 1668 - cameraShakeX - cameraX;
    const grassLeftWallY = 3000 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassLeftWallX, grassLeftWallY, -20, 600);
   
    //Leftwall up of island
    const grassLeftWallX12 = 2332 - cameraShakeX - cameraX;
    const grassLeftWallY12 = 2300 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassLeftWallX12, grassLeftWallY12, -20, 600);
    
    //Leftwall up of island
    const grassLeftWallX13 = 1920 - cameraShakeX - cameraX;
    const grassLeftWallY13 = 2550 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassLeftWallX13, grassLeftWallY13, -20, 600);
    
    //Leftwall down of island
    const grassLeftWallX14 = 2196 - cameraShakeX - cameraX;
    const grassLeftWallY14 = 3554 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassLeftWallX14, grassLeftWallY14, -20, 600);
    
    //Leftwall down of island
    const grassLeftWallX15 = 1920 - cameraShakeX - cameraX;
    const grassLeftWallY15 = 3410 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassLeftWallX15, grassLeftWallY15, -20, 600);

    //Wall right of the dock
    const grassRightWallX1 = 3700 - cameraShakeX - cameraX;
    const grassRightWallY1 = 2800 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX1, grassRightWallY1, 20, 800);

    //Wall right top of the island
    const grassRightWallX2 = 4080 - cameraShakeX - cameraX;
    const grassRightWallY2 = 2200 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX2, grassRightWallY2, 20, 300);

    //Wall right top left up of the island
    const grassRightWallX16 = 1916 - cameraShakeX - cameraX;
    const grassRightWallY16 = 2874 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX16, grassRightWallY16, 420, 20);

    //Wall right top left down of the island
    const grassRightWallX17 = 1664 - cameraShakeX - cameraX;
    const grassRightWallY17 = 3122 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX17, grassRightWallY17, 260, 20);

    //Wall right top of the island
    const grassRightWallX11 = 3320 - cameraShakeX - cameraX;
    const grassRightWallY11 = 2746 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX11, grassRightWallY11, 20, 400);
    
    //Wall right top of the island
    const grassRightWallX12 = 2880 - cameraShakeX - cameraX;
    const grassRightWallY12 = 2506 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX12, grassRightWallY12, 20, 400);

    //Wall right down of the island
    const grassRightWallX3 = 3080 - cameraShakeX - cameraX;
    const grassRightWallY3 = 3450 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX3, grassRightWallY3, 20, 300);

    //Walls of the shop
    const grassRightWallX4 = 0 - cameraShakeX - cameraX;
    const grassRightWallY4 = 0 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX4, grassRightWallY4, 200, 300);

    //Wall bottom of the island
    const grassRightWallX5 = 1580 - cameraShakeX - cameraX;
    const grassRightWallY5 = 3700 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX5, grassRightWallY5, 2200, 20);
    
    //Wall bottom of the island
    const grassRightWallX18 = 0 - cameraShakeX - cameraX;
    const grassRightWallY18 = 3554 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX18, grassRightWallY18, 2200, 20);
    
    //Wall bottom of the island
    const grassRightWallX19 = 0 - cameraShakeX - cameraX;
    const grassRightWallY19 = 3410 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX19, grassRightWallY19, 1920, 20);

    //Wall top of the island
    const grassRightWallX6 = 2630 - cameraShakeX - cameraX;
    const grassRightWallY6 = 2730 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX6, grassRightWallY6, 800, 20);

    //Wall top of the island
    const grassRightWallX7 = 1980 - cameraShakeX - cameraX;
    const grassRightWallY7 = 2730 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX7, grassRightWallY7, 1200, 20);

    //Wall top of the dock
    const grassRightWallX8 = 3326 - cameraShakeX - cameraX;
    const grassRightWallY8 = 3110 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX8, grassRightWallY8, 800, 20);
    
    //Wall top of the ruins
    const grassRightWallX10 = 2880 - cameraShakeX - cameraX;
    const grassRightWallY10 = 2902 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX10, grassRightWallY10, 800, 20);

    //Wall down of the dock
    const grassRightWallX9 = 3080 - cameraShakeX - cameraX;
    const grassRightWallY9 = 3460 - cameraShakeY - cameraY;
    canvas.beginPath();
    canvas.fillStyle = `rgb(0, 0, 0, ${wallsVisibility})`;
    canvas.fillRect(grassRightWallX9, grassRightWallY9, 800, 20);

    //Blockers Right
    if (
      playerColminX + playerColLengthX > grassRightWallX1 && playerColminY > grassRightWallY1 && playerColminY < grassRightWallY1 + 800 && playerColminX < grassRightWallX1 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX2 && playerColminY > grassRightWallY2 && playerColminY < grassRightWallY2 + 300 && playerColminX < grassRightWallX2 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX3 && playerColminY > grassRightWallY3 && playerColminY < grassRightWallY3 + 300 && playerColminX < grassRightWallX3 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX4 && playerColminY > grassRightWallY4 && playerColminY < grassRightWallY4 + 300 && playerColminX < grassRightWallX4 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX11 && playerColminY > grassRightWallY11 && playerColminY < grassRightWallY11 + 400 && playerColminX < grassRightWallX11 + 20
      ||
      playerColminX + playerColLengthX > grassRightWallX12 && playerColminY > grassRightWallY12 && playerColminY < grassRightWallY12 + 400 && playerColminX < grassRightWallX12 + 20

      ) {
      allowedMoveUpRight = false;
    } else {
      allowedMoveUpRight = true;
    }

    //Blockers left
    if (
      playerColminX < grassLeftWallX && playerColminY > grassLeftWallY && playerColminY < grassLeftWallY + 600 && playerColminX > grassLeftWallX - 20
      ||
      playerColminX < grassLeftWallX12 && playerColminY > grassLeftWallY12 && playerColminY < grassLeftWallY12 + 600 && playerColminX > grassLeftWallX12 - 20
      ||
      playerColminX < grassLeftWallX13 && playerColminY > grassLeftWallY13 && playerColminY < grassLeftWallY13 + 600 && playerColminX > grassLeftWallX13 - 20
      ||
      playerColminX < grassLeftWallX14 && playerColminY > grassLeftWallY14 && playerColminY < grassLeftWallY14 + 600 && playerColminX > grassLeftWallX14 - 20
      ||
      playerColminX < grassLeftWallX15 && playerColminY > grassLeftWallY15 && playerColminY < grassLeftWallY15 + 600 && playerColminX > grassLeftWallX15 - 20
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
      ||
      playerColminX + playerColLengthX > grassRightWallX10 && playerColminY + playerColLengthY > grassRightWallY10 && playerColminY < grassRightWallY10 + 20 && playerColminX < grassRightWallX10 + 800
      ||
      playerColminX + playerColLengthX > grassRightWallX16 && playerColminY + playerColLengthY > grassRightWallY16 && playerColminY < grassRightWallY16 + 20 && playerColminX < grassRightWallX16 + 420
      ||
      playerColminX + playerColLengthX > grassRightWallX17 && playerColminY + playerColLengthY > grassRightWallY17 && playerColminY < grassRightWallY17 + 20 && playerColminX < grassRightWallX17 + 260
      ) {
      allowedMoveUpUp = false;
    } else {
      allowedMoveUpUp = true;
    }

    //Blockers down
    if (
      playerColminX + playerColLengthX > grassRightWallX5 && playerColminY + playerColLengthY > grassRightWallY5 && playerColminY < grassRightWallY5 + 20 && playerColminX < grassRightWallX5 + 2200
      ||
      playerColminX + playerColLengthX > grassRightWallX18 && playerColminY + playerColLengthY > grassRightWallY18 && playerColminY < grassRightWallY18 + 20 && playerColminX < grassRightWallX18 + 2200
      ||
      playerColminX + playerColLengthX > grassRightWallX19 && playerColminY + playerColLengthY > grassRightWallY19 && playerColminY < grassRightWallY19 + 20 && playerColminX < grassRightWallX19 + 1920
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
    if (player.room === myPlayer.room) {

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
        } else if (player.artifact[0].name === "fisherman") {
          artifact = fishermanCape;
        } else {
          artifact = transparentCape;
        }
      }
      //Cape <

      //Movement >
      if (player.username === myPlayer.username) {
        playerWidth = character.width / 6
        playerHeight = character.height / 4;

        if (player.anim === "idleRight" && player.lastLooked === "right") {
          frameCurrentPlayer = frameCurrentPlayer % 4;

          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "idleRight" && player.lastLooked === "left") {
          frameCurrentPlayer = frameCurrentPlayer % 4;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runRight") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runLeft") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
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
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "idleRight" && player.lastLooked === "left") {
          frameCurrentPlayer = frameCurrentPlayer % 4;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runRight") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 48,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "runLeft") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            playerX - cameraX + 65,
            playerY - cameraY + 120,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
    }
      //Movement <

      // Weapon >
      if (player.weapon[0]) {

        if (player.username === myPlayer.username) {
          // console.log(player.weapon[0])
          canvas.save(); // Save the current canvas state
          canvas.translate(playerX - cameraX +18 - recoil, playerY - cameraY +70); // Translate to the player's position
          canvas.rotate(angleMouse); // Rotate based on the mouse angle
          if (player.weapon[0].name === "stick") {
            canvas.drawImage(WeaponStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
          }
          else if (player.weapon[0].name === "willowStick") {
            canvas.drawImage(WeaponWillowStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
          }
        } else {
          canvas.save(); // Save the current canvas state
          canvas.translate(player.x - cameraX +18, player.y - cameraY +50); // Translate to the player's position
          canvas.rotate(player.weaponAngle); // Rotate based on the mouse angle
          if (player.weapon[0].name === "stick") {
            canvas.drawImage(WeaponStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
          }
          else if (player.weapon[0].name === "willowStick") {
            canvas.drawImage(WeaponWillowStick ,0, -7.5, 80, 20); // Draw the rectangle centered around the rotated point
          }
         }
  
        }
      canvas.restore(); // Restore the canvas state to what it was before translation and rotation
      // Weapon <

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

        canvas.beginPath();
        canvas.font = "bolder 10px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(Math.trunc((player.cookingLevel / 1000) + (player.fishingLevel / 1000)) , playerX - cameraX + 10, playerY - cameraY - 32.5);
      } else {
        canvas.drawImage(nameBubbleGreen, player.x - cameraX -40, player.y - cameraY -51, 100,50)

        canvas.beginPath();
        canvas.font = "bolder 14px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(player.username, player.x - cameraX +10, player.y - cameraY -10);


        canvas.beginPath();
        canvas.font = "bolder 10px Arial";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(Math.trunc((player.cookingLevel / 1000) + (player.fishingLevel / 1000)), playerX - cameraX + 10, playerY - cameraY - 32.5);
      }
      //Username

    }

}

  for (const projectile of projectilesClient) {
    if (myPlayer?.weapon[0]?.name === "stick") {
      canvas.drawImage(bulletStick, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
    }
    if (myPlayer?.weapon[0]?.name === "willowStick") {
      canvas.drawImage(bulletStickBlue, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
    }
  }


  for (const enemy of enemiesClient) {

          if (enemy.enabled) {
            
            frameCurrentEnemy = frameCurrentEnemy % 4;
            enemyCutX = frameCurrentEnemy * enemyWidth;

            if (enemy.health <= 0) { 
              spawnSlime()
              socket.emit("enemyKilled", "slime");
              enemiesClient.splice(enemiesClient.indexOf(enemy), 1)

              if (myPlayer.questsOngoing.some(questItem => questItem[0].name === "SlimyProblem")) {
                let questItem = myPlayer.questsOngoing.find(questItem => questItem[0].name === "SlimyProblem");
                progressQuestCounter(questItem, 1)
              }

              for (let i = 0; i < 20; i++) {
                const angle = angleMouse + (Math.random() * 0.5 * 2 - 0.2) ;; // Random angle
                const speed = Math.floor(Math.random() * (20 - 8 + 1)) + 5;; // Random speed (adjust as needed)
                const size = 25; // Random size between 3 and 8
                const particleX = enemy.x;
                const particleY = enemy.y;
          
                const randomNumber = Math.floor(Math.random() * 2) + 1;
                
                if (randomNumber === 1) {

                  particles.push({ x: 1, y: 1, size: size, color: '#6d64b6', speed: speed, angle: angle, initalX: particleX, intialY: particleY });
                        
                } else {
          
                  particles.push({ x: 1, y: 1, size: size, color: '#afa6ff', speed: speed, angle: angle, initalX: particleX, intialY: particleY });
                }
          
              }
            }
            
            if (enemy.damaged > 0) {

              enemy.damaged--

                canvas.drawImage(
                  slimeDMG,
                  enemyCutX,
                  enemyCutY,
                  enemyWidth,
                  enemyHeight,
                  enemy.x - cameraX - 30,
                  enemy.y - cameraY,
                  enemy.width * 1.5,
                  enemy.height * 1.5
                );

                  enemy.x += Math.cos(enemy.angle) * enemy.damaged ;
                  enemy.y += Math.sin(enemy.angle) * enemy.damaged;

                  if (enemy.damaged > 8) {

                    

                    for (let i = 0; i < 3; i++) {
                      const angle = angleMouse + (Math.random() * 0.5 * 2 - 0.2);; // Random angle
                      const speed = Math.floor(Math.random() * (20 - 8 + 1)) + 13;; // Random speed (adjust as needed)
                      const size = 15; // Random size between 3 and 8
                      const particleX = enemy.x;
                      const particleY = enemy.y;
                
                      const randomNumber = Math.floor(Math.random() * 2) + 1;
                      
                      if (randomNumber === 1) {
  
                          particles.push({ x: 1, y: 1, size: size, color: '#6d64b6', speed: speed, angle: angle, initalX: particleX, intialY: particleY });
                        
                      } else {
                
                        particles.push({ x: 1, y: 1, size: size, color: '#afa6ff', speed: speed, angle: angle, initalX: particleX, intialY: particleY });
                      }
                
                    }

                  }

 
                
              } else {
                if (enemyHitAudio.currentTime > 0) {
                  enemyHitAudio.currentTime = 0
                  enemyHitAudio.pause()
                }
                enemyWidth = slime.width / 4
                enemyHeight = slime.height / 1;

                canvas.drawImage(
                  slime,
                  enemyCutX,
                  enemyCutY,
                  enemyWidth,
                  enemyHeight,
                  enemy.x - cameraX - 30,
                  enemy.y - cameraY,
                  enemy.width * 1.5,
                  enemy.height * 1.5
                );

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
              }
              
              enemy.nextTargetCount--;
              if (enemy.nextTargetCount <= 0) {
                enemy.nextTarget = slimeGetRandomCoords();
                enemy.nextTargetCount = Math.floor(Math.random() * 100) + 50;;
              }
                
              const username = myPlayer.id; 
              const distance = Math.sqrt(
                (myPlayer.x + 15 - enemy.x) ** 2 + (myPlayer.y + 15 - enemy.y) ** 2
              );
              if (distance <= 15 && !myPlayer.invincible) {
                
                if (myPlayer.health > 1) {
                  myPlayer.health -= 1;
                  // updateHealth(username, myPlayer.health, myPlayer.id);
                } else {
                  myPlayer.x = 1280;
                  myPlayer.y = 1220;
                  myPlayer.health = 3;
                  // updateHealth(username, myPlayer.health, myPlayer.id);
                }
                myPlayer.invincible = true;
                break;
              }
              
              for (const projectile of projectilesClient) {
                if (projectile.x > enemy.x && projectile.x < enemy.x + 100 && projectile.y > enemy.y && projectile.y < enemy.y + 100 && enemy.damaged === 0) {
                  enemy.damaged = 10;
                  enemy.angle = projectile.angle || projectile.bullet1 || projectile.bullet2;
                  projectilesClient.splice(projectilesClient.indexOf(projectile), 1)
                  enemy.health = enemy.health - generalLevelCombat

                  if (enemy.health > 0) {
                    enemyHitAudio.play()
                  } else {
                    splatAudio.play()
                  }
                }
              
              }
          
                  
          } else {
              enemy.disabledTimer--;
              if (enemy.disabledTimer <= 0) {
                  enemy.disabledTimer = 500;
                  enemy.enabled = true;
              }
          }
    }

  for (const obj of islandOneObj) {
    if (!((playerY - cameraY + 120) > (obj.y - cameraY))) {
      drawOnTop(obj.img, obj.x, obj.y, obj.width, obj.height, cameraX, cameraY)
    }
  }


  playerFramesDrawn++;
  if (playerFramesDrawn >= 6) {
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

//Island One Map Canvas <



//Change this to push >

const socket = io(`ws://localhost:5000`);
// const socket = io(`https://arcanyGame.up.railway.app/`);

//Change this to push <

setTimeout(() => {
  let scrollInterval =setInterval(() => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    } else {
      clearInterval(scrollInterval)
    }
  }, 20);
}, 1000);

const lobbyMap = new Image();
lobbyMap.src = "./islands/lobby.png";

const lobbyMapFront = new Image();
lobbyMapFront.src = "./islands/lobbyFront.png";

const islandOneMap = new Image();
islandOneMap.src = "./islands/islandOne.png";

const islandOneMapFront = new Image();
islandOneMapFront.src = "./islands/islandOneFront.png";

const islandOneMapArcane = new Image();
islandOneMapArcane.src = "./islands/islandOneArcane.png";

const islandOneMapArcaneFront = new Image();
islandOneMapArcaneFront.src = "./islands/islandOneArcaneFront.png";

const lobbyCombatArea = new Image();
lobbyCombatArea.src = "./islands/lobbyCombatArea.png";

const lobbyCombatAreaFront = new Image();
lobbyCombatAreaFront.src = "./islands/lobbyCombatAreaFront.png";

const slimeForestPath = new Image();
slimeForestPath.src = "./islands/slimeForestPath.png"

const slimeForestPathFront = new Image();
slimeForestPathFront.src = "./islands/slimeForestPathFront.png"

const mushroomForest = new Image();
mushroomForest.src = "./islands/mushroom.png"

const mushroomForestFront = new Image();
mushroomForestFront.src = "./islands/mushroomFront.png"





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

const treeSimpleEnemy = new Image();
treeSimpleEnemy.src = "./enemies/treeSimpleEnemy.png";

const redMooshroomEnemy = new Image();
redMooshroomEnemy.src = "./enemies/redMooshroomEnemy.png";

let enemiesImages = {
  treeSimpleEnemy: treeSimpleEnemy,
  redMooshroomEnemy: redMooshroomEnemy,
};

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
audioClick.volume = 0.5;
audioClick.loop = false;

const oilFry = new Audio("./audios/oilFry.wav");
oilFry.loop = true;
oilFry.volume = 0.3;

const cookingSong = new Audio("./audios/cookingSong.mp3");
cookingSong.loop = true;
cookingSong.volume = 0.3;

const movezone = new Audio("./audios/movezone.wav");
movezone.loop = false;
movezone.volume = 1;

const audioQuestObtained = new Audio("./audios/questObtained.wav");
audioQuestObtained.volume = 0.4;
audioQuestObtained.loop = false;

const audioEquip = new Audio("./audios/equip.mp3");
audioEquip.loop = false;

const audioBuy = new Audio("./audios/buy.wav");
audioBuy.loop = false;

const audioSplash = new Audio("./audios/splash.mp3");
audioSplash.loop = false;

const audioSuccess = new Audio("./audios/success.mp3");
audioSuccess.loop = false;

const audioIntro = new Audio("./audios/introTune.wav");
audioIntro.loop = true;
audioIntro.volume = 0.5;

const shopSong = new Audio("./audios/shopSong.mp3");
shopSong.loop = true;
shopSong.volume = 0.5;

const loggedIn = new Audio("./audios/loggedIn.mp3");
loggedIn.loop = false;
loggedIn.volume = 0.3;

const glitchArcane = new Audio("./audios/glitchArcane.wav");
glitchArcane.loop = false;
glitchArcane.volume = 0.5;

const ArcaneEnv = new Audio("./audios/ArcaneEnv.mp3");
ArcaneEnv.loop = true;
ArcaneEnv.volume = 0.5;

const grasslandsLoop1 = new Audio("./audios/seaShanty.mp3");
grasslandsLoop1.loop = true;
grasslandsLoop1.volume = 0.0;

const grasslandsEnviroment = new Audio("./audios/grasslandsEnviroment.mp3");
grasslandsEnviroment.loop = true;

const grassLandsSong = new Audio("./audios/grassLandsSong.mp3");
grassLandsSong.loop = true;
grassLandsSong.volume = 0.3;

const lobbySong = new Audio("./audios/lobbySong.wav");
lobbySong.loop = true;
lobbySong.volume = 0.8;

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

const footsteps = new Audio("./audios/footsteps.wav");
footsteps.loop = true;
footsteps.volume = 1;

const sizzle = new Audio("./audios/sizzle.wav");
sizzle.loop = false;
sizzle.volume = 0.05;

const metalPan = new Audio("./audios/metalPan.ogg");
metalPan.loop = false;
metalPan.volume = 0.2;




const canvasLobby = document.getElementById("canvas-lobby");
const widthMinus20vw = window.innerWidth;
canvasLobby.width = widthMinus20vw;
canvasLobby.height = window.innerHeight;

const canvas = canvasLobby.getContext("2d");

let players = [];
let enemies = [];
let enemiesClient = [];
let projectiles = [];

let cameraShakeX = -150;
let cameraShakeY = -180;

const chatButton = document.getElementById('chatIcon');
const chat = document.getElementById('chat');
const chatInput = document.getElementById("chatInput");
let blockMovement = true;
socket.emit("blockMovement", blockMovement);

//Labguage Button <
const en = document.getElementById("en");
const sp = document.getElementById("sp");
const fr = document.getElementById("fr");
const pt = document.getElementById("pt");
//Labguage Button > //

// UI >
const menuUi = document.getElementById("ui");
const menuUiProfile = document.getElementById("uiProfile");
const menuUiInventory = document.getElementById("uiInventory");
const menuUiSoulCollection = document.getElementById("uiSoulCollection");
const menuUiQuest = document.getElementById("uiQuest");
const menuUiBooks = document.getElementById("uiBooks");

const uiButtonParent = document.getElementById("uiButtonParent")
const menuUiButtonOpener = document.getElementById("uiButtonOpener");
const menuUiButtonProfile = document.getElementById("uiButtonProfile");
const menuUiButtonInventory = document.getElementById("uiButtonInventory");
const menuUiButtonSoulCollection = document.getElementById("uiButtonSoulCollection");
const menuUiButtonQuest = document.getElementById("uiButtonQuest");
const menuUiButtonBooks = document.getElementById("uiButtonBooks");


menuUiProfile.style.width = window.innerWidth;
menuUiProfile.style.height = window.innerHeight;
//UI <

const uiSkinsImg = document.getElementById("uiSkinsImg");
const circleCharacter = document.getElementById("circleCharacter");
const mountainsUi = document.getElementById("mountainsUi");

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
const enchantingLevel = document.getElementById("enchantingLevel");
const combatLevel = document.getElementById("combatLevel");
const obtainedItem = document.querySelector("#obtainedItem");
const levelUp = document.querySelector(".levelUp");
const levelUpCircle = document.querySelector(".levelUpCircle");

const glitchOverlay = document.querySelector(".glitchOverlay");
const liquidOverlay = document.querySelector(".liquidOverlay");

const shop = document.querySelector(".shop");
const cookingPot = document.querySelector(".cookingPot");
const cookingContainer = document.querySelector("#cookingContainer");
const shopItem3 = document.querySelector(".shopItem3");
const shopItem1 = document.querySelector(".shopItem1");
const shopItem4 = document.querySelector(".shopItem4");
const shopItem5 = document.querySelector(".shopItem5");

const rewardChest = document.querySelector(".rewardChest");
const rewardFrame = document.getElementById("rewardFrame");
const placeChestStick = document.getElementById("placeChestStick");
const placeChestGem = document.getElementById("placeChestGem");
const placeChestVeg = document.getElementById("placeChestVeg");

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

const questClose = document.querySelector(".questClose");

const areaName = document.querySelector("#areaName");
const timer = document.querySelector("#timer");

const placeWalls = document.getElementById("placeWalls");
const deleteWalls = document.getElementById("deleteWalls");
const showWalls = document.getElementById("showWalls");
const exportWalls = document.getElementById("exportWalls");
const placeFishingArea = document.getElementById("placeFishingArea");
const placeCraftingArea = document.getElementById("placeCraftingArea");
const placeCookingArea = document.getElementById("placeCookingArea");
const placeChest = document.getElementById("placeChest");
const placeTransition = document.getElementById("placeTransition");
const roomsDiv = document.getElementById('roomsDev');
const dialogsDiv = document.getElementById('dialogsDev');
const arcaneTransition = document.getElementById('arcaneTransition');
const liquidTransition = document.getElementById('liquidTransition');
const placeDialog = document.getElementById('placeDialog');

const exploreMap = document.getElementById("exploreMap");
const uiTop = document.getElementById("uiTop");
const playerHeartParent = document.getElementById("playerHeartParent");
const playerHeart = document.getElementById("playerHeart");
const loginBox = document.getElementById("login");
const loginArt = document.getElementById("loginArt");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const createButton = document.getElementById("createButton");
const fishingBar = document.getElementById("fishingBar");
const fishingGame = document.getElementById("fishingMinigame");
const uiProfileCurrentClothing = document.getElementById("uiProfileCurrentClothing");
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

//Ui interaction >
let uiIsClose = true
let uiProfileOpen = true;
let uiInventoryOpen = false;
let uiSoulCollectionOpen = false;
let uiQuestOpen = false;
let uiBooksOpen = false;

function openIvn () {
  if (uiIsClose){
    menuUi.style.right = "0";
    uiButtonParent.style.right = "0";
    menuUiButtonOpener.style.right = "400px"
    uiIsClose = false
    
    if (uiProfileOpen){
      menuUiButtonProfile.style.zIndex = "2"
    } else if (uiInventoryOpen){
      menuUiButtonInventory.style.zIndex = "2"
    } else if (uiSoulCollectionOpen){
      menuUiButtonSoulCollection.style.zIndex = "2"
    } else if (uiQuestOpen){
      menuUiButtonQuest.style.zIndex = "2"
    }else if (uiBooksOpen){
      menuUiButtonBooks.style.zIndex = "2"
    }
  
   } else {
    menuUi.style.right = "-415px";
    uiButtonParent.style.right = "-480px";
    menuUiButtonOpener.style.right = "465px"
    uiIsClose = true
    menuUiButtonProfile.style.zIndex = "1"
    menuUiButtonInventory.style.zIndex = "1"
    menuUiButtonSoulCollection.style.zIndex = "1"
    menuUiButtonQuest.style.zIndex = "1"
    menuUiButtonBooks.style.zIndex = "1"
   }
}

menuUiButtonOpener.addEventListener("click", function(){
  openIvn()
});

menuUiButtonProfile.addEventListener("click", function(){
  if(!uiProfileOpen){
    uiProfileOpen = true
    uiInventoryOpen = false
    uiSoulCollectionOpen = false
    uiQuestOpen = false;
    uiBooksOpen = false;
    
    menuUiProfile.style.display = "flex"
    menuUiInventory.style.display = "none"
    menuUiSoulCollection.style.display = "none"
    menuUiQuest.style.display = "none"
    menuUiBooks.style.display = "none"

    menuUiButtonProfile.style.zIndex = "2"
    menuUiButtonInventory.style.zIndex = "1"
    menuUiButtonSoulCollection.style.zIndex = "1"
    menuUiButtonQuest.style.zIndex = "1"
    menuUiButtonBooks.style.zIndex = "1"
  }
})

menuUiButtonInventory.addEventListener("click", function(){
  if(!uiInventoryOpen){
    uiInventoryOpen = true
    uiProfileOpen = false
    uiSoulCollectionOpen = false
    uiQuestOpen = false;
    uiBooksOpen = false;

    menuUiInventory.style.display = "flex"
    menuUiProfile.style.display = "none"
    menuUiSoulCollection.style.display = "none"
    menuUiQuest.style.display = "none"
    menuUiBooks.style.display = "none"

    menuUiButtonInventory.style.zIndex = "2"
    menuUiButtonProfile.style.zIndex = "1"
    menuUiButtonSoulCollection.style.zIndex = "1"
    menuUiButtonQuest.style.zIndex = "1"
    menuUiButtonBooks.style.zIndex = "1"
  }
})

menuUiButtonSoulCollection.addEventListener("click", function(){
  if(!uiSoulCollectionOpen){
    uiSoulCollectionOpen = true;
    uiProfileOpen = false;
    uiInventoryOpen = false;
    uiQuestOpen = false;
    uiBooksOpen = false;

    menuUiSoulCollection.style.display = "flex";
    menuUiProfile.style.display = "none";
    menuUiInventory.style.display = "none";
    menuUiQuest.style.display = "none";
    menuUiBooks.style.display = "none";

    menuUiButtonInventory.style.zIndex = "1";
    menuUiButtonProfile.style.zIndex = "1";
    menuUiButtonSoulCollection.style.zIndex = "2";
    menuUiButtonQuest.style.zIndex = "1";
    menuUiButtonBooks.style.zIndex = "1";

  }
})

menuUiButtonQuest.addEventListener("click", function(){
  if(!uiQuestOpen){
    uiSoulCollectionOpen = false;
    uiProfileOpen = false;
    uiInventoryOpen = false;
    uiQuestOpen = true;
    uiBooksOpen = false;

    menuUiSoulCollection.style.display = "none";
    menuUiProfile.style.display = "none";
    menuUiInventory.style.display = "none";
    menuUiQuest.style.display = "flex";
    menuUiBooks.style.display = "none";

    menuUiButtonInventory.style.zIndex = "1";
    menuUiButtonProfile.style.zIndex = "1";
    menuUiButtonSoulCollection.style.zIndex = "1";
    menuUiButtonQuest.style.zIndex = "2"
    menuUiButtonBooks.style.zIndex = "1"
  }
})

menuUiButtonBooks.addEventListener("click", function(){
  uiSoulCollectionOpen = false;
    uiProfileOpen = false;
    uiInventoryOpen = false;
    uiQuestOpen = false;
    uiBooksOpen = true;

    menuUiSoulCollection.style.display = "none";
    menuUiProfile.style.display = "none";
    menuUiInventory.style.display = "none";
    menuUiQuest.style.display = "none";
    menuUiBooks.style.display = "flex";

    menuUiButtonInventory.style.zIndex = "1";
    menuUiButtonProfile.style.zIndex = "1";
    menuUiButtonSoulCollection.style.zIndex = "1";
    menuUiButtonQuest.style.zIndex = "1"
    menuUiButtonBooks.style.zIndex = "2"
})
//Ui interaction <


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
playerHeartParent.style.display = "none";
fishingGame.style.display = "none";
uiProfileCurrentClothing.style.visibility = "hidden";

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

function updateQuestHub() {

  for (const questline of myPlayer.questsOngoing) {

    
    for (const quest of questline) {
  
      const img = document.createElement('img');
      
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

// Chest > 
rewardChest.addEventListener("click", () => {
  openChestIsland ()
});

let currentLeft = 0
let currentChestItem = "stick"

function openChestIsland () {
  if (IslandChestOpened === false) {

    IslandChestOpened = true;

    const openChest = setInterval(() => {

      if (currentLeft >= 700) {
        clearInterval(openChest)

        openChestAudio.play()

        socket.emit("rewardChest", currentChestItem);

        setTimeout(() => {
          currentLeft = 0
        }, 1000);
      }

      rewardChest.style.left = `-${currentLeft}%`;

      currentLeft += 100;
    }, 50);
  }

}

// Chest



// Chat
let chatIsActivate = false;
const recentMessages = new Map();

function showChatFunction(){
  if(!chatIsActivate){
    chat.style.display = "block";
    chatButton.style.bottom = "237px"
    chatIsActivate = true;
  }else if(chatIsActivate){
    chat.style.display = "none";
    chatButton.style.bottom = "10px"
    chatIsActivate = false;

    chatInput.value = "";
    chatInput.disabled = true;
    chatInput.disabled = false;
    blockMovement = false;
    noMovement = false
  }
}

function updateHistoryChat(value, sender) {
    const targetDiv = document.getElementById("chatHistory");
    if (!targetDiv) return;

    const senderKey = sender === "myPlayer" ? myPlayer.username : sender.username;
    const messageKey = `${senderKey}:${value}`;
    const now = Date.now();

    if (recentMessages.has(messageKey)) {
        const lastAdded = recentMessages.get(messageKey);
        if (now - lastAdded < 2000) return; // Ignore messages added within the last 2 seconds
    }

    recentMessages.set(messageKey, now); // Update the timestamp

    const newParagraph = document.createElement("p");
    newParagraph.textContent = senderKey + ": " + value;
    newParagraph.classList.add("chatText");
    targetDiv.appendChild(newParagraph);

    // Cleanup old messages to prevent memory leak
    setTimeout(() => recentMessages.delete(messageKey), 2000);
}

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (chatInput === document.activeElement) {
            if (chatInput.value) {
                const chatMessage = chatInput.value;
                e.preventDefault();  
                updateHistoryChat(chatInput.value, "myPlayer")         

                socket.emit("chatMessage", chatMessage);
                chatInput.value = "";
                chatInput.disabled = true;
                chatInput.disabled = false;
                blockMovement = false;
                noMovement = false
            }
        } else {
          if(!chatIsActivate) showChatFunction()
            setTimeout(() => { 
            chatInput.focus();
            blockMovement = true;
            noMovement = true
            }, 500);
        }
    }
    // if (e.key === "o") {
    //   clearInterval(intervalCanvasBase)

    //   canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);

    //   setTimeout(() => {
    //     console.log("canvas restarted")
    //     intervalCanvasBase = setInterval(lobbyLoop, 16.67);
    //   }, 2000);
    // }

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

chatButton.addEventListener("click", () => {
 showChatFunction()
  
})



//Switch inventories >


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

      if (inventorySlots[`inventorySlot${index}`].src !== "") {
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

      if (inventorySlots[`inventorySlot${index}`].src !== "data:,") {
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
          inventorySlots[`inventorySlot${index}`].src = `data:,`;
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

      if (inventorySlots[`inventorySlot${index}`].src !== "data:,") {
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
          inventorySlots[`inventorySlot${index}`].src = `data:,`;
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
  
            inventorySlots[`inventorySlot0`].style.border = `none`;
            inventorySlots[`inventorySlot1`].style.border = `none`;
            inventorySlots[`inventorySlot2`].style.border = `none`;
            inventorySlots[`inventorySlot3`].style.border = `none`;
            inventorySlots[`inventorySlot4`].style.border = `none`;
            inventorySlots[`inventorySlot5`].style.border = `none`;
            inventorySlots[`inventorySlot6`].style.border = `none`;
            inventorySlots[`inventorySlot7`].style.border = `none`;
            inventorySlots[`inventorySlot8`].style.border = `none`;
  
            socket.emit("toDelete", itemsToDelete);
            itemsToDelete = [];
          }, 2000);
  
          inventorySlots[`inventorySlot${index}`].style.border = `solid 2px white`;
          inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => deleteInventory(item, index));
  
      } else if (itemsToDelete.includes(index) && deleteSelect) {
  
          let indexItem = itemsToDelete.indexOf(index);
  
          itemsToDelete.splice(indexItem, 1);
          // inventorySlots[`inventorySlot${index}`].style.border = `solid 2px black`;
  
          deleteSelect = false
  
          setTimeout(() => {
            deleteSelect = true
          }, 100);
  
          clearTimeout(timeoutDelete);
  
          timeoutDelete = setTimeout(() => {
  
            inventorySlots[`inventorySlot0`].style.border = `none`;
            inventorySlots[`inventorySlot1`].style.border = `none`;
            inventorySlots[`inventorySlot2`].style.border = `none`;
            inventorySlots[`inventorySlot3`].style.border = `none`;
            inventorySlots[`inventorySlot4`].style.border = `none`;
            inventorySlots[`inventorySlot5`].style.border = `none`;
            inventorySlots[`inventorySlot6`].style.border = `none`;
            inventorySlots[`inventorySlot7`].style.border = `none`;
            inventorySlots[`inventorySlot8`].style.border = `none`;
  
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
let generalLevelEnchanting = 0;
let generalLevelCombat= 0;

let oldFishingLevel = 0;
let newFishingLevel = 0;
let changeFishingLevel = true;
let fishingLevelSimple = 0;

let oldCookingLevel = 0;
let newCookingLevel = 0;
let changeCookingLevel = true;
let cookingLevelSimple = 0;

let oldEnchantingLevel = 0;
let newEnchantingLevel = 0;
let changeEnchantingLevel = true;
let enchantingLevelSimple = 0;

let oldCombatLevel = 0;
let newCombatLevel = 0;
let changeCombatLevel = true;
let combatLevelSimple = 0;

function initDraggables() {
  dragula([document.querySelector(".dragParent"), document.querySelector(".dragParent1")])
}

setTimeout(() => {
  initDraggables()
}, 1000);

let maxHealth = 6;
let currentHealth = 6;

function playerDeath () {
  mapsInfo["lobby"].playerPos= {
    x: 300,
    y: 1200,
  }
  
  currentSelectedMap = "lobby"
  transitionArcane()
  currentHealth = maxHealth
}

function health() {

  if (currentHealth <= 0) playerDeath()

  const parentDiv = playerHeart; // Parent div where the hearts are displayed
  const previousHealth = playerHeart.dataset.previousHealth || currentHealth;
  let healthChanged = currentHealth < previousHealth;
  
  playerHeart.dataset.previousHealth = currentHealth; // Store the current health for future comparison

  playerHeart.innerHTML = "";
  let fullHearts = Math.floor(currentHealth / 2);
  let halfHeart = currentHealth % 2 !== 0 ? 1 : 0;
  let emptyHearts = Math.floor((maxHealth - currentHealth) / 2);

  for (let i = 0; i < fullHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    playerHeart.appendChild(heart);
  }

  if (halfHeart === 1) {
    const halfHeartDiv = document.createElement("div");
    halfHeartDiv.classList.add("halfHeart");
    playerHeart.appendChild(halfHeartDiv);
  }

  for (let i = 0; i < emptyHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("emptyHeart");
    playerHeart.appendChild(heart);
  }

  if (healthChanged) {
    parentDiv.classList.add("shake"); // Add the shaking class if health decreased

    setTimeout(() => {
      parentDiv.classList.remove("shake"); // Remove the shaking class after 1 second
    }, 1000);
  }
}



function updateQuestUI() {
  // Select the #uiQuest div
  const uiQuestDiv = document.getElementById("uiQuest");

  // Get a list of quest titles currently in myPlayer.questsOngoing
  const ongoingQuestTitles = myPlayer.questsOngoing
    .filter(quest => quest.title)          // Filter only quests that have a title
    .map(quest => quest.title);            // Map to an array of titles

  // Remove any images in #uiQuest that are not in ongoingQuestTitles
  Array.from(uiQuestDiv.querySelectorAll("img[data-title]")).forEach(img => {
    const title = img.getAttribute("data-title");
    if (!ongoingQuestTitles.includes(title)) {
      img.remove();
    }
  });

  // Add images for quests that are in myPlayer.questsOngoing but not yet in #uiQuest
  myPlayer.questsOngoing.forEach(currentQuest => {
    if (!currentQuest.title) return;       // Skip if no title

    // Check if an image for this quest already exists
    const existingQuestImage = uiQuestDiv.querySelector(`img[data-title="${currentQuest.title}"]`);
    if (existingQuestImage) return;

    // Create and append a new img element for the quest
    const questImage = document.createElement("img");
    questImage.src = currentQuest.questCard;
    questImage.alt = currentQuest.title;
    questImage.setAttribute("data-title", currentQuest.title);
    questImage.classList.add("questCardImage");
    questImage.classList.add("pointerActivator");

    questImage.addEventListener("click", () => {
      const quest = myPlayer.questsOngoing.find(q => q.title === currentQuest.title);

      if (quest) {
        updateQuestInfo(quest);
        const questUi = document.querySelector(".questInfo");
        questUi.style.display = "flex";
        openIvn()
      }
    });

    uiQuestDiv.appendChild(questImage);
  });
}

function updateQuestInfo(quest) {
  const questUi = document.querySelector(".questInfo");
  const questTitle = document.querySelector(".questTitle");
  const questDescription = document.querySelector(".questDescription");
  const questEndItem = document.querySelector(".questEndItem");
  const questProgressChild = document.querySelector(".questProgressChild");
  const questProgressItems = document.querySelector(".questProgressItems");
  const questReward = document.querySelector(".questReward");

  questTitle.innerHTML = quest.title;
  questDescription.innerHTML = quest.questDescription;
  questEndItem.src = `./inventory/${quest.rewardType}.png`

  let itemAmount = myPlayer.inventory.filter((item) => item.type === quest.completionItem).length;
  questProgressItems.innerHTML = itemAmount + " / " + quest.completionAmount + " " + quest.completionItem

  questProgressChild.style.width = (itemAmount / quest.completionAmount) * 100 + "%";

  questReward.innerHTML = "x" + quest.rewardItem + " " + quest.rewardType
}

questClose.addEventListener("click", () => {
  const questUi = document.querySelector(".questInfo");
  questUi.style.display = "none";
})



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

  players = players.filter((player) => player.room && myPlayer && myPlayer.room && player.room === myPlayer.room);

  if (!myPlayer) {
    return;
  }

  health()
  updateQuestUI()

  playerCoinsAmount.innerHTML = myPlayer.currency
  // console.log(myPlayer)

  //Adapt shop to player >
  
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

  // Enchanting level >

  let enchantingLevelNum = Math.trunc(myPlayer.enchantingLevel / 1000);

  if (changeEnchantingLevel === true && myPlayer.enchantingLevel !== 0) {
    if (enchantingLevelNum < 1) {
      newEnchantingLevel = 1;
    }
    else if (enchantingLevelNum < 3) {
      newEnchantingLevel = 2;
    }
    else if (enchantingLevelNum < 6) {
      newEnchantingLevel = 3;
    }
    else if (enchantingLevelNum < 12) {
      newEnchantingLevel = 4;
    }
    else {
      newEnchantingLevel = 5;
    }

    changeEnchantingLevel = false;
  }

  if (enchantingLevelNum < 1) {
   enchantingLevel.innerHTML = "LVL 1";
   enchantingLevelSimple = 1;
  }
  else if (enchantingLevelNum < 3) {
   enchantingLevel.innerHTML = "LVL 2";
   enchantingLevelSimple = 2;
  }
  else if (enchantingLevelNum < 6) {
   enchantingLevel.innerHTML = "LVL 3";
   enchantingLevelSimple = 3;
  }
  else if (enchantingLevelNum < 12) {
   enchantingLevel.innerHTML = "LVL 4";
   enchantingLevelSimple = 4;
  }
  else {
   enchantingLevel.innerHTML = "LVL 5";
   enchantingLevelSimple = 5;
   enchantingLevel.style.color = "white"
   enchantingLevel.style.textShadow = "0 0 3px white"
  }

  if (enchantingLevelSimple > newEnchantingLevel && myPlayer.enchantingLevel !== 0) {
    changeEnchantingLevel = true;
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

  generalLevelEnchanting = enchantingLevelSimple;

  // Enchanting level <

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
    cookingLevel.innerHTML = "LVL 1";
    cookingLevelSimple = 1;
  }
  else if (cookingLevelNum < 3) {
    cookingLevel.innerHTML = "LVL 2";
    cookingLevelSimple = 2;
  }
  else if (cookingLevelNum < 6) {
    cookingLevel.innerHTML = "LVL 3";
    cookingLevelSimple = 3;
  }
  else if (cookingLevelNum < 12) {
    cookingLevel.innerHTML = "LVL 4";
    cookingLevelSimple = 4;
  }
  else {
    cookingLevel.innerHTML = "LVL 5";
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
    fishingLevel.innerHTML = "LVL 1";
    fishingLevelSimple = 1;
  }
  else if (fishingLevelNum < 3) {
    fishingLevel.innerHTML = "LVL 2";
    fishingLevelSimple = 2;
  }
  else if (fishingLevelNum < 6) {
    fishingLevel.innerHTML = "LVL 3";
    fishingLevelSimple = 3;
  }
  else if (fishingLevelNum < 12) {
    fishingLevel.innerHTML = "LVL 4";
    fishingLevelSimple = 4;
  }
  else {
    fishingLevel.innerHTML = "LVL 5";
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
          uiSkinsImg.src = "./ui/uiSkins/uiFrogSkin.png";
          // mountainsUi.style.background = "url(\"./soulsEnviroments/mountains.png\")"
          // mountainsUi.style.filter = "blur(2px)";
          // mountainsUi.style.backgroundPosition = "center";
          // menuUiProfile.style.background = "linear-gradient(hsl(184, 100%, 87%) 0%, rgb(209, 175, 147) 100%)";
          // circleCharacter.style.background = ""
        }
      }
    } else {
      uiSkinsImg.src = "./ui/uiSkins/uiHumanSkin.png"
      // mountainsUi.style.background = "url(\"./soulsEnviroments/desert.png\")"
      // mountainsUi.style.filter = "blur(2px) saturate(.3)";
      // mountainsUi.style.backgroundPosition = "bottom";
      // mountainsUi.style.backgroundRepeat = "no-repeat";
      // menuUiProfile.style.background = "linear-gradient(hsl(0, 0%, 100%) 0%, rgb(154, 126, 109) 100%)";
      // circleCharacter.style.background = "linear-gradient(rgb(255, 111, 111) 0%, #ff1515 100%)";
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
          inventorySlots[`inventorySlot${i}`].src = myPlayer.inventory[i].image;
        } else {
          inventorySlots[`inventorySlot${i}`].src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
        }

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
    }

});

//Language Setting <

  let openerLanguages = {
    "english": "I understand this is an early alpha version, and nothing can be recorded or shared. You can now choose your langague",
    "spanish": "Entiendo que esta es una versión alfa temprana y que no se puede grabar ni compartir nada. Ahora puede elegir su idioma.",
    "french": "Je comprends qu'il s'agit d'une version alpha et que rien ne peut être enregistré ou partagé. Vous pouvez maintenant choisir votre langue.",
    "portuguese": "Entendo que esta é uma versão alfa inicial e que nada pode ser gravado ou compartilhado. Agora você pode escolher seu idioma.",
  }

  let selectedLanguage = "fr"

  en.addEventListener('click', function() {
    openerScreenButton.innerHTML= openerLanguages.english
    en.innerHTML = "English"
    sp.innerHTML = "Spanish"
    fr.innerHTML = "French"
    pt.innerHTML = "Portuguese"
  
    selectedLanguage = "en"

    en.style.background = "rgb(171, 255, 93)"
    sp.style.background = "white"
    fr.style.background = "white"
    pt.style.background = "white"

  })
  sp.addEventListener('click', function() {
    openerScreenButton.innerHTML= openerLanguages.spanish
    en.innerHTML = "Inglés"
    sp.innerHTML = "Español"
    fr.innerHTML = "Francés"
    pt.innerHTML = "Portugués"

    selectedLanguage = "sp"

    en.style.background = "white"
    sp.style.background = "rgb(171, 255, 93)"
    fr.style.background = "white"
    pt.style.background = "white"
  })
  fr.addEventListener('click', function() {
    openerScreenButton.innerHTML= openerLanguages.french
    en.innerHTML = "Anglais"
    sp.innerHTML = "Espagnol"
    fr.innerHTML = "Francais"
    pt.innerHTML = "Portuguais"

    selectedLanguage = "fr"

    en.style.background = "white"
    sp.style.background = "white"
    fr.style.background = "rgb(171, 255, 93)"
    pt.style.background = "white"
  })
  pt.addEventListener('click', function() {
    openerScreenButton.innerHTML= openerLanguages.portuguese
    en.innerHTML = "Inglês"
    sp.innerHTML = "Espanhol"
    fr.innerHTML = "Francês"
    pt.innerHTML = "Português"

    selectedLanguage = "pt"

    en.style.background = "white"
    sp.style.background = "white"
    fr.style.background = "white"
    pt.style.background = "rgb(171, 255, 93)"
  })

//Language Setting >

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
    // intervalCanvasBase = setInterval(lobbyLoop, 16.67); //Initial canvas
    intervalCanvasBase = setInterval(lobbyLoop, 16.67); //Initial canvas
    console.log("logged in")

    loginScreen.classList.add('downLogIn');
    chatInput.style.display = "block";
    playerHeartParent.style.display = "block";
    uiProfileCurrentClothing.style.visibility = "visible";
    menuUi.style.display = "flex";
    uiButtonParent.style.display = "flex";
    menuUiProfile.style.display = "flex";
    timer.style.display = "flex";
    chatButton.style.display = "block";
    

    setTimeout(() => {
      loginBox.style.display = "none";
      loginButton.style.display = "none";
      createButton.style.display = "none";
      loginArt.style.display = "none";

      blockMovement = false;
      socket.emit("blockMovement", blockMovement);

      shootingBlock = false;

      lobbySoundtrack()

    }, 2000);

  } else if (msg === "failed") {
    passwordInput.style.background = "#ff5471";
    passwordInput.style.color = "white";
  } else if (msg === "existing") {
    usernameInput.style.background = "#ff5471";
    usernameInput.style.color = "white";
  }
});

socket.on("disconnectedPlayer", (playerDisconnected) => {

  players = players.filter((player) => player.id === playerDisconnected.id);

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

let dialogAvailable = false;
let dialogOpened = false;

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

let localPlayerDamaged = 0;
let localPlayerDamageAngle = 0;

let playerLocation = [playerX, playerY];

let noMovement = false;
let dashing = false;
let dashingAllowed = false;

let wallsVisibility = 0;

setInterval(() => {
  playerLocation = [playerX, playerY];
  socket.emit("playerLocation", playerLocation);
  socket.emit("inputs", inputs);
  socket.emit("animPlayer", animPlayer);
}, 100);

window.addEventListener("keydown", (e) => {

  if (!noMovement) {
    let keyCheck = e?.key?.toLowerCase()
    if (keyCheck === "w" || keyCheck === "z" ) {
      footsteps.play();
      footsteps.loop = true;
      animPlayer = "moveUp"
  
      movingUp = true;
    } else if (keyCheck === "s") {
      footsteps.play();
      footsteps.loop = true;
      animPlayer = "moveDown"
  
      movingDown = true;
    } else if (keyCheck === "d") {
      footsteps.play();
      footsteps.loop = true;
      animPlayer = "runRight";
      lastLookPlayer = "right";
  
      movingRight = true;
    } else if (keyCheck === "a" || keyCheck === "q") {
      footsteps.play();
      footsteps.loop = true;
      animPlayer = "runLeft";
      lastLookPlayer = "left";
  
      movingLeft = true;
    } else if (e.code === "Space" && !dashingAllowed) {
      let oldPlayerSpeed = playerSpeed
      playerSpeed = 30
      dashing = true;
      dashingAllowed = true
      const dash = new Audio("./audios/dash.wav");
      dash.loop = false;
      dash.play()

      const interval = setInterval(() => {
        playerSpeed -= 10;

        if (playerSpeed < oldPlayerSpeed) {
          playerSpeed = oldPlayerSpeed;
          clearInterval(interval)
          dashing = false;
          
          setTimeout(() => {
            dashingAllowed = false
          }, 200);
        }
      }, 50);
    }

    if (e?.key?.toLowerCase() === "i"){
      openIvn()
    }

    //Dialog grasslands open >

  if(e.key === "e" && dialogAvailable & !dialogOpened) {
    dialogOpened = true;
    startDialog(currentDialogTitle);
  } else if (e.key === "e" && dialogAvailable & dialogOpened) {
    dialogOpened = false;
  }

  //Dialog grasslands open <
  
    // socket.emit("inputs", inputs);
    socket.emit("animPlayer", animPlayer);
    socket.emit("lastLookPlayer", lastLookPlayer);

  }

  // Testing >
  // if (e.key === "f") {
  //   transitionLiquid()
  // }
  // if (e.key === "g") {
  //   if (!cutscene) {
  //     cutscene = true
  //   } else {
  //     cutscene = false;
  //   }
  // }
 

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

  //Chest island open >

  if(e.key === "e" && IslandChestAvailable & !IslandOpenChest) {
    IslandOpenChest = true;
    openShopAudio.play();
  } else if (e.key === "e" && IslandChestAvailable & IslandOpenChest) {
    IslandOpenChest = false;
  }

  //Chest island open <

  if (e.key === "o") {
    mapsInfo[currentLand].enemies?.forEach(enemy => {
      activateEnemy(enemy);
    })
  }

});

window.addEventListener("keyup", (e) => {
  let keyCheck = e?.key?.toLowerCase()
  if (keyCheck === "w" || keyCheck === "z") {
    movingUp = false;
  } else if (keyCheck === "s") {
    movingDown = false;
  } else if (keyCheck === "d") {
    movingRight = false;
  } else if (keyCheck === "a" || keyCheck === "q") {
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
});

//Player movement <

//Weapon shoot >
let projectilesClient = [];
let recoil = 0;
let shooting = false;
let mouseLeftPressed = false;
let shootInterval;

function shootDefaultArcane () {
  const angle = angleMouse
  const audioShootNature = new Audio("./audios/shootNature.wav");
  audioShootNature.loop = false;
  audioShootNature.volume = 0.3;
  audioShootNature.play()
    // socket.emit("projectile", angle);
    cameraShake();

  projectilesClient.push({
    angle,
    x: playerX + 20,
    y: playerY + 50,
    timeLeft: 20,
    playerId: socket.id,
  }) 

  shooting = true;

  setTimeout(() => {
    shooting = false;
  }, 20);

  const interval = setInterval(() => {
      if (mainSkillCooldown > 10) {
          mainSkillCooldown = 0;
          recoil = 0
          clearInterval(interval);
      }
      mainSkillCooldown++;
      recoil += recoil > 9 ? 0 : 3;
  }, 20);
}

canvasLobby.addEventListener("mousedown", (e) => {
  mouseLeftPressed = true;
    if (shootingBlock === false) {
      if (myPlayer.weapon[0]) {
        if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {  
          if (myPlayer?.weapon[0].name === "arcaneStaffCommon") {
            shootDefaultArcane()
            shootInterval = setInterval(() => {
              if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {
                shootDefaultArcane()
              }
            }, 200)
            }
            else if (myPlayer?.weapon[0].name === "solarStaffCommon") {
  
              projectilesClient.push({
                angle,
                x: playerX + 20,
                y: playerY + 50,
                timeLeft: 100,
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
                x: playerX + 20,
                y: playerY + 50,
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
                x: playerX + 20,
                y: playerY + 50,
                timeLeft: 200,
                playerId: socket.id,
              }) 
  
              projectilesClient.push({
                bullet2,
                x: playerX + 20,
                y: playerY + 50,
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

canvasLobby.addEventListener("mouseup", (e) => {
  mouseLeftPressed = false;
  clearInterval(shootInterval)
})
//Weapon shoot <

//Weapon aim >
let angleDifferenceX = 0;
let angleDifferenceY = 0;

window.addEventListener("mousemove", (e) => {
  const rect = canvasLobby.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2 + angleDifferenceX;
  const centerY = rect.top + rect.height / 2 + angleDifferenceY;

  angleMouse = Math.atan2(e.clientY - centerY, e.clientX - centerX);
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
let playerSpeed = 4;

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
    x: 2374,
    y: 3145,
    originX: 2374,
    originY: 3145,
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
  // {
  //   img: Structure1,
  //   x: 2750,
  //   y: 3768,
  //   width: 49,
  //   height: 77
  // }
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

// Chat System >

var blockChar = document.querySelector('.char-name');
var textBlock = document.querySelector('.text-block');
var starquest = document.querySelector('.starquest');
var charimg = document.querySelector('.char-img');
var containerChat = document.querySelector('.container');

var textSpeed = 50;
let currentDialogTitle = ""
var currentDialog = [];  // This will hold the current dialog to display
let currentDialogParent = {};
var currentDialogIndex = 0;  // Keeps track of which paragraph we're on
var loopLen = 0;  // Character loop index
var isTyping = false;  // Flag to prevent advancing while typing

let dialogBoxes = {


    "fishing Quest": {
		dialogName: "quest",
		questRequirements: [],
		type: "counter",

    questName: "Fishing quest",
    questDecription: "Melina said that if I bring her five fish of any type then she will give me a reward",
    questCard: "./Cards/fish.png",
    rewardType: "coins",
    rewardItem: 10,
    completionItem: "fish",
    completionAmount: 5,
    
		dialogText:
		[
      {
        NPC: "Quest giver",
				text: "Hello Kid! Oh you are looking for a task? Well I can give you some money just for your efforts, go fish 5 fish and bring them back to me.",
			},
			{
        NPC: myPlayer ? myPlayer.username : "User",
				text: "Alright that sounds simple enough!",
			},
		],

    progressText:
    [
      {
        NPC: "Quest giver",
        text: "So? I am waiting on those fish!",
      },
      {
        NPC: "Quest giver",
        text: "Do you have them?",
        check: true,
      },
    ],

    rewardText:
    [
      {
        NPC: "Quest giver",
        text: "Really nice job! Here is some cash.",
      },
      {
        NPC: myPlayer ? myPlayer.username : "User",
        text: "Thank you!",
      },
    ],
	},



  dialogCastelDoor: {
		dialogName: "dialogCastelDoor",
		questRequirements: [],
		type: "dialog",
		dialogText:
		[{
				NPC: myPlayer ? myPlayer.username : "User",
				text: "This door seems to be locked, I need to find a way to open it.",
			},
		],
	},

  dialogFishingPole: {
		dialogName: "dialogFishingPole",
		questRequirements: [],
		type: "dialog",
		dialogText:
		[{
				NPC: "Sign",
				text: "You will find all kinds of fish species here. Get close to the water and press 'E' to fish.",
			},
		],
	},

  dialogCombatAreaPole: {
		dialogName: "dialogCombatAreaPole",
		questRequirements: [],
		type: "dialog",
		dialogText:
		[{
				NPC: "Sign",
				text: "You are entering a combat zone. All kinds of monsters are present, so stay alert.",
			},
		],
	},

  dialogWayPoint: {
    dialogName: "dialogWayPoint",
		questRequirements: [],
		type: "dialog",
		dialogText:
		[{
      NPC: "Mel",
      text: "It seems like I came from here. What is this... a crystal? Why does it look so strange?",
    },
  ],
},

  dialogCoffeeMachine: {
  dialogName: "dialogCoffeeMachine",
  questRequirements: [],
  type: "dialog",
  dialogText:
  [{
      NPC: "Coffee Machine",
      text: "Apologies! Out of beans. Maintenance required.",
    },
  ],
},

  dialogCristalPortal: {
  dialogName: "dialogCristalPortal",
  questRequirements: [],
  type: "dialog",
  dialogText:
  [{
      NPC: "Mel",
      text: "What a strange crystal... What could it be for?",
    },
  ],
},
  dialogSlimeBoxes: {
  dialogName: "dialogSlimeBoxes",
  questRequirements: [],
  type: "dialog",
  dialogText:
  [{
      NPC: "Mel",
      text: "What a strange texture...",
    },
  ],
},

};

// Function to display one paragraph from the dialog
function displayDialogParagraph() {
    if (currentDialogIndex < currentDialog.length) {
		blockChar.innerHTML = currentDialog[currentDialogIndex].NPC;
		charimg.style.background = `url("${currentDialog[currentDialogIndex].image}")`
        let entry = currentDialog[currentDialogIndex].text;
        textBlock.innerHTML = "";  // Clear the text block before starting
        loopLen = 0;
        isTyping = true;  // Set typing flag
        if (currentDialog[currentDialogIndex].check) {
          typeText(entry);
        } else {
          typeText(entry);
        }

        if (currentDialog[currentDialogIndex].cutscene) {
          cutscene = true;
          secondaryCameraX = currentDialog[currentDialogIndex].cutscene[0]
          secondaryCameraY = currentDialog[currentDialogIndex].cutscene[1]
        } else {
          cutscene = false;
        }
    }
}

// Function to type text one letter at a time
function typeText(entry) {
    setTimeout(function() {
        textBlock.innerHTML += entry[loopLen];
        loopLen++;
        if (loopLen < entry.length) {
            typeText(entry);  // Continue typing if not finished
            if (dialogOpened) {
              const dialogsound = new Audio("./audios/dialogsound.wav");
              dialogsound.loop = false;
              dialogsound.play()
            }
        } else {
            isTyping = false;  // Typing is done
        }
    }, textSpeed);
}

// Spacebar release advances to the next dialog if typing is done
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 32 && !isTyping) {  // Only advance if not typing
        currentDialogIndex++;  // Move to the next paragraph
        if (currentDialogIndex < currentDialog.length) {
            displayDialogParagraph();  // Display the next paragraph
        } else if (dialogOpened) {
          dialogOpened = false;
          containerChat.style.display = "none";
          console.log("Dialog finished", currentDialogParent.dialogName);

          if (currentDialogParent.dialogName === "quest") {
            
            if (!myPlayer.questsOngoing.some(quest => quest.title === currentDialogParent.questName) && finishingQuest === false) {
              const questToSend = {
                title: currentDialogParent.questName,
                type: currentDialogParent.type,
                requirements: currentDialogParent.requirements,
                completionItem: currentDialogParent.completionItem,
                completionAmount: currentDialogParent.completionAmount,
                rewardType: currentDialogParent.rewardType,
                rewardItem: currentDialogParent.rewardItem,
                questCard: currentDialogParent.questCard,
                questDescription: currentDialogParent.questDecription,
              }
  
              socket.emit("questStarted", questToSend);
            }

            finishingQuest = false; 
            let indexToDeliver = [];
  
            for (const item of myPlayer.inventory) {
              if (item.type === currentDialogParent.completionItem) {
                indexToDeliver.push(myPlayer.inventory.indexOf(item))
              }
            }
  
            if (indexToDeliver.length >= currentDialogParent.completionAmount) {
              let indexToDeliverMod = indexToDeliver.splice(0, currentDialogParent.completionAmount)
              let questCompleted = {
                name: currentDialogParent.questName,
                rewardType: currentDialogParent.rewardType,
                rewardAmount: currentDialogParent.rewardItem
              }
  
              socket.emit("toDelete", indexToDeliverMod);
              socket.emit("questFinished", questCompleted);
            }
            
            
          }

          
        }
    }
});

let finishingQuest = false;

socket.on("questFinishedDialog", (quest) => {
  finishingQuest = true;
  obtainedAnim(dialogBoxes[currentDialogTitle].questCard)
  currentDialog = dialogBoxes[currentDialogTitle].rewardText;
  currentDialogIndex = 0;
  dialogOpened = true;
  displayDialogParagraph();
})

// Function to start a specific dialog
function startDialog(dialogKey) {
    if (dialogBoxes[dialogKey]) {
      console.log(dialogBoxes[dialogKey]);
      currentDialogParent =  dialogBoxes[dialogKey]
      if ((dialogBoxes[dialogKey].questName && !myPlayer.questsOngoing.some(obj => obj.title === dialogBoxes[dialogKey].questName)) || !dialogBoxes[dialogKey].questName) {
        currentDialog = dialogBoxes[dialogKey].dialogText;
      } 
      else if (dialogBoxes[dialogKey].questName && myPlayer.questsOngoing.some(obj => obj.title === dialogBoxes[dialogKey].questName)) {
        console.log(dialogBoxes[dialogKey].questName)
        currentDialog = dialogBoxes[dialogKey].progressText;
      }
      currentDialogIndex = 0;
      displayDialogParagraph();
    } else {
        console.error("Dialog not found: " + dialogKey);
    }
}

// Increase text print speed on spacebar press (keydown)
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        textSpeed = 5;  // Increase speed
    }
});

// Reset text print speed on spacebar release (keyup)
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 32) {
        textSpeed = 50;  // Reset speed
    }
});

// Chat System <

//Timer <
let timerInterval;
let seconds = 0;
let score = "";

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let remainingSeconds = sec % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
  score = ""
  if (timerInterval) return; 
  timerInterval = setInterval(() => {
    seconds++;
    timer.textContent = formatTime(seconds);
  }, (1000 / 60));
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  timer.textContent = "00:00";
}

document.addEventListener('keydown', (event) => {
  if (event.key?.toLowerCase() === 'o') {
    startTimer();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key?.toLowerCase() === 'p') {
    score += timer.textContent
   console.log(score)
    resetTimer()
  }
});
//Timer >

let particles = [];

// Transitions >
let transitionType = "arcane"
let transitionTimeout = false;

function transition (format) {
  if (format === "arcane") {
    transitionArcane()
  }
  else if (format === "liquid") {
    transitionLiquid()
  }
}
function changeMap (dynamicFunctionName) {
  clearInterval(intervalCanvasBase)
  const canvasFunction = window[dynamicFunctionName];
  if (typeof canvasFunction === "function") {
    stopAllSound()
    mapsInfo[currentSelectedMap].areaSounds();
    intervalCanvasBase = setInterval(canvasFunction, 16.67);
    if (mapsInfo[currentSelectedMap].areaName) areaNameDisplay(mapsInfo[currentSelectedMap].areaName)
    setTimeout(() => {
      transitionTimeout = false;
    }, 5000);
  } else {
    console.error(`${dynamicFunctionName} is not a valid function`);
  }
}
function transitionArcane () {
  if (transitionTimeout === false) {

    transitionTimeout = true; 
    glitchArcane.play()
    setTimeout(() => {
      glitchOverlay.style.display = "block"
    }, 600);   
    const dynamicFunctionName = currentSelectedMap + "Loop";   
    setTimeout(() => {
      changeMap(dynamicFunctionName)
      socket.emit("changeRoom", currentSelectedMap);
    }, 1000);   
    setTimeout(() => {
      glitchOverlay.style.display = "none"
    }, 1100);
  }
}
function transitionLiquid() {
  if (transitionTimeout === false) {
    transitionTimeout = true;  
    movezone.play()
    
    const gifUrl = "./Textures/liquidTransition.gif"; // Remove `url("")` from the string
    const newGifUrl = gifUrl + "?" + new Date().getTime(); // Append a timestamp to force reload
    
    liquidOverlay.style.background = 'none'; 
    
    setTimeout(() => {
      liquidOverlay.style.background = `url(${newGifUrl})`;
    }, 10); 

    liquidOverlay.style.display = "block";
    
    const dynamicFunctionName = currentSelectedMap + "Loop";    
    setTimeout(() => {
      changeMap(dynamicFunctionName);
      socket.emit("changeRoom", currentSelectedMap);
    }, 1800);   
    
    setTimeout(() => {
      liquidOverlay.style.display = "none";
    }, 3900);
  }
}

arcaneTransition.style.backgroundColor = "rgba(170, 233, 170, 1)"

arcaneTransition.addEventListener("click", function() {
  if (transitionType !== "arcane") {
    transitionType = "arcane"
    arcaneTransition.style.backgroundColor = "rgba(170, 233, 170, 1)"
    liquidTransition.style.backgroundColor = "black"
  }
 });

liquidTransition.addEventListener("click", function() {
  if (transitionType !== "liquid") {
    transitionType = "liquid"
    liquidTransition.style.backgroundColor = "rgba(170, 233, 170, 1)"
    arcaneTransition.style.backgroundColor = "black"
  }
 });
// Transitions <





// Sounds >

function stopAllSound() {
  grasslandsLoop1.pause();
  grasslandsLoop1.currentTime = 0;

  grasslandsEnviroment.pause();
  grasslandsEnviroment.currentTime = 0;

  ArcaneEnv.pause();
  ArcaneEnv.currentTime = 0;

  lobbySong.pause();
  lobbySong.currentTime = 0;

  grassLandsSong.pause();
  grassLandsSong.currentTime = 0;
}


function arcaneSoundtrack () {
  ArcaneEnv.play()
}

function lobbySoundtrack () {
  grasslandsLoop1.play();
  grasslandsEnviroment.play();
  console.log("playing lobby song")
  lobbySong.play()
}

function grassLandsSoundtrack () {
  grasslandsLoop1.play();
  grasslandsEnviroment.play();
  // grassLandsSong.play()
}

function areaNameDisplay (name) {

areaName.textContent = name;

areaName.style.opacity = 1;
areaName.style.transition = "opacity 1s ease"; 

setTimeout(() => {
    areaName.style.opacity = 0;
}, 4000);
}

// Sounds <






// Developer UI >

let currentLand= "none";
console.log("current land: ", currentLand)

let mapsInfo = {

  islandOne: {
    areaName: "SLIME FOREST RUINS",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: islandOneMap,
    foregroundImage: islandOneMapFront,
    playerPos: {
      x: 2852,
      y: 3798
    },
    colliders: [
      {
        "type": "wall",
        "x": 3804,
        "y": 3306,
        "width": 63,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3727,
        "y": 3051,
        "width": 87,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3811,
        "y": 3143,
        "width": 135,
        "height": 175,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3528,
        "y": 2903,
        "width": 101,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3380,
        "y": 2909,
        "width": 240,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3430,
        "y": 2950,
        "width": 96,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3532,
        "y": 3002,
        "width": 249,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3611,
        "y": 3048,
        "width": 59,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3149,
        "y": 2857,
        "width": 51,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3190,
        "y": 2867,
        "width": 66,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2879,
        "y": 2754,
        "width": 89,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2965,
        "y": 2750,
        "width": 148,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3107,
        "y": 2770,
        "width": 63,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3294,
        "y": 2836,
        "width": 142,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3268,
        "y": 2757,
        "width": 43,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3160,
        "y": 2789,
        "width": 29,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3137,
        "y": 2623,
        "width": 30,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3520,
        "y": 2867,
        "width": 212,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3427,
        "y": 2690,
        "width": 360,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3636,
        "y": 2752,
        "width": 129,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3044,
        "y": 2399,
        "width": 320,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3340,
        "y": 2348,
        "width": 140,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3444,
        "y": 2441,
        "width": 155,
        "height": 258,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3252,
        "y": 2587,
        "width": 77,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2694,
        "y": 2163,
        "width": 676,
        "height": 159,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3033,
        "y": 2307,
        "width": 112,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2818,
        "y": 2314,
        "width": 48,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2849,
        "y": 2557,
        "width": 42,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2726,
        "y": 2635,
        "width": 80,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2688,
        "y": 2517,
        "width": 68,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2504,
        "y": 2394,
        "width": 75,
        "height": 142,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2584,
        "y": 2801,
        "width": 46,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2427,
        "y": 2693,
        "width": 71,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2314,
        "y": 2605,
        "width": 71,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2463,
        "y": 2557,
        "width": 54,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3008,
        "y": 2791,
        "width": 68,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3125,
        "y": 3678.5,
        "width": 218,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2988,
        "y": 3722.5,
        "width": 196,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2941,
        "y": 3806.5,
        "width": 106,
        "height": 364,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2888,
        "y": 4070.5,
        "width": 90,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2395,
        "y": 4125.5,
        "width": 654,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2167,
        "y": 2518.5,
        "width": 58,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2206,
        "y": 2392.5,
        "width": 142,
        "height": 166,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2174,
        "y": 2795.5,
        "width": 52,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1968,
        "y": 2864.5,
        "width": 48,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1814,
        "y": 2950.5,
        "width": 55,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1657,
        "y": 3008.5,
        "width": 68,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2028,
        "y": 2689.5,
        "width": 63,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2064,
        "y": 2621.5,
        "width": 127,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1445,
        "y": 2698.5,
        "width": 640,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1524,
        "y": 2887.5,
        "width": 64,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1645,
        "y": 2686.5,
        "width": 93,
        "height": 206,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1555,
        "y": 2835.5,
        "width": 119,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1299,
        "y": 2569.5,
        "width": 63,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1325,
        "y": 2599.5,
        "width": 244,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1442,
        "y": 2624.5,
        "width": 65,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1419,
        "y": 2779.5,
        "width": 67,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1314,
        "y": 2465.5,
        "width": 80,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1583,
        "y": 2643.5,
        "width": 56,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1754,
        "y": 2653.5,
        "width": 77,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2272,
        "y": 2257.5,
        "width": 452,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2183,
        "y": 2097.5,
        "width": 85,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2234,
        "y": 2126.5,
        "width": 180,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2355,
        "y": 2151.5,
        "width": 69,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2041,
        "y": 1967.5,
        "width": 68,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2079,
        "y": 1872.5,
        "width": 420,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2388,
        "y": 1965.5,
        "width": 39,
        "height": 168,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1982,
        "y": 1806.5,
        "width": 129,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1822,
        "y": 1855.5,
        "width": 81,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1654,
        "y": 1784.5,
        "width": 77,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1863,
        "y": 1732.5,
        "width": 255,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1986,
        "y": 1741.5,
        "width": 24,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1789,
        "y": 1642.5,
        "width": 74,
        "height": 16,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1843,
        "y": 1640.5,
        "width": 31,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1424,
        "y": 1756.5,
        "width": 245,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1526,
        "y": 1886.5,
        "width": 54,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1345,
        "y": 1912.5,
        "width": 56,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1232,
        "y": 1949.5,
        "width": 57,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1273,
        "y": 1898.5,
        "width": 82,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1220,
        "y": 1781.5,
        "width": 229,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1105,
        "y": 1898.5,
        "width": 179,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1208,
        "y": 1789.5,
        "width": 26,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1035,
        "y": 1907.5,
        "width": 60,
        "height": 306,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 901,
        "y": 2087.5,
        "width": 149,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 855,
        "y": 2350.5,
        "width": 63,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 876,
        "y": 2084.5,
        "width": 20,
        "height": 311,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 924,
        "y": 2583.5,
        "width": 71,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 729,
        "y": 2554.5,
        "width": 72,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 743,
        "y": 2418.5,
        "width": 136,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 724,
        "y": 2417.5,
        "width": 23,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 791,
        "y": 2546.5,
        "width": 39,
        "height": 266,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 822,
        "y": 2784.5,
        "width": 58,
        "height": 203,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 858,
        "y": 2928.5,
        "width": 94,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 974,
        "y": 2862.5,
        "width": 85,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 916,
        "y": 2931.5,
        "width": 98,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1178,
        "y": 2946.5,
        "width": 73,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 914,
        "y": 3057.5,
        "width": 79,
        "height": 187,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1048,
        "y": 3131.5,
        "width": 75,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 938,
        "y": 3118.5,
        "width": 191,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1229,
        "y": 3188.5,
        "width": 60,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1119,
        "y": 3183.5,
        "width": 124,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1262,
        "y": 3266.5,
        "width": 27,
        "height": 182,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1288,
        "y": 3379.5,
        "width": 88,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1409,
        "y": 3228.5,
        "width": 77,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1561,
        "y": 1594.5,
        "width": 247,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1683,
        "y": 1641.5,
        "width": 41,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1762,
        "y": 3496.5,
        "width": 87,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1965,
        "y": 3589.5,
        "width": 83,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2167,
        "y": 3681.5,
        "width": 65,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1361,
        "y": 3433.5,
        "width": 17,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1372,
        "y": 3479.5,
        "width": 311,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1614,
        "y": 3380.5,
        "width": 75,
        "height": 250,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1672,
        "y": 3601.5,
        "width": 139,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1829,
        "y": 3607.5,
        "width": 30,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1846,
        "y": 3671.5,
        "width": 135,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2037,
        "y": 3693.5,
        "width": 12,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2046,
        "y": 3753.5,
        "width": 141,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2218,
        "y": 3766.5,
        "width": 18,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2229,
        "y": 3823.5,
        "width": 155,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2355,
        "y": 3712.5,
        "width": 88,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2424,
        "y": 3806.5,
        "width": 20,
        "height": 174,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2439,
        "y": 3960.5,
        "width": 69,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2480,
        "y": 4048.5,
        "width": 64,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2205,
        "y": 3016.5,
        "width": 109,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2211,
        "y": 3050.5,
        "width": 138,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2093,
        "y": 3106.5,
        "width": 66,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2052,
        "y": 3130.5,
        "width": 62,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1990,
        "y": 3020.5,
        "width": 64,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1966,
        "y": 3075.5,
        "width": 100,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2040,
        "y": 3014.5,
        "width": 174,
        "height": 25,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2148,
        "y": 2961.5,
        "width": 54,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2139,
        "y": 3082.5,
        "width": 92,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2191,
        "y": 2950.5,
        "width": 23,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3119,
        "y": 3389.5,
        "width": 111,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3148,
        "y": 3368.5,
        "width": 53,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3326,
        "y": 3625.5,
        "width": 70,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3369,
        "y": 3709.5,
        "width": 263,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3553,
        "y": 3638.5,
        "width": 93,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3631,
        "y": 3719.5,
        "width": 172,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3753,
        "y": 3360.5,
        "width": 58,
        "height": 375,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3623,
        "y": 3307.5,
        "width": 67,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "dialog",
        "name": "dialogSlimeBoxes",
        "x": 1984,
        "y": 2911.5,
        "width": 361,
        "height": 282,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "dialog",
        "name": "dialogCoffeeMachine",
        "x": 3493,
        "y": 2913.5,
        "width": 229,
        "height": 242,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "dialog",
        "name": "dialogCristalPortal",
        "x": 2508,
        "y": 2684.5,
        "width": 212,
        "height": 227,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": 2455.5,
        "y": 3908.5,
        "width": 554,
        "height": 94,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

  lobby: {
    areaName: "CASTLESIDE TOWN",
    areaSounds: lobbySoundtrack,
    backgroundImage: lobbyMap,
    foregroundImage: lobbyMapFront,
    playerPos: {
      x: 2130,
      y: 785
    },
    colliders: [
      {
        "type": "wall",
        "x": 951,
        "y": 2470.5,
        "width": 17,
        "height": 184,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 898,
        "y": 2563.5,
        "width": 19,
        "height": 191,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 819,
        "y": 2659.5,
        "width": 14,
        "height": 195,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 751,
        "y": 2753.5,
        "width": 11,
        "height": 185,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 653,
        "y": 2885.5,
        "width": 16,
        "height": 162,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -36,
        "y": 2952.5,
        "width": 278,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 180,
        "y": 2973.5,
        "width": 64,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -83,
        "y": 3481.5,
        "width": 121,
        "height": 167,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 56,
        "y": 3015.5,
        "width": 69,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -83,
        "y": 2969.5,
        "width": 61,
        "height": 193,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 548,
        "y": 3025.5,
        "width": 12,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 554,
        "y": 3044.5,
        "width": 112,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 591,
        "y": 3006.5,
        "width": 64,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 617,
        "y": 2966.5,
        "width": 43,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 664,
        "y": 2870.5,
        "width": 58,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 698,
        "y": 2822.5,
        "width": 15,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 705,
        "y": 2811.5,
        "width": 53,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 760,
        "y": 2752.5,
        "width": 67,
        "height": 10,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 828,
        "y": 2653.5,
        "width": 78,
        "height": 11,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 909,
        "y": 2552.5,
        "width": 52,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 960,
        "y": 2464.5,
        "width": 213,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1149,
        "y": 2494.5,
        "width": 508,
        "height": 15,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1644,
        "y": 2475.5,
        "width": 28,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1662,
        "y": 2461.5,
        "width": 178,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1819,
        "y": 2448.5,
        "width": 74,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1868,
        "y": 2437.5,
        "width": 82,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1921,
        "y": 2419.5,
        "width": 121,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2074,
        "y": 2563.5,
        "width": 72,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2132,
        "y": 2567.5,
        "width": 18,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2139,
        "y": 2653.5,
        "width": 71,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2194,
        "y": 2657.5,
        "width": 17,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2203,
        "y": 2731.5,
        "width": 134,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2308,
        "y": 2739.5,
        "width": 27,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2315,
        "y": 2748.5,
        "width": 144,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2430,
        "y": 2755.5,
        "width": 26,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2428,
        "y": 2797.5,
        "width": 224,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2629,
        "y": 2798.5,
        "width": 191,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2802,
        "y": 2810.5,
        "width": 18,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2816,
        "y": 2836.5,
        "width": 112,
        "height": 9,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2921,
        "y": 2828.5,
        "width": 60,
        "height": 14,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2972,
        "y": 2809.5,
        "width": 12,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2980,
        "y": 2796.5,
        "width": 56,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3015,
        "y": 2770.5,
        "width": 19,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3028,
        "y": 2757.5,
        "width": 154,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3080,
        "y": 2733.5,
        "width": 25,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3095,
        "y": 2721.5,
        "width": 85,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3122,
        "y": 2696.5,
        "width": 20,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3132,
        "y": 2679.5,
        "width": 66,
        "height": 33,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3147,
        "y": 2511.5,
        "width": 18,
        "height": 188,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3115,
        "y": 2509.5,
        "width": 46,
        "height": 13,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3101,
        "y": 2447.5,
        "width": 19,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3052,
        "y": 2408.5,
        "width": 67,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3023,
        "y": 2374.5,
        "width": 38,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2896,
        "y": 2371.5,
        "width": 134,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2857,
        "y": 2337.5,
        "width": 48,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2722,
        "y": 2302.5,
        "width": 159,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2566,
        "y": 2292.5,
        "width": 168,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2379,
        "y": 2305.5,
        "width": 204,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2359,
        "y": 2315.5,
        "width": 33,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2294,
        "y": 2348.5,
        "width": 80,
        "height": 16,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2264,
        "y": 2276.5,
        "width": 45,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2295,
        "y": 1916.5,
        "width": 22,
        "height": 284,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2257,
        "y": 2194.5,
        "width": 66,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2251,
        "y": 2204.5,
        "width": 21,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2220,
        "y": 2255.5,
        "width": 46,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2211,
        "y": 1834.5,
        "width": 110,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2267,
        "y": 1855.5,
        "width": 68,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2284,
        "y": 1884.5,
        "width": 22,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2078,
        "y": 1844.5,
        "width": 15,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2192,
        "y": 1669.5,
        "width": 27,
        "height": 187,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1801,
        "y": 1689.5,
        "width": 409,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2142,
        "y": 1716.5,
        "width": 30,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2029,
        "y": 1718.5,
        "width": 35,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1897,
        "y": 1717.5,
        "width": 23,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1975,
        "y": 1712.5,
        "width": 13,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1684,
        "y": 1588.5,
        "width": 15,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1695,
        "y": 1618.5,
        "width": 140,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1796,
        "y": 1590.5,
        "width": 26,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1439,
        "y": 1556.5,
        "width": 16,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1447,
        "y": 1598.5,
        "width": 268,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1465,
        "y": 1498.5,
        "width": 12,
        "height": 25,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1492,
        "y": 1440.5,
        "width": 10,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1528,
        "y": 1391.5,
        "width": 10,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1562,
        "y": 1355.5,
        "width": 12,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1490,
        "y": 1455.5,
        "width": 47,
        "height": 10,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1529,
        "y": 1429.5,
        "width": 45,
        "height": 6,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1467,
        "y": 1504.5,
        "width": 35,
        "height": 13,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1465,
        "y": 1508.5,
        "width": 21,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1396,
        "y": 1282.5,
        "width": 11,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1353,
        "y": 1318.5,
        "width": 15,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1321,
        "y": 1373.5,
        "width": 7,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1283,
        "y": 1430.5,
        "width": 17,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1250,
        "y": 1448.5,
        "width": 23,
        "height": 197,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1265,
        "y": 1434.5,
        "width": 25,
        "height": 14,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1313,
        "y": 1358.5,
        "width": 16,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1287,
        "y": 1406.5,
        "width": 33,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1326,
        "y": 1347.5,
        "width": 34,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1360,
        "y": 1299.5,
        "width": 40,
        "height": 16,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 901,
        "y": 1566.5,
        "width": 366,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 885,
        "y": 1588.5,
        "width": 37,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 769,
        "y": 1653.5,
        "width": 138,
        "height": 11,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 856,
        "y": 1647.5,
        "width": 26,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 810,
        "y": 1647.5,
        "width": 15,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 502,
        "y": 1767.5,
        "width": 330,
        "height": 10,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 754,
        "y": 1763.5,
        "width": 13,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 677,
        "y": 1766.5,
        "width": 54,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 566,
        "y": 1768.5,
        "width": 109,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 532,
        "y": 1810.5,
        "width": 54,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 431,
        "y": 1763.5,
        "width": 75,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 411,
        "y": 1791.5,
        "width": 41,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 379,
        "y": 1810.5,
        "width": 39,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 353,
        "y": 1910.5,
        "width": 41,
        "height": 285,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 379,
        "y": 2183.5,
        "width": 102,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 461,
        "y": 2197.5,
        "width": 29,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 471,
        "y": 2263.5,
        "width": 91,
        "height": 14,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 545,
        "y": 2267.5,
        "width": 24,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 558,
        "y": 2321.5,
        "width": 117,
        "height": 16,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 642,
        "y": 2320.5,
        "width": 16,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 642,
        "y": 2356.5,
        "width": 83,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 714,
        "y": 2362.5,
        "width": 56,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 693,
        "y": 2436.5,
        "width": 35,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 624,
        "y": 2490.5,
        "width": 27,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 633,
        "y": 2516.5,
        "width": 55,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 674,
        "y": 2471.5,
        "width": 14,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 675,
        "y": 2468.5,
        "width": 35,
        "height": 13,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 541,
        "y": 2593.5,
        "width": 43,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 552,
        "y": 2555.5,
        "width": 82,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 570,
        "y": 2624.5,
        "width": 43,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 456,
        "y": 2690.5,
        "width": 91,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 530,
        "y": 2660.5,
        "width": 29,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 491,
        "y": 2723.5,
        "width": 30,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 396,
        "y": 2704.5,
        "width": 64,
        "height": 154,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 439,
        "y": 2776.5,
        "width": 48,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 326,
        "y": 2786.5,
        "width": 88,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 223,
        "y": 2897.5,
        "width": 160,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -181,
        "y": 3152.5,
        "width": 114,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -191,
        "y": 3164.5,
        "width": 51,
        "height": 357,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -166,
        "y": 3497.5,
        "width": 118,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -157,
        "y": 3333.5,
        "width": 85,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3,
        "y": 3630.5,
        "width": 88,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 50,
        "y": 3705.5,
        "width": 271,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 179,
        "y": 3587.5,
        "width": 50,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 633,
        "y": 3030.5,
        "width": 94,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2117,
        "y": 2430.5,
        "width": 7,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2017,
        "y": 2410.5,
        "width": 122,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1554,
        "y": 1394.5,
        "width": 174,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1680,
        "y": 1426.5,
        "width": 194,
        "height": 33,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1795,
        "y": 1447.5,
        "width": 136,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1894,
        "y": 1473.5,
        "width": 142,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1998,
        "y": 1505.5,
        "width": 105,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2075,
        "y": 1535.5,
        "width": 86,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2139,
        "y": 1578.5,
        "width": 116,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2222,
        "y": 1608.5,
        "width": 104,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2286,
        "y": 1641.5,
        "width": 131,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2389,
        "y": 1668.5,
        "width": 112,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2443,
        "y": 1699.5,
        "width": 134,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2530,
        "y": 1718.5,
        "width": 86,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2586,
        "y": 1761.5,
        "width": 155,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2680,
        "y": 1807.5,
        "width": 159,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4146,
        "y": 920.5,
        "width": 86,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4182,
        "y": 1011.5,
        "width": 80,
        "height": 1589,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3911,
        "y": 762.5,
        "width": 174,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4037,
        "y": 769.5,
        "width": 161,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3649,
        "y": 700.5,
        "width": 49,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3751,
        "y": 647.5,
        "width": 52,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3873,
        "y": 749.5,
        "width": 59,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3788,
        "y": 631.5,
        "width": 184,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3940,
        "y": 644.5,
        "width": 48,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3524,
        "y": 588.5,
        "width": 50,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3548,
        "y": 570.5,
        "width": 164,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3691,
        "y": 585.5,
        "width": 74,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3320,
        "y": 699.5,
        "width": 68,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3219,
        "y": 611.5,
        "width": 53,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2677,
        "y": 631.5,
        "width": 39,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2685,
        "y": 603.5,
        "width": 126,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2923,
        "y": 633.5,
        "width": 52,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2801,
        "y": 630.5,
        "width": 42,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2842,
        "y": 584.5,
        "width": 178,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3031,
        "y": 606.5,
        "width": 206,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3256,
        "y": 584.5,
        "width": 276,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3123,
        "y": 726.5,
        "width": 50,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3016,
        "y": 560.5,
        "width": 41,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2711,
        "y": 468.5,
        "width": 27,
        "height": 315,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2644,
        "y": 500.5,
        "width": 28,
        "height": 304,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2382,
        "y": 750.5,
        "width": 96,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2544,
        "y": 741.5,
        "width": 36,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2282,
        "y": 747.5,
        "width": 77,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2184,
        "y": 744.5,
        "width": 77,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2151,
        "y": 691.5,
        "width": 54,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2059,
        "y": 695.5,
        "width": 604,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1936,
        "y": 635.5,
        "width": 193,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2055,
        "y": 638.5,
        "width": 24,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1906,
        "y": 639.5,
        "width": 36,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1777,
        "y": 647.5,
        "width": 138,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1574,
        "y": 623.5,
        "width": 222,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1402,
        "y": 592.5,
        "width": 183,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1204,
        "y": 577.5,
        "width": 206,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1070,
        "y": 577.5,
        "width": 153,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 960,
        "y": 561.5,
        "width": 124,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 944,
        "y": 452.5,
        "width": 52,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 826,
        "y": 476.5,
        "width": 60,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 854,
        "y": 441.5,
        "width": 117,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 713,
        "y": 601.5,
        "width": 101,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 785,
        "y": 523.5,
        "width": 51,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 517,
        "y": 599.5,
        "width": 201,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 590,
        "y": 638.5,
        "width": 36,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 465,
        "y": 615.5,
        "width": 89,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 440,
        "y": 454.5,
        "width": 46,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 448,
        "y": 500.5,
        "width": 357,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 736,
        "y": 564.5,
        "width": 72,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 436,
        "y": 275.5,
        "width": 41,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 457,
        "y": 323.5,
        "width": 144,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 560,
        "y": 333.5,
        "width": 39,
        "height": 165,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 288,
        "y": 165.5,
        "width": 62,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 238,
        "y": 73.5,
        "width": 60,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 141,
        "y": 162.5,
        "width": 72,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 185,
        "y": 141.5,
        "width": 75,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 322,
        "y": 132.5,
        "width": 194,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 445,
        "y": 165.5,
        "width": 39,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 19,
        "y": 216.5,
        "width": 61,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 58,
        "y": 167.5,
        "width": 110,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -92,
        "y": 274.5,
        "width": 129,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -67,
        "y": 286.5,
        "width": 28,
        "height": 214,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -312,
        "y": 814.5,
        "width": 81,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -261,
        "y": 896.5,
        "width": 167,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 864.5,
        "width": 77,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -57,
        "y": 833.5,
        "width": 72,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -20,
        "y": 833.5,
        "width": 86,
        "height": 25,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 49,
        "y": 780.5,
        "width": 38,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 83,
        "y": 797.5,
        "width": 66,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 993,
        "y": 1413.5,
        "width": 366,
        "height": -27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 625,
        "y": 1441.5,
        "width": 268,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 749,
        "y": 1409.5,
        "width": 275,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 342,
        "y": 1504.5,
        "width": 252,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 503,
        "y": 1465.5,
        "width": 151,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -118,
        "y": 1518.5,
        "width": 488,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -302,
        "y": 1469.5,
        "width": 102,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -229,
        "y": 1498.5,
        "width": 121,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -328,
        "y": 881.5,
        "width": 40,
        "height": 603,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -40,
        "y": 474.5,
        "width": 23,
        "height": 368,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2013,
        "y": 753.5,
        "width": 58,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1996,
        "y": 755.5,
        "width": 31,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "fish",
        "x": 3053,
        "y": 2448.5,
        "width": 63,
        "height": 73,
        "color": "rgb(51, 102, 255, 0)"
      },
      {
        "type": "fish",
        "x": 3077,
        "y": 2513.5,
        "width": 79,
        "height": 196,
        "color": "rgb(51, 102, 255, 0)"
      },
      {
        "type": "fish",
        "x": 3025,
        "y": 2705.5,
        "width": 107,
        "height": 56,
        "color": "rgb(51, 102, 255, 0)"
      },
      {
        "type": "fish",
        "x": 2819,
        "y": 2776.5,
        "width": 218,
        "height": 57,
        "color": "rgb(51, 102, 255, 0)"
      },
      {
        "type": "fish",
        "x": 2968,
        "y": 2744.5,
        "width": 72,
        "height": 42,
        "color": "rgb(51, 102, 255, 0)"
      },
      {
        "type": "fish",
        "x": 2977,
        "y": 2385.5,
        "width": 86,
        "height": 85,
        "color": "rgb(51, 102, 255, 0)"
      },
      {
        "type": "craft",
        "x": 1708,
        "y": 1606.5,
        "width": 398,
        "height": 130,
        "color": "rgb(153, 102, 51, 0)"
      },
      {
        "type": "craft",
        "x": 1740,
        "y": 1681.5,
        "width": 460,
        "height": 135,
        "color": "rgb(153, 102, 51, 0)"
      },
      {
        "type": "wall",
        "x": 1251.5,
        "y": 2056.5,
        "width": 195,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1400.5,
        "y": 2041.5,
        "width": 71,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1446.5,
        "y": 2020.5,
        "width": 132,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1548.5,
        "y": 2007.5,
        "width": 55,
        "height": 14,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1576.5,
        "y": 1978.5,
        "width": 57,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1573.5,
        "y": 1928.5,
        "width": 62,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1113.5,
        "y": 1911.5,
        "width": 144,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1259.5,
        "y": 1874.5,
        "width": 195,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1455.5,
        "y": 1919.5,
        "width": 129,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1072.5,
        "y": 1942.5,
        "width": 54,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1113.5,
        "y": 1895.5,
        "width": 145,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1455.5,
        "y": 1914.5,
        "width": 132,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1458.5,
        "y": 1892.5,
        "width": 129,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1121.5,
        "y": 2013.5,
        "width": 172,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3052,
        "y": 1812.5,
        "width": 465,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3485,
        "y": 1791.5,
        "width": 172,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3601,
        "y": 1753.5,
        "width": 330,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3925,
        "y": 1772.5,
        "width": 52,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3709,
        "y": 1740.5,
        "width": 186,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3953,
        "y": 1788.5,
        "width": 58,
        "height": 25,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3928,
        "y": 1789.5,
        "width": 82,
        "height": 258,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3989,
        "y": 1809.5,
        "width": 84,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3996,
        "y": 1834.5,
        "width": 125,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4075,
        "y": 1858.5,
        "width": 134,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2785,
        "y": 1823.5,
        "width": 291,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4166,
        "y": 1630.5,
        "width": 59,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4064,
        "y": 1575.5,
        "width": 169,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4003,
        "y": 1542.5,
        "width": 69,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4009,
        "y": 1377.5,
        "width": 39,
        "height": 176,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4028,
        "y": 1303.5,
        "width": 33,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4052,
        "y": 1188.5,
        "width": 54,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4038,
        "y": 1069.5,
        "width": 49,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4052,
        "y": 987.5,
        "width": 42,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3971,
        "y": 911.5,
        "width": 41,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3998,
        "y": 970.5,
        "width": 70,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3943,
        "y": 752.5,
        "width": 37,
        "height": 202,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3901,
        "y": 749.5,
        "width": 60,
        "height": 146,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3840,
        "y": 766.5,
        "width": 44,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "lobbyCombatArea",
        "x": 4123,
        "y": 1608.5,
        "width": 65,
        "height": 262,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "dialog",
        "name": "dialogCombatAreaPole",
        "x": 3886,
        "y": 1406.5,
        "width": 150,
        "height": 402,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "dialog",
        "name": "dialogFishingPole",
        "x": 2337,
        "y": 2184.5,
        "width": 237,
        "height": 247,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "dialog",
        "name": "dialogCastelDoor",
        "x": 1000,
        "y": 419.5,
        "width": 544,
        "height": 265,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "dialog",
        "name": "dialogWayPoint",
        "x": 1886,
        "y": 621.5,
        "width": 211,
        "height": 142,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "wall",
        "x": 817,
        "y": 1385.5,
        "width": 540,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": -201.5,
        "y": 336.5,
        "width": 802,
        "height": 174,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [
    ],
  },

  lobbyCombatArea: {
    areaName: "CRYSTAL FOREST",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: lobbyCombatArea,
    foregroundImage: lobbyCombatAreaFront,
    playerPos: {
      x: 300,
      y: 1800,
    },
    colliders: [
      {
        "type": "wall",
        "x": 520,
        "y": 404.5,
        "width": 58,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 711,
        "y": 329.5,
        "width": 46,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 790,
        "y": 410.5,
        "width": 50,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 973,
        "y": 426.5,
        "width": 66,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 606,
        "y": 164.5,
        "width": 401,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 915,
        "y": 235.5,
        "width": 44,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 974,
        "y": 81.5,
        "width": 1210,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1083,
        "y": 182.5,
        "width": 47,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1167,
        "y": 312.5,
        "width": 43,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1178,
        "y": 500.5,
        "width": 68,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1247,
        "y": 151.5,
        "width": 52,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1352,
        "y": 387.5,
        "width": 56,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1495,
        "y": 461.5,
        "width": 68,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1398,
        "y": 147.5,
        "width": 65,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1504,
        "y": 223.5,
        "width": 52,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1648,
        "y": 335.5,
        "width": 50,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1770,
        "y": 286.5,
        "width": 58,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1908,
        "y": 391.5,
        "width": 52,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1993,
        "y": 275.5,
        "width": 47,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2169,
        "y": 307.5,
        "width": 45,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2241,
        "y": 474.5,
        "width": 51,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2290,
        "y": 296.5,
        "width": 63,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2423,
        "y": 385.5,
        "width": 67,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2511,
        "y": 170.5,
        "width": 77,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2655,
        "y": 270.5,
        "width": 68,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2784,
        "y": 407.5,
        "width": 68,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2165,
        "y": 39.5,
        "width": 390,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2511,
        "y": -44.5,
        "width": 1089,
        "height": 149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2823,
        "y": 179.5,
        "width": 43,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2930,
        "y": 293.5,
        "width": 55,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3087,
        "y": 212.5,
        "width": 54,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3190,
        "y": 325.5,
        "width": 66,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3224,
        "y": 148.5,
        "width": 54,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3353,
        "y": 446.5,
        "width": 27,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3488,
        "y": 418.5,
        "width": 60,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3485,
        "y": 32.5,
        "width": 68,
        "height": 272,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3523,
        "y": 221.5,
        "width": 266,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3636,
        "y": 254.5,
        "width": 47,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3643,
        "y": 385.5,
        "width": 450,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3552,
        "y": 596.5,
        "width": 48,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3676,
        "y": 524.5,
        "width": 46,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3363,
        "y": 633.5,
        "width": 59,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3786,
        "y": 388.5,
        "width": 55,
        "height": 551,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3666,
        "y": 795.5,
        "width": 61,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3521,
        "y": 881.5,
        "width": 71,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3715,
        "y": 1019.5,
        "width": 42,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3818,
        "y": 883.5,
        "width": 155,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3931,
        "y": 900.5,
        "width": 55,
        "height": 300,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3800,
        "y": 1168.5,
        "width": 61,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3650,
        "y": 1257.5,
        "width": 74,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3572,
        "y": 1487.5,
        "width": 50,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3972,
        "y": 1146.5,
        "width": 123,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4059,
        "y": 1169.5,
        "width": 73,
        "height": 559,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3879,
        "y": 1351.5,
        "width": 34,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3775,
        "y": 1607.5,
        "width": 45,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3618,
        "y": 1705.5,
        "width": 65,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3531,
        "y": 1879.5,
        "width": 51,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3616,
        "y": 2069.5,
        "width": 70,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3731,
        "y": 1995.5,
        "width": 68,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3798,
        "y": 1909.5,
        "width": 47,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3884,
        "y": 1694.5,
        "width": 42,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4048,
        "y": 1684.5,
        "width": 49,
        "height": 560,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3966,
        "y": 1936.5,
        "width": 106,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3875,
        "y": 2076.5,
        "width": 72,
        "height": 241,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3787,
        "y": 2286.5,
        "width": 62,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3560,
        "y": 2324.5,
        "width": 51,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3729,
        "y": 2438.5,
        "width": 54,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3668,
        "y": 2643.5,
        "width": 54,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3831,
        "y": 2711.5,
        "width": 68,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3905,
        "y": 2867.5,
        "width": 67,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3877,
        "y": 2548.5,
        "width": 66,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4052,
        "y": 2202.5,
        "width": 46,
        "height": 560,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3990,
        "y": 2720.5,
        "width": 111,
        "height": 306,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3850,
        "y": 3127.5,
        "width": 54,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3614,
        "y": 3196.5,
        "width": 72,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3898,
        "y": 3357.5,
        "width": 56,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3720,
        "y": 3391.5,
        "width": 53,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4055,
        "y": 2953.5,
        "width": 75,
        "height": 642,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3875,
        "y": 3537.5,
        "width": 231,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3562,
        "y": 3569.5,
        "width": 362,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3508,
        "y": 3480.5,
        "width": 73,
        "height": 142,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3350,
        "y": 3478.5,
        "width": 46,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3182,
        "y": 3613.5,
        "width": 37,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2856,
        "y": 3573.5,
        "width": 60,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3243,
        "y": 3792.5,
        "width": 51,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3262,
        "y": 3865.5,
        "width": 421,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3461,
        "y": 3736.5,
        "width": 55,
        "height": 159,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3568,
        "y": 3635.5,
        "width": 57,
        "height": 231,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3134,
        "y": 3862.5,
        "width": 150,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2869,
        "y": 3822.5,
        "width": 66,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2858,
        "y": 3925.5,
        "width": 390,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3067,
        "y": 3774.5,
        "width": 74,
        "height": 179,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1991,
        "y": 3901.5,
        "width": 914,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2726,
        "y": 3835.5,
        "width": 46,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2665,
        "y": 3732.5,
        "width": 54,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2373,
        "y": 3826.5,
        "width": 43,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2464,
        "y": 3739.5,
        "width": 56,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2385,
        "y": 3584.5,
        "width": 76,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2248,
        "y": 3702.5,
        "width": 86,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2116,
        "y": 3670.5,
        "width": 61,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2063,
        "y": 3801.5,
        "width": 51,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1852,
        "y": 3878.5,
        "width": 62,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1947,
        "y": 3752.5,
        "width": 43,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 864,
        "y": 3891.5,
        "width": 1164,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1217,
        "y": 3814.5,
        "width": 48,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1124,
        "y": 3767.5,
        "width": 37,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1309,
        "y": 3751.5,
        "width": 40,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1492,
        "y": 3835.5,
        "width": 53,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 884,
        "y": 3679.5,
        "width": 67,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 318,
        "y": 3874.5,
        "width": 582,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 773,
        "y": 3759.5,
        "width": 44,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 686,
        "y": 3628.5,
        "width": 56,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 559,
        "y": 3706.5,
        "width": 59,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 426,
        "y": 3768.5,
        "width": 43,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 494,
        "y": 3529.5,
        "width": 41,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 627,
        "y": 3459.5,
        "width": 46,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 812,
        "y": 3503.5,
        "width": 57,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 302,
        "y": 3407.5,
        "width": 76,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 205,
        "y": 3477.5,
        "width": 48,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 194,
        "y": 3687.5,
        "width": 56,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 59,
        "y": 3703.5,
        "width": 38,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 364,
        "y": 3605.5,
        "width": 38,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 209,
        "y": 3783.5,
        "width": 132,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 71,
        "y": 3729.5,
        "width": 153,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -3,
        "y": 3324.5,
        "width": 96,
        "height": 430,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 152,
        "y": 3319.5,
        "width": 64,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 245,
        "y": 3118.5,
        "width": 77,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 369,
        "y": 2926.5,
        "width": 66,
        "height": 142,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -9,
        "y": 3121.5,
        "width": 71,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 76,
        "y": 2948.5,
        "width": 88,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -188,
        "y": 3351.5,
        "width": 236,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -126,
        "y": 3009.5,
        "width": 43,
        "height": 411,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 174,
        "y": 2772.5,
        "width": 77,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 73,
        "y": 2676.5,
        "width": 53,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -69,
        "y": 2872.5,
        "width": 66,
        "height": 159,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -122,
        "y": 2984.5,
        "width": 81,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -228,
        "y": 2747.5,
        "width": 71,
        "height": 180,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -181,
        "y": 2879.5,
        "width": 141,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -72,
        "y": 2626.5,
        "width": 46,
        "height": 153,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -164,
        "y": 2681.5,
        "width": 110,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 6,
        "y": 2448.5,
        "width": 51,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -81,
        "y": 2551.5,
        "width": 101,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 203,
        "y": 2542.5,
        "width": 61,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -112,
        "y": 2266.5,
        "width": 79,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -120,
        "y": 2242.5,
        "width": 86,
        "height": 331,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -180,
        "y": 2090.5,
        "width": 48,
        "height": 181,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -228,
        "y": 2234.5,
        "width": 144,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -300,
        "y": 2031.5,
        "width": 143,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -353,
        "y": 1120.5,
        "width": 89,
        "height": 958,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -199,
        "y": 1255.5,
        "width": 59,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 43,
        "y": 1073.5,
        "width": 75,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1499,
        "y": 847.5,
        "width": 462,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1019,
        "y": 939.5,
        "width": 62,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 948,
        "y": 965.5,
        "width": 75,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 864,
        "y": 979.5,
        "width": 96,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 776,
        "y": 1019.5,
        "width": 107,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 682,
        "y": 1044.5,
        "width": 105,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 536,
        "y": 1052.5,
        "width": 156,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2184,
        "y": 875.5,
        "width": 90,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2198,
        "y": 932.5,
        "width": 66,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2249,
        "y": 897.5,
        "width": 178,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2389,
        "y": 924.5,
        "width": 96,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2430,
        "y": 966.5,
        "width": 136,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2514,
        "y": 1003.5,
        "width": 208,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2658,
        "y": 1038.5,
        "width": 293,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3044,
        "y": 1077.5,
        "width": 66,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3091,
        "y": 1096.5,
        "width": 108,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3058,
        "y": 1098.5,
        "width": 121,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2905,
        "y": 855.5,
        "width": 93,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1498,
        "y": 1880.5,
        "width": 485,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1911,
        "y": 1848.5,
        "width": 99,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1651,
        "y": 1840.5,
        "width": 361,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1565,
        "y": 1925.5,
        "width": 56,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1508,
        "y": 1849.5,
        "width": 60,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2545,
        "y": 1025.5,
        "width": 169,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2641,
        "y": 1078.5,
        "width": 249,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "lobby",
        "x": -303,
        "y": 1372.5,
        "width": 203,
        "height": 639,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1159.5,
        "y": 2765.5,
        "width": 95,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1267.5,
        "y": 2995.5,
        "width": 74,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1319.5,
        "y": 3018.5,
        "width": 116,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 578.5,
        "y": 2756.5,
        "width": 50,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 558.5,
        "y": 2749.5,
        "width": 22,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 597.5,
        "y": 2834.5,
        "width": 168,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 669.5,
        "y": 2858.5,
        "width": 239,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 804.5,
        "y": 2912.5,
        "width": 388,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 941.5,
        "y": 2951.5,
        "width": 232,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2663.5,
        "y": 2854.5,
        "width": 234,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2860.5,
        "y": 2831.5,
        "width": 134,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2965.5,
        "y": 2791.5,
        "width": 143,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3100.5,
        "y": 2768.5,
        "width": 104,
        "height": 33,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3079.5,
        "y": 2758.5,
        "width": 123,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3160.5,
        "y": 2725.5,
        "width": 54,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3038.5,
        "y": 2766.5,
        "width": 68,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2929.5,
        "y": 2807.5,
        "width": 55,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2803.5,
        "y": 2827.5,
        "width": 194,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2911.5,
        "y": 2810.5,
        "width": 73,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1686.5,
        "y": 3027.5,
        "width": 467,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: [
      {
        name: "treeSimpleEnemy",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 764,
          y: 692
        },
        w: 100,
        h: 100,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 10,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 764,
          y: 692
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "treeSimpleEnemy",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3368,
          y: 1094
        },
        w: 100,
        h: 100,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 10,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3368,
          y: 1094
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "treeSimpleEnemy",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1832,
          y: 573
        },
        w: 100,
        h: 100,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 10,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1832,
          y: 573
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "treeSimpleEnemy",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3052,
          y: 579
        },
        w: 100,
        h: 100,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 10,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3052,
          y: 579
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
    ]
  },

  slimeForestPath: {
    areaName: "SLIME FOREST",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: slimeForestPath,
    foregroundImage: slimeForestPathFront,
    playerPos: {
      x: 1935,
      y: 2750,
    },
    colliders: [
      {
        "type": "transition",
        "format": "liquid",
        "destination": "lobby",
        "x": 1523.5,
        "y": 2753.5,
        "width": 548,
        "height": 248,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "islandOne",
        "x": 1289.5,
        "y": 1320.5,
        "width": 873,
        "height": 125,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "mushroomForest",
        "x": 2694,
        "y": 1903.5,
        "width": 255,
        "height": 446,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

  mushroomForest: {
    areaName: "MOOSHROOM HIDEOUT",
    areaSounds: lobbySoundtrack,
    backgroundImage: mushroomForest,
    foregroundImage: mushroomForestFront,
    playerPos: {
      x: 1935,
      y: 2750,
    },
    colliders: [
      {
      "type": "transition",
      "format": "liquid",
      "destination": "slimeForestPath",
      "x": 117,
      "y": 1650.5,
      "width": 284,
      "height": 496,
      "color": "rgb(204, 0, 204, 0)"
    }],
    enemies: [
      {
        name: "redMooshroomEnemy",
        imgw: 42,
        imgh: 39,
        imgcw: 42,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1000,
          y: 1100
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1000,
          y: 1100
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
      },
      {
        name: "redMooshroomEnemy",
        imgw: 42,
        imgh: 39,
        imgcw: 42,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1500,
          y: 1300
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1500,
          y: 1300
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
      },
      {
        name: "redMooshroomEnemy",
        imgw: 42,
        imgh: 39,
        imgcw: 42,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1500,
          y: 1100
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1500,
          y: 1100
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
      },
      {
        name: "redMooshroomEnemy",
        imgw: 42,
        imgh: 39,
        imgcw: 42,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 5,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1700,
          y: 1700
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, attackState, attackCircleState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1700,
          y: 1700
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
      },
    ]
  }

};

let selectedXcoord = 0;
let selectedYcoord = 0;
let widthCoord = 0;
let heightCoord = 0;
let currentDevAction = "none"
let currentlyPlacingWall = false;
let currentSelectedWall = null;
let currentSelectedMap = "none"

const rect = canvasLobby.getBoundingClientRect();

addEventListener("mousemove", (event) => {
  let x;
  let y;
  if (currentlyPlacingWall) {
    x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    widthCoord = x - selectedXcoord;
    heightCoord = y - selectedYcoord;
  } 
  else if (currentDevAction === "delete") {
    x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;

    let collidingWitWall = false;

    mapsInfo[currentLand].colliders.forEach(wall => {

      const mouseCollider = {
        x: x,
        y: y,
        width: 20,
        height: 20
      }

      
      if (isColliding(mouseCollider, { x: wall.x, y: wall.y, width: wall.width, height: wall.height })) {
        wall.color = `rgba(210, 45, 45, 0.5)`
        currentSelectedWall = mapsInfo[currentLand].colliders.indexOf(wall);
        collidingWitWall = true;
      } else {
        wall.color = `rgb(0, 0, 0, ${wallsVisibility})`
      }
      
    })

    if (!collidingWitWall) {
      currentSelectedWall = null;
    }
  }
});

canvasLobby.addEventListener('click', function(event) {
  if (!currentlyPlacingWall && currentDevAction === "wall" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  } 
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "wall") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "wall",
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(0, 0, 0, ${wallsVisibility})`
    })
    currentlyPlacingWall = false;
  }


  else if (currentSelectedWall >= 0 && currentDevAction === "delete") {
    mapsInfo[currentLand].colliders.splice(currentSelectedWall, 1)
    currentSelectedWall = null;
  }


  else if (!currentlyPlacingWall && currentDevAction === "fish" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  }
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "fish") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "fish",
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(51, 102, 255, ${wallsVisibility})`
    })
    currentlyPlacingWall = false;
  }
  
  
  else if (!currentlyPlacingWall && currentDevAction === "cook" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  }
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "cook") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "cook",
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(153, 255, 102, ${wallsVisibility})`
    })
    currentlyPlacingWall = false;
  }
  
  
  else if (!currentlyPlacingWall && currentDevAction === "craft" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  }
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "craft") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "craft",
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(153, 102, 51, ${wallsVisibility})`
    })
    currentlyPlacingWall = false;
  }
  
  
  else if (!currentlyPlacingWall && currentDevAction === "chest" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  }
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "chest") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "chest",
      item: currentChestItem,
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(255, 255, 204, ${wallsVisibility})`
    })
    currentlyPlacingWall = false;
  }

  
  else if (!currentlyPlacingWall && currentDevAction === "transition" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  }
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "transition") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "transition",
      format: transitionType,
      destination: currentSelectedMap,
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(204, 0, 204, ${wallsVisibility})`
    })
    currentlyPlacingWall = false;
  }
  
  else if (!currentlyPlacingWall && currentDevAction === "dialog" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  }
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "dialog") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "dialog",
      name: currentDialogTitle,
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(179, 255, 213, ${wallsVisibility})`
    })
    currentlyPlacingWall = false;
  }
   
});

placeWalls.addEventListener("click", function() {
 if (currentDevAction !== "wall") {
  currentDevAction = "wall";
  roomsDiv.style.display = "none"
  dialogsDiv.style.display = "none"
  deleteWalls.style.backgroundColor = "black"
  placeFishingArea.style.backgroundColor = "black"
  placeDialog.style.backgroundColor = "black"
  placeCookingArea.style.backgroundColor = "black"
  placeCraftingArea.style.backgroundColor = "black"
  placeChest.style.backgroundColor = "black"
  placeTransition.style.backgroundColor = "black"
  placeWalls.style.backgroundColor = "rgba(170, 233, 170, 1)"
 } else {
  currentDevAction = "none";
  placeWalls.style.backgroundColor = "black"
 }
});

deleteWalls.addEventListener("click", function() {
  if (currentDevAction !== "delete") {
    currentDevAction = "delete";
    roomsDiv.style.display = "none"
    dialogsDiv.style.display = "none"
    placeWalls.style.backgroundColor = "black"
    placeDialog.style.backgroundColor = "black"
    placeFishingArea.style.backgroundColor = "black"
    placeCookingArea.style.backgroundColor = "black"
    placeCraftingArea.style.backgroundColor = "black"
    placeChest.style.backgroundColor = "black"
    placeTransition.style.backgroundColor = "black"
    deleteWalls.style.backgroundColor = "rgba(170, 233, 170, 1)"
  } else {
    currentDevAction = "none";
    deleteWalls.style.backgroundColor = "black"
  }
 });

placeFishingArea.addEventListener("click", function() {
  if (currentDevAction !== "fish") {
    currentDevAction = "fish";
    roomsDiv.style.display = "none"
    dialogsDiv.style.display = "none"
    deleteWalls.style.backgroundColor = "black"
    placeDialog.style.backgroundColor = "black"
    placeWalls.style.backgroundColor = "black"
    placeCookingArea.style.backgroundColor = "black"
    placeCraftingArea.style.backgroundColor = "black"
    placeChest.style.backgroundColor = "black"
    placeTransition.style.backgroundColor = "black"
    placeFishingArea.style.backgroundColor = "rgba(170, 233, 170, 1)"
  } else {
    currentDevAction = "none";
    placeFishingArea.style.backgroundColor = "black"
  }
 });

placeCookingArea.addEventListener("click", function() {
if (currentDevAction !== "cook") {
  currentDevAction = "cook";
  roomsDiv.style.display = "none"
  dialogsDiv.style.display = "none"
  deleteWalls.style.backgroundColor = "black"
  placeDialog.style.backgroundColor = "black"
  placeWalls.style.backgroundColor = "black"
  placeFishingArea.style.backgroundColor = "black"
  placeCraftingArea.style.backgroundColor = "black"
  placeChest.style.backgroundColor = "black"
  placeTransition.style.backgroundColor = "black"
  placeCookingArea.style.backgroundColor = "rgba(170, 233, 170, 1)"
} else {
  currentDevAction = "none";
  placeCookingArea.style.backgroundColor = "black"
}
});

placeCraftingArea.addEventListener("click", function() {
if (currentDevAction !== "craft") {
  currentDevAction = "craft";
  roomsDiv.style.display = "none"
  dialogsDiv.style.display = "none"
  deleteWalls.style.backgroundColor = "black"
  placeDialog.style.backgroundColor = "black"
  placeWalls.style.backgroundColor = "black"
  placeFishingArea.style.backgroundColor = "black"
  placeCookingArea.style.backgroundColor = "black"
  placeChest.style.backgroundColor = "black"
  placeTransition.style.backgroundColor = "black"
  placeCraftingArea.style.backgroundColor = "rgba(170, 233, 170, 1)"
} else {
  currentDevAction = "none";
  placeCraftingArea.style.backgroundColor = "black"
}
});

placeTransition.addEventListener("click", function() {
if (currentDevAction !== "transition") {
  currentDevAction = "transition";
  roomsDiv.style.display = "block"
  dialogsDiv.style.display = "none"
  deleteWalls.style.backgroundColor = "black"
  placeDialog.style.backgroundColor = "black"
  placeWalls.style.backgroundColor = "black"
  placeFishingArea.style.backgroundColor = "black"
  placeCookingArea.style.backgroundColor = "black"
  placeChest.style.backgroundColor = "black"
  placeCraftingArea.style.backgroundColor = "black"
  placeTransition.style.backgroundColor = "rgba(170, 233, 170, 1)"
} else {
  roomsDiv.style.display = "none"
  currentDevAction = "none";
  placeTransition.style.backgroundColor = "black"
}
});

placeChest.addEventListener("click", function() {
if (currentDevAction !== "chest") {
  currentDevAction = "chest";
  roomsDiv.style.display = "none"
  deleteWalls.style.backgroundColor = "black"
  dialogsDiv.style.display = "none"
  placeDialog.style.backgroundColor = "black"
  placeWalls.style.backgroundColor = "black"
  placeFishingArea.style.backgroundColor = "black"
  placeCookingArea.style.backgroundColor = "black"
  placeCraftingArea.style.backgroundColor = "black"
  placeTransition.style.backgroundColor = "black"
  placeChest.style.backgroundColor = "rgba(170, 233, 170, 1)"
} else {
  currentDevAction = "none";
  placeChest.style.backgroundColor = "black"
}
});

placeChestStick.style.backgroundColor = "rgba(170, 233, 170, 1)" //Initially selected

placeChestStick.addEventListener("click", function() {
  if (currentChestItem !== "stick") {
    currentChestItem = "stick";
    placeChestGem.style.backgroundColor = "black"
    placeChestVeg.style.backgroundColor = "black"
    placeChestStick.style.backgroundColor = "rgba(170, 233, 170, 1)"
  }
});

placeChestVeg.addEventListener("click", function() {
  if (currentChestItem !== "vegetable") {
    currentChestItem = "vegetable";
    placeChestGem.style.backgroundColor = "black"
    placeChestStick.style.backgroundColor = "black"
    placeChestVeg.style.backgroundColor = "rgba(170, 233, 170, 1)"
  }
});

placeChestGem.addEventListener("click", function() {
  if (currentChestItem !== "gem") {
    currentChestItem = "gem";
    placeChestVeg.style.backgroundColor = "black"
    placeChestStick.style.backgroundColor = "black"
    placeChestGem.style.backgroundColor = "rgba(170, 233, 170, 1)"
  }
});

placeDialog.addEventListener("click", function() {
  if (currentDevAction !== "dialog") {
    currentDevAction = "dialog";
    roomsDiv.style.display = "none"
    dialogsDiv.style.display = "block"
    deleteWalls.style.backgroundColor = "black"
    placeWalls.style.backgroundColor = "black"
    placeFishingArea.style.backgroundColor = "black"
    placeCookingArea.style.backgroundColor = "black"
    placeChest.style.backgroundColor = "black"
    placeTransition.style.backgroundColor = "black"
    placeCraftingArea.style.backgroundColor = "black"
    placeDialog.style.backgroundColor = "rgba(170, 233, 170, 1)"
  } else {
    currentDevAction = "none";
    placeDialog.style.backgroundColor = "black"
  }
});

showWalls.addEventListener("click", function() {
if (wallsVisibility === 0) {
  wallsVisibility = 0.5;
  showWalls.style.backgroundColor = "rgba(170, 233, 170, 1)"
} else {
  wallsVisibility = 0;
  showWalls.style.backgroundColor = "black"
}
mapsInfo[currentLand].colliders.forEach(wall => {
  if (wall.type === "wall") {
    wall.color = `rgb(0, 0, 0, ${wallsVisibility})`;
  } else if (wall.type === "fish") {
    wall.color = `rgb(51, 102, 255, ${wallsVisibility})`
  } else if (wall.type === "cook") {
    wall.color = `rgb(153, 255, 102, ${wallsVisibility})`
  } else if (wall.type === "craft") {
    wall.color = `rgb(153, 102, 51, ${wallsVisibility})`
  } else if (wall.type === "chest") {
    wall.color = `rgb(255, 255, 204, ${wallsVisibility})`
  } else if (wall.type === "transition") {
    wall.color = `rgb(204, 0, 204, ${wallsVisibility})`
  } else if (wall.type === "dialog") {
    wall.color = `rgb(179, 255, 213, ${wallsVisibility})`
  }
})
});

exportWalls.addEventListener("click", function() {
exportObjectAsText(mapsInfo[currentLand].colliders, "walls")
});

function exportObjectAsText(obj, fileName) {
    const jsonString = JSON.stringify(obj, null, 2);
    const blob = new Blob([jsonString], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = fileName;
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function isColliding(player, wall) {
  return (
      player.x < wall.x + wall.width &&
      player.x + player.width > wall.x &&
      player.y < wall.y + wall.height &&
      player.y + player.height > wall.y
  );
}

function addMapsInfoToDiv() {

  for (const key in mapsInfo) {
    if (mapsInfo.hasOwnProperty(key)) {
      const pElement = document.createElement('p');
      
      pElement.innerHTML = key;
      pElement.classList.add('roomsDev-item');

      pElement.addEventListener('click', () => {
        currentSelectedMap = key;

        pElement.classList.add('textjump');
        pElement.innerHTML = "Selected!";
        setTimeout(() => {
          pElement.classList.remove('textjump');
          pElement.innerHTML = key;
        }, 1000);
      });

      roomsDiv.appendChild(pElement);
    }
  }
  
  for (const key in dialogBoxes) {
    if (dialogBoxes.hasOwnProperty(key)) {
      const pElement = document.createElement('p');
      
      pElement.innerHTML = key;
      pElement.classList.add('roomsDev-item');

      pElement.addEventListener('click', () => {
        currentDialogTitle = key;

        pElement.classList.add('textjump');
        pElement.innerHTML = "Selected!";
        setTimeout(() => {
          pElement.classList.remove('textjump');
          pElement.innerHTML = key;
        }, 1000);
      });

      dialogsDiv.appendChild(pElement);
    }
  }
}

addMapsInfoToDiv();

// Developer UI <




// Camera >
let cameraX = 0;
let cameraY = 0;
let secondaryCameraX = 0;
let secondaryCameraY = 0;
let cutscene = false;
const minSpeed = 0.5;
const speedFactor = 0.05;

let playerColminX;
let playerColminY;
let playerColLengthX;
let playerColLengthY;

function cameraFollow () {

  let distanceX = Math.abs(secondaryCameraX - cameraX);
  let distanceY = Math.abs(secondaryCameraY - cameraY);

  let speedX = Math.max(distanceX * speedFactor, minSpeed);
  let speedY = Math.max(distanceY * speedFactor, minSpeed);

  if (cameraX < secondaryCameraX) {
    cameraX += speedX;
    if (cameraX > secondaryCameraX) cameraX = secondaryCameraX;
  } else if (cameraX > secondaryCameraX) {
    cameraX -= speedX;
    if (cameraX < secondaryCameraX) cameraX = secondaryCameraX;
  }

  if (cameraY < secondaryCameraY) {
    cameraY += speedY; 
    if (cameraY > secondaryCameraY) cameraY = secondaryCameraY;
  } else if (cameraY > secondaryCameraY) {
    cameraY -= speedY; 
    if (cameraY < secondaryCameraY) cameraY = secondaryCameraY;
  }
}

window.addEventListener("wheel", event => {
  const delta = Math.sign(event.deltaY);

  if (delta === 1 && canvasLobby.height < 1000) {
    canvasLobby.width *= 1.1;
    canvasLobby.height *= 1.1;
  } else if (delta === 1 && canvasLobby.height >= 1000) {

  } else if (canvasLobby.height > 600) {
    canvasLobby.width *= 0.9;
    canvasLobby.height *= 0.9;
  }
});
// Camera <


// Map functions >
const smoothPlayers = {};

function initializeSmoothOnlinePlayers() {
  for (const player of players) {
    if (!smoothPlayers.hasOwnProperty(player.username)) {
      smoothPlayers[player.username] = {
        username: player.username,
        smoothX: player.x,  // Start at the actual position
        smoothY: player.y,  // Start at the actual position
      };
    }
  }
}

function updateSmoothOnlinePlayerPosition(smoothPlayer) {
  for (const player of players) {
    const speedX = Math.abs(smoothPlayer.smoothX - player.x) < 200
      ? 2
      : Math.abs(smoothPlayer.smoothX - player.x) > 400
      ? 200
      : 10;
    
    const speedY = Math.abs(smoothPlayer.smoothY - player.y) < 200
      ? 2
      : Math.abs(smoothPlayer.smoothY - player.y) > 400
      ? 200
      : 10;

      console.log(speedX, speedY, Math.abs(smoothPlayer.smoothX - player.x), Math.abs(smoothPlayer.smoothY - player.y))
    
    if (player && player.username === smoothPlayer.username && player.username !== myPlayer.username) {
      if (Math.abs(smoothPlayer.smoothX - player.x) > 10) {
        smoothPlayer.smoothX += smoothPlayer.smoothX < player.x ? speedX : -speedX;
      }
      if (Math.abs(smoothPlayer.smoothY - player.y) > 10) {
        smoothPlayer.smoothY += smoothPlayer.smoothY < player.y ? speedY : -speedY;
      }
    }
  }
}

function mapSetup () {
  if (myPlayer) {
    // Canvas cleanup
    canvas.clearRect(0, 0, 4500, 4500);
    canvas.imageSmoothingEnabled = false;

    // Bug fix for character not loading
    playerWidth = character.width / 6
    playerHeight = character.height / 4;

    // Reset variables
    fishAvailable = false;
    grassCookingAvailable = false;
    grassCraftingAvailable = false;
    IslandChestAvailable = false;

    // Set cameras
    if (!cutscene) {
    
      if (
        playerX - canvasLobby.width / 2 + 10 >= 0 && 
        playerX + canvasLobby.width / 2 + 10 <= 4300
      ) {
        angleDifferenceX = 0;
        secondaryCameraX = playerX - canvasLobby.width / 2 + 10;
      } else if (playerX - canvasLobby.width / 2 + 10 >= 0) {
        secondaryCameraX = 4300 - canvasLobby.width;
        angleDifferenceX = (playerX - canvasLobby.width / 2 + 10) - (4300 - canvasLobby.width)
      } else {
        secondaryCameraX = -100;
        angleDifferenceX = (playerX - canvasLobby.width / 2 + 10) - (-100)
      }

      if (
        playerY - canvasLobby.height / 2 + 50 >= 0 && 
        playerY + canvasLobby.height / 2 + 50 <= 4300 
      ) {
        angleDifferenceY = 0;
        secondaryCameraY = playerY - canvasLobby.height / 2 + 50;
      } else if (playerY - canvasLobby.height / 2 + 50 >= 0) {
        secondaryCameraY = 4300 - canvasLobby.height;
        angleDifferenceY = (playerY - canvasLobby.height / 2 + 10) - (4300 - canvasLobby.height)
      } else {
        secondaryCameraY = -100;
        angleDifferenceY = (playerY - canvasLobby.height / 2 + 10) - (-100)
      }
      cameraFollow();
      
    }
    
    // Set player position
    if (myPlayer) {
      playerX = mapsInfo[currentLand].playerPos.x
      playerY = mapsInfo[currentLand].playerPos.y
      localPlayerMovement()
    }

    for (const projectile of projectilesClient) {
      projectile.x += Math.cos(projectile.angle || projectile.bullet1 || projectile.bullet2) * (projectile.speed ? projectile.speed : 35);
      projectile.y += Math.sin(projectile.angle || projectile.bullet1 || projectile.bullet2) * (projectile.speed ? projectile.speed : 35);
    }

    drawColliders()
  }
}

function drawObjects (layer) {
  for (const obj of islandOneObj) {
    if ((playerY - cameraY + 120) >= (obj.y - cameraY) && layer === "back") {
      drawOnTop(obj.img, obj.x, obj.y, obj.width, obj.height, cameraX, cameraY)
    }

    if (!((playerY - cameraY + 120) > (obj.y - cameraY)) && layer === "front") {
      drawOnTop(obj.img, obj.x, obj.y, obj.width, obj.height, cameraX, cameraY)
    }
  }
}

function localPlayerMovement () {
  if (movingLeft && allowedMoveUpLeft) {
    inputs["left"] = true;
    playerX -= playerSpeed;
  } else {
    inputs["left"] = false;
  }
  if (movingRight && allowedMoveUpRight) {
    inputs["right"] = true;
    playerX += playerSpeed;
  } else {
    inputs["right"] = false;
  }
  if (movingUp && allowedMoveUpUp) {
    inputs["up"] = true;
    playerY -= playerSpeed;
  } else {
    inputs["up"] = false;
  }
  if (movingDown && allowedMoveUpDown) {
    inputs["down"] = true;
    playerY += playerSpeed;
  } else {
    inputs["down"] = false;
  }
}

function playerCollision () {
  playerColminX = playerX - cameraX - 30;
  playerColminY = playerY - cameraY + 70;
  playerColLengthX = playerWidth + 50;
  playerColLengthY = playerHeight + 22;
  mapsInfo[currentLand].playerPos.x = playerX;
  mapsInfo[currentLand].playerPos.y = playerY;
  canvas.beginPath();
  canvas.fillStyle = `rgb(255, 0, 13, ${wallsVisibility})`;
  canvas.fillRect(playerColminX, playerColminY, playerColLengthX, playerColLengthY);
}

function drawColliders (type, x, y, w, h) {
    
    let colliderToCheck = {};
    
    if (type === "player") {
      allowedMoveUpRight = true;
      allowedMoveUpLeft = true;
      allowedMoveUpUp = true;
      allowedMoveUpDown = true;
    
      colliderToCheck = {
        x: playerColminX,
        y: playerColminY,
        width: playerColLengthX,
        height: playerColLengthY
      }

      mapsInfo[currentLand].colliders.forEach(wall => {
      const adjustedX = wall.x - cameraShakeX - cameraX;
      const adjustedY = wall.y - cameraShakeY - cameraY;

      canvas.fillStyle = wall.color;
      canvas.fillRect(adjustedX, adjustedY, wall.width, wall.height);


      let dialogCounter = 0;

      mapsInfo[currentLand].colliders.forEach(wallX => {
        const adjustedX = wallX.x - cameraShakeX - cameraX;
        const adjustedY = wallX.y - cameraShakeY - cameraY;
        
        if (isColliding(colliderToCheck, { x: adjustedX, y: adjustedY, width: wallX.width, height: wallX.height })) {
          if (wall.type === "dialog") {
            dialogCounter++
          }
        }
      })
      
      if (isColliding(colliderToCheck, { x: adjustedX, y: adjustedY, width: wall.width, height: wall.height })) {

        const playerCenterX = colliderToCheck.x + colliderToCheck.width / 2;
        const playerCenterY = colliderToCheck.y + colliderToCheck.height / 2;
        const wallCenterX = adjustedX + wall.width / 2;
        const wallCenterY = adjustedY + wall.height / 2;

        const overlapX = (colliderToCheck.width / 2 + wall.width / 2) - Math.abs(playerCenterX - wallCenterX);
        const overlapY = (colliderToCheck.height / 2 + wall.height / 2) - Math.abs(playerCenterY - wallCenterY);

        if (wall.type === "wall") {
          if (overlapX < overlapY) {
              if (playerCenterX < wallCenterX) {
                  allowedMoveUpRight = false; 
              } else {
                  allowedMoveUpLeft = false;
              }         
          } else {
              if (playerCenterY < wallCenterY) {
                  allowedMoveUpDown = false;
              } else {
                  allowedMoveUpUp = false;
              }
          }
        }
        else if (wall.type === "fish") {
          fishAvailable = true;
        }
        else if (wall.type === "transition") {
          currentSelectedMap = wall.destination
          transition(wall.format)
        }
        else if (wall.type === "dialog") {
          dialogAvailable = true;
          currentDialogTitle = wall.name;
          if (dialogOpened) {
            containerChat.style.display = "flex";
          } else {
            containerChat.style.display = "none";
          }
        }
        else if (wall.type === "cook") {
          grassCookingAvailable = true;
          if (grassOpenCooking) {
            cookingContainer.style.display = "block";
          } else {
            cookingContainer.style.display = "none";
          }
        }
        else if (wall.type === "craft") {
          grassCraftingAvailable = true;
          if (grassOpenCrafting) {
            craftingContainer.style.display = "block";
          } else {
            craftingContainer.style.display = "none";
          }
        }
        else if (wall.type === "chest") {
          IslandChestAvailable = true;
          currentChestItem = wall.item;
          if (IslandOpenChest) {
            rewardFrame.style.visibility = "visible";
            rewardFrame.style.opacity = "1";
          } else {
            rewardFrame.style.opacity = "0";
            rewardFrame.style.visibility = "hidden";
          }
        }
      }
      else {
        if (wall.type === "dialog" && dialogCounter === 0) {
          dialogOpened = false;
          containerChat.style.display = "none";
          cutscene = false;
          dialogAvailable = false;
        }
        if (wall.type === "cook") {
          grassOpenCooking = false;
          cookingContainer.style.display = "none";
        }
        if (wall.type === "craft") {
          grassOpenCrafting = false;
          craftingContainer.style.display = "none";
        }
        if (wall.type === "chest") {
          IslandChestAvailable = false;
          IslandOpenChest = false;
          rewardFrame.style.visibility = "hidden";
        }
      }
    
    })
    } 
    else if (type === "bullet") {
      colliderToCheck = {
        x: x - cameraShakeX - cameraX - 150,
        y: y - cameraShakeY - cameraY - 190,
        width: w,
        height: h
      }

      let colliding = false;

      canvas.fillRect(colliderToCheck.x, colliderToCheck.y, colliderToCheck.width, colliderToCheck.height);

      mapsInfo[currentLand].colliders.forEach(wallX => {
        const adjustedX = wallX.x - cameraShakeX - cameraX;
        const adjustedY = wallX.y - cameraShakeY - cameraY;
        
        if (isColliding(colliderToCheck, { x: adjustedX, y: adjustedY, width: wallX.width, height: wallX.height }) && wallX.type === "wall") {
          colliding = true
        }
      })

      return colliding;
    }
    else if (type === "enemy") {
      colliderToCheck = {
        x: x - cameraShakeX - cameraX,
        y: y - cameraShakeY - cameraY,
        width: w,
        height: h
      }

      canvas.fillRect(colliderToCheck.x, colliderToCheck.y, colliderToCheck.width, colliderToCheck.height);

      let collidingX = "free";
      let collidingY = "free";

      mapsInfo[currentLand].colliders.forEach(wallX => {
        const adjustedX = wallX.x - cameraShakeX - cameraX;
        const adjustedY = wallX.y - cameraShakeY - cameraY;
        const playerCenterX = colliderToCheck.x + colliderToCheck.width / 2;
        const playerCenterY = colliderToCheck.y + colliderToCheck.height / 2;
        const wallCenterX = adjustedX + wallX.width / 2;
        const wallCenterY = adjustedY + wallX.height / 2;

        const overlapX = (colliderToCheck.width / 2 + wallX.width / 2) - Math.abs(playerCenterX - wallCenterX);
        const overlapY = (colliderToCheck.height / 2 + wallX.height / 2) - Math.abs(playerCenterY - wallCenterY);
        
        if (isColliding(colliderToCheck, { x: adjustedX, y: adjustedY, width: wallX.width, height: wallX.height })) {
          if (wallX.type === "wall") {
            if (overlapX < overlapY) {
                if (playerCenterX < wallCenterX) {
                  collidingX = "right"; 
                } else {
                  collidingX = "left";
                }         
            } else {
                if (playerCenterY < wallCenterY) {
                  collidingY = "down";
                } else {
                  collidingY = "up";
                }
            }
          }
        }
      })

      return [collidingX, collidingY];
    }
    
    
}

function drawLocalPlayer () {
  for (const player of players) {
    if (player.username === myPlayer.username && player.room === myPlayer.room) {
      let armor = drawPlayerArmor(player);
      let artifact = drawPlayerArtifact(player);
      if (animPlayer === "idleRight" && player.lastLooked === "right") {
      frameCurrentPlayer = frameCurrentPlayer % 6;
  
      playerCutX = frameCurrentPlayer * playerWidth;

      canvas.drawImage(
        armor,
        playerCutX,
        playerCutY,
        playerWidth,
        playerHeight,
        playerX - cameraX + 65 - cameraShakeX - 150,
        playerY - cameraY + 120 - cameraShakeY - 180,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
      canvas.drawImage(
        artifact,
        playerCutX,
        playerCutY,
        playerWidth,
        playerHeight,
        playerX - cameraX + 65 - cameraShakeX - 150,
        playerY - cameraY + 120 - cameraShakeY - 180,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
      }
      else if (animPlayer === "idleRight" && player.lastLooked === "left") {
        frameCurrentPlayer = frameCurrentPlayer % 6;
        playerCutX = frameCurrentPlayer * playerWidth;
        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 24,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - 150,
          playerY - cameraY + 120 - cameraShakeY - 180,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 24,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - 150,
          playerY - cameraY + 120 - cameraShakeY - 180,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      else if (animPlayer === "runRight") {
        frameCurrentPlayer = frameCurrentPlayer % 6;
        playerCutX = frameCurrentPlayer * playerWidth;
        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 47.5,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - 150,
          playerY - cameraY + 120 - cameraShakeY - 180,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 47.5,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - 150,
          playerY - cameraY + 120 - cameraShakeY - 180,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      else if (animPlayer === "runLeft") {
        frameCurrentPlayer = frameCurrentPlayer % 6;
        playerCutX = frameCurrentPlayer * playerWidth;
        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 72,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - 150,
          playerY - cameraY + 125 - cameraShakeY - 180,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 72,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - 150,
          playerY - cameraY + 125 - cameraShakeY - 180,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      else if (animPlayer === "moveUp" || animPlayer === "moveDown") {
        frameCurrentPlayer = frameCurrentPlayer % 6;
        playerCutX = frameCurrentPlayer * playerWidth;
      
        if (player.lastLooked === "right") {
          // Play running animation as if moving right
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 47.5, // Same as runRight
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - 150,
            playerY - cameraY + 120 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 47.5, // Same as runRight
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - 150,
            playerY - cameraY + 120 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        } 
        else if (player.lastLooked === "left") {
          // Play running animation as if moving left
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 72, // Same as runLeft
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - 150,
            playerY - cameraY + 125 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 72, // Same as runLeft
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - 150,
            playerY - cameraY + 125 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
      }}
      drawPlayerWeaponOut(player)
    }
  }

  // Advance player animation
  playerFramesDrawn++;
  if (playerFramesDrawn >= 6) {
    frameCurrentPlayer++;
    playerFramesDrawn = 0;
  }
}

function drawOnlinePlayers (layer) {
  initializeSmoothOnlinePlayers()
  for (const player of players) {
    // console.log(player.room, myPlayer.room)
    if (player.username !== myPlayer.username && player.room === myPlayer.room) {
      let smoothPlayer = Object.values(smoothPlayers).find(Splayer => Splayer.username === player.username)
      updateSmoothOnlinePlayerPosition(smoothPlayer)

      let armor = drawPlayerArmor(player);
      let artifact = drawPlayerArtifact(player);

      if (layer === "back" && player.y < playerY) {
        drawPlayerWeaponSheated(player)
        drawPlayerOnline()
      }
      else if (layer === "front" && player.y >= playerY) {
        drawPlayerWeaponSheated(player)
        drawPlayerOnline()
      }

      

      function drawPlayerOnline () {
        if (player.anim === "idleRight" && player.lastLooked === "right") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
      
          playerCutX = frameCurrentPlayer * playerWidth;
    
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "idleRight" && player.lastLooked === "left") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 24,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
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
            playerCutY + 47.5,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 47.5,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
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
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 72,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
            smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 180,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "moveUp" || player.anim === "moveDown") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
          playerCutX = frameCurrentPlayer * playerWidth;
        
          if (player.lastLooked === "right") {
            // Play running animation as if moving right
            canvas.drawImage(
              armor,
              playerCutX,
              playerCutY + 47.5, // Same as runRight
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
              smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
              playerWidth - playerZoomX,
              playerHeight - playerZoomY,
            );
            canvas.drawImage(
              artifact,
              playerCutX,
              playerCutY + 47.5, // Same as runRight
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
              smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 180,
              playerWidth - playerZoomX,
              playerHeight - playerZoomY,
            );
          } 
          else if (player.lastLooked === "left") {
            // Play running animation as if moving left
            canvas.drawImage(
              armor,
              playerCutX,
              playerCutY + 72, // Same as runLeft
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
              smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 180,
              playerWidth - playerZoomX,
              playerHeight - playerZoomY,
            );
            canvas.drawImage(
              artifact,
              playerCutX,
              playerCutY + 72, // Same as runLeft
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 150,
              smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 180,
              playerWidth - playerZoomX,
              playerHeight - playerZoomY,
            );
        }}
      }
    }
  }
}

function drawPlayerArmor (player) {
  if (player.armor[0]) {
    if (player.armor[0].name === "warrior") {
      return frogWarriorSkin;
    } else {
      return character;
    }
  } else {
    return character;
  }
}

function drawPlayerArtifact (player) {
  if (player.artifact[0]) {
    if (player.artifact[0].name === "rags") {
      return cape;
    } else if (player.artifact[0].name === "fisherman") {
      return fishermanCape;
    } else {
      return transparentCape;
    }
  } else {
    return transparentCape;
  }
}

function drawPlayerWeaponOut (player) {
  if (player.weapon[0]) {
    canvas.save(); // Save the current canvas state
    canvas.translate(playerX - cameraX - cameraShakeX - 150 +18 - recoil, playerY + cameraShakeY + 180 - cameraY +70); // Translate to the player's position
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
    canvas.restore();
  }
}

function drawPlayerWeaponSheated(player) {
  if (player.weapon[0]) {
    let smoothPlayer = Object.values(smoothPlayers).find(Splayer => Splayer.username === player.username)
    canvas.save(); // Save the current canvas state
    canvas.translate(smoothPlayer.smoothX - cameraX, smoothPlayer.smoothY - cameraY +90);  // Translate to the player's position
    canvas.rotate(player.weaponAngle); // Rotate based on the mouse angle
    canvas.rotate(-190); // Rotate based on the mouse angle
    if (player.weapon[0].name === "solarStaffCommon") {
      canvas.drawImage(solarStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
    }
    else if (player.weapon[0].name === "arcaneStaffCommon") {
      canvas.drawImage(arcaneStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
    }
    else if (player.weapon[0].name === "nuclearStaffCommon") {
      canvas.drawImage(nuclearStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
    }
    canvas.restore();
  }
}

function drawUsernameOnline (player, smoothPlayer) {
  canvas.drawImage(nameBubbleGreen, smoothPlayer.smoothX - cameraX -40, smoothPlayer.smoothY - cameraY -48, 100,50)
  canvas.beginPath();
  canvas.font = "bolder 16px Tiny5";
  canvas.textAlign = "center";
  canvas.fillStyle = "black";
  canvas.fillText(player.username, smoothPlayer.smoothX - cameraX +10, smoothPlayer.smoothY  - cameraY -10);
  canvas.beginPath();
  canvas.font = "bolder 12px Tiny5";
  canvas.textAlign = "center";
  canvas.fillStyle = "black";
  canvas.fillText(Math.trunc((player.cookingLevel / 1000) + (player.fishingLevel / 1000)) , smoothPlayer.smoothX - cameraX + 10, smoothPlayer.smoothY  - cameraY - 30.5);
}

function drawUsernameLocal (player) {
  canvas.drawImage(nameBubbleGreen, playerX - cameraX -40, playerY - cameraY -46, 100,50)
  canvas.beginPath();
  canvas.font = "bolder 16px Tiny5";
  canvas.textAlign = "center";
  canvas.fillStyle = "black";
  canvas.fillText(player.username, playerX - cameraX +10, playerY  - cameraY -10);
  canvas.beginPath();
  canvas.font = "bolder 12px Tiny5";
  canvas.textAlign = "center";
  canvas.fillStyle = "black";
  canvas.fillText(Math.trunc((player.cookingLevel / 1000) + (player.fishingLevel / 1000)) , playerX - cameraX + 10, playerY  - cameraY - 30.5);
}

function drawUsername () {
  for (const player of players) {
    if (player.username !== myPlayer.username && player.room === myPlayer.room) {
      let smoothPlayer = Object.values(smoothPlayers).find(Splayer => Splayer.username === player.username)
      drawUsernameOnline(player, smoothPlayer)
    }
    else {
      drawUsernameLocal(player)
    }
  }
}

function drawChat () {
  for (const player of players) {
    if (player.room === myPlayer.room && player.username === myPlayer.username) {
      if (player.chatMessage !== "none") {
        canvas.drawImage(chatBubble, playerX - cameraX -90, playerY - cameraY -115, 200, 60)
        canvas.beginPath();
        canvas.font = "bolder 16px Tiny5";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(player.chatMessage, playerX - cameraX +15, playerY - cameraY -90);
      }
    }
    else if (player.room === myPlayer.room) {
      if (player.chatMessage !== "none") {
        let smoothPlayer = Object.values(smoothPlayers).find(Splayer => Splayer.username === player.username)
        canvas.drawImage(chatBubble, smoothPlayer.smoothX - cameraX -85, smoothPlayer.smoothY - cameraY -115, 200, 60)
        canvas.beginPath();
        canvas.font = "bolder 16px Tiny5";
        canvas.textAlign = "center";
        canvas.fillStyle = "black";
        canvas.fillText(player.chatMessage, smoothPlayer.smoothX - cameraX +15, smoothPlayer.smoothY - cameraY -90);

        console.log(player)

        if (player.chatTimer === 80) {
          updateHistoryChat(player.chatMessage, player)
        }
      }
    }
  } 
}

function drawLocalBullets () {
  for (const projectile of projectilesClient) {
    projectile.timeLeft--

    let wallCollision = drawColliders("bullet", projectile.x, projectile.y, 40, 40)
    if (wallCollision) {
      projectile.timeLeft = projectile.timeLeft > 1 ? 1 : projectile.timeLeft;
    }

    if (projectile.enemy) {
      canvas.drawImage(bulletStick, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
      push360Particles("yellow", 1, projectile.x + 20, projectile.y - 50)
    } 
    else {
      if (myPlayer?.weapon[0]?.name === "solarStaffCommon") {
        canvas.drawImage(bulletStick, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
        push360Particles("red", 1, projectile.x + 20, projectile.y - 50)
      }
      if (myPlayer?.weapon[0]?.name === "arcaneStaffCommon") {
        canvas.drawImage(bulletStickBlue, projectile.x - cameraX, projectile.y - cameraY -10, 40, 40)
        push360Particles("purple", 1, projectile.x + 20, projectile.y - 50)
      }
    }

    if (projectile.timeLeft < 0) {
      projectilesClient.splice(projectilesClient.indexOf(projectile), 1)
      push360Particles("white", 5, projectile.x + 20, projectile.y - 50)
    }
  }
}

function drawSlimeEnemy () {
  for (const enemy of enemiesClient) {

    if (enemy.enabled) {
      
      frameCurrentEnemy = frameCurrentEnemy % 4;
      enemyCutX = frameCurrentEnemy * enemyWidth;

      if (enemy.health <= 0) { 
        spawnSlime()
        socket.emit("enemyKilled", "slime");
        enemiesClient.splice(enemiesClient.indexOf(enemy), 1)

        for (let i = 0; i < 20; i++) {
          const angle = angleMouse + (Math.random() * 0.5 * 2 - 0.2) ;; // Random angle
          const speed = Math.floor(Math.random() * (20 - 8 + 1)) + 5;; // Random speed (adjust as needed)
          const size = 25; // Random size between 3 and 8
          const particleX = enemy.x;
          const particleY = enemy.y;
    
          const randomNumber = Math.floor(Math.random() * 2) + 1;
          
          if (randomNumber === 1) {

            particles.push({ x: 1, y: 1, size: size, color: '#6d64b6', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
                  
          } else {
    
            particles.push({ x: 1, y: 1, size: size, color: '#afa6ff', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
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
                const angle = angleMouse + (Math.random() * 0.5 * 2 - 0.2); // Random angle
                const speed = Math.floor(Math.random() * (20 - 8 + 1)) + 13;; // Random speed (adjust as needed)
                const size = 15; // Random size between 3 and 8
                const particleX = enemy.x;
                const particleY = enemy.y;
          
                const randomNumber = Math.floor(Math.random() * 2) + 1;
                
                if (randomNumber === 1) {

                  particles.push({ x: 1, y: 1, size: size, color: '#6d64b6', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
                        
                } else {
          
                  particles.push({ x: 1, y: 1, size: size, color: '#afa6ff', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
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
          if (projectile.x > enemy.x && projectile.x < enemy.x + 100 && projectile.y > enemy.y && projectile.y < enemy.y + 100 && enemy.damaged === 0 && myPlayer?.weapon[0]?.name === "solarStaffCommon") {
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

function drawDevWallsPlacement () {
  if (currentlyPlacingWall) {
    canvas.fillStyle = `rgba(210, 45, 45, 0.5)`;
    canvas.fillRect(selectedXcoord - cameraShakeX - cameraX, selectedYcoord - cameraShakeY - cameraY, widthCoord, heightCoord);
  }
}

function drawMap (layer) {
  if (layer === "back") {
    canvas.drawImage(mapsInfo[currentLand].backgroundImage, cameraShakeX - cameraX, cameraShakeY - cameraY, 4500, 4500);
  } else {
    canvas.drawImage(mapsInfo[currentLand].foregroundImage, cameraShakeX - cameraX, cameraShakeY - cameraY, 4500, 4500);
  }
}

// Map functions <


// Enemy functions >

function activateEnemy (enemy) {
  let activateInterval = setInterval(() => {
    enemy.framesTimer--
        
    if (enemy.framesTimer <= 0) {
      enemy.framesTimer = 5;
    }
    
    if (enemy.framesTimer === 2) {
      enemy.frames++
      if (enemy.frames > 5) {
        enemy.active = true;
        clearInterval(activateInterval)
      }
    }
  },20)
}

function drawEnemy () {
  mapsInfo[currentLand].enemies?.forEach(enemy => {

    if (enemy.active === false) {
      enemy.imgch = enemy.imgh * 9
      canvas.drawImage(
        enemiesImages[enemy.name],
        enemy.imgcw * enemy.frames,
        enemy.imgch,
        enemy.imgw,
        enemy.imgh,
        enemy.spawn.x - cameraX - cameraShakeX,
        enemy.spawn.y - cameraY - cameraShakeX,
        enemy.w * 1.5,
        enemy.h * 1.5,
      );
  
    } else {

      let directionMultiplier = enemy.spawn.x - cameraX + 200 > playerX - cameraX ? enemy.imgh * 4 - 1 : 0;
  
      enemy.imgch = 
      enemy.currentStateName === "dmg"
      ? enemy.imgh * 8 :
      enemy.currentStateName === "move" 
      ? (enemy.imgh * 3) + directionMultiplier :
      enemy.currentStateName === "attack1" 
      ? (enemy.imgh * 0) + directionMultiplier :
      enemy.currentStateName === "attack2" 
      ? (enemy.imgh * 1) + directionMultiplier :
      (enemy.imgh * 2) + directionMultiplier;
  
    
  
      // canvas.fillRect(enemy.spawn.x - cameraShakeX - cameraX, enemy.spawn.y - cameraShakeY - cameraY, enemy.w, enemy.h);
      enemy.framesTimer--
      
      if (enemy.framesTimer <= 0) {
        enemy.framesTimer = 5;
      }
      
      if (enemy.framesTimer === 2) {
        enemy.frames++
        if (enemy.frames > 5) {
          enemy.frames = 0
        }
      }
  
      canvas.drawImage(
        enemiesImages[enemy.name],
        enemy.imgcw * enemy.frames,
        enemy.imgch,
        enemy.imgw,
        enemy.imgh,
        enemy.spawn.x - cameraX - cameraShakeX,
        enemy.spawn.y - cameraY - cameraShakeX,
        enemy.w * 1.5,
        enemy.h * 1.5,
      );
  
      if (
        (enemy.spawn.x - cameraX) - (playerX - cameraX) + 200 > -1000 && (enemy.spawn.y - cameraY) - (playerY - cameraY) + 120 > -1000
        &&
        (enemy.spawn.x - cameraX) - (playerX - cameraX) + 200 < 1000 && (enemy.spawn.y - cameraY) - (playerY - cameraY) + 120 < 1000
      ) {
        handleEnemyState(enemy)
      }
  
      checkEnemyCombat(enemy)
    }


  }) 
}

function checkEnemyCombat (enemy) {
  if (enemy.damaged > 0) {
    enemy.damaged--

    enemy.currentStateName = "dmg"

    enemy.spawn.x += Math.cos(enemy.angle) * enemy.damaged ;
    enemy.spawn.y += Math.sin(enemy.angle) * enemy.damaged;
  } else {
    if (enemy.currentStateName === "dmg") {
      enemy.currentStateName = "idle"
    }
  }

  if (enemy.health <= 0) {
    enemyDeathParticles(enemy)
    enemy.attackInterval = true;
    attackCircleState(enemy)
    mapsInfo[currentLand].enemies.splice(mapsInfo[currentLand].enemies.indexOf(enemy), 1)
    // enemy.currentStateName = "idle"
    setTimeout(() => {
      enemy.spawn.x = -1000;
      enemy.spawn.y = -1000;

      if (enemy.spawnTimer) {
        setTimeout(() => {
          enemy.spawn.x = enemy.baseSpawn.x;
          enemy.spawn.y = enemy.baseSpawn.y;
          enemy.health = enemy.maxHealth
          mapsInfo[currentLand].enemies.push(enemy)
        }, enemy.spawnTimer);
      }
    }, 200)
  }

  if (localPlayerDamaged > 0) {
    localPlayerDamaged--

    playerX += Math.cos(localPlayerDamageAngle) * localPlayerDamaged ;
    playerY += Math.sin(localPlayerDamageAngle) * localPlayerDamaged;

  }

  for (const projectile of projectilesClient) {

    if (projectile.x - 150 > enemy.spawn.x && projectile.x - 150 < enemy.spawn.x + enemy.w 
      && projectile.y - 190 > enemy.spawn.y && projectile.y - 190 < enemy.spawn.y + enemy.h 
      && enemy.damaged === 0 
      && !projectile.enemy
      && myPlayer?.weapon[0]?.name === "arcaneStaffCommon") {

      enemy.damaged = 5;
      enemy.angle = projectile.angle || projectile.bullet1 || projectile.bullet2;
      projectile.timeLeft = projectile.timeLeft > 1 ? 1 : projectile.timeLeft;
      enemy.health = enemy.health - 1

      if (enemy.health > 0) {
        const enemyHitAudio = new Audio("./audios/enemyHit.mp3");
        enemyHitAudio.loop = false;
        enemyHitAudio.volume = 0.3;
        enemyHitAudio.play()
      } else {
        const splatAudio = new Audio("./audios/splat.mp3");
        splatAudio.loop = false;
        splatAudio.volume = 0.3;
        splatAudio.play()
      }
    }

    const projectileCenterX = projectile.x - 150 - cameraShakeX - cameraX + 20;
    const projectileCenterY = projectile.y - 190 - cameraShakeY - cameraY + 20;
    
    if (
      projectileCenterX >= playerColminX &&
      projectileCenterX <= playerColminX + playerColLengthX &&
      projectileCenterY >= playerColminY &&
      projectileCenterY <= playerColminY + playerColLengthY &&
      projectile.enemy &&
      localPlayerDamaged === 0
      && !dashing
    ) {

      localPlayerDamageAngle = projectile.angle || projectile.bullet1 || projectile.bullet2;
      projectile.timeLeft = projectile.timeLeft > 1 ? 1 : projectile.timeLeft;
      localPlayerDamaged = 10
      currentHealth--
      const playerHurtHealth = new Audio("./audios/playerHurtHealth.wav");
      playerHurtHealth.loop = false;
      playerHurtHealth.volume = 0.3;
      playerHurtHealth.play()

      // console.log(currentHealth, maxHealth)

      cameraShake()
    }
  }
}

function handleEnemyState(enemy) {
  if (enemy.stateTimer) return;

  
  enemy.stateTimer = setTimeout(() => {
    enemy.frames = 0;
    enemy.stateTimer = null;
    const states = enemy.states;
    const chosenState = states[Math.floor(Math.random() * states.length)];
    executeStateForDuration(enemy, chosenState, enemy.enemyStateInt);
  }, enemy.enemyStateInt);
}

function executeStateForDuration(enemy, stateFunction, duration) {
  const interval = 50;
  const repetitions = duration / interval;
  let counter = 0;

  const intervalId = setInterval(() => {
    stateFunction(enemy);
    if (counter >= repetitions || !mapsInfo[currentLand].enemies.includes(enemy)) {
      clearInterval(intervalId)
      enemy.currentStateName = "idle"
    };
    counter++;
  }, interval);
}

function moveState(enemy) {
  // console.log(enemy.currentStateName)
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "move";
  }

  const colliders = drawColliders("enemy", enemy.spawn.x, enemy.spawn.y, enemy.w, enemy.h);

  if (!enemy.commitTimer) {
    enemy.commitTimer = null;
  }

  if (!enemy.committedDirection) {
    enemy.committedDirection = null;
  }

  const chooseDirection = (primary, fallback1, fallback2) => {
    if (!colliders.includes(primary)) {
      enemy.committedDirection = primary; 
      startCommitmentTimer(enemy); 
      return primary;
    } else if (!colliders.includes(fallback1)) {
      enemy.committedDirection = fallback1; 
      startCommitmentTimer(enemy); 
      return fallback1;
    } else if (!colliders.includes(fallback2)) {
      enemy.committedDirection = fallback2; 
      startCommitmentTimer(enemy); 
      return fallback2;
    }
    return null;
  };

  // Handle committed direction
  if (enemy.committedDirection) {
    if (colliders.includes(enemy.committedDirection)) {
      enemy.committedDirection = null;
    } else {
     
      switch (enemy.committedDirection) {
        case "up":
          enemy.spawn.y -= enemy.speedY;
          return;
        case "down":
          enemy.spawn.y += enemy.speedY;
          return;
        case "left":
          enemy.spawn.x -= enemy.speedX;
          return;
        case "right":
          enemy.spawn.x += enemy.speedX;
          return;
      }
    }
  }

  // Decide movement when no commitment
  if (colliders.includes("up") && enemy.spawn.y > playerY - 120) {
    const direction = chooseDirection(
      playerX < enemy.spawn.x ? "left" : "right",
      "left",
      "right"
    );
    if (direction === "left") enemy.spawn.x -= enemy.speedX;
    if (direction === "right") enemy.spawn.x += enemy.speedX;
  } else if (colliders.includes("down") && enemy.spawn.y < playerY - 120) {
    const direction = chooseDirection(
      playerX < enemy.spawn.x ? "left" : "right",
      "left",
      "right"
    );
    if (direction === "left") enemy.spawn.x -= enemy.speedX;
    if (direction === "right") enemy.spawn.x += enemy.speedX;
  } else if (colliders.includes("left") && enemy.spawn.x > playerX - 200) {
    const direction = chooseDirection(
      playerY < enemy.spawn.y ? "up" : "down",
      "up",
      "down"
    );
    if (direction === "up") enemy.spawn.y -= enemy.speedY;
    if (direction === "down") enemy.spawn.y += enemy.speedY;
  } else if (colliders.includes("right") && enemy.spawn.x < playerX - 200) {
    const direction = chooseDirection(
      playerY < enemy.spawn.y ? "up" : "down",
      "up",
      "down"
    );
    if (direction === "up") enemy.spawn.y -= enemy.speedY;
    if (direction === "down") enemy.spawn.y += enemy.speedY;
  } else {
    // No collision or already bypassing, continue normal movement
    if (enemy.spawn.x > playerX - 200) enemy.spawn.x -= enemy.speedX;
    if (enemy.spawn.x < playerX - 200) enemy.spawn.x += enemy.speedX;
    if (enemy.spawn.y > playerY - 120) enemy.spawn.y -= enemy.speedY;
    if (enemy.spawn.y < playerY - 120) enemy.spawn.y += enemy.speedY;
  }

  resolveEnemyCollisions(enemy);
}

function startCommitmentTimer(enemy) {
  if (enemy.commitTimer) clearTimeout(enemy.commitTimer); // Reset existing timer if active
  enemy.commitTimer = setTimeout(() => {
    enemy.committedDirection = null; // Clear commitment after 3 seconds
    enemy.commitTimer = null; // Reset timer reference
  }, 2000);
}

function attackState(enemy) {
  
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "attack1";
  }
  
  if (enemy.attackInterval) {

  let bulletAngle = getAngleBetweenPlayerAndEnemy(enemy);
  enemy.attackInterval = false;

  setTimeout(() => {
    enemy.attackInterval = true;
  }, 300);

    projectilesClient.push({
      angle: bulletAngle,
      x: enemy.spawn.x + 200,
      y: enemy.spawn.y + 200,
      speed: 5,
      timeLeft: 100,
      playerId: socket.id,
      enemy: true
    }) 

    const basicBulletTree = new Audio("./audios/basicBulletTree.wav");
    basicBulletTree.loop = false;
    basicBulletTree.volume = 0.5;
    basicBulletTree.play()
  }
}

function attackCircleState(enemy) {
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "attack2";
  }
  
  if (enemy.attackInterval) {
    enemy.attackInterval = false;

    const totalBullets = 50; // Total bullets forming the circle
    const angleIncrement = (2 * Math.PI) / totalBullets; // Full circle divided into 20 parts

    setTimeout(() => {
      const basicBulletTree = new Audio("./audios/basicBulletTree.wav");
      basicBulletTree.loop = false;
      basicBulletTree.volume = 0.5;
      basicBulletTree.play()
      for (let i = 0; i < totalBullets; i++) {
        const bulletAngle = i * angleIncrement; // Calculate angle for each bullet
        projectilesClient.push({
          angle: bulletAngle,
          x: enemy.spawn.x + 200 + Math.cos(bulletAngle) * 20, // Offset to create a circular spawn
          y: enemy.spawn.y + 200 + Math.sin(bulletAngle) * 20,
          speed: 5,
          timeLeft: 200,
          playerId: socket.id,
          enemy: true,
        });
      }
    }, 500);


    setTimeout(() => {
      enemy.attackInterval = true;
    }, 3000);
  }
}


function resolveEnemyCollisions(enemy) {
  mapsInfo[currentLand].enemies.forEach(otherEnemy => {
    if (otherEnemy === enemy) return;
    const dx = enemy.spawn.x - otherEnemy.spawn.x;
    const dy = enemy.spawn.y - otherEnemy.spawn.y;
    if (Math.abs(dx) < 100) enemy.spawn.x += dx > 0 ? enemy.speedX : -enemy.speedX;
    if (Math.abs(dy) < 100) enemy.spawn.y += dy > 0 ? enemy.speedY : -enemy.speedY;
  });
}

function updateAllEnemies() {
  mapsInfo[currentLand].enemies.forEach(enemy => handleEnemyState(enemy));
}

function getAngleBetweenPlayerAndEnemy(enemy) {
  const dx = playerX - enemy.spawn.x - 200;
  const dy = playerY + 100 - enemy.spawn.y - 200;
  const angle = Math.atan2(dy, dx); // Returns the angle in radians
  return angle;
}

// Enemy functions <




// Particle system >

const maxParticlesShootDefault = 3;
const maxParticlesWalk = 1;
const highParticles = 5;

let particlesSystem = {
  partShootDefault:
  {
    name: "shootDefault",
    speedDec: 0.1,
    sizeDec: 0.2
  },
  partWalk:
  {
    name: "walk",
    speedDec: 0.1,
    sizeDec: 0.8
  },
  partSlime:
  {
    name: "slime",
    speedDec: 0.05,
    sizeDec: 0.3
  },
  partDash:
  {
    name: "dash",
    speedDec: 0.1,
    sizeDec: 0.5
  },
}

function particlesActor () {
  particles.forEach(particle => {
    canvas.beginPath();
    canvas.fillStyle = particle.color;
    canvas.fillRect(particle.initalX + particle.x - cameraX - 10, particle.intialY + particle.y - cameraY + 50, particle.size, particle.size);
    canvas.lineWidth = 2; 
    canvas.strokeStyle = 'black';
    canvas.strokeRect(particle.initalX + particle.x - cameraX - 10, particle.intialY + particle.y - cameraY + 50, particle.size, particle.size)  

    // Move particles
    particle.x += Math.cos(particle.angle) * particle.speed;
    if (particle.name !== "walk") {
      particle.y += Math.sin(particle.angle) * particle.speed;
    } else {
      particle.y -= 1;
    }

    // Decrease size over time
    particle.size -= particle.sizeDecrease;
    particle.speed -= particle.speedDecrease * particle.speed
  });

  particles = particles.filter(particle => particle.size > 0 );

}

function shootingParticles () {
  if (shooting) {
    for (let i = 0; i < maxParticlesShootDefault; i++) {
      const angle = angleMouse + (Math.random() * 0.2 * 2 - 0.2);; // Random angle
      const radius = Math.random() * 20; // Random radius (adjust as needed)
      const speed = Math.floor(Math.random() * (50 + 1)) + 1; // Random speed (adjust as needed)
      const size = 15; // Random size between 3 and 8
      const particleX = playerX;
      const particleY = playerY;

      const randomNumber = Math.floor(Math.random() * 2) + 1;
      
      if (randomNumber === 1) {
        if (myPlayer?.weapon[0]?.name === "solarStaffCommon") {
          particles.push({ x: 1, y: 1, size: size, color: 'red', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partShootDefault"].speedDec, sizeDecrease: particlesSystem["partShootDefault"].sizeDec, name: particlesSystem["partShootDefault"].name });
        }
        else if (myPlayer?.weapon[0]?.name === "arcaneStaffCommon") {
          particles.push({ x: 1, y: 1, size: size, color: 'purple', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partShootDefault"].speedDec, sizeDecrease: particlesSystem["partShootDefault"].sizeDec, name: particlesSystem["partShootDefault"].name });
        }
        else if (myPlayer?.weapon[0]?.name === "nuclearStaffCommon") {
          particles.push({ x: 1, y: 1, size: size, color: 'green', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partShootDefault"].speedDec, sizeDecrease: particlesSystem["partShootDefault"].sizeDec, name: particlesSystem["partShootDefault"].name });
        }
      } else {

        particles.push({ x: 1, y: 1, size: size, color: 'white', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partShootDefault"].speedDec, sizeDecrease: particlesSystem["partShootDefault"].sizeDec, name: particlesSystem["partShootDefault"].name });
      }

    }

  }
}

function dashParticles () {
  if (playerSpeed > 10 && (movingDown || movingUp || movingLeft || movingRight)) {
    for (let i = 0; i < highParticles; i++) {
      const angleDegrees = Math.random() * 360;
      const angleRadians = angleDegrees * (Math.PI / 180); // Convert degrees to radians
      const speed = (Math.random() * 6) + 1; // Random speed (adjust as needed)
      const size = 20; // Random size between 3 and 8
      const particleX = playerX;
      const particleY = playerY;

      
      particles.push({ x: 1, y: 1, size: size, color: 'white', speed: speed, angle: angleRadians, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partDash"].speedDec, sizeDecrease: particlesSystem["partDash"].sizeDec, name: particlesSystem["partDash"].name });   
      

    }

  }
}

function playerTrailParticles () {
  if (movingDown || movingUp || movingLeft || movingRight) {
    for (let i = 0; i < maxParticlesWalk; i++) {
      const speed = Math.floor(Math.random() * (1 - 1 + 8)) + 1;
      const size = 15 ;
      const particleX = playerX;
      const particleY = playerY + 30;
      
      particles.push({ x: 1, y: 1, size: size, color: 'white', speed: speed, angle: -190, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partWalk"].speedDec, sizeDecrease: particlesSystem["partWalk"].sizeDec, name: particlesSystem["partWalk"].name });   
    }
  }
}

function push360Particles (color, amount, x, y) {
  for (let i = 0; i < amount; i++) {
    const speed = Math.floor(Math.random() * (1 - 1 + 8)) + 1;
    const angleDegrees = Math.random() * 360;
    const size = 15 ;
    const particleX = x;
    const particleY = y;
    
    particles.push({ x: 1, y: 1, size: size, color: color, speed: speed, angle: angleDegrees, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partWalk"].speedDec, sizeDecrease: particlesSystem["partWalk"].sizeDec, name: particlesSystem["partWalk"].name });   
  }
}

function enemyDeathParticles (enemy) {
  for (let i = 0; i < 20; i++) {
    const angle = angleMouse + (Math.random() * 0.5 * 2 - 0.2) ;; // Random angle
    const speed = Math.floor(Math.random() * (20 - 8 + 1)) + 5;; // Random speed (adjust as needed)
    const size = 25; // Random size between 3 and 8
    const particleX = enemy.spawn.x + 180;
    const particleY = enemy.spawn.y + 190;

    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    if (randomNumber === 1) {

      particles.push({ x: 1, y: 1, size: size, color: '#6d64b6', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
            
    } else {

      particles.push({ x: 1, y: 1, size: size, color: '#afa6ff', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
    }

  }
}

// Particle system <


function islandOneLoop() {


  // Map name        ↓
  currentLand = "islandOne";


  // Map setup ( Mandatory )
  mapSetup();


  // Background map Image and objects
  drawMap("back")
  drawObjects("back")


  // Particle settings
  particlesActor()
  shootingParticles()
  dashParticles()
  // // playerTrailParticles()


  // Player settings
  drawEnemy()
  playerCollision()
  drawLocalBullets()
  drawOnlinePlayers("back")
  drawLocalPlayer()
  drawOnlinePlayers("front")
  
  
  // Enemy settings

  
  
  // Foreground map Image and objects
  drawMap("front")
  drawObjects("front")
  drawUsername()
  drawChat()


  // Dev Colliders
  drawDevWallsPlacement()
  drawColliders("player", "", "", "", "")

}

function lobbyLoop() {


  // Map name        ↓
  currentLand = "lobby";


  // Map setup ( Mandatory )
  mapSetup();


  // Background map Image and objects
  drawMap("back")
  drawObjects("back")


  // Particle settings
  particlesActor()
  shootingParticles()
  dashParticles()
  // // playerTrailParticles()


  // Player settings
  drawEnemy()
  playerCollision()
  drawOnlinePlayers("back")
  drawLocalPlayer()
  drawOnlinePlayers("front")
  drawLocalBullets()
  
  
  // Enemy settings
  // // drawSlimeEnemy()
  
  
  // Foreground map Image and objects
  drawMap("front")
  drawObjects("front")
  drawUsername()
  drawChat()


  // Dev Colliders
  drawDevWallsPlacement()
  drawColliders("player", "", "", "", "")

}

function lobbyCombatAreaLoop() {


  // Map name        ↓
  currentLand = "lobbyCombatArea";


  // Map setup ( Mandatory )
  mapSetup();


  // Background map Image and objects
  drawMap("back")
  drawObjects("back")


  // Particle settings
  particlesActor()
  shootingParticles()
  dashParticles()
  // // playerTrailParticles()
  


  // Player settings
  drawEnemy()
  playerCollision()
  drawOnlinePlayers("back")
  drawLocalPlayer()
  drawOnlinePlayers("front")
  drawLocalBullets()
  
  
  // Enemy settings
  // // drawSlimeEnemy()
  
  
  // Foreground map Image and objects
  drawMap("front")
  drawObjects("front")
  drawUsername()
  drawChat()


  // Dev Colliders
  drawDevWallsPlacement()
  drawColliders("player", "", "", "", "")

}

function slimeForestPathLoop() {


  // Map name        ↓
  currentLand = "slimeForestPath";


  // Map setup ( Mandatory )
  mapSetup();


  // Background map Image and objects
  drawMap("back")
  drawObjects("back")


  // Particle settings
  particlesActor()
  //shootingParticles()
  dashParticles()
  // // playerTrailParticles()


  // Player settings
  playerCollision()
  drawOnlinePlayers("back")
  drawLocalPlayer()
  drawOnlinePlayers("front")
  drawLocalBullets()
  
  
  // Enemy settings
  // // drawSlimeEnemy()
  
  
  // Foreground map Image and objects
  drawMap("front")
  drawObjects("front")
  drawUsername()
  drawChat()


  // Dev Colliders
  drawDevWallsPlacement()
  drawColliders("player", "", "", "", "")

}

function mushroomForestLoop() {


  // Map name        ↓
  currentLand = "mushroomForest";


  // Map setup ( Mandatory )
  mapSetup();


  // Background map Image and objects
  drawMap("back")
  drawObjects("back")


  // Particle settings
  particlesActor()
  //shootingParticles()
  dashParticles()
  // // playerTrailParticles()


  // Player settings
  drawEnemy()
  playerCollision()
  drawOnlinePlayers("back")
  drawLocalPlayer()
  drawOnlinePlayers("front")
  drawLocalBullets()
  
  
  // Enemy settings
  // // drawSlimeEnemy()
  
  
  // Foreground map Image and objects
  drawMap("front")
  drawObjects("front")
  drawUsername()
  drawChat()


  // Dev Colliders
  drawDevWallsPlacement()
  drawColliders("player", "", "", "", "")

}





//Island One Map Canvas <


// Try out fucntions

// frameCurrentMap = frameCurrentMap % 4;
  // mapCutX = frameCurrentMap * 1000;
  // canvas.drawImage(
  //   islandOneMap,
  //   mapCutX,
  //   mapCutY,
  //   1000,
  //   1000,
  //   cameraShakeX - cameraX,
  //   cameraShakeY - cameraY,
  //   4500,
  //   4500,
  // );
  // mapFramesDrawn++;
  // if (mapFramesDrawn >= 10) {
  //   frameCurrentMap++;
  //   mapFramesDrawn = 0;
  // }





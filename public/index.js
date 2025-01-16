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
islandOneMapArcane.src = "./islands/arcanyMaps/islandOneArcane.png";

const islandOneMapArcaneFront = new Image();
islandOneMapArcaneFront.src = "./islands/arcanyMaps/islandOneArcaneFront.png";

const lobbyCombatArea = new Image();
lobbyCombatArea.src = "./islands/lobbyCombatArea.png";

const lobbyCombatAreaFront = new Image();
lobbyCombatAreaFront.src = "./islands/lobbyCombatAreaFront.png";

const slimeForestPath = new Image();
slimeForestPath.src = "./islands/slimeForestPath.png"

const slimeForestPathOpen = new Image();
slimeForestPathOpen.src = "./islands/slimeForestPathOpen.png"

const slimeForestPathFront = new Image();
slimeForestPathFront.src = "./islands/slimeForestPathFront.png"

const grasslandsTower = new Image();
grasslandsTower.src = "./islands/grasslandsTower.png"

const grasslandsTowerFront = new Image();
grasslandsTowerFront.src = "./islands/grasslandsTowerFront.png"

const slimeForestPathArcane = new Image();
slimeForestPathArcane.src = "./islands/arcanyMaps/slimeForestPathArcany/slimeForestPathArcany.png"

const slimeForestPathArcaneFront = new Image();
slimeForestPathArcaneFront.src = "./islands/arcanyMaps/slimeForestPathArcany/slimeForestPathFrontArcany.png"

const mushroomForest = new Image();
mushroomForest.src = "./islands/mushroom.png"

const mushroomForestFront = new Image();
mushroomForestFront.src = "./islands/mushroomFront.png"

const mushroomForestArcane = new Image();
mushroomForestArcane.src = "./islands/arcanyMaps/mushroomArcany/mushroomArcane.png"

const mushroomForestArcaneFront = new Image();
mushroomForestArcaneFront.src = "./islands/arcanyMaps/mushroomArcany/mushroomFrontArcane.png"

const restfieldPath = new Image();
restfieldPath.src = "./islands/restfieldPath.png"

const restfieldPathOpen = new Image();
restfieldPathOpen.src = "./islands/restfieldPathOpen.png"

const restfieldPathFront = new Image();
restfieldPathFront.src = "./islands/restfieldPathFront.png"

const restfieldPathFrontOpen = new Image();
restfieldPathFrontOpen.src = "./islands/restfieldPathFrontOpen.png"

const restFiledTown = new Image();
restFiledTown.src = "./islands/restFiledTown.png"

const restFiledTownFront = new Image();
restFiledTownFront.src = "./islands/restFiledTownFront.png"

const restfieldTownCemetery = new Image();
restfieldTownCemetery.src = "./islands/restfieldTownCemetery.png"

const restfieldTownCemeteryFront = new Image();
restfieldTownCemeteryFront.src = "./islands/restfieldTownCemeteryFront.png"

const restfieldTrial = new Image();
restfieldTrial.src = "./islands/restfieldTrial.png"

const restfieldTrialFront = new Image();
restfieldTrialFront.src = "./islands/restfieldTrialFront.png"

const restfieldMall = new Image();
restfieldMall.src = "./islands/restfieldMall.png"

const restfieldMallFront = new Image();
restfieldMallFront.src = "./islands/restfieldMallFront.png"

const restfieldMallInside = new Image();
restfieldMallInside.src = "./islands/restfieldMallInside.png"

const restfieldMallInsideFront = new Image();
restfieldMallInsideFront.src = "./islands/restfieldMallInsideFront.png"

const restfieldMallTreasure = new Image();
restfieldMallTreasure.src = "./islands/restfieldMallTreasure.png"

const restfieldMallTreasureFront = new Image();
restfieldMallTreasureFront.src = "./islands/restfieldMallTreasureFront.png"




//PLAYER-SKINS <

var humanSkin = new Image();
humanSkin.src = "./skins/humanSkin.png";

var frogSoulInventory = new Image();
frogSoulInventory.src = "./skins/frogSkin.png";

var ghostSoulInventory = new Image();
ghostSoulInventory.src = "./skins/ghostSkin.png";

var reaperSoulInventory = new Image();
reaperSoulInventory.src = "./skins/reaperSkin.png";

var arcanyDemonSoulInventory = new Image();
arcanyDemonSoulInventory.src = "./skins/arcanyDemon.png";

var pinkDemonSoulInventory = new Image();
pinkDemonSoulInventory.src = "./skins/pinkDemon.png";

var redDemonSoulInventory = new Image();
redDemonSoulInventory.src = "./skins/redDemon.png";

var vampiresSoulInventory = new Image();
vampiresSoulInventory.src = "./skins/vampiresSkin.png";

var restfieldSkeletonSoulInventory = new Image();
restfieldSkeletonSoulInventory.src = "./skins/restfieldSkeletonSkin.png";

var restfieldZombieSoulInventory = new Image();
restfieldZombieSoulInventory.src = "./skins/restfieldZombieSkin.png";

// PLAYER-SKINS >

// PLAYER-ARMOR <
var tropicalHatInventory = new Image();
tropicalHatInventory.src = "./capes/tropicalHat.png";

var skullInventory = new Image();
skullInventory.src = "./capes/skullHelmet.png";

var redMushroomlInventory = new Image();
redMushroomlInventory.src = "./capes/mushroomClothesRed.png";

var fishrmanInventory = new Image();
fishrmanInventory.src = "./capes/fishermanClothes.png";

var rorangeMushroomlInventory = new Image();
rorangeMushroomlInventory.src = "./capes/mushroomClothesOrange.png";

var reaperInventory = new Image();
reaperInventory.src = "./capes/reaperClothes.png";

var vampiresInventory = new Image();
vampiresInventory.src = "./capes/blackVampiresClothes.png";

var romanHelmetInventory = new Image();
romanHelmetInventory.src = "./capes/romanHelmet.png";
var restfieldGhostClothes = new Image();
restfieldGhostClothes.src = "./capes/restfieldGhostClothes.png";

var restfieldZombieInventory = new Image();
restfieldZombieInventory.src = "./capes/restfieldZombieClothes.png";

var transparentCape = new Image();
transparentCape.src = "./capes/transparent.png";

// PLAYER-ARMOR >



const slime = new Image();
slime.src = "slime.png";

const treeSimpleEnemy = new Image();
treeSimpleEnemy.src = "./enemies/treeSimpleEnemy.png";

const redMooshroomEnemy = new Image();
redMooshroomEnemy.src = "./enemies/redMooshroomEnemy.png";

const mooshroomBossRed = new Image();
mooshroomBossRed.src = "./enemies/mooshroomBossRed.png";

const restfieldReaper = new Image();
restfieldReaper.src = "./enemies/restfieldReaper.png";

const purpleSlime = new Image();
purpleSlime.src = "./enemies/purpleSlime.png"

const restfieldGhost = new Image();
restfieldGhost.src = "./enemies/restfieldLittleghost.png"

const restfieldSkeleton = new Image();
restfieldSkeleton.src = "./enemies/restfielSkeleton.png"

const restfieldZombie = new Image();
restfieldZombie.src = "./enemies/restfieldZombie.png"

const brownBunny = new Image();
brownBunny.src = "./hunting/brownBunny.png"

const whiteBunny = new Image();
whiteBunny.src = "./hunting/whiteBunny.png"

const blackBrownBunny = new Image();
blackBrownBunny.src = "./hunting/blackBrownBunny.png"

let enemiesImages = {
  treeSimpleEnemy: treeSimpleEnemy,
  redMooshroomEnemy: redMooshroomEnemy,
  mooshroomBossRed: mooshroomBossRed,
  purpleSlime: purpleSlime,
  restfieldGhost : restfieldGhost,
  restfieldSkeleton : restfieldSkeleton,
  restfieldZombie : restfieldZombie,
  restfieldReaper : restfieldReaper,
  brownBunny : brownBunny,
  whiteBunny : whiteBunny,
  blackBrownBunny : blackBrownBunny,
};

const slimeDMG = new Image();
slimeDMG.src = "slimeDMG.png";

const WeaponStick = new Image();
WeaponStick.src = "stick.png";

const arcaneStaffCommon = new Image();
arcaneStaffCommon.src = "arcaneStaffCommon.png";

const questOngoingImg = new Image();
questOngoingImg.src = "./Textures/questOngoingImg.png";

const questStartImg = new Image();
questStartImg.src = "./Textures/questStartImg.png";

const arcaneRepeater = new Image();
arcaneRepeater.src = "./inventory/arcaneRepeater.png";

const arcaneLancer = new Image();
arcaneLancer.src = "./inventory/arcaneLancer.png";

const nuclearStaffCommon = new Image();
nuclearStaffCommon.src = "nuclearStaffCommon.png";

const solarStaffCommon = new Image();
solarStaffCommon.src = "solarStaffCommon.png";

const fishingStick = new Image();
fishingStick.src = "fishingStick.png";

const WeaponWillowStick = new Image();
WeaponWillowStick.src = "willowStick.png";

const bulletStick = new Image();
bulletStick.src = "bulletStick.png";

const bulletStickBlue = new Image();
bulletStickBlue.src = "bulletStickBlue.png";

const chatBubble = new Image();
chatBubble.src = "chatBubble.png";

const chatBubbleBigger = new Image();
chatBubbleBigger.src = "chatBubbleBigger.png";

const nameBubbleGreen = new Image();
nameBubbleGreen.src = "./nameTags/nameTaglvl1.png";

const Structure1 = new Image();
Structure1.src = "./structures/Structure1.png";

const audioClick = new Audio("./audios/tapWood.wav");
audioClick.volume = 0.5;
audioClick.loop = false;

const oilFry = new Audio("./audios/oilFry.wav");
oilFry.loop = true;
oilFry.volume = 0.2;

const hammerSmash = new Audio("./audios/hammerSmash.wav");
hammerSmash.loop = false;
hammerSmash.volume = 0.4;

const hammerWin = new Audio("./audios/hammerWin.wav");
hammerWin.loop = false;
hammerWin.volume = 0.15;

const hammerFail = new Audio("./audios/hammerFail.wav");
hammerFail.loop = false;
hammerFail.volume = 0.2;

const cookingSong = new Audio("./audios/cookingSong.mp3");
cookingSong.loop = true;
cookingSong.volume = 0.0;

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

const bossWakingUpChallenge = new Audio("./audios/bossWakingUpChallenge.wav");
bossWakingUpChallenge.loop = false;
bossWakingUpChallenge.volume = 0.3;

const challengeAccepted = new Audio("./audios/challengeAccepted.wav");
challengeAccepted.loop = false;
challengeAccepted.volume = 0.5;

const challengeCompleted = new Audio("./audios/challengeCompleted.wav");
challengeCompleted.loop = false;
challengeCompleted.volume = 0.4;

const violinDanger = new Audio("./audios/violinDanger.wav");
violinDanger.loop = false;
violinDanger.volume = 0.3;

const suspense1 = new Audio("./audios/suspense1.mp3");
suspense1.loop = true;
suspense1.volume = 0.5;

const ArcaneEnv = new Audio("./audios/ArcaneEnv.mp3");
ArcaneEnv.loop = true;
ArcaneEnv.volume = 0.5;

const fightMusic1 = new Audio("./audios/fightMusic1.mp3");
fightMusic1.loop = true;
fightMusic1.volume = 0.3;

const SokosBoss = new Audio("./audios/SokosBoss.wav");
SokosBoss.loop = true;
// SokosBoss.volume = ;

const grasslandsLoop1 = new Audio("./audios/seaShanty.mp3");
grasslandsLoop1.loop = true;
grasslandsLoop1.volume = 0.0;

const grasslandsEnviroment = new Audio("./audios/grasslandsEnviroment.mp3");
grasslandsEnviroment.loop = true;

const restfield = new Audio("./audios/restfield.mp3");
restfield.loop = true;
restfield.volume = 0.05;

const towerSound = new Audio("./audios/towerSound.wav");
towerSound.loop = true;

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
footsteps.volume = 0.5;

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
const sitDownIconButton = document.getElementById('sitDownIcon');
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

const deleteInventoryButton = document.getElementById("deleteInventoryButton");
const trashIcon = document.getElementById("trashIcon")

menuUiProfile.style.width = window.innerWidth;
menuUiProfile.style.height = window.innerHeight;

const logOutButton = document.getElementById('logOutButton');

//UI BOOK<
  const ingredientBook = document.getElementById('ingredientBook');
const ingredientBookBookFish = document.getElementById('ingredientBookBookFish');
const ingredientBookBookMeat = document.getElementById('ingredientBookBookMeat');
const ingredientBookBookVegetable = document.getElementById('ingredientBookBookVegetable');
const ingredientBookBookFruit = document.getElementById('ingredientBookBookFruit');
const ingredientBookBookMonsterPart = document.getElementById('ingredientBookBookMonsterPart');

const fishOne = document.getElementById('fishOne');
const meatOne = document.getElementById('meatOne');
const vegetableOne = document.getElementById('vegetableOne');
const fruitOne = document.getElementById('fruitOne');

const sardinTag = document.querySelector('.sardinTag');
const crabTag = document.querySelector('.crabTag');
const balloTag = document.querySelector('.balloTag');
const bassTag = document.querySelector('.bassTag');
const corkTag = document.querySelector('.corkTag');
const octopusTag = document.querySelector('.octopusTag');

const miniMushroomTag = document.querySelector('.miniMushroomTag');
const boneTag = document.querySelector('.boneTag');
const blanketTag = document.querySelector('.blanketTag');
const slimeTag = document.querySelector('.slimeTag');
const treeLeafTag = document.querySelector('.treeLeafTag');

const nameBookFish = document.querySelector('.nameBookFish');
const ImgBookFish = document.querySelector('.ImgBookFish');
const descriptionBookFish = document.querySelector('.descriptionBookFish');
const lvlBookFish = document.querySelector('.lvlBookFish');

const nameBookMonster = document.querySelector('.nameBookMonster');
const ImgBookMonster = document.querySelector('.ImgBookMonster');
const descriptionBookMonster = document.querySelector('.descriptionBookMonster');
const lvlBookMonster = document.querySelector('.lvlBookMonster');


  const historyBook = document.getElementById('historyBook');
const historyBookCastelSide = document.getElementById('historyBookCastelSide')
const historyBookRestfield = document.getElementById('historyBookRestfield')
const nameBookHistory = document.querySelector('.nameBookHistory')
const descriptionBookHistory = document.querySelector('.descriptionBookHistory')
const ImgBookHistory = document.querySelector('.ImgBookHistory')


const soulsAndClothesBook = document.getElementById('soulsAndClothesBook');
const weaponBook = document.getElementById('weaponBook');
const enchantingBook = document.getElementById('enchantingBook');

const BookParent = document.getElementById('BookParent');
const closeBookButton = document.querySelector('.closeBookButton')





//UI BOOK>

//UI <

const uiSkinsImg = document.getElementById("uiSkinsImg");
const circleCharacter = document.getElementById("circleCharacter");
const mountainsUi = document.getElementById("mountainsUi");

const openerScreenButton = document.getElementById("openerScreen-button");
const openerScreen = document.getElementById("openerScreen");

const loginScreen = document.getElementById("loginScreen");

const fishingBarHit = document.getElementById("fishingBarHit");

const youDied = document.getElementById("youDied");
const respawn = document.getElementById("respawn");

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

const glitchOverlay = document.querySelector(".glitchOverlay");
const liquidOverlay = document.querySelector(".liquidOverlay");

const shop = document.querySelector(".shop");
const cookingPot = document.querySelector(".cookingPot");
const cookingContainer = document.querySelector("#cookingContainer");
const shopItem3 = document.querySelector(".shopItem3");
const shopItem1 = document.querySelector(".shopItem1");
const shopItem4 = document.querySelector(".shopItem4");
const shopItem5 = document.querySelector(".shopItem5");

const fishingXPbar = document.querySelector(".fishingXPbar");
const cookingXPbar = document.querySelector(".cookingXPbar");
const craftingXPbar = document.querySelector(".craftingXPbar");
const combatXPbar = document.querySelector(".combatXPbar");
const enchantingXPbar = document.querySelector(".enchantingXPbar");

const rewardChest = document.querySelector(".rewardChest");
const rewardFrame = document.getElementById("rewardFrame");
const placeChestStick = document.getElementById("placeChestStick");
const placeChestGem = document.getElementById("placeChestGem");
const placeChestVeg = document.getElementById("placeChestVeg");

const bossBarParent = document.getElementById("bossBarParent");
const bossBarHealth = document.getElementById("bossBarHealth");
const bossBarHealthFollower = document.getElementById("bossBarHealthFollower");
const bossBarImg = document.getElementById("bossBarImg");

const craftingHammer = document.getElementById('craftingHammer');

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
const uiProfileLevel = document.querySelector(".uiProfileLevel");
const uiProfileName = document.querySelector(".uiProfileName");

const questClose = document.querySelector(".questClose");

const areaName = document.querySelector("#areaName");
const timer = document.querySelector("#timer");

const uiProfileRank = document.getElementById("uiProfileRank");

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
const scores = document.getElementById("scores");
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
 inventorySlot11: document.querySelector(".inventorySlot11"),
 inventorySlot12: document.querySelector(".inventorySlot12"),
 inventorySlot13: document.querySelector(".inventorySlot13"),
 inventorySlot14: document.querySelector(".inventorySlot14"),
 inventorySlot15: document.querySelector(".inventorySlot15"),
 inventorySlot16: document.querySelector(".inventorySlot16"),
 inventorySlot17: document.querySelector(".inventorySlot17"),
 inventorySlot18: document.querySelector(".inventorySlot18"),
 inventorySlot19: document.querySelector(".inventorySlot19"),
 inventorySlot20: document.querySelector(".inventorySlot20"),
};
const equippedItems = {
  weapon: document.querySelector(".weaponEquipped"),
  soul: document.querySelector(".soulEquipped"),
  artifact: document.querySelector(".artifactEquipped"),
}
const soulsInventory = {
  soul1: document.querySelector(".soul1"),
  soul2: document.querySelector(".soul2"),
  soul3: document.querySelector(".soul3"),
  soul4: document.querySelector(".soul4"),
  soul5: document.querySelector(".soul5"),
  soul6: document.querySelector(".soul6"),
  soul7: document.querySelector(".soul7"),
  soul8: document.querySelector(".soul8"),
  soul9: document.querySelector(".soul9"),
  soul10: document.querySelector(".soul10"),
  soul11: document.querySelector(".soul11"),
  soul12: document.querySelector(".soul12"),
  soul13: document.querySelector(".soul13"),
  soul14: document.querySelector(".soul14"),
  soul15: document.querySelector(".soul15"),
  soul16: document.querySelector(".soul16"),
  soul17: document.querySelector(".soul17"),
  soul18: document.querySelector(".soul18"),
  soul19: document.querySelector(".soul19"),
  soul20: document.querySelector(".soul20"),
  soul21: document.querySelector(".soul21"),
}
const artifactInventory = {
  cape1: document.querySelector(".cape1"),
  cape2: document.querySelector(".cape2"),
}

const catchGif = document.getElementById("catchGif");

//Ui interaction >

logOutButton.addEventListener("click", function(){
  location.reload();
});

let uiIsClose = true
let uiProfileOpen = true;
let uiInventoryOpen = false;
let uiSoulCollectionOpen = false;
let uiQuestOpen = false;
let uiBooksOpen = false;

function openIvn () {
  const OpenMenuAudio = new Audio("./audios/OpenMenu.wav");
  OpenMenuAudio.loop = false;
  OpenMenuAudio.play()

  if (uiIsClose){
    menuUi.style.right = "0";
    uiButtonParent.style.right = "44vh";
    menuUiButtonOpener.style.right = "0vh"
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
    menuUi.style.right = "-45.5vh";
    uiButtonParent.style.right = "-10vh";
    menuUiButtonOpener.style.right = "9vh"
    uiIsClose = true
    menuUiButtonProfile.style.zIndex = "1"
    menuUiButtonInventory.style.zIndex = "1"
    menuUiButtonSoulCollection.style.zIndex = "1"
    menuUiButtonQuest.style.zIndex = "1"
    menuUiButtonBooks.style.zIndex = "1"
   }
}

function playPaperSound() {
  const unfoldPaperAudio = new Audio("./audios/unfoldPaper.wav");
  unfoldPaperAudio.loop = false;
  unfoldPaperAudio.play()

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
    playPaperSound()
    
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
    playPaperSound()

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
    playPaperSound()

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
    playPaperSound()

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
    playPaperSound()

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

//UI BOOKBUTTON<

uiBooksIngredients.addEventListener("click", function(){

  BookParent.style.display = 'flex'

  ingredientBook.style.display = "flex"
  historyBook.style.display = "none"
  soulsAndClothesBook.style.display = "none"
  weaponBook.style.display = "none"
  enchantingBook.style.display = "none"
})
uiBooksHistory.addEventListener("click", function(){
  BookParent.style.display = 'flex'

  ingredientBook.style.display = "none"
  historyBook.style.display = "flex"
  soulsAndClothesBook.style.display = "none"
  weaponBook.style.display = "none"
  enchantingBook.style.display = "none"
})

uiBooksSoulsAndClothes.addEventListener("click", function(){

  BookParent.style.display = 'flex'

  ingredientBook.style.display = "none"
  historyBook.style.display = "none"
  soulsAndClothesBook.style.display = "flex"
  weaponBook.style.display = "none"
  enchantingBook.style.display = "none"
})
uiBooksWeaponbook.addEventListener("click", function(){

  BookParent.style.display = 'flex'

  ingredientBook.style.display = "none"
  historyBook.style.display = "none"
  soulsAndClothesBook.style.display = "none"
  weaponBook.style.display = "flex"
  enchantingBook.style.display = "none"
})
uiBooksEnchantingbook.addEventListener("click", function(){
  BookParent.style.display = 'flex'
  
  ingredientBook.style.display = "none"
  historyBook.style.display = "none"
  soulsAndClothesBook.style.display = "none"
  weaponBook.style.display = "none"
  enchantingBook.style.display = "flex"
})

closeBookButton.addEventListener("click", function(){
  BookParent.style.display = 'none'
})
//UI BOOKBUTTON>

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

        const key = myPlayer.inventory.find(item => (item.name === "chestKey"));
        const chestKeyRestfield = myPlayer.inventory.find(item => (item.name === "chestKeyRestfield"));
        
        if (currentChestItem === "mushroomTrial") {
          if (key) {
            socket.emit("rewardChest", currentChestItem);
            openChestAudio.play()
          } else {
            clearInterval(openChest)
          }
        } 
        else if (currentChestItem === "restfieldTrial") {
          if (chestKeyRestfield) {
            socket.emit("rewardChest", currentChestItem);
            openChestAudio.play()
          } else {
            clearInterval(openChest)
          }
        } 
        else {
          socket.emit("rewardChest", currentChestItem);
          openChestAudio.play()
        }

        setTimeout(() => {
          currentLeft = 0
          rewardChest.style.left = `-${currentLeft}%`;
          IslandChestOpened = false;
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
            chatInput.focus();
            blockMovement = true;
            noMovement = true
            setTimeout(() => { 
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

window.addEventListener("keydown", (e) => {
    if (e.key === "1" || e.key === "&") {
        e.preventDefault();
        if (animPlayer !== "sittingDown"){
          animPlayer = "sittingDown"
          socket.emit("animPlayer", animPlayer);
          socket.emit("lastLookPlayer", lastLookPlayer);
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
  

ingredientBookBookFish.addEventListener("click", (e) =>{
  fishOne.style.display = "flex"
  meatOne.style.display = "none"
  vegetableOne.style.display = "none"
  fruitOne.style.display = "none"
  monsterPart.style.display = "none"

  ingredientBookBookFish.style.color = 'black'
  ingredientBookBookMeat.style.color = '#C0A58C'
  ingredientBookBookVegetable.style.color = '#C0A58C'
  ingredientBookBookMonsterPart.style.color = '#C0A58C'
  ingredientBookBookFruit.style.color = '#C0A58C'
});
ingredientBookBookMeat.addEventListener("click", (e) =>{
  fishOne.style.display = "none"
  meatOne.style.display = "flex"
  vegetableOne.style.display = "none"
  fruitOne.style.display = "none"
  monsterPart.style.display = "none"

  ingredientBookBookFish.style.color = '#C0A58C'
  ingredientBookBookMeat.style.color = 'black'
  ingredientBookBookVegetable.style.color = '#C0A58C'
  ingredientBookBookMonsterPart.style.color = '#C0A58C'
  ingredientBookBookFruit.style.color = '#C0A58C'
});
ingredientBookBookVegetable.addEventListener("click", (e) =>{
  fishOne.style.display = "none"
  meatOne.style.display = "none"
  vegetableOne.style.display = "flex"
  fruitOne.style.display = "none"
  monsterPart.style.display = "none"

  ingredientBookBookFish.style.color = '#C0A58C'
  ingredientBookBookMeat.style.color = '#C0A58C'
  ingredientBookBookVegetable.style.color = 'black'
  ingredientBookBookMonsterPart.style.color = '#C0A58C'
  ingredientBookBookFruit.style.color = '#C0A58C'
});
ingredientBookBookFruit.addEventListener("click", (e) =>{
  fishOne.style.display = "none"
  meatOne.style.display = "none"
  vegetableOne.style.display = "none"
  fruitOne.style.display = "flex"
  monsterPart.style.display = "none"

  ingredientBookBookFish.style.color = '#C0A58C'
  ingredientBookBookMeat.style.color = '#C0A58C'
  ingredientBookBookVegetable.style.color = '#C0A58C'
  ingredientBookBookMonsterPart.style.color = '#C0A58C'
  ingredientBookBookFruit.style.color = 'black'
});
ingredientBookBookMonsterPart.addEventListener("click", (e) =>{
  fishOne.style.display = "none"
  meatOne.style.display = "none"
  vegetableOne.style.display = "none"
  fruitOne.style.display = "none"
  monsterPart.style.display = "flex"

  ingredientBookBookFish.style.color = '#C0A58C'
  ingredientBookBookMeat.style.color = '#C0A58C'
  ingredientBookBookVegetable.style.color = '#C0A58C'
  ingredientBookBookMonsterPart.style.color = 'black'
  ingredientBookBookFruit.style.color = '#C0A58C'
});

let objMonsterPart = {
  miniMushroom: {
    name: "MINI MUSHROOM",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/miniMushroom.png"
  },
  bone: {
    name: "BONE",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/bone.png"
  },
  blanket: {
    name: "BLANKET",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 2",
    img: "./inventory/restfieldBlanket.png"
  },
  slime: {
    name: "SLIME",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 3",
    img: "./inventory/slimeGuts.png"
  },
  treeLeaf: {
    name: "TREE MEAF",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 3",
    img: "./inventory/treeLeaf.png"
  },
};
nameBookMonster.innerHTML = objMonsterPart["miniMushroom"].name
  ImgBookMonster.src = objMonsterPart["miniMushroom"].img
  descriptionBookMonster.innerHTML = objMonsterPart["miniMushroom"].desc
  lvlBookMonster.innerHTML = objMonsterPart["miniMushroom"].lvl
  ingredientBookBookFish.style.color = 'black'

miniMushroomTag.addEventListener("click", (e) =>{
  let item = "miniMushroom"
  nameBookMonster.innerHTML = objMonsterPart[item].name
  ImgBookMonster.src = objMonsterPart[item].img
  descriptionBookMonster.innerHTML = objMonsterPart[item].desc
  lvlBookMonster.innerHTML = objMonsterPart[item].lvl
});
boneTag.addEventListener("click", (e) =>{
  let item = "bone"
  nameBookMonster.innerHTML = objMonsterPart[item].name
  ImgBookMonster.src = objMonsterPart[item].img
  descriptionBookMonster.innerHTML = objMonsterPart[item].desc
  lvlBookMonster.innerHTML = objMonsterPart[item].lvl
});
blanketTag.addEventListener("click", (e) =>{
  let item = "blanket"
  nameBookMonster.innerHTML = objMonsterPart[item].name
  ImgBookMonster.src = objMonsterPart[item].img
  descriptionBookMonster.innerHTML = objMonsterPart[item].desc
  lvlBookMonster.innerHTML = objMonsterPart[item].lvl
});
slimeTag.addEventListener("click", (e) =>{
  let item = "slime"
  nameBookMonster.innerHTML = objMonsterPart[item].name
  ImgBookMonster.src = objMonsterPart[item].img
  descriptionBookMonster.innerHTML = objMonsterPart[item].desc
  lvlBookMonster.innerHTML = objMonsterPart[item].lvl
});
treeLeafTag.addEventListener("click", (e) =>{
  let item = "treeLeaf"
  nameBookMonster.innerHTML = objMonsterPart[item].name
  ImgBookMonster.src = objMonsterPart[item].img
  descriptionBookMonster.innerHTML = objMonsterPart[item].desc
  lvlBookMonster.innerHTML = objMonsterPart[item].lvl
});

let objFishes = {
  sardine: {
    name: "SARDINE",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/sarding.png"
  },
  crab: {
    name: "Crab",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/crab.png"
  },
  ballo: {
    name: "BALLO",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 2",
    img: "./inventory/ballo.jpg"
  },
  bass: {
    name: "BASS",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 3",
    img: "./inventory/bass.png"
  },
  cork: {
    name: "CORK",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 3",
    img: "./inventory/cork.png"
  },
  octopus: {
    name: "OCTOPUS",
    desc: "Sardine of Grassland. You can find it in CastelSide. Cooked, it will increase your health of half a heart. :)",
    lvl: "LEVEL REQUIRED 5",
    img: "./inventory/octopus.png"
  }
};
nameBookFish.innerHTML = objFishes["sardine"].name
ImgBookFish.src = objFishes["sardine"].img
descriptionBookFish.innerHTML = objFishes["sardine"].desc
lvlBookFish.innerHTML = objFishes["sardine"].lvl


sardinTag.addEventListener("click", (e) =>{
let item = "sardine"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
crabTag.addEventListener("click", (e) =>{
let item = "crab"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
balloTag.addEventListener("click", (e) =>{
let item = "ballo"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
bassTag.addEventListener("click", (e) =>{
let item = "bass"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
corkTag.addEventListener("click", (e) =>{
let item = "cork"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
octopusTag.addEventListener("click", (e) =>{
let item = "octopus"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});

let objHistory = {
  castelSide: {
    name: "CASTEL SIDE",
    history: `After critical citizens were exiled to Antarctica, chaos engulfed the remaining civilization. Panic spread as people, abandoned and powerless, faced the corruption of Arcane magic, which destroyed vital mechanisms. Forced to reconnect with nature, they learned to live off the land. Over time, abandoned castles and temples became peaceful sanctuaries for small civilizations.
The Arcane corruption grew worse in the north, driving people southward. Before reaching the southern coast, they found a serene forest surrounding an ancient castle. Rupheos, leader of the first expedition, made it their refuge, naming the area “The Grasslands.” From the castle's heights, the lush trees and grass formed a tranquil green expanse.
Rupheos became King of the Grasslands, loved for rebuilding society and fostering a thriving community that endured for decades. But one fateful night...` ,
    img: "./ui/uiBooks/historyBookContent/castleSideLore.png",
  },
  restfield: {
    name: "RESTFIELD",
    history: `The Castle of the Grasslands stood as a vigilant guardian under King Rupheos's rule. Though just, his reign was harsh on criminals in a land rife with lawlessness. One night, armed criminals attacked, blowing through the castle walls and killing soldiers and civilians. They captured Rupheos, and their leader sneered:
“Remember my name, Rupheos. Sokon killed you.”
As the knife pressed to his throat, a sudden purple light filled the chamber. “The sky... it’s purple?” one criminal murmured before an explosion shook the earth. The tremor collapsed half the chamber, throwing Sokon onto a glowing purple crystal. On contact, the crystal shattered, consuming him in a flash before vanishing.
From then on, the castle's cemetery became a place of terror. The dead stirred, and Sokon’s tomb was built far to the north, isolated from the rest. Even now, whispers from that cursed ground drift to those brave—or foolish—enough to linger.`,
    img: "./ui/uiBooks/historyBookContent/restfieldLore.jpeg",
  }
}
  nameBookHistory.innerHTML = objHistory["castelSide"].name
  descriptionBookHistory.innerHTML = objHistory["castelSide"].history
  ImgBookHistory.src = objHistory["castelSide"].img
  historyBookCastelSide.style.color = 'black'

historyBookCastelSide.addEventListener("click", (e) =>{
  let item = "castelSide"
  nameBookHistory.innerHTML = objHistory[item].name
  descriptionBookHistory.innerHTML = objHistory[item].history
  ImgBookHistory.src = objHistory[item].img

  historyBookCastelSide.style.color = 'black'
  historyBookRestfield.style.color = '#C0A58C'
})

historyBookRestfield.addEventListener("click", (e) =>{
  let item = "restfield"
  console.log(objHistory[item], item)
  nameBookHistory.innerHTML = objHistory[item].name
  descriptionBookHistory.innerHTML = objHistory[item].history
  ImgBookHistory.src = objHistory[item].img

  historyBookCastelSide.style.color = '#C0A58C'
  historyBookRestfield.style.color = 'black'
})

let deleting = false;

chatButton.addEventListener("click", () => {
 showChatFunction()
  
})
sitDownIconButton.addEventListener("click", () => {
  if (animPlayer !== "sittingDown"){
    animPlayer = "sittingDown"
    socket.emit("animPlayer", animPlayer);
    socket.emit("lastLookPlayer", lastLookPlayer);
  }
  
})

window.addEventListener("keydown", (e) => {
  // if (e.key === "o") {
  //   scores.style.display =  scores.style.display === "flex" ? "none" : "flex";
  //   socket.emit("getScores", "")
  // }
})

socket.on("scoresData", (scoresArray) => {
  // Remove only <p> elements inside the container
  Array.from(scores.children).forEach(child => {
    if (child.tagName === "P") {
      scores.removeChild(child);
    }
  });

  const sortedScores = scoresArray
    .map(score => {
      const [username, scoreValue] = score.split(": ");
      // Convert "30:45" into 30.45 while preserving decimals
      const numericScore = scoreValue.includes(":")
        ? parseFloat(scoreValue.replace(":", "."))
        : parseFloat(scoreValue) || 0;

      return { username, score: numericScore };
    })
    .sort((a, b) => {
      // Sort by score, placing 0 scores at the end
      if (a.score === 0 && b.score !== 0) return 1;
      if (b.score === 0 && a.score !== 0) return -1;
      return a.score - b.score;
    });

  // Append each score as a <p> element with a class
  sortedScores.forEach(({ username, score }, index) => {
    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${username}: ${score}`
    p.classList.add("score-item"); // Add a class to the <p> element
    scores.appendChild(p);
  });
});



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

function closeCooking() {

  cookingBarChild.style.width = `0%`;
  cookedItems = [];
  currentlyCooking = false;
  cookingItem1.src = "./Textures/itemPlaceholder.png";
  cookingItem3.src = "./Textures/itemPlaceholder.png";
  logoDataList = [];
  cookingArray = [];
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

document.addEventListener('mousedown', function(event) {
    
        if (!isAnimating) return;

        hammerSmash.play()

        const image1 = document.getElementById('craftingItem1').getBoundingClientRect();
        const image2 = document.getElementById('craftingItem2').getBoundingClientRect();
        const centerCraft = document.getElementById('centerCraft');
        const progressCraftChild = document.getElementById('progressCraftChild');
        const failedCraftChild = document.getElementById('failedCraftchild');

        // Add the class
        craftingHammer.classList.add("smashHammer");

        // Remove the class after 0.5 seconds (500 milliseconds)
        setTimeout(() => {
          craftingHammer.classList.remove("smashHammer");
        }, 200);

        let startAnimTimeout 

        if (grassOpenCrafting && isAnimating) {
            if (isIntersecting(image1, image2)) {
              hammerWin.play()
                craftSuccessBar += 25;
                progressCraftChild.style.width = craftSuccessBar + "%";
                centerCraft.style.width = "196px";
                centerCraft.style.height = "196px";

                isAnimating = false;

                startAnimTimeout = setTimeout(() => {
                  startAnimations()
                }, 1000);

                setTimeout(() => {
                    centerCraft.style.width = "186px";
                    centerCraft.style.height = "186px";
                }, 100);
            } else {
              hammerFail.play()
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
            if (craftSuccessBar >= 100) {
                clearTimeout(startAnimTimeout)
                endCrafting("success"); // End the animation and reset everything
            }
            if (craftFailedBar >= 100) {
                clearTimeout(startAnimTimeout)
                endCrafting("fail"); // End the animation and reset everything
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
function endCrafting(type) {
    isAnimating = false; // Stop any further animation

    // Log "end"
    console.log('end');

    // Reset positions, bars, and animations
    if (type === "success") resetCrafting();
    if (type === "fail") cancelCrafting();
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
    socket.emit("toDelete", craftedItems);
    craftedItems = []
    currentlyCrafting = false;
    craftingItem1.src = "./Textures/itemPlaceholder.png";
    craftingItem2.src = "./Textures/itemPlaceholder.png";
}
function cancelCrafting() {
    isAnimating = false;
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
      }, 1000);

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

      console.log("crafting")

      if (inventorySlots[`inventorySlot${index}`].src !== "") {
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

          inventorySlots[`inventorySlot${index}`].src = `data:,`;
          inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));

          item.maxPower = maxHealth;
          item.index = myPlayer.inventory.indexOf(item);

          socket.emit("consumable", item);
          
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
      if (inventorySlots[`inventorySlot${index}`].src !== "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" && deleteSelect && !itemsToDelete.includes(index)) {
  
          itemsToDelete.push(index);
  
          deleteSelect = false
  
          setTimeout(() => {
            deleteSelect = true
          }, 100);
  
          clearTimeout(timeoutDelete);
  
          timeoutDelete = setTimeout(() => {

            for (const slot of Object.values(inventorySlots)) {
              slot.style.background = "none";
            }
            
            socket.emit("toDelete", itemsToDelete);
            deleting = false
            trashIcon.src = "./icons/uiIcon/closeTrashInventoryIcon.png"
            itemsToDelete = [];
            inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => deleteInventory(item, index));
          }, 2000);
  
          inventorySlots[`inventorySlot${index}`].style.background = `red`;
  
      } else if (itemsToDelete.includes(index) && deleteSelect) {
  
          let indexItem = itemsToDelete.indexOf(index);
  
          itemsToDelete.splice(indexItem, 1);
          inventorySlots[`inventorySlot${index}`].style.background = `none`;
  
          deleteSelect = false
  
          setTimeout(() => {
            deleteSelect = true
          }, 100);
  
          clearTimeout(timeoutDelete);
  
          timeoutDelete = setTimeout(() => {
  
            for (const slot of Object.values(inventorySlots)) {
              slot.style.background = "none";
            }
  
            socket.emit("toDelete", itemsToDelete);
            deleting = false
            trashIcon.src = "./icons/uiIcon/closeTrashInventoryIcon.png"
            itemsToDelete = [];
          }, 2000);
      }
    }
  }
};

deleteInventoryButton.addEventListener("click", () => {
  console.log(deleting)
  if (!deleting) {
    trashIcon.src = "./icons/uiIcon/openTrashInventoryIcon.png"
    deleting = true
  } else if (deleting){
    trashIcon.src = "./icons/uiIcon/closeTrashInventoryIcon.png"
    deleting = false
  }
} )

function interactEquipment (item, index) {

  if(consumeAvailable === true && deleting === false) {

    if (item.type === "weapon") {

      if (myPlayer.inventory.length <= 20) {

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

let dialogBoxes;

function initDraggables() {
  dragula([document.querySelector(".dragParent"), document.querySelector(".dragParent1")])
}

setTimeout(() => {
  initDraggables()
}, 1000);

let maxHealth = 6;
let currentHealth = 6;
let dying = false;

function playerDeath () {

  if (dying) return;

  dying = true;
  challengeActive = false;

  bossBarParent.style.display = "none";
  bossBarHealth.style.width = 100 + "%";
  bossBarHealthFollower.style.width = 100 + "%";

  // clearInterval(intervalCanvasBase)
  projectilesClient = [];
  stopAllSound()
  const deathSound = new Audio("./audios/deathSound.wav");
  deathSound.loop = false;
  deathSound.volume = 0.7;
  deathSound.play();
  noMovement = true;
  const dynamicFunctionName = currentSelectedMap + "Loop";   
  const canvasFunction = window[dynamicFunctionName];
  resetTimer()
  hideTimer()

  setTimeout(() => {
    clearInterval(intervalCanvasBase);
    intervalCanvasBase = setInterval(canvasFunction, 100);
  }, 500);

  setTimeout(() => {
    clearInterval(intervalCanvasBase);
  }, 2500);
  
  setTimeout(() => {
    bossFight = false;
    blackScreen()
    projectilesClient = [];

    youDied.style.display = "block";
    respawn.style.display = "block";

  }, 3000)

  setTimeout(() => {
    projectilesClient = [];
    socket.emit("healMax", maxHealth);
    noMovement = false;
  }, 4000);
}

let blackScreenOpacity = 0;
function blackScreen () {
  const blackScreen = document.getElementById("blackScreen");

  if (blackScreenOpacity < 1) {
    let opacityInterval = setInterval(() => {
      blackScreenOpacity++;
      blackScreen.style.opacity = blackScreenOpacity / 100;

      if (blackScreenOpacity > 100) {
        clearInterval(opacityInterval);
      }
    }, 16)
  } else {
    let opacityInterval = setInterval(() => {
      blackScreenOpacity--;
      blackScreen.style.opacity = blackScreenOpacity / 100;
      projectilesClient = [];

      if (blackScreenOpacity < 0) {
        clearInterval(opacityInterval);
      }
    }, 16)
  }
}

respawn.addEventListener("click", () => {
  mapsInfo = _.cloneDeep(originalMapsInfo);

  setTimeout(() => {
    youDied.style.display = "none";
    respawn.style.display = "none";
    blackScreen ()
    currentSelectedMap = "lobby"
    let functionName = currentSelectedMap + "Loop";
    changeMap(functionName)
    socket.emit("changeRoom", currentSelectedMap);
    dying = false;
  }, 200);
})

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
  questEndItem.src = `./inventory/${quest.rewardItem}.png`

  console.log(myPlayer.inventory, quest)

  let itemAmount = myPlayer.inventory.filter((item) => item.name === quest.completionItem).length;
  questProgressItems.innerHTML = itemAmount + " / " + quest.completionAmount + " " + quest.completionItem

  questProgressChild.style.width = (itemAmount / quest.completionAmount) * 100 + "%";

  questReward.innerHTML = quest.rewardType;
}

questClose.addEventListener("click", () => {
  const questUi = document.querySelector(".questInfo");
  questUi.style.display = "none";
})

let updateDialogs = true;

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

  currentHealth = myPlayer.health
  if (currentHealth > maxHealth) {
    currentHealth = maxHealth
  }

  dialogBoxes = {


    // CASTLESIDE
    "Fishing Quest": {
    dialogName: "quest",
    questRequirements: [],
    type: "counter",
  
    questName: "Fishing quest",
    questDecription: "Melina said that if I bring her five fish of any type then she will give me a reward",
    questCard: "./Cards/fish.png",
    rewardType: "soul",
    rewardItem: "frogSoulInventory",
    completionItem: "sardin",
    completionAmount: 10,
    markerX: 1922 + 364,
    markerY: 1879 + 347 / 2,
    
    dialogText:
    [
      {
        NPC: "Fisherman",
        text: "Hello Adventurer! Oh you are looking for a task?",
      },
      {
        NPC: "Fisherman",
        text: "Umm... Well.. Lets see...",
      },
      {
        NPC: "Fisherman",
        text: "Well I can give you something I found just for your efforts, go catch 5 red sardines and bring them back to me.",
      },
      {
        NPC: myPlayer ? myPlayer.username : "User",
        text: "Alright that sounds simple enough!",
      },
    ],
  
    progressText:
    [
      {
        NPC: "Fisherman",
        text: "So? I am waiting on those fish!",
      },
      {
        NPC: "Fisherman",
        text: "Do you have them?",
        check: true,
      },
    ],
  
    rewardText:
    [
      {
        NPC: "Fisherman",
        text: "Really nice job!",
      },
      {
        NPC: myPlayer ? myPlayer.username : "User",
        text: "Thank you!",
      },
    ],
    },
    "Deep Forestry Quest": {
    dialogName: "quest",
    questRequirements: [],
    type: "counter",
  
    questName: "Deep Forestry Quest",
    questDecription: "The guy in the forest said that for a few sticks he can give me a hat, would be nice for the sun!",
    questCard: "./Cards/clothes.png",
    rewardType: "item",
    rewardItem: "tropicalHatInventory",
    completionItem: "stick",
    completionAmount: 2,
    markerX: 1974 - 200,
    markerY: 1443 + 600,
    
    dialogText:
    [
      {
        NPC: "Explorer",
        text: "Hello Adventurer! Listen I am having a bad time.",
      },
      {
        NPC: "Explorer",
        text: "I want to explore but I keep getting sunburnt so I need to get under the trees, and I already got lost 3 times because of that.",
      },
      {
        NPC: "Explorer",
        text: "I can make a hat for you and me if you bring me 2 sticks of wood! The sun can be harsh this time of the year...",
      },
      {
        NPC: myPlayer ? myPlayer.username : "User",
        text: "I am sure I saw sticks in the lake!",
      },
    ],
  
    progressText:
    [
      {
        NPC: "Explorer",
        text: "Please tell me you have the sticks",
      },
      {
        NPC: "Explorer",
        text: "...",
        check: true,
      },
    ],
  
    rewardText:
    [
      {
        NPC: "Explorer",
        text: "Finally! Here you go",
      },
      {
        NPC: myPlayer ? myPlayer.username : "User",
        text: "Oh wow, stylish!",
      },
    ],
    },
    "Tree Issues Quest": {
    dialogName: "quest",
    questRequirements: [],
    type: "counter",
  
    questName: "Tree Issues Quest",
    questDecription: "This dude by the crystal mentioned that he is trying to figure out why the trees are alive in that area, I need to get some leaves from those trees.",
    questCard: "./Cards/fight.png",
    rewardType: "soul",
    rewardItem: "arcanyDemonSoulInventory",
    completionItem: "treeLeaf",
    completionAmount: 5,
    markerX: 1573 + 250,
    markerY: 1851 + 200,
    
    dialogText:
    [
      {
        NPC: "Scientist",
        text: "Oh hey there! Can you help me with something?",
      },
      {
        NPC: "Scientist",
        text: "This crystal has some connection with the environment but I cant figure out why...",
      },
      {
        NPC: "Scientist",
        text: "If you bring me 5 leaves from those trees I can investigate further",
      },
      {
        NPC: myPlayer ? myPlayer.username : "User",
        text: "And my reward?",
      },
      {
        NPC: "Scientist",
        text: "These kids... yes yes of course you will have a reward!",
      },
    ],
  
    progressText:
    [
      {
        NPC: "Scientist",
        text: "So, how is it going?",
      },
      {
        NPC: "Scientist",
        text: "These trees really dont like that I am here!",
        check: true,
      },
    ],
  
    rewardText:
    [
      {
        NPC: "Scientist",
        text: "Amazing! Here you go",
      },
    ],
    },
    "Mushroom Town Quest": {
    dialogName: "quest",
    questRequirements: [],
    type: "counter",
  
    questName: "Mushroom Town Quest",
    questDecription: "The mage of the tower told me that he will open the path to the mushroom town if I can bring him 10 slime guts.",
    questCard: "./Cards/fight.png",
    rewardType: "quest",
    rewardItem: "mushroomAccess",
    completionItem: "slimeGuts",
    completionAmount: 10,
    markerX: 1573 + 1080,
    markerY: 1851 + 200,
    
    dialogText:
    [
      {
        NPC: "Tordmun",
        text: "Hello there friend! Do you have a minute?",
      },
      {
        NPC: "Tordmun",
        text: "I would need some help regarding my investigation...",
      },
      {
        NPC: "Tordmun",
        text: "You see... I am Tormund and this tower is were I live",
      },
      {
        NPC: "Tordmun",
        text: "On the top of it you will find an ENCHANTING TABLE!!",
      },
      {
        NPC: "Tordmun",
        text: "I have been working on it since the great collapse",
      },
      {
        NPC: "Tordmun",
        text: "It gathers energy from the sumit of mount Nakro, were the beast resides",
      },
      {
        NPC: "Tordmun",
        text: "...",
      },
      {
        NPC: "Tordmun",
        text: "Perhaps I have overspoken...",
      },
      {
        NPC: "Tordmun",
        text: "Anyway...",
      },
      {
        NPC: "Tordmun",
        text: "To get the machine to function I will just need 10 slime guts, dont worry they don't feel anything...",
      },
      {
        NPC: "Tordmun",
        text: "They come from somewhere else, I am still trying to find out where...",
      },
      {
        NPC: "Tordmun",
        text: "Bring them to me so I can get the machine working and in return I will not only clear these rocks here for you to pass",
      },
      {
        NPC: "Tordmun",
        text: "But I will also give you access to my table so you can enchant your weapons!",
      },
      {
        NPC: "Tordmun",
        text: "Off you go then.",
      },
    ],
  
    progressText:
    [
      {
        NPC: "Tordmun",
        text: "So, how is it going?",
      },
      {
        NPC: "Tordmun",
        text: "Remember you can always craft a weapon by getting a gem from this chest!",
      },
      {
        NPC: "Tordmun",
        text: "... I forgot were the key is though ...",
        check: true,
      },
    ],
  
    rewardText:
    [
      {
        NPC: "Tordmun",
        text: "Good job!!",
      },
      {
        NPC: "Tordmun",
        text: "Now you can enchant your weapons!",
      },
      {
        NPC: "Tordmun",
        text: "However to do so you will need a gem shard from mount Nakro, you can find them all over the world",
      },
      {
        NPC: "Tordmun",
        text: "Each gem will give you a modifier, more bullets, more speed or even more distance for your weapon!",
      },
      {
        NPC: "Tordmun",
        text: "...",
      },
      {
        NPC: "Tordmun",
        text: "You will also need to pay a fee to enchant your weapon...",
      },
      {
        NPC: "Tordmun",
        text: "Dont look at me like that!",
      },
      {
        NPC: "Tordmun",
        text: "... I will go now.",
      },
    ],
    },

    // RESTFIELD
    "A locked door Quest": {
    dialogName: "quest",
    questRequirements: [],
    type: "counter",
  
    questName: "A locked door Quest",
    questDecription: "The witch at the door of Restfield wants me to help her cook something, I will need 3 mushrooms for that.",
    questCard: "./Cards/fight.png",
    rewardType: "quest",
    rewardItem: "restfieldAccess",
    completionItem: "miniMushroom",
    completionAmount: 3,
    markerX: 1281,
    markerY: 1829,
    
    dialogText:
    [
      {
        NPC: "Witch",
        text: "Hey there little one! Can you help me out an old witch?... Okay maybe not so old",
      },
      {
        NPC: "Witch",
        text: "I am trying to finish my cacerol but I am missing one ingredient...",
      },
      {
        NPC: "Witch",
        text: "TINY MUSHROOMS!!!!!",
      },
      {
        NPC: "Witch",
        text: "....",
      },
      {
        NPC: "Witch",
        text: "Sorry...",
      },
      {
        NPC: "Witch",
        text: "I saw a little mushroom kingdom close to here, they seem to have plenty.",
      },
      {
        NPC: myPlayer ? myPlayer.username : "User",
        text: "Would I need to kill them?",
      },
      {
        NPC: "Witch",
        text: "Well...",
      },
      {
        NPC: "Witch",
        text: "Um...",
      },
      {
        NPC: "Witch",
        text: "Yes. BUT if you do so I can open this massive door for you!",
      },
    ],
  
    progressText:
    [
      {
        NPC: "Witch",
        text: "So, any luck? I am getting older by the minute out here",
      },
      {
        NPC: "Witch",
        text: "...",
        check: true,
      },
    ],
  
    rewardText:
    [
      {
        NPC: "Witch",
        text: "Amazing! Welcome to RESTFIELD!",
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

  health()
  updateQuestUI()
  if (updateDialogs) {
    addMapsInfoToDiv()
    updateDialogs = false
  }

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
    combatLevel.innerHTML = "LVL 1";
    combatLevelSimple = 1;
   }
   else if (combatLevelNum < 3) {
    combatLevel.innerHTML = "LVL 2";
    combatLevelSimple = 2;
   }
   else if (combatLevelNum < 6) {
    combatLevel.innerHTML = "LVL 3";
    combatLevelSimple = 3;
   }
   else if (combatLevelNum < 12) {
    combatLevel.innerHTML = "LVL 4";
    combatLevelSimple = 4;
   }
   else {
    combatLevel.innerHTML = "MAX";
    combatLevelSimple = 5;
    combatLevel.style.color = "#9b4fb9"
   }
 
   if (combatLevelSimple > newCombatLevel && myPlayer.combatLevel !== 0) {
     changeCombatLevel = true;
     levelUp.src = "./Textures/levelUpCombat.gif"
     levelUp.classList.add('fadeInAnim');
     levelUp.style.display = "block";
     levelUpAudio.play();
 
     setTimeout(() => {
       levelUp.style.display = "none";
       levelUp.classList.remove('fadeInAnim');
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
   enchantingLevel.style.color = "#9b4fb9"
  }

  if (enchantingLevelSimple > newEnchantingLevel && myPlayer.enchantingLevel !== 0) {
    changeEnchantingLevel = true;
    levelUp.src = "./Textures/levelUpEnchanting.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block";
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
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
    cookingLevel.innerHTML = "MAX";
    cookingLevelSimple = 5;
    cookingLevel.style.color = "#9b4fb9"
  }

  if (cookingLevelSimple > newCookingLevel && myPlayer.cookingLevel !== 0) {
    changeCookingLevel = true;
    levelUp.src = "./Textures/levelUpCooking.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block";
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
    }, 5000);
  }

  generalLevelCooking = cookingLevelSimple;

  // Cooking level <

  // Fishing level >

  let fishingLevelNum = Math.trunc(myPlayer.fishingLevel / 1000);

  fishingXPbar.style.width = `${Math.min(((myPlayer.fishingLevel - (fishingLevelNum < 1 ? 0 : fishingLevelNum < 3 ? 1000 : fishingLevelNum < 6 ? 3000 : fishingLevelNum < 12 ? 6000 : 12000)) / (fishingLevelNum < 1 ? 1000 : fishingLevelNum < 3 ? 2000 : fishingLevelNum < 6 ? 3000 : fishingLevelNum < 12 ? 6000 : Infinity)) * 75, 75)}px`;


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
    fishingLevel.innerHTML = "MAX";
    fishingLevelSimple = 5;
    fishingLevel.style.color = "#9b4fb9"
  }

  if (fishingLevelSimple > newFishingLevel && myPlayer.fishingLevel !== 0) {
    changeFishingLevel = true;
    levelUp.src = "./Textures/levelUpFishing.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block";
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
    }, 5000);
  }

  generalLevel = fishingLevelSimple;

  // Fishing level <

  // General Level
  let generalLevelNum = Math.floor((combatLevelSimple + fishingLevelSimple + cookingLevelSimple + 1 + 1) / 5);
  maxHealth = 4 + generalLevelNum * 2;
  uiProfileLevel.innerHTML = "LVL" + " " + generalLevelNum;
  uiProfileName.innerHTML = myPlayer.username

  if (Math.floor((combatLevelSimple + fishingLevelSimple + cookingLevelSimple + 1 + 1) / 5) === 1) {
    uiProfileRank.src = "./ui/Rank/rankOne.png"
  } 
  else if (Math.floor((combatLevelSimple + fishingLevelSimple + cookingLevelSimple + 1 + 1) / 5) === 2) {
    uiProfileRank.src = "./ui/Rank/rankTwo.png"
  }
  else if (Math.floor((combatLevelSimple + fishingLevelSimple + cookingLevelSimple + 1 + 1) / 5) === 3) {
    uiProfileRank.src = "./ui/Rank/rankThree.png"
  }

  fishingXPbar.style.width = `${Math.min(((myPlayer.fishingLevel - (fishingLevelNum < 1 ? 0 : fishingLevelNum < 3 ? 1000 : fishingLevelNum < 6 ? 3000 : fishingLevelNum < 12 ? 6000 : 12000)) / (fishingLevelNum < 1 ? 1000 : fishingLevelNum < 3 ? 2000 : fishingLevelNum < 6 ? 3000 : fishingLevelNum < 12 ? 6000 : fishingLevelNum)) * 70, 70)}px`;
  cookingXPbar.style.width = `${Math.min(((myPlayer.cookingLevel - (cookingLevelNum < 1 ? 0 : cookingLevelNum < 3 ? 1000 : cookingLevelNum < 6 ? 3000 : cookingLevelNum < 12 ? 6000 : 12000)) / (cookingLevelNum < 1 ? 1000 : cookingLevelNum < 3 ? 2000 : cookingLevelNum < 6 ? 3000 : cookingLevelNum < 12 ? 6000 : fishingLevelNum)) * 70, 70)}px`;
  combatXPbar.style.width = `${Math.min(((myPlayer.combatLevel - (combatLevelNum < 1 ? 0 : combatLevelNum < 3 ? 1000 : combatLevelNum < 6 ? 3000 : combatLevelNum < 12 ? 6000 : 12000)) / (combatLevelNum < 1 ? 1000 : combatLevelNum < 3 ? 2000 : combatLevelNum < 6 ? 3000 : combatLevelNum < 12 ? 6000 : fishingLevelNum)) * 70, 70)}px`;


  if (myPlayer.souls.length) {
    for (const soul of myPlayer.souls) {
      soulsInventory[`soul${myPlayer.souls.indexOf(soul) + 1}`].style.background = `url(${soul.image})`;
      soulsInventory[`soul${myPlayer.souls.indexOf(soul) + 1}`].style.backgroundSize = 'cover';
      soulsInventory[`soul${myPlayer.souls.indexOf(soul) + 1}`].addEventListener("mousedown", (e) => {
        interactInventory(soul);
        audioEquip.play();
      });
    }
  }

    if (myPlayer.armor.length) {
      for (const item of myPlayer.armor) {
        equippedItems[`soul`].style.background = `url(${item.image})`;
        equippedItems[`soul`].style.backgroundSize = 'cover';

        if (item.name === "frog") {
          uiSkinsImg.src = "./ui/uiSkins/uiFrogSkin.png";
        }
        }
        } else {
        uiSkinsImg.src = "./ui/uiSkins/uiHumanSkin.png"
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
      for (let i = 0; i < 21; i++) {


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
  // cookingAudio.play()
  // cookingAudio.loop = true

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
    chatButton.style.display = "block";
    sitDownIconButton.style.display = "block";
    

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

let sittingDown = false;
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

    if (myPlayer) {
      if (e?.key?.toLowerCase() === "i"){
        openIvn()
      }
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

    const number = Math.floor(Math.random() * (30000 - 10000 + 1) + 10000);

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
      }, 10);

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
  
  if(e.key === "e" && scoreAvailable === true) {
    scores.style.display =  scores.style.display === "flex" ? "none" : "flex";
    console.log(currentLand)
    socket.emit("getScores", currentLand)
  }


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
    noMovement = true
    if (uiIsClose) openIvn()
  } else if (e.key === "e" && grassCookingAvailable & grassOpenCooking) {
    cookingSong.pause()
    oilFry.pause()
    noMovement = false
    grassOpenCooking = false;
    if (!uiIsClose) openIvn()
    closeCooking()
  }

  //Cooking grasslands open <
  
  //Crafting grasslands open >

  if(e.key === "e" && grassCraftingAvailable & !grassOpenCrafting) {
    grassOpenCrafting = true;
    console.log(grassOpenCrafting)
    noMovement = true
    if (uiIsClose) openIvn()
  } else if (e.key === "e" && grassCraftingAvailable & grassOpenCrafting) {
    noMovement = false
    grassOpenCrafting = false;
    if (!uiIsClose) openIvn()
    cancelCrafting()
  }

  //Crafting grasslands open <

  //Chest island open >

  if(e.key === "e" && IslandChestAvailable & !IslandOpenChest) {
    const key = myPlayer.inventory.find(item => item.name === "chestKey");
    const chestKeyRestfield = myPlayer.inventory.find(item => (item.name === "chestKeyRestfield"));
    const chestKeyCommon = myPlayer.inventory.find(item => (item.name === "chestKeyCommon"));

    if ((currentChestItem === "mushroomTrial") && !key) {
      areaNameDisplay("Trial Started")
      challengeAccepted.play()
      timer.style.display = "flex";
      setTimeout(() => {
        startTimer();
        mapsInfo[currentLand].enemies?.forEach(enemy => {
          activateNormalEnemy(enemy);
        })
        const rocksFall = new Audio("./audios/rocksFall.wav");
        rocksFall.loop = false;
        rocksFall.volume = 0.1;
        rocksFall.play();
        suspense1.play();
      }, 2000);
    } 
    else if ((currentChestItem === "restfieldTrial") && !chestKeyRestfield) {
      areaNameDisplay("Trial Started")
      challengeAccepted.play()
      timer.style.display = "flex";
      setTimeout(() => {
        startTimer();
        mapsInfo[currentLand].enemies?.forEach(enemy => {
          activateNormalEnemy(enemy);
        })
        const rocksFall = new Audio("./audios/rocksFall.wav");
        rocksFall.loop = false;
        rocksFall.volume = 0.1;
        rocksFall.play();
        suspense1.play();
      }, 2000);
    } 
    else if (((currentChestItem === "restfieldTrial") && chestKeyRestfield) || ((currentChestItem === "mushroomTrial") && key) || chestKeyCommon) {
      IslandOpenChest = true;
      openShopAudio.play();
    }
  } else if (e.key === "e" && IslandChestAvailable & IslandOpenChest) {
    IslandOpenChest = false;
  }

  //Chest island open <

  // if (e.key === "o") {
  //   mapsInfo[currentLand].enemies?.forEach(enemy => {
  //     activateNormalEnemy(enemy);
  //   })
  // }

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
  let angle = angleMouse
  const audioShootNature = new Audio("./audios/shootNature.wav");
  audioShootNature.loop = false;
  audioShootNature.volume = 0.3;
  audioShootNature.play()

  // socket.emit("projectile", angle);
  cameraShake();

  console.log(myPlayer?.weapon[0])
 
  for (let i = 1; i <= myPlayer?.weapon[0].bullets; i++) {
    angle = i === 0 ? angle : i === 1 ? angle + 0.1 : i === 2 ? angle - 0.1 : i === 3 ? angle + 0.2 : angle - 0.2

    projectilesClient.push({
        angle,
        x: playerX + 20,
        y: playerY + 50,
        timeLeft: myPlayer?.weapon[0].range,
        playerId: socket.id,
        damage: myPlayer?.weapon[0].damage,
      }) 
  }

  shooting = true;

  setTimeout(() => {
    shooting = false;
  }, 20);

  const interval = setInterval(() => {
      if (mainSkillCooldown > myPlayer?.weapon[0].fireRate) {
          mainSkillCooldown = 0;
          recoil = 0
          clearInterval(interval);
      }
      mainSkillCooldown++;
      recoil += recoil > 9 ? 0 : 3;
  }, 20);
}

function shootArcaneRepeater () {
  const angle = angleMouse
  const audioShootNature = new Audio("./audios/shootNature.wav");
  audioShootNature.loop = false;
  audioShootNature.volume = 0.3;
  audioShootNature.play()
  const bullet1 = angle + 0.1
  const bullet2 = angle - 0.1
    // socket.emit("projectile", angle);
    cameraShake();

    projectilesClient.push({
      bullet1,
      x: playerX + 20,
      y: playerY + 50,
      timeLeft: 10,
      playerId: socket.id,
      damage: 0.5,
    }) 

    projectilesClient.push({
      bullet2,
      x: playerX + 20,
      y: playerY + 50,
      timeLeft: 10,
      playerId: socket.id,
      damage: 0.5,
    }) 

    projectilesClient.push({
      angle,
      x: playerX + 20,
      y: playerY + 50,
      timeLeft: 10,
      playerId: socket.id,
      damage: 0.5,
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

function shootArcaneLancer () {
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
    timeLeft: 30,
    playerId: socket.id,
    damage: 5,
  }) 

  
  shooting = true;
  
  setTimeout(() => {
    shooting = false;
  }, 20);
  
  const interval = setInterval(() => {
      if (mainSkillCooldown > 30) {
          mainSkillCooldown = 0;
          recoil = 0
          clearInterval(interval);
      }
      mainSkillCooldown++;
      recoil += recoil > 9 ? 0 : 3;
  }, 20);
}

canvasLobby.addEventListener("mousedown", (e) => {
  clearInterval(shootInterval)
  if (fishing) return;
  mouseLeftPressed = true;
    if (shootingBlock === false) {
      if (myPlayer.weapon[0]) {
        if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {  
          // console.log(myPlayer?.weapon[0].name)
          if (myPlayer?.weapon[0].name.includes("arcane")) {
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
  
            else if (myPlayer?.weapon[0].name === "arcaneRepeaterInv") {
  
            shootArcaneRepeater()
            shootInterval = setInterval(() => {
              if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {
                shootArcaneRepeater()
              }
            }, 100)
            }
            else if (myPlayer?.weapon[0].name === "arcaneLancerInv") {
            shootArcaneLancer()
            shootInterval = setInterval(() => {
              if (mainSkillCooldown === 1 || mainSkillCooldown === 0) {
                shootArcaneLancer()
              }
            }, 100)
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
let playerSpriteWidth = humanSkin.width / 6;
let playerSpriteHeight = humanSkin.height / 6;
let playerWidth = humanSkin.width / 6;
let playerHeight = humanSkin.height / 6;
let playerZoomX = 291.6;
let playerZoomY = 291.6;
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
let scoreAvailable = false;

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

var textSpeed = 20;
let currentDialogTitle = ""
var currentDialog = [];  // This will hold the current dialog to display
let currentDialogParent = {};
var currentDialogIndex = 0;  // Keeps track of which paragraph we're on
var loopLen = 0;  // Character loop index
var isTyping = false;  // Flag to prevent advancing while typing

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
              const randomNumber = Math.floor(Math.random() * 7) + 1;
              const dialogsound = new Audio("./audios/voice" + randomNumber + ".wav");
              dialogsound.loop = false;
              dialogsound.volume = 0.15;
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
            console.log("repeating dialog")
        } else if (dialogOpened) {
          dialogOpened = false;
          containerChat.style.display = "none";
          // console.log("Dialog finished", currentDialogParent, currentDialog);

          if (currentDialogParent.dialogName === "quest") {
             
            let indexToDeliver = [];
            
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


            else if (myPlayer.questsOngoing.some(quest => quest.title === currentDialogParent.questName) && finishingQuest === false) {

              for (const item of myPlayer.inventory) {
                if (item.name === currentDialogParent.completionItem) {
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
  

            finishingQuest = false;
            
            
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

// // Increase text print speed on spacebar press (keydown)
// document.addEventListener('keydown', function(event) {
//     if (event.keyCode === 32) {
//         textSpeed = 5;  // Increase speed
//     }
// });

// // Reset text print speed on spacebar release (keyup)
// document.addEventListener('keyup', function(event) {
//     if (event.keyCode === 32) {
//         textSpeed = 50;  // Reset speed
//     }
// });

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
  if (dying) {return}
  score += timer.textContent
  clearInterval(timerInterval);
  socket.emit("score", score, currentLand);
}

function hideTimer() {
  clearInterval(timerInterval);
  timer.style.display = "none";
  timerInterval = null;
  seconds = 0;
  timer.textContent = "00:00";
}
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
  else if (format === "instant") {
    transitionInstant()
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

function transitionInstant() {
  if (transitionTimeout === false) {
    transitionTimeout = true;  
    
    const dynamicFunctionName = currentSelectedMap + "Loop";    
    
      changeMap(dynamicFunctionName);
      socket.emit("changeRoom", currentSelectedMap);
    
    
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
  
  suspense1.pause();
  suspense1.currentTime = 0;

  grasslandsEnviroment.pause();
  grasslandsEnviroment.currentTime = 0;
  
  restfield.pause();
  restfield.currentTime = 0;
 
  fightMusic1.pause();
  fightMusic1.currentTime = 0;
  
  towerSound.pause();
  towerSound.currentTime = 0;
  
  SokosBoss.pause();
  SokosBoss.currentTime = 0;

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
  // grasslandsLoop1.play();
  grasslandsEnviroment.play();
  console.log("playing lobby song")
  // lobbySong.play()
}

function restfieldSoundtrack () {
  restfield.play();
}

function grassLandsSoundtrack () {
  grasslandsLoop1.play();
  grasslandsEnviroment.play();
  // grassLandsSong.play()
}

function towerSoundSoundtrack () {
  towerSound.play();
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
        "type": "dialog",
        "name": "Deep Forestry Quest",
        "x": 1443.5,
        "y": 1974.5,
        "width": 546,
        "height": 273,
        "color": "rgb(179, 255, 213, 0)"
      },
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
      },
      {
        "type": "wall",
        "x": 2939,
        "y": 2743.5,
        "width": 214,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3010,
        "y": 2778.5,
        "width": 80,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3270,
        "y": 2940.5,
        "width": 180,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3287,
        "y": 2877.5,
        "width": 127,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: [
      {
      name: "purpleSlime",
      imgw: 31,
      imgh: 27,
      imgcw: 31,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 1,
      speedX: 2,
      speedY: 2,
      spawn: {
        x: 2000,
        y: 3200
      },
      w: 100,
      h: 100,
      currentStateName: "idle",
      currentState: null,
      attackInterval: true,
      states: [moveState],
      damaged: 0,
      health: 5,
      angle: 0,
      maxHealth: 10,
      baseSpawn: {
        x: 2000,
        y: 3200
      },
      spawnTimer: 10000,
      enemyStateInt: 2000,
      drop: "slimeGuts",
      dropRate: 20,
    },
    {
      name: "purpleSlime",
      imgw: 31,
      imgh: 27,
      imgcw: 31,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 1,
      speedX: 2,
      speedY: 2,
      spawn: {
        x: 2240.5,
        y: 3165.5
      },
      w: 100,
      h: 100,
      currentStateName: "idle",
      currentState: null,
      attackInterval: true,
      states: [moveState],
      damaged: 0,
      health: 5,
      angle: 0,
      maxHealth: 10,
      baseSpawn: {
        x: 2240.5,
        y: 3165.5
      },
      spawnTimer: 10000,
      enemyStateInt: 2000,
      drop: "slimeGuts",
      dropRate: 20,
    }
  ],
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
    colliders:  [
      {
        "type": "chest",
        "item": "stick",
        "x": 2528,
        "y": 2234.5,
        "width": 227,
        "height": 178,
        "color": "rgb(255, 255, 204, 0)"
      },
      {
        "type": "wall",
        "x": 2590,
        "y": 2267.5,
        "width": 85,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "craft",
        "x": 1726,
        "y": 1613.5,
        "width": 444,
        "height": 269,
        "color": "rgb(153, 102, 51, 0)"
      },
      {
        "type": "dialog",
        "name": "Fishing Quest",
        "x": 2106,
        "y": 2005.5,
        "width": 170,
        "height": 185,
        "color": "rgb(179, 255, 213, 0)"
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
      },
      {
        "type": "cook",
        "x": 302,
        "y": 1733.5,
        "width": 471,
        "height": 416,
        "color": "rgb(153, 255, 102, 0)"
      },
      {
        "type": "wall",
        "x": 507,
        "y": 1956.5,
        "width": 122,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -102,
        "y": 884.5,
        "width": 127,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -39,
        "y": 836.5,
        "width": 143,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 58,
        "y": 809.5,
        "width": 94,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 118,
        "y": 845.5,
        "width": 36,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -113,
        "y": 918.5,
        "width": 22,
        "height": 614,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 697,
        "y": 598.5,
        "width": 120,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 583,
        "y": 637.5,
        "width": 229,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 952,
        "y": 569.5,
        "width": 201,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1102,
        "y": 595.5,
        "width": 320,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1325,
        "y": 623.5,
        "width": 277,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1568,
        "y": 659.5,
        "width": 219,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1744,
        "y": 686.5,
        "width": 173,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2346,
        "y": 808.5,
        "width": 60,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2386,
        "y": 869.5,
        "width": 127,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2388,
        "y": 836.5,
        "width": 184,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2549,
        "y": 787.5,
        "width": 110,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2623,
        "y": 715.5,
        "width": 112,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4050,
        "y": 1080.5,
        "width": 37,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3981,
        "y": 990.5,
        "width": 89,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3952,
        "y": 913.5,
        "width": 67,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3910,
        "y": 888.5,
        "width": 108,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3877,
        "y": 872.5,
        "width": 85,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3855,
        "y": 827.5,
        "width": 40,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1821,
        "y": 1712.5,
        "width": 239,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1922,
        "y": 1754.5,
        "width": 70,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
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
        "x": 558.5,
        "y": 2749.5,
        "width": 22,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1686.5,
        "y": 3027.5,
        "width": 467,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1287,
        "y": 2991.5,
        "width": 152,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1268,
        "y": 2963.5,
        "width": 50,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 541,
        "y": 2766.5,
        "width": 177,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 606,
        "y": 2788.5,
        "width": 186,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 714,
        "y": 2899.5,
        "width": 327,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 923,
        "y": 2933.5,
        "width": 159,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1031,
        "y": 2985.5,
        "width": 119,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1125,
        "y": 2879.5,
        "width": 48,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2671,
        "y": 2896.5,
        "width": 222,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2779,
        "y": 2857.5,
        "width": 285,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2923,
        "y": 2789.5,
        "width": 313,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3108,
        "y": 2724.5,
        "width": 116,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2669,
        "y": 2843.5,
        "width": 281,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2855,
        "y": 2791.5,
        "width": 218,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3004,
        "y": 2759.5,
        "width": 168,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1505,
        "y": 854.5,
        "width": 452,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1475,
        "y": 849.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2306,
        "y": 905.5,
        "width": 150,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2399,
        "y": 945.5,
        "width": 298,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2570,
        "y": 1009.5,
        "width": 313,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2666,
        "y": 1057.5,
        "width": 178,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3041,
        "y": 1078.5,
        "width": 163,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2911,
        "y": 835.5,
        "width": 91,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2166,
        "y": 876.5,
        "width": 157,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2815,
        "y": 1016.5,
        "width": 132,
        "height": 161,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2967,
        "y": 834.5,
        "width": 62,
        "height": 72,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
      },

      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1052,
          y: 2679
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1052,
          y: 2679
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1552,
          y: 2700
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1552,
          y: 2700
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1352,
          y: 2800
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1352,
          y: 2800
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1952,
          y: 2900
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1952,
          y: 2900
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1852,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1852,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },


      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 660,
          y: 3000
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 660,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 960,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 960,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },

      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3052,
          y: 2679
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3052,
          y: 2679
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3552,
          y: 2700
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3552,
          y: 2700
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3352,
          y: 2800
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3352,
          y: 2800
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3952,
          y: 2900
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3952,
          y: 2900
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3852,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3852,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },


      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1660,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1660,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1960,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1960,
          y: 3300
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
    foregroundImageOpen: slimeForestPathFront,
    backgroundImageOpen: slimeForestPathOpen,
    playerPos: {
      x: 1935,
      y: 2750,
    },
    colliders: [
      {
        "type": "dialog",
        "name": "Mushroom Town Quest",
        "x": 2451.5,
        "y": 1984.5,
        "width": 186,
        "height": 147,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "wall",
        "condition": "slimeForestPath",
        "x": 2617,
        "y": 1885.5,
        "width": 309,
        "height": 511,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "condition": "slimeForestPath",
        "x": 2335.5,
        "y": 1950.5,
        "width": 144,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "chest",
        "item": "gemArcane",
        "x": 1994,
        "y": 1825.5,
        "width": 225,
        "height": 156,
        "color": "rgb(255, 255, 204, 0)"
      },
      {
        "type": "wall",
        "x": 2054,
        "y": 1513.5,
        "width": 75,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1489,
        "y": 1812.5,
        "width": 47,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2023,
        "y": 1808.5,
        "width": 64,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2216,
        "y": 1818.5,
        "width": 57,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2420,
        "y": 1774.5,
        "width": 79,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2612,
        "y": 1870.5,
        "width": 61,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2506,
        "y": 1629.5,
        "width": 53,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2655,
        "y": 1649.5,
        "width": 60,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2777,
        "y": 1812.5,
        "width": 41,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2862,
        "y": 1879.5,
        "width": 94,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3007,
        "y": 1939.5,
        "width": 83,
        "height": 453,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2771,
        "y": 2371.5,
        "width": 335,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676,
        "y": 2450.5,
        "width": 67,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2712,
        "y": 2373.5,
        "width": 77,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2529,
        "y": 2490.5,
        "width": 67,
        "height": 167,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2350,
        "y": 2518.5,
        "width": 90,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2299,
        "y": 2435.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2430,
        "y": 2593.5,
        "width": 140,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2562,
        "y": 2568.5,
        "width": 184,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2230,
        "y": 2637.5,
        "width": 62,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2146,
        "y": 2848.5,
        "width": 60,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2195,
        "y": 2996.5,
        "width": 55,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2311,
        "y": 2960.5,
        "width": 56,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2020,
        "y": 2965.5,
        "width": 66,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1888,
        "y": 3099.5,
        "width": 63,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1791,
        "y": 3028.5,
        "width": 48,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1653,
        "y": 3113.5,
        "width": 92,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1499,
        "y": 3020.5,
        "width": 50,
        "height": 166,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1419,
        "y": 2812.5,
        "width": 53,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1404,
        "y": 2565.5,
        "width": 75,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1269,
        "y": 2714.5,
        "width": 86,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1150,
        "y": 2818.5,
        "width": 55,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1412,
        "y": 2919.5,
        "width": 49,
        "height": 235,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1427,
        "y": 3112.5,
        "width": 96,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1519,
        "y": 3157.5,
        "width": 166,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1700,
        "y": 3191.5,
        "width": 234,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2068,
        "y": 3142.5,
        "width": 62,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1935,
        "y": 3214.5,
        "width": 170,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2163,
        "y": 3259.5,
        "width": 59,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2121,
        "y": 3206.5,
        "width": 99,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2209,
        "y": 3230.5,
        "width": 243,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2314,
        "y": 3062.5,
        "width": 50,
        "height": 195,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2469,
        "y": 2826.5,
        "width": 80,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2366,
        "y": 2973.5,
        "width": 115,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2440,
        "y": 2592.5,
        "width": 63,
        "height": 269,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3022,
        "y": 1757.5,
        "width": 41,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2940,
        "y": 1860.5,
        "width": 149,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3047,
        "y": 1879.5,
        "width": 31,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2701,
        "y": 1672.5,
        "width": 236,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2778,
        "y": 1701.5,
        "width": 41,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2811,
        "y": 1876.5,
        "width": 158,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2538,
        "y": 1638.5,
        "width": 156,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2257,
        "y": 1500.5,
        "width": 55,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2306,
        "y": 1702.5,
        "width": 65,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2435,
        "y": 1450.5,
        "width": 83,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2499,
        "y": 1539.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2346,
        "y": 1347.5,
        "width": 62,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2398,
        "y": 1421.5,
        "width": 59,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2271,
        "y": 1168.5,
        "width": 44,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2478,
        "y": 1230.5,
        "width": 45,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2380,
        "y": 1066.5,
        "width": 61,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2157,
        "y": 1309.5,
        "width": 65,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2432,
        "y": 1130.5,
        "width": 73,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2484,
        "y": 1272.5,
        "width": 50,
        "height": 201,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2133,
        "y": 1057.5,
        "width": 56,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2019,
        "y": 1229.5,
        "width": 47,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1948,
        "y": 1011.5,
        "width": 58,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2037,
        "y": 843.5,
        "width": 71,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2243,
        "y": 906.5,
        "width": 52,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2272,
        "y": 966.5,
        "width": 190,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2426,
        "y": 1012.5,
        "width": 31,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2093,
        "y": 895.5,
        "width": 167,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1891,
        "y": 799.5,
        "width": 67,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1942,
        "y": 860.5,
        "width": 132,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1818,
        "y": 1175.5,
        "width": 51,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1613,
        "y": 1124.5,
        "width": 88,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1474,
        "y": 1210.5,
        "width": 83,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1383,
        "y": 1072.5,
        "width": 45,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1522,
        "y": 955.5,
        "width": 53,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1619,
        "y": 847.5,
        "width": 49,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1758,
        "y": 958.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1744,
        "y": 741.5,
        "width": 49,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1775,
        "y": 793.5,
        "width": 163,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1629,
        "y": 777.5,
        "width": 148,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1650,
        "y": 791.5,
        "width": 20,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1417,
        "y": 840.5,
        "width": 63,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1467,
        "y": 874.5,
        "width": 163,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1246,
        "y": 927.5,
        "width": 58,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1273,
        "y": 921.5,
        "width": 166,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1119,
        "y": 1032.5,
        "width": 55,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1145,
        "y": 1038.5,
        "width": 174,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1267,
        "y": 977.5,
        "width": 33,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1215,
        "y": 1188.5,
        "width": 66,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1038,
        "y": 1226.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 1081.5,
        "width": 87,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 1356.5,
        "width": 62,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 966,
        "y": 1419.5,
        "width": 57,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 982,
        "y": 1273.5,
        "width": 73,
        "height": 165,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1125,
        "y": 1591.5,
        "width": 50,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 939,
        "y": 1481.5,
        "width": 43,
        "height": 192,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1257,
        "y": 1516.5,
        "width": 73,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1321,
        "y": 1677.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1408,
        "y": 2199.5,
        "width": 53,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 2166.5,
        "width": 55,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1154,
        "y": 2290.5,
        "width": 53,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1036,
        "y": 2413.5,
        "width": 62,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1212,
        "y": 2505.5,
        "width": 76,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1322,
        "y": 2383.5,
        "width": 63,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1512,
        "y": 2473.5,
        "width": 46,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088,
        "y": 2605.5,
        "width": 56,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 2497.5,
        "width": 57,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 2693.5,
        "width": 39,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1290,
        "y": 2951.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1199,
        "y": 2881.5,
        "width": 44,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1224,
        "y": 2955.5,
        "width": 91,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1336,
        "y": 3052.5,
        "width": 91,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "lobby",
        "x": 1402,
        "y": 2757.5,
        "width": 730,
        "height": 334,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1086,
        "y": 1810,
        "width": 77,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1155,
        "y": 1780,
        "width": 73,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1216,
        "y": 1880,
        "width": 61,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1289,
        "y": 1795,
        "width": 88,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 975,
        "y": 1773,
        "width": 58,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1042,
        "y": 1690,
        "width": 62,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 852,
        "y": 1830,
        "width": 70,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 729,
        "y": 1789,
        "width": 91,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 652,
        "y": 1855,
        "width": 65,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 547,
        "y": 1777,
        "width": 79,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 756,
        "y": 1550,
        "width": 66,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 411,
        "y": 1813,
        "width": 75,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 259,
        "y": 1777,
        "width": 81,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 167,
        "y": 1838,
        "width": 89,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 54,
        "y": 1894,
        "width": 71,
        "height": 198,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 70,
        "y": 2065,
        "width": 58,
        "height": 224,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 53,
        "y": 2277,
        "width": 146,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 171,
        "y": 2330,
        "width": 104,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 283,
        "y": 2245,
        "width": 78,
        "height": 186,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 260,
        "y": 2364,
        "width": 84,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 363,
        "y": 2309,
        "width": 131,
        "height": 166,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 433,
        "y": 2248,
        "width": 68,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 552,
        "y": 2165,
        "width": 56,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 453,
        "y": 2344,
        "width": 629,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 620,
        "y": 2265,
        "width": 583,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 795.5,
        "y": 2137,
        "width": 54,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 930.5,
        "y": 2109,
        "width": 47,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1064.5,
        "y": 2146,
        "width": 63,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1227.5,
        "y": 2193,
        "width": 202,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldPath",
        "x": 61,
        "y": 1729.5,
        "width": 426,
        "height": 746,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": -17,
        "y": 1822.5,
        "width": 199,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2074,
        "y": 1867.5,
        "width": 128,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2171,
        "y": 1913.5,
        "width": 100,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2246,
        "y": 1964.5,
        "width": 97,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2465,
        "y": 1976.5,
        "width": 109,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2530,
        "y": 1905.5,
        "width": 97,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2277,
        "y": 1888.5,
        "width": 258,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2463,
        "y": 1915.5,
        "width": 22,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2289,
        "y": 1898.5,
        "width": 58,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1208,
        "y": 1833.5,
        "width": 167,
        "height": 146,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "mushroomForest",
        "x": 2853.5,
        "y": 1993,
        "width": 188,
        "height": 384,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "grasslandsTower",
        "x": 2347.5,
        "y": 1933,
        "width": 119,
        "height": 65,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "islandOne",
        "x": 1329.5,
        "y": 1155,
        "width": 809,
        "height": 321,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },
  
  grasslandsTower: {
    areaName: "GRASSLANDS TOWER",
    areaSounds: towerSoundSoundtrack,
    backgroundImage: grasslandsTower,
    foregroundImage: grasslandsTowerFront,
    playerPos: {
      x: 1995,
      y: 3400,
    },
    colliders: [
      {
        "type": "wall",
        "x": 1685.5,
        "y": 3306,
        "width": 44,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1783.5,
        "y": 3369,
        "width": 45,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1724.5,
        "y": 3377,
        "width": 73,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1709.5,
        "y": 3353,
        "width": 65,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1629.5,
        "y": 3180,
        "width": 66,
        "height": 160,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1656.5,
        "y": 3049,
        "width": 450,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1839.5,
        "y": 3139,
        "width": 119,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1768.5,
        "y": 3068,
        "width": 15,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2093.5,
        "y": 3065,
        "width": 91,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2117.5,
        "y": 3097,
        "width": 147,
        "height": 323,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1837.5,
        "y": 3385,
        "width": 154,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1790.5,
        "y": 3397,
        "width": 95,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2036.5,
        "y": 3376,
        "width": 103,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1986.5,
        "y": 3382,
        "width": 75,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2067.5,
        "y": 3333,
        "width": 83,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2036.5,
        "y": 3358,
        "width": 61,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1999.5,
        "y": 3359,
        "width": 61,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2079.5,
        "y": 3298,
        "width": 69,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1607.5,
        "y": 3119,
        "width": 95,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": 1724.5,
        "y": 3315,
        "width": 96,
        "height": 87,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },
  
  mushroomForest: {
    areaName: "MOOSHROOM TRIAL",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: mushroomForest,
    foregroundImage: mushroomForestFront,
    playerPos: {
      x: 700,
      y: 2000,
    },
    colliders: [
      {
        "type": "scoreBoard",
        "x": 2434,
        "y": 834.5,
        "width": 296,
        "height": 250,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 614,
        "y": 1577.5,
        "width": 45,
        "height": 216,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 655,
        "y": 1661.5,
        "width": 22,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 620,
        "y": 1585.5,
        "width": 79,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": -58,
        "y": 1417.5,
        "width": 486,
        "height": 797,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 678,
        "y": 1527.5,
        "width": 57,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 728,
        "y": 1486.5,
        "width": 72,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 766,
        "y": 1427.5,
        "width": 44,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 782,
        "y": 1389.5,
        "width": 96,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 859,
        "y": 1357.5,
        "width": 89,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 941,
        "y": 1278.5,
        "width": 72,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 986,
        "y": 1247.5,
        "width": 104,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1062,
        "y": 1205.5,
        "width": 90,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1086,
        "y": 1128.5,
        "width": 128,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1168,
        "y": 1031.5,
        "width": 44,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1174,
        "y": 985.5,
        "width": 136,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1251,
        "y": 947.5,
        "width": 163,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1382,
        "y": 788.5,
        "width": 36,
        "height": 168,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1400,
        "y": 732.5,
        "width": 242,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1616,
        "y": 734.5,
        "width": 44,
        "height": 154,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1633,
        "y": 856.5,
        "width": 285,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1892,
        "y": 760.5,
        "width": 42,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1917,
        "y": 773.5,
        "width": 279,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2155,
        "y": 772.5,
        "width": 72,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2347,
        "y": 773.5,
        "width": 79,
        "height": 163,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2186,
        "y": 778.5,
        "width": 231,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2404,
        "y": 788.5,
        "width": 91,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2469,
        "y": 816.5,
        "width": 54,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2629,
        "y": 896.5,
        "width": 24,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2627,
        "y": 740.5,
        "width": 43,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2399,
        "y": 712.5,
        "width": 267,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2485,
        "y": 762.5,
        "width": 169,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3454,
        "y": 1744.5,
        "width": 48,
        "height": 255,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3406,
        "y": 1962.5,
        "width": 78,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3371,
        "y": 2005.5,
        "width": 101,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3359,
        "y": 2034.5,
        "width": 45,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3356,
        "y": 2111.5,
        "width": 38,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3301,
        "y": 2167.5,
        "width": 105,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3294,
        "y": 2219.5,
        "width": 163,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3298,
        "y": 2237.5,
        "width": 143,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3342,
        "y": 2263.5,
        "width": 27,
        "height": 179,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3302,
        "y": 2425.5,
        "width": 62,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3270,
        "y": 2477.5,
        "width": 42,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3234,
        "y": 2538.5,
        "width": 74,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3215,
        "y": 2560.5,
        "width": 36,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3173,
        "y": 2652.5,
        "width": 65,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3113,
        "y": 2665.5,
        "width": 88,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3039,
        "y": 2719.5,
        "width": 139,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2904,
        "y": 2765.5,
        "width": 190,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2798,
        "y": 2800.5,
        "width": 174,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2659,
        "y": 2826.5,
        "width": 209,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2504,
        "y": 2829.5,
        "width": 242,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2181,
        "y": 2839.5,
        "width": 376,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1999,
        "y": 2832.5,
        "width": 273,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1956,
        "y": 2761.5,
        "width": 87,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1776,
        "y": 2738.5,
        "width": 209,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1621,
        "y": 2671.5,
        "width": 206,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1452,
        "y": 2652.5,
        "width": 221,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1325,
        "y": 2619.5,
        "width": 165,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1313,
        "y": 2546.5,
        "width": 46,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1094,
        "y": 2486.5,
        "width": 254,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1038,
        "y": 2436.5,
        "width": 123,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 918,
        "y": 2388.5,
        "width": 179,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 829,
        "y": 2340.5,
        "width": 127,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 787,
        "y": 2285.5,
        "width": 64,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 674,
        "y": 2248.5,
        "width": 140,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 601,
        "y": 2199.5,
        "width": 96,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 589,
        "y": 2130.5,
        "width": 44,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 494,
        "y": 2094.5,
        "width": 113,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2625,
        "y": 798.5,
        "width": 159,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2717,
        "y": 828.5,
        "width": 138,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2811,
        "y": 869.5,
        "width": 63,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2859,
        "y": 942.5,
        "width": 84,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2921,
        "y": 982.5,
        "width": 114,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3023,
        "y": 1033.5,
        "width": 106,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3067,
        "y": 1045.5,
        "width": 78,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3126,
        "y": 1149.5,
        "width": 111,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3217,
        "y": 1175.5,
        "width": 25,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3178,
        "y": 1152.5,
        "width": 26,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3235,
        "y": 1197.5,
        "width": 121,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3320,
        "y": 1218.5,
        "width": 50,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3363,
        "y": 1281.5,
        "width": 60,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3241,
        "y": 1212.5,
        "width": 104,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3359,
        "y": 1302.5,
        "width": 79,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3411,
        "y": 1410.5,
        "width": 79,
        "height": 187,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3445,
        "y": 1553.5,
        "width": 51,
        "height": 296,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 632,
        "y": 1724.5,
        "width": 58,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 943,
        "y": 1340.5,
        "width": 65,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 896,
        "y": 1297.5,
        "width": 67,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 830,
        "y": 1363.5,
        "width": 70,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 865,
        "y": 1336.5,
        "width": 70,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1017,
        "y": 1213.5,
        "width": 89,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1061,
        "y": 1176.5,
        "width": 80,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1104,
        "y": 1065.5,
        "width": 85,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1187,
        "y": 946.5,
        "width": 108,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1281,
        "y": 810.5,
        "width": 108,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1265,
        "y": 903.5,
        "width": 69,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1513,
        "y": 693.5,
        "width": 158,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1520,
        "y": 682.5,
        "width": 980,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2860,
        "y": 898.5,
        "width": 69,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2938,
        "y": 958.5,
        "width": 63,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3483,
        "y": 1948.5,
        "width": 174,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3616,
        "y": 1940.5,
        "width": 150,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3324,
        "y": 2377.5,
        "width": 370,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3656,
        "y": 2293.5,
        "width": 67,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3712,
        "y": 2228.5,
        "width": 126,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3804,
        "y": 2144.5,
        "width": 65,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3736,
        "y": 1931.5,
        "width": 113,
        "height": 154,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3812,
        "y": 2040.5,
        "width": 68,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2311,
        "y": 2339.5,
        "width": 106,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2379,
        "y": 2388.5,
        "width": 152,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2387,
        "y": 2331.5,
        "width": 211,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2514,
        "y": 2285.5,
        "width": 234,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2683,
        "y": 2255.5,
        "width": 190,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2813,
        "y": 2213.5,
        "width": 55,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 1515.5,
        "width": 500,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 170,
        "y": 1362.5,
        "width": 395,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 303,
        "y": 1424.5,
        "width": 98,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -112,
        "y": 1607.5,
        "width": 208,
        "height": 508,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 30,
        "y": 1913.5,
        "width": 138,
        "height": 336,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 100,
        "y": 2090.5,
        "width": 208,
        "height": 194,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 217,
        "y": 2176.5,
        "width": 327,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 594,
        "y": 1245.5,
        "width": 83,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 685,
        "y": 1120.5,
        "width": 55,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 896,
        "y": 931.5,
        "width": 76,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 802,
        "y": 1235.5,
        "width": 54,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1094,
        "y": 694.5,
        "width": 76,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1018,
        "y": 999.5,
        "width": 44,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1433,
        "y": 637.5,
        "width": 204,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1546,
        "y": 589.5,
        "width": 717,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1783,
        "y": 495.5,
        "width": 463,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2208,
        "y": 588.5,
        "width": 214,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2385,
        "y": 622.5,
        "width": 151,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2611,
        "y": 471.5,
        "width": 82,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2826,
        "y": 698.5,
        "width": 88,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2997,
        "y": 668.5,
        "width": 71,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3209,
        "y": 706.5,
        "width": 61,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3095,
        "y": 823.5,
        "width": 78,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3420,
        "y": 1024.5,
        "width": 47,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3335,
        "y": 823.5,
        "width": 73,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3459,
        "y": 804.5,
        "width": 54,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3603,
        "y": 1066.5,
        "width": 83,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3552,
        "y": 950.5,
        "width": 50,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3724,
        "y": 1325.5,
        "width": 59,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3861,
        "y": 1324.5,
        "width": 70,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2822,
        "y": -200,
        "width": 889,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3383,
        "y": -114,
        "width": 347,
        "height": 162,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3601,
        "y": 5,
        "width": 580,
        "height": 210,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4050,
        "y": 124,
        "width": 110,
        "height": 3691.5,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3879,
        "y": 2437.5,
        "width": 74,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3623,
        "y": 2591.5,
        "width": 67,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3595,
        "y": 2846.5,
        "width": 54,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1192,
        "y": 3954,
        "width": 2952,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4054,
        "y": 3744,
        "width": 73,
        "height": 258,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1986,
        "y": 3860,
        "width": 85,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2050,
        "y": 3559,
        "width": 54,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 981,
        "y": 3808,
        "width": 243,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 879,
        "y": 3776.5,
        "width": 186,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 625,
        "y": 3669.5,
        "width": 314,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 545,
        "y": 3569.5,
        "width": 149,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 443,
        "y": 3501.5,
        "width": 163,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 338,
        "y": 3443.5,
        "width": 158,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -43,
        "y": 3432.5,
        "width": 441,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 3196.5,
        "width": 85,
        "height": 285,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -96,
        "y": 2067.5,
        "width": 52,
        "height": 1223,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "chest",
        "item": "mushroomTrial",
        "x": 2215,
        "y": 850.5,
        "width": 180,
        "height": 80,
        "color": "rgb(255, 255, 204, 0.0)"
      },
      {
        "type": "wall",
        "x": 2245,
        "y": 827.5,
        "width": 103,
        "height": 61,
        "color": "rgb(0, 0, 0, 0.0)"
      }
    ],
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1825,
          y: 1158
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
          x: 1825,
          y: 1158
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 2577,
          y: 1128
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
          x: 2577,
          y: 1128
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 2842,
          y: 1705
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
          x: 2842,
          y: 1705
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1474,
          y: 1707
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
          x: 1474,
          y: 1707
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1900,
          y: 2125
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
          x: 1900,
          y: 2125
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 2580,
          y: 2048
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
          x: 2580,
          y: 2048
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
      },
      {
        name: "mooshroomBossRed",
        isBoss: true,
        imgw: 147,
        imgh: 175,
        imgcw: 147,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 5,
        xp: 1000,
        speedX: 0,
        speedY: 0,
        spawn: {
          x: 1900,
          y: 1100
        },
        w: 550,
        h: 550,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [lazerMooshState, attackCircleMooshBossState],
        damaged: 0,
        health: 100,
        angle: 0,
        maxHealth: 100,
        baseSpawn: {
          x: 1900,
          y: 1100
        },
        spawnTimer: null,
        enemyStateInt: 5000,
        active: false,
      },
    ]
  },

  restfieldPath: {
    areaName: "RESTFIELD FOREST",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restfieldPath,
    foregroundImage: restfieldPathFront,
    backgroundImageOpen: restfieldPathOpen,
    foregroundImageOpen: restfieldPathFrontOpen,
    
    playerPos: {
      x: 3900,
      y: 3850,
    },
    colliders: [
      {
        "type": "dialog",
        "name": "A locked door Quest",
        "x": 1036.5,
        "y": 1697.5,
        "width": 323,
        "height": 251,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": 3752,
        "y": 3554,
        "width": 426,
        "height": 330,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 3103,
        "y": 3948,
        "width": 169,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2764,
        "y": 3981,
        "width": 73,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2675,
        "y": 3945,
        "width": 114,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 813,
        "y": 4078,
        "width": 1712,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 768,
        "y": 3913,
        "width": 150,
        "height": 190,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 695,
        "y": 3790,
        "width": 136,
        "height": 176,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 666,
        "y": 3715,
        "width": 79,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 289,
        "y": 3780,
        "width": 427,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 93,
        "y": 3715,
        "width": 207,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -74,
        "y": 3647.5,
        "width": 195,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -83,
        "y": 3505.5,
        "width": 59,
        "height": 201,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -95,
        "y": 3345.5,
        "width": 51,
        "height": 197,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -109,
        "y": 3211.5,
        "width": 97,
        "height": 163,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -109,
        "y": 3071.5,
        "width": 48,
        "height": 165,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -112,
        "y": 2460,
        "width": 37,
        "height": 638,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -107,
        "y": 2522,
        "width": 104,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -103,
        "y": 2075,
        "width": 36,
        "height": 410,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -112,
        "y": 1841,
        "width": 40,
        "height": 263,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -111,
        "y": 1635,
        "width": 34,
        "height": 247,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -110,
        "y": 1664,
        "width": 712,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1020,
        "y": 1597,
        "width": 2894,
        "height": 194,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3717,
        "y": 1938.5,
        "width": 48,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3829,
        "y": 1838.5,
        "width": 42,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3877,
        "y": 1895.5,
        "width": 64,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3863,
        "y": 1751.5,
        "width": 279,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4032,
        "y": 1879.5,
        "width": 46,
        "height": 283,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4046,
        "y": 2136.5,
        "width": 96,
        "height": 606,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3944,
        "y": 2490.5,
        "width": 145,
        "height": 154,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3960,
        "y": 2740.5,
        "width": 90,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4067,
        "y": 2800.5,
        "width": 81,
        "height": 688,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3837,
        "y": 3288.5,
        "width": 53,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4021,
        "y": 3234.5,
        "width": 40,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3947,
        "y": 3035.5,
        "width": 158,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3940,
        "y": 3182.5,
        "width": 66,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3273,
        "y": 3247.5,
        "width": 62,
        "height": 168,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3638,
        "y": 3255.5,
        "width": 54,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2805,
        "y": 3030.5,
        "width": 28,
        "height": 172,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2797,
        "y": 2639.5,
        "width": 34,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1860,
        "y": 2781.5,
        "width": 40,
        "height": 169,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1857,
        "y": 2395.5,
        "width": 46,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1081,
        "y": 2146.5,
        "width": 36,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 665,
        "y": 2152.5,
        "width": 35,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 310,
        "y": 2700.5,
        "width": 72,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1680,
        "y": 3447.5,
        "width": 82,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1537,
        "y": 3450.5,
        "width": 34,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1518,
        "y": 3463.5,
        "width": 32,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 379,
        "y": 2684.5,
        "width": 57,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 227,
        "y": 2769.5,
        "width": 60,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3501,
        "y": 2119.5,
        "width": 113,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1349,
        "y": 1776.5,
        "width": 101,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 1294.5,
        "width": 26,
        "height": 277,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -106,
        "y": 1044.5,
        "width": 26,
        "height": 277,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 802.5,
        "width": 24,
        "height": 261,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -98,
        "y": 683.5,
        "width": 14,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -44,
        "y": 600.5,
        "width": 52,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -84,
        "y": 654.5,
        "width": 55,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 131,
        "y": 657.5,
        "width": 64,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 242,
        "y": 618.5,
        "width": 54,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 395,
        "y": 668.5,
        "width": 91,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 315,
        "y": 557.5,
        "width": 51,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -14,
        "y": 550.5,
        "width": 89,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -105,
        "y": 289,
        "width": 62,
        "height": 386.5,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -111,
        "y": -54,
        "width": 43,
        "height": 401,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -30,
        "y": 128,
        "width": 47,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 73,
        "y": 217,
        "width": 63,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -80,
        "y": -7,
        "width": 60,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -106,
        "y": -268,
        "width": 70,
        "height": 316,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -88,
        "y": -261,
        "width": 1970,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1211,
        "y": -246,
        "width": 79,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1397,
        "y": -247,
        "width": 67,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1497,
        "y": -126,
        "width": 55,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1604,
        "y": -168,
        "width": 51,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1655,
        "y": -81,
        "width": 68,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1841,
        "y": -184,
        "width": 62,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1356,
        "y": -246,
        "width": 563,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1757,
        "y": -170,
        "width": 64,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2084,
        "y": -79,
        "width": 63,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1995,
        "y": -177,
        "width": 91,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1908,
        "y": -179,
        "width": 145,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1956,
        "y": -165,
        "width": 2083,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2953,
        "y": -143,
        "width": 581,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3120,
        "y": -84,
        "width": 324,
        "height": 153,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3318,
        "y": 26,
        "width": 145,
        "height": 175,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3421,
        "y": 155,
        "width": 464,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3344,
        "y": 157.5,
        "width": 68,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3816,
        "y": 163.5,
        "width": 104,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3896,
        "y": 271.5,
        "width": 259,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4122,
        "y": 283.5,
        "width": 40,
        "height": 685,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4024,
        "y": 850.5,
        "width": 45,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4015,
        "y": 625.5,
        "width": 63,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3901,
        "y": 586.5,
        "width": 52,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3717,
        "y": 639.5,
        "width": 66,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3608,
        "y": 592.5,
        "width": 58,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3413,
        "y": 645.5,
        "width": 91,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3551,
        "y": 531.5,
        "width": 55,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3815,
        "y": 528.5,
        "width": 76,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4014,
        "y": 1078.5,
        "width": 72,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4083,
        "y": 876.5,
        "width": 87,
        "height": 602,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4006,
        "y": 1354.5,
        "width": 112,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3930,
        "y": 1437.5,
        "width": 164,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3835,
        "y": 1547.5,
        "width": 212,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4011,
        "y": 673.5,
        "width": 65,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3837,
        "y": 255.5,
        "width": 72,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1993,
        "y": 575.5,
        "width": 118,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2488,
        "y": -115,
        "width": 102,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2537,
        "y": -15,
        "width": 131,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2575,
        "y": -142,
        "width": 166,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2684,
        "y": -95,
        "width": 163,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2912,
        "y": -110,
        "width": 166,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2968,
        "y": -79,
        "width": 104,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2136,
        "y": 550.5,
        "width": 20,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2092,
        "y": 535.5,
        "width": 42,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1808,
        "y": 443.5,
        "width": 32,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1798,
        "y": 465.5,
        "width": 14,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3299,
        "y": 2187.5,
        "width": 25,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3293,
        "y": 2211.5,
        "width": 22,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3629,
        "y": 2106.5,
        "width": 16,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3637,
        "y": 2139.5,
        "width": 27,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restFiledTown",
        "x": 663,
        "y": -273,
        "width": 501,
        "height": 258,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "condition": "restfieldPath",
        "x": 606,
        "y": 1601.5,
        "width": 517,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2498,
        "y": 4055,
        "width": 1577,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4086,
        "y": 3413.5,
        "width": 69,
        "height": 661,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4018,
        "y": 4029.5,
        "width": 111,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1063,
        "y": 817.5,
        "width": 19,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 691,
        "y": 584.5,
        "width": 28,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 317.5,
        "width": 36,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 658,
        "y": 15,
        "width": 57,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: []
  },

  restfieldTownCemetery: {
    areaName: "RESTFIELD CEMETERY",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restfieldTownCemetery,
    foregroundImage: restfieldTownCemeteryFront,
    
    playerPos: {
      x: 3770,
      y: 2500,
    },
    colliders: [
      {
        "type": "wall",
        "x": 2187.5,
        "y": 1886,
        "width": 63,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1765.5,
        "y": 1867,
        "width": 54,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1925.5,
        "y": 1571,
        "width": 196,
        "height": 191,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2249.5,
        "y": 1459,
        "width": 35,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1765.5,
        "y": 1459,
        "width": 25,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1561.5,
        "y": 1487,
        "width": 55,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1019.5,
        "y": 1492,
        "width": 369,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1000.5,
        "y": 1123,
        "width": 640,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 949.5,
        "y": 1006,
        "width": 2130,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2932.5,
        "y": 1072,
        "width": 40,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2433.5,
        "y": 1202,
        "width": 519,
        "height": 149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1807.5,
        "y": 1127,
        "width": 421,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2443.5,
        "y": 1495,
        "width": 636,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2443.5,
        "y": 1962,
        "width": 244,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2848.5,
        "y": 1962,
        "width": 78,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2522.5,
        "y": 2147,
        "width": 108,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2786.5,
        "y": 2153,
        "width": 211,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2475.5,
        "y": 2336,
        "width": 558,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2537.5,
        "y": 2504,
        "width": 326,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3034.5,
        "y": 1004,
        "width": 50,
        "height": 1697,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 987.5,
        "y": 1002,
        "width": 120,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 953.5,
        "y": 1005,
        "width": 54,
        "height": 1693,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1105.5,
        "y": 2690,
        "width": 382,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1320.5,
        "y": 2756,
        "width": 60,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 667.5,
        "y": 3192,
        "width": 135,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 818.5,
        "y": 3169,
        "width": 88,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1160.5,
        "y": 2470,
        "width": 81,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1416.5,
        "y": 2476,
        "width": 78,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088.5,
        "y": 2303,
        "width": 598,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1137.5,
        "y": 2090,
        "width": 478,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088.5,
        "y": 1909,
        "width": 63,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1323.5,
        "y": 1915,
        "width": 226,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -1,
        "y": 2270,
        "width": 224,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -108,
        "y": 2346,
        "width": 193,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -105,
        "y": 2419,
        "width": 38,
        "height": 264,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -98,
        "y": 2615,
        "width": 187,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -58,
        "y": 2561,
        "width": 143,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -85,
        "y": 2867,
        "width": 258,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -82,
        "y": 2665,
        "width": 51,
        "height": 246,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 938.5,
        "y": 2640,
        "width": 925,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 41,
        "y": 2923,
        "width": 65,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 44,
        "y": 3015,
        "width": 63,
        "height": 371,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 83,
        "y": 3157,
        "width": 107,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 0,
        "y": 3333,
        "width": 105,
        "height": 371,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 72,
        "y": 3490,
        "width": 238,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 38,
        "y": 3658,
        "width": 68,
        "height": 332,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 85,
        "y": 3765,
        "width": 106,
        "height": 293,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 130,
        "y": 3948,
        "width": 395,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 389,
        "y": 3940,
        "width": 786.5,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 849.5,
        "y": 3833,
        "width": 79,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 761,
        "y": 3839,
        "width": 60,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1060.5,
        "y": 4013,
        "width": 304,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1293.5,
        "y": 4077,
        "width": 611,
        "height": 25,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1513.5,
        "y": 3957,
        "width": 53,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1644.5,
        "y": 3983,
        "width": 55,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1547.5,
        "y": 4007,
        "width": 144,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2154.5,
        "y": 3892,
        "width": 55,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2149.5,
        "y": 3923,
        "width": 260,
        "height": 172,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2329.5,
        "y": 3951,
        "width": 999,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2544.5,
        "y": 3823,
        "width": 72,
        "height": 149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676.5,
        "y": 3846,
        "width": 57,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2825.5,
        "y": 3817,
        "width": 90,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2904.5,
        "y": 3877,
        "width": 233,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3131.5,
        "y": 3883,
        "width": 449,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3383.5,
        "y": 3770,
        "width": 59,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3234.5,
        "y": 3808,
        "width": 210,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3515,
        "y": 3919,
        "width": 152,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3647,
        "y": 3959,
        "width": 127,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3757,
        "y": 4003,
        "width": 383,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3845,
        "y": 3770,
        "width": 56,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3824,
        "y": 3944,
        "width": 54,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3840,
        "y": 3841,
        "width": 312,
        "height": 175,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4029,
        "y": 3596,
        "width": 76,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4048,
        "y": 3248,
        "width": 104,
        "height": 618,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3999,
        "y": 2604,
        "width": 187,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4046,
        "y": 2682,
        "width": 119,
        "height": 581,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4034,
        "y": 2133,
        "width": 131,
        "height": 294,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3939,
        "y": 1644,
        "width": 234,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4033,
        "y": 1693,
        "width": 136,
        "height": 466,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3792,
        "y": 1424,
        "width": 388,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4098,
        "y": 1475,
        "width": 74,
        "height": 212,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3826,
        "y": 1304,
        "width": 59,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3847,
        "y": 1240,
        "width": 311,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3943,
        "y": 1167,
        "width": 105,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4016,
        "y": 1096,
        "width": 140,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4002,
        "y": 633,
        "width": 166,
        "height": 513,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3976,
        "y": 620,
        "width": 53,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3724,
        "y": 426,
        "width": 454,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3968,
        "y": 469,
        "width": 223,
        "height": 205,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3793,
        "y": 492,
        "width": 79,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3568,
        "y": 633,
        "width": 113,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3590,
        "y": 248,
        "width": 568,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3777,
        "y": 300,
        "width": 106,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3390,
        "y": 268,
        "width": 317,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2966,
        "y": 132,
        "width": 780,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3406,
        "y": 182,
        "width": 80,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2965.5,
        "y": 177,
        "width": 72,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2786.5,
        "y": 114,
        "width": 75,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2843.5,
        "y": 132,
        "width": 191,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2595.5,
        "y": 62,
        "width": 66,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2629.5,
        "y": 75,
        "width": 204,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2516.5,
        "y": -48,
        "width": 81,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2550.5,
        "y": -31,
        "width": 232,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1856.5,
        "y": -221,
        "width": 216,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2026.5,
        "y": -162,
        "width": 133,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2324.5,
        "y": -157,
        "width": 115,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2399.5,
        "y": -93,
        "width": 292,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2110.5,
        "y": -74,
        "width": 279,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1774.5,
        "y": -116,
        "width": 153,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1695.5,
        "y": -31,
        "width": 179,
        "height": 207,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1140.5,
        "y": 58,
        "width": 603,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1530.5,
        "y": 138,
        "width": 69,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1351.5,
        "y": 121,
        "width": 58,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 864.5,
        "y": 151,
        "width": 445,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1104.5,
        "y": 194,
        "width": 73,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 592.5,
        "y": 140,
        "width": 319,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 673.5,
        "y": 165,
        "width": 96,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 506.5,
        "y": 73,
        "width": 80,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 564.5,
        "y": 156,
        "width": 85,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 369.5,
        "y": 106,
        "width": 211,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 306,
        "y": 69,
        "width": 80,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 99,
        "y": 332,
        "width": 262,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 191,
        "y": 372,
        "width": 118,
        "height": 184,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 22,
        "y": 89,
        "width": 320,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 97,
        "y": 132,
        "width": 135,
        "height": 237,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -14,
        "y": 460,
        "width": 240,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -46,
        "y": 512,
        "width": 130,
        "height": 216,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -26,
        "y": 700,
        "width": 99,
        "height": 312,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 24,
        "y": 923,
        "width": 187,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 46,
        "y": 983,
        "width": 105,
        "height": 321,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 133,
        "y": 1033,
        "width": 65,
        "height": 300,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 187,
        "y": 1243,
        "width": 88,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 253,
        "y": 1265,
        "width": 80,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 150,
        "y": 1344,
        "width": 145,
        "height": 260,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 240,
        "y": 1496,
        "width": 154,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 309,
        "y": 1532,
        "width": 184,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 379,
        "y": 1587,
        "width": 56,
        "height": 167,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 152,
        "y": 1565,
        "width": 110,
        "height": 180,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 134,
        "y": 1719,
        "width": 77,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -39,
        "y": 1732,
        "width": 204,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -27,
        "y": 1816,
        "width": 88,
        "height": 281,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -19,
        "y": 2045,
        "width": 294,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 14,
        "y": 2122,
        "width": 203,
        "height": 212,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 704.5,
        "y": 578,
        "width": 94,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2165.5,
        "y": 278,
        "width": 119,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4092,
        "y": 2314,
        "width": 89,
        "height": 373,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restFiledTown",
        "x": 3919,
        "y": 2301,
        "width": 232,
        "height": 440,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 2185.5,
        "y": 2619,
        "width": 899,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2219.5,
        "y": 3023,
        "width": 39,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1743.5,
        "y": 3020,
        "width": 29,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1726.5,
        "y": 3624,
        "width": 35,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2223.5,
        "y": 3641,
        "width": 48,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2840.5,
        "y": 3127,
        "width": 32,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2846.5,
        "y": 3472,
        "width": 30,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3385,
        "y": 2865,
        "width": 54,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3805,
        "y": 2868,
        "width": 47,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1833,
        "y": 4078,
        "width": 395,
        "height": 11,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldMall",
        "x": 1868,
        "y": 3902,
        "width": 325,
        "height": 193,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1115,
        "y": 1298.5,
        "width": 459,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: [
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 1088.5,
          y: 2979
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1088.5,
          y: 2979
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 190,
          y: 2400
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 190,
          y: 2400
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 267,
          y: 1755
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 267,
          y: 1755
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2378.5,
          y: 2812.5
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2378.5,
          y: 2812.5
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 310.5,
          y: 868
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 310.5,
          y: 868
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 425,
          y: 267
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 425,
          y: 267
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 1460.5,
          y: 504
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1460.5,
          y: 504
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2111.5,
          y: 730
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2111.5,
          y: 730
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2329.5,
          y: -4
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2329.5,
          y: -4
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2994.5,
          y: 540
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2994.5,
          y: 540
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 3450,
          y: 1243
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3450,
          y: 1243
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 3363,
          y: 1652
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3363,
          y: 1652
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
    ]
  },

  restFiledTown: {
    areaName: "RESTFIELD TOWN",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restFiledTown,
    foregroundImage: restFiledTownFront,
    
    playerPos: {
      x: 2155,
      y: 3888,
    },
    colliders: [
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldPath",
        "x": 1830,
        "y": 3976,
        "width": 364,
        "height": 144,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldTownCemetery",
        "x": -111,
        "y": 2080.5,
        "width": 235,
        "height": 228,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldTrial",
        "x": 1689.5,
        "y": -237,
        "width": 421,
        "height": 300,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1817,
        "y": 3620,
        "width": 38,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2129,
        "y": 3794,
        "width": 28,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2138,
        "y": 3367.5,
        "width": 14,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1835,
        "y": 3135.5,
        "width": 39,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2137,
        "y": 2872.5,
        "width": 17,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1836,
        "y": 2657.5,
        "width": 36,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1799,
        "y": 2365.5,
        "width": 25,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2180,
        "y": 2354.5,
        "width": 42,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1742,
        "y": 1995.5,
        "width": 426,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1896,
        "y": 2086.5,
        "width": 49,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2138,
        "y": 2028.5,
        "width": 60,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2733,
        "y": 2038.5,
        "width": 104,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2768,
        "y": 2003.5,
        "width": 60,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2487,
        "y": 1832.5,
        "width": 204,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2597,
        "y": 1874.5,
        "width": 89,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2681,
        "y": 1906.5,
        "width": 50,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2329,
        "y": 1750.5,
        "width": 190,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2425,
        "y": 1791.5,
        "width": 78,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2473,
        "y": 1768.5,
        "width": 163,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2630,
        "y": 1812.5,
        "width": 64,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3250,
        "y": 1618.5,
        "width": 114,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3542,
        "y": 1521.5,
        "width": 30,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3566,
        "y": 1555.5,
        "width": 21,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3235,
        "y": 1561.5,
        "width": 35,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3204,
        "y": 1600.5,
        "width": 47,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1669,
        "y": 4043,
        "width": 2419,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2208,
        "y": 3976,
        "width": 223,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2403,
        "y": 3994,
        "width": 299,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2459,
        "y": 3898,
        "width": 103,
        "height": 142,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2557,
        "y": 3922,
        "width": 142,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2716,
        "y": 3846,
        "width": 89,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676,
        "y": 3913,
        "width": 93,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2819,
        "y": 3879,
        "width": 129,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2761,
        "y": 3904,
        "width": 92,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2951,
        "y": 3912,
        "width": 58,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2996,
        "y": 3946,
        "width": 213,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3206,
        "y": 3964,
        "width": 406,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3260,
        "y": 3758,
        "width": 95,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3249,
        "y": 3855,
        "width": 118,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3335,
        "y": 3813,
        "width": 186,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3453,
        "y": 3838,
        "width": 592,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3978,
        "y": -261,
        "width": 121,
        "height": 4145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3157,
        "y": 3558,
        "width": 389,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3418,
        "y": 3531,
        "width": 538,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3636,
        "y": 3572,
        "width": 352,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3782,
        "y": 3630,
        "width": 214,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3910,
        "y": 3655,
        "width": 89,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2767,
        "y": 3407.5,
        "width": 486,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2930,
        "y": 3460.5,
        "width": 187,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3057,
        "y": 3493.5,
        "width": 197,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2524,
        "y": 3311.5,
        "width": 285,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2638,
        "y": 3378.5,
        "width": 166,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2422,
        "y": 3172.5,
        "width": 104,
        "height": 146,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2476,
        "y": 3278.5,
        "width": 83,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2369,
        "y": 2989.5,
        "width": 79,
        "height": 241,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2408,
        "y": 2927.5,
        "width": 158,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2462,
        "y": 2878.5,
        "width": 199,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2532,
        "y": 2842.5,
        "width": 327,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2609,
        "y": 2808.5,
        "width": 436,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2689,
        "y": 2770.5,
        "width": 531,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2819,
        "y": 2712.5,
        "width": 550,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3125,
        "y": 2676.5,
        "width": 383,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3231,
        "y": 2633.5,
        "width": 241,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3287,
        "y": 2596.5,
        "width": 258,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3394,
        "y": 2560.5,
        "width": 305,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3563,
        "y": 2545.5,
        "width": 344,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3610,
        "y": 2484.5,
        "width": 297,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3717,
        "y": 2421.5,
        "width": 131,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3758,
        "y": 2337.5,
        "width": 94,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3816,
        "y": 2251.5,
        "width": 56,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3844,
        "y": 2162.5,
        "width": 57,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3877,
        "y": 2045.5,
        "width": 60,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3875,
        "y": 1926.5,
        "width": 90,
        "height": 153,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3870,
        "y": 1786.5,
        "width": 97,
        "height": 196,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3887,
        "y": 1626.5,
        "width": 58,
        "height": 193,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3906,
        "y": 1528.5,
        "width": 128,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3929,
        "y": 1178.5,
        "width": 66,
        "height": 331,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3925,
        "y": 982.5,
        "width": 77,
        "height": 255,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2495,
        "y": 578.5,
        "width": 100,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3352,
        "y": -58.5,
        "width": 651,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3482,
        "y": -12.5,
        "width": 198,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3585,
        "y": 75.5,
        "width": 52,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3728,
        "y": 5.5,
        "width": 120,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3808,
        "y": 123.5,
        "width": 127,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3854,
        "y": 245.5,
        "width": 77,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3900,
        "y": 204.5,
        "width": 113,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3008,
        "y": -121,
        "width": 232,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3068,
        "y": -118,
        "width": 876,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3069,
        "y": -56,
        "width": 114,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2246,
        "y": -260,
        "width": 1149,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2779,
        "y": -233,
        "width": 119,
        "height": 176,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2585,
        "y": -225,
        "width": 60,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2318,
        "y": -222,
        "width": 80,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1360,
        "y": -242,
        "width": 1046,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2080,
        "y": -133,
        "width": 10,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1723,
        "y": 210,
        "width": 38,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2084,
        "y": 436.5,
        "width": 30,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1715,
        "y": 669.5,
        "width": 49,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2059,
        "y": 917.5,
        "width": 42,
        "height": 142,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1703,
        "y": 1153.5,
        "width": 40,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2069,
        "y": 1351.5,
        "width": 31,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1663,
        "y": 1545.5,
        "width": 69,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1647,
        "y": 1633.5,
        "width": 45,
        "height": 202,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1546,
        "y": 1648.5,
        "width": 21,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1380,
        "y": 1793.5,
        "width": 119,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1468,
        "y": 1796.5,
        "width": 97,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1272,
        "y": 1819.5,
        "width": 28,
        "height": 214,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1145,
        "y": 1766.5,
        "width": 30,
        "height": 218,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 847,
        "y": 1902.5,
        "width": 185,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 975,
        "y": 1932.5,
        "width": 68,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 826,
        "y": 1937.5,
        "width": 39,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 849,
        "y": 2004.5,
        "width": 31,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 880,
        "y": 2035.5,
        "width": 31,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 590,
        "y": 1992.5,
        "width": 44,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 362,
        "y": 1960.5,
        "width": 33,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 94,
        "y": 2210.5,
        "width": 33,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -107,
        "y": 1938.5,
        "width": 57,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 608,
        "y": 1469.5,
        "width": 102,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 787,
        "y": 264,
        "width": 97,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 47,
        "y": -229,
        "width": 1371,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 661,
        "y": -218,
        "width": 50,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 405,
        "y": -213,
        "width": 59,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 902,
        "y": -213,
        "width": 39,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1109,
        "y": -213,
        "width": 51,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 73,
        "y": -206,
        "width": 117,
        "height": 197,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 114,
        "y": -46,
        "width": 34,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -107,
        "y": -38,
        "width": 234,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -70,
        "y": 15,
        "width": 79,
        "height": 267,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -96,
        "y": 237,
        "width": 48,
        "height": 3741,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -67,
        "y": 3851,
        "width": 115,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 22,
        "y": 3895,
        "width": 1524,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -77,
        "y": 3626,
        "width": 121,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 674,
        "y": 3817,
        "width": 76,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 760,
        "y": 3816,
        "width": 101,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 914,
        "y": 3842,
        "width": 84,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1252,
        "y": 3824,
        "width": 161,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1540,
        "y": 3930,
        "width": 82,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1570,
        "y": 3990,
        "width": 114,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 553,
        "y": 3141.5,
        "width": 121,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -50,
        "y": 3175.5,
        "width": 77,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -93,
        "y": 2801.5,
        "width": 110,
        "height": 448,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1687,
        "y": 2005.5,
        "width": 66,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 594,
        "y": 2238.5,
        "width": 55,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: []
  },

  restfieldTrial: {
    areaName: "RESTFIELD TRIAL",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restfieldTrial,
    foregroundImage: restfieldTrialFront,
    
    playerPos: {
      x: 2155,
      y: 3888,
    },
    colliders: [
      {
        "type": "scoreBoard",
        "x": 2339,
        "y": 862.5,
        "width": 280,
        "height": 247,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2256.5,
        "y": 2673,
        "width": 568,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "chest",
        "item": "restfieldTrial",
        "x": 1516,
        "y": 826.5,
        "width": 327,
        "height": 236,
        "color": "rgb(255, 255, 204, 0.0)"
      },
        {
          "type": "transition",
          "format": "liquid",
          "destination": "restFiledTown",
          "x": 1844.5,
          "y": 3675.5,
          "width": 380,
          "height": 177,
          "color": "rgb(204, 0, 204, 0)"
        },
        {
          "type": "wall",
          "x": 1457.5,
          "y": 898.5,
          "width": 1188,
          "height": 46,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1455.5,
          "y": 942.5,
          "width": 51,
          "height": 152,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1274.5,
          "y": 1068.5,
          "width": 235,
          "height": 21,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1835.5,
          "y": 911.5,
          "width": 39,
          "height": 78,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1790.5,
          "y": 931.5,
          "width": 50,
          "height": 56,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1647.5,
          "y": 932.5,
          "width": 59,
          "height": 31,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2508.5,
          "y": 934.5,
          "width": 45,
          "height": 102,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2611.5,
          "y": 927.5,
          "width": 29,
          "height": 170,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2612.5,
          "y": 1059.5,
          "width": 214,
          "height": 32,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2811.5,
          "y": 1079.5,
          "width": 32,
          "height": 97,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2819.5,
          "y": 1132.5,
          "width": 197,
          "height": 41,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2988.5,
          "y": 1161.5,
          "width": 28,
          "height": 1206,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2811.5,
          "y": 2318.5,
          "width": 190,
          "height": 50,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2808.5,
          "y": 2338.5,
          "width": 19,
          "height": 370,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2239.5,
          "y": 2670.5,
          "width": 579,
          "height": 54,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1256.5,
          "y": 2683.5,
          "width": 635,
          "height": 46,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1292.5,
          "y": 2249.5,
          "width": 18,
          "height": 451,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1062.5,
          "y": 2320.5,
          "width": 238,
          "height": 69,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1091.5,
          "y": 1045.5,
          "width": 27,
          "height": 1301,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1084.5,
          "y": 1138.5,
          "width": 233,
          "height": 48,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1250.5,
          "y": 1045.5,
          "width": 61,
          "height": 118,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1588.5,
          "y": 2692.5,
          "width": 110,
          "height": 201,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1589.5,
          "y": 2872.5,
          "width": 93,
          "height": 183,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1623.5,
          "y": 3040.5,
          "width": 51,
          "height": 232,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1662.5,
          "y": 3146.5,
          "width": 107,
          "height": 79,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1659.5,
          "y": 3068.5,
          "width": 98,
          "height": 107,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1730.5,
          "y": 3110.5,
          "width": 145,
          "height": 85,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1773.5,
          "y": 3166.5,
          "width": 90,
          "height": 361,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1871.5,
          "y": 3323.5,
          "width": 40,
          "height": 257,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1788.5,
          "y": 3467.5,
          "width": 97,
          "height": 266,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1814.5,
          "y": 3704.5,
          "width": 51,
          "height": 171,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1848.5,
          "y": 3820.5,
          "width": 533,
          "height": 47,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2171.5,
          "y": 3350.5,
          "width": 55,
          "height": 464,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2189.5,
          "y": 3763.5,
          "width": 31,
          "height": 84,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2170.5,
          "y": 3036.5,
          "width": 53,
          "height": 407,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2173.5,
          "y": 2906.5,
          "width": 49,
          "height": 225,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2141.5,
          "y": 2911.5,
          "width": 370,
          "height": 40,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2423.5,
          "y": 2702.5,
          "width": 54,
          "height": 254,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1700.5,
          "y": 2720,
          "width": 116,
          "height": 110,
          "color": "rgb(0, 0, 0, 0)"
        }
     ],
    enemies: [
    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 1575,
        y: 1158
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
        x: 1575,
        y: 1158
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 2327,
        y: 1128
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
        x: 2327,
        y: 1128
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 2590,
        y: 1705
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
        x: 2590,
        y: 1705
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 1225,
        y: 1707
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
        x: 1225,
        y: 1707
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },
    
    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 1650,
        y: 2125
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
        x: 1650,
        y: 2125
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 2330,
        y: 2048
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
        x: 2330,
        y: 2048
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldReaper",
      isBoss: true,
      imgw: 147,
      imgh: 175,
      imgcw: 147,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 5,
      xp: 2000,
      speedX: 5,
      speedY: 5,
      spawn: {
        x: 1650,
        y: 1100
      },
      w: 550,
      h: 550,
      currentStateName: "idle",
      currentState: null,
      attackInterval: true,
      states: [lazerMooshState, attackCircleMooshBossState, moveState],
      damaged: 0,
      health: 100,
      angle: 0,
      maxHealth: 100,
      baseSpawn: {
        x: 1650,
        y: 1100
      },
      spawnTimer: null,
      enemyStateInt: 2000,
      active: false,
    },
  
  ]
  },
  
  restfieldMall: {
    areaName: "RESTFIELD MALL",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: restfieldMall,
    foregroundImage: restfieldMallFront,
    
    playerPos: {
      x: 4000,
      y: 1300,
    },
    colliders: [
      {
        "type": "wall",
        "x": 3562,
        "y": 2367.5,
        "width": 72,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3174,
        "y": 2320.5,
        "width": 312,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3226,
        "y": 2344.5,
        "width": 70,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3030,
        "y": 2223.5,
        "width": 224,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2879,
        "y": 2205.5,
        "width": 189,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2691,
        "y": 2211.5,
        "width": 212,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2780,
        "y": 2236.5,
        "width": 51,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2330,
        "y": 2442.5,
        "width": 120,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2431,
        "y": 2458.5,
        "width": 74,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2485,
        "y": 2458.5,
        "width": 17,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2623,
        "y": 2589.5,
        "width": 65,
        "height": 178,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2675,
        "y": 2705.5,
        "width": 269,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2916,
        "y": 2720.5,
        "width": 262,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3157,
        "y": 2755.5,
        "width": 387,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3267,
        "y": 2728.5,
        "width": 174,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3549,
        "y": 2773.5,
        "width": 465,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3522,
        "y": 2723.5,
        "width": 51,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3612,
        "y": 800.5,
        "width": 134,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3674,
        "y": 750.5,
        "width": 433,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4028,
        "y": 809.5,
        "width": 85,
        "height": 1983,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3940,
        "y": 2718.5,
        "width": 139,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2581,
        "y": 2093.5,
        "width": 64,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2534,
        "y": 2122.5,
        "width": 65,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2710,
        "y": 2186.5,
        "width": 205,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2793,
        "y": 2156.5,
        "width": 128,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2875,
        "y": 2114.5,
        "width": 55,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2901,
        "y": 2079.5,
        "width": 371,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3032,
        "y": 2014.5,
        "width": 61,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3061,
        "y": 1988.5,
        "width": 365,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3074,
        "y": 2067.5,
        "width": 27,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3191,
        "y": 1941.5,
        "width": 128,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3249,
        "y": 1900.5,
        "width": 99,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3332,
        "y": 1867.5,
        "width": 200,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3439,
        "y": 1826.5,
        "width": 161,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3511,
        "y": 1788.5,
        "width": 102,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3508,
        "y": 1670.5,
        "width": 73,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3224,
        "y": 1498.5,
        "width": 421,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3273,
        "y": 1527.5,
        "width": 86,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3344,
        "y": 1635.5,
        "width": 88,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3396,
        "y": 1661.5,
        "width": 164,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3088,
        "y": 1387.5,
        "width": 129,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3013,
        "y": 1418.5,
        "width": 108,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3079,
        "y": 1458.5,
        "width": 55,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2864,
        "y": 1340.5,
        "width": 76,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2912,
        "y": 1385.5,
        "width": 156,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2823,
        "y": 1303.5,
        "width": 46,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2613,
        "y": 1231.5,
        "width": 294,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2667,
        "y": 1264.5,
        "width": 87,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2810,
        "y": 1260.5,
        "width": 28,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2275,
        "y": 1024.5,
        "width": 539,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2439,
        "y": 1060.5,
        "width": 46,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2487,
        "y": 1074.5,
        "width": 86,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2563,
        "y": 1097.5,
        "width": 88,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2253,
        "y": 1262.5,
        "width": 71,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1856,
        "y": 1282.5,
        "width": 56,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1791,
        "y": 1041.5,
        "width": 587,
        "height": 268,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1793,
        "y": 1265.5,
        "width": 566,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1656,
        "y": 1245.5,
        "width": 185,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1594,
        "y": 1276.5,
        "width": 123,
        "height": 335,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1654,
        "y": 1579.5,
        "width": 91,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1599,
        "y": 1389.5,
        "width": 49,
        "height": 256,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1333,
        "y": 1428.5,
        "width": 152,
        "height": 279,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1172,
        "y": 1707.5,
        "width": 243,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1233,
        "y": 1717.5,
        "width": 96,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1298,
        "y": 1744.5,
        "width": 89,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1047,
        "y": 1830.5,
        "width": 137,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1085,
        "y": 1757.5,
        "width": 160,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 924,
        "y": 1889.5,
        "width": 140,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 965,
        "y": 1815.5,
        "width": 133,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1057,
        "y": 1828.5,
        "width": 77,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 320,
        "y": 1829.5,
        "width": 664,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 785,
        "y": 1922.5,
        "width": 89,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 859,
        "y": 1901.5,
        "width": 79,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 626,
        "y": 1940.5,
        "width": 157,
        "height": 149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 662,
        "y": 2027.5,
        "width": 81,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 727,
        "y": 1963.5,
        "width": 103,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 578,
        "y": 2142.5,
        "width": 47,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 599,
        "y": 2152.5,
        "width": 78,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 335,
        "y": 2011.5,
        "width": 219,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 430,
        "y": 2057.5,
        "width": 191,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 551,
        "y": 2096.5,
        "width": 130,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 251,
        "y": 1959.5,
        "width": 162,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 100,
        "y": 1884.5,
        "width": 225,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 205,
        "y": 1912.5,
        "width": 71,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -104,
        "y": 1777.5,
        "width": 459,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -46,
        "y": 1805.5,
        "width": 82,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 7,
        "y": 1848.5,
        "width": 115,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -87,
        "y": 1755,
        "width": 28,
        "height": 793,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -114,
        "y": 2524,
        "width": 269,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 20,
        "y": 2521,
        "width": 128,
        "height": 199,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 86,
        "y": 2553,
        "width": 95,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 81,
        "y": 2586,
        "width": 126,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -108,
        "y": 2685,
        "width": 160,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -92,
        "y": 2675,
        "width": 38,
        "height": 425,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -79,
        "y": 2904,
        "width": 74,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -44,
        "y": 2910,
        "width": 30,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -39,
        "y": 2974,
        "width": 125,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -24,
        "y": 2984,
        "width": 159,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 60,
        "y": 3006,
        "width": 76,
        "height": 185,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 95,
        "y": 3038,
        "width": 108,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 151,
        "y": 3052,
        "width": 109,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 216,
        "y": 3080,
        "width": 96,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 228,
        "y": 3134,
        "width": 166,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 316,
        "y": 3203,
        "width": 195,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 411,
        "y": 3209,
        "width": 543,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 742,
        "y": 3171,
        "width": 321,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 860,
        "y": 3133,
        "width": 244,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 921,
        "y": 3100,
        "width": 483,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 995,
        "y": 3026,
        "width": 261,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1101,
        "y": 2965,
        "width": 359,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1273,
        "y": 2899,
        "width": 291,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1420,
        "y": 2867,
        "width": 241,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1518,
        "y": 2831,
        "width": 370,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1543,
        "y": 2782,
        "width": 404,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1700,
        "y": 2721,
        "width": 539,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1812,
        "y": 2662,
        "width": 285,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1903,
        "y": 2618,
        "width": 281,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2058,
        "y": 2608,
        "width": 159,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2051,
        "y": 2572,
        "width": 336,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2192,
        "y": 2495,
        "width": 355,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2283,
        "y": 2461,
        "width": 78,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2477,
        "y": 2551.5,
        "width": 158,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldTownCemetery",
        "x": 3636,
        "y": 816.5,
        "width": 494,
        "height": 290,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1671,
        "y": 2338.5,
        "width": 187,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1773,
        "y": 2381.5,
        "width": 99,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1732,
        "y": 2374.5,
        "width": 48,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1858,
        "y": 2443.5,
        "width": 68,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1644,
        "y": 2312.5,
        "width": 61,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1609,
        "y": 2289.5,
        "width": 44,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1663,
        "y": 2289.5,
        "width": 210,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1662,
        "y": 2258.5,
        "width": 210,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1829,
        "y": 2308.5,
        "width": 77,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1871,
        "y": 2336.5,
        "width": 92,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1858,
        "y": 2368.5,
        "width": 145,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1858,
        "y": 2402.5,
        "width": 156,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1233,
        "y": 2516.5,
        "width": 120,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1167,
        "y": 2542.5,
        "width": 232,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1130,
        "y": 2580.5,
        "width": 310,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1173,
        "y": 2632.5,
        "width": 340,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1266,
        "y": 2666.5,
        "width": 239,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1347,
        "y": 2697.5,
        "width": 113,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1448,
        "y": 2607.5,
        "width": 50,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1194,
        "y": 2527.5,
        "width": 73,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1846,
        "y": 1479.5,
        "width": 16,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1893,
        "y": 1498.5,
        "width": 19,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1763,
        "y": 1411.5,
        "width": 21,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1716,
        "y": 1393.5,
        "width": 16,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 763,
        "y": 2232.5,
        "width": 79,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 814,
        "y": 2211.5,
        "width": 69,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 864,
        "y": 2190.5,
        "width": 47,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 889,
        "y": 2170.5,
        "width": 58,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 934,
        "y": 2145.5,
        "width": 55,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 983,
        "y": 2129.5,
        "width": 45,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1029,
        "y": 2109.5,
        "width": 43,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1021,
        "y": 2104.5,
        "width": 13,
        "height": 33,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1060,
        "y": 2086.5,
        "width": 29,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1097,
        "y": 2072.5,
        "width": 48,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1077,
        "y": 2068.5,
        "width": 28,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1119,
        "y": 2048.5,
        "width": 63,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1156,
        "y": 2018.5,
        "width": 75,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 1995.5,
        "width": 58,
        "height": 33,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1266,
        "y": 1976.5,
        "width": 53,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1309,
        "y": 1955.5,
        "width": 53,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1340,
        "y": 1930.5,
        "width": 63,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1392,
        "y": 1912.5,
        "width": 72,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1443,
        "y": 1883.5,
        "width": 63,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1497,
        "y": 1861.5,
        "width": 47,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 695,
        "y": 2157.5,
        "width": 45,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 723,
        "y": 2226.5,
        "width": 54,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1749,
        "y": 1712.5,
        "width": 114,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1826,
        "y": 1693.5,
        "width": 73,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1882,
        "y": 1667.5,
        "width": 64,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1931,
        "y": 1644.5,
        "width": 53,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1979,
        "y": 1623.5,
        "width": 54,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2008,
        "y": 1597.5,
        "width": 77,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2047,
        "y": 1554.5,
        "width": 45,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1992,
        "y": 1537.5,
        "width": 63,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1962,
        "y": 1521.5,
        "width": 50,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1934,
        "y": 1498.5,
        "width": 41,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1399,
        "y": 1456.5,
        "width": 149,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1447,
        "y": 1430.5,
        "width": 180,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1389,
        "y": 1475.5,
        "width": 301,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 724,
        "y": 2226.5,
        "width": 58,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1664,
        "y": 1332.5,
        "width": 117,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1752,
        "y": 1417.5,
        "width": 80,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1820,
        "y": 1439.5,
        "width": 71,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1876,
        "y": 1463.5,
        "width": 58,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2729,
        "y": 2239.5,
        "width": 104,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2801,
        "y": 2242.5,
        "width": 144,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2780,
        "y": 2266.5,
        "width": 52,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1773,
        "y": 1735,
        "width": 74,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1726,
        "y": 1707,
        "width": 76,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 734,
        "y": 2236,
        "width": 136,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 819,
        "y": 2211,
        "width": 123,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 888,
        "y": 2195,
        "width": 72,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 919,
        "y": 2178,
        "width": 105,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 954,
        "y": 2145,
        "width": 84,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 992,
        "y": 2132,
        "width": 91,
        "height": 10,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1015,
        "y": 2108,
        "width": 104,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1093,
        "y": 2076,
        "width": 55,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1129,
        "y": 2062,
        "width": 81,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 2018,
        "width": 72,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1334,
        "y": 1941,
        "width": 67,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1463,
        "y": 1883,
        "width": 75,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1436,
        "y": 1912,
        "width": 59,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1384,
        "y": 1926,
        "width": 63,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1266,
        "y": 1989,
        "width": 85,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1825,
        "y": 1672,
        "width": 64,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1866,
        "y": 1633,
        "width": 132,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1918,
        "y": 1597,
        "width": 122,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1790,
        "y": 1697,
        "width": 84,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1777,
        "y": 1673,
        "width": 68,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1309,
        "y": 1947,
        "width": 47,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1425,
        "y": 1866,
        "width": 92,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1476,
        "y": 1849,
        "width": 55,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1282,
        "y": 1929,
        "width": 124,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1359,
        "y": 1908,
        "width": 78,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1163,
        "y": 2012,
        "width": 114,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1218,
        "y": 1949,
        "width": 101,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1161,
        "y": 1994,
        "width": 94,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1039,
        "y": 2081,
        "width": 86,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1063,
        "y": 2020,
        "width": 104,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 898,
        "y": 2136,
        "width": 91,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 937,
        "y": 2085,
        "width": 121,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 762,
        "y": 2190,
        "width": 86,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 792,
        "y": 2176,
        "width": 112,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1013,
        "y": 2057,
        "width": 95,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3439,
        "y": 2357,
        "width": 119,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3613,
        "y": 2314,
        "width": 114,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3614,
        "y": 1892,
        "width": 122,
        "height": 453,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3593,
        "y": 877,
        "width": 145,
        "height": 1149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldMallInside",
        "x": 1300,
        "y": 1470.5,
        "width": 315,
        "height": 243,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies:[
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 480,
          y: 2930
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 40,
          y: 2000
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1070,
          y: 2200
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 2500,
          y: 1500
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1800,
          y: 2000
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3500,
          y: 900
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      } 
    ]
  },

  restfieldMallInside: {
    areaName: " ",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: restfieldMallInside,
    foregroundImage: restfieldMallInsideFront,
    playerPos: {
      x: 2925,
      y: 2800,
    },
    colliders: [
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldMall",
        "x": 2682,
        "y": 2805.5,
        "width": 222,
        "height": 175,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3049,
        "y": 2795.5,
        "width": 220,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3253,
        "y": 1313.5,
        "width": 225,
        "height": 1623,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 856,
        "y": 1711.5,
        "width": 2604,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2656,
        "y": 1733.5,
        "width": 258,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2365,
        "y": 1733.5,
        "width": 262,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1003,
        "y": 1748.5,
        "width": 1343,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 842,
        "y": 1736.5,
        "width": 106,
        "height": 1257,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 829,
        "y": 2903.5,
        "width": 2649,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3023,
        "y": 2501.5,
        "width": 104,
        "height": 411,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1151,
        "y": 2450.5,
        "width": 107,
        "height": 322,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1142,
        "y": 1950.5,
        "width": 97,
        "height": 337,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1515,
        "y": 1969.5,
        "width": 98,
        "height": 324,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1886,
        "y": 1963.5,
        "width": 88,
        "height": 337,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1516,
        "y": 2443.5,
        "width": 94,
        "height": 322,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2223,
        "y": 2443.5,
        "width": 116,
        "height": 328,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1872,
        "y": 2445.5,
        "width": 104,
        "height": 338,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2232,
        "y": 1966.5,
        "width": 101,
        "height": 346,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2584,
        "y": 1950.5,
        "width": 106,
        "height": 361,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "instant",
        "destination": "restfieldMallTreasure",
        "x": 3027,
        "y": 1683.5,
        "width": 85,
        "height": 132,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1000,
          y: 1840
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1000,
          y: 1840
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 950,
          y: 1800
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 950,
          y: 1800
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 920,
          y: 1790
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 920,
          y: 1790
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 900,
          y: 1790
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 900,
          y: 1790
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 880,
          y: 1790
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 880,
          y: 1790
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 880,
          y: 1760
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 880,
          y: 1760
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 880,
          y: 1750
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 880,
          y: 1750
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }
    ],
  },

  restfieldMallTreasure: {
    areaName: "",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: restfieldMallTreasure,
    foregroundImage: restfieldMallTreasureFront,
    playerPos: {
      x: 2350,
      y: 2350,
    },
    colliders: [
      {
        "type": "wall",
        "x": 1663,
        "y": 1841.5,
        "width": 92,
        "height": 549,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1656,
        "y": 1796.5,
        "width": 755,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1585,
        "y": 2366.5,
        "width": 527,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2064,
        "y": 2429.5,
        "width": 356,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2251,
        "y": 1855.5,
        "width": 234,
        "height": 653,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "instant",
        "destination": "restfieldMallInside",
        "x": 2055,
        "y": 2324.5,
        "width": 334,
        "height": 156,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

// ARCANE ISLAND
  islandOneArcane: {
    areaName: "SLIME FOREST RUINS",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: islandOneMapArcane,
    foregroundImage: islandOneMapArcaneFront,
    playerPos: {
      x: 2852,
      y: 3798
    },
    colliders: [
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
        "name": "dialogCoffeeMachine",
        "x": 3493,
        "y": 2913.5,
        "width": 229,
        "height": 242,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1179,
        "y": 2910.5,
        "width": 394,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "arcane",
        "destination": "islandOne",
        "x": 2404,
        "y": 2718.5,
        "width": 398,
        "height": 244,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPathArcane",
        "x": 2364.5,
        "y": 3964,
        "width": 707,
        "height": 194,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

  slimeForestPathArcane: {
    areaName: "SLIME FOREST",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: slimeForestPathArcane,
    foregroundImage: slimeForestPathArcaneFront,
    playerPos: {
      x: 1935,
      y: 2750,
    },
    colliders: [
      {
        "type": "wall",
        "x": 2216,
        "y": 1818.5,
        "width": 57,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2420,
        "y": 1774.5,
        "width": 79,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2612,
        "y": 1870.5,
        "width": 61,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2506,
        "y": 1629.5,
        "width": 53,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2655,
        "y": 1649.5,
        "width": 60,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2777,
        "y": 1812.5,
        "width": 41,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2862,
        "y": 1879.5,
        "width": 94,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3007,
        "y": 1939.5,
        "width": 83,
        "height": 453,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2771,
        "y": 2371.5,
        "width": 335,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676,
        "y": 2450.5,
        "width": 67,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2712,
        "y": 2373.5,
        "width": 77,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2529,
        "y": 2490.5,
        "width": 67,
        "height": 167,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2350,
        "y": 2518.5,
        "width": 90,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2299,
        "y": 2435.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2430,
        "y": 2593.5,
        "width": 140,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2562,
        "y": 2568.5,
        "width": 184,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2230,
        "y": 2637.5,
        "width": 62,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2146,
        "y": 2848.5,
        "width": 60,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2195,
        "y": 2996.5,
        "width": 55,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2311,
        "y": 2960.5,
        "width": 56,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2020,
        "y": 2965.5,
        "width": 66,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1888,
        "y": 3099.5,
        "width": 63,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1791,
        "y": 3028.5,
        "width": 48,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1653,
        "y": 3113.5,
        "width": 92,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1499,
        "y": 3020.5,
        "width": 50,
        "height": 166,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1419,
        "y": 2812.5,
        "width": 53,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1404,
        "y": 2565.5,
        "width": 75,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1269,
        "y": 2714.5,
        "width": 86,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1150,
        "y": 2818.5,
        "width": 55,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1412,
        "y": 2919.5,
        "width": 49,
        "height": 235,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1427,
        "y": 3112.5,
        "width": 96,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1519,
        "y": 3157.5,
        "width": 166,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1700,
        "y": 3191.5,
        "width": 234,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2068,
        "y": 3142.5,
        "width": 62,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1935,
        "y": 3214.5,
        "width": 170,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2163,
        "y": 3259.5,
        "width": 59,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2121,
        "y": 3206.5,
        "width": 99,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2209,
        "y": 3230.5,
        "width": 243,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2314,
        "y": 3062.5,
        "width": 50,
        "height": 195,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2469,
        "y": 2826.5,
        "width": 80,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2366,
        "y": 2973.5,
        "width": 115,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2440,
        "y": 2592.5,
        "width": 63,
        "height": 269,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3022,
        "y": 1757.5,
        "width": 41,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2940,
        "y": 1860.5,
        "width": 149,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3047,
        "y": 1879.5,
        "width": 31,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2701,
        "y": 1672.5,
        "width": 236,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2778,
        "y": 1701.5,
        "width": 41,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2811,
        "y": 1876.5,
        "width": 158,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2538,
        "y": 1638.5,
        "width": 156,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2257,
        "y": 1500.5,
        "width": 55,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2306,
        "y": 1702.5,
        "width": 65,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2435,
        "y": 1450.5,
        "width": 83,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2499,
        "y": 1539.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2346,
        "y": 1347.5,
        "width": 62,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2398,
        "y": 1421.5,
        "width": 59,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2271,
        "y": 1168.5,
        "width": 44,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2478,
        "y": 1230.5,
        "width": 45,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2380,
        "y": 1066.5,
        "width": 61,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2157,
        "y": 1309.5,
        "width": 65,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2432,
        "y": 1130.5,
        "width": 73,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2484,
        "y": 1272.5,
        "width": 50,
        "height": 201,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2133,
        "y": 1057.5,
        "width": 56,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2019,
        "y": 1229.5,
        "width": 47,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1948,
        "y": 1011.5,
        "width": 58,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2037,
        "y": 843.5,
        "width": 71,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2243,
        "y": 906.5,
        "width": 52,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2272,
        "y": 966.5,
        "width": 190,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2426,
        "y": 1012.5,
        "width": 31,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2093,
        "y": 895.5,
        "width": 167,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1891,
        "y": 799.5,
        "width": 67,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1942,
        "y": 860.5,
        "width": 132,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1818,
        "y": 1175.5,
        "width": 51,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1613,
        "y": 1124.5,
        "width": 88,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1474,
        "y": 1210.5,
        "width": 83,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1383,
        "y": 1072.5,
        "width": 45,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1522,
        "y": 955.5,
        "width": 53,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1619,
        "y": 847.5,
        "width": 49,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1758,
        "y": 958.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1744,
        "y": 741.5,
        "width": 49,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1775,
        "y": 793.5,
        "width": 163,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1629,
        "y": 777.5,
        "width": 148,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1650,
        "y": 791.5,
        "width": 20,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1417,
        "y": 840.5,
        "width": 63,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1467,
        "y": 874.5,
        "width": 163,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1246,
        "y": 927.5,
        "width": 58,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1273,
        "y": 921.5,
        "width": 166,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1119,
        "y": 1032.5,
        "width": 55,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1145,
        "y": 1038.5,
        "width": 174,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1267,
        "y": 977.5,
        "width": 33,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1215,
        "y": 1188.5,
        "width": 66,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1038,
        "y": 1226.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 1081.5,
        "width": 87,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 1356.5,
        "width": 62,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 966,
        "y": 1419.5,
        "width": 57,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 982,
        "y": 1273.5,
        "width": 73,
        "height": 165,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1125,
        "y": 1591.5,
        "width": 50,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1161,
        "y": 1752.5,
        "width": 72,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 996,
        "y": 1780.5,
        "width": 74,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 928,
        "y": 1623.5,
        "width": 58,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 939,
        "y": 1481.5,
        "width": 43,
        "height": 192,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 932,
        "y": 1741.5,
        "width": 83,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1257,
        "y": 1516.5,
        "width": 73,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1321,
        "y": 1677.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1350,
        "y": 1855.5,
        "width": 58,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1128,
        "y": 1956.5,
        "width": 58,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1041,
        "y": 1900.5,
        "width": 94,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1280,
        "y": 2033.5,
        "width": 64,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1408,
        "y": 2199.5,
        "width": 53,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 2166.5,
        "width": 55,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1154,
        "y": 2290.5,
        "width": 53,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 977,
        "y": 2249.5,
        "width": 42,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 991,
        "y": 1875.5,
        "width": 30,
        "height": 417,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1036,
        "y": 2413.5,
        "width": 62,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1212,
        "y": 2505.5,
        "width": 76,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1322,
        "y": 2383.5,
        "width": 63,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1512,
        "y": 2473.5,
        "width": 46,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088,
        "y": 2605.5,
        "width": 56,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 2497.5,
        "width": 57,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 2693.5,
        "width": 39,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1290,
        "y": 2951.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1199,
        "y": 2881.5,
        "width": 44,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1224,
        "y": 2955.5,
        "width": 91,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1336,
        "y": 3052.5,
        "width": 91,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "islandOneArcane",
        "x": 1239.5,
        "y": 1232.5,
        "width": 997,
        "height": 290,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "mushroomForestArcane",
        "x": 2652.5,
        "y": 1851.5,
        "width": 298,
        "height": 570,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

  mushroomForestArcane: {
    areaName: "MUSHROOM FOREST",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: mushroomForestArcane,
    foregroundImage: mushroomForestArcaneFront,
    playerPos: {
      x: 700,
      y: 2000,
    },
    colliders: [
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPathArcane",
        "x": 68.5,
        "y": 1555.5,
        "width": 388,
        "height": 620,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

 

};

let originalMapsInfo = {

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
        "type": "dialog",
        "name": "Deep Forestry Quest",
        "x": 1443.5,
        "y": 1974.5,
        "width": 546,
        "height": 273,
        "color": "rgb(179, 255, 213, 0)"
      },
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
      },
      {
        "type": "wall",
        "x": 2939,
        "y": 2743.5,
        "width": 214,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3010,
        "y": 2778.5,
        "width": 80,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3270,
        "y": 2940.5,
        "width": 180,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3287,
        "y": 2877.5,
        "width": 127,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: [
      {
      name: "purpleSlime",
      imgw: 31,
      imgh: 27,
      imgcw: 31,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 1,
      speedX: 2,
      speedY: 2,
      spawn: {
        x: 2000,
        y: 3200
      },
      w: 100,
      h: 100,
      currentStateName: "idle",
      currentState: null,
      attackInterval: true,
      states: [moveState],
      damaged: 0,
      health: 5,
      angle: 0,
      maxHealth: 10,
      baseSpawn: {
        x: 2000,
        y: 3200
      },
      spawnTimer: 10000,
      enemyStateInt: 2000,
      drop: "slimeGuts",
      dropRate: 20,
    },
    {
      name: "purpleSlime",
      imgw: 31,
      imgh: 27,
      imgcw: 31,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 1,
      speedX: 2,
      speedY: 2,
      spawn: {
        x: 2240.5,
        y: 3165.5
      },
      w: 100,
      h: 100,
      currentStateName: "idle",
      currentState: null,
      attackInterval: true,
      states: [moveState],
      damaged: 0,
      health: 5,
      angle: 0,
      maxHealth: 10,
      baseSpawn: {
        x: 2240.5,
        y: 3165.5
      },
      spawnTimer: 10000,
      enemyStateInt: 2000,
      drop: "slimeGuts",
      dropRate: 20,
    }
  ],
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
    colliders:  [
      {
        "type": "chest",
        "item": "stick",
        "x": 2528,
        "y": 2234.5,
        "width": 227,
        "height": 178,
        "color": "rgb(255, 255, 204, 0)"
      },
      {
        "type": "wall",
        "x": 2590,
        "y": 2267.5,
        "width": 85,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "craft",
        "x": 1726,
        "y": 1613.5,
        "width": 444,
        "height": 269,
        "color": "rgb(153, 102, 51, 0)"
      },
      {
        "type": "dialog",
        "name": "Fishing Quest",
        "x": 2106,
        "y": 2005.5,
        "width": 170,
        "height": 185,
        "color": "rgb(179, 255, 213, 0)"
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
      },
      {
        "type": "cook",
        "x": 302,
        "y": 1733.5,
        "width": 471,
        "height": 416,
        "color": "rgb(153, 255, 102, 0)"
      },
      {
        "type": "wall",
        "x": 507,
        "y": 1956.5,
        "width": 122,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -102,
        "y": 884.5,
        "width": 127,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -39,
        "y": 836.5,
        "width": 143,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 58,
        "y": 809.5,
        "width": 94,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 118,
        "y": 845.5,
        "width": 36,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -113,
        "y": 918.5,
        "width": 22,
        "height": 614,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 697,
        "y": 598.5,
        "width": 120,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 583,
        "y": 637.5,
        "width": 229,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 952,
        "y": 569.5,
        "width": 201,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1102,
        "y": 595.5,
        "width": 320,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1325,
        "y": 623.5,
        "width": 277,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1568,
        "y": 659.5,
        "width": 219,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1744,
        "y": 686.5,
        "width": 173,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2346,
        "y": 808.5,
        "width": 60,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2386,
        "y": 869.5,
        "width": 127,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2388,
        "y": 836.5,
        "width": 184,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2549,
        "y": 787.5,
        "width": 110,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2623,
        "y": 715.5,
        "width": 112,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4050,
        "y": 1080.5,
        "width": 37,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3981,
        "y": 990.5,
        "width": 89,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3952,
        "y": 913.5,
        "width": 67,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3910,
        "y": 888.5,
        "width": 108,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3877,
        "y": 872.5,
        "width": 85,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3855,
        "y": 827.5,
        "width": 40,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1821,
        "y": 1712.5,
        "width": 239,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1922,
        "y": 1754.5,
        "width": 70,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
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
        "x": 558.5,
        "y": 2749.5,
        "width": 22,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1686.5,
        "y": 3027.5,
        "width": 467,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1287,
        "y": 2991.5,
        "width": 152,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1268,
        "y": 2963.5,
        "width": 50,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 541,
        "y": 2766.5,
        "width": 177,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 606,
        "y": 2788.5,
        "width": 186,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 714,
        "y": 2899.5,
        "width": 327,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 923,
        "y": 2933.5,
        "width": 159,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1031,
        "y": 2985.5,
        "width": 119,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1125,
        "y": 2879.5,
        "width": 48,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2671,
        "y": 2896.5,
        "width": 222,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2779,
        "y": 2857.5,
        "width": 285,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2923,
        "y": 2789.5,
        "width": 313,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3108,
        "y": 2724.5,
        "width": 116,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2669,
        "y": 2843.5,
        "width": 281,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2855,
        "y": 2791.5,
        "width": 218,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3004,
        "y": 2759.5,
        "width": 168,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1505,
        "y": 854.5,
        "width": 452,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1475,
        "y": 849.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2306,
        "y": 905.5,
        "width": 150,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2399,
        "y": 945.5,
        "width": 298,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2570,
        "y": 1009.5,
        "width": 313,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2666,
        "y": 1057.5,
        "width": 178,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3041,
        "y": 1078.5,
        "width": 163,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2911,
        "y": 835.5,
        "width": 91,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2166,
        "y": 876.5,
        "width": 157,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2815,
        "y": 1016.5,
        "width": 132,
        "height": 161,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2967,
        "y": 834.5,
        "width": 62,
        "height": 72,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
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
        xp: 100,
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
        spawnTimer: 20000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
      },

      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1052,
          y: 2679
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1052,
          y: 2679
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "treeLeaf",
        dropRate: 50,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1552,
          y: 2700
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1552,
          y: 2700
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1352,
          y: 2800
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1352,
          y: 2800
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1952,
          y: 2900
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1952,
          y: 2900
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1852,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1852,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },


      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 660,
          y: 3000
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 660,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 960,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 960,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },

      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3052,
          y: 2679
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3052,
          y: 2679
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3552,
          y: 2700
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3552,
          y: 2700
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3352,
          y: 2800
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3352,
          y: 2800
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3952,
          y: 2900
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3952,
          y: 2900
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "brownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3852,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3852,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },


      {
        name: "blackBrownBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1660,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1660,
          y: 3300
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "whiteBunny",
        imgw: 31,
        imgh: 27,
        imgcw: 31,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1960,
          y: 3300
        },
        w: 80,
        h: 80,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState, idleState],
        damaged: 0,
        health: 4,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1960,
          y: 3300
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
    foregroundImageOpen: slimeForestPathFront,
    backgroundImageOpen: slimeForestPathOpen,
    playerPos: {
      x: 1935,
      y: 2750,
    },
    colliders: [
      {
        "type": "dialog",
        "name": "Mushroom Town Quest",
        "x": 2451.5,
        "y": 1984.5,
        "width": 186,
        "height": 147,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "wall",
        "condition": "slimeForestPath",
        "x": 2617,
        "y": 1885.5,
        "width": 309,
        "height": 511,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "condition": "slimeForestPath",
        "x": 2335.5,
        "y": 1950.5,
        "width": 144,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "chest",
        "item": "gemArcane",
        "x": 1994,
        "y": 1825.5,
        "width": 225,
        "height": 156,
        "color": "rgb(255, 255, 204, 0)"
      },
      {
        "type": "wall",
        "x": 2054,
        "y": 1513.5,
        "width": 75,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1489,
        "y": 1812.5,
        "width": 47,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2023,
        "y": 1808.5,
        "width": 64,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2216,
        "y": 1818.5,
        "width": 57,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2420,
        "y": 1774.5,
        "width": 79,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2612,
        "y": 1870.5,
        "width": 61,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2506,
        "y": 1629.5,
        "width": 53,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2655,
        "y": 1649.5,
        "width": 60,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2777,
        "y": 1812.5,
        "width": 41,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2862,
        "y": 1879.5,
        "width": 94,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3007,
        "y": 1939.5,
        "width": 83,
        "height": 453,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2771,
        "y": 2371.5,
        "width": 335,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676,
        "y": 2450.5,
        "width": 67,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2712,
        "y": 2373.5,
        "width": 77,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2529,
        "y": 2490.5,
        "width": 67,
        "height": 167,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2350,
        "y": 2518.5,
        "width": 90,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2299,
        "y": 2435.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2430,
        "y": 2593.5,
        "width": 140,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2562,
        "y": 2568.5,
        "width": 184,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2230,
        "y": 2637.5,
        "width": 62,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2146,
        "y": 2848.5,
        "width": 60,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2195,
        "y": 2996.5,
        "width": 55,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2311,
        "y": 2960.5,
        "width": 56,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2020,
        "y": 2965.5,
        "width": 66,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1888,
        "y": 3099.5,
        "width": 63,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1791,
        "y": 3028.5,
        "width": 48,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1653,
        "y": 3113.5,
        "width": 92,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1499,
        "y": 3020.5,
        "width": 50,
        "height": 166,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1419,
        "y": 2812.5,
        "width": 53,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1404,
        "y": 2565.5,
        "width": 75,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1269,
        "y": 2714.5,
        "width": 86,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1150,
        "y": 2818.5,
        "width": 55,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1412,
        "y": 2919.5,
        "width": 49,
        "height": 235,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1427,
        "y": 3112.5,
        "width": 96,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1519,
        "y": 3157.5,
        "width": 166,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1700,
        "y": 3191.5,
        "width": 234,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2068,
        "y": 3142.5,
        "width": 62,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1935,
        "y": 3214.5,
        "width": 170,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2163,
        "y": 3259.5,
        "width": 59,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2121,
        "y": 3206.5,
        "width": 99,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2209,
        "y": 3230.5,
        "width": 243,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2314,
        "y": 3062.5,
        "width": 50,
        "height": 195,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2469,
        "y": 2826.5,
        "width": 80,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2366,
        "y": 2973.5,
        "width": 115,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2440,
        "y": 2592.5,
        "width": 63,
        "height": 269,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3022,
        "y": 1757.5,
        "width": 41,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2940,
        "y": 1860.5,
        "width": 149,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3047,
        "y": 1879.5,
        "width": 31,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2701,
        "y": 1672.5,
        "width": 236,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2778,
        "y": 1701.5,
        "width": 41,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2811,
        "y": 1876.5,
        "width": 158,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2538,
        "y": 1638.5,
        "width": 156,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2257,
        "y": 1500.5,
        "width": 55,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2306,
        "y": 1702.5,
        "width": 65,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2435,
        "y": 1450.5,
        "width": 83,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2499,
        "y": 1539.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2346,
        "y": 1347.5,
        "width": 62,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2398,
        "y": 1421.5,
        "width": 59,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2271,
        "y": 1168.5,
        "width": 44,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2478,
        "y": 1230.5,
        "width": 45,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2380,
        "y": 1066.5,
        "width": 61,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2157,
        "y": 1309.5,
        "width": 65,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2432,
        "y": 1130.5,
        "width": 73,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2484,
        "y": 1272.5,
        "width": 50,
        "height": 201,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2133,
        "y": 1057.5,
        "width": 56,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2019,
        "y": 1229.5,
        "width": 47,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1948,
        "y": 1011.5,
        "width": 58,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2037,
        "y": 843.5,
        "width": 71,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2243,
        "y": 906.5,
        "width": 52,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2272,
        "y": 966.5,
        "width": 190,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2426,
        "y": 1012.5,
        "width": 31,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2093,
        "y": 895.5,
        "width": 167,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1891,
        "y": 799.5,
        "width": 67,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1942,
        "y": 860.5,
        "width": 132,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1818,
        "y": 1175.5,
        "width": 51,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1613,
        "y": 1124.5,
        "width": 88,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1474,
        "y": 1210.5,
        "width": 83,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1383,
        "y": 1072.5,
        "width": 45,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1522,
        "y": 955.5,
        "width": 53,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1619,
        "y": 847.5,
        "width": 49,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1758,
        "y": 958.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1744,
        "y": 741.5,
        "width": 49,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1775,
        "y": 793.5,
        "width": 163,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1629,
        "y": 777.5,
        "width": 148,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1650,
        "y": 791.5,
        "width": 20,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1417,
        "y": 840.5,
        "width": 63,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1467,
        "y": 874.5,
        "width": 163,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1246,
        "y": 927.5,
        "width": 58,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1273,
        "y": 921.5,
        "width": 166,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1119,
        "y": 1032.5,
        "width": 55,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1145,
        "y": 1038.5,
        "width": 174,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1267,
        "y": 977.5,
        "width": 33,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1215,
        "y": 1188.5,
        "width": 66,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1038,
        "y": 1226.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 1081.5,
        "width": 87,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 1356.5,
        "width": 62,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 966,
        "y": 1419.5,
        "width": 57,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 982,
        "y": 1273.5,
        "width": 73,
        "height": 165,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1125,
        "y": 1591.5,
        "width": 50,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 939,
        "y": 1481.5,
        "width": 43,
        "height": 192,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1257,
        "y": 1516.5,
        "width": 73,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1321,
        "y": 1677.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1408,
        "y": 2199.5,
        "width": 53,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 2166.5,
        "width": 55,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1154,
        "y": 2290.5,
        "width": 53,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1036,
        "y": 2413.5,
        "width": 62,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1212,
        "y": 2505.5,
        "width": 76,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1322,
        "y": 2383.5,
        "width": 63,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1512,
        "y": 2473.5,
        "width": 46,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088,
        "y": 2605.5,
        "width": 56,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 2497.5,
        "width": 57,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 2693.5,
        "width": 39,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1290,
        "y": 2951.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1199,
        "y": 2881.5,
        "width": 44,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1224,
        "y": 2955.5,
        "width": 91,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1336,
        "y": 3052.5,
        "width": 91,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "lobby",
        "x": 1402,
        "y": 2757.5,
        "width": 730,
        "height": 334,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1086,
        "y": 1810,
        "width": 77,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1155,
        "y": 1780,
        "width": 73,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1216,
        "y": 1880,
        "width": 61,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1289,
        "y": 1795,
        "width": 88,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 975,
        "y": 1773,
        "width": 58,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1042,
        "y": 1690,
        "width": 62,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 852,
        "y": 1830,
        "width": 70,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 729,
        "y": 1789,
        "width": 91,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 652,
        "y": 1855,
        "width": 65,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 547,
        "y": 1777,
        "width": 79,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 756,
        "y": 1550,
        "width": 66,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 411,
        "y": 1813,
        "width": 75,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 259,
        "y": 1777,
        "width": 81,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 167,
        "y": 1838,
        "width": 89,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 54,
        "y": 1894,
        "width": 71,
        "height": 198,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 70,
        "y": 2065,
        "width": 58,
        "height": 224,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 53,
        "y": 2277,
        "width": 146,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 171,
        "y": 2330,
        "width": 104,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 283,
        "y": 2245,
        "width": 78,
        "height": 186,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 260,
        "y": 2364,
        "width": 84,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 363,
        "y": 2309,
        "width": 131,
        "height": 166,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 433,
        "y": 2248,
        "width": 68,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 552,
        "y": 2165,
        "width": 56,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 453,
        "y": 2344,
        "width": 629,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 620,
        "y": 2265,
        "width": 583,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 795.5,
        "y": 2137,
        "width": 54,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 930.5,
        "y": 2109,
        "width": 47,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1064.5,
        "y": 2146,
        "width": 63,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1227.5,
        "y": 2193,
        "width": 202,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldPath",
        "x": 61,
        "y": 1729.5,
        "width": 426,
        "height": 746,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": -17,
        "y": 1822.5,
        "width": 199,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2074,
        "y": 1867.5,
        "width": 128,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2171,
        "y": 1913.5,
        "width": 100,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2246,
        "y": 1964.5,
        "width": 97,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2465,
        "y": 1976.5,
        "width": 109,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2530,
        "y": 1905.5,
        "width": 97,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2277,
        "y": 1888.5,
        "width": 258,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2463,
        "y": 1915.5,
        "width": 22,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2289,
        "y": 1898.5,
        "width": 58,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1208,
        "y": 1833.5,
        "width": 167,
        "height": 146,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "mushroomForest",
        "x": 2853.5,
        "y": 1993,
        "width": 188,
        "height": 384,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "grasslandsTower",
        "x": 2347.5,
        "y": 1933,
        "width": 119,
        "height": 65,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "islandOne",
        "x": 1329.5,
        "y": 1155,
        "width": 809,
        "height": 321,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },
  
  grasslandsTower: {
    areaName: "GRASSLANDS TOWER",
    areaSounds: towerSoundSoundtrack,
    backgroundImage: grasslandsTower,
    foregroundImage: grasslandsTowerFront,
    playerPos: {
      x: 1995,
      y: 3400,
    },
    colliders: [
      {
        "type": "wall",
        "x": 1685.5,
        "y": 3306,
        "width": 44,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1783.5,
        "y": 3369,
        "width": 45,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1724.5,
        "y": 3377,
        "width": 73,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1709.5,
        "y": 3353,
        "width": 65,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1629.5,
        "y": 3180,
        "width": 66,
        "height": 160,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1656.5,
        "y": 3049,
        "width": 450,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1839.5,
        "y": 3139,
        "width": 119,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1768.5,
        "y": 3068,
        "width": 15,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2093.5,
        "y": 3065,
        "width": 91,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2117.5,
        "y": 3097,
        "width": 147,
        "height": 323,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1837.5,
        "y": 3385,
        "width": 154,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1790.5,
        "y": 3397,
        "width": 95,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2036.5,
        "y": 3376,
        "width": 103,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1986.5,
        "y": 3382,
        "width": 75,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2067.5,
        "y": 3333,
        "width": 83,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2036.5,
        "y": 3358,
        "width": 61,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1999.5,
        "y": 3359,
        "width": 61,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2079.5,
        "y": 3298,
        "width": 69,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1607.5,
        "y": 3119,
        "width": 95,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": 1724.5,
        "y": 3315,
        "width": 96,
        "height": 87,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },
  
  mushroomForest: {
    areaName: "MOOSHROOM TRIAL",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: mushroomForest,
    foregroundImage: mushroomForestFront,
    playerPos: {
      x: 700,
      y: 2000,
    },
    colliders: [
      {
        "type": "scoreBoard",
        "x": 2434,
        "y": 834.5,
        "width": 296,
        "height": 250,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 614,
        "y": 1577.5,
        "width": 45,
        "height": 216,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 655,
        "y": 1661.5,
        "width": 22,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 620,
        "y": 1585.5,
        "width": 79,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": -58,
        "y": 1417.5,
        "width": 486,
        "height": 797,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 678,
        "y": 1527.5,
        "width": 57,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 728,
        "y": 1486.5,
        "width": 72,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 766,
        "y": 1427.5,
        "width": 44,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 782,
        "y": 1389.5,
        "width": 96,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 859,
        "y": 1357.5,
        "width": 89,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 941,
        "y": 1278.5,
        "width": 72,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 986,
        "y": 1247.5,
        "width": 104,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1062,
        "y": 1205.5,
        "width": 90,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1086,
        "y": 1128.5,
        "width": 128,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1168,
        "y": 1031.5,
        "width": 44,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1174,
        "y": 985.5,
        "width": 136,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1251,
        "y": 947.5,
        "width": 163,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1382,
        "y": 788.5,
        "width": 36,
        "height": 168,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1400,
        "y": 732.5,
        "width": 242,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1616,
        "y": 734.5,
        "width": 44,
        "height": 154,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1633,
        "y": 856.5,
        "width": 285,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1892,
        "y": 760.5,
        "width": 42,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1917,
        "y": 773.5,
        "width": 279,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2155,
        "y": 772.5,
        "width": 72,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2347,
        "y": 773.5,
        "width": 79,
        "height": 163,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2186,
        "y": 778.5,
        "width": 231,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2404,
        "y": 788.5,
        "width": 91,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2469,
        "y": 816.5,
        "width": 54,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2629,
        "y": 896.5,
        "width": 24,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2627,
        "y": 740.5,
        "width": 43,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2399,
        "y": 712.5,
        "width": 267,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2485,
        "y": 762.5,
        "width": 169,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3454,
        "y": 1744.5,
        "width": 48,
        "height": 255,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3406,
        "y": 1962.5,
        "width": 78,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3371,
        "y": 2005.5,
        "width": 101,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3359,
        "y": 2034.5,
        "width": 45,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3356,
        "y": 2111.5,
        "width": 38,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3301,
        "y": 2167.5,
        "width": 105,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3294,
        "y": 2219.5,
        "width": 163,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3298,
        "y": 2237.5,
        "width": 143,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3342,
        "y": 2263.5,
        "width": 27,
        "height": 179,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3302,
        "y": 2425.5,
        "width": 62,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3270,
        "y": 2477.5,
        "width": 42,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3234,
        "y": 2538.5,
        "width": 74,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3215,
        "y": 2560.5,
        "width": 36,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3173,
        "y": 2652.5,
        "width": 65,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3113,
        "y": 2665.5,
        "width": 88,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3039,
        "y": 2719.5,
        "width": 139,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2904,
        "y": 2765.5,
        "width": 190,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2798,
        "y": 2800.5,
        "width": 174,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2659,
        "y": 2826.5,
        "width": 209,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2504,
        "y": 2829.5,
        "width": 242,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2181,
        "y": 2839.5,
        "width": 376,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1999,
        "y": 2832.5,
        "width": 273,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1956,
        "y": 2761.5,
        "width": 87,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1776,
        "y": 2738.5,
        "width": 209,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1621,
        "y": 2671.5,
        "width": 206,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1452,
        "y": 2652.5,
        "width": 221,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1325,
        "y": 2619.5,
        "width": 165,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1313,
        "y": 2546.5,
        "width": 46,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1094,
        "y": 2486.5,
        "width": 254,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1038,
        "y": 2436.5,
        "width": 123,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 918,
        "y": 2388.5,
        "width": 179,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 829,
        "y": 2340.5,
        "width": 127,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 787,
        "y": 2285.5,
        "width": 64,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 674,
        "y": 2248.5,
        "width": 140,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 601,
        "y": 2199.5,
        "width": 96,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 589,
        "y": 2130.5,
        "width": 44,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 494,
        "y": 2094.5,
        "width": 113,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2625,
        "y": 798.5,
        "width": 159,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2717,
        "y": 828.5,
        "width": 138,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2811,
        "y": 869.5,
        "width": 63,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2859,
        "y": 942.5,
        "width": 84,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2921,
        "y": 982.5,
        "width": 114,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3023,
        "y": 1033.5,
        "width": 106,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3067,
        "y": 1045.5,
        "width": 78,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3126,
        "y": 1149.5,
        "width": 111,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3217,
        "y": 1175.5,
        "width": 25,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3178,
        "y": 1152.5,
        "width": 26,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3235,
        "y": 1197.5,
        "width": 121,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3320,
        "y": 1218.5,
        "width": 50,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3363,
        "y": 1281.5,
        "width": 60,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3241,
        "y": 1212.5,
        "width": 104,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3359,
        "y": 1302.5,
        "width": 79,
        "height": 151,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3411,
        "y": 1410.5,
        "width": 79,
        "height": 187,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3445,
        "y": 1553.5,
        "width": 51,
        "height": 296,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 632,
        "y": 1724.5,
        "width": 58,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 943,
        "y": 1340.5,
        "width": 65,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 896,
        "y": 1297.5,
        "width": 67,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 830,
        "y": 1363.5,
        "width": 70,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 865,
        "y": 1336.5,
        "width": 70,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1017,
        "y": 1213.5,
        "width": 89,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1061,
        "y": 1176.5,
        "width": 80,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1104,
        "y": 1065.5,
        "width": 85,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1187,
        "y": 946.5,
        "width": 108,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1281,
        "y": 810.5,
        "width": 108,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1265,
        "y": 903.5,
        "width": 69,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1513,
        "y": 693.5,
        "width": 158,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1520,
        "y": 682.5,
        "width": 980,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2860,
        "y": 898.5,
        "width": 69,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2938,
        "y": 958.5,
        "width": 63,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3483,
        "y": 1948.5,
        "width": 174,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3616,
        "y": 1940.5,
        "width": 150,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3324,
        "y": 2377.5,
        "width": 370,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3656,
        "y": 2293.5,
        "width": 67,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3712,
        "y": 2228.5,
        "width": 126,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3804,
        "y": 2144.5,
        "width": 65,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3736,
        "y": 1931.5,
        "width": 113,
        "height": 154,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3812,
        "y": 2040.5,
        "width": 68,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2311,
        "y": 2339.5,
        "width": 106,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2379,
        "y": 2388.5,
        "width": 152,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2387,
        "y": 2331.5,
        "width": 211,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2514,
        "y": 2285.5,
        "width": 234,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2683,
        "y": 2255.5,
        "width": 190,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2813,
        "y": 2213.5,
        "width": 55,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 1515.5,
        "width": 500,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 170,
        "y": 1362.5,
        "width": 395,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 303,
        "y": 1424.5,
        "width": 98,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -112,
        "y": 1607.5,
        "width": 208,
        "height": 508,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 30,
        "y": 1913.5,
        "width": 138,
        "height": 336,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 100,
        "y": 2090.5,
        "width": 208,
        "height": 194,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 217,
        "y": 2176.5,
        "width": 327,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 594,
        "y": 1245.5,
        "width": 83,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 685,
        "y": 1120.5,
        "width": 55,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 896,
        "y": 931.5,
        "width": 76,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 802,
        "y": 1235.5,
        "width": 54,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1094,
        "y": 694.5,
        "width": 76,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1018,
        "y": 999.5,
        "width": 44,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1433,
        "y": 637.5,
        "width": 204,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1546,
        "y": 589.5,
        "width": 717,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1783,
        "y": 495.5,
        "width": 463,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2208,
        "y": 588.5,
        "width": 214,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2385,
        "y": 622.5,
        "width": 151,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2611,
        "y": 471.5,
        "width": 82,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2826,
        "y": 698.5,
        "width": 88,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2997,
        "y": 668.5,
        "width": 71,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3209,
        "y": 706.5,
        "width": 61,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3095,
        "y": 823.5,
        "width": 78,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3420,
        "y": 1024.5,
        "width": 47,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3335,
        "y": 823.5,
        "width": 73,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3459,
        "y": 804.5,
        "width": 54,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3603,
        "y": 1066.5,
        "width": 83,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3552,
        "y": 950.5,
        "width": 50,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3724,
        "y": 1325.5,
        "width": 59,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3861,
        "y": 1324.5,
        "width": 70,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2822,
        "y": -200,
        "width": 889,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3383,
        "y": -114,
        "width": 347,
        "height": 162,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3601,
        "y": 5,
        "width": 580,
        "height": 210,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4050,
        "y": 124,
        "width": 110,
        "height": 3691.5,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3879,
        "y": 2437.5,
        "width": 74,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3623,
        "y": 2591.5,
        "width": 67,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3595,
        "y": 2846.5,
        "width": 54,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1192,
        "y": 3954,
        "width": 2952,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4054,
        "y": 3744,
        "width": 73,
        "height": 258,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1986,
        "y": 3860,
        "width": 85,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2050,
        "y": 3559,
        "width": 54,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 981,
        "y": 3808,
        "width": 243,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 879,
        "y": 3776.5,
        "width": 186,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 625,
        "y": 3669.5,
        "width": 314,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 545,
        "y": 3569.5,
        "width": 149,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 443,
        "y": 3501.5,
        "width": 163,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 338,
        "y": 3443.5,
        "width": 158,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -43,
        "y": 3432.5,
        "width": 441,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 3196.5,
        "width": 85,
        "height": 285,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -96,
        "y": 2067.5,
        "width": 52,
        "height": 1223,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "chest",
        "item": "mushroomTrial",
        "x": 2215,
        "y": 850.5,
        "width": 180,
        "height": 80,
        "color": "rgb(255, 255, 204, 0.0)"
      },
      {
        "type": "wall",
        "x": 2245,
        "y": 827.5,
        "width": 103,
        "height": 61,
        "color": "rgb(0, 0, 0, 0.0)"
      }
    ],
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1825,
          y: 1158
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
          x: 1825,
          y: 1158
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 2577,
          y: 1128
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
          x: 2577,
          y: 1128
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 2842,
          y: 1705
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
          x: 2842,
          y: 1705
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1474,
          y: 1707
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
          x: 1474,
          y: 1707
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 1900,
          y: 2125
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
          x: 1900,
          y: 2125
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
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
        xp: 100,
        speedX: 15,
        speedY: 15,
        spawn: {
          x: 2580,
          y: 2048
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
          x: 2580,
          y: 2048
        },
        spawnTimer: null,
        enemyStateInt: 1000,
        active: false,
        drop: "miniMushroom",
        dropRate: 30,
      },
      {
        name: "mooshroomBossRed",
        isBoss: true,
        imgw: 147,
        imgh: 175,
        imgcw: 147,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 5,
        xp: 1000,
        speedX: 0,
        speedY: 0,
        spawn: {
          x: 1900,
          y: 1100
        },
        w: 550,
        h: 550,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [lazerMooshState, attackCircleMooshBossState],
        damaged: 0,
        health: 100,
        angle: 0,
        maxHealth: 100,
        baseSpawn: {
          x: 1900,
          y: 1100
        },
        spawnTimer: null,
        enemyStateInt: 5000,
        active: false,
      },
    ]
  },

  restfieldPath: {
    areaName: "RESTFIELD FOREST",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restfieldPath,
    foregroundImage: restfieldPathFront,
    backgroundImageOpen: restfieldPathOpen,
    foregroundImageOpen: restfieldPathFrontOpen,
    
    playerPos: {
      x: 3900,
      y: 3850,
    },
    colliders: [
      {
        "type": "dialog",
        "name": "A locked door Quest",
        "x": 1036.5,
        "y": 1697.5,
        "width": 323,
        "height": 251,
        "color": "rgb(179, 255, 213, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPath",
        "x": 3752,
        "y": 3554,
        "width": 426,
        "height": 330,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 3103,
        "y": 3948,
        "width": 169,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2764,
        "y": 3981,
        "width": 73,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2675,
        "y": 3945,
        "width": 114,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 813,
        "y": 4078,
        "width": 1712,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 768,
        "y": 3913,
        "width": 150,
        "height": 190,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 695,
        "y": 3790,
        "width": 136,
        "height": 176,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 666,
        "y": 3715,
        "width": 79,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 289,
        "y": 3780,
        "width": 427,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 93,
        "y": 3715,
        "width": 207,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -74,
        "y": 3647.5,
        "width": 195,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -83,
        "y": 3505.5,
        "width": 59,
        "height": 201,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -95,
        "y": 3345.5,
        "width": 51,
        "height": 197,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -109,
        "y": 3211.5,
        "width": 97,
        "height": 163,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -109,
        "y": 3071.5,
        "width": 48,
        "height": 165,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -112,
        "y": 2460,
        "width": 37,
        "height": 638,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -107,
        "y": 2522,
        "width": 104,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -103,
        "y": 2075,
        "width": 36,
        "height": 410,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -112,
        "y": 1841,
        "width": 40,
        "height": 263,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -111,
        "y": 1635,
        "width": 34,
        "height": 247,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -110,
        "y": 1664,
        "width": 712,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1020,
        "y": 1597,
        "width": 2894,
        "height": 194,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3717,
        "y": 1938.5,
        "width": 48,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3829,
        "y": 1838.5,
        "width": 42,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3877,
        "y": 1895.5,
        "width": 64,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3863,
        "y": 1751.5,
        "width": 279,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4032,
        "y": 1879.5,
        "width": 46,
        "height": 283,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4046,
        "y": 2136.5,
        "width": 96,
        "height": 606,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3944,
        "y": 2490.5,
        "width": 145,
        "height": 154,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3960,
        "y": 2740.5,
        "width": 90,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4067,
        "y": 2800.5,
        "width": 81,
        "height": 688,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3837,
        "y": 3288.5,
        "width": 53,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4021,
        "y": 3234.5,
        "width": 40,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3947,
        "y": 3035.5,
        "width": 158,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3940,
        "y": 3182.5,
        "width": 66,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3273,
        "y": 3247.5,
        "width": 62,
        "height": 168,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3638,
        "y": 3255.5,
        "width": 54,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2805,
        "y": 3030.5,
        "width": 28,
        "height": 172,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2797,
        "y": 2639.5,
        "width": 34,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1860,
        "y": 2781.5,
        "width": 40,
        "height": 169,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1857,
        "y": 2395.5,
        "width": 46,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1081,
        "y": 2146.5,
        "width": 36,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 665,
        "y": 2152.5,
        "width": 35,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 310,
        "y": 2700.5,
        "width": 72,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1680,
        "y": 3447.5,
        "width": 82,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1537,
        "y": 3450.5,
        "width": 34,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1518,
        "y": 3463.5,
        "width": 32,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 379,
        "y": 2684.5,
        "width": 57,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 227,
        "y": 2769.5,
        "width": 60,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3501,
        "y": 2119.5,
        "width": 113,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1349,
        "y": 1776.5,
        "width": 101,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 1294.5,
        "width": 26,
        "height": 277,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -106,
        "y": 1044.5,
        "width": 26,
        "height": 277,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -101,
        "y": 802.5,
        "width": 24,
        "height": 261,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -98,
        "y": 683.5,
        "width": 14,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -44,
        "y": 600.5,
        "width": 52,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -84,
        "y": 654.5,
        "width": 55,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 131,
        "y": 657.5,
        "width": 64,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 242,
        "y": 618.5,
        "width": 54,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 395,
        "y": 668.5,
        "width": 91,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 315,
        "y": 557.5,
        "width": 51,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -14,
        "y": 550.5,
        "width": 89,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -105,
        "y": 289,
        "width": 62,
        "height": 386.5,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -111,
        "y": -54,
        "width": 43,
        "height": 401,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -30,
        "y": 128,
        "width": 47,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 73,
        "y": 217,
        "width": 63,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -80,
        "y": -7,
        "width": 60,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -106,
        "y": -268,
        "width": 70,
        "height": 316,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -88,
        "y": -261,
        "width": 1970,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1211,
        "y": -246,
        "width": 79,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1397,
        "y": -247,
        "width": 67,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1497,
        "y": -126,
        "width": 55,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1604,
        "y": -168,
        "width": 51,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1655,
        "y": -81,
        "width": 68,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1841,
        "y": -184,
        "width": 62,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1356,
        "y": -246,
        "width": 563,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1757,
        "y": -170,
        "width": 64,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2084,
        "y": -79,
        "width": 63,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1995,
        "y": -177,
        "width": 91,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1908,
        "y": -179,
        "width": 145,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1956,
        "y": -165,
        "width": 2083,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2953,
        "y": -143,
        "width": 581,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3120,
        "y": -84,
        "width": 324,
        "height": 153,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3318,
        "y": 26,
        "width": 145,
        "height": 175,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3421,
        "y": 155,
        "width": 464,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3344,
        "y": 157.5,
        "width": 68,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3816,
        "y": 163.5,
        "width": 104,
        "height": 137,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3896,
        "y": 271.5,
        "width": 259,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4122,
        "y": 283.5,
        "width": 40,
        "height": 685,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4024,
        "y": 850.5,
        "width": 45,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4015,
        "y": 625.5,
        "width": 63,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3901,
        "y": 586.5,
        "width": 52,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3717,
        "y": 639.5,
        "width": 66,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3608,
        "y": 592.5,
        "width": 58,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3413,
        "y": 645.5,
        "width": 91,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3551,
        "y": 531.5,
        "width": 55,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3815,
        "y": 528.5,
        "width": 76,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4014,
        "y": 1078.5,
        "width": 72,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4083,
        "y": 876.5,
        "width": 87,
        "height": 602,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4006,
        "y": 1354.5,
        "width": 112,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3930,
        "y": 1437.5,
        "width": 164,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3835,
        "y": 1547.5,
        "width": 212,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4011,
        "y": 673.5,
        "width": 65,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3837,
        "y": 255.5,
        "width": 72,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1993,
        "y": 575.5,
        "width": 118,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2488,
        "y": -115,
        "width": 102,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2537,
        "y": -15,
        "width": 131,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2575,
        "y": -142,
        "width": 166,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2684,
        "y": -95,
        "width": 163,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2912,
        "y": -110,
        "width": 166,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2968,
        "y": -79,
        "width": 104,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2136,
        "y": 550.5,
        "width": 20,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2092,
        "y": 535.5,
        "width": 42,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1808,
        "y": 443.5,
        "width": 32,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1798,
        "y": 465.5,
        "width": 14,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3299,
        "y": 2187.5,
        "width": 25,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3293,
        "y": 2211.5,
        "width": 22,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3629,
        "y": 2106.5,
        "width": 16,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3637,
        "y": 2139.5,
        "width": 27,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restFiledTown",
        "x": 663,
        "y": -273,
        "width": 501,
        "height": 258,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "condition": "restfieldPath",
        "x": 606,
        "y": 1601.5,
        "width": 517,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2498,
        "y": 4055,
        "width": 1577,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4086,
        "y": 3413.5,
        "width": 69,
        "height": 661,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4018,
        "y": 4029.5,
        "width": 111,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1063,
        "y": 817.5,
        "width": 19,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 691,
        "y": 584.5,
        "width": 28,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 317.5,
        "width": 36,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 658,
        "y": 15,
        "width": 57,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: []
  },

  restfieldTownCemetery: {
    areaName: "RESTFIELD CEMETERY",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restfieldTownCemetery,
    foregroundImage: restfieldTownCemeteryFront,
    
    playerPos: {
      x: 3770,
      y: 2500,
    },
    colliders: [
      {
        "type": "wall",
        "x": 2187.5,
        "y": 1886,
        "width": 63,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1765.5,
        "y": 1867,
        "width": 54,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1925.5,
        "y": 1571,
        "width": 196,
        "height": 191,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2249.5,
        "y": 1459,
        "width": 35,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1765.5,
        "y": 1459,
        "width": 25,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1561.5,
        "y": 1487,
        "width": 55,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1019.5,
        "y": 1492,
        "width": 369,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1000.5,
        "y": 1123,
        "width": 640,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 949.5,
        "y": 1006,
        "width": 2130,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2932.5,
        "y": 1072,
        "width": 40,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2433.5,
        "y": 1202,
        "width": 519,
        "height": 149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1807.5,
        "y": 1127,
        "width": 421,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2443.5,
        "y": 1495,
        "width": 636,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2443.5,
        "y": 1962,
        "width": 244,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2848.5,
        "y": 1962,
        "width": 78,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2522.5,
        "y": 2147,
        "width": 108,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2786.5,
        "y": 2153,
        "width": 211,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2475.5,
        "y": 2336,
        "width": 558,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2537.5,
        "y": 2504,
        "width": 326,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3034.5,
        "y": 1004,
        "width": 50,
        "height": 1697,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 987.5,
        "y": 1002,
        "width": 120,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 953.5,
        "y": 1005,
        "width": 54,
        "height": 1693,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1105.5,
        "y": 2690,
        "width": 382,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1320.5,
        "y": 2756,
        "width": 60,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 667.5,
        "y": 3192,
        "width": 135,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 818.5,
        "y": 3169,
        "width": 88,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1160.5,
        "y": 2470,
        "width": 81,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1416.5,
        "y": 2476,
        "width": 78,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088.5,
        "y": 2303,
        "width": 598,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1137.5,
        "y": 2090,
        "width": 478,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088.5,
        "y": 1909,
        "width": 63,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1323.5,
        "y": 1915,
        "width": 226,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -1,
        "y": 2270,
        "width": 224,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -108,
        "y": 2346,
        "width": 193,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -105,
        "y": 2419,
        "width": 38,
        "height": 264,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -98,
        "y": 2615,
        "width": 187,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -58,
        "y": 2561,
        "width": 143,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -85,
        "y": 2867,
        "width": 258,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -82,
        "y": 2665,
        "width": 51,
        "height": 246,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 938.5,
        "y": 2640,
        "width": 925,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 41,
        "y": 2923,
        "width": 65,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 44,
        "y": 3015,
        "width": 63,
        "height": 371,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 83,
        "y": 3157,
        "width": 107,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 0,
        "y": 3333,
        "width": 105,
        "height": 371,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 72,
        "y": 3490,
        "width": 238,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 38,
        "y": 3658,
        "width": 68,
        "height": 332,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 85,
        "y": 3765,
        "width": 106,
        "height": 293,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 130,
        "y": 3948,
        "width": 395,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 389,
        "y": 3940,
        "width": 786.5,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 849.5,
        "y": 3833,
        "width": 79,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 761,
        "y": 3839,
        "width": 60,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1060.5,
        "y": 4013,
        "width": 304,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1293.5,
        "y": 4077,
        "width": 611,
        "height": 25,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1513.5,
        "y": 3957,
        "width": 53,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1644.5,
        "y": 3983,
        "width": 55,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1547.5,
        "y": 4007,
        "width": 144,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2154.5,
        "y": 3892,
        "width": 55,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2149.5,
        "y": 3923,
        "width": 260,
        "height": 172,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2329.5,
        "y": 3951,
        "width": 999,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2544.5,
        "y": 3823,
        "width": 72,
        "height": 149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676.5,
        "y": 3846,
        "width": 57,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2825.5,
        "y": 3817,
        "width": 90,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2904.5,
        "y": 3877,
        "width": 233,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3131.5,
        "y": 3883,
        "width": 449,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3383.5,
        "y": 3770,
        "width": 59,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3234.5,
        "y": 3808,
        "width": 210,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3515,
        "y": 3919,
        "width": 152,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3647,
        "y": 3959,
        "width": 127,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3757,
        "y": 4003,
        "width": 383,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3845,
        "y": 3770,
        "width": 56,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3824,
        "y": 3944,
        "width": 54,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3840,
        "y": 3841,
        "width": 312,
        "height": 175,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4029,
        "y": 3596,
        "width": 76,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4048,
        "y": 3248,
        "width": 104,
        "height": 618,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3999,
        "y": 2604,
        "width": 187,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4046,
        "y": 2682,
        "width": 119,
        "height": 581,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4034,
        "y": 2133,
        "width": 131,
        "height": 294,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3939,
        "y": 1644,
        "width": 234,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4033,
        "y": 1693,
        "width": 136,
        "height": 466,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3792,
        "y": 1424,
        "width": 388,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4098,
        "y": 1475,
        "width": 74,
        "height": 212,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3826,
        "y": 1304,
        "width": 59,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3847,
        "y": 1240,
        "width": 311,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3943,
        "y": 1167,
        "width": 105,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4016,
        "y": 1096,
        "width": 140,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4002,
        "y": 633,
        "width": 166,
        "height": 513,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3976,
        "y": 620,
        "width": 53,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3724,
        "y": 426,
        "width": 454,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3968,
        "y": 469,
        "width": 223,
        "height": 205,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3793,
        "y": 492,
        "width": 79,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3568,
        "y": 633,
        "width": 113,
        "height": 130,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3590,
        "y": 248,
        "width": 568,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3777,
        "y": 300,
        "width": 106,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3390,
        "y": 268,
        "width": 317,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2966,
        "y": 132,
        "width": 780,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3406,
        "y": 182,
        "width": 80,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2965.5,
        "y": 177,
        "width": 72,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2786.5,
        "y": 114,
        "width": 75,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2843.5,
        "y": 132,
        "width": 191,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2595.5,
        "y": 62,
        "width": 66,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2629.5,
        "y": 75,
        "width": 204,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2516.5,
        "y": -48,
        "width": 81,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2550.5,
        "y": -31,
        "width": 232,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1856.5,
        "y": -221,
        "width": 216,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2026.5,
        "y": -162,
        "width": 133,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2324.5,
        "y": -157,
        "width": 115,
        "height": 157,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2399.5,
        "y": -93,
        "width": 292,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2110.5,
        "y": -74,
        "width": 279,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1774.5,
        "y": -116,
        "width": 153,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1695.5,
        "y": -31,
        "width": 179,
        "height": 207,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1140.5,
        "y": 58,
        "width": 603,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1530.5,
        "y": 138,
        "width": 69,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1351.5,
        "y": 121,
        "width": 58,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 864.5,
        "y": 151,
        "width": 445,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1104.5,
        "y": 194,
        "width": 73,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 592.5,
        "y": 140,
        "width": 319,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 673.5,
        "y": 165,
        "width": 96,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 506.5,
        "y": 73,
        "width": 80,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 564.5,
        "y": 156,
        "width": 85,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 369.5,
        "y": 106,
        "width": 211,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 306,
        "y": 69,
        "width": 80,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 99,
        "y": 332,
        "width": 262,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 191,
        "y": 372,
        "width": 118,
        "height": 184,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 22,
        "y": 89,
        "width": 320,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 97,
        "y": 132,
        "width": 135,
        "height": 237,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -14,
        "y": 460,
        "width": 240,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -46,
        "y": 512,
        "width": 130,
        "height": 216,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -26,
        "y": 700,
        "width": 99,
        "height": 312,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 24,
        "y": 923,
        "width": 187,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 46,
        "y": 983,
        "width": 105,
        "height": 321,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 133,
        "y": 1033,
        "width": 65,
        "height": 300,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 187,
        "y": 1243,
        "width": 88,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 253,
        "y": 1265,
        "width": 80,
        "height": 129,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 150,
        "y": 1344,
        "width": 145,
        "height": 260,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 240,
        "y": 1496,
        "width": 154,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 309,
        "y": 1532,
        "width": 184,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 379,
        "y": 1587,
        "width": 56,
        "height": 167,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 152,
        "y": 1565,
        "width": 110,
        "height": 180,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 134,
        "y": 1719,
        "width": 77,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -39,
        "y": 1732,
        "width": 204,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -27,
        "y": 1816,
        "width": 88,
        "height": 281,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -19,
        "y": 2045,
        "width": 294,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 14,
        "y": 2122,
        "width": 203,
        "height": 212,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 704.5,
        "y": 578,
        "width": 94,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2165.5,
        "y": 278,
        "width": 119,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4092,
        "y": 2314,
        "width": 89,
        "height": 373,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restFiledTown",
        "x": 3919,
        "y": 2301,
        "width": 232,
        "height": 440,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 2185.5,
        "y": 2619,
        "width": 899,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2219.5,
        "y": 3023,
        "width": 39,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1743.5,
        "y": 3020,
        "width": 29,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1726.5,
        "y": 3624,
        "width": 35,
        "height": 97,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2223.5,
        "y": 3641,
        "width": 48,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2840.5,
        "y": 3127,
        "width": 32,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2846.5,
        "y": 3472,
        "width": 30,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3385,
        "y": 2865,
        "width": 54,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3805,
        "y": 2868,
        "width": 47,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1833,
        "y": 4078,
        "width": 395,
        "height": 11,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldMall",
        "x": 1868,
        "y": 3902,
        "width": 325,
        "height": 193,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1115,
        "y": 1298.5,
        "width": 459,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: [
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 1088.5,
          y: 2979
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1088.5,
          y: 2979
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 190,
          y: 2400
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 190,
          y: 2400
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 267,
          y: 1755
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 267,
          y: 1755
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2378.5,
          y: 2812.5
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2378.5,
          y: 2812.5
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 310.5,
          y: 868
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 310.5,
          y: 868
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 425,
          y: 267
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 425,
          y: 267
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 1460.5,
          y: 504
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1460.5,
          y: 504
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2111.5,
          y: 730
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2111.5,
          y: 730
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2329.5,
          y: -4
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2329.5,
          y: -4
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 2994.5,
          y: 540
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 2994.5,
          y: 540
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 3450,
          y: 1243
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3450,
          y: 1243
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
      {
        name: "restfieldGhost",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 1,
        speedX: 2,
        speedY: 2,
        spawn: {
          x: 3363,
          y: 1652
        },
        w: 140,
        h: 140,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveState],
        damaged: 0,
        health: 5,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 3363,
          y: 1652
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
        drop: "blanket"
      },
    ]
  },

  restFiledTown: {
    areaName: "RESTFIELD TOWN",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restFiledTown,
    foregroundImage: restFiledTownFront,
    
    playerPos: {
      x: 2155,
      y: 3888,
    },
    colliders: [
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldPath",
        "x": 1830,
        "y": 3976,
        "width": 364,
        "height": 144,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldTownCemetery",
        "x": -111,
        "y": 2080.5,
        "width": 235,
        "height": 228,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldTrial",
        "x": 1689.5,
        "y": -237,
        "width": 421,
        "height": 300,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1817,
        "y": 3620,
        "width": 38,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2129,
        "y": 3794,
        "width": 28,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2138,
        "y": 3367.5,
        "width": 14,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1835,
        "y": 3135.5,
        "width": 39,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2137,
        "y": 2872.5,
        "width": 17,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1836,
        "y": 2657.5,
        "width": 36,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1799,
        "y": 2365.5,
        "width": 25,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2180,
        "y": 2354.5,
        "width": 42,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1742,
        "y": 1995.5,
        "width": 426,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1896,
        "y": 2086.5,
        "width": 49,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2138,
        "y": 2028.5,
        "width": 60,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2733,
        "y": 2038.5,
        "width": 104,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2768,
        "y": 2003.5,
        "width": 60,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2487,
        "y": 1832.5,
        "width": 204,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2597,
        "y": 1874.5,
        "width": 89,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2681,
        "y": 1906.5,
        "width": 50,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2329,
        "y": 1750.5,
        "width": 190,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2425,
        "y": 1791.5,
        "width": 78,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2473,
        "y": 1768.5,
        "width": 163,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2630,
        "y": 1812.5,
        "width": 64,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3250,
        "y": 1618.5,
        "width": 114,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3542,
        "y": 1521.5,
        "width": 30,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3566,
        "y": 1555.5,
        "width": 21,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3235,
        "y": 1561.5,
        "width": 35,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3204,
        "y": 1600.5,
        "width": 47,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1669,
        "y": 4043,
        "width": 2419,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2208,
        "y": 3976,
        "width": 223,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2403,
        "y": 3994,
        "width": 299,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2459,
        "y": 3898,
        "width": 103,
        "height": 142,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2557,
        "y": 3922,
        "width": 142,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2716,
        "y": 3846,
        "width": 89,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676,
        "y": 3913,
        "width": 93,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2819,
        "y": 3879,
        "width": 129,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2761,
        "y": 3904,
        "width": 92,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2951,
        "y": 3912,
        "width": 58,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2996,
        "y": 3946,
        "width": 213,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3206,
        "y": 3964,
        "width": 406,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3260,
        "y": 3758,
        "width": 95,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3249,
        "y": 3855,
        "width": 118,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3335,
        "y": 3813,
        "width": 186,
        "height": 81,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3453,
        "y": 3838,
        "width": 592,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3978,
        "y": -261,
        "width": 121,
        "height": 4145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3157,
        "y": 3558,
        "width": 389,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3418,
        "y": 3531,
        "width": 538,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3636,
        "y": 3572,
        "width": 352,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3782,
        "y": 3630,
        "width": 214,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3910,
        "y": 3655,
        "width": 89,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2767,
        "y": 3407.5,
        "width": 486,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2930,
        "y": 3460.5,
        "width": 187,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3057,
        "y": 3493.5,
        "width": 197,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2524,
        "y": 3311.5,
        "width": 285,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2638,
        "y": 3378.5,
        "width": 166,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2422,
        "y": 3172.5,
        "width": 104,
        "height": 146,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2476,
        "y": 3278.5,
        "width": 83,
        "height": 89,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2369,
        "y": 2989.5,
        "width": 79,
        "height": 241,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2408,
        "y": 2927.5,
        "width": 158,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2462,
        "y": 2878.5,
        "width": 199,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2532,
        "y": 2842.5,
        "width": 327,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2609,
        "y": 2808.5,
        "width": 436,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2689,
        "y": 2770.5,
        "width": 531,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2819,
        "y": 2712.5,
        "width": 550,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3125,
        "y": 2676.5,
        "width": 383,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3231,
        "y": 2633.5,
        "width": 241,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3287,
        "y": 2596.5,
        "width": 258,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3394,
        "y": 2560.5,
        "width": 305,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3563,
        "y": 2545.5,
        "width": 344,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3610,
        "y": 2484.5,
        "width": 297,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3717,
        "y": 2421.5,
        "width": 131,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3758,
        "y": 2337.5,
        "width": 94,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3816,
        "y": 2251.5,
        "width": 56,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3844,
        "y": 2162.5,
        "width": 57,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3877,
        "y": 2045.5,
        "width": 60,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3875,
        "y": 1926.5,
        "width": 90,
        "height": 153,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3870,
        "y": 1786.5,
        "width": 97,
        "height": 196,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3887,
        "y": 1626.5,
        "width": 58,
        "height": 193,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3906,
        "y": 1528.5,
        "width": 128,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3929,
        "y": 1178.5,
        "width": 66,
        "height": 331,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3925,
        "y": 982.5,
        "width": 77,
        "height": 255,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2495,
        "y": 578.5,
        "width": 100,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3352,
        "y": -58.5,
        "width": 651,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3482,
        "y": -12.5,
        "width": 198,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3585,
        "y": 75.5,
        "width": 52,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3728,
        "y": 5.5,
        "width": 120,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3808,
        "y": 123.5,
        "width": 127,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3854,
        "y": 245.5,
        "width": 77,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3900,
        "y": 204.5,
        "width": 113,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3008,
        "y": -121,
        "width": 232,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3068,
        "y": -118,
        "width": 876,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3069,
        "y": -56,
        "width": 114,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2246,
        "y": -260,
        "width": 1149,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2779,
        "y": -233,
        "width": 119,
        "height": 176,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2585,
        "y": -225,
        "width": 60,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2318,
        "y": -222,
        "width": 80,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1360,
        "y": -242,
        "width": 1046,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2080,
        "y": -133,
        "width": 10,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1723,
        "y": 210,
        "width": 38,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2084,
        "y": 436.5,
        "width": 30,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1715,
        "y": 669.5,
        "width": 49,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2059,
        "y": 917.5,
        "width": 42,
        "height": 142,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1703,
        "y": 1153.5,
        "width": 40,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2069,
        "y": 1351.5,
        "width": 31,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1663,
        "y": 1545.5,
        "width": 69,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1647,
        "y": 1633.5,
        "width": 45,
        "height": 202,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1546,
        "y": 1648.5,
        "width": 21,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1380,
        "y": 1793.5,
        "width": 119,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1468,
        "y": 1796.5,
        "width": 97,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1272,
        "y": 1819.5,
        "width": 28,
        "height": 214,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1145,
        "y": 1766.5,
        "width": 30,
        "height": 218,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 847,
        "y": 1902.5,
        "width": 185,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 975,
        "y": 1932.5,
        "width": 68,
        "height": 76,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 826,
        "y": 1937.5,
        "width": 39,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 849,
        "y": 2004.5,
        "width": 31,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 880,
        "y": 2035.5,
        "width": 31,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 590,
        "y": 1992.5,
        "width": 44,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 362,
        "y": 1960.5,
        "width": 33,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 94,
        "y": 2210.5,
        "width": 33,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -107,
        "y": 1938.5,
        "width": 57,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 608,
        "y": 1469.5,
        "width": 102,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 787,
        "y": 264,
        "width": 97,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 47,
        "y": -229,
        "width": 1371,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 661,
        "y": -218,
        "width": 50,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 405,
        "y": -213,
        "width": 59,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 902,
        "y": -213,
        "width": 39,
        "height": 155,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1109,
        "y": -213,
        "width": 51,
        "height": 135,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 73,
        "y": -206,
        "width": 117,
        "height": 197,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 114,
        "y": -46,
        "width": 34,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -107,
        "y": -38,
        "width": 234,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -70,
        "y": 15,
        "width": 79,
        "height": 267,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -96,
        "y": 237,
        "width": 48,
        "height": 3741,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -67,
        "y": 3851,
        "width": 115,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 22,
        "y": 3895,
        "width": 1524,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -77,
        "y": 3626,
        "width": 121,
        "height": 134,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 674,
        "y": 3817,
        "width": 76,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 760,
        "y": 3816,
        "width": 101,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 914,
        "y": 3842,
        "width": 84,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1252,
        "y": 3824,
        "width": 161,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1540,
        "y": 3930,
        "width": 82,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1570,
        "y": 3990,
        "width": 114,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 553,
        "y": 3141.5,
        "width": 121,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -50,
        "y": 3175.5,
        "width": 77,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -93,
        "y": 2801.5,
        "width": 110,
        "height": 448,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1687,
        "y": 2005.5,
        "width": 66,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 594,
        "y": 2238.5,
        "width": 55,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      }
    ],
    enemies: []
  },

  restfieldTrial: {
    areaName: "RESTFIELD TRIAL",
    areaSounds: restfieldSoundtrack,
    backgroundImage: restfieldTrial,
    foregroundImage: restfieldTrialFront,
    
    playerPos: {
      x: 2155,
      y: 3888,
    },
    colliders: [
      {
        "type": "scoreBoard",
        "x": 2339,
        "y": 862.5,
        "width": 280,
        "height": 247,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2256.5,
        "y": 2673,
        "width": 568,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "chest",
        "item": "restfieldTrial",
        "x": 1516,
        "y": 826.5,
        "width": 327,
        "height": 236,
        "color": "rgb(255, 255, 204, 0.0)"
      },
        {
          "type": "transition",
          "format": "liquid",
          "destination": "restFiledTown",
          "x": 1844.5,
          "y": 3675.5,
          "width": 380,
          "height": 177,
          "color": "rgb(204, 0, 204, 0)"
        },
        {
          "type": "wall",
          "x": 1457.5,
          "y": 898.5,
          "width": 1188,
          "height": 46,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1455.5,
          "y": 942.5,
          "width": 51,
          "height": 152,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1274.5,
          "y": 1068.5,
          "width": 235,
          "height": 21,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1835.5,
          "y": 911.5,
          "width": 39,
          "height": 78,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1790.5,
          "y": 931.5,
          "width": 50,
          "height": 56,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1647.5,
          "y": 932.5,
          "width": 59,
          "height": 31,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2508.5,
          "y": 934.5,
          "width": 45,
          "height": 102,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2611.5,
          "y": 927.5,
          "width": 29,
          "height": 170,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2612.5,
          "y": 1059.5,
          "width": 214,
          "height": 32,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2811.5,
          "y": 1079.5,
          "width": 32,
          "height": 97,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2819.5,
          "y": 1132.5,
          "width": 197,
          "height": 41,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2988.5,
          "y": 1161.5,
          "width": 28,
          "height": 1206,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2811.5,
          "y": 2318.5,
          "width": 190,
          "height": 50,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2808.5,
          "y": 2338.5,
          "width": 19,
          "height": 370,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2239.5,
          "y": 2670.5,
          "width": 579,
          "height": 54,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1256.5,
          "y": 2683.5,
          "width": 635,
          "height": 46,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1292.5,
          "y": 2249.5,
          "width": 18,
          "height": 451,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1062.5,
          "y": 2320.5,
          "width": 238,
          "height": 69,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1091.5,
          "y": 1045.5,
          "width": 27,
          "height": 1301,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1084.5,
          "y": 1138.5,
          "width": 233,
          "height": 48,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1250.5,
          "y": 1045.5,
          "width": 61,
          "height": 118,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1588.5,
          "y": 2692.5,
          "width": 110,
          "height": 201,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1589.5,
          "y": 2872.5,
          "width": 93,
          "height": 183,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1623.5,
          "y": 3040.5,
          "width": 51,
          "height": 232,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1662.5,
          "y": 3146.5,
          "width": 107,
          "height": 79,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1659.5,
          "y": 3068.5,
          "width": 98,
          "height": 107,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1730.5,
          "y": 3110.5,
          "width": 145,
          "height": 85,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1773.5,
          "y": 3166.5,
          "width": 90,
          "height": 361,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1871.5,
          "y": 3323.5,
          "width": 40,
          "height": 257,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1788.5,
          "y": 3467.5,
          "width": 97,
          "height": 266,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1814.5,
          "y": 3704.5,
          "width": 51,
          "height": 171,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1848.5,
          "y": 3820.5,
          "width": 533,
          "height": 47,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2171.5,
          "y": 3350.5,
          "width": 55,
          "height": 464,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2189.5,
          "y": 3763.5,
          "width": 31,
          "height": 84,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2170.5,
          "y": 3036.5,
          "width": 53,
          "height": 407,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2173.5,
          "y": 2906.5,
          "width": 49,
          "height": 225,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2141.5,
          "y": 2911.5,
          "width": 370,
          "height": 40,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 2423.5,
          "y": 2702.5,
          "width": 54,
          "height": 254,
          "color": "rgb(0, 0, 0, 0)"
        },
        {
          "type": "wall",
          "x": 1700.5,
          "y": 2720,
          "width": 116,
          "height": 110,
          "color": "rgb(0, 0, 0, 0)"
        }
     ],
    enemies: [
    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 1575,
        y: 1158
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
        x: 1575,
        y: 1158
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 2327,
        y: 1128
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
        x: 2327,
        y: 1128
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 2590,
        y: 1705
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
        x: 2590,
        y: 1705
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 1225,
        y: 1707
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
        x: 1225,
        y: 1707
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },
    
    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 1650,
        y: 2125
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
        x: 1650,
        y: 2125
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldSkeleton",
      imgw: 48,
      imgh: 48,
      imgcw: 48,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 1,
      xp: 100,
      speedX: 15,
      speedY: 15,
      spawn: {
        x: 2330,
        y: 2048
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
        x: 2330,
        y: 2048
      },
      spawnTimer: null,
      enemyStateInt: 1000,
      active: false,
    },

    {
      name: "restfieldReaper",
      isBoss: true,
      imgw: 147,
      imgh: 175,
      imgcw: 147,
      imgch: 0,
      frames: 0,
      framesTimer: 0,
      level: 5,
      xp: 2000,
      speedX: 5,
      speedY: 5,
      spawn: {
        x: 1650,
        y: 1100
      },
      w: 550,
      h: 550,
      currentStateName: "idle",
      currentState: null,
      attackInterval: true,
      states: [lazerMooshState, attackCircleMooshBossState, moveState],
      damaged: 0,
      health: 100,
      angle: 0,
      maxHealth: 100,
      baseSpawn: {
        x: 1650,
        y: 1100
      },
      spawnTimer: null,
      enemyStateInt: 2000,
      active: false,
    },
  
  ]
  },
  
  restfieldMall: {
    areaName: "RESTFIELD MALL",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: restfieldMall,
    foregroundImage: restfieldMallFront,
    
    playerPos: {
      x: 4000,
      y: 1300,
    },
    colliders: [
      {
        "type": "wall",
        "x": 3562,
        "y": 2367.5,
        "width": 72,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3174,
        "y": 2320.5,
        "width": 312,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3226,
        "y": 2344.5,
        "width": 70,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3030,
        "y": 2223.5,
        "width": 224,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2879,
        "y": 2205.5,
        "width": 189,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2691,
        "y": 2211.5,
        "width": 212,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2780,
        "y": 2236.5,
        "width": 51,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2330,
        "y": 2442.5,
        "width": 120,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2431,
        "y": 2458.5,
        "width": 74,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2485,
        "y": 2458.5,
        "width": 17,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2623,
        "y": 2589.5,
        "width": 65,
        "height": 178,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2675,
        "y": 2705.5,
        "width": 269,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2916,
        "y": 2720.5,
        "width": 262,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3157,
        "y": 2755.5,
        "width": 387,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3267,
        "y": 2728.5,
        "width": 174,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3549,
        "y": 2773.5,
        "width": 465,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3522,
        "y": 2723.5,
        "width": 51,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3612,
        "y": 800.5,
        "width": 134,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3674,
        "y": 750.5,
        "width": 433,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 4028,
        "y": 809.5,
        "width": 85,
        "height": 1983,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3940,
        "y": 2718.5,
        "width": 139,
        "height": 79,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2581,
        "y": 2093.5,
        "width": 64,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2534,
        "y": 2122.5,
        "width": 65,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2710,
        "y": 2186.5,
        "width": 205,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2793,
        "y": 2156.5,
        "width": 128,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2875,
        "y": 2114.5,
        "width": 55,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2901,
        "y": 2079.5,
        "width": 371,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3032,
        "y": 2014.5,
        "width": 61,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3061,
        "y": 1988.5,
        "width": 365,
        "height": 32,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3074,
        "y": 2067.5,
        "width": 27,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3191,
        "y": 1941.5,
        "width": 128,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3249,
        "y": 1900.5,
        "width": 99,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3332,
        "y": 1867.5,
        "width": 200,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3439,
        "y": 1826.5,
        "width": 161,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3511,
        "y": 1788.5,
        "width": 102,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3508,
        "y": 1670.5,
        "width": 73,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3224,
        "y": 1498.5,
        "width": 421,
        "height": 88,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3273,
        "y": 1527.5,
        "width": 86,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3344,
        "y": 1635.5,
        "width": 88,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3396,
        "y": 1661.5,
        "width": 164,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3088,
        "y": 1387.5,
        "width": 129,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3013,
        "y": 1418.5,
        "width": 108,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3079,
        "y": 1458.5,
        "width": 55,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2864,
        "y": 1340.5,
        "width": 76,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2912,
        "y": 1385.5,
        "width": 156,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2823,
        "y": 1303.5,
        "width": 46,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2613,
        "y": 1231.5,
        "width": 294,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2667,
        "y": 1264.5,
        "width": 87,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2810,
        "y": 1260.5,
        "width": 28,
        "height": 148,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2275,
        "y": 1024.5,
        "width": 539,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2439,
        "y": 1060.5,
        "width": 46,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2487,
        "y": 1074.5,
        "width": 86,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2563,
        "y": 1097.5,
        "width": 88,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2253,
        "y": 1262.5,
        "width": 71,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1856,
        "y": 1282.5,
        "width": 56,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1791,
        "y": 1041.5,
        "width": 587,
        "height": 268,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1793,
        "y": 1265.5,
        "width": 566,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1656,
        "y": 1245.5,
        "width": 185,
        "height": 114,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1594,
        "y": 1276.5,
        "width": 123,
        "height": 335,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1654,
        "y": 1579.5,
        "width": 91,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1599,
        "y": 1389.5,
        "width": 49,
        "height": 256,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1333,
        "y": 1428.5,
        "width": 152,
        "height": 279,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1172,
        "y": 1707.5,
        "width": 243,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1233,
        "y": 1717.5,
        "width": 96,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1298,
        "y": 1744.5,
        "width": 89,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1047,
        "y": 1830.5,
        "width": 137,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1085,
        "y": 1757.5,
        "width": 160,
        "height": 86,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 924,
        "y": 1889.5,
        "width": 140,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 965,
        "y": 1815.5,
        "width": 133,
        "height": 91,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1057,
        "y": 1828.5,
        "width": 77,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 320,
        "y": 1829.5,
        "width": 664,
        "height": 133,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 785,
        "y": 1922.5,
        "width": 89,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 859,
        "y": 1901.5,
        "width": 79,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 626,
        "y": 1940.5,
        "width": 157,
        "height": 149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 662,
        "y": 2027.5,
        "width": 81,
        "height": 158,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 727,
        "y": 1963.5,
        "width": 103,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 578,
        "y": 2142.5,
        "width": 47,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 599,
        "y": 2152.5,
        "width": 78,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 335,
        "y": 2011.5,
        "width": 219,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 430,
        "y": 2057.5,
        "width": 191,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 551,
        "y": 2096.5,
        "width": 130,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 251,
        "y": 1959.5,
        "width": 162,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 100,
        "y": 1884.5,
        "width": 225,
        "height": 67,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 205,
        "y": 1912.5,
        "width": 71,
        "height": 69,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -104,
        "y": 1777.5,
        "width": 459,
        "height": 78,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -46,
        "y": 1805.5,
        "width": 82,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 7,
        "y": 1848.5,
        "width": 115,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -87,
        "y": 1755,
        "width": 28,
        "height": 793,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -114,
        "y": 2524,
        "width": 269,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 20,
        "y": 2521,
        "width": 128,
        "height": 199,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 86,
        "y": 2553,
        "width": 95,
        "height": 74,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 81,
        "y": 2586,
        "width": 126,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -108,
        "y": 2685,
        "width": 160,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -92,
        "y": 2675,
        "width": 38,
        "height": 425,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -79,
        "y": 2904,
        "width": 74,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -44,
        "y": 2910,
        "width": 30,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -39,
        "y": 2974,
        "width": 125,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": -24,
        "y": 2984,
        "width": 159,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 60,
        "y": 3006,
        "width": 76,
        "height": 185,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 95,
        "y": 3038,
        "width": 108,
        "height": 90,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 151,
        "y": 3052,
        "width": 109,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 216,
        "y": 3080,
        "width": 96,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 228,
        "y": 3134,
        "width": 166,
        "height": 150,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 316,
        "y": 3203,
        "width": 195,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 411,
        "y": 3209,
        "width": 543,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 742,
        "y": 3171,
        "width": 321,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 860,
        "y": 3133,
        "width": 244,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 921,
        "y": 3100,
        "width": 483,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 995,
        "y": 3026,
        "width": 261,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1101,
        "y": 2965,
        "width": 359,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1273,
        "y": 2899,
        "width": 291,
        "height": 82,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1420,
        "y": 2867,
        "width": 241,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1518,
        "y": 2831,
        "width": 370,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1543,
        "y": 2782,
        "width": 404,
        "height": 63,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1700,
        "y": 2721,
        "width": 539,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1812,
        "y": 2662,
        "width": 285,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1903,
        "y": 2618,
        "width": 281,
        "height": 71,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2058,
        "y": 2608,
        "width": 159,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2051,
        "y": 2572,
        "width": 336,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2192,
        "y": 2495,
        "width": 355,
        "height": 96,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2283,
        "y": 2461,
        "width": 78,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2477,
        "y": 2551.5,
        "width": 158,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldTownCemetery",
        "x": 3636,
        "y": 816.5,
        "width": 494,
        "height": 290,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "wall",
        "x": 1671,
        "y": 2338.5,
        "width": 187,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1773,
        "y": 2381.5,
        "width": 99,
        "height": 95,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1732,
        "y": 2374.5,
        "width": 48,
        "height": 64,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1858,
        "y": 2443.5,
        "width": 68,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1644,
        "y": 2312.5,
        "width": 61,
        "height": 77,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1609,
        "y": 2289.5,
        "width": 44,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1663,
        "y": 2289.5,
        "width": 210,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1662,
        "y": 2258.5,
        "width": 210,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1829,
        "y": 2308.5,
        "width": 77,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1871,
        "y": 2336.5,
        "width": 92,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1858,
        "y": 2368.5,
        "width": 145,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1858,
        "y": 2402.5,
        "width": 156,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1233,
        "y": 2516.5,
        "width": 120,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1167,
        "y": 2542.5,
        "width": 232,
        "height": 56,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1130,
        "y": 2580.5,
        "width": 310,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1173,
        "y": 2632.5,
        "width": 340,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1266,
        "y": 2666.5,
        "width": 239,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1347,
        "y": 2697.5,
        "width": 113,
        "height": 65,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1448,
        "y": 2607.5,
        "width": 50,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1194,
        "y": 2527.5,
        "width": 73,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1846,
        "y": 1479.5,
        "width": 16,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1893,
        "y": 1498.5,
        "width": 19,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1763,
        "y": 1411.5,
        "width": 21,
        "height": 72,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1716,
        "y": 1393.5,
        "width": 16,
        "height": 73,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 763,
        "y": 2232.5,
        "width": 79,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 814,
        "y": 2211.5,
        "width": 69,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 864,
        "y": 2190.5,
        "width": 47,
        "height": 21,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 889,
        "y": 2170.5,
        "width": 58,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 934,
        "y": 2145.5,
        "width": 55,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 983,
        "y": 2129.5,
        "width": 45,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1029,
        "y": 2109.5,
        "width": 43,
        "height": 18,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1021,
        "y": 2104.5,
        "width": 13,
        "height": 33,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1060,
        "y": 2086.5,
        "width": 29,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1097,
        "y": 2072.5,
        "width": 48,
        "height": 19,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1077,
        "y": 2068.5,
        "width": 28,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1119,
        "y": 2048.5,
        "width": 63,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1156,
        "y": 2018.5,
        "width": 75,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 1995.5,
        "width": 58,
        "height": 33,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1266,
        "y": 1976.5,
        "width": 53,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1309,
        "y": 1955.5,
        "width": 53,
        "height": 29,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1340,
        "y": 1930.5,
        "width": 63,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1392,
        "y": 1912.5,
        "width": 72,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1443,
        "y": 1883.5,
        "width": 63,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1497,
        "y": 1861.5,
        "width": 47,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 695,
        "y": 2157.5,
        "width": 45,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 723,
        "y": 2226.5,
        "width": 54,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1749,
        "y": 1712.5,
        "width": 114,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1826,
        "y": 1693.5,
        "width": 73,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1882,
        "y": 1667.5,
        "width": 64,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1931,
        "y": 1644.5,
        "width": 53,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1979,
        "y": 1623.5,
        "width": 54,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2008,
        "y": 1597.5,
        "width": 77,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2047,
        "y": 1554.5,
        "width": 45,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1992,
        "y": 1537.5,
        "width": 63,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1962,
        "y": 1521.5,
        "width": 50,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1934,
        "y": 1498.5,
        "width": 41,
        "height": 35,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1399,
        "y": 1456.5,
        "width": 149,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1447,
        "y": 1430.5,
        "width": 180,
        "height": 45,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1389,
        "y": 1475.5,
        "width": 301,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 724,
        "y": 2226.5,
        "width": 58,
        "height": 59,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1664,
        "y": 1332.5,
        "width": 117,
        "height": 126,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1752,
        "y": 1417.5,
        "width": 80,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1820,
        "y": 1439.5,
        "width": 71,
        "height": 44,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1876,
        "y": 1463.5,
        "width": 58,
        "height": 53,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2729,
        "y": 2239.5,
        "width": 104,
        "height": 58,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2801,
        "y": 2242.5,
        "width": 144,
        "height": 37,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2780,
        "y": 2266.5,
        "width": 52,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1773,
        "y": 1735,
        "width": 74,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1726,
        "y": 1707,
        "width": 76,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 734,
        "y": 2236,
        "width": 136,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 819,
        "y": 2211,
        "width": 123,
        "height": 24,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 888,
        "y": 2195,
        "width": 72,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 919,
        "y": 2178,
        "width": 105,
        "height": 20,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 954,
        "y": 2145,
        "width": 84,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 992,
        "y": 2132,
        "width": 91,
        "height": 10,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1015,
        "y": 2108,
        "width": 104,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1093,
        "y": 2076,
        "width": 55,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1129,
        "y": 2062,
        "width": 81,
        "height": 28,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 2018,
        "width": 72,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1334,
        "y": 1941,
        "width": 67,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1463,
        "y": 1883,
        "width": 75,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1436,
        "y": 1912,
        "width": 59,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1384,
        "y": 1926,
        "width": 63,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1266,
        "y": 1989,
        "width": 85,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1825,
        "y": 1672,
        "width": 64,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1866,
        "y": 1633,
        "width": 132,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1918,
        "y": 1597,
        "width": 122,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1790,
        "y": 1697,
        "width": 84,
        "height": 30,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1777,
        "y": 1673,
        "width": 68,
        "height": 52,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1309,
        "y": 1947,
        "width": 47,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1425,
        "y": 1866,
        "width": 92,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1476,
        "y": 1849,
        "width": 55,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1282,
        "y": 1929,
        "width": 124,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1359,
        "y": 1908,
        "width": 78,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1163,
        "y": 2012,
        "width": 114,
        "height": 50,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1218,
        "y": 1949,
        "width": 101,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1161,
        "y": 1994,
        "width": 94,
        "height": 43,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1039,
        "y": 2081,
        "width": 86,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1063,
        "y": 2020,
        "width": 104,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 898,
        "y": 2136,
        "width": 91,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 937,
        "y": 2085,
        "width": 121,
        "height": 62,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 762,
        "y": 2190,
        "width": 86,
        "height": 60,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 792,
        "y": 2176,
        "width": 112,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1013,
        "y": 2057,
        "width": 95,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3439,
        "y": 2357,
        "width": 119,
        "height": 66,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3613,
        "y": 2314,
        "width": 114,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3614,
        "y": 1892,
        "width": 122,
        "height": 453,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3593,
        "y": 877,
        "width": 145,
        "height": 1149,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldMallInside",
        "x": 1300,
        "y": 1470.5,
        "width": 315,
        "height": 243,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies:[
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 480,
          y: 2930
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 40,
          y: 2000
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1070,
          y: 2200
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 2500,
          y: 1500
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1800,
          y: 2000
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }, 
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 3500,
          y: 900
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1548,
          y: 865
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      } 
    ]
  },

  restfieldMallInside: {
    areaName: " ",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: restfieldMallInside,
    foregroundImage: restfieldMallInsideFront,
    playerPos: {
      x: 2925,
      y: 2800,
    },
    colliders: [
      {
        "type": "transition",
        "format": "liquid",
        "destination": "restfieldMall",
        "x": 2682,
        "y": 2805.5,
        "width": 222,
        "height": 175,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3049,
        "y": 2795.5,
        "width": 220,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3253,
        "y": 1313.5,
        "width": 225,
        "height": 1623,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 856,
        "y": 1711.5,
        "width": 2604,
        "height": 61,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2656,
        "y": 1733.5,
        "width": 258,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2365,
        "y": 1733.5,
        "width": 262,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1003,
        "y": 1748.5,
        "width": 1343,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 842,
        "y": 1736.5,
        "width": 106,
        "height": 1257,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 829,
        "y": 2903.5,
        "width": 2649,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3023,
        "y": 2501.5,
        "width": 104,
        "height": 411,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1151,
        "y": 2450.5,
        "width": 107,
        "height": 322,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1142,
        "y": 1950.5,
        "width": 97,
        "height": 337,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1515,
        "y": 1969.5,
        "width": 98,
        "height": 324,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1886,
        "y": 1963.5,
        "width": 88,
        "height": 337,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1516,
        "y": 2443.5,
        "width": 94,
        "height": 322,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2223,
        "y": 2443.5,
        "width": 116,
        "height": 328,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1872,
        "y": 2445.5,
        "width": 104,
        "height": 338,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2232,
        "y": 1966.5,
        "width": 101,
        "height": 346,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2584,
        "y": 1950.5,
        "width": 106,
        "height": 361,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "instant",
        "destination": "restfieldMallTreasure",
        "x": 3027,
        "y": 1683.5,
        "width": 85,
        "height": 132,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 1000,
          y: 1840
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 1000,
          y: 1840
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 950,
          y: 1800
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 950,
          y: 1800
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 920,
          y: 1790
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 920,
          y: 1790
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 900,
          y: 1790
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 900,
          y: 1790
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 880,
          y: 1790
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 880,
          y: 1790
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 880,
          y: 1760
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 880,
          y: 1760
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      },
      {
        name: "restfieldZombie",
        imgw: 48,
        imgh: 48,
        imgcw: 48,
        imgch: 0,
        frames: 0,
        framesTimer: 0,
        level: 1,
        xp: 100,
        speedX: 5,
        speedY: 5,
        spawn: {
          x: 880,
          y: 1750
        },
        w: 155,
        h: 155,
        currentStateName: "idle",
        currentState: null,
        attackInterval: true,
        states: [moveStateRandom ],
        damaged: 0,
        health: 15,
        angle: 0,
        maxHealth: 10,
        baseSpawn: {
          x: 880,
          y: 1750
        },
        spawnTimer: 10000,
        enemyStateInt: 2000,
      }
    ],
  },

  restfieldMallTreasure: {
    areaName: "",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: restfieldMallTreasure,
    foregroundImage: restfieldMallTreasureFront,
    playerPos: {
      x: 2350,
      y: 2350,
    },
    colliders: [
      {
        "type": "wall",
        "x": 1663,
        "y": 1841.5,
        "width": 92,
        "height": 549,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1656,
        "y": 1796.5,
        "width": 755,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1585,
        "y": 2366.5,
        "width": 527,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2064,
        "y": 2429.5,
        "width": 356,
        "height": 106,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2251,
        "y": 1855.5,
        "width": 234,
        "height": 653,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "instant",
        "destination": "restfieldMallInside",
        "x": 2055,
        "y": 2324.5,
        "width": 334,
        "height": 156,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

// ARCANE ISLAND
  islandOneArcane: {
    areaName: "SLIME FOREST RUINS",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: islandOneMapArcane,
    foregroundImage: islandOneMapArcaneFront,
    playerPos: {
      x: 2852,
      y: 3798
    },
    colliders: [
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
        "name": "dialogCoffeeMachine",
        "x": 3493,
        "y": 2913.5,
        "width": 229,
        "height": 242,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1179,
        "y": 2910.5,
        "width": 394,
        "height": 141,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "arcane",
        "destination": "islandOne",
        "x": 2404,
        "y": 2718.5,
        "width": 398,
        "height": 244,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPathArcane",
        "x": 2364.5,
        "y": 3964,
        "width": 707,
        "height": 194,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

  slimeForestPathArcane: {
    areaName: "SLIME FOREST",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: slimeForestPathArcane,
    foregroundImage: slimeForestPathArcaneFront,
    playerPos: {
      x: 1935,
      y: 2750,
    },
    colliders: [
      {
        "type": "wall",
        "x": 2216,
        "y": 1818.5,
        "width": 57,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2420,
        "y": 1774.5,
        "width": 79,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2612,
        "y": 1870.5,
        "width": 61,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2506,
        "y": 1629.5,
        "width": 53,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2655,
        "y": 1649.5,
        "width": 60,
        "height": 92,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2777,
        "y": 1812.5,
        "width": 41,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2862,
        "y": 1879.5,
        "width": 94,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3007,
        "y": 1939.5,
        "width": 83,
        "height": 453,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2771,
        "y": 2371.5,
        "width": 335,
        "height": 57,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2676,
        "y": 2450.5,
        "width": 67,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2712,
        "y": 2373.5,
        "width": 77,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2529,
        "y": 2490.5,
        "width": 67,
        "height": 167,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2350,
        "y": 2518.5,
        "width": 90,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2299,
        "y": 2435.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2430,
        "y": 2593.5,
        "width": 140,
        "height": 47,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2562,
        "y": 2568.5,
        "width": 184,
        "height": 55,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2230,
        "y": 2637.5,
        "width": 62,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2146,
        "y": 2848.5,
        "width": 60,
        "height": 93,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2195,
        "y": 2996.5,
        "width": 55,
        "height": 122,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2311,
        "y": 2960.5,
        "width": 56,
        "height": 143,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2020,
        "y": 2965.5,
        "width": 66,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1888,
        "y": 3099.5,
        "width": 63,
        "height": 138,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1791,
        "y": 3028.5,
        "width": 48,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1653,
        "y": 3113.5,
        "width": 92,
        "height": 144,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1499,
        "y": 3020.5,
        "width": 50,
        "height": 166,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1419,
        "y": 2812.5,
        "width": 53,
        "height": 132,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1404,
        "y": 2565.5,
        "width": 75,
        "height": 116,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1269,
        "y": 2714.5,
        "width": 86,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1150,
        "y": 2818.5,
        "width": 55,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1412,
        "y": 2919.5,
        "width": 49,
        "height": 235,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1427,
        "y": 3112.5,
        "width": 96,
        "height": 54,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1519,
        "y": 3157.5,
        "width": 166,
        "height": 41,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1700,
        "y": 3191.5,
        "width": 234,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2068,
        "y": 3142.5,
        "width": 62,
        "height": 120,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1935,
        "y": 3214.5,
        "width": 170,
        "height": 26,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2163,
        "y": 3259.5,
        "width": 59,
        "height": 136,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2121,
        "y": 3206.5,
        "width": 99,
        "height": 75,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2209,
        "y": 3230.5,
        "width": 243,
        "height": 36,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2314,
        "y": 3062.5,
        "width": 50,
        "height": 195,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2469,
        "y": 2826.5,
        "width": 80,
        "height": 173,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2366,
        "y": 2973.5,
        "width": 115,
        "height": 27,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2440,
        "y": 2592.5,
        "width": 63,
        "height": 269,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3022,
        "y": 1757.5,
        "width": 41,
        "height": 105,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2940,
        "y": 1860.5,
        "width": 149,
        "height": 51,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 3047,
        "y": 1879.5,
        "width": 31,
        "height": 85,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2701,
        "y": 1672.5,
        "width": 236,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2778,
        "y": 1701.5,
        "width": 41,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2811,
        "y": 1876.5,
        "width": 158,
        "height": 40,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2538,
        "y": 1638.5,
        "width": 156,
        "height": 42,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2257,
        "y": 1500.5,
        "width": 55,
        "height": 131,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2306,
        "y": 1702.5,
        "width": 65,
        "height": 101,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2435,
        "y": 1450.5,
        "width": 83,
        "height": 115,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2499,
        "y": 1539.5,
        "width": 51,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2346,
        "y": 1347.5,
        "width": 62,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2398,
        "y": 1421.5,
        "width": 59,
        "height": 49,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2271,
        "y": 1168.5,
        "width": 44,
        "height": 102,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2478,
        "y": 1230.5,
        "width": 45,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2380,
        "y": 1066.5,
        "width": 61,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2157,
        "y": 1309.5,
        "width": 65,
        "height": 118,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2432,
        "y": 1130.5,
        "width": 73,
        "height": 128,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2484,
        "y": 1272.5,
        "width": 50,
        "height": 201,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2133,
        "y": 1057.5,
        "width": 56,
        "height": 124,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2019,
        "y": 1229.5,
        "width": 47,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1948,
        "y": 1011.5,
        "width": 58,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2037,
        "y": 843.5,
        "width": 71,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2243,
        "y": 906.5,
        "width": 52,
        "height": 111,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2272,
        "y": 966.5,
        "width": 190,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2426,
        "y": 1012.5,
        "width": 31,
        "height": 83,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 2093,
        "y": 895.5,
        "width": 167,
        "height": 39,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1891,
        "y": 799.5,
        "width": 67,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1942,
        "y": 860.5,
        "width": 132,
        "height": 46,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1818,
        "y": 1175.5,
        "width": 51,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1613,
        "y": 1124.5,
        "width": 88,
        "height": 112,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1474,
        "y": 1210.5,
        "width": 83,
        "height": 110,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1383,
        "y": 1072.5,
        "width": 45,
        "height": 108,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1522,
        "y": 955.5,
        "width": 53,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1619,
        "y": 847.5,
        "width": 49,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1758,
        "y": 958.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1744,
        "y": 741.5,
        "width": 49,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1775,
        "y": 793.5,
        "width": 163,
        "height": 31,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1629,
        "y": 777.5,
        "width": 148,
        "height": 34,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1650,
        "y": 791.5,
        "width": 20,
        "height": 68,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1417,
        "y": 840.5,
        "width": 63,
        "height": 109,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1467,
        "y": 874.5,
        "width": 163,
        "height": 38,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1246,
        "y": 927.5,
        "width": 58,
        "height": 98,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1273,
        "y": 921.5,
        "width": 166,
        "height": 22,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1119,
        "y": 1032.5,
        "width": 55,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1145,
        "y": 1038.5,
        "width": 174,
        "height": 23,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1267,
        "y": 977.5,
        "width": 33,
        "height": 70,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1215,
        "y": 1188.5,
        "width": 66,
        "height": 117,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1038,
        "y": 1226.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 1081.5,
        "width": 87,
        "height": 164,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 1356.5,
        "width": 62,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 966,
        "y": 1419.5,
        "width": 57,
        "height": 139,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 982,
        "y": 1273.5,
        "width": 73,
        "height": 165,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1125,
        "y": 1591.5,
        "width": 50,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1161,
        "y": 1752.5,
        "width": 72,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 996,
        "y": 1780.5,
        "width": 74,
        "height": 140,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 928,
        "y": 1623.5,
        "width": 58,
        "height": 156,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 939,
        "y": 1481.5,
        "width": 43,
        "height": 192,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 932,
        "y": 1741.5,
        "width": 83,
        "height": 80,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1257,
        "y": 1516.5,
        "width": 73,
        "height": 127,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1321,
        "y": 1677.5,
        "width": 50,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1350,
        "y": 1855.5,
        "width": 58,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1128,
        "y": 1956.5,
        "width": 58,
        "height": 100,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1041,
        "y": 1900.5,
        "width": 94,
        "height": 84,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1280,
        "y": 2033.5,
        "width": 64,
        "height": 107,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1408,
        "y": 2199.5,
        "width": 53,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1210,
        "y": 2166.5,
        "width": 55,
        "height": 119,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1154,
        "y": 2290.5,
        "width": 53,
        "height": 94,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 977,
        "y": 2249.5,
        "width": 42,
        "height": 99,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 991,
        "y": 1875.5,
        "width": 30,
        "height": 417,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1036,
        "y": 2413.5,
        "width": 62,
        "height": 123,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1212,
        "y": 2505.5,
        "width": 76,
        "height": 113,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1322,
        "y": 2383.5,
        "width": 63,
        "height": 103,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1512,
        "y": 2473.5,
        "width": 46,
        "height": 104,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1088,
        "y": 2605.5,
        "width": 56,
        "height": 125,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1049,
        "y": 2497.5,
        "width": 57,
        "height": 147,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1133,
        "y": 2693.5,
        "width": 39,
        "height": 152,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1290,
        "y": 2951.5,
        "width": 54,
        "height": 121,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1199,
        "y": 2881.5,
        "width": 44,
        "height": 145,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1224,
        "y": 2955.5,
        "width": 91,
        "height": 48,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "wall",
        "x": 1336,
        "y": 3052.5,
        "width": 91,
        "height": 87,
        "color": "rgb(0, 0, 0, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "islandOneArcane",
        "x": 1239.5,
        "y": 1232.5,
        "width": 997,
        "height": 290,
        "color": "rgb(204, 0, 204, 0)"
      },
      {
        "type": "transition",
        "format": "liquid",
        "destination": "mushroomForestArcane",
        "x": 2652.5,
        "y": 1851.5,
        "width": 298,
        "height": 570,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

  mushroomForestArcane: {
    areaName: "MUSHROOM FOREST",
    areaSounds: grassLandsSoundtrack,
    backgroundImage: mushroomForestArcane,
    foregroundImage: mushroomForestArcaneFront,
    playerPos: {
      x: 700,
      y: 2000,
    },
    colliders: [
      {
        "type": "transition",
        "format": "liquid",
        "destination": "slimeForestPathArcane",
        "x": 68.5,
        "y": 1555.5,
        "width": 388,
        "height": 620,
        "color": "rgb(204, 0, 204, 0)"
      }
    ],
    enemies: [],
  },

 

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

canvasLobby.addEventListener("wheel", event => {
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
let bossFight = false;
let challengeActive = false;
let currentHue = 0;
let currentLuminosity = 0;

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

    // Bug fix for humanSkin not loading
    playerWidth = humanSkin.width / 6
    playerHeight = humanSkin.height / 6;

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
      
    } else {
      cameraFollow()
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
  playerColminX = playerX - cameraX - 20;
  playerColminY = playerY - cameraY + 80;
  playerColLengthX = playerWidth + 0;
  playerColLengthY = playerHeight - 10;
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
          if (wall.condition && myPlayer.access[0][wall.condition] === true) {
            return;
          }
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
        else if (wall.type === "scoreBoard") {
          scoreAvailable = true;
        }
        else if (wall.type === "fish") {
          fishAvailable = true;
        }
        else if (wall.type === "transition") {
          currentSelectedMap = wall.destination

          if (!challengeActive) transition(wall.format)
          
        }
        else if (wall.type === "dialog") {
          if (!myPlayer.questsCompleted.find(quest => quest.title === dialogBoxes[wall.name].questName))
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
        if (wall.type === "scoreBoard") {
          scoreAvailable = false;
          scores.style.display =  "none";
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

function drawQuestMarkers () {
  mapsInfo[currentLand].colliders.forEach(wall => {
    if (wall.type === "dialog") {
      if (dialogBoxes[wall.name].dialogName === "quest") {
        if (myPlayer.questsOngoing.find(quest => quest.title === dialogBoxes[wall.name].questName)) {
          canvas.drawImage(
            questOngoingImg,
            (questOngoingImg.width / 6) * (frameCurrentPlayer === 0 ? 0 : frameCurrentPlayer - 1),
            0,
            questOngoingImg.width / 6,
            questOngoingImg.height,
            dialogBoxes[wall.name].markerX - cameraX,
            dialogBoxes[wall.name].markerY - cameraY,
            100,
            210,
          );
        } 
        else if (!myPlayer.questsCompleted.find(quest => quest.title === dialogBoxes[wall.name].questName)) {
          // console.log((frameCurrentPlayer === 0 ? 0 : frameCurrentPlayer - 1))
          canvas.drawImage(
            questStartImg,
            (questStartImg.width / 6) * (frameCurrentPlayer === 0 ? 0 : frameCurrentPlayer - 1),
            0,
            questStartImg.width / 6,
            questStartImg.height,
            dialogBoxes[wall.name].markerX - cameraX,
            dialogBoxes[wall.name].markerY - cameraY,
            100,
            210,
          );
        }
      }
    }
  })
}

let playerAdjustmentX = 90;
let playerAdjustmentY = 130;

function drawLocalPlayer () {
  for (const player of players) {
    if (player.username === myPlayer.username && player.room === myPlayer.room) {
      let armor = drawPlayerArmor(player);
      let artifact = drawPlayerArtifact(player);
      // console.log(playerWidth, playerHeight)
      if (animPlayer === "sittingDown" && player.lastLooked === "right"){
        frameCurrentPlayer = frameCurrentPlayer % 6;
  
        playerCutX = frameCurrentPlayer * playerWidth;

        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 200,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 200,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      else if (animPlayer === "sittingDown" && player.lastLooked === "left"){
        frameCurrentPlayer = frameCurrentPlayer % 6;
  
        playerCutX = frameCurrentPlayer * playerWidth;

        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 250,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 250,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      else if (fishing) {
        frameCurrentPlayer = frameCurrentPlayer % 6;
  
        playerCutX = frameCurrentPlayer * playerWidth;

        canvas.drawImage(
          armor,
          playerCutX,
          playerCutY + 200,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 200,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
      }
      else if (animPlayer === "idleRight" && player.lastLooked === "right") {
      frameCurrentPlayer = frameCurrentPlayer % 6;
  
      playerCutX = frameCurrentPlayer * playerWidth;

      canvas.drawImage(
        armor,
        playerCutX,
        playerCutY,
        playerWidth,
        playerHeight,
        playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
        playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
        playerWidth - playerZoomX,
        playerHeight - playerZoomY,
      );
      canvas.drawImage(
        artifact,
        playerCutX,
        playerCutY,
        playerWidth,
        playerHeight,
        playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
        playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
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
          playerCutY + 50,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 50,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
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
          playerCutY + 100,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 100,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
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
          playerCutY + 150,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 125 - cameraShakeY - playerAdjustmentY,
          playerWidth - playerZoomX,
          playerHeight - playerZoomY,
        );
        canvas.drawImage(
          artifact,
          playerCutX,
          playerCutY + 150,
          playerWidth,
          playerHeight,
          playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
          playerY - cameraY + 125 - cameraShakeY - playerAdjustmentY,
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
            playerCutY + 100, // Same as runRight
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
            playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 100, // Same as runRight
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
            playerY - cameraY + 120 - cameraShakeY - playerAdjustmentY,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        } 
        else if (player.lastLooked === "left") {
          // Play running animation as if moving left
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 150, // Same as runLeft
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
            playerY - cameraY + 125 - cameraShakeY - playerAdjustmentY,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 150, // Same as runLeft
            playerWidth,
            playerHeight,
            playerX - cameraX + 65 - cameraShakeX - playerAdjustmentX,
            playerY - cameraY + 125 - cameraShakeY - playerAdjustmentY,
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
        if (player.anim === "sittingDown" && player.lastLooked === "right") {
          console.log(player.anim)
          frameCurrentPlayer = frameCurrentPlayer % 6;
    
          playerCutX = frameCurrentPlayer * playerWidth;
  
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 200,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 200,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "sittingDown" && player.lastLooked === "left"){
          frameCurrentPlayer = frameCurrentPlayer % 6;
    
          playerCutX = frameCurrentPlayer * playerWidth;
  
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY + 250,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 250,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
        }
        else if (player.anim === "idleRight" && player.lastLooked === "right") {
          frameCurrentPlayer = frameCurrentPlayer % 6;
      
          playerCutX = frameCurrentPlayer * playerWidth;
    
          canvas.drawImage(
            armor,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
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
            playerCutY + 50,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 50,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
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
            playerCutY + 100,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 100,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
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
            playerCutY + 150,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 130,
            playerWidth - playerZoomX,
            playerHeight - playerZoomY,
          );
          canvas.drawImage(
            artifact,
            playerCutX,
            playerCutY + 150,
            playerWidth,
            playerHeight,
            smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
            smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 130,
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
              playerCutY + 100, // Same as runRight
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
              smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
              playerWidth - playerZoomX,
              playerHeight - playerZoomY,
            );
            canvas.drawImage(
              artifact,
              playerCutX,
              playerCutY + 100, // Same as runRight
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
              smoothPlayer.smoothY - cameraY + 120 - cameraShakeY - 130,
              playerWidth - playerZoomX,
              playerHeight - playerZoomY,
            );
          } 
          else if (player.lastLooked === "left") {
            // Play running animation as if moving left
            canvas.drawImage(
              armor,
              playerCutX,
              playerCutY + 150, // Same as runLeft
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
              smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 130,
              playerWidth - playerZoomX,
              playerHeight - playerZoomY,
            );
            canvas.drawImage(
              artifact,
              playerCutX,
              playerCutY + 150, // Same as runLeft
              playerWidth,
              playerHeight,
              smoothPlayer.smoothX - cameraX + 65 - cameraShakeX - 85,
              smoothPlayer.smoothY - cameraY + 125 - cameraShakeY - 130,
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
    let name = player.armor[0].name;
    return window[name];  
  } else {
    return humanSkin;
  }
}

function drawPlayerArtifact (player) {
  if (player.artifact[0]) {
    let name = player.artifact[0].name;
    return window[name]; 
  } else {
    return transparentCape;
  }
}

function drawPlayerWeaponOut (player) {
  if (fishing) {
    canvas.save(); // Save the current canvas state
    canvas.translate(playerX - cameraX - cameraShakeX - 150 +18 - recoil, playerY + cameraShakeY + 180 - cameraY +70); // Translate to the player's position
    canvas.rotate(angleMouse); // Rotate based on the mouse angle
    canvas.drawImage(fishingStick ,0, -7.5, 100, 25);
    canvas.restore();
  }
  else if (player.weapon[0]) {
    canvas.save(); // Save the current canvas state
    canvas.translate(playerX - cameraX - cameraShakeX - 150 +18 - recoil, playerY + cameraShakeY + 180 - cameraY +70); // Translate to the player's position
    canvas.rotate(angleMouse); // Rotate based on the mouse angle
    // let name = player.artifact[0].name;
    if (player.weapon[0].name === "solarStaffCommon") {
      canvas.drawImage(solarStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
    }
    else if (player.weapon[0].name === "arcaneStaffCommon") {
      canvas.drawImage(arcaneStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
    }
    else if (player.weapon[0].name === "nuclearStaffCommon") {
      canvas.drawImage(nuclearStaffCommon ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
    }
    else if (player.weapon[0].name === "arcaneRepeaterInv") {
      canvas.drawImage(arcaneRepeater ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
    }
    else if (player.weapon[0].name === "arcaneLancerInv") {
      canvas.drawImage(arcaneLancer ,0, -7.5, 100, 25); // Draw the rectangle centered around the rotated point
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
  canvas.drawImage(nameBubbleGreen, playerX - cameraX -40, playerY - cameraY -48, 100,50)
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
  function drawChatBubble (img, player, x, xd, y, yd, w, h, cx, cy ) {
    canvas.drawImage(img, x + xd, y + yd, w , h)
    canvas.beginPath();
    canvas.font = "bolder 16px Tiny5";
    canvas.textAlign = "center";
    canvas.fillStyle = "black";
    canvas.fillText(player.chatMessage, x +cx, y -cy);
  }
  for (const player of players) {
    if (player.room === myPlayer.room && player.username === myPlayer.username) {
      if (player.chatMessage !== "none") {
        console.log(player.chatMessage.length)
        if (player.chatMessage.length > 20) {
          drawChatBubble(chatBubbleBigger, player, playerX - cameraX, -190, playerY - cameraY, -115, 400, 60, 5, 90 )
        } else {
          drawChatBubble(chatBubble, player, playerX - cameraX, -90, playerY - cameraY, -115, 200, 60, 15, 90 )
        }
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
      if (myPlayer?.weapon[0]?.name === "arcaneStaffCommon" || myPlayer?.weapon[0]?.name === "arcaneRepeaterInv" || myPlayer?.weapon[0]?.name === "arcaneLancerInv") {
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

function drawMap(layer) {
  const targetHue = bossFight ? -95 : 0;
  const targetLuminosity = dying ? -100 : bossFight ? -50 : 0;
  const changeSpeed = 1;

  // Adjust hue and luminosity
  if (currentHue < targetHue) {
    currentHue = Math.min(currentHue + changeSpeed, targetHue);
  } else if (currentHue > targetHue) {
    currentHue = Math.max(currentHue - changeSpeed, targetHue);
  }

  if (currentLuminosity < targetLuminosity) {
    currentLuminosity = Math.min(currentLuminosity + changeSpeed, targetLuminosity);
  } else if (currentLuminosity > targetLuminosity) {
    currentLuminosity = Math.max(currentLuminosity - changeSpeed, targetLuminosity);
  }

  // Apply canvas filters
  canvas.filter = `hue-rotate(${currentHue}deg) brightness(${100 + currentLuminosity}%)`;

  const mapInfo = mapsInfo[currentLand];
  const frameWidth = 1000; // Width of each frame in the sprite sheet
  const frameHeight = 1000; // Height of each frame in the sprite sheet

  const isSpriteSheet = mapInfo.backgroundImage.width > frameWidth;

  if (layer === "back") {
    if (currentLand === "restfieldPath" || currentLand === "slimeForestPath") {
      if (myPlayer.access[0][currentLand] === false) {
        drawMapSprite(mapInfo.backgroundImage, isSpriteSheet, frameWidth, frameHeight);
      } else {
        drawMapSprite(mapInfo.backgroundImageOpen, isSpriteSheet, frameWidth, frameHeight);
      }
    } else {
      drawMapSprite(mapInfo.backgroundImage, isSpriteSheet, frameWidth, frameHeight);
    }
    drawQuestMarkers();
  } 
  else {
    if (currentLand === "restfieldPath" || currentLand === "slimeForestPath") {
      if (myPlayer.access[0][currentLand] === false) {
        drawMapSprite(mapInfo.foregroundImage, isSpriteSheet, frameWidth, frameHeight);
      } else {
        drawMapSprite(mapInfo.foregroundImageOpen, isSpriteSheet, frameWidth, frameHeight);
      }
    } else {
      drawMapSprite(mapInfo.foregroundImage, isSpriteSheet, frameWidth, frameHeight);
    }
  }

  // Reset filter
  canvas.filter = "none";
}

let mapFrames = 0;
let mapFramesController = 0;

function drawMapSprite(image, isSpriteSheet, frameWidth, frameHeight) {
  const numFrames = isSpriteSheet ? image.width / frameWidth : 1;
  const cameraShakeOffsetX = cameraShakeX - cameraX;
  const cameraShakeOffsetY = cameraShakeY - cameraY;

  mapFramesController++;
  if (mapFramesController > 15) {
    mapFramesController = 0;
    mapFrames++
    if (mapFrames >= 7) {
      mapFrames = 0;
    }
  }


  if (isSpriteSheet) {
      const sx = mapFrames * frameWidth;
      const sy = 0;
      canvas.drawImage(
        image,
        sx, sy, frameWidth, frameHeight,
        cameraShakeOffsetX, cameraShakeOffsetY, 4500, 4500
      );
  } else {
    canvas.drawImage(image, cameraShakeOffsetX, cameraShakeOffsetY, 4500, 4500);
  }
}



// Map functions <


// Enemy functions >

function activateNormalEnemy (enemy) {
  if (enemy.isBoss) return

  challengeActive = true;

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


function activateBossEnemy (enemy) {
  cutscene = true;
  secondaryCameraX = enemy.spawn.x - (enemy.w) + (enemy.w/4);
  secondaryCameraY = enemy.spawn.y + (enemy.h/4);
  projectilesClient = [];
  stopAllSound();
  let timeToWake = 0;

  if (enemy.name === "mooshroomBossRed") {
    fightMusic1.play();
    violinDanger.play()
    bossWakingUpChallenge.play()
    timeToWake = 40;
    bossBarImg.src = "./Textures/bossBarMoosh.png"
  }
  else if (enemy.name === "restfieldReaper") {
    bossBarImg.src = "./Textures/bossBarReaper.png"
    SokosBoss.play();
    timeToWake = 10000;
    bossBarImg.src = "./Textures/bossBarReaper.png"
  }


  setTimeout(() => {
    const rocksFall = new Audio("./audios/rocksFall.wav");
    rocksFall.loop = false;
    rocksFall.volume = 0.3;
    rocksFall.play();
    bossFight = true;

    bossBarHealth.style.width = 100 + "%";
    bossBarHealthFollower.style.width = 100 + "%";
    bossBarParent.style.display = "block"

    let activateInterval = setInterval(() => {
      enemy.framesTimer--
      cameraShake()
          
      if (enemy.framesTimer <= 0) {
        enemy.framesTimer = 5;
      }
      
      if (enemy.framesTimer === 2) {
        enemy.frames++
        if (enemy.frames > 5) {
          enemy.active = true;
          cutscene = false;
          clearInterval(activateInterval)
        }
      }
    },40)
  }, timeToWake);
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
        (enemy.spawn.x - cameraX) - (playerX - cameraX) + 200 > -1000 && (enemy.spawn.y - cameraY) - (playerY - cameraY) + 120 > -2000
        &&
        (enemy.spawn.x - cameraX) - (playerX - cameraX) + 200 < 1000 && (enemy.spawn.y - cameraY) - (playerY - cameraY) + 120 < 2000
      ) {
        handleEnemyState(enemy)
      }
  
      checkEnemyCombat(enemy)
    }


  }) 
}

let bossBarPercentage = 100;

function checkEnemyCombat (enemy) {
  if (enemy.damaged > 0) {
    enemy.damaged--

    enemy.currentStateName = "dmg"

    if (!enemy.isBoss) {
      enemy.spawn.x += Math.cos(enemy.angle) * enemy.damaged ;
      enemy.spawn.y += Math.sin(enemy.angle) * enemy.damaged;
    }
  } else {
    if (enemy.currentStateName === "dmg") {
      enemy.currentStateName = "idle"
    }
  }

  if (enemy.health <= 0) {
    enemyDeathParticles(enemy)
    enemy.attackInterval = true;
    // attackCircleState(enemy)
    mapsInfo[currentLand].enemies.splice(mapsInfo[currentLand].enemies.indexOf(enemy), 1)

    socket.emit("enemyKilled", enemy.xp);

    if (enemy.drop) {
      let randomNumber = Math.floor(Math.random() * 101);
      if (enemy.dropRate <= randomNumber) {
        socket.emit("enemyDrop", enemy.drop);
      }
    }

    const hasActiveBoss = mapsInfo[currentLand].enemies.some(
      enemy => enemy.active === true && !enemy.isBoss
    );
    const bossAlive = mapsInfo[currentLand].enemies.find(
      enemy => enemy.isBoss === true && enemy.health > 0
    );
    
    if (!hasActiveBoss && bossAlive) {
      const areaBoss = mapsInfo[currentLand].enemies.find(
        enemy => enemy.isBoss === true && enemy.active === false
      );
      activateBossEnemy(areaBoss)
    } else if (!bossAlive) {
      fightMusic1.pause();
      fightMusic1.currentTime = 0;
      SokosBoss.pause();
      SokosBoss.currentTime = 0;
      bossFight = false;
      bossBarParent.style.display = "none";
      bossBarHealth.style.width = 100 + "%";
      bossBarHealthFollower.style.width = 100 + "%";

      if (enemy.isBoss) {

        if (enemy.name === "mooshroomBossRed") {
          socket.emit("giveItem", "chestKey");
        }
        else if (enemy.name === "restfieldReaper") {
          socket.emit("giveItem", "chestKeyRestfield");
        }

        resetTimer()
        areaNameDisplay("Trial Completed");
        challengeCompleted.play();
        challengeActive = false;
        setTimeout(() => {
          let playerPosition;

          if (enemy.name === "mooshroomBossRed") {
            playerPosition =  mapsInfo.mushroomForest.playerPos;
            mapsInfo.mushroomForest = _.cloneDeep(originalMapsInfo.mushroomForest);
            mapsInfo.mushroomForest.playerPos = playerPosition;
          }
          if (enemy.name === "restfieldReaper") {
            playerPosition =  mapsInfo.restfieldTrial.playerPos;
            mapsInfo.restfieldTrial = _.cloneDeep(originalMapsInfo.restfieldTrial);
            mapsInfo.restfieldTrial.playerPos = playerPosition;
          }
          hideTimer()
        }, 2000);
        mapsInfo[currentSelectedMap].areaSounds();
      }
    }
    
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

    playerX += Math.cos(localPlayerDamageAngle) * (localPlayerDamaged * 0.7) ;
    playerY += Math.sin(localPlayerDamageAngle) * (localPlayerDamaged * 0.7);

  }

  for (const projectile of projectilesClient) {

    if (projectile.x - 150 > enemy.spawn.x && projectile.x - 150 < enemy.spawn.x + enemy.w 
      && projectile.y - 190 > enemy.spawn.y && projectile.y - 190 < enemy.spawn.y + enemy.h 
      && enemy.damaged === 0 
      && !projectile.enemy
      ) {

      enemy.damaged = 2;
      enemy.angle = projectile.angle || projectile.bullet1 || projectile.bullet2;
      projectile.timeLeft = projectile.timeLeft > 1 ? 1 : projectile.timeLeft;
      enemy.health = enemy.health - projectile.damage;
      bossBarPercentage = Math.max(0, (enemy.health / enemy.maxHealth) * 100);
      bossBarHealth.style.width = bossBarPercentage + "%";
      bossBarHealthFollower.style.width = bossBarPercentage + "%";

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
      && !dying
    ) {

      localPlayerDamageAngle = projectile.angle || projectile.bullet1 || projectile.bullet2;
      projectile.timeLeft = projectile.timeLeft > 1 ? 1 : projectile.timeLeft;
      localPlayerDamaged = 15
      currentHealth--
      const playerHurtHealth = new Audio("./audios/playerHurtHealth.wav");
      playerHurtHealth.loop = false;
      playerHurtHealth.volume = 0.3;
      playerHurtHealth.play()
      socket.emit("playerHurt", null);

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
    if (counter >= repetitions || !mapsInfo[currentLand].enemies.includes(enemy) || dying) {
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

function moveStateRandom(enemy) {
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

  const chooseRandomDirection = () => {
    const directions = ["up", "down", "left", "right"];
    const availableDirections = directions.filter(dir => !colliders.includes(dir));
    if (availableDirections.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableDirections.length);
      const randomDirection = availableDirections[randomIndex];
      enemy.committedDirection = randomDirection;
      startCommitmentTimer(enemy);
      return randomDirection;
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

  // Decide random movement when no commitment
  const direction = chooseRandomDirection();
  if (direction === "up") enemy.spawn.y -= enemy.speedY;
  if (direction === "down") enemy.spawn.y += enemy.speedY;
  if (direction === "left") enemy.spawn.x -= enemy.speedX;
  if (direction === "right") enemy.spawn.x += enemy.speedX;

  resolveEnemyCollisions(enemy);
}


function startCommitmentTimer(enemy) {
  if (enemy.commitTimer) clearTimeout(enemy.commitTimer); // Reset existing timer if active
  enemy.commitTimer = setTimeout(() => {
    enemy.committedDirection = null; // Clear commitment after 3 seconds
    enemy.commitTimer = null; // Reset timer reference
  }, 2000);
}

function idleState(enemy) {
  enemy.currentStateName = "idle"
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
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
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

function lazerMooshState(enemy) {
  
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "attack1";
  }
  
  if (enemy.attackInterval) {

  let bulletAngle = getAngleBetweenPlayerAndEnemy(enemy);
  enemy.attackInterval = false;

  setTimeout(() => {
    enemy.attackInterval = true;
  }, 500);

    projectilesClient.push({
      angle: bulletAngle,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 12,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle + 0.1,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 12,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle - 0.1,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 12,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 
    
    projectilesClient.push({
      angle: bulletAngle + 0.3,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 12,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle - 0.3,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 12,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    const pop1 = new Audio("./audios/pop1.wav");
    pop1.loop = false;
    pop1.volume = 0.5;

    const pop2 = new Audio("./audios/pop2.wav");
    pop2.loop = false;
    pop2.volume = 0.5;

    const sounds = [pop1, pop2];

    const playRandomSound = () => {
      sounds[Math.floor(Math.random() * sounds.length)].play();
    };

    playRandomSound();
  }
}

function attackCircleState(enemy) {
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "attack2";
  }
  
  if (enemy.attackInterval) {
    enemy.attackInterval = false;

    const totalBullets = 20; // Total bullets forming the circle
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
    }, 1000);


    setTimeout(() => {
      enemy.attackInterval = true;
    }, 3000);
  }
}

let attackCircleMooshBossStateVar = false;
function attackCircleMooshBossState(enemy) {
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "attack2";
  }
  
  if (attackCircleMooshBossStateVar) {
    attackCircleMooshBossStateVar = false;
  } else {
    attackCircleMooshBossStateVar = true
  }
  
  if (enemy.attackInterval) {
    enemy.attackInterval = false;

    const totalBullets = 25; // Total bullets forming the circle
    const angleIncrement = (2 * Math.PI) / totalBullets; // Full circle divided into 20 parts

    const pop2 = new Audio("./audios/pop2.wav");
    pop2.loop = false;
    pop2.volume = 0.5;
    pop2.play();

    setTimeout(() => {
      const basicBulletTree = new Audio("./audios/basicBulletTree.wav");
      basicBulletTree.loop = false;
      basicBulletTree.volume = 0.5;
      // basicBulletTree.play()
      for (let i = 0; i < totalBullets; i++) {
        const bulletAngle = i * angleIncrement; // Calculate angle for each bullet
        projectilesClient.push({
          angle: attackCircleMooshBossStateVar ? bulletAngle : bulletAngle + 0.05,
          x: enemy.spawn.x + ((enemy.w)/2) + 200 + Math.cos(bulletAngle) * 20, // Offset to create a circular spawn
          y: enemy.spawn.y + ((enemy.h)/2) + 200 + Math.sin(bulletAngle) * 20,
          speed: 7,
          timeLeft: 400,
          playerId: socket.id,
          enemy: true,
        });
      }
    }, 1000);


    setTimeout(() => {
      enemy.attackInterval = true;
    }, 800);
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
  const dx = playerX - enemy.spawn.x - ((enemy.w)/2) - 200;
  const dy = playerY + 100 - enemy.spawn.y - ((enemy.h)/2) - 200;
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

function islandOneArcaneLoop() {


  // Map name        ↓
  currentLand = "islandOneArcane";


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

function grasslandsTowerLoop() {


  // Map name        ↓
  currentLand = "grasslandsTower";


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

function slimeForestPathArcaneLoop() {


  // Map name        ↓
  currentLand = "slimeForestPathArcane";


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

function mushroomForestArcaneLoop() {


  // Map name        ↓
  currentLand = "mushroomForestArcane";


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

function restfieldPathLoop() {


  // Map name        ↓
  currentLand = "restfieldPath";


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

function restFiledTownLoop() {


  // Map name        ↓
  currentLand = "restFiledTown";


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

function restfieldTownCemeteryLoop() {


  // Map name        ↓
  currentLand = "restfieldTownCemetery";

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

function restfieldTrialLoop() {


  // Map name        ↓
  currentLand = "restfieldTrial";

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

function restfieldMallLoop() {


  // Map name        ↓
  currentLand = "restfieldMall";

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

function restfieldMallInsideLoop() {


  // Map name        ↓
  currentLand = "restfieldMallInside";

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

function restfieldMallTreasureLoop() {


  // Map name        ↓
  currentLand = "restfieldMallTreasure";

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





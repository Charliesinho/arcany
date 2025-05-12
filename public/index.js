//Change this to push >

// const socket = io(`ws://localhost:5000`);
const socket = io(`https://arcanyGame.up.railway.app/`);
// const socket = io(window.location.origin);


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

let loadingProgress = 0;

function updateProgress() {
  loadingProgress += 10;
  // console.log(`Loading: ${loadingProgress}%`);

  if (loadingProgress >= 100) {
    // console.log("Finished loading");
    clearInterval(loadingInterval);
  }
}

let loadingInterval = setInterval(updateProgress, 200);

window.addEventListener("load", () => {
  loadingProgress = 100;
  console.log("Finished loading");
  document.getElementById("introLogo-img").style.display = "none";
  let videoIntro = document.getElementById("introLogo-video")
  videoIntro.volume = 0.2;
  videoIntro.play();
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
  
  setTimeout(() => {
    document.getElementById("introLogo").style.display = "none";
  }, 5000);
  
  clearInterval(loadingInterval);
});


//OBJECTS

const dirtFloor = new Image();
dirtFloor.src = "./objects/construction/floors/dirtFloor.png"
const shadowTree = new Image();
shadowTree.src = "./objects/shadowTree.png"
const treeOne = new Image();
treeOne.src = "./objects/outdoor/trees/treeOne.png"
const woodPole = new Image();
woodPole.src = "./objects/construction/fences/woodPole.png"
const whiteFlowers = new Image();
whiteFlowers.src = "./objects/outdoor/flowers/whiteFlowers.png"
const bushOne = new Image();
bushOne.src = "./objects/outdoor/miniBush/bushOne.png"
const rockOne = new Image();
rockOne.src = "./objects/outdoor/rocks/rockOne.png"
const woodSquareDoor = new Image();
woodSquareDoor.src = "./objects/construction/walls/woodSquareDoor.png"
const vineOne = new Image();
vineOne.src = "./objects/outdoor/exteriorDecoration/vineOne.png"
const chestCommon = new Image();
chestCommon.src = "./objects/structures/chest/chestCommon.png"
const cookingPotObj = new Image();
cookingPotObj.src = "./objects/furniture/kitchen/cookingPotObj.png"
const grassOne = new Image();
grassOne.src = "./objects/outdoor/grass/grassOne.png"
const lightPoleOne = new Image();
lightPoleOne.src = "./objects/outdoor/outdoorFurniture/lightPoleOne.png"
const mediumTorch = new Image();
mediumTorch.src = "./objects/outdoor/outdoorFurniture/mediumTorch.png"
const dirtFloorBig = new Image();
dirtFloorBig.src = "./objects/construction/floors/dirtFloorBig.png"
const plazaFountain = new Image();
plazaFountain.src = "./objects/outdoor/fountains/plazaFountain.png"
const cookingStand = new Image();
cookingStand.src = "./objects/structures/kitchen/cookingStand.png"
const enchantingTower = new Image();
enchantingTower.src = "./objects/structures/enchanting/enchantingTower.png"
const enchantingTable = new Image();
enchantingTable.src = "./objects/structures/enchanting/enchantingTable.png"
const flagLine = new Image();
flagLine.src = "./objects/outdoor/outdoorFurniture/flagLine.png"
const plantPatch = new Image();
plantPatch.src = "./objects/construction/floors/plantPatch.png"
const woodFence = new Image();
woodFence.src = "./objects/construction/fences/woodFence.png"
const woodFenceVer = new Image();
woodFenceVer.src = "./objects/construction/fences/woodFenceVer.png"
const woodSmallWallHor = new Image();
woodSmallWallHor.src = "./objects/construction/fences/woodSmallWallHor.png"
const woodSmallWallVert = new Image();
woodSmallWallVert.src = "./objects/construction/fences/woodSmallWallVert.png"
const woodWallDoor = new Image();
woodWallDoor.src = "./objects/construction/walls/woodWallDoor.png"
const woodWallHor = new Image();
woodWallHor.src = "./objects/construction/walls/woodWallHor.png"
const woodWallVer = new Image();
woodWallVer.src = "./objects/construction/walls/woodWallVer.png"
const woodWindowWall = new Image();
woodWindowWall.src = "./objects/construction/walls/woodWindowWall.png"
const fishPond = new Image();
fishPond.src = "./objects/outdoor/exteriorDecoration/fishPond.png"
const dryGrass = new Image();
dryGrass.src = "./objects/outdoor/grass/dryGrass.png"
const smallLake = new Image();
smallLake.src = "./objects/outdoor/water/smallLake.png"
const booksOne = new Image();
booksOne.src = "./objects/furniture/miniObject/booksOne.png"
const redSmallCarpet = new Image();
redSmallCarpet.src = "./objects/furniture/carpets/redSmallCarpet.png"
const chairLeft = new Image();
chairLeft.src = "./objects/furniture/chairs/chairLeft.png"
const chairRight = new Image();
chairRight.src = "./objects/furniture/chairs/chairRight.png"
const decoOne = new Image();
decoOne.src = "./objects/furniture/miniObject/decoOne.png"
const hangingPlant = new Image();
hangingPlant.src = "./objects/outdoor/plants/hangingPlant.png"
const hangingPlantRed = new Image();
hangingPlantRed.src = "./objects/outdoor/plants/hangingPlantRed.png"
const lanternOne = new Image();
lanternOne.src = "./objects/outdoor/exteriorDecoration/lanternOne.png"
const paintFour = new Image();
paintFour.src = "./objects/furniture/painting/paintFour.png"
const paintOne = new Image();
paintOne.src = "./objects/furniture/painting/paintOne.png"
const paintThree = new Image();
paintThree.src = "./objects/furniture/painting/paintThree.png"
const paintTwo = new Image();
paintTwo.src = "./objects/furniture/painting/paintTwo.png"
const potPlantFour = new Image();
potPlantFour.src = "./objects/outdoor/plants/potPlantFour.png"
const potPlantThree = new Image();
potPlantThree.src = "./objects/outdoor/plants/potPlantThree.png"
const potPlantTwo = new Image();
potPlantTwo.src = "./objects/outdoor/plants/potPlantTwo.png"
const potPlantOne = new Image();
potPlantOne.src = "./objects/outdoor/plants/potPlantOne.png"
const shelves = new Image();
shelves.src = "./objects/furniture/storage/shelves.png"
const stoneFloor = new Image();
stoneFloor.src = "./objects/construction/floors/stoneFloor.png"
const vineTwo = new Image();
vineTwo.src = "./objects/outdoor/exteriorDecoration/vineTwo.png"
const woodFloor = new Image();
woodFloor.src = "./objects/construction/floors/woodFloor.png"
const woodTable = new Image();
woodTable.src = "./objects/furniture/tables/woodTable.png"

const residency = new Image();
residency.src = "./islands/residency.png"

const lobbyMap = new Image();
lobbyMap.src = "./islands/lobby.png";

const lobbyMapFront = new Image();
lobbyMapFront.src = "./islands/lobbyFront.png";

const emptyMap = new Image();
emptyMap.src = "./islands/emptyMap.png";

const emptyMapFront = new Image();
emptyMapFront.src = "./islands/emptyMapFront.png";

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

const grasslandsEnviroment = new Audio("./audios/forestSounds.wav");
grasslandsEnviroment.loop = true;

const nighttimeForest = new Audio("./audios/nighttimeForest.wav");
nighttimeForest.loop = true;

const restfield = new Audio("./audios/restfield.wav");
restfield.loop = true;

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
canvasLobby.width =  window.innerWidth * 1.1;
canvasLobby.height = window.innerHeight * 1.1;

const canvas = canvasLobby.getContext("2d");

const buffer = document.createElement('canvas');
buffer.width = 4500;
buffer.height = 4500;
const b_ctx = buffer.getContext('2d');

let players = [];
let enemies = [];
let enemiesClient = [];
let projectiles = [];

let cameraShakeX = -150;
let cameraShakeY = -180;

const chatButton = document.getElementById('chatIcon');
const sitDownIconButton = document.getElementById('sitDownIcon');
const hideAndSickButton = document.getElementById('hideAndSick');
const fishingAvailableButton = document.getElementById('fishingAvailable');
const fishSelectorButton = document.getElementById('fishSelector');
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

const enchantingBookBookArcany = document.getElementById('enchantingBookBookArcany');
const enchantingBookBookSolar = document.getElementById('enchantingBookBookSolar');
const enchantingBookBookNuclear = document.getElementById('enchantingBookBookNuclear');

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
const nemiTag = document.querySelector('.nemiTag');
const rekiTag = document.querySelector('.rekiTag');
const fishBonesTag = document.querySelector('.fishBonesTag');
const bloomTag = document.querySelector('.bloomTag');
const hanamiTag = document.querySelector('.hanamiTag');
const burpyTag = document.querySelector('.burpyTag');
const barracudaTag = document.querySelector('.barracudaTag');
const frostplumTag = document.querySelector('.frostplumTag');
const bulbberTag = document.querySelector('.bulbberTag');
const rayTag = document.querySelector('.rayTag');
const minrowTag = document.querySelector('.minrowTag');
const codyTag = document.querySelector('.codyTag');
const willyTag = document.querySelector('.willyTag');
const lowTag = document.querySelector('.lowTag');

const miniMushroomTag = document.querySelector('.miniMushroomTag');
const boneTag = document.querySelector('.boneTag');
const blanketTag = document.querySelector('.blanketTag');
const slimeTag = document.querySelector('.slimeTag');
const treeLeafTag = document.querySelector('.treeLeafTag');

const gemOneTag = document.querySelector('.gemOneTag');
const gemTwoTag = document.querySelector('.gemTwoTag');
const gemThreeTag = document.querySelector('.gemThreeTag');
const gemFourTag = document.querySelector('.gemFourTag');
const gemFiveTag = document.querySelector('.gemFiveTag');

const runeRangeTag = document.querySelector('.runeRangeTag');
const runeFireRateTag = document.querySelector('.runeFireRateTag');
const runeBulletsTag = document.querySelector('.runeBulletsTag');

const miniCommonMeatTag = document.querySelector('.miniCommonMeatTag');
const commonMeatTag = document.querySelector('.commonMeatTag');

const nameBookFish = document.querySelector('.nameBookFish');
const ImgBookFish = document.querySelector('.ImgBookFish');
const descriptionBookFish = document.querySelector('.descriptionBookFish');
const lvlBookFish = document.querySelector('.lvlBookFish');

const nameBookMonster = document.querySelector('.nameBookMonster');
const ImgBookMonster = document.querySelector('.ImgBookMonster');
const descriptionBookMonster = document.querySelector('.descriptionBookMonster');
const lvlBookMonster = document.querySelector('.lvlBookMonster');

const nameBookMeat = document.querySelector('.nameBookMeat');
const ImgBookMeat = document.querySelector('.ImgBookMeat');
const descriptionBookMeat = document.querySelector('.descriptionBookMeat');
const lvlBookMeat = document.querySelector('.lvlBookMeat');

const nameBookWeapon = document.querySelector('.nameBookWeapon');
const ImgBookWeapon = document.querySelector('.ImgBookWeapon');
const descriptionBookWeapon = document.querySelector('.descriptionBookWeapon');
const lvlBookWeapon = document.querySelector('.lvlBookWeapon');

const nameBookEnchantment = document.querySelector('.nameBookEnchantment');
const ImgBookEnchantment = document.querySelector('.ImgBookEnchantment');
const descriptionBookEnchantment = document.querySelector('.descriptionBookEnchantment');
const lvlBookEnchantment = document.querySelector('.lvlBookEnchantment');
const enchantmentBook = document.querySelector('.enchantmentBook');


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
const craftingLevel = document.getElementById("craftingLevel");
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

const tradeItemImg = document.getElementById('tradeItemImg');
const tradeSend = document.getElementById('tradeSend');
const tradeButton = document.getElementById('tradeButton');
const tradeScreen = document.getElementById('tradeScreen');
const playerTradeId = document.getElementById('playerTradeId');

const resetButton = document.querySelectorAll('.resetButton')
const errorPopUp = document.getElementById('errorPopUp');

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

const enchantingContainer = document.querySelector("#enchantingContainer");
const enchantingItem1 = document.querySelector("#enchantingItem1");
const enchantingItem2 = document.querySelector("#enchantingItem2");
const rune0 = document.querySelector("#rune0");
const rune1 = document.querySelector("#rune1");
const rune2 = document.querySelector("#rune2");
const rune3 = document.querySelector("#rune3");
const rune4 = document.querySelector("#rune4");
const rune5 = document.querySelector("#rune5");

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

const placeWalls = document.getElementById("wallButtonUi");
const hammerButtonUi  = document.getElementById("hammerButtonUi");
const layerOneButtonUi  = document.getElementById("layerOneButtonUi");
const layerTwoButtonUi  = document.getElementById("layerTwoButtonUi");
const layerThreeButtonUi  = document.getElementById("layerThreeButtonUi");
const deleteObjButtonUi = document.getElementById("deleteObjButtonUi");
const saveObjButtonUi = document.getElementById("saveObjButtonUi");
const deleteWalls = document.getElementById("deletewWallButtonUi");
const placeEnchantingArea = document.getElementById("enchantingButtonUi");
const startBuildingBut = document.getElementById("buildButton");
const showWalls = document.getElementById("showWalls");
const sapwnButtonUi = document.getElementById("sapwnButtonUi");
const exportWalls = document.getElementById("exportWalls");
const placeFishingArea = document.getElementById("fishingButtonUi");
const placeCraftingArea = document.getElementById("craftingButtonUi");
const placeCookingArea = document.getElementById("cookingButtonUi");
const placeChest = document.getElementById("placeChest");
const placeTransition = document.getElementById("portalButtonUi");
const roomsDiv = document.getElementById('roomsDev');
const dialogsDiv = document.getElementById('dialogsDev');
const arcaneTransition = document.getElementById('arcaneTransition');
const liquidTransition = document.getElementById('liquidTransition');
const placeDialog = document.getElementById('placeDialog');
const uiBuilding = document.getElementById('uiBuilding');
const uiBuildingObjects = document.getElementById('uiBuildingObjects');

const uiBuildingCategoryConstruction = document.getElementById('uiBuildingCategoryConstruction');
const uiBuildingCategoryFurniture = document.getElementById('uiBuildingCategoryFurniture');
const uiBuildingCategoryStructure = document.getElementById('uiBuildingCategoryStructure');
const uiBuildingCategoryOutdoor = document.getElementById('uiBuildingCategoryOutdoor');


const mapNameInput = document.getElementById('mapNameInput');
const mapDescInput = document.getElementById('mapDescInput');
const createMapButton = document.getElementById('createMapButton');
const createMapButtonUi = document.getElementById('createMapButtonUi');
const mapInfoDiv = document.getElementById('mapInfo');

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

let mobsImages = [
  {
    name: "treeSimpleEnemy",
    imgw: 31,
    imgh: 27,
    imgcw: 31,
    imgch: 0,
    frames: 0,
    framesTimer: 0,
    level: 1,
    xp: 0,
    speedX: 1,
    speedY: 1,
    spawn: {
      x: 0,
      y: 0
    },
    w: 100,
    h: 100,
    currentStateName: "idle",
    currentState: null,
    attackInterval: true,
    states: [],
    damaged: 0,
    health: 10,
    angle: 0,
    maxHealth: 10,
    baseSpawn: {
      x: 0,
      y: 0
    },
    spawnTimer: 1000,
    enemyStateInt: 1000,
    drop: "",
    dropRate: 100,
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
    xp: 0,
    speedX: 5,
    speedY: 5,
    spawn: {
      x: 0,
      y: 0
    },
    w: 80,
    h: 80,
    currentStateName: "idle",
    currentState: null,
    attackInterval: true,
    states: [],
    damaged: 0,
    health: 4,
    angle: 0,
    maxHealth: 10,
    baseSpawn: {
      x: 0,
      y: 0
    },
    spawnTimer: 1000,
    enemyStateInt: 1000,
    drop: "",
    dropRate: 100,
  },
]

//Ui interaction >

// uiBuilding.addEventListener('wheel', (event) => {
//   event.preventDefault(); // Stop vertical scrolling
//   uiBuilding.scrollLeft += event.deltaY; // Scroll horizontally
// });

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
  document.getElementById("introLogo-img").style.display = "block";
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
    openerScreen.style.display = "none"
  }, 1000);
  
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

// Trade system >

let trading = false;

tradeSend.addEventListener("click", function(){
  socket.emit("toDelete", tradedItems);

  setTimeout(() => {
    let tradingItems = [playerTradeId.value, tradingArray[0]]
    console.log(tradingItems)
    socket.emit("toTrade", tradingItems);
    resetTrading();
    trading = false;
    noMovement = false;
  }, 500);
})

function resetTrading () {
  playerTradeId.value = "";
  tradedItems = [];
  tradingArray = [];
  tradeItemImg.src = "./Textures/itemPlaceholder.png"
  tradeScreen.style.opacity = "0";
  tradeScreen.style.pointerEvents = "none"
}

tradeButton.addEventListener("click", function(){
  if (trading) resetTrading();
  trading = trading ? false : true
  noMovement = trading ? true : false;
  tradeScreen.style.opacity = trading ? "1" : "0";
  tradeScreen.style.pointerEvents = trading ? "all" : "none";
  if (uiIsClose) openIvn()
})

// Trade system <

// Chest > 
rewardChest.addEventListener("click", () => {
  openChestIsland ()
});

let currentLeft = 0
let currentChestItem = "stick"

function openChestIsland () {
  if (IslandChestOpened === false) {

    IslandChestOpened = true;

    const key = myPlayer.inventory.find(item => (item.name === "chestKey"));
    const chestKeyRestfield = myPlayer.inventory.find(item => (item.name === "chestKeyRestfield"));
    const chestKeyCommon = myPlayer.inventory.find(item => (item.name === "chestKeyCommon"));

    if (key || chestKeyRestfield || chestKeyCommon) {

        const openChest = setInterval(() => {
    
          if (currentLeft >= 700) {
            clearInterval(openChest)
    
            setTimeout(() => {
              currentLeft = 0
              rewardChest.style.left = `-${currentLeft}%`;
              IslandChestOpened = false;
            }, 1000);
          }
    
          rewardChest.style.left = `-${currentLeft}%`;
    
          currentLeft += 100;
        }, 50);
        
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
        else if (chestKeyCommon) {
          socket.emit("rewardChest", currentChestItem);
          openChestAudio.play()
        }
        else {
          errorDisplay("Your inventory is full.")
        }
    }
    else {
      errorDisplay("Your dont have a key.")
      IslandChestOpened = false;
    }
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
    
fishSelectorButton.style.display = 'none'
    fishingAvailablevar = false

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

let keyBlocker = true;

window.addEventListener("keydown", (e) => {
  if(keyBlocker) return
  
  if (e?.key === "Enter") {
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

});

window.addEventListener("keydown", (e) => {
   if(keyBlocker) return

    if (e?.key?.toLowerCase() === "1" || e?.key?.toLowerCase() === "&") {
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
  // vegetableOne.style.display = "none"
  // fruitOne.style.display = "none"
  monsterPart.style.display = "none"

});
ingredientBookBookMeat.addEventListener("click", (e) =>{
  fishOne.style.display = "none"
  meatOne.style.display = "flex"
  // vegetableOne.style.display = "none"
  // fruitOne.style.display = "none"
  monsterPart.style.display = "none"
});
// ingredientBookBookVegetable.addEventListener("click", (e) =>{
//   fishOne.style.display = "none"
//   meatOne.style.display = "none"
//   vegetableOne.style.display = "flex"
//   fruitOne.style.display = "none"
//   monsterPart.style.display = "none"

//   ingredientBookBookFish.style.color = '#C0A58C'
//   ingredientBookBookMeat.style.color = '#C0A58C'
//   ingredientBookBookVegetable.style.color = 'black'
//   ingredientBookBookMonsterPart.style.color = '#C0A58C'
//   ingredientBookBookFruit.style.color = '#C0A58C'
// });

// ingredientBookBookFruit.addEventListener("click", (e) =>{
//   fishOne.style.display = "none"
//   meatOne.style.display = "none"
//   vegetableOne.style.display = "none"
//   fruitOne.style.display = "flex"
//   monsterPart.style.display = "none"

//   ingredientBookBookFish.style.color = '#C0A58C'
//   ingredientBookBookMeat.style.color = '#C0A58C'
//   ingredientBookBookVegetable.style.color = '#C0A58C'
//   ingredientBookBookMonsterPart.style.color = '#C0A58C'
//   ingredientBookBookFruit.style.color = 'black'
// });
ingredientBookBookMonsterPart.addEventListener("click", (e) =>{
  fishOne.style.display = "none"
  meatOne.style.display = "none"
  // vegetableOne.style.display = "none"
  // fruitOne.style.display = "none"
  monsterPart.style.display = "flex"

});

let objMeat = {
  miniCommonMeat: {
    name: "MINI STEAK",
    desc: "This meat usually comes from very small creatures, such as bunnies and squirrels, and can be turned into delicious plates.",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/smallCommonMeat.png"
  },
  CommonMeat: {
    name: "STEAK",
    desc: "The Steak is a popular choice for a meal, it comes from bigger wild creatures such as deers or bears, just make sure to season it properly to get the best taste out of it!",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/bigCommonMeat.png"
  }
};
  nameBookMeat.innerHTML = objMeat["CommonMeat"].name
  ImgBookMeat.src = objMeat["CommonMeat"].img
  descriptionBookMeat.innerHTML = objMeat["CommonMeat"].desc
  lvlBookMeat.innerHTML = objMeat["CommonMeat"].lvl

  miniCommonMeatTag.addEventListener("click", (e) =>{
    let item = "miniCommonMeat"
    nameBookMeat.innerHTML = objMeat["miniCommonMeat"].name
  ImgBookMeat.src = objMeat["miniCommonMeat"].img
  descriptionBookMeat.innerHTML = objMeat["miniCommonMeat"].desc
  lvlBookMeat.innerHTML = objMeat["miniCommonMeat"].lvl
  });
  commonMeatTag.addEventListener("click", (e) =>{
    let item = "CommonMeat"
    nameBookMeat.innerHTML = objMeat["CommonMeat"].name
    ImgBookMeat.src = objMeat["CommonMeat"].img
    descriptionBookMeat.innerHTML = objMeat["CommonMeat"].desc
    lvlBookMeat.innerHTML = objMeat["CommonMeat"].lvl
  });

let objMonsterPart = {
  miniMushroom: {
    name: "MINI MUSHROOM",
    desc: "This tiny mushroom is a common ingredient in cooking. It's a good source of nutrients and can be used in various dishes.",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/miniMushroom.png"
  },
  bone: {
    name: "BONE",
    desc: "The Bone is not really edible but perhaps it can be used for other things. It is said that it contains the power of death.",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/bone.png"
  },
  blanket: {
    name: "BLANKET",
    desc: "This blanket is usually worn by ghosts, I really did not expect these creatures to use a physical object to cover their identity. I dont believe it to be edible.",
    lvl: "LEVEL REQUIRED 2",
    img: "./inventory/restfieldBlanket.png"
  },
  slime: {
    name: "SLIME DROP",
    desc: "This exotic ingredient is made of slimy material, however it's composition is not from this world, whatever that means.",
    lvl: "LEVEL REQUIRED 3",
    img: "./inventory/slimeGuts.png"
  },
  treeLeaf: {
    name: "TREE MEAF",
    desc: "A natural wrapper found in nature, can be obtained by harvesting trees and bushes, it can be cooked with meat in order to create a delicious and exotic dish!",
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
  low: {
    name: "LOW",
    desc: "It is believed that the low is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 1",
    lvlNum: 1,
    img: "./inventory/low.png"
  },
  sardine: {
    name: "SARDINE",
    desc: "Sardine of Grassland. You can find it in CastleSide. Seems to really like rivers but their small size dont allow them to have a very big brain... Do as you please with that information.",
    lvl: "LEVEL REQUIRED 5",
    lvlNum: 5,
    img: "./inventory/sarding.png"
  },
  nemi: {
    name: "NEMI",
    desc: "It is believed that the Octopus is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 7",
    lvlNum: 7,
    img: "./inventory/nemi.png"
  },
  crab: {
    name: "CRAB",
    desc: "The Crab can be found in the south coast of the Grasslands. You can cook it into a delicious meal, just be careful with their claws!",
    lvl: "LEVEL REQUIRED 10",
    lvlNum: 10,
    img: "./inventory/crab.png"
  },
  hanami: {
    name: "HANAMI",
    desc: "It is believed that the hanami is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 12",
    lvlNum: 12,
    img: "./inventory/hanami.png"
  },
  willy: {
    name: "WILLY",
    desc: "It is believed that the willy is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 17",
    lvlNum: 17,
    img: "./inventory/willy.png"
  },
  cork: {
    name: "CORK",
    desc: "The Cork is a type of scavanger fish, he like to eat dead things that fall in the water, for this reason is very common to find these in Restfield, just make sure to cook it before eating it!",
    lvl: "LEVEL REQUIRED 23",
    lvlNum: 23,
    img: "./inventory/cork.png"
  },
  bass: {
    name: "BASS",
    desc: "The Bass used to be yellow, however after the great collapse he slowly turned purple. Not sure if it is safe to eat but you might as well try, it's gorgeous though!",
    lvl: "LEVEL REQUIRED 25",
    lvlNum: 25,
    img: "./inventory/bass.png"
  },
  barracuda: {
    name: "BARRACUDA",
    desc: "It is believed that the barracuda is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 30",
    lvlNum: 30,
    img: "./inventory/barracuda.png"
  },
  ballo: {
    name: "BALLO",
    desc: "The Ballo is a fairly big fish that loves river waters. His green color helps him blend into the water, allowing him to hunt sardins very easily.",
    lvl: "LEVEL REQUIRED 34",
    lvlNum: 34,
    img: "./inventory/ballo.jpg"
  },
  bloom: {
    name: "BLOOM",
    desc: "It is believed that the bloom is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 37",
    lvlNum: 37,
    img: "./inventory/bloom.png"
  },
  bulbber: {
    name: "BULBBER",
    desc: "It is believed that the bulbber is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 40",
    lvlNum: 40,
    img: "./inventory/bulbber.png"
  },
  octopus: {
    name: "OCTOPUS",
    desc: "It is believed that the Octopus is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 47",
    lvlNum: 47,
    img: "./inventory/octopus.png"
  },
  frostplum: {
    name: "FROSTPLUM",
    desc: "It is believed that the frostplum is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 50",
    lvlNum: 50,
    img: "./inventory/frostplum.png"
  },
  reki: {
    name: "REKI",
    desc: "It is believed that the reki is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 55",
    lvlNum: 55,
    img: "./inventory/reki.png"
  },
  ray: {
    name: "RAY",
    desc: "It is believed that the ray is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 57",
    lvlNum: 57,
    img: "./inventory/ray.png"
  },
  burpy: {
    name: "BURPY",
    desc: "It is believed that the burpy is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 60",
    lvlNum: 60,
    img: "./inventory/burpy.png"
  },
  cody: {
    name: "CODY",
    desc: "It is believed that the cody is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 67",
    lvlNum: 67,
    img: "./inventory/cody.png"
  }, 
  minrow: {
    name: "MINROW",
    desc: "It is believed that the minrow is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 75",
    lvlNum: 75,
    img: "./inventory/minrow.png"
  },
  fishBones: {
    name: "FISH BONES",
    desc: "It is believed that the fishBones is a magical creature, given his vibrant colors and his big size, however is extremely rare to find. When cooked, his delicious and calming taste can make even a dragon tamable.",
    lvl: "LEVEL REQUIRED 5",
    lvlNum: 5,
    img: "./inventory/fishBones.png"
  },
};
nameBookFish.innerHTML = objFishes["low"].name
ImgBookFish.src = objFishes["low"].img
descriptionBookFish.innerHTML = objFishes["low"].desc
lvlBookFish.innerHTML = objFishes["low"].lvl

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
nemiTag.addEventListener("click", (e) =>{
let item = "nemi"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
rekiTag.addEventListener("click", (e) =>{
let item = "reki"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
fishBonesTag.addEventListener("click", (e) =>{
let item = "fishBones"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
bloomTag.addEventListener("click", (e) =>{
let item = "bloom"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
hanamiTag.addEventListener("click", (e) =>{
let item = "hanami"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
burpyTag.addEventListener("click", (e) =>{
let item = "burpy"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
barracudaTag.addEventListener("click", (e) =>{
let item = "barracuda"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
frostplumTag.addEventListener("click", (e) =>{
let item = "frostplum"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
bulbberTag.addEventListener("click", (e) =>{
let item = "bulbber"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
rayTag.addEventListener("click", (e) =>{
let item = "ray"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
minrowTag.addEventListener("click", (e) =>{
let item = "minrow"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
codyTag.addEventListener("click", (e) =>{
let item = "cody"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
willyTag.addEventListener("click", (e) =>{
let item = "willy"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});
lowTag.addEventListener("click", (e) =>{
let item = "low"
nameBookFish.innerHTML = objFishes[item].name
ImgBookFish.src = objFishes[item].img
descriptionBookFish.innerHTML = objFishes[item].desc
lvlBookFish.innerHTML = objFishes[item].lvl
});

let objHistory = {
  castelSide: {
    name: "CASTLE SIDE",
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
  nameBookHistory.innerHTML = objHistory[item].name
  descriptionBookHistory.innerHTML = objHistory[item].history
  ImgBookHistory.src = objHistory[item].img

  historyBookCastelSide.style.color = '#C0A58C'
  historyBookRestfield.style.color = 'black'
})

let objEnchanting = {
  runeRange: {
    name: "RUNE RANGE",
    desc: "This rune will allow the weapon to shoot further away, this way proximity to targets would not be nescessary.",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/runeRange.png",
    enchantingImg: "./Textures/rangeCode.png"
  },
  runeFireRate: {
    name: "RUNE FIRE RATE",
    desc: "The Fire Rate rune will allow the weapon to fire faster by reducing the cooldown time between shots.",
    lvl: "LEVEL REQUIRED 2",
    img: "./inventory/runeFireRate.png",
    enchantingImg: "./Textures/fireRateCode.png"
  },
  runeBullets: {
    name: "RUNE BULLETS",
    desc: "The Bullets rune will allow the weapon to double the amount of projectile it can fire, without reducing the damage that each of them does.",
    lvl: "LEVEL REQUIRED 3",
    img: "./inventory/runeBullets.png",
    enchantingImg: "./Textures/bulletsCode.png"
  }
}
enchantingBookBookArcany.addEventListener("click", (e) =>{
  arcanyGem.style.display = "flex"
  solarGem.style.display = "none"
  nuclearGem.style.display = "none"

});
enchantingBookBookSolar.addEventListener("click", (e) =>{
  arcanyGem.style.display = "none"
  solarGem.style.display = "flex"
  nuclearGem.style.display = "none"

});
enchantingBookBookNuclear.addEventListener("click", (e) =>{
  arcanyGem.style.display = "none"
  solarGem.style.display = "none"
  nuclearGem.style.display = "flex"

});

nameBookEnchantment.innerHTML = objEnchanting["runeRange"].name
ImgBookEnchantment.src = objEnchanting["runeRange"].img
enchantmentBook.src = objEnchanting["runeRange"].enchantingImg
descriptionBookEnchantment.innerHTML = objEnchanting["runeRange"].desc
lvlBookEnchantment.innerHTML = objEnchanting["runeRange"].lvl

runeRangeTag.addEventListener("click", (e) =>{
  let item = "runeRange"
  nameBookEnchantment.innerHTML = objEnchanting[item].name
  ImgBookEnchantment.src = objEnchanting[item].img
  enchantmentBook.src = objEnchanting[item].enchantingImg
  descriptionBookEnchantment.innerHTML = objEnchanting[item].desc
  lvlBookEnchantment.innerHTML = objEnchanting[item].lvl
});
runeFireRateTag.addEventListener("click", (e) =>{
  let item = "runeFireRate"
  nameBookEnchantment.innerHTML = objEnchanting[item].name
  ImgBookEnchantment.src = objEnchanting[item].img
  descriptionBookEnchantment.innerHTML = objEnchanting[item].desc
  lvlBookEnchantment.innerHTML = objEnchanting[item].lvl
  enchantmentBook.src = objEnchanting[item].enchantingImg
});
runeBulletsTag.addEventListener("click", (e) =>{
  let item = "runeBullets"
  nameBookEnchantment.innerHTML = objEnchanting[item].name
  ImgBookEnchantment.src = objEnchanting[item].img
  descriptionBookEnchantment.innerHTML = objEnchanting[item].desc
  lvlBookEnchantment.innerHTML = objEnchanting[item].lvl
  enchantmentBook.src = objEnchanting[item].enchantingImg
});

let objWeaponArcany = {
  common: {
    name: "FLOPPER",
    desc: "This is the most common weapon, by simply crafting the gem with a stick, you will be able to use it. It will not do too much damage but it will get the job done.",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/arcaneStaffCommon.png"
  },
  lancer: {
    name: "LANCER",
    desc: "The Lancer acts as a deadly sniper, it has a high damage but low fire rate trade off. It is said to be the weapon used to defend Castleside when the great collapse happened.",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/arcaneLancerInv.gif"
  },
  repeater: {
    name: "REPEATER",
    desc: "This weapon was discovered by accident, a weird geometry in the gem makes it shoot 3 projectiles intead of 1. However the damage is severly reduced.",
    lvl: "LEVEL REQUIRED 1",
    img: "./inventory/arcaneRepeaterInv.png"
  },

}
gemOneTag.addEventListener("click", (e) =>{
  let item = "common"
  nameBookWeapon.innerHTML = objWeaponArcany[item].name
  ImgBookWeapon.src = objWeaponArcany[item].img
  descriptionBookWeapon.innerHTML = objWeaponArcany[item].desc
  lvlBookWeapon.innerHTML = objWeaponArcany[item].lvl
});
gemTwoTag.addEventListener("click", (e) =>{
  let item = "lancer"
  nameBookWeapon.innerHTML = objWeaponArcany[item].name
  ImgBookWeapon.src = objWeaponArcany[item].img
  descriptionBookWeapon.innerHTML = objWeaponArcany[item].desc
  lvlBookWeapon.innerHTML = objWeaponArcany[item].lvl
});
gemThreeTag.addEventListener("click", (e) =>{
  let item = "repeater"
  nameBookWeapon.innerHTML = objWeaponArcany[item].name
  ImgBookWeapon.src = objWeaponArcany[item].img
  descriptionBookWeapon.innerHTML = objWeaponArcany[item].desc
  lvlBookWeapon.innerHTML = objWeaponArcany[item].lvl
});


let deleting = false;

chatButton.addEventListener("click", () => {
 showChatFunction()
  
})
sitDownIconButton.addEventListener("click", () => {
  if (animPlayer !== "sittingDown"){
    animPlayer = "sittingDown"
    socket.emit("animPlayer", animPlayer);
    socket.emit("lastLookPlayer", lastLookPlayer);
  } else {
    animPlayer = "idleRight"
    socket.emit("animPlayer", animPlayer);
    socket.emit("lastLookPlayer", lastLookPlayer);
  }
  
})

let hideAndSickvar = false
let fishingAvailablevar = false

hideAndSickButton.addEventListener("click", () => {
  if (hideAndSickvar === false){
    hideAndSickvar = true
  } else {
    hideAndSickvar = false
  }
  
  
})
fishingAvailableButton.addEventListener("click", () => {
  if (fishingAvailablevar === false){
    fishSelectorButton.style.display = 'flex'
    fishingAvailablevar = true

    chatIsActivate = false
    chat.style.display = "none";
    chatButton.style.bottom = "10px"
    chatInput.value = "";
    chatInput.disabled = true;
    chatInput.disabled = false;
    blockMovement = false;
    noMovement = false
  } else {
    fishSelectorButton.style.display = 'none'
    fishingAvailablevar = false
  }
  
  
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
for (let i = 0; i < resetButton.length; i++) {
  resetButton[i].addEventListener("click", function(){
  resetEnchant()
  cancelCrafting()
  closeCooking()
 
  })
}

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

// Enchanting >

let enchantingCode = "";

rune0.addEventListener("click", function(){
  checkCodeEnachant("0", rune0);
  // rune0.style.filter = "saturate(2)";
});
rune1.addEventListener("click", function(){
  checkCodeEnachant("1", rune1);
  // rune1.style.filter = "saturate(2)";
})
rune2.addEventListener("click", function(){
  checkCodeEnachant("2", rune2);
  // rune2.style.filter = "saturate(2)";
})
rune3.addEventListener("click", function(){
  checkCodeEnachant("3", rune3);
  // rune3.style.filter = "saturate(2)";
})
rune4.addEventListener("click", function(){
  checkCodeEnachant("4", rune4);
  // rune4.style.filter = "saturate(2)";
})
rune5.addEventListener("click", function(){
  checkCodeEnachant("5", rune5);
  // rune5.style.filter = "saturate(2)";
})

function checkCodeEnachant (number, rune) {
  if (enchantingArray.length === 2) {

    rune.style.filter = "saturate(2)";

    let code = enchantingArray[1].code;

    const enchantRune = new Audio("./audios/enchantRune.wav");
    enchantRune.loop = false;
    enchantRune.volume = 0.5;
    enchantRune.play();

    enchantingCode += number;
  
    if (enchantingCode.length === 6) {
      if (code === enchantingCode) {
        const enchantSuccess = new Audio("./audios/enchantSuccess.wav");
        enchantSuccess.loop = false;
        enchantSuccess.volume = 0.5;
        enchantSuccess.play();
        setTimeout(() => {
          socket.emit("enchanting", enchantingArray);
        }, 200);
        socket.emit("toDelete", enchantedItems);
      } else {
        const enchantFail = new Audio("./audios/enchantFail.wav");
        enchantFail.loop = false;
        enchantFail.play();
        errorDisplay("The enchantation was not correct.")
      }
      setTimeout(() => {   
        enchantingCode = "";
        enchantingArray = [];
        enchantedItems = []
        enchantingItem1.src = "./Textures/itemPlaceholder.png";
        enchantingItem2.src = "./Textures/itemPlaceholder.png";
        rune0.style.filter = "saturate(0)";
        rune1.style.filter = "saturate(0)";
        rune2.style.filter = "saturate(0)";
        rune3.style.filter = "saturate(0)";
        rune4.style.filter = "saturate(0)";
        rune5.style.filter = "saturate(0)";
      }, 500);
    }
  }
}

function resetEnchant () {
  enchantingCode = "";
  enchantingArray = [];
  enchantedItems = []
  enchantingItem1.src = "./Textures/itemPlaceholder.png";
  enchantingItem2.src = "./Textures/itemPlaceholder.png";
  rune0.style.filter = "saturate(0)";
  rune1.style.filter = "saturate(0)";
  rune2.style.filter = "saturate(0)";
  rune3.style.filter = "saturate(0)";
  rune4.style.filter = "saturate(0)";
  rune5.style.filter = "saturate(0)";
}

// Enchanting <

//Inventory interaction >

let cookingArray = [];
let cookingInterval = null;
let cookedItems = []

let craftingArray = [];
let craftingInterval = null;
let craftedItems = []

let enchantingArray = [];
let enchantingInterval = null;
let enchantedItems = []

let tradedItems = []
let tradingArray = []

function interactInventory(item, index) {
  console.log(item)
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

          // if (item.level > cookingLevelSimple) {
          //   errorDisplay("You need to be at least Cooking level " + item.level + " to use this item.")
          //   return;
          // }

          consumeAvailable = false;

          setTimeout(() => {
            consumeAvailable = true;
          }, 500);
        
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

            
              startCookAudio.play();
              currentlyCooking = true;
              cookingInterval = setInterval(moveLogos, 10);
          
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

          if (item.type !== "stick" && item.type !== "gem" && item.type !== "material") {
            return;
          }

          // if (item.level > craftingLevelSimple) {
          //   errorDisplay("You need to be at least Crafting level " + item.level + " to use this item.")
          //   return;
          // }
          
          consumeAvailable = false;
          
          setTimeout(() => {
            consumeAvailable = true;
          }, 500);
          
          pop.play()
          
         
    
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
        
          
          
          // inventorySlots[`inventorySlot${index}`].style.background = `none`;
          // inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));
          
          // if(item.type === "fish" || item.type === "food") {
            //   socket.emit("cooking", item);
            // }
            
          }
        }
        
    }
    if (trading) {
        
        if (inventorySlots[`inventorySlot${index}`].src !== "") {
        if(consumeAvailable === true && deleting === false) {
          
          consumeAvailable = false;
          
          setTimeout(() => {
            consumeAvailable = true;
          }, 500);
          
          pop.play()

          errorDisplay("Make sure your friend has inventory space or your item might get lost!")            
            
        
          tradedItems = [index]
          tradingArray = [item]
          tradeItemImg.src = item.image;
          

        }
      }

    }
    if (enchantingContainer.style.display == "block" && currentlyEnchanting === false) {
        
        console.log("enchating")
        
        
        if (inventorySlots[`inventorySlot${index}`].src !== "") {
        if(consumeAvailable === true && deleting === false) {

          if (item.type !== "weapon" && item.type !== "rune") {
            return;
          }
          
          consumeAvailable = false;
          
          setTimeout(() => {
            consumeAvailable = true;
          }, 500);
          
          pop.play()

          // if (item.level > enchantingLevelSimple) {
          //   errorDisplay("You need to be at least Enchanting level " + item.level + " to use this item.")
          //   return;
          // }
          
         
          if (enchantingArray[0]?.type !== item.type) {
            if (enchantingArray.length === 0 && item.type === "weapon" && item.charges > 0) {
              enchantedItems.push(index)
              enchantingArray.push(item);
              enchantingItem1.src = item.image;
            }
            else if (enchantingArray.length === 1) {
              enchantedItems.push(index)
              enchantingArray.push(item);
              enchantingItem2.src = item.image;
              noMovement = true
  
              setTimeout(() => {
                currentlyEnchanting = true;
                setTimeout(() => {
                  currentlyEnchanting = false;
                }, 1000);
              }, 1000);
            }
            else if (item.charges === 0) {
              errorDisplay("Your weapon has reached its maximum enchantments, it cannot be enchanted further.")
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

          console.log(item)

          setTimeout(() => {
            consumeAvailable = true;
          }, 1000);

          inventorySlots[`inventorySlot${index}`].src = `data:,`;
          inventorySlots[`inventorySlot${index}`].removeEventListener("mousedown", (e) => interactInventory(item, index));

          // if (item.type === "weapon" && item.level > combatLevelSimple) {
          //   errorDisplay("You need to be at least Combat level " + item.level + " to use this item.")
          //   return;
          // } else {
            item.maxPower = maxHealth;
            item.index = myPlayer.inventory.indexOf(item);
  
            socket.emit("consumable", item);
          // }

          
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

              item.index = index;

              console.log(myPlayer)
              socket.emit("unequip", item);
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

let currentCookingLevel;
let updateCookingLevel;
let changeCookingLevel = true;

let currentFishingLevel;
let updateFishingLevel;
let changeFishingLevel = true;

let currentCraftingLevel;
let updateCraftingLevel;
let changeCraftingLevel = true;

let currentEnchantingLevel;
let updateEnchantingLevel;
let changeEnchantingLevel = true;

let xp;
let currentCombatLevel;
let updateCombatLevel;
let changeCombatLevel = true;

let dialogBoxes;

// function initDraggables() {
//   dragula([document.querySelector(".dragParent"), document.querySelector(".dragParent1")])
// }

// setTimeout(() => {
//   initDraggables()
// }, 1000);

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

function updateProgressBars() {
  // Update Fishing progress bar
  const fishingLevel = levelFormula(myPlayer.fishingLevel); // Current level
  const xpFishingCurrentLevel = xpForLevel(fishingLevel - 1); // Minimum XP for this level
  const xpFishingNextLevel = xpForLevel(fishingLevel); // Minimum XP for the next level

  const fishingProgress = Math.min(
    ((myPlayer.fishingLevel - xpFishingCurrentLevel) / (xpFishingNextLevel - xpFishingCurrentLevel)) * 70,
    70
  );

  // console.log(myPlayer.fishingLevel, xpFishingCurrentLevel, xpFishingNextLevel)
  fishingXPbar.style.width = `${fishingProgress}px`;

  // Update Cooking progress bar
  const cookingLevel = levelFormula(myPlayer.cookingLevel);
  const xpCookingCurrentLevel = xpForLevel(cookingLevel - 1);
  const xpCookingNextLevel = xpForLevel(cookingLevel);

  const cookingProgress = Math.min(
    ((myPlayer.cookingLevel - xpCookingCurrentLevel) / (xpCookingNextLevel - xpCookingCurrentLevel)) * 70,
    70
  );

  cookingXPbar.style.width = `${cookingProgress}px`;

  // Update Combat progress bar
  const combatLevel = levelFormula(myPlayer.combatLevel);
  const xpCombatCurrentLevel = xpForLevel(combatLevel - 1);
  const xpCombatNextLevel = xpForLevel(combatLevel);

  const combatProgress = Math.min(
    ((myPlayer.combatLevel - xpCombatCurrentLevel) / (xpCombatNextLevel - xpCombatCurrentLevel)) * 70,
    70
  );

  combatXPbar.style.width = `${combatProgress}px`;
 
  // Update Combat progress bar
  const craftingLevel = levelFormula(myPlayer.craftingLevel);
  const xpcraftingCurrentLevel = xpForLevel(craftingLevel - 1);
  const xpcraftingNextLevel = xpForLevel(craftingLevel);

  const craftingProgress = Math.min(
    ((myPlayer.craftingLevel - xpcraftingCurrentLevel) / (xpcraftingNextLevel - xpcraftingCurrentLevel)) * 70,
    70
  );

  craftingXPbar.style.width = `${craftingProgress}px`;
  
  // Update Combat progress bar
  const enchantingLevel = levelFormula(myPlayer.enchantingLevel);
  const xpenchantingCurrentLevel = xpForLevel(enchantingLevel - 1);
  const xpenchantingNextLevel = xpForLevel(enchantingLevel);

  const enchantingProgress = Math.min(
    ((myPlayer.enchantingLevel - xpenchantingCurrentLevel) / (xpenchantingNextLevel - xpenchantingCurrentLevel)) * 70,
    70
  );

  enchantingXPbar.style.width = `${enchantingProgress}px`;
}

function levelFormula(xp){
  return Math.floor((1 + Math.sqrt(1 + (4 * xp)/7))/2);
}

function xpForLevel(level) {
  if (level < 1) return 0;
  return 8 * Math.pow(level, 2) - 8 * level;
}

let fishSelected = ''

function displayFishImages() {
  // Clear existing content before adding new elements
  fishSelectorButton.innerHTML = "";
  


  Object.values(objFishes).forEach(fish => {
      const img = document.createElement("img");
      img.src = fish.img;
      img.alt = fish.name;
      img.title = fish.name;

      img.classList.add("fishSelectorIcon");
      img.classList.add("pointerActivator");
      

      if(fish.lvlNum <= currentFishingLevel){
        img.addEventListener('click', () => {
          if(fishSelected === fish.name){
            fishSelected = ''
          } else {
            fishSelected = fish.name
            fishingAvailableButton.src = fish.img
          }
          console.log(fish.name)
        })
        fishSelectorButton.appendChild(img);
      }

  });
}

questClose.addEventListener("click", () => {
  const questUi = document.querySelector(".questInfo");
  questUi.style.display = "none";
})

let updateDialogs = true;
let mapObject;

socket.on("player", (serverPlayer) => {

  // console.log("players: ", serverPlayer)

  serverPlayer.forEach((playerUnique) => {
    const index = players.findIndex((player) => player.id === playerUnique.id);
    
    if (index !== -1) {
      players[index] = playerUnique;
    } else {
      players.push(playerUnique);
    }
  });

  // players = serverPlayers;
  myPlayer = players.find((player) => player.id === socket.id);

  players = players.filter((player) => player.room && myPlayer && myPlayer.room && player.room === myPlayer.room);

  if (myPlayer.username === 'none') {
    return;
  }

  if(keyBlocker) {
    keyBlocker = false
  }

  currentHealth = myPlayer.health
  if (currentHealth > maxHealth) {
    currentHealth = maxHealth
  }

  if (!dialogBoxes && !mapObject) {
    dialogBoxes = {
  
  
      // CASTLESIDE
      "Fishing Quest": {
      dialogName: "quest",
      questRequirements: [],
      type: "counter",
      questName: "Fishing quest",
      questDecription: "The dude said that if I bring him ten sardines then he will give me a reward",
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
          text: "Well I can give you something I found just for your efforts, go catch 10 sardines and bring them back to me.",
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
      "Jonny the sneaky One Quest": {
      dialogName: "quest",
      questRequirements: [],
      type: "counter",
    
      questName: "Jonny the sneaky One Quest",
      questDecription: `Restfield Cemetery is full of ghosts. Garald's family is buried there, and his only dream is to pray at his mom’s grave one last time. However, his brother Jonny is a sneaky one and constantly scares him.Help Garald gather 10 ghost blankets so he can disguise himself as one of them and finally pray for his mom.`,
      questCard: "./Cards/fight.png",
      rewardType: "soul",
      rewardItem: "ghostSoulInventory",
      completionItem: "restfieldBlanket",
      completionAmount: 10,
      markerX: 550,
      markerY: 2090,
      
      dialogText:
      [
        {
          NPC: "Gerald",
          text: "This... this place. They... they appear from everywhere.",
        },
        {
          NPC: "Gerald",
          text: "All my family is buried in Restfield Cemetery, including my brother, Jonny. Ever since he died, I haven’t been able to go there—he used to spend all his time scaring me.",
        },
        {
          NPC: "Gerald",
          text: "I’m scared. I’m old now, you know. I can’t defend myself anymore.",
        },
        {
          NPC: "Gerald",
          text: "If only I had 10 of those blankets they drop... Maybe, just maybe, I could craft something that would make me like them. Then I could finally visit my mom’s grave.",
        },
        {
          NPC: "Gerald",
          text: "Just one last time.",
        },
        
      ],
    
      progressText:
      [
        {
          NPC: "Gerald",
          text: "So, how is Jonny? Did you found him?",
        },
        {
          NPC: "Gearld",
          text: "...",
          check: true,
        },
      ],
    
      rewardText:
      [
        {
          NPC: "Gerald",
          text: "Amazing! Mommy I am comming!",
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
  
    mapObject = [
      {
        name: "dirtFloor",
        backgroundObj: true,
        img: dirtFloor,
        x: 0,
        y: 0,
        h: 22,
        w: 23,
        category: "construction",
        subCategory: "floors",
      },
      {
        name: "booksOne",
        backgroundObj: "front",
        img: booksOne,
        x: 0,
        y: 0,
        h: booksOne.height,
        w: booksOne.width,
        category: "furniture",
        subCategory: "miniObject",
      },
      {
        name: "redSmallCarpet",
        backgroundObj: "back",
        img: redSmallCarpet,
        x: 0,
        y: 0,
        h: redSmallCarpet.height,
        w: redSmallCarpet.width,
        category: "furniture",
        subCategory: "carpets",
      },
      {
        name: "chairLeft",
        backgroundObj: "back",
        img: chairLeft,
        x: 0,
        y: 0,
        h: chairLeft.height,
        w: chairLeft.width,
        category: "furniture",
        subCategory: "chairs",
      },
      {
        name: "chairRight",
        backgroundObj: "back",
        img: chairRight,
        x: 0,
        y: 0,
        h: chairRight.height,
        w: chairRight.width,
        category: "furniture",
        subCategory: "chairs",
      },
      {
        name: "decoOne",
        backgroundObj: "front",
        img: decoOne,
        x: 0,
        y: 0,
        h: decoOne.height,
        w: decoOne.width,
        category: "furniture",
        subCategory: "miniObject",
      },
      {
        name: "hangingPlant",
        backgroundObj: "front",
        img: hangingPlant,
        x: 0,
        y: 0,
        h: hangingPlant.height,
        w: hangingPlant.width,
        category: "outdoor",
        subCategory: "plants",
      },
      {
        name: "lanternOne",
        backgroundObj: "front",
        img: lanternOne,
        x: 0,
        y: 0,
        h: lanternOne.height,
        w: lanternOne.width,
        category: "outdoor",
        subCategory: "exteriorDecoration",
      },
      {
        name: "hangingPlantRed",
        backgroundObj: "front",
        img: hangingPlantRed,
        x: 0,
        y: 0,
        h: hangingPlantRed.height,
        w: hangingPlantRed.width,
        category: "outdoor",
        subCategory: "plants",
      },
      {
        name: "paintFour",
        backgroundObj: "front",
        img: paintFour,
        x: 0,
        y: 0,
        h: paintFour.height,
        w: paintFour.width,
        category: "furniture",
        subCategory: "paintings",
      },
      {
        name: "paintOne",
        backgroundObj: "front",
        img: paintOne,
        x: 0,
        y: 0,
        h: paintOne.height,
        w: paintOne.width,
        category: "furniture",
        subCategory: "paintings",
      },
      {
        name: "paintThree",
        backgroundObj: "front",
        img: paintThree,
        x: 0,
        y: 0,
        h: paintThree.height,
        w: paintThree.width,
        category: "furniture",
        subCategory: "paintings",
      },
      {
        name: "paintTwo",
        backgroundObj: "front",
        img: paintTwo,
        x: 0,
        y: 0,
        h: paintTwo.height,
        w: paintTwo.width,
        category: "furniture",
        subCategory: "paintings",
      },
      {
        name: "potPlantFour",
        backgroundObj: false,
        img: potPlantFour,
        x: 0,
        y: 0,
        h: potPlantFour.height,
        w: potPlantFour.width,
        category: "furniture",
        subCategory: "paintings",
      },
      {
        name: "potPlantThree",
        backgroundObj: false,
        img: potPlantThree,
        x: 0,
        y: 0,
        h: potPlantThree.height,
        w: potPlantThree.width,
        category: "outdoor",
        subCategory: "plants",
      },
      {
        name: "potPlantTwo",
        backgroundObj: false,
        img: potPlantTwo,
        x: 0,
        y: 0,
        h: potPlantTwo.height,
        w: potPlantTwo.width,
        category: "outdoor",
        subCategory: "plants",
      },
      {
        name: "potPlantOne",
        backgroundObj: false,
        img: potPlantOne,
        x: 0,
        y: 0,
        h: potPlantOne.height,
        w: potPlantOne.width,
        category: "outdoor",
        subCategory: "plants",
      },
      {
        name: "shelves",
        backgroundObj: false,
        img: shelves,
        x: 0,
        y: 0,
        h: shelves.height,
        w: shelves.width,
        category: "furniture",
        subCategory: "storage",
      },
      {
        name: "woodTable",
        backgroundObj: false,
        img: woodTable,
        x: 0,
        y: 0,
        h: woodTable.height,
        w: woodTable.width,
        category: "furniture",
        subCategory: "tables",
      },
      {
        name: "stoneFloor",
        backgroundObj: true,
        img: stoneFloor,
        x: 0,
        y: 0,
        h: stoneFloor.height,
        w: stoneFloor.width,
        category: "construction",
        subCategory: "floors",
      },
      {
        name: "woodFloor",
        backgroundObj: true,
        img: woodFloor,
        x: 0,
        y: 0,
        h: woodFloor.height,
        w: woodFloor.width,
        category: "construction",
        subCategory: "floors",
      },
      {
        name: "vineTwo",
        backgroundObj: "front",
        img: vineTwo,
        x: 0,
        y: 0,
        h: vineTwo.height,
        w: vineTwo.width,
        category: "outdoor",
        subCategory: "exteriorDecoration",
      },
      {
        name: "enchantingTower",
        backgroundObj: false,
        img: enchantingTower,
        x: 0,
        y: 0,
        h: 357,
        w: 119,
        category: "structure",
        subCategory: "enchanting",
      },
      {
        name: "enchantingTable",
        backgroundObj: false,
        img: enchantingTable,
        x: 0,
        y: 0,
        h: 72,
        w: 75,
        animated: true,
        category: "structure",
        subCategory: "enchanting",
      },
      {
        name: "plantPatch",
        backgroundObj: true,
        img: plantPatch,
        x: 0,
        y: 0,
        h: 15,
        w: 16,
        category: "construction",
        subCategory: "floors",
      },
      {
        name: "woodFenceVer",
        backgroundObj: false,
        img: woodFenceVer,
        x: 0,
        y: 0,
        h: 35,
        w: 7,
        category: "construction",
        subCategory: "fences",
      },
      {
        name: "woodFence",
        backgroundObj: false,
        img: woodFence,
        x: 0,
        y: 0,
        h: 22,
        w: 28,
        category: "construction",
        subCategory: "fences",
      },
      {
        name: "woodSmallWallHor",
        backgroundObj: false,
        img: woodSmallWallHor,
        x: 0,
        y: 0,
        h: 22,
        w: 31,
        category: "construction",
        subCategory: "fences",
      },
      {
        name: "woodSmallWallVert",
        backgroundObj: false,
        img: woodSmallWallVert,
        x: 0,
        y: 0,
        h: 37,
        w: 7,
        category: "construction",
        subCategory: "fences",
      },
      {
        name: "woodWallDoor",
        backgroundObj: false,
        img: woodWallDoor,
        x: 0,
        y: 0,
        h: 52,
        w: 67,
        category: "construction",
        subCategory: "walls",
      },
      {
        name: "woodWallHor",
        backgroundObj: false,
        img: woodWallHor,
        x: 0,
        y: 0,
        h: 52,
        w: 67,
        category: "construction",
        subCategory: "walls",
      },
      {
        name: "woodWindowWall",
        backgroundObj: false,
        img: woodWindowWall,
        x: 0,
        y: 0,
        h: 52,
        w: 67,
        category: "construction",
        subCategory: "walls",
      },
      {
        name: "woodWallVer",
        backgroundObj: false,
        img: woodWallVer,
        x: 0,
        y: 0,
        h: 92,
        w: 7,
        category: "construction",
        subCategory: "walls",
      },
      {
        name: "flagLine",
        backgroundObj: "front",
        img: flagLine,
        x: 0,
        y: 0,
        h: 26,
        w: 123,
        animated: true,
        category: "outdoor",
        subCategory: "outdoorFurniture",
      },
      {
        name: "treeOne",
        backgroundObj: false,
        img: treeOne,
        x: 0,
        y: 0,
        h: 70,
        w: 43,
        category: "outdoor",
        subCategory: "trees",
      },
      {
        name: "woodPole",
        backgroundObj: false,
        img: woodPole,
        x: 0,
        y: 0,
        h: 21,
        w: 7,
        category: "construction",
        subCategory: "fences",
      },
      {
        name: "whiteFlowers",
        backgroundObj: true,
        img: whiteFlowers,
        x: 0,
        y: 0,
        h: 13,
        w: 14,
        category: "outdoor",
        subCategory: "flowers",
      },
      {
        name: "bushOne",
        backgroundObj: false,
        img: bushOne,
        x: 0,
        y: 0,
        h: 19,
        w: 22,
        category: "outdoor",
        subCategory: "miniBush",
      },
      {
        name: "shadowTree",
        backgroundObj: true,
        img: shadowTree,
        x: 0,
        y: 0,
        h: 15,
        w: 48,
        category: "construction",
        subCategory: "floors",
      },
      {
        name: "vineOne",
        backgroundObj: "front",
        img: vineOne,
        x: 0,
        y: 0,
        h: 12,
        w: 42,
        category: "outdoor",
        subCategory: "exteriorDecoration",
      },
      {
        name: "rockOne",
        backgroundObj: false,
        img: rockOne,
        x: 0,
        y: 0,
        h: 27,
        w: 35,
        category: "outdoor",
        subCategory: "rocks",
      },
      {
        name: "woodSquareDoor",
        backgroundObj: false,
        img: woodSquareDoor,
        x: 0,
        y: 0,
        h: 52,
        w: 43,
        category: "construction",
        subCategory: "walls",
      },
      {
        name: "chestCommon",
        backgroundObj: false,
        img: chestCommon,
        x: 0,
        y: 0,
        h: 18,
        w: 21,
        lightSource: true,
        animated: true,
        category: "structure",
        subCategory: "chest",
      },
      {
        name: "cookingPotObj",
        backgroundObj: false,
        img: cookingPotObj,
        x: 0,
        y: 0,
        h: 30,
        w: 26,
        lightSource: true,
        animated: true,
        category: "furniture",
        subCategory: "kitchen",
      },
      {
        name: "fishPond",
        backgroundObj: false,
        img: fishPond,
        x: 0,
        y: 0,
        h: 30,
        w: 30,
        lightSource: false,
        animated: true,
        category: "outdoor",
        subCategory: "exteriorDecoration",
      },
      {
        name: "smallLake",
        backgroundObj: true,
        img: smallLake,
        x: 0,
        y: 0,
        h: 112,
        w: 112,
        lightSource: false,
        animated: true,
        category: "outdoor",
        subCategory: "water",
      },
      {
        name: "dryGrass",
        backgroundObj: false,
        img: dryGrass,
        x: 0,
        y: 0,
        h: 15,
        w: 15,
        lightSource: false,
        animated: true,
        category: "outdoor",
        subCategory: "grass",
      },
      {
        name: "plazaFountain",
        backgroundObj: false,
        img: plazaFountain,
        x: 0,
        y: 0,
        h: 84,
        w: 131,
        animated: true,
        category: "outdoor",
        subCategory: "fountains",
      },
      {
        name: "grassOne",
        backgroundObj: false,
        img: grassOne,
        x: 0,
        y: 0,
        h: 7,
        w: 10,
        category: "outdoor",
        subCategory: "grass",
      },
      {
        name: "cookingStand",
        backgroundObj: false,
        img: cookingStand,
        x: 0,
        y: 0,
        h: 79,
        w: 105,
        category: "structure",
        subCategory: "kitchen",
      },
      {
        name: "dirtFloorBig",
        backgroundObj: true,
        img: dirtFloorBig,
        x: 0,
        y: 0,
        h: 47,
        w: 57,
        category: "construction",
        subCategory: "floors",
      },
      {
        name: "lightPoleOne",
        backgroundObj: false,
        img: lightPoleOne,
        x: 0,
        y: 0,
        h: 52,
        w: 22,
        lightSource: true,
        category: "outdoor",
        subCategory: "outdoorFurniture",
      },
      {
        name: "mediumTorch",
        backgroundObj: false,
        img: mediumTorch,
        x: 0,
        y: 0,
        h: 26,
        w: 11,
        animated: true,
        lightSource: true,
        category: "outdoor",
        subCategory: "outdoorFurniture",
      },
    ]
    createImagesFromMapObjects(mapObject)
  }


  health()
  updateQuestUI()
  updateProgressBars()
  if (updateDialogs) {
    addMapsInfoToDiv()
    updateDialogs = false
  }

  playerCoinsAmount.innerHTML = myPlayer.currency 

  //Adapt shop to player >
  //Adapt shop to player <

  // Combat level >
  xp = myPlayer.combatLevel;
  currentCombatLevel = levelFormula(xp);
  
  combatLevel.innerHTML = "LVL "+ currentCombatLevel;

  if (changeCombatLevel) {
    updateCombatLevel = currentCombatLevel;
    changeCombatLevel = false;
  }
  if (currentCombatLevel !== updateCombatLevel && myPlayer.combatLevel !== 0){

    updateCombatLevel = currentCombatLevel
    levelUp.src = "./Textures/levelUpCombat.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block"; 
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
    }, 5000);
   
  }
  // Combat level 

  // Enchanting level >
  xp = myPlayer.enchantingLevel;
  currentEnchantingLevel = levelFormula(xp);
 
  enchantingLevel.innerHTML = "LVL "+ currentEnchantingLevel;

  if (changeEnchantingLevel) {
    updateEnchantingLevel = currentEnchantingLevel;
    changeEnchantingLevel = false;
  }
  if (currentEnchantingLevel !== updateEnchantingLevel && myPlayer.enchantingLevel !== 0){

    updateEnchantingLevel = currentEnchantingLevel
    levelUp.src = "./Textures/levelUpEnchanting.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block"; 
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
    }, 5000);
   
  }
 
  // Enchanting level <

  // Cooking Cooking level >
  xp = myPlayer.cookingLevel;
  currentCookingLevel = levelFormula(xp);

  cookingLevel.innerHTML = "LVL "+ currentCookingLevel;

  if (changeCookingLevel) {
    updateCookingLevel = currentCookingLevel;
    changeCookingLevel = false;
  }
  if (currentCookingLevel !== updateCookingLevel && myPlayer.cookingLevel !== 0){

    updateCookingLevel = currentCookingLevel
    levelUp.src = "./Textures/levelUpCooking.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block"; 
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
    }, 5000);
   
  }

  // Cooking level <

  // Crafting level >

  xp = myPlayer.craftingLevel;
  currentCraftingLevel = levelFormula(xp);

  craftingLevel.innerHTML = "LVL "+ currentCraftingLevel;

  if (changeCraftingLevel) {
    updateCraftingLevel = currentCraftingLevel;
    changeCraftingLevel = false;
  }
  if (currentCraftingLevel !== updateCraftingLevel && myPlayer.craftingLevel !== 0){

    updateCraftingLevel = currentCraftingLevel
    levelUp.src = "./Textures/levelUpCrafting.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block"; 
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
    }, 5000);
   
  }

  // Fishing level <

  // Fishing level >
  xp = myPlayer.fishingLevel;
  currentFishingLevel = levelFormula(xp);

  fishingLevel.innerHTML = "LVL "+ currentFishingLevel;

  if (changeFishingLevel) {
    updateFishingLevel = currentFishingLevel;
    changeFishingLevel = false;
    displayFishImages()
  }
  if (currentFishingLevel !== updateFishingLevel && myPlayer.fishingLevel !== 0){

    updateFishingLevel = currentFishingLevel
    levelUp.src = "./Textures/levelUpFishing.gif"
    levelUp.classList.add('fadeInAnim');
    levelUp.style.display = "block"; 
    levelUpAudio.play();

    setTimeout(() => {
      levelUp.style.display = "none";
      levelUp.classList.remove('fadeInAnim');
    }, 5000);
   
  }
  // Fishing level <

  //BAR PROGRESSION



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

        if (item.name === "frogSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiFrogSkin.gif";
        } 
        else if (item.name === "redDemonSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiDemonSkin.gif";
        }
        else if (item.name === "restfieldSkeletonSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiSkeletonSkin.gif";
        }
        else if (item.name === "restfieldZombieSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiZombieSkin.gif";
        }
        else if (item.name === "vampiresSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiVampiresSkin.gif";
        }
        else if (item.name === "pinkDemonSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiPinkSkin.gif";
        }
        else if (item.name === "arcanyDemonSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiPurpleSkin.gif";
        }
        else if (item.name === "reaperSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiReaperSkin.gif";
        }
        else if (item.name === "ghostSoulInventory") {
          uiSkinsImg.src = "./ui/uiSkins/uiGhostSkin.gif";
        }
        
        }
        } else {
          uiSkinsImg.src = "./ui/uiSkins/uiHumanSkin.gif"
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
  socket.emit("updateServer");
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

socket.on("updateMap", (map) => {
  mapsInfo[map.worldData.areaName] = map.worldData
  if (map.object) buildPlaceParticles(map.object)
  if (map.deleting) buildDeleteParticles(map.object)
})

let mapsInfo = {};

socket.on("loadMap", (map) => {
  console.log(map)
  let comingMap = map
  let areaNameComing = comingMap.areaName

  stopAllSound()
  if (map.areaName) areaNameDisplay(map.areaName);

  if (mapsInfo[areaNameComing]) {
    comingMap.playerPos = mapsInfo[areaNameComing].playerPos
  }

  mapsInfo[currentLand].playerPos = {x: localPlayerPos.x, y: localPlayerPos.y}

  currentLand = areaNameComing
  mapsInfo[areaNameComing] = comingMap
  localPlayerPos = {x: comingMap.playerPos.x, y: comingMap.playerPos.y}
})

socket.on("loginAttempt", (res) => {
  document.getElementById("introLogo-img").style.display = "none";

  if(res.msg === "success") {
    let comingMap = res.map
    // console.log(comingMap)
    let areaNameComing = comingMap.areaName
    currentLand = areaNameComing
    mapsInfo[areaNameComing] = comingMap
    localPlayerPos = comingMap.playerPos
    audioIntro.pause();
    loggedIn.play();
    // intervalCanvasBase = requestAnimationFrame(lobbyLoop); //Initial canvas
    // intervalCanvasBase = requestAnimationFrame(emptyMapLoop)
    intervalCanvasBase = requestAnimationFrame(generalMapLoop)
    lobbySoundtrack()
    // intervalCanvasBase = setInterval(lobbyLoop, 16.67); //Initial canvas
    console.log("logged in")

    chatInput.style.display = "block";
    playerHeartParent.style.display = "block";
    uiProfileCurrentClothing.style.visibility = "visible";
    menuUi.style.display = "flex";
    uiButtonParent.style.display = "flex";
    menuUiProfile.style.display = "flex";
    toolBar.style.display = "flex"
    fishingAvailableButton.style.display = "block";
    loginBox.style.display = "none";
    loginButton.style.display = "none";
    createButton.style.display = "none";
    loginArt.style.display = "none";

    blockMovement = false;
    socket.emit("blockMovement", blockMovement);

    shootingBlock = false;
    

    setTimeout(() => {

    }, 500);

  } else if (res === "failed") {
    passwordInput.style.background = "#ff5471";
    passwordInput.style.color = "white";
    errorDisplay("Information invalid.")
    
  } else if (res === "existing") {
    usernameInput.style.background = "#ff5471";
    usernameInput.style.color = "white";
    errorDisplay("This user already exists.")
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

let grassEnchantingAvailable = false;
let grassOpenEnchanting = false;
let currentlyEnchanting = false;

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

let playerX = 2000;
let playerY = 2000;

let localPlayerDamaged = 0;
let localPlayerDamageAngle = 0;

let playerLocation = [playerX, playerY];

let noMovement = false;
let dashing = false;
let dashingAllowed = false;

let wallsVisibility = 0;

// setInterval(() => {
//   playerLocation = [playerX, playerY];
//   socket.emit("playerLocation", playerLocation);
//   socket.emit("inputs", inputs);
//   socket.emit("animPlayer", animPlayer);
// }, 100);

let movementUpdateInterval = null;

if (!movementUpdateInterval) {
  movementUpdateInterval = setInterval(() => {
    const updateData = {
      location: [playerX, playerY],
      inputs,
      animPlayer,
      lastLookPlayer,
    };
    socket.emit("playerUpdate", updateData);
  }, 100);
}

let fishingInterval;
let fishingTimeout;

window.addEventListener("keydown", (e) => {
  if(keyBlocker) return
  let keyCheck = e?.key?.toLowerCase()

  if (keyCheck === "o") {
    console.log(mapsInfo, currentLand)
  }

  if (!noMovement) {
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

  if(e?.key?.toLowerCase() === "e" && dialogAvailable & !dialogOpened) {
    dialogOpened = true;
    startDialog(currentDialogTitle);
  } else if (e?.key?.toLowerCase() === "e" && dialogAvailable & dialogOpened) {
    dialogOpened = false;
  }

  //Dialog grasslands open <
  
    // socket.emit("inputs", inputs);
    // socket.emit("animPlayer", animPlayer);
    // socket.emit("lastLookPlayer", lastLookPlayer);

  }

  //Fishing Minigame >

  if (fishing === true && (keyCheck === "w" || keyCheck === "z" || keyCheck === "q" || keyCheck === "s" || keyCheck === "d" || keyCheck === "a" ) ) {
    // Exit the fishing minigame
    fishingBarHit.classList.remove('startFish');
    // fishingBarHit.classList.add('noFish');
    fishingBar.style.marginLeft = "-50%";
    fishingGame.style.display = "none";
    fishing = false;
    noMovement = false;
    audioSplash.pause();
    audioSplash.currentTime = 0;
    clearInterval(fishingInterval);
    clearTimeout(fishingTimeout);

    return;
  }

  if(e?.key?.toLowerCase() === "e" && fishAvailable === true && fishing === false) {

    fishingBarHit.classList.add('startFish');
    noMovement = true

    audioSplash.play();

    fishingGame.style.display = "block";
    fishing = true;

    const number = Math.floor(Math.random() * (20000 - 5000 + 1) + 5000);

    function fishingStart() {

      fishingBarHit.classList.remove('startFish');

      fishingInterval = setInterval(() => {

        marginFish += .5;
      
        if (marginFish < 100) {
      
          fishingBar.style.marginLeft = marginFish + "%";
        } else {
          marginFish = -50;
          clearInterval(fishingInterval);
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

    fishingTimeout = setTimeout(() => {
      fishingStart();
    }, number);
  };

  if(e?.key?.toLowerCase() === "e" && fishAvailable === true && fishing === true) {

    if (marginFish < 65 && marginFish > 35) {

      socket.emit("fishing", fishSelected);
      cameraShake();
      marginFish = 100;
      audioClick.play();
      noMovement = false
    };
  }
  //Fishing Minigame <
  
  if(e?.key?.toLowerCase() === "e" && scoreAvailable === true) {
    scores.style.display =  scores.style.display === "flex" ? "none" : "flex";
    socket.emit("getScores", currentLand)
  }


  //Shop grasslands open >

  if(e?.key?.toLowerCase() === "e" && grassShopAvailable & !grassOpenShop) {
    grassOpenShop = true;
    openShopAudio.play();
  } else if (e?.key?.toLowerCase() === "e" && grassShopAvailable & grassOpenShop) {
    grassOpenShop = false;
  }

  //Shop grasslands open <
  
  //Cooking grasslands open >

  if(e?.key?.toLowerCase() === "e" && grassCookingAvailable & !grassOpenCooking) {
    grassOpenCooking = true;
    openCookingAudio.play();
    cookingSong.play()
    oilFry.play()
    noMovement = true
    if (uiIsClose) openIvn()
  } else if (e?.key?.toLowerCase() === "e" && grassCookingAvailable & grassOpenCooking) {
    cookingSong.pause()
    oilFry.pause()
    noMovement = false
    grassOpenCooking = false;
    closeCooking()
  }

  //Cooking grasslands open <
  
  //Crafting grasslands open >

  if(e?.key?.toLowerCase() === "e" && grassCraftingAvailable & !grassOpenCrafting) {
    grassOpenCrafting = true;
    console.log(grassOpenCrafting)
    noMovement = true
    if (uiIsClose) openIvn()
  } else if (e?.key?.toLowerCase() === "e" && grassCraftingAvailable & grassOpenCrafting) {
    noMovement = false
    grassOpenCrafting = false;
    cancelCrafting()
  }

  //Crafting grasslands open <
 
  //Enchanting grasslands open >

  if(e.key === "e" && grassEnchantingAvailable & !grassOpenEnchanting) {
    grassOpenEnchanting = true;
    console.log(grassOpenEnchanting)
    noMovement = true
    resetEnchant()
    if (uiIsClose) openIvn()
  } else if (e.key === "e" && grassEnchantingAvailable & grassOpenEnchanting) {
    noMovement = false
    resetEnchant()
    grassOpenEnchanting = false;
  }

  //Enchanting grasslands open <

  //Chest island open >

  if(e?.key?.toLowerCase() === "e" && IslandChestAvailable & !IslandOpenChest) {
    const key = myPlayer.inventory.find(item => item.name === "chestKey");
    const chestKeyRestfield = myPlayer.inventory.find(item => (item.name === "chestKeyRestfield"));
    const chestKeyCommon = myPlayer.inventory.find(item => (item.name === "chestKeyCommon"));

    if ((currentChestItem === "mushroomTrial") && !key) {
      areaNameDisplay("Trial Started")
      console.log("trial started")
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
  } else if (e?.key?.toLowerCase() === "e" && IslandChestAvailable & IslandOpenChest) {
    IslandOpenChest = false;
  }

  //Chest island open <

  // if (e?.key?.toLowerCase() === "o") {
  //   mapsInfo[currentLand].enemies?.forEach(enemy => {
  //     activateNormalEnemy(enemy);
  //   })
  // }

});

window.addEventListener("keyup", (e) => {
  if(keyBlocker) return
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
    if( animPlayer !== "sittingDown"){
       animPlayer = "idleRight";
    }
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
  // cameraShake();

  // console.log(myPlayer?.weapon[0])
 
  for (let i = 0; i < myPlayer?.weapon[0].bullets; i++) {
    let spread = 0.1; // Adjust this value to control bullet spread
    let offset = Math.ceil(i / 2) * spread; // Increase spread step by step
    let bulletAngle = (i % 2 === 0) ? angle - offset : angle + offset; // Alternating spread

    projectilesClient.push({
        angle: bulletAngle,
        x: playerX + 20,
        y: playerY + 50,
        timeLeft: myPlayer?.weapon[0].range,
        playerId: socket.id,
        damage: myPlayer?.weapon[0].damage,
    });
}


  console.log(myPlayer?.weapon[0].bullets)

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

              setTimeout(() => {
                socket.emit("updateServer");
              }, 1000);
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
                setTimeout(() => {
                  socket.emit("updateServer");
                }, 1000);
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

socket.on("inventoryFull", () => {
  errorDisplay("Your inventory is full.")
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
let transitionType = "liquid"
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
  socket.emit("requestChangeRoom", currentSelectedMap);
  // let playerPosition;
  // Object.keys(mapsInfo).forEach(key => {
  //   playerPosition =  mapsInfo[key].playerPos;
  //   mapsInfo[key] = _.cloneDeep(originalMapsInfo[key]);
  //   mapsInfo[key].playerPos = playerPosition;
  // });
  // spawnerIntervals.map(enemy => {
  //     clearTimeout(enemy)
  // })
  // cancelAnimationFrame(intervalCanvasBase)
  // const canvasFunction = window[dynamicFunctionName];
  // if (typeof canvasFunction === "function") {
    //   mapsInfo[currentSelectedMap].areaSounds();
    //   intervalCanvasBase = requestAnimationFrame(canvasFunction);
    setTimeout(() => {
      transitionTimeout = false;
    }, 5000);
  // } else {
  //   console.error(`${dynamicFunctionName} is not a valid function`);
  // }
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

let dayTimeVolume = 1;
let nightTimeVolume = 0;

let currentSoundtrack;
let currentNightSoundtrack;

function stopAllSound() {
  currentSoundtrack.pause();
  currentSoundtrack.currentTime = 0;
  
  suspense1.pause();
  suspense1.currentTime = 0;

  fightMusic1.pause();
  fightMusic1.currentTime = 0;
  
  SokosBoss.pause();
  SokosBoss.currentTime = 0;

}

function arcaneSoundtrack () {
  currentSoundtrack = ArcaneEnv.play()
  currentNightSoundtrack = nighttimeForest;
  currentSoundtrack.play();
  currentNightSoundtrack.play();
  currentNightSoundtrack.volume = currentNightSoundtrackVolume;
}

function lobbySoundtrack () {
  currentSoundtrack = grasslandsEnviroment
  currentNightSoundtrack = nighttimeForest;
  currentSoundtrack.play();
  currentNightSoundtrack.play();
  currentNightSoundtrack.volume = currentNightSoundtrackVolume;
}

function restfieldSoundtrack () {
  currentSoundtrack = restfield;
  currentNightSoundtrack = nighttimeForest;
  currentSoundtrack.play();
  currentNightSoundtrack.play();
  currentNightSoundtrack.volume = currentNightSoundtrackVolume;
}

function grassLandsSoundtrack () {
  currentSoundtrack = grasslandsEnviroment;
  currentNightSoundtrack = nighttimeForest;
  currentSoundtrack.play();
  currentNightSoundtrack.play();
  currentNightSoundtrack.volume = currentNightSoundtrackVolume;
}
 
function towerSoundSoundtrack () {
  currentSoundtrack = towerSound;
  currentNightSoundtrack = nighttimeForest;
  currentSoundtrack.play();
  currentNightSoundtrack.play();
  currentNightSoundtrack.volume = currentNightSoundtrackVolume;
}

function areaNameDisplay (name) {

areaName.textContent = name;

areaName.style.opacity = 1;
areaName.style.transition = "opacity 1s ease"; 

setTimeout(() => {
    areaName.style.opacity = 0;
}, 4000);
}

function errorDisplay(name, color) {

errorPopUp.textContent = name;

errorPopUp.style.opacity = 1;
errorPopUp.style.transition = "opacity 1s ease"; 
errorPopUp.style.filter = color ? color : "none"; 

setTimeout(() => {
    errorPopUp.style.opacity = 0;
}, 4000);
}

// Sounds <


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
  // const delta = Math.sign(event.deltaY);

  // if (delta === 1 && canvasLobby.height < 1000) {
  //   canvasLobby.width *= 1.1;
  //   canvasLobby.height *= 1.1;
  // } else if (delta === 1 && canvasLobby.height >= 1000) {

  // } else if (canvasLobby.height > 600) {
  //   canvasLobby.width *= 0.9;
  //   canvasLobby.height *= 0.9;
  // }
});
// Camera <


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



// Developer UI >

let currentLand= "none";
let currentObjToPlace = "";
// console.log("current land: ", currentLand)

setTimeout(() => {
  console.log(booksOne.width)
}, 1000);

let selectedXcoord = 0;
let selectedYcoord = 0;
let hoveredXCoord = 0;
let hoveredYCoord = 0;
let widthCoord = 0;
let heightCoord = 0;
let currentDevAction = "none"
let currentlyPlacingWall = false;
let currentSelectedWall = null;
let currentSelectedMap = "none"
let collidingWitWall = false;
let currentSelectedObjLayer = 0;

let OpenMenuOfObjects = false;

const rect = canvasLobby.getBoundingClientRect();

canvasLobby.addEventListener("mousemove", (event) => {
  let x;
  let y;
  let escalableDivisor = calculateValue(window.screen.width)
  // console.log(window.screen, escalableDivisor)
  hoveredXCoord = event.clientX - (event.clientX - (event.screenX * 1.1)) + cameraX + cameraShakeX + 0 + escalableDivisor;
  hoveredYCoord = event.clientY - (event.clientY - (event.screenY * 1.1)) + cameraY + cameraShakeY - 120 + (escalableDivisor * 0.95) / 8;

  if ((currentlyPlacingWall || !currentlyPlacingWall) && currentDevAction !== "delete" && currentDevAction !== "deleteObj") {
    widthCoord = hoveredXCoord - selectedXcoord;
    heightCoord = hoveredYCoord - selectedYcoord;
  } 
  else if (currentDevAction === "delete") {
    x = hoveredXCoord;
    y = hoveredYCoord;

    collidingWitWall = false;

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
  else if (currentDevAction === "deleteObj") {
    x = hoveredXCoord;
    y = hoveredYCoord;
    
    let collidingWitWall = false;
    
    mapsInfo[currentLand].objects[currentSelectedObjLayer].forEach(wall => {

      let wallX = wall.x - (wall.w * generalZoom);
      let wallY = wall.y - (wall.h * generalZoom);
      let wallHW = wall.w * generalZoom;
      let wallYH = wall.h * generalZoom;

      const mouseCollider = {
        x: x + 150,
        y: y + 180,
        width: 20,
        height: 20
      }

      if (isColliding(mouseCollider, { x: wallX, y: wallY, width: wallHW, height: wallYH })) {
        currentSelectedWall = mapsInfo[currentLand].objects[currentSelectedObjLayer].indexOf(wall);
        collidingWitWall = true;
        canvas.fillStyle = "red";
        canvas.fillRect(wallX - cameraX, wallY - cameraY, wallHW, wallYH);
        canvas.fillRect(mouseCollider.x - cameraX, mouseCollider.y - cameraY, 20, 20);
      }
      
    })

    console.log(collidingWitWall)

    if (!collidingWitWall) {
      currentSelectedWall = null;
    }
  }
});

canvasLobby.addEventListener('click', function(event) {
  if (!currentlyPlacingWall && currentDevAction === "wall" && currentSelectedWall === null) {
    selectedXcoord = hoveredXCoord;
    selectedYcoord = hoveredYCoord;
    currentlyPlacingWall = true;
  } 
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "wall") {
    const x = hoveredXCoord;
    const y = hoveredYCoord;
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
  else if (currentSelectedWall !== null && currentDevAction === "deleteObj") {
    socket.emit("deletedObject",{ currentLand: currentLand, object: mapsInfo[currentLand].objects[currentSelectedObjLayer][currentSelectedWall], currentSelectedObjLayer});
    mapsInfo[currentLand].objects[currentSelectedObjLayer].splice(currentSelectedWall, 1)
    currentSelectedWall = null;
  }
  
  else if (currentDevAction === "building") {
    let obj = mapObject.find(item => item.name === currentObjToPlace);
    let objClone = _.cloneDeep(obj);
    objClone.x = hoveredXCoord + 200
    objClone.y = hoveredYCoord + 200

    mapsInfo[currentLand].objects[currentSelectedObjLayer].push(objClone)
    mapsInfo[currentLand].objects[currentSelectedObjLayer].sort((a, b) => {
      if (a.backgroundObj && !b.backgroundObj) return -1; // a goes first
      if (!a.backgroundObj && b.backgroundObj) return 1;  // b goes first
      return a.y - b.y; // Otherwise, sort by y
    });
    
    playRandomPop()
    // buildPlaceParticles(objClone)
    socket.emit("placedObject",{currentLand: currentLand, object: objClone, currentSelectedObjLayer});
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
  
  else if (!currentlyPlacingWall && currentDevAction === "enchanting" && currentSelectedWall === null) {
    selectedXcoord = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    selectedYcoord = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    currentlyPlacingWall = true;
  }
  else if (currentSelectedWall === null && currentlyPlacingWall && currentDevAction === "enchanting") {
    const x = event.clientX - rect.left + secondaryCameraX + cameraShakeX + 66;
    const y = event.clientY - rect.top + secondaryCameraY + cameraShakeY + 5;
    const newWidth = x - selectedXcoord;
    const newHeight = y - selectedYcoord;
    
    mapsInfo[currentLand].colliders.push({
      type: "enchanting",
      x: selectedXcoord,
      y: selectedYcoord,
      width: newWidth,
      height: newHeight,
      color: `rgb(204, 0, 255, ${wallsVisibility})`
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

function createImagesFromMapObjects(mapObjects) {

  mapObjects.forEach(obj => {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('pointerActivator');
    parentDiv.classList.add('buildObjectParent');

    const divElement = document.createElement('div');
    divElement.classList.add('buildObject');

    divElement.style.background = `url(${obj.img.src})`;
    divElement.style.backgroundSize = "cover";
    divElement.style.backgroundRepeat = "no-repeat";
    divElement.style.width = `calc(${obj.w * 0.8}px)`;
    divElement.style.height = `calc(${obj.h * 0.8}px)`;
    // divElement.alt = obj.name;

    // if (obj.w > 50 || obj.h > 50) {
    //   divElement.style.width = `calc${obj.w * 0.5}`;
    //   divElement.style.height = `calc(${obj.h * 0.5}px)`;
    // }

    parentDiv.addEventListener('click', () => {
      currentObjToPlace = obj.name
      const clickHover = new Audio("./audios/tapWood.wav");
      clickHover.volume = 0.3;
      clickHover.loop = false;
      clickHover.play()
    });
    parentDiv.addEventListener('mouseenter', () => {
      const clickHover = new Audio("./audios/tapWood.wav");
      clickHover.volume = 0.3;
      clickHover.loop = false;
      clickHover.play()
    });

    parentDiv.appendChild(divElement);


    if(obj.category === "construction"){
      uiBuildingConstruction.appendChild(parentDiv);
    }
    if(obj.category === "furniture"){
      uiBuildingFurniture.appendChild(parentDiv);
    }
    if(obj.category === "outdoor"){
      uiBuildingOutdoor.appendChild(parentDiv);
    }
    if(obj.category === "structure"){
      uiBuildingStructure.appendChild(parentDiv);
    }
  });
}

function calculateValue(resolution) {
  return Math.max(0, (-16.5 * resolution + 33792) * 1.02);
}

// UI DEV COMMENT >

function deselectUiButton() {
  placeWalls.style.backgroundColor = "rgb(255 255 255 / 29%)"
  deleteWalls.style.backgroundColor = "rgb(255 255 255 / 29%)"
  deleteObjButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeFishingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeEnchantingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeCookingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  hammerButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeTransition.style.backgroundColor = "rgb(255 255 255 / 29%)"
  createMapButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeCraftingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeFishingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeEnchantingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeCookingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  uiBuildingObjects.style.display = "none";
  uiBuildingCategory.style.display = "none";
  roomsDiv.style.display = "none"
  mapInfoDiv.style.display = "none"
}

placeWalls.addEventListener("click", function() {
  if (currentDevAction !== "wall") {
  currentSelectedWall = null
  showWallsFunction(true)
  currentDevAction = "wall";
  roomsDiv.style.display = "none"
  dialogsDiv.style.display = "none"
  deselectUiButton()
  placeWalls.style.backgroundColor = "rgba(170, 233, 170, 1)"
} else {
  showWallsFunction(false)
  deselectUiButton()
  currentDevAction = "none";
 }
});

deleteWalls.addEventListener("click", function() {
  showWallsFunction(true)
  if (currentDevAction !== "delete") {
    currentDevAction = "delete";
    roomsDiv.style.display = "none"
    dialogsDiv.style.display = "none"
    uiBuildingObjects.style.display = "none"
    
    deselectUiButton()
    deleteWalls.style.backgroundColor = "rgba(170, 233, 170, 1)"
  } else {
    showWallsFunction(false)
    deselectUiButton()
    currentDevAction = "none";
  }
});

deleteObjButtonUi.addEventListener("click", function() {
  showWallsFunction(false)
if (currentDevAction !== "deleteObj") {
  currentDevAction = "deleteObj";
  roomsDiv.style.display = "none"
  dialogsDiv.style.display = "none"

  deselectUiButton()
  deleteObjButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
} else {
  currentDevAction = "none";
  deleteObjButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
}
});

saveObjButtonUi.addEventListener("click", function() {
  showWallsFunction(false);
  socket.emit("saveWorld", mapsInfo[currentLand]);
  errorDisplay("Saving map")
});

sapwnButtonUi.addEventListener("click", function() {
  showWallsFunction(false);
  socket.emit("setSpawn", [localPlayerPos, currentLand]);
  errorDisplay("Setting spawn point")
});

createMapButtonUi.addEventListener("click", function() {
  showWallsFunction(false);
  if (mapInfoDiv.style.display === "flex") {
    mapInfoDiv.style.display = "none"
    createMapButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
    noMovement = false
  } else {
    deselectUiButton()
    createMapButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
    mapInfoDiv.style.display = "flex"
    noMovement = true
  }
});

createMapButton.addEventListener("click", function() {
  showWallsFunction(false);
  worldInfo = {
    title: mapNameInput.value,
    desc: mapDescInput.value
  }
  socket.emit("createWorld", worldInfo);
  errorDisplay("Creating map")
  mapInfoDiv.style.display = "none"
  noMovement = false
});

placeFishingArea.addEventListener("click", function() {
  if (currentDevAction !== "fish") {
    currentDevAction = "fish";
    deselectUiButton()
    placeFishingArea.style.backgroundColor = "rgba(170, 233, 170, 1)"
    showWallsFunction(true)
  } else {
    currentDevAction = "none";
    placeFishingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
    showWallsFunction(false)
  }
 });

placeEnchantingArea.addEventListener("click", function() {
if (currentDevAction !== "enchanting") {
  currentDevAction = "enchanting";
  deselectUiButton()
  placeEnchantingArea.style.backgroundColor = "rgba(170, 233, 170, 1)"
  showWallsFunction(true)
} else {
  currentDevAction = "none";
  placeEnchantingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  showWallsFunction(false)
}
});

placeCookingArea.addEventListener("click", function() {
if (currentDevAction !== "cook") {
  currentDevAction = "cook";
  deselectUiButton()
  placeCookingArea.style.backgroundColor = "rgba(170, 233, 170, 1)"
  showWallsFunction(true)
} else {
  currentDevAction = "none";
  placeCookingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  showWallsFunction(false)
}
});

hammerButtonUi.addEventListener("click", function() {
  showWallsFunction(false)
  playRandomPop()
  if (currentDevAction !== "building") {
    currentDevAction = "building";
    deselectUiButton()
    uiBuildingObjects.style.display = "flex";
    uiBuildingCategory.style.display = "flex";
    hammerButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
  } else {
    currentDevAction = "none";
    uiBuildingObjects.style.display = "none";
    uiBuildingCategory.style.display = "none";
    hammerButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
  }
});

layerOneButtonUi.addEventListener("click", function() {
  if(currentSelectedObjLayer !== 2){
    currentSelectedObjLayer = 2;
    deselectUiButton()
    layerThreeButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
    layerTwoButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
    layerOneButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
    currentDevAction = "building";
    hammerButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
    uiBuildingObjects.style.display = "flex";
  } 
});
layerTwoButtonUi.addEventListener("click", function() {
  if(currentSelectedObjLayer !== 1){
    deselectUiButton()
    currentSelectedObjLayer = 1;
    layerThreeButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
    layerTwoButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
    layerOneButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
    currentDevAction = "building";
    hammerButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
    uiBuildingObjects.style.display = "flex";
  } 
 
});
layerThreeButtonUi.addEventListener("click", function() {
  if(currentSelectedObjLayer !== 0){
    deselectUiButton()
    currentSelectedObjLayer = 0;
    layerThreeButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
    layerTwoButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
    layerOneButtonUi.style.backgroundColor = "rgb(255 255 255 / 29%)"
    currentDevAction = "building";
    hammerButtonUi.style.backgroundColor = "rgb(148, 223, 148)"
    uiBuildingObjects.style.display = "flex";
  } 

});

startBuildingBut.addEventListener("click", function() {
  playRandomPop()
if (uiBuilding.style.display !== "flex") {
  roomsDiv.style.display = "none"
  dialogsDiv.style.display = "none"
  uiBuilding.style.display = "flex"
  uiBuildingObjects.style.display = "none"
  deselectUiButton()
  startBuildingBut.style.backgroundColor = "rgb(148, 223, 148)"
} else {
  currentDevAction = "none";
  uiBuilding.style.display = "none"
  uiBuildingObjects.style.display = "none"
}
});

placeCraftingArea.addEventListener("click", function() {
if (currentDevAction !== "craft") {
  currentDevAction = "craft";
  deselectUiButton()
  placeCraftingArea.style.backgroundColor = "rgba(170, 233, 170, 1)"
  showWallsFunction(true)
  } else {
  currentDevAction = "none";
  placeCraftingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  showWallsFunction(false)
  }
});

placeTransition.addEventListener("click", function() {
if (currentDevAction !== "transition") {
  currentDevAction = "transition";
  showWallsFunction(true)
  deselectUiButton()
  roomsDiv.style.display = "block"
  placeTransition.style.backgroundColor = "rgb(148, 223, 148)"
} else {
  roomsDiv.style.display = "none"
  currentDevAction = "none";
  showWallsFunction(false)
  placeTransition.style.backgroundColor = "rgb(255 255 255 / 29%)"
}
});

placeChest.addEventListener("click", function() {
if (currentDevAction !== "chest") {
  currentDevAction = "chest";
  roomsDiv.style.display = "none"
  placeEnchantingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  deleteWalls.style.backgroundColor = "rgb(255 255 255 / 29%)"
  dialogsDiv.style.display = "none"
  placeDialog.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeWalls.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeFishingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeCookingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeCraftingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
  placeTransition.style.backgroundColor = "rgb(255 255 255 / 29%)"
  startBuildingBut.style.backgroundColor = "rgb(255 255 255 / 29%)"
  deselectUiButton()
  placeChest.style.backgroundColor = "rgba(170, 233, 170, 1)"
   uiBuilding.style.display = "none"
   uiBuildingObjects.style.display = "none"
} else {
  currentDevAction = "none";
  placeChest.style.backgroundColor = "rgb(255 255 255 / 29%)"
}
});

placeChestStick.style.backgroundColor = "rgba(170, 233, 170, 1)" //Initially selected

placeChestStick.addEventListener("click", function() {
  if (currentChestItem !== "stick") {
    currentChestItem = "stick";
    placeChestGem.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeChestVeg.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeChestStick.style.backgroundColor = "rgba(170, 233, 170, 1)"
  }
});

placeChestVeg.addEventListener("click", function() {
  if (currentChestItem !== "vegetable") {
    currentChestItem = "vegetable";
    placeChestGem.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeChestStick.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeChestVeg.style.backgroundColor = "rgba(170, 233, 170, 1)"
  }
});

placeChestGem.addEventListener("click", function() {
  if (currentChestItem !== "gem") {
    currentChestItem = "gem";
    placeChestVeg.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeChestStick.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeChestGem.style.backgroundColor = "rgba(170, 233, 170, 1)"
  }
});

placeDialog.addEventListener("click", function() {
  if (currentDevAction !== "dialog") {
    currentDevAction = "dialog";
    roomsDiv.style.display = "none"
    dialogsDiv.style.display = "block"
    deleteWalls.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeEnchantingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeWalls.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeFishingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeCookingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeChest.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeTransition.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeCraftingArea.style.backgroundColor = "rgb(255 255 255 / 29%)"
    startBuildingBut.style.backgroundColor = "rgb(255 255 255 / 29%)"
    placeDialog.style.backgroundColor = "rgba(170, 233, 170, 1)"
    uiBuilding.style.display = "none"
    uiBuildingObjects.style.display = "none"
  } else {
    currentDevAction = "none";
    placeDialog.style.backgroundColor = "rgb(255 255 255 / 29%)"
  }
});

function showWallsFunction(state) {
  playRandomPop()
  console.log(state)
if (state === true) {
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
  } else if (wall.type === "enchanting") {
    wall.color = `rgb(204, 0, 255, ${wallsVisibility})`
  } else if (wall.type === "chest") {
    wall.color = `rgb(255, 255, 204, ${wallsVisibility})`
  } else if (wall.type === "transition") {
    wall.color = `rgb(204, 0, 204, ${wallsVisibility})`
  } else if (wall.type === "dialog") {
    wall.color = `rgb(179, 255, 213, ${wallsVisibility})`
  }
})
};

exportWalls.addEventListener("click", function() {
exportObjectAsText(mapsInfo[currentLand].colliders, "walls")
});

let uiBuildingCategoryActivate = "construction"

function displayuiBuildingCategory() {
  uiBuildingConstruction.style.display = 'none'
  uiBuildingFurniture.style.display = 'none'
  uiBuildingStructure.style.display = 'none'
  uiBuildingOutdoor.style.display = 'none'
}

uiBuildingCategoryConstruction.addEventListener("click", function() {
  if(uiBuildingCategoryActivate !== "construction"){
    uiBuildingCategoryActivate = "construction"
  } 
  displayuiBuildingCategory()
  uiBuildingConstruction.style.display = 'flex'
})
uiBuildingCategoryFurniture.addEventListener("click", function() {
  if(uiBuildingCategoryActivate !== "furniture"){
    uiBuildingCategoryActivate = "furniture"
    console.log(uiBuildingCategoryActivate)
  } 
  displayuiBuildingCategory()
  uiBuildingFurniture.style.display = 'flex'
})
uiBuildingCategoryStructure.addEventListener("click", function() {
  if(uiBuildingCategoryActivate !== "structure"){
    uiBuildingCategoryActivate = "structure"
    console.log(uiBuildingCategoryActivate)
  } 
  displayuiBuildingCategory()
  uiBuildingStructure.style.display = 'flex'
})
uiBuildingCategoryOutdoor.addEventListener("click", function() {
  if(uiBuildingCategoryActivate !== "outdoor"){
    uiBuildingCategoryActivate = "outdoor"
    console.log(uiBuildingCategoryActivate)
  } 
  displayuiBuildingCategory()
  uiBuildingOutdoor.style.display = 'flex'
})


// UI DEV COMMENT <

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

socket.on("requestRoomsCompleted", (rooms) => {
  // console.log(rooms)
  roomsDiv.innerHTML = '';
  for (let key of rooms) {
    console.log(key)
      if (key == null) continue;
      
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
})

socket.on("createWorldSuccesful", (name) => {
  addMapsInfoToDiv()
  errorDisplay(`${name} map created!`, "hue-rotate(90deg)")
})

function addMapsInfoToDiv() {

  socket.emit("requestRooms", "");
  
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

const DayCycleFilters = [
  'sepia(0%) hue-rotate(0deg) saturate(1) contrast(1) brightness(1)',  
  'sepia(64%) hue-rotate(-39deg) saturate(2) contrast(.9) brightness(.9)', 
  'sepia(0%) hue-rotate(0deg) saturate(1) contrast(1) brightness(0.7)', 
  'sepia(64%) hue-rotate(-39deg) saturate(2) contrast(.9) brightness(.9)'
];

let DayCycleState = 0;

let currentSoundtrackVolume = 1;
let currentNightSoundtrackVolume = 0;

setInterval(() => {
  canvasLobby.style.filter = DayCycleFilters[DayCycleState];

  let targetDayVolume, targetNightVolume;

  if (DayCycleState === 0 || DayCycleState === 3) {
    targetDayVolume = 1;
    targetNightVolume = 0;
  } else if (DayCycleState === 2) {
    targetDayVolume = 0;
    targetNightVolume = 1;
  } else {
    targetDayVolume = 0;
    targetNightVolume = 0;
  }

  const volumeInterval = setInterval(() => {
    const step = 0.01; 

    if (Math.abs(currentSoundtrackVolume - targetDayVolume) > step) {
      currentSoundtrackVolume += (targetDayVolume - currentSoundtrackVolume) / 20; // Smooth adjustment
      currentSoundtrack.volume = currentSoundtrackVolume;
    }

    if (Math.abs(currentNightSoundtrackVolume - targetNightVolume) > step) {
      currentNightSoundtrackVolume += (targetNightVolume - currentNightSoundtrackVolume) / 20;
      currentNightSoundtrack.volume = currentNightSoundtrackVolume;
    }

    if (
      Math.abs(currentSoundtrackVolume - targetDayVolume) <= step &&
      Math.abs(currentNightSoundtrackVolume - targetNightVolume) <= step
    ) {
      clearInterval(volumeInterval);
    }
  }, 50); 

  if (DayCycleState === 2) { 
    targetAlphaCycle = 1; 
  } else {
    targetAlphaCycle = 0; 
  }

  DayCycleState = (DayCycleState + 1) % DayCycleFilters.length;

}, 10000);


function mapSetup () {
  if (myPlayer) {
    // Canvas cleanup
    canvas.clearRect(0, 0, canvasLobby.width, canvasLobby.height);
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
      playerX = localPlayerPos.x
      playerY = localPlayerPos.y
      localPlayerMovement()
    }

    for (const projectile of projectilesClient) {
      projectile.x += Math.cos(projectile.angle || projectile.bullet1 || projectile.bullet2) * (projectile.speed ? projectile.speed : 35);
      projectile.y += Math.sin(projectile.angle || projectile.bullet1 || projectile.bullet2) * (projectile.speed ? projectile.speed : 35);
    }

    drawColliders()
  }
}

let objectsFrames = 0;
let objectFramesController = 0;

function drawObjects (layer, num) {
  // console.log(mapsInfo[currentLand])
  if (!mapsInfo[currentLand].objects) return

  objectFramesController++;
  if (objectFramesController > 50) {
    objectFramesController = 0;
    objectsFrames++
    if (objectsFrames >= 8) {
      objectsFrames = 0;
    }
  }

  for (let i = mapsInfo[currentLand].objects.length - 1; i >= 0; i--) {

    for (const obj of mapsInfo[currentLand].objects[i]) {
      if (!mapObject) return;

      let objectOriginal = mapObject.find(item => item.name === obj.name)
  
      if (obj.backgroundObj === "back") {
        if (layer === "backer") {
          drawOnTop(objectOriginal.img, obj.x, obj.y, obj.w, obj.h, cameraX, cameraY, obj.animated)
        }
      } 
      else if (obj.backgroundObj === true) {
        if (layer === "background") {
          drawOnTop(objectOriginal.img, obj.x, obj.y, obj.w, obj.h, cameraX, cameraY, obj.animated)
        }
      }  
      else {
        if (((playerY - cameraY + 120) < (obj.y - cameraY)) && layer === "front" && num === i) {
          drawOnTop(objectOriginal.img, obj.x, obj.y, obj.w, obj.h, cameraX, cameraY, obj.animated)
        }
        else if ((playerY - cameraY + 120) >= (obj.y - cameraY) && layer === "back" && num === i) {
          drawOnTop(objectOriginal.img, obj.x, obj.y, obj.w, obj.h, cameraX, cameraY, obj.animated)
        }  
      }
    }
  }

}

function drawOnTop (img, x, y, width, height, cx, cy, anim) {
  if (!img.complete || img.naturalWidth === 0) {
    console.error("⚠️ Image failed to load:", img.src);
    return; // Stop drawing
  }

  if (!anim) {
    canvas.drawImage(
      img,
      x - (width * generalZoom) - cx,
      y - (height * generalZoom) - cy,
      width * generalZoom,
      height * generalZoom,
    );
  } else {
    canvas.drawImage(
      img,
      objectsFrames * width,
      0,
      width,
      height,
      x - (width * generalZoom) - cx,
      y - (height * generalZoom) - cy,
      width * generalZoom,
      height * generalZoom,
    );
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

let localPlayerPos= {x: 0, y: 0}

function playerCollision () {
  playerColminX = playerX - cameraX - 20;
  playerColminY = playerY - cameraY + 80;
  playerColLengthX = playerWidth + 0;
  playerColLengthY = playerHeight - 10;
  localPlayerPos.x = playerX;
  localPlayerPos.y = playerY;
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
        else if (wall.type === "enchanting") {
          grassEnchantingAvailable = true;
          if (grassOpenEnchanting) {
            enchantingContainer.style.display = "block";
          } else {
            enchantingContainer.style.display = "none";
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
          currentDialogTitle = ""
        }
        if (wall.type === "cook") {
          grassOpenCooking = false;
          cookingContainer.style.display = "none";
        }
        if (wall.type === "craft") {
          grassOpenCrafting = false;
          craftingContainer.style.display = "none";
        }
        if (wall.type === "enchanting") {
          grassOpenEnchanting = false;
          grassEnchantingAvailable = false;
          enchantingContainer.style.display = "none";
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
      if (!dialogBoxes) return;
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
    canvas.save();
    canvas.translate(smoothPlayer.smoothX - cameraX, smoothPlayer.smoothY - cameraY +90);
    canvas.rotate(player.weaponAngle);
    canvas.rotate(-170);
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
  if (hideAndSickvar === false){
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
  
}

function drawUsernameLocal (player) {
  canvas.drawImage(nameBubbleGreen, playerX - cameraX -40, playerY - cameraY -48, 100,50)
  canvas.beginPath();
  canvas.font = "bolder 16px Tiny5";
  canvas.textAlign = "center";
  canvas.fillStyle = "black";
  canvas.fillText(player.username, playerX - cameraX +10, playerY  - cameraY -12);
  canvas.beginPath();
  canvas.font = "bolder 12px Tiny5";
  canvas.textAlign = "center";
  canvas.fillStyle = "black";
  canvas.fillText(Math.trunc((player.cookingLevel / 1000) + (player.fishingLevel / 1000)) , playerX - cameraX + 10, playerY  - cameraY - 32.5);
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
        // canvas.drawImage(chatBubble, smoothPlayer.smoothX - cameraX -85, smoothPlayer.smoothY - cameraY -115, 200, 60)
        // canvas.beginPath();
        // canvas.font = "bolder 16px Tiny5";
        // canvas.textAlign = "center";
        // canvas.fillStyle = "black";
        // canvas.fillText(player.chatMessage, smoothPlayer.smoothX - cameraX +15, smoothPlayer.smoothY - cameraY -90);

        if (player.chatMessage.length > 20) {
          drawChatBubble(chatBubbleBigger, player, smoothPlayer.smoothX - cameraX, -190, smoothPlayer.smoothY - cameraY, -115, 400, 60, 5, 90 )
        } else {
          drawChatBubble(chatBubble, player, smoothPlayer.smoothX - cameraX, -90, smoothPlayer.smoothY - cameraY, -115, 200, 60, 15, 90 )
        }

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
  else if (currentDevAction === "building") {
    const obj = mapObject.find(item => item.name === currentObjToPlace);
    if (!obj) return
    drawOnTop(
      obj.img, 
      hoveredXCoord + 200, 
      hoveredYCoord + 200, 
      obj.w, obj.h, 
      cameraX, 
      cameraY,
      obj.animated
    )
  }
  else {
    canvas.fillStyle = `rgba(210, 45, 45, ${wallsVisibility})`;
    canvas.fillRect(hoveredXCoord - cameraShakeX - cameraX, hoveredYCoord - cameraShakeY - cameraY, 10, 10);
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

  const isSpriteSheet = emptyMap.width > frameWidth;

  if (layer === "back") {
      drawMapSprite(emptyMap, isSpriteSheet, frameWidth, frameHeight);
      drawQuestMarkers();
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
        sx, 
        sy, 
        frameWidth, 
        frameHeight,
        cameraShakeOffsetX, 
        cameraShakeOffsetY, 
        4500, 
        4500
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
    timeToWake = 100;
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
let spawnerIntervals = []

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
      if (enemy.dropRate >= randomNumber) {
        socket.emit("enemyDrop", enemy.drop);
      }
    }

    const hasActiveMinions = mapsInfo[currentLand].enemies.some(
      enemy => enemy.active === true && !enemy.isBoss
    );
    const hasActiveBoss = mapsInfo[currentLand].enemies.some(
      enemy => enemy.active === true && enemy.isBoss
    );
    const bossAlive = mapsInfo[currentLand].enemies.find(
      enemy => enemy.isBoss === true && enemy.health > 0
    );
    
    if (!hasActiveMinions && bossAlive && !hasActiveBoss) {
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

        setTimeout(() => {
          frameDuration = 800 / 30;
        }, 100);
        setTimeout(() => {
          frameDuration = 800 / fps;
        }, 1500);

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
        let intervalSpawner = setTimeout(() => {
          enemy.spawn.x = enemy.baseSpawn.x;
          enemy.spawn.y = enemy.baseSpawn.y;
          enemy.health = enemy.maxHealth
          mapsInfo[currentLand].enemies.push(enemy)
        }, enemy.spawnTimer);

        spawnerIntervals.push(intervalSpawner)
      }


    }, 200)
  }

  if (localPlayerDamaged > 0) {
    localPlayerDamaged--

    // playerX += Math.cos(localPlayerDamageAngle) * (localPlayerDamaged * 0.7) ;
    // playerY += Math.sin(localPlayerDamageAngle) * (localPlayerDamaged * 0.7);

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

function moveStateAndMelee(enemy) {
  // console.log(enemy.currentStateName)
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "move";
  }

  const colliders = drawColliders("enemy", enemy.spawn.x + 50, enemy.spawn.y + 100, enemy.w / 2, enemy.h / 2);

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

  // Decide movement directly toward the player
  let moveX = 0;
  let moveY = 0;

  if (playerX + 1000 > enemy.spawn.x && !colliders.includes("right")) {
    moveX = enemy.speedX;
  } else if (playerX - 1000 < enemy.spawn.x && !colliders.includes("left")) {
    moveX = -enemy.speedX;
  }

  if (playerY > enemy.spawn.y && !colliders.includes("down")) {
    moveY = enemy.speedY;
  } else if (playerY - 1000 < enemy.spawn.y && !colliders.includes("up")) {
    moveY = -enemy.speedY;
  }

  // Apply movement
  enemy.spawn.x += moveX;
  enemy.spawn.y += moveY;

  resolveEnemyCollisionsZombie(enemy);

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
        timeLeft: 30,
        playerId: socket.id,
        enemy: true
      }) 
  
      // const basicBulletTree = new Audio("./audios/basicBulletTree.wav");
      // basicBulletTree.loop = false;
      // basicBulletTree.volume = 0.5;
      // basicBulletTree.play()
    }
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
  }, 1000);
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

    playRandomPop()
  }
}

function playRandomPop() {
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

function attackCircleSokoState(enemy) {
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

    const totalBullets = 80; // Total bullets forming the circle
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
          angle: attackCircleMooshBossStateVar ? bulletAngle : bulletAngle + 0.01,
          x: enemy.spawn.x + ((enemy.w)/2) + 200 + Math.cos(bulletAngle) * 20, // Offset to create a circular spawn
          y: enemy.spawn.y + ((enemy.h)/2) + 200 + Math.sin(bulletAngle) * 20,
          speed: 5,
          timeLeft: 300,
          playerId: socket.id,
          enemy: true,
        });
      }
    }, 1000);


    setTimeout(() => {
      enemy.attackInterval = true;
    }, 2000);
  }
}

function lazerSokoState(enemy) {
  
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "attack1";
  }
  
  if (enemy.attackInterval) {

  let bulletAngle = getAngleBetweenPlayerAndEnemy(enemy);
  enemy.attackInterval = false;

  setTimeout(() => {
    enemy.attackInterval = true;
  }, 100);

    projectilesClient.push({
      angle: bulletAngle,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle + 0.05,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle - 0.05,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 
    
    projectilesClient.push({
      angle: bulletAngle + 0.1,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle - 0.1,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle - 0.15,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle - 0.15,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 
    
    projectilesClient.push({
      angle: bulletAngle - 0.20,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
      timeLeft: 250,
      playerId: socket.id,
      enemy: true
    }) 

    projectilesClient.push({
      angle: bulletAngle - 0.20,
      x: enemy.spawn.x + ((enemy.w)/2) + 200,
      y: enemy.spawn.y + ((enemy.h)/2) + 200,
      speed: 15,
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

function invokeSokoState(enemy) {
  if (enemy.currentStateName === "idle") {
    enemy.currentStateName = "attack1";
  }
  
  if (enemy.attackInterval) {

  enemy.attackInterval = false;

  setTimeout(() => {
    enemy.attackInterval = true;
  }, 5000);

  let skeletonsToPush =  [
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
      states: [moveState, attackState],
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
      states: [moveState, attackState],
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
      states: [moveState, attackState],
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
      states: [moveState, attackState],
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
      states: [moveState, attackState],
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
      states: [moveState, attackState],
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
  ]

  skeletonsToPush.forEach(skelly => {
    mapsInfo[currentLand].enemies.push(skelly);
  })

  setTimeout(() => {
    mapsInfo[currentLand].enemies.forEach(skelly => {
      activateNormalEnemy(skelly)
    })
  }, 1000);

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
function resolveEnemyCollisionsZombie(enemy) {
  mapsInfo[currentLand].enemies.forEach(otherEnemy => {
    if (otherEnemy === enemy) return;
    const dx = enemy.spawn.x - otherEnemy.spawn.x;
    const dy = enemy.spawn.y - otherEnemy.spawn.y;
    if (Math.abs(dx) < 50) enemy.spawn.x += dx > 0 ? enemy.speedX : -enemy.speedX;
    if (Math.abs(dy) < 50) enemy.spawn.y += dy > 0 ? enemy.speedY : -enemy.speedY;
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
    const angleDegrees = Math.random() * Math.PI * 2;
    const size = 20 ;
    const particleX = x;
    const particleY = y;
    // console.log(angleDegrees)
    
    particles.push({ x: 1, y: 1, size: size, color: color, speed: speed, angle: angleDegrees, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partWalk"].speedDec, sizeDecrease: particlesSystem["partWalk"].sizeDec, name: particlesSystem["partSlime"].name });   
  }
}

function buildPlaceParticles(obj) {
  // console.log(obj)
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.floor(Math.random() * (20 - 8 + 1)) + 5;; // Random speed (adjust as needed)
    const size = 25; // Random size between 3 and 8
    const particleX = obj.x - (obj.w * 2);
    const particleY = obj.y - 100;

    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    if (randomNumber === 1) {

      particles.push({ x: 1, y: 1, size: size, color: 'white', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partWalk"].speedDec, sizeDecrease: particlesSystem["partWalk"].sizeDec, name: particlesSystem["partSlime"].name });
            
    } else {

      particles.push({ x: 1, y: 1, size: size, color: 'white', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partWalk"].speedDec, sizeDecrease: particlesSystem["partWalk"].sizeDec, name: particlesSystem["partSlime"].name });
    }

  }
}

function buildDeleteParticles(obj) {
  // console.log(obj)
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.floor(Math.random() * (20 - 10 + 1)) + 1;; // Random speed (adjust as needed)
    const size = 30; // Random size between 3 and 8
    const particleX = obj.x - (obj.w * 2);
    const particleY = obj.y - 100;

    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    if (randomNumber === 1) {

      particles.push({ x: 1, y: 1, size: size, color: 'Crimson', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partWalk"].speedDec, sizeDecrease: particlesSystem["partWalk"].sizeDec, name: particlesSystem["partSlime"].name });
            
    } else {

      particles.push({ x: 1, y: 1, size: size, color: 'DarkRed', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partWalk"].speedDec, sizeDecrease: particlesSystem["partWalk"].sizeDec, name: particlesSystem["partSlime"].name });
    }

  }
}

function enemyDeathParticles (enemy) {
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2; // Random angle
    const speed = Math.floor(Math.random() * (20 - 16 + 1)) + 1;; // Random speed (adjust as needed)
    const size = 30; // Random size between 3 and 8
    const particleX = enemy.spawn.x + 180;
    const particleY = enemy.spawn.y + 190;

    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    if (randomNumber === 1) {

      particles.push({ x: 1, y: 1, size: size, color: 'whie', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
            
    } else {

      particles.push({ x: 1, y: 1, size: size, color: 'white', speed: speed, angle: angle, initalX: particleX, intialY: particleY, speedDecrease: particlesSystem["partSlime"].speedDec, sizeDecrease: particlesSystem["partSlime"].sizeDec, name: particlesSystem["partSlime"].name });
    }

  }
}

// Particle system <

let lastTime = performance.now();       
let fps = 60;                        
let frameDuration = 800 / fps;  

let targetAlphaCycle = 0;
let currentAlphaCycle = 0;
let value = 0;
let increment = 1;

function nightTimeCanvas() {

  b_ctx.clearRect(0, 0, 4500, 4500);

  value += increment;

  if (value === 5 || value === 0) {
    increment *= -1;
  }

  if (Math.abs(currentAlphaCycle - targetAlphaCycle) > 0.01) {
    currentAlphaCycle += (targetAlphaCycle - currentAlphaCycle) / 300;
  } else {
    currentAlphaCycle = targetAlphaCycle;
  }

  b_ctx.globalAlpha = currentAlphaCycle;

  b_ctx.fillStyle = 'rgba(6, 14, 52, 0.91)';
  b_ctx.fillRect(0, 0, 4500, 4500);

  function addLight(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 400 + value, 0, Math.PI * 2);  // Create a white circle with radius 500
    ctx.fillStyle = 'white';
    ctx.fill();  // Fill the circle with white
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(x, y, 420 + value, 0, Math.PI * 2);  // Create a white circle with radius 500
    ctx.fillStyle = 'rgba(248, 248, 248, 0.50)';
    ctx.fill();  // Fill the circle with white
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(x, y, 440 + value, 0, Math.PI * 2);  // Create a white circle with radius 500
    ctx.fillStyle = 'rgba(248, 248, 248, 0.15)';
    ctx.fill();  // Fill the circle with white
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(x, y, 460 + value, 0, Math.PI * 2);  // Create a white circle with radius 500
    ctx.fillStyle = 'rgba(248, 248, 248, 0.05)';
    ctx.fill();  // Fill the circle with white
    ctx.closePath();
  }

  addLight(b_ctx, playerX - cameraShakeX - cameraX - 150, playerY - cameraShakeY - cameraY - 100);

  mapsInfo[currentLand].objects?.forEach(objParent => {
    objParent?.forEach(obj => {
      if (!obj.lightSource) return
      addLight(b_ctx, obj.x - cameraShakeX - cameraX - 180, obj.y - cameraShakeY - cameraY - 199);
    })
  })


  canvas.globalCompositeOperation = 'multiply';
  canvas.drawImage(buffer, 0, 0);
  
  canvas.globalCompositeOperation = 'source-over';
}

function updateGame() {
  mapSetup();

  // Background map Image and objects
  drawMap("back")

  drawObjects("background")
  drawObjects("backer")

  drawObjects("back", 0)
  drawObjects("back", 1)
  
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
  
  // Foreground map Image and objects
  drawMap("front")

  drawObjects("front", 0)
  drawObjects("front", 1)

  drawObjects("back", 2)
  drawObjects("front", 2)

  nightTimeCanvas()
  drawUsername()
  drawChat()


  // Dev Colliders
  drawDevWallsPlacement()
  drawColliders("player", "", "", "", "")
}

function checkFPS(currentTime) {
  const deltaTime = currentTime - lastTime;
  if (deltaTime >= frameDuration) {
    lastTime = currentTime - (deltaTime % frameDuration);
    return true
  }
}

function generalMapLoop(currentTime, map) {
  if (checkFPS(currentTime)) updateGame();
  intervalCanvasBase = requestAnimationFrame(generalMapLoop)
}

const chatButton = document.getElementById('chatIcon');
const sitDownIconButton = document.getElementById('sitDownIcon');
const hideAndSickButton = document.getElementById('hideAndSick');
const fishingAvailableButton = document.getElementById('fishingAvailable');
const fishSelectorButton = document.getElementById('fishSelector');
const chat = document.getElementById('chat');
const chatInput = document.getElementById("chatInput");

//Labguage Button <
const en = document.getElementById("en");
const sp = document.getElementById("sp");
const fr = document.getElementById("fr");
const pt = document.getElementById("pt");
//Labguage Button > //

const navbar = document.getElementById("navbar");
const membershipPageButton = document.getElementById("membershipPageButton");

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


const userNameTitle = document.getElementById("userNameTitle");
const uiSkinsImg = document.getElementById("uiSkinsImg");
const circleCharacter = document.getElementById("circleCharacter");
const mountainsUi = document.getElementById("mountainsUi");

const playNowButton = document.getElementById("playNowButton");
const loginNotPlaying = document.getElementById("loginNotPlaying");
const loginNotPlayingIMG = document.getElementById("loginNotPlayingIMG");
const loginNotPlayingIMGTOPTRICK = document.getElementById("loginNotPlayingIMGTOPTRICK");
const loginNotPlayingP = document.getElementById("loginNotPlayingP");
const openerScreen = document.getElementById("openerScreen");
const newsPageTimerNum = document.getElementById("newsPageTimerNum");

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
const partySend = document.getElementById('partySend');
const tradeButton = document.getElementById('tradeButton');
const partyButton = document.getElementById('partyButton');
const tradeScreen = document.getElementById('tradeScreen');
const partyScreen = document.getElementById('partyScreen');
const playerPartyId = document.getElementById('playerPartyId');
const playerTradeId = document.getElementById('playerTradeId');
const partyMembers = document.getElementById('partyMembers');

const resetButton = document.querySelectorAll('.resetButton')
const errorPopUp = document.getElementById('errorPopUp');
const partyPopUp = document.getElementById('partyPopUp');

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

const informationButton = document.getElementById("informationButton")

const placeWalls = document.getElementById("wallButtonUi");
const hammerButtonUi  = document.getElementById("hammerButtonUi");
const layerOneButtonUi  = document.getElementById("layerOneButtonUi");
const layerThreeButtonUi  = document.getElementById("layerThreeButtonUi");
const uiConstructionVisibility  = document.getElementById("uiConstructionVisibility");
const deleteObjButtonUi = document.getElementById("deleteObjButtonUi");
const rotateObjButtonUi = document.getElementById("rotateObjButtonUi");
const saveObjButtonUi = document.getElementById("saveObjButtonUi");
const deleteWalls = document.getElementById("deletewWallButtonUi");
const placeEnchantingArea = document.getElementById("enchantingButtonUi");
const startBuildingBut = document.getElementById("buildButton");
const openMusicPlayerButton = document.getElementById("audioButton");
const showWalls = document.getElementById("showWalls");
const sapwnButtonUi = document.getElementById("sapwnButtonUi");
const exportWalls = document.getElementById("exportWalls");
const placeFishingArea = document.getElementById("fishingButtonUi");
const placeCraftingArea = document.getElementById("craftingButtonUi");
const placeCookingArea = document.getElementById("cookingButtonUi");
const placeChest = document.getElementById("placeChest");
const placeChat = document.getElementById("placeChat");
const placeTransition = document.getElementById("portalButtonUi");
const roomsDiv = document.getElementById('roomsDev');
const dialogsDiv = document.getElementById('dialogsDev');
const arcaneTransition = document.getElementById('arcaneTransition');
const liquidTransition = document.getElementById('liquidTransition');
const placeDialog = document.getElementById('placeDialog');
const uiBuilding = document.getElementById('uiBuilding');
const uiBuildingObjects = document.getElementById('uiBuildingObjects');
const monsterAltarButtonUi = document.getElementById('monsterAltarButtonUi');
const colisionActivatorButton = document.getElementById('colisionActivatorButton');

const uiBuildingCategoryConstruction = document.getElementById('uiBuildingCategoryConstruction');
const uiBuildingCategoryFurniture = document.getElementById('uiBuildingCategoryFurniture');
const uiBuildingCategoryStructure = document.getElementById('uiBuildingCategoryStructure');
const uiBuildingCategoryOutdoor = document.getElementById('uiBuildingCategoryOutdoor');
const uiBuildingCategoryLight = document.getElementById('uiBuildingCategoryLight');

const musicPlayer = document.getElementById('musicPlayer');
const musicPlayerSlider = document.getElementById('musicPlayerSlider');
const musicPlayerPlay = document.getElementById('musicPlayerPlay');

const filterSubCategoryConstruction = document.querySelectorAll('.filterSubCategoryConstruction')

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

// WIN XP
const gainXpDiv = document.getElementById("gainXpDiv")
const gainXpText = document.getElementById("gainXpText")

// Mobs
const monsterImage = document.getElementById("monsterImage");
const monsterSelectionImageParent = document.getElementById("monsterSelectionImageParent");
const monsterCreationAttacks = document.getElementById("monsterCreationAttacks");
const lootPanel = document.getElementById("lootPanel");
const lootPanelItems = document.getElementById("lootPanelItems");
const chestCreatorParent = document.getElementById("chestCreatorParent");
const closeLootPanel = document.getElementById("closeLootPanel");
const lootImage = document.getElementById("lootImage");
const monsterNameInput = document.getElementById("monsterNameInput");

const placeMobButtonUi = document.getElementById("placeMobButtonUi");
const questButtonUi = document.getElementById("questButtonUi");
const questMenu = document.getElementById("quest-menu");
const monsterCreationParent = document.getElementById("monsterCreationParent");

//EDIT MAPS
const editMapButtonUi = document.getElementById("editMapButtonUi")
const editMapsPage = document.getElementById("editMaps")
const editMapsRenameInput = document.getElementById("editMapsRenameInput");
const editMapsDeleteObj = document.getElementById("editMapsDeleteObj");
const popupDeleteAllObjParent = document.getElementById("popupDeleteAllObjParent");
const popupTexteInfo = document.getElementById("popupTexteInfo");
const popUpBlackscreen = document.getElementById("popUpBlackscreen");
const deleteAllObjButton = document.getElementById("deleteAllObjButton");
const deleteAllObjButtonCancel = document.getElementById("deleteAllObjButtonCancel");
const mapButtonUi = document.getElementById("mapButtonUi");
const mapEditor = document.getElementById("mapEditor");

const mapToEdit = document.getElementById("mapToEdit");
const mapToEditDiv = document.getElementById("mapToEditDiv");


// TYPE OF THE MAP
const editMapInfoTypeContent = document.getElementById("editMapInfoTypeContent");
const editMapInfoTypeButton = document.getElementById("editMapInfoTypeButton");

const mapInfoTypeContent = document.getElementById("mapInfoTypeContent");
const mapInfoTypeButton = document.getElementById("mapInfoTypeButton");
const mapInfoTypeItem = document.querySelectorAll(".mapInfoTypeItem");

// COLOR BASE OF THE MAP
const editColorBaseContent = document.getElementById("editColorBaseContent");
const editColorBaseButton = document.getElementById("editColorBaseButton");

const mapInfoColorBaseContent = document.getElementById("mapInfoColorBaseContent");
const mapInfoColorBaseButton = document.getElementById("mapInfoColorBaseButton");
const mapInfoColorBaseItem = document.querySelectorAll(".mapInfoColorBaseItem");

// PRIVACY OF THE MAP
const editPrivacyContent = document.getElementById("editPrivacyContent");
const editPrivacyButton = document.getElementById("editPrivacyButton");

const mapInfoPrivacyContent = document.getElementById("mapInfoPrivacyContent");
const mapInfoPrivacyButton = document.getElementById("mapInfoPrivacyButton");
const mapInfoPrivacyItem = document.querySelectorAll(".mapInfoPrivacyItem");

const teleporterToEditMap = document.getElementById("teleporterToEditMap");
const editMapsDescriptionInput = document.getElementById("editMapsDescriptionInput");

const editMapsSaveSettingDelete = document.getElementById("editMapsSaveSettingDelete");


//placeArea
const placeArea = document.getElementById("placeArea");
const chestCreatorButtonGive = document.getElementById("chestCreatorButtonGive");
const chestCreatorButtonTake = document.getElementById("chestCreatorButtonTake");
const chestCreatorResetChest = document.getElementById("chestCreatorResetChest");
const chestCreatorPlaceChest = document.getElementById("chestCreatorPlaceChest");

const tooltip = document.getElementById("itemTooltip");


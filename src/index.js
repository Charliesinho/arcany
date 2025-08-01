const express = require( 'express' );
const mongoose = require( 'mongoose' );

const { createServer } = require( 'http' );
const { Server } = require( 'socket.io' );

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const db = mongoose.connection;
    db.on("MONGO ERROR:", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");    
    });

const Player = require( './playerSchema.js' );
const World = require('./worldSchema.js');
const { NONAME } = require('dns');

const tickRate = 60;
const speed = 5.5;
const projectileSpeed = 35;

let players = [];
const enemies = [];
const inputsMap = {};
let animPlayerStore = {};
let lastLookPlayerStore = {};
let projectiles = [];
let weaponAngleStore = {};
let chatMessageStore = {};
let blockMovementStore = {};
let usernames = {};
let inventoryStore = {};
let myPlayer = {};


function tick() {
    for (const player of players) {
        const inputs = inputsMap[player.id];
        // const anim = player.anim;
        // const lastLooked = lastLookPlayerStore[player.id];
        const weaponAngle = weaponAngleStore[player.id];
        let chatMessage = chatMessageStore[player.id];
        const blockMovement = blockMovementStore[player.id];
        const username = usernames[player.id];  
        const clientPlayer = myPlayer[player.id];
         
        if (player.id === clientPlayer.socket) {                
            player.health = clientPlayer.health;    
            player.inventory = clientPlayer.inventory;
            player.souls = clientPlayer.souls;
            player.artifacts = clientPlayer.artifacts;
            player.currency = clientPlayer.currency;
            player.access = clientPlayer.access;
            player.status = clientPlayer.status;

            player.weapon = clientPlayer.weapon;
            player.armor = clientPlayer.armor;
            player.artifact = clientPlayer.artifact;
            // player.weaponAngle = clientPlayer.weaponAngle;

            player.fishingLevel = clientPlayer.fishing;
            player.cookingLevel = clientPlayer.cooking;
            player.craftingLevel = clientPlayer.crafting;
            player.combatLevel = clientPlayer.combat;
            player.enchantingLevel = clientPlayer.enchanting;
            player.questsOngoing = clientPlayer.questsOngoing;
            player.questsCompleted = clientPlayer.questsCompleted;
        }
        
        if (player.chatTimer > 1) {

            player.chatTimer -= 20;

        } else {

            chatMessageStore[player.id] = "none";
        }

        // player.anim = anim;

        // player.lastLooked = lastLooked
        player.chatMessage = chatMessage;
        player.username = username;

    }
    io.emit("player", players);

}

setInterval(tick, 100);

async function updateHealth(username, health, id) {    
    const playerHealth = await Player.findOneAndUpdate({username: username}, {health: health}, {new: true}); 
    if (playerHealth) {
        myPlayer[id].health = playerHealth.health;
    }
}
async function updateEnemyHealth(enemy) {    
    const updateEnemy = enemies.indexOf(enemy);
    updateEnemy.health -= 1;
}

async function main() {

    await mongoose.connect( 'mongodb+srv://Cfroz:Charlie12345!@cluster0.qbivfie.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });  

    io.on('connect', (socket) => {
        socket.join("Castle Side");
        console.log("socket", socket.id)

        inputsMap[socket.id] = {
            up: false,
            down: false,
            left: false,
            right: false,
        };

        animPlayerStore[socket.id] = "idleRight";
        lastLookPlayerStore[socket.id] = "right";
        weaponAngleStore[socket.id] = 0;
        chatMessageStore[socket.id] = "none";
        blockMovementStore[socket.id] = false;
        usernames[socket.id] = "none";
        myPlayer[socket.id] = 
        {
            socket: 0, 
            health: 6, 
            weapon: [], 
            artifact: [], 
            souls: [], 
            artifacts: [],  
            fishing: 0, 
            cooking: 0, 
            crafting: 0, 
            enchanting: 0, 
            combat: 0, 
            scores: [
            {
                mushroomTrial: 0,
            }
        ]}
        inventoryStore[socket.id] = [];
        

        players.push({
            id: socket.id,
            username: "none",
            x: 2880,
            y: 3568,
            room: "Castle Side",

            health: 3,
            fishingLevel: 0,
            cookingLevel: 0,
            enchantingLevel: 0,
            craftingLevel: 0,
            combatLevel: 0,
            questsOngoing: [],
            questsCompleted: [],
            scores: [
                {
                    mushroomTrial: 0,
                }
            ],
            access: [
                {
                    restfield: false,
                }
            ],

            inventory: [],
            weapon: [],
            armor: [],
            artifact: [],
            souls: [],
            artifacts: [],
            status: 1,

            currency: 0,

            anim: false,
            lastLooked: "right",

            weaponAngle: 0,

            chatMessage: "none",
            blockMovement: false,
            chatTimer: 0,

            iFrames: 75,
            invincible: false,
            
        });

        // socket.on("playerLocation", (playerLocation) => {
        //     async function locate() {
        //     for (const player of players) {
        //         if (player.id === socket.id) {
        //               player.x = playerLocation[0];
        //               player.y = playerLocation[1];
        //             //   console.log("recieving:", playerLocation[0])
        //         }
        //     }
        //     }
        //     locate()
        // })
        
        socket.on("playerUpdate", (data) => {
            const { location, inputs, animPlayer, lastLookPlayer, angleMouse } = data;
        
            for (const player of players) {
            if (player.id === socket.id) {
               
                player.x = location[0];
                player.y = location[1];
                player.inputs = inputs;
                player.anim = animPlayer;
                player.lastLooked = lastLookPlayer;
                player.weaponAngle = angleMouse;
                break;
            }
            }
        });
  
        socket.on("fishing", async (fishSelected) => {
            let availableFish = [];
            const allFish = [
                sardine,
                ballo,
                bass,
                octopus,
                nemi, 
                hanami,
                low,
                willy,
                cork,
                barracuda,
                bloom,
                bulbber,
                frostplum,
                reki,
                ray,
                burpy,
                cody,
                minrow,
            ];
        
            async function fishing() {
                const player = await Player.findOne({ socket: socket.id }).exec();

                let xp = player.fishing

                function levelFormula(xp){
                    return Math.floor((8 + Math.sqrt(64 + 32 * xp)) / 16);
                }
                
                let fishingLevelNum = levelFormula(xp) ;
                
        
                for (let fish of allFish) {
                    if (fish.level <= fishingLevelNum) {
                        availableFish.push(fish);
                    }
                }

                if (availableFish.length > 0) {
                    const randomIndex = Math.floor(Math.random() * availableFish.length);
                    let selectedFish;

                    if(fishSelected === ''){
                        selectedFish = availableFish[randomIndex];
                    } else {
                        let fishToChoose = fishSelected.toLowerCase()
                        let myNumber = Math.floor(Math.random() * 100) + 1;

                        if (myNumber > 50) {
                            for(let fish of allFish){
                                if(fish.name === fishToChoose){
                                    selectedFish = fish
                                }
                            }
                        } else {
                            selectedFish = availableFish[randomIndex];
                        }
                    }

                    if (player.inventory.length <= 21) {
                        console.log('hello', selectedFish,); 

                        player.inventory.push(selectedFish);
                        player.fishing += selectedFish.xp

                        io.to(socket.id).emit("obtained", selectedFish);
                        io.to(socket.id).emit("xp", selectedFish.xp);

                        await Player.findOneAndUpdate({socket: socket.id}, {fishing: player.fishing}, {new: true}).exec();
                        await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
        
                        myPlayer[socket.id] = player;
                    }
                }
            }
        
            fishing();
        });
        
        socket.on("consumable", (item) => {
            async function consume() {
                const player = await Player.findOne({socket: socket.id}).exec();

                if (item.type === "soul") {
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;

                    let arraySoul = [item];
                    myPlayer[socket.id].armor = arraySoul;
                    await Player.findOneAndUpdate({socket: socket.id}, {armor:  myPlayer[socket.id].armor}, {new: true});
                    
                } else if (item.type === "artifact") {
        
                    myPlayer[socket.id] = player;

                    let arrayArtifacts = [item];
                    player.inventory.splice(item.index, 1);
                    if (myPlayer[socket.id].artifact.length > 0) {
                        player.inventory.push(myPlayer[socket.id].artifact[0])
                    }
                    myPlayer[socket.id].artifact = arrayArtifacts;
                    await Player.findOneAndUpdate({socket: socket.id}, {artifact: myPlayer[socket.id].artifact}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    myPlayer[socket.id] = player;

                } else if (item.type === "weapon") {

                    myPlayer[socket.id] = player;    
                    
                    if (myPlayer[socket.id].weapon.length > 0) {
                        player.inventory.push(myPlayer[socket.id].weapon[0]);
                    }
                    
                    player.inventory.splice(item.index, 1);

                    let arrayWeapon = [item];
                    myPlayer[socket.id].weapon = arrayWeapon;
                    await Player.findOneAndUpdate({socket: socket.id}, {weapon: arrayWeapon}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
    
                } else if (item.type === "food") {
                    console.log(item)
                    player.health = player.health + item.power;
                    if (player.health > item.maxPower) {
                        player.health = item.maxPower;
                    }
                    player.inventory.splice(item.index, 1);
                    await Player.findOneAndUpdate({socket: socket.id}, {health: player.health}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    myPlayer[socket.id] = player;
                }
              };
              consume()
        });
       
        socket.on("healMax", (max) => {
            async function consume() {
                const player = await Player.findOne({socket: socket.id}).exec();

                if (!player) return;

                player.health = max;
                await Player.findOneAndUpdate({socket: socket.id}, {health: player.health}, {new: true});
                myPlayer[socket.id] = player;
                
              };
              consume()
        });

        socket.on("selling", (item) => {
            async function consume() {
                console.log(item)
                const player = await Player.findOne({socket: socket.id}).exec();

                    player.inventory.splice(item.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;      
                    
                    myPlayer[socket.id].currency += item.value;
                    await Player.findOneAndUpdate({socket: socket.id}, {currency:  myPlayer[socket.id].currency}, {new: true});
                
              };
              consume()
        });

        socket.on("islandOneExplored", () => {
            async function explored() {
                const player = await Player.findOne({socket: socket.id}).exec();
                const exploringLevelPlus = player.crafting + 500;
                                           
                await Player.findOneAndUpdate({socket: socket.id}, {crafting: exploringLevelPlus}, {new: true});
        
                myPlayer[socket.id] = player;      
                
              };
              explored()
        });

        socket.on("changeRoom", (room) => {
            async function roomChange() {
                for (const player of players) {
                    if (player.id === socket.id) {
                        player.room = room
                        myPlayer[socket.id] = player;    
                        socket.join(room);
                  }
                }   
                
              };
            roomChange()
        });

        socket.on("cooking", (items) => {

            async function cooking() {
                const player = await Player.findOne({socket: socket.id}).exec();

                    // player.inventory.splice(item.index, 1);
                                           
                    // await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;   

                    let arrayOfTypes = []
                    let arrayOfNames = []
                    let totalLevel = items[0].level + items[1].level

                    for (const item of items) {
                        if (!arrayOfTypes.includes(item.type)) {
                            arrayOfTypes.push(item.type)
                        }
                        if (!arrayOfNames.includes(item.name)) {
                            arrayOfNames.push(item.name)
                        }
                    }

                    let plate;
                    let xp = 0;

                    if (arrayOfTypes.includes("fish") && arrayOfTypes.includes("meat")) {
                        if (totalLevel < 4) {
                            plate = commonPlate;
                            xp = 100;
                        }
                         else if (totalLevel < 6) {
                            plate = mediumPlate;
                            xp = 200;
                        }
                         else if (totalLevel <= 10) {
                            plate = rarePlate;
                            xp = 300;
                        }
                    }
                    else if (arrayOfTypes.includes("fish") && arrayOfTypes.includes("leaf")) {
                        if (totalLevel < 4) {
                            plate = commonSushiPlate;
                            xp = 100;
                        }
                         else if (totalLevel < 6) {
                            plate = mediumSushiPlate;
                            xp = 200;
                        }
                         else if (totalLevel <= 10) {
                            plate = rareSushiPlate;
                            xp = 300;
                        }
                    }
                    
                    else if (arrayOfTypes.includes("meat") && !arrayOfTypes.includes("leaf")) {
                        if (totalLevel < 4) {
                            plate = commonMeatPlate;
                            xp = 100;
                        }
                        //  else if (totalLevel < 6) {
                        //     plate = uncommonFish;
                        //     xp = 50;
                        // }
                        //  else if (totalLevel < 10) {
                        //     plate = rareFish;
                        //     xp = 100;
                        // }
                        // else if (totalLevel === 10) {
                        //     plate = octopusPlate;
                        //     xp = 200;
                        // }
                    }
                    else if (arrayOfTypes.includes("fish")) {
                        if (totalLevel < 4) {
                            plate = commonFish;
                            xp = 100;
                        }
                         else if (totalLevel < 6) {
                            plate = uncommonFish;
                            xp = 200;
                        }
                         else if (totalLevel < 10) {
                            plate = rareFish;
                            xp = 300;
                        }
                        else if (totalLevel === 10) {
                            plate = octopusPlate;
                            xp = 500;
                        }
                    } 
                    else {
                        plate = trashPlate;
                            xp = 0;
                    }
                    

                    player.inventory.push(plate);        
                    player.cooking = player.cooking + xp;                                 
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {cooking: player.cooking}, {new: true});
                    io.to(socket.id).emit('obtained', plate);
                    io.to(socket.id).emit("xp", xp);
                    myPlayer[socket.id] = player; 

                    console.log(arrayOfTypes)
                
              };
              cooking()
        });
        
        socket.on("enchanting", (items) => {

            async function cooking() {
                const player = await Player.findOne({socket: socket.id}).exec();

                    // player.inventory.splice(item.index, 1);
                                           
                    // await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;   

                    let arrayOfNames = []
                    let arrayOfRarity = []
                    let staff = null;
                    let xp = 0;

                    for (const item of items) {
                        if (!arrayOfNames.includes(item.name)) {
                            arrayOfNames.push(item.name)
                            if (item.type === "weapon") {
                                staff = item;
                            }
                        }
                        if (!arrayOfRarity.includes(item.rarity)) {
                            arrayOfRarity.push(item.rarity)
                        }
                    }

                    if (arrayOfNames.includes("runeBullets")) {
                        staff.bullets *= 2;    
                        xp = 1500;
                    }
                    else if (arrayOfNames.includes("runeRange")) {
                        staff.range *= 2; 
                        xp = 500;
                    }
                    else if (arrayOfNames.includes("runeFireRate")) {
                        staff.fireRate /= 2; 
                        xp = 1000;
                    }

                    staff.charges -= 1;
                    

                    player.inventory.push(staff);                                           
                    player.enchanting += xp;                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {enchanting: player.enchanting}, {new: true});
                    io.to(socket.id).emit('obtained', staff);
                    io.to(socket.id).emit("xp", xp);
                
              };
              cooking()
        });
        
        socket.on("crafting", (items) => {

            async function cooking() {
                const player = await Player.findOne({socket: socket.id}).exec();

                    // player.inventory.splice(item.index, 1);
                                           
                    // await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
        
                    myPlayer[socket.id] = player;   

                    let arrayOfNames = []
                    let arrayOfRarity = []

                    for (const item of items) {
                        if (!arrayOfNames.includes(item.name)) {
                            arrayOfNames.push(item.name)
                        }
                        if (!arrayOfRarity.includes(item.rarity)) {
                            arrayOfRarity.push(item.rarity)
                        }
                    }

                    let staff;
                    let xp = 0;

                    if (arrayOfNames.includes("arcaneGem2") && arrayOfNames.includes("stick")) {
                        staff = arcaneLancerInv;   
                        xp = 1000; 
                    }
                    else if (arrayOfNames.includes("arcaneGem") && arrayOfNames.includes("stick")) {
                        staff = arcaneStaffCommon; 
                        xp = 500;
                    }
                    else if (arrayOfNames.includes("arcaneGem3") && arrayOfNames.includes("stick")) {
                        staff = arcaneRepeaterInv; 
                        xp = 1500;
                    } 
                    else if (arrayOfNames.includes("restfieldBlanket")){
                        staff = restfieldGhostClothes; 
                        xp = 500;
                    } 
                    else{
                        staff = trashCrafting,
                        xp = 0;
                    }

                    player.inventory.push(staff); 
                    player.crafting += xp;                                          
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {crafting: player.crafting}, {new: true});
                    io.to(socket.id).emit('obtained', staff);
                    io.to(socket.id).emit("xp", xp);
                
              };
              cooking()
        });

        socket.on("enemyKilled", (xp) => {

            async function expObtained() {
                const player = await Player.findOne({socket: socket.id}).exec();                                           
        
                    myPlayer[socket.id] = player;   
                    player.combat = player.combat + xp;
                    io.to(socket.id).emit("xp", xp);

                    await Player.findOneAndUpdate({socket: socket.id}, {combat: player.combat}, {new: true});
                                   
                
              };
              expObtained()
        });

        socket.on("toTrade", (array) => {

            async function expObtained() {
                let playerTarget = array[0];
                let item = array[1];
                const player = await Player.findOne({username: playerTarget}).exec();     
                console.log(playerTarget, player)
                if (!player) return;                                      
                player.inventory.push(item);
                await Player.findOneAndUpdate({socket: player.socket}, {inventory: player.inventory}, {new: true});
                io.to(player.socket).emit('obtained', item);           
                
              };
              expObtained()
        });
        
        socket.on("toInvite", (user) => {

            async function invite() {
                const player = await Player.findOne({username: user[0]}).exec();     
                if (!player) return;
                user.push(player.socket)                                      
                io.to(player.socket).emit('partyInvite', user);           
            };
            invite()
        });
        
        socket.on("partyInviteAccepted", (user) => {
            async function invite() {
                // const player = await Player.findOne({username: user[0]}).exec();     
                // if (!player) return;                                      
                io.to(user[1]).emit('partyInviteAcceptedCallback', user);           
            };
            invite()
        });
        
        socket.on("updateParty", (users) => {
            async function invite() {
                for (let user of users) {
                    io.to(user.id).emit('updatePartyClient', users);           
                }                            
            };
            invite()
        });
        
        socket.on("partyProjectile", (info) => {
            async function invite() {
                for (let user of info[0]) {
                    if (user.id != socket.id) {
                        io.to(user.id).emit('partyProjectileClient', info[1]);           
                    }
                }                            
            };
            invite()
        });
        
        socket.on("leaderShareEnemies", (info) => {
            async function share() {
                for (let user of info[1]) {
                    if (user.id != socket.id) {
                        io.to(user.id).emit('leaderShareEnemiesClient', info[0]);           
                    }
                }                            
            };
            share()
        });
        
        socket.on("respawnEveryone", (info) => {
            async function share() {
                for (let user of info) {
                    if (user.id != socket.id) {
                        io.to(user.id).emit('respawnEveryoneClient', true);           
                    }
                }                            
            };
            share()
        });

        socket.on("leaderChangeRoom", (info) => {
            async function share() {
                for (let user of info[1]) {
                    if (user.id != socket.id) {
                        io.to(user.id).emit('leaderChangeRoomClient', info);           
                    }
                }                            
            };
            share()
        });
        
        socket.on("partyEnemyKilled", (info) => {
            async function share() {
                for (let user of info[1]) {
                    if (user.id != socket.id) {
                        io.to(user.id).emit('partyEnemyKilledClient', info[0]);           
                    }
                }                            
            };
            share()
        });

        socket.on("leaderActivatedBoss", (info) => {
            async function share() {
                for (let user of info) {
                    io.to(user.id).emit('leaderActivatedBossClient', true);           
                }                            
            };
            share()
        });
        
        socket.on("updateServer", () => {

            async function expObtained() {
                const player = await Player.findOne({socket: socket.id}).exec();     
                if (!player) return;                                      
                myPlayer[socket.id] = player       
                
              };
              expObtained()
        });

        socket.on("questStarted", (quest) => {

            async function expObtained() {
                const player = await Player.findOne({socket: socket.id}).exec(); 
                  

                let questAlreadyThere = player.questsOngoing.some(questItem => questItem.title === quest.title)

                if (questAlreadyThere === true) {
                    return;
                }
                                                             
                let questsStarted = player.questsOngoing;
                
                questsStarted.push(quest)

                await Player.findOneAndUpdate({socket: socket.id}, {questsOngoing: questsStarted}, {new: true});

                myPlayer[socket.id] = player;

                // io.to(socket.id).emit("questStarted", quest);
              };
              expObtained()
        });

        socket.on("playerHurt", (nothing) => {

            async function expObtained() {
                const player = await Player.findOne({socket: socket.id}).exec(); 

                player.health--

                await Player.findOneAndUpdate({socket: socket.id}, {health: player.health}, {new: true});

                myPlayer[socket.id] = player;
              };
              expObtained()
        });

        socket.on("questFinished", (quest) => {

            async function expObtained() {
                const player = await Player.findOne({socket: socket.id}).exec(); 

                let questsOngoing = player.questsOngoing;
                let questsCompleted = player.questsCompleted;

                if (quest.rewardType === "coins") {
                    let playerCurrency =  player.currency + quest.rewardAmount;
                    await Player.findOneAndUpdate({socket: socket.id}, {currency: playerCurrency}, {new: true}).exec();
                    myPlayer[socket.id].currency = playerCurrency;
                }

                if (quest.rewardType === "soul") {
                    let soulToPush = itemsObj[quest.rewardAmount];
                    let playerSouls =  player.souls
                    playerSouls.push(soulToPush);
                    console.log(itemsObj[quest.rewardAmount])
                    await Player.findOneAndUpdate({socket: socket.id}, {souls: playerSouls}, {new: true}).exec();
                    myPlayer[socket.id].souls = playerSouls;
                }

                if (quest.rewardType === "item") {
                    let itemToPush = itemsObj[quest.rewardAmount];
                    let playerInventory =  player.inventory
                    playerInventory.push(itemToPush);
                    console.log(itemsObj[quest.rewardAmount])
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: playerInventory}, {new: true}).exec();
                    myPlayer[socket.id].inventory = playerInventory;
                }

                if (quest.rewardType === "quest") {
                    if (quest.rewardAmount === "restfieldAccess") {
                        player.access[0].restfieldPath = true;
                        await Player.findOneAndUpdate({socket: socket.id}, {access: player.access}, {new: true}).exec();
                        myPlayer[socket.id].access = player.access;
                    }
                    if (quest.rewardAmount === "mushroomAccess") {
                        player.access[0].slimeForestPath = true;
                        await Player.findOneAndUpdate({socket: socket.id}, {access: player.access}, {new: true}).exec();
                        myPlayer[socket.id].access = player.access;
                    }
                }

                const index = questsOngoing.findIndex(obj => obj.title === quest.name);

                let finishedQuest = questsOngoing.splice(index, 1);
                questsCompleted.push(finishedQuest[0]);

                await Player.findOneAndUpdate({socket: socket.id}, {questsOngoing: questsOngoing}, {new: true}).exec();
                await Player.findOneAndUpdate({socket: socket.id}, {questsCompleted: questsCompleted}, {new: true}).exec();
                myPlayer[socket.id].questsOngoing = questsOngoing;
                myPlayer[socket.id].questsCompleted = questsCompleted;

                io.to(socket.id).emit("questFinishedDialog", quest);

              };
              expObtained()
        });

        socket.on("rewardChest", (item) => {

            async function consume() {

                const number = Math.floor(Math.random() * (100 - 1 + 1) + 1);

                const player = await Player.findOne({socket: socket.id}).exec();



                if (player.inventory.length <= 20) {

                    const itemToPush = Object.values(itemsObj).find(thing => thing.name === item[0]);
                    console.log(item[0], item[1]);

                    if(item[1]) {
                        const key = Object.values(itemsObj).find(thing => thing.name === item[1]);

                        const index = player.inventory.findIndex(item => item.name === key.name);

                        if (index === -1) {
                            io.to(socket.id).emit('errorMessage', `You need a ${item[1]} to get ${item[0]}`);
                            console.log("Key required but not in inventory:", key.name);
                            return;
                        }

                        player.inventory.splice(index, 1);

                        if(itemToPush.type === "soul"){
                            player.souls.push(itemToPush);
                            await Player.findOneAndUpdate({socket: socket.id}, {souls: player.souls}, {new: true});
                        } else {
                            player.inventory.push(itemToPush);
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                        }

                    } else {

                        if(itemToPush.type === "soul"){
                            player.souls.push(itemToPush);
                            await Player.findOneAndUpdate({socket: socket.id}, {souls: player.souls}, {new: true});
                        } else {
                            player.inventory.push(itemToPush);
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                        }
                    }

                    io.to(socket.id).emit('obtained', itemToPush);    
                    myPlayer[socket.id] = player;
                } else {
                    io.to(socket.id).emit('errorMessage', "You don't have space in your inventory");
                }

              }
              consume()
        });
        
        socket.on("enemyDrop", (item) => {

            async function consume() {

                const player = await Player.findOne({socket: socket.id}).exec();

                if (player.inventory.length <= 20) {
                    let itemToGive = itemsObj[item];
                    if (!itemToGive)return
                    player.inventory.push(itemToGive);
                    
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    myPlayer[socket.id] = player;    
                    
                    io.to(socket.id).emit('obtained', itemToGive);          
                }
                else {
                    io.to(socket.id).emit('inventoryFull');
                }
              }
              consume()
        });

        socket.on("buyItem", (item) => {
            async function consume() {
                
                const player = await Player.findOne({socket: socket.id}).exec();

                if (player.inventory.length <= 20) {                                             
            
                        myPlayer[socket.id] = player; 
                        let itemObj;     

                        if (myPlayer[socket.id].currency >= itemObj.value) {
                            myPlayer[socket.id].currency -= itemObj.value;
                            await Player.findOneAndUpdate({socket: socket.id}, {currency:  myPlayer[socket.id].currency}, {new: true});
    
                            player.inventory.push(itemObj);                                           
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                        }

                }
                
              };
              consume()
        });

        socket.on("unequip", (equipment) => {

            async function unequip() {

                if (equipment.type === "soul") {
                    const player = await Player.findOne({socket: socket.id}).exec();
    
                    // player.souls = [equipment];
                    player.armor.splice(equipment.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {armor: player.armor}, {new: true});
                    // await Player.findOneAndUpdate({socket: socket.id}, {souls: player.souls}, {new: true});
    
                    myPlayer[socket.id] = player;   
                } else if (equipment.type === "artifact") {
                    const player = await Player.findOne({socket: socket.id}).exec();
    
                    player.artifact.splice(0, 1);
                    player.inventory.push(equipment);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {artifact: player.artifact}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
    
                    myPlayer[socket.id] = player;   
                } else {
                    const player = await Player.findOne({socket: socket.id}).exec();

    
                    player.inventory.push(equipment);
                    player.weapon.splice(equipment.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {weapon: player.weapon}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});

    
                    myPlayer[socket.id] = player;      
                } 
                
              };
              unequip()
        })

        socket.on("toDelete", (arrayOfIndexes) => {
            async function deleteItems() {

                if (arrayOfIndexes.length !== 0) {
                    const player = await Player.findOne({socket: socket.id}).exec();
                    
                    let playerInventory =  player.inventory;
                    arrayOfIndexes.sort((a, b) => b - a);

                    arrayOfIndexes.forEach(index => {
                        playerInventory.splice(index, 1); 
                      });

                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: playerInventory}, {new: true});
    
                    myPlayer[socket.id] = player;      
                } 
              };
              deleteItems()
        })
        
        socket.on("giveItem", (item) => {
            async function deleteItems() {


            const player = await Player.findOne({socket: socket.id}).exec();
            
            player.inventory;
           
            if (item === "chestKey") {
                player.inventory.push(chestKey);
                io.to(socket.id).emit('obtained', chestKey);
            }
            if (item === "chestKeyRestfield") {
                player.inventory.push(chestKeyRestfield);
                io.to(socket.id).emit('obtained', chestKeyRestfield);
            }


            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});

            myPlayer[socket.id] = player;      
                
              };
              deleteItems()
        })

        socket.on("loginInfo", (info) => {
            const username = info.username;
            const password = info.password;
            const id = socket.id;
            const action = info.action;

            async function playerLogin() {
                const playerData = await Player.findOne({username: username}).exec();
    
                if (playerData && playerData.password === password) {
                    const newPlayerData = await Player.findOneAndUpdate({username: username}, {socket: id}, {new: true}).exec()  
                    usernames[socket.id] = username;  
                    myPlayer[socket.id] = newPlayerData; 
                    inventoryStore[socket.id] = myPlayer[socket.id];
                    let map = await World.findOne({areaName: newPlayerData.area}).exec();

                    

                    const loginAttempt = {
                        msg: "success",
                        map: map,
                        itemsObj
                    }
                    // await pushItem(runeBullets, socket)
                    // await pushItem(runeFireRate, socket)
                    // await pushItem(runeRange, socket)
                    //await pushItem(restfieldBlanket, socket)
                    //await pushItem(restfieldBlanket, socket)
                    // await pushItem(treeLeaf, socket)
                    //await pushItem(treeLeaf, socket)
                    // await pushItem(smallCommonMeat, socket)
                    // await pushItem(ballo, socket)
                    // await pushItem(sardin, socket)
                    //await pushItem(octopus, socket)
                    // await pushItem(bass, socket)
                    // await pushItem(reaperClothes, socket)
                    // await pushItem(blackVampiresClothes, socket)
                    // await pushItem(fishermanClothes, socket)
                    // await pushItem(tropicalHat, socket)
                    // await pushItem(skullHelmet, socket)
                    // await pushItem(stick, socket)
                    // await pushItem(stick, socket)
                    // await pushItem(stick, socket)
                    // await pushItem(chestKeyCommon, socket)
                    // await pushItem(arcaneGem2, socket)
                    // await pushItem(arcaneGem3, socket)
                    // await pushItem(arcaneRepeaterInv, socket)
                    // await pushItem(arcaneLancerInv, socket)
                    // await pushItem(arcaneStaffCommon, socket)
                    //await pushItem(arcaneStaffCommon, socket)

                    // await Player.findOneAndUpdate({socket: socket.id}, {souls: [restfieldSkeletonSoulInventory, ghostSoulInventory, restfieldZombieSoulInventory, redDemonSoulInventory, pinkDemonSoulInventory]}, {new: true});

                    // let item = {
                    //     type: "questItem",
                    //     name: "slimePoison",
                    //     value: 20
                    //     image: "./inventory/slimePotion.png",
                    // }
                    // let inventory = newPlayerData.inventory
                    // inventory.push(item);
                    // await Player.findOneAndUpdate({username: username}, {inventory: inventory}, {new: true}).exec()
                    // myPlayer[socket.id] = newPlayerData;


                    io.to(id).emit('loginAttempt', loginAttempt);
                    io.to(id).emit('removeKeyBlocker', "");


                } else if (playerData && playerData.password !== password) { 
                    const loginAttempt = "failed";
                    io.to(id).emit('loginAttempt', loginAttempt); 
                }             
            };
            async function playerCreate() {   
                const playerData = await Player.findOne({username: username}).exec();
                // await World.create({
                //     areaName: "Castle Side" , 
                //     // description: worldInfo.description ,
                //     // type: worldInfo.type ,
                //     // biome: worldInfo.biome ,
                //     // playerMade: worldInfo.playerMade ,
                //     playerPos: {x: 1000, y: 1000} ,
                //     colliders: [] ,
                //     enemies: [] ,
                //     objects: [[], [], []] ,
                // }, {new: true});
                
                if (!playerData) {
                    const newPlayerData = await Player.create({username: username, password: password, socket: id}, {new: true});
                    usernames[socket.id] = username;  
                    myPlayer[socket.id] = newPlayerData;

                    const loginAttempt = "success";
                    io.to(id).emit('loginAttempt', loginAttempt); 

                    await pushItem(chestKeyCommon, socket)

                    // await Player.findOneAndUpdate({socket: socket.id}, {souls: [restfieldZombieSoulInventory, redDemonSoulInventory, pinkDemonSoulInventory, vampiresSoulInventory]}, {new: true});
                    const playerData = await Player.findOne({username: username}).exec();

                    myPlayer[socket.id] = playerData;
                    

                } else if (playerData) { 
                    const loginAttempt = "existing";
                    io.to(id).emit('loginAttempt', loginAttempt); 
                }     
            };
            
            if (action === "login") {
                playerLogin();
            }
            else if (action === "create") {
                playerCreate();
            };
        });

        socket.on("saveWorld", async (worldInfo) => {
            const worldData = await World.findOne({areaName: worldInfo.areaName}).exec();

            if (worldData) {
                await World.findOneAndUpdate({areaName: worldInfo.areaName}, worldInfo, {new: true});
                console.log("world saved")
            } else {
                await World.create({
                    areaName: worldInfo.areaName , 
                    // description: worldInfo.description ,
                    // type: worldInfo.type ,
                    // biome: worldInfo.biome ,
                    // playerMade: worldInfo.playerMade ,
                    playerPos: worldInfo.playerPos ,
                    colliders: worldInfo.colliders ,
                    enemies: worldInfo.enemies ,
                    objects: worldInfo.objects ,
                }, {new: true});
            }

        })
        socket.on("updateWorld", async (data) => {
            try {
                await World.findOneAndUpdate(
                { areaName: data.title },
                {
                    description: data.desc,
                    privacy: data.privacy,
                    type: data.type,
                    colorBase: data.colorBase
                },
                { new: true }
                );

                io.to(socket.id).emit("updateWorldSuccess", data.title);
            } catch (error) {
                io.to(socket.id).emit("updateWorldError", "Could not update map");
                console.error(error);
            }
        });


        socket.on("createWorld", async (worldInfo) => {
            await World.create({
                areaName: worldInfo.title , 
                description: worldInfo.desc ,
                type: worldInfo.type ,
                colorBase: worldInfo.colorBase ,
                privacy: worldInfo.privacy ,
                // biome: worldInfo.biome ,
                // playerMade: worldInfo.playerMade ,
                playerPos: {x: 1000, y: 1000} ,
                colliders: [] ,
                enemies: [] ,
                objects: [[], [], []] ,
            }, {new: true});
            io.to(socket.id).emit('createWorldSuccesful', worldInfo.title);
        })

        socket.on("deleteWorld", async (mapName) => {
            try {
                const result = await World.findOneAndDelete({ areaName: mapName }).exec();

                if (result) {
                    io.to(socket.id).emit("errorMessage", "Map succesfully deleted")
                } else {
                    io.to(socket.id).emit("errorMessage", "Map not found")
                }
            } catch (err) {
                io.to(socket.id).emit("errorMessage", "Error deleting map")
            }
        });
       
        socket.on("placedObject", async (info) => {
            const layerKey = `objects.${info.currentSelectedObjLayer}`;
            const clientLayer = info.objects; // only the layer array sent from the client
        
            // Step 1: Get current data from DB
            const worldDoc = await World.findOne({ areaName: info.currentLand }).lean();
            const serverLayer = worldDoc.objects?.[info.currentSelectedObjLayer] || [];
        
            // Step 2: Build a Set of stringified existing server objects for comparison
            const serverSet = new Set(serverLayer.map(obj => JSON.stringify(obj)));
        
            // Step 3: Add only missing objects from clientLayer in the same order
            const mergedLayer = [...serverLayer];
        
            for (const obj of clientLayer) {
                const objStr = JSON.stringify(obj);
                if (!serverSet.has(objStr)) {
                    mergedLayer.push(obj);
                    serverSet.add(objStr); // prevent duplicates if client sent dupes
                }
            }
        
            // Step 4: Sort merged layer
            mergedLayer.sort((a, b) => {
                if (a.backgroundObj && !b.backgroundObj) return -1;
                if (!a.backgroundObj && b.backgroundObj) return 1;
                return a.y - b.y;
            });
        
            // Step 5: Save to DB
            await World.findOneAndUpdate(
                { areaName: info.currentLand },
                { $set: { [layerKey]: mergedLayer } },
                { new: true }
            );
        
            // Step 6: Broadcast to everyone except sender
            const worldData = await World.findOne({ areaName: info.currentLand }).exec();
            socket.broadcast.emit('updateMap', { currentSelectedObjLayer: info.currentSelectedObjLayer, object: info.object });
        });
         
        socket.on("deletedObject", async (info) => {
            const layerKey = `objects.${info.currentSelectedObjLayer}`;
        
            const update = {
                $pull: { [layerKey]: info.object }  // Remove the matching object
            };
        
            await World.findOneAndUpdate({ areaName: info.currentLand }, update, { new: true });
            const worldData = await World.findOne({ areaName: info.currentLand }).exec();
        
            socket.broadcast.emit('updateMap', { currentSelectedObjLayer: info.currentSelectedObjLayer, object: info.object, deleting: true });
        });  
        socket.on("deleteAllObj", async (info) => {
            console.log(info)
            let emptyAllLayer = [[],[],[]]
            await World.findOneAndUpdate({ areaName: info}, {objects: emptyAllLayer}, { new: true });

            socket.emit("updateMap", { deletingAll: true })
        })

        
        socket.on("setSpawn", async (info) => {
            await World.findOneAndUpdate({areaName: info[1]}, {playerPos: info[0]}, {new: true});
        })
        
        socket.on("requestChangeRoom", async (info) => {
            const newWorld = await World.findOne({areaName: info}).exec();
            if (!newWorld) return;

            async function roomChange() {
                for (const player of players) {
                    if (player.id === socket.id) {
                        player.room = newWorld.areaName
                        myPlayer[socket.id] = player;    
                        socket.join(newWorld.areaName);
                  }
                }   
                
              };
            roomChange()
            
            io.to(socket.id).emit('loadMap', newWorld);
        })

        socket.on("requestMapInfo", async (mapName) => {
            const newWorld = await World.findOne({areaName: mapName}).exec();
            if (!newWorld) return;
            
            io.to(socket.id).emit('requestMapInfoClient', newWorld);
        })
        
        socket.on("requestRooms", async (info) => {
            try {
                const worlds = await World.find({}, 'areaName');
        
                const roomNames = worlds.map(world => world.areaName);
        
                io.to(socket.id).emit("requestRoomsCompleted", roomNames);
            } catch (error) {

            }
        });   

        socket.on("loadEnemies", (_enemies) => {
            const newEnemy = {
                damage: 0,
                health: 3,
                width: 100,
                height: 100,
                img: "slime.png",
                speed: 2,
                spriteSheetAmt: 4,
                type: "slime",
                x: 2880,
                y: 3768,
                originX: 2880,
                originY: 3768,
                nextTarget: {x: 1100, y: 1100},
                nextTargetCount: 100,
                enabled: true,
                disabledTimer: 500,
            }

            // enemies.push(newEnemy)

            // enemies[socket.id] = enemies;
        })

        socket.on("weaponAngle", (weaponAngle) => {                    
            weaponAngleStore[socket.id] = weaponAngle;  
        });

        socket.on("chatMessage", (chatMessage) => {                    
            chatMessageStore[socket.id] = chatMessage; 
            
            for (const player of players) {
                if (player.id === socket.id) {
                    player.chatTimer = 200;                    
                }
            }         
        });
        
        socket.on("blockMovement", (blockMovement) => {                    
            blockMovementStore[socket.id] = blockMovement;  
        });

        socket.on("projectile", (angle) => {  
            const player = players.find(player => player.id === socket.id)                  
            projectiles.push({
                angle,
                x: player.x + 20,
                y: player.y + 50,
                timeLeft: 200,
                playerId: socket.id,
            }) 
        });
        
        socket.on("score", (score, land) => {  
            async function updateScore() {

                const player = await Player.findOne({socket: socket.id}).exec();
                const numericScorePlayer = score.includes(":")
                ? parseFloat(score.replace(":", "."))
                : parseFloat(score) || 0;

                let numericScoreOnline 
                
                if (land === "mushroomForest") {
                    numericScoreOnline = player.scores[0].mushroomTrial.toString().includes(":")
                    ? parseFloat(player.scores[0].mushroomTrial.replace(":", "."))
                    : parseFloat( player.scores[0].mushroomTrial) || 0;
                }
                if (land === "restfieldTrial") {
                    numericScoreOnline = player.scores[0].restfieldTrial.toString().includes(":")
                    ? parseFloat(player.scores[0].restfieldTrial.replace(":", "."))
                    : parseFloat( player.scores[0].restfieldTrial) || 0;
                }

                // console.log(numericScoreOnline, numericScorePlayer) 

                if (numericScoreOnline > numericScorePlayer || player.scores[0].mushroomTrial < 1) {
                    if (land === "mushroomForest") {
                        player.scores[0].mushroomTrial = score;   
                    }
                    await Player.findOneAndUpdate({socket: socket.id}, {scores: player.scores}, {new: true});
                    myPlayer[socket.id] = player;             
                }
                if (numericScoreOnline > numericScorePlayer || player.scores[0].restfieldTrial < 1) {
                    if (land === "restfieldTrial") {
                        player.scores[0].restfieldTrial = score;   
                    }
                    await Player.findOneAndUpdate({socket: socket.id}, {scores: player.scores}, {new: true});
                    myPlayer[socket.id] = player;             
                }
            }
            updateScore()
        });
        
        socket.on("getScores", (land) => {
            async function getScores() {
              try {
                // Fetch all players
                const players = await Player.find().exec();
          
                // Process the scores
                let scores 
                if (land === "mushroomForest") {
                    scores = players
                      .filter(player => player.username && player.scores && player.scores[0]) // Ensure username and scores exist
                      .map(player => `${player.username}: ${player.scores[0].mushroomTrial}`); // Format the score
                }
                if (land === "restfieldTrial") {
                    scores = players
                      .filter(player => player.username && player.scores && player.scores[0]) // Ensure username and scores exist
                      .map(player => `${player.username}: ${player.scores[0].restfieldTrial}`); // Format the score
                }
          
                // Emit the formatted scores array back to the client
                socket.emit("scoresData", scores);
              } catch (error) {
                console.error("Error fetching scores:", error);
              }
            }
          
            getScores();
          });

        socket.on("disconnect", () => {
            playerToDelete = players.find((player) => player.id !== socket.id);
            players = players.filter((player) => player.id !== socket.id);
            io.emit('disconnectedPlayer', playerToDelete);
        })
    });
    
    app.use(express.static( 'public' ));

    const PORT  = process.env.PORT || 3000;

    httpServer.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    
    let lastUpdate = Date.now();
    setInterval(() => {
        const now = Date.now();
        const delta = now - lastUpdate;
        //tick(delta);
        lastUpdate = now;        
    }, 1000 / tickRate);
}

function slimeGetRandomCoords(originX, originY) {
    const minX = 2880 - 300;
  const maxX = 2880 + 300;
  const minY = 3768 - 100;
  const maxY = 3768 + 100;
    let newCoords = {
        x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
        y: Math.floor(Math.random() * (minY - maxY + 1)) + minY,
    }
    return newCoords;
}

main();

async function pushItem(item, socket) {
    const player = await Player.findOne({socket: socket.id}).exec();
    player.inventory.push(item);                                           
    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
    myPlayer[socket.id].inventory = player.inventory
}


// ITEMS

const trashCrafting = {
    type: "trash",
    name: "trashCrafting",
    level: 1,
    value: 5,
    rarity: "common",
    image: "./inventory/trashCrafting.png",
};
const arcaneGem = {
    type: "gem",
    name: "arcaneGem",
    level: 1,
    value: 5,
    rarity: "common",
    image: "./inventory/arcaneGem.png",
};
const arcaneGem2 = {
    type: "gem",
    name: "arcaneGem2",
    level: 2,
    value: 10,
    rarity: "uncommon",
    image: "./inventory/arcaneGem2.png",
};
const arcaneGem3 = {
    type: "gem",
    name: "arcaneGem3",
    level: 3,
    value: 15,
    rarity: "rare",
    image: "./inventory/arcaneGem3.png",
};
const arcaneGem4 = {
    type: "gem",
    name: "arcaneGem4",
    level: 4,
    value: 20,
    rarity: "rare",
    image: "./inventory/arcaneGem4.png",
};
const arcaneGem5 = {
    type: "gem",
    name: "arcaneGem5",
    level: 5,
    value: 50,
    rarity: "rare",
    image: "./inventory/arcaneGem5.png",
};
const solarGem = {
    type: "gem",
    name: "solarGem",
    level: 1,
    value: 5,
    rarity: "common",
    image: "./inventory/solarGem.png",
};
const nuclearGem = {
    type: "gem",
    name: "nuclearGem",
    level: 5,
    value: 5,
    rarity: "common",
    image: "./inventory/nuclearGem.png",
};
const commonFishStick = {
    type: "food",
    name: "commonFishStick",
    level: 1,
    value: 5,
    power: 1,
    rarity: "common",
    image: "./inventory/commonFishStick.png",
};
const uncommonFishStick = {
    type: "food",
    name: "uncommonFishStick",
    level: 2,
    value: 5,
    power: 2,
    rarity: "uncommon",
    image: "./inventory/uncommonFishStick.png",
};
const rareFishStick = {
    type: "food",
    name: "rareFishStick",
    level: 3,
    value: 5,
    power: 4,
    rarity: "rare",
    image: "./inventory/rareFishStick.gif",
};
const arcaneStaffCommon = {
    type: "weapon",
    name: "arcaneStaffCommon",
    level: 1,
    value: 30,
    rarity: "common",
    image: "./inventory/arcaneStaffCommon.png",
    enchanted: false,
    charges: 1,

    durability: 50,
    damage: 1,
    bullets: 1,
    speed: 1,
    range: 20,
    fireRate: 10,
    special: "none"
};
const arcaneRepeaterInv = {
    type: "weapon",
    name: "arcaneRepeaterInv",
    level: 3,
    value: 30,
    rarity: "common",
    image: "./inventory/arcaneRepeaterInv.png",
    enchanted: false,
    charges: 3,

    durability: 50,
    damage: 0.5,
    bullets: 3,
    speed: 1,
    range: 10,
    fireRate: 10,
    special: "none"
};
const arcaneLancerInv = {
    type: "weapon",
    name: "arcaneLancerInv",
    level: 2,
    value: 60,
    rarity: "common",
    image: "./inventory/arcaneLancerInv.gif",
    enchanted: false,
    charges: 2,

    durability: 50,
    damage: 3,
    bullets: 1,
    speed: 2,
    range: 30,
    fireRate: 30,
    special: "none"
    
};
const solarStaffCommon = {
    type: "weapon",
    name: "solarStaffCommon",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/solarStaffCommon.png",
};
const nuclearStaffCommon = {
    type: "weapon",
    name: "nuclearStaffCommon",
    level: 5,
    value: 50,
    rarity: "common",
    image: "./inventory/nuclearStaffCommon.png",
};
const stick = {
    type: "stick",
    name: "stick",
    level: 1,
    value: 2,
    rarity: "common",
    image: "./inventory/stick.png",
};
const willowStick = {
    type: "stick",
    name: "willowStick",
    level: 1,
    value: 2,
    rarity: "rare",
    image: "./inventory/willowStick.png",
};
const chestKey = {
    type: "key",
    name: "chestKey",
    level: 1,
    value: 30,
    rarity: "rare",
    image: "./inventory/chestKey.png",
};
const chestKeyCommon = {
    type: "key",
    name: "chestKeyCommon",
    level: 1,
    value: 30,
    rarity: "rare",
    image: "./inventory/chestKeyCommon.png",
};
const chestKeyRestfield = {
    type: "key",
    name: "chestKeyRestfield",
    level: 1,
    value: 30,
    rarity: "rare",
    image: "./inventory/chestKeyRestfield.png",
};

const low = {
    type: "fish",
    name: "low",
    level: 1,
    zone: "solar",
    xp: 5,
    value: 4,
    rarity: "rare",
    image: "./inventory/low.png",
};
const sardine = {
    type: "fish",
    name: "sardine",
    level: 5,
    zone: "solar",
    xp: 10,
    value: 1,
    rarity: "common",
    image: "./inventory/sarding.png",
};
const nemi = {
    type: "fish",
    name: "nemi",
    level: 7,
    zone: "solar",
    xp: 15,
    value: 4,
    rarity: "rare",
    image: "./inventory/nemi.png",
};
const crab = {
    type: "fish",
    name: "crab",
    level: 10,
    zone: "ocean",
    xp: 20,
    value: 4,
    rarity: "rare",
    image: "./inventory/crab.png",
};
const hanami = {
    type: "fish",
    name: "hanami",
    level: 12,
    zone: "solar",
    xp: 25,
    value: 4,
    rarity: "rare",
    image: "./inventory/hanami.png",
};
const willy = {
    type: "fish",
    name: "willy",
    level: 17,
    zone: "solar",
    xp: 30,
    value: 4,
    rarity: "rare",
    image: "./inventory/willy.png",
};
const cork = {
    type: "fish",
    name: "cork",
    level: 17,
    zone: "solar",
    xp: 35,
    value: 4,
    rarity: "rare",
    image: "./inventory/willy.png",
};
const bass = {
    type: "fish",
    name: "bass",
    level: 25,
    zone: "solar",
    xp: 40,
    value: 3,
    rarity: "rare",
    image: "./inventory/bass.png",
};
const barracuda = {
    type: "fish",
    name: "barracuda",
    level: 30,
    zone: "solar",
    xp: 50,
    value: 4,
    rarity: "rare",
    image: "./inventory/barracuda.png",
};
const ballo = {
     type: "fish",
     name: "ballo",
     level: 34,
     zone: "solar",
     xp: 55,
     value: 2,
     rarity: "uncommon",
     image: "./inventory/ballo.jpg",
};
const bloom = {
    type: "fish",
    name: "bloom",
    level: 37,
    zone: "solar",
    xp: 60,
    value: 4,
    rarity: "rare",
    image: "./inventory/bloom.png",
};
const bulbber = {
    type: "fish",
    name: "bulbber",
    level: 40,
    zone: "solar",
    xp: 65,
    value: 4,
    rarity: "rare",
    image: "./inventory/bulbber.png",
};
const octopus = {
    type: "fish",
    name: "octopus",
    level: 47,
    zone: "solar",
    xp: 70,
    value: 4,
    rarity: "rare",
    image: "./inventory/octopus.png",
};
const frostplum = {
    type: "fish",
    name: "frostplum",
    level: 50,
    zone: "solar",
    xp: 75,
    value: 4,
    rarity: "rare",
    image: "./inventory/frostplum.png",
};
const reki = {
    type: "fish",
    name: "reki",
    level: 55,
    zone: "solar",
    xp: 80,
    value: 4,
    rarity: "rare",
    image: "./inventory/reki.png",
};
const ray = {
    type: "fish",
    name: "ray",
    level: 57,
    zone: "solar",
    xp: 90,
    value: 4,
    rarity: "rare",
    image: "./inventory/ray.png",
};
const burpy = {
    type: "fish",
    name: "burpy",
    level: 60,
    zone: "solar",
    xp: 95,
    value: 4,
    rarity: "rare",
    image: "./inventory/burpy.png",
};
const cody = {
    type: "fish",
    name: "cody",
    level: 67,
    zone: "solar",
    xp: 100,
    value: 4,
    rarity: "rare",
    image: "./inventory/cody.png",
};
const minrow = {
    type: "fish",
    name: "minrow",
    level: 75,
    zone: "solar",
    xp: 105,
    value: 4,
    rarity: "rare",
    image: "./inventory/minrow.png",
};

const fishBones = {
    type: "fish",
    name: "fishBones",
    level: 1,
    zone: "solar",
    xp: 5,
    value: 4,
    rarity: "rare",
    image: "./inventory/fishBones.png",
};


const treeLeaf = {
    type: "leaf",
    name: "treeLeaf",
    level: 1,
    value: 4,
    rarity: "rare",
    image: "./inventory/treeLeaf.png",
};
const miniMushroom = {
    type: "quest",
    name: "miniMushroom",
    level: 2,
    value: 4,
    rarity: "rare",
    image: "./inventory/miniMushroom.png",
};
const bone = {
    type: "material",
    name: "bone",
    level: 3,
    value: 4,
    rarity: "rare",
    image: "./inventory/bone.png",
};
const smallCommonMeat = {
    type: "meat",
    name: "smallCommonMeat",
    level: 1,
    value: 4,
    rarity: "rare",
    image: "./inventory/smallCommonMeat.png",
};
const slimeGuts = {
    type: "quest",
    name: "slimeGuts",
    level: 1,
    value: 4,
    rarity: "rare",
    image: "./inventory/slimeGuts.png",
};
 const restfieldBlanket = {
    type: "material",
    name: "restfieldBlanket",
    level: 3,
    value: 4,
    rarity: "rare",
    image: "./inventory/restfieldBlanket.png",
};
const runeBullets = {
    type: "rune",
    name: "runeBullets",
    level: 3,
    value: 4,
    code: "054231",
    rarity: "rare",
    image: "./inventory/runeBullets.png",
};
const runeFireRate = {
    type: "rune",
    name: "runeFireRate",
    level: 2,
    value: 4,
    code: "502341",
    rarity: "rare",
    image: "./inventory/runeFireRate.png",
};
const runeRange = {
    type: "rune",
    name: "runeRange",
    level: 1,
    value: 4,
    code: "203145",
    rarity: "rare",
    image: "./inventory/runeRange.png",
};

//food
const commonPlate = {
    type: "food",
    name: "commonPlate",
    level: 3,
    value: 5,
    power: 1,
    rarity: "rare",
    image: "./inventory/commonPlate.png",
};
const mediumPlate = {
    type: "food",
    name: "mediumPlate",
    level: 3,
    value: 5,
    power: 2,
    rarity: "rare",
    image: "./inventory/mediumPlate.png",
};
const rarePlate = {
    type: "food",
    name: "rarePlate",
    level: 3,
    value: 5,
    power: 4,
    rarity: "rare",
    image: "./inventory/rarePlate.gif",
};

const commonSushiPlate = {
    type: "food",
    name: "commonSushiPlate",
    level: 3,
    value: 5,
    power: 1,
    rarity: "rare",
    image: "./inventory/commonSushiPlate.png",
};
const mediumSushiPlate = {
    type: "food",
    name: "mediumSushiPlate",
    level: 3,
    value: 5,
    power: 2,
    rarity: "rare",
    image: "./inventory/mediumSushiPlate.png",
};
const rareSushiPlate = {
    type: "food",
    name: "rareSushiPlate",
    level: 3,
    value: 5,
    power: 4,
    rarity: "rare",
    image: "./inventory/rareSushiPlate.png",
};

const commonFish = {
    type: "food",
    name: "commonFish",
    level: 3,
    value: 5,
    power: 1,
    rarity: "rare",
    image: "./inventory/commonFish.png",
};
const uncommonFish = {
    type: "food",
    name: "uncommonFish",
    level: 3,
    value: 5,
    power: 2,
    rarity: "rare",
    image: "./inventory/uncommonFish.png",
};
const rareFish = {
    type: "food",
    name: "rareFish",
    level: 3,
    value: 5,
    power: 3,
    rarity: "rare",
    image: "./inventory/rareFish.gif",
};
const octopusPlate = {
    type: "food",
    name: "octopusPlate",
    level: 3,
    value: 5,
    power: 4,
    rarity: "rare",
    image: "./inventory/octopusPlate.gif",
};

const mediumMeatPlate = {
    type: "food",
    name: "mediumMeatPlate",
    level: 3,
    value: 5,
    power: 1,
    rarity: "rare",
    image: "./inventory/mediumMeatPlate.png",
};
const commonMeatPlate = {
    type: "food",
    name: "commonMeatPlate",
    level: 3,
    value: 5,
    power: 1,
    rarity: "rare",
    image: "./inventory/commonMeatPlate.png",
};
const trashPlate = {
    type: "food",
    name: "trashPlate",
    level: 1,
    value: 5,
    power: 0,
    rarity: "rare",
    image: "./inventory/trashPlate.png",
};




// CLOTHES

const redMushroomlInventory = {
    type: "artifact",
    name: "redMushroomlInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/redMushroomlInventory.png",
};
const mushroomClothesOrange = {
    type: "artifact",
    name: "rorangeMushroomlInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/orangeMushroomlInventory.png",
};
const tropicalHatInventory = {
    type: "artifact",
    name: "tropicalHatInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/tropicalHatInventory.png",
};
const skullHelmet = {
    type: "artifact",
    name: "skullInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/skullInventory.png",
};
const reaperInventory = {
    type: "artifact",
    name: "reaperInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/reaperInventory.png",
};
const blackVampiresClothes = {
    type: "artifact",
    name: "vampiresInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/vampiresInventory.png",
};
const fishermanClothes = {
    type: "artifact",
    name: "fishrmanInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/fishrmanInventory.png",
};
const romanHelmet = {
    type: "artifact",
    name: "romanHelmetInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/romanHelmetInventory.png",
};
const restfieldGhostClothes = {
    type: "artifact",
    name: "restfieldGhostClothes",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/restfieldGhostInventory.png",
};
const restfieldZombieInventory = {
    type: "artifact",
    name: "restfieldZombieInventory",
    level: 1,
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/restfieldZombieInventory.png",
};

// SOULS

const frogSoulInventory = {
    name: "frogSoulInventory",
    image: "./inventory/soulInventory/frogSoulInventory.png",
    type: "soul",
}
const ghostSoulInventory = {
    name: "ghostSoulInventory",
    image: "./inventory/soulInventory/ghostSoulInventory.png",
    type: "soul",
}
const reaperSoulInventory = {
    name: "reaperSoulInventory",
    image: "./inventory/soulInventory/reaperSoulInventory.png",
    type: "soul",
}
const arcanyDemonSoulInventory = {
    name: "arcanyDemonSoulInventory",
    image: "./inventory/soulInventory/arcanyDemonSoulInventory.png",
    type: "soul",
}
const pinkDemonSoulInventory = {
    name: "pinkDemonSoulInventory",
    image: "./inventory/soulInventory/pinkDemonSoulInventory.png",
    type: "soul",
}
const redDemonSoulInventory = {
    name: "redDemonSoulInventory",
    image: "./inventory/soulInventory/redDemonSoulInventory.png",
    type: "soul",
}
const vampiresSoulInventory = {
    name: "vampiresSoulInventory",
    image: "./inventory/soulInventory/vampiresSoulInventory.png",
    type: "soul",
}
const restfieldSkeletonSoulInventory = {
    name: "restfieldSkeletonSoulInventory",
    image: "./inventory/soulInventory/restfieldSkeletonSoulInventory.png",
    type: "soul",
}
const restfieldZombieSoulInventory = {
    name: "restfieldZombieSoulInventory",
    image: "./inventory/soulInventory/restfieldZombieSoulInventory.png",
    type: "soul",
}

const itemsObj = {
    runeBullets,
    smallCommonMeat,
    runeFireRate,
    runeRange,
    arcaneGem,
    arcaneGem2,
    arcaneGem3,
    arcaneGem4,
    arcaneGem5,
    solarGem,
    nuclearGem,
    commonFishStick,
    uncommonFishStick,
    rareFishStick,
    commonFish,
    arcaneStaffCommon,
    arcaneRepeaterInv,
    arcaneLancerInv,
    solarStaffCommon,
    nuclearStaffCommon,
    uncommonFish,
    rareFish,
    stick,
    willowStick,
    chestKey,
    chestKeyRestfield,
    chestKeyCommon,
    sardine,
    ballo,
    bass,
    octopus,
    nemi, 
    hanami,
    fishBones,
    low,
    willy,
    cork,
    barracuda,
    bloom,
    bulbber,
    frostplum,
    reki,
    ray,
    burpy,
    cody,
    minrow,
    redMushroomlInventory,
    mushroomClothesOrange,
    tropicalHatInventory,
    skullHelmet,
    reaperInventory,
    blackVampiresClothes,
    fishermanClothes,
    romanHelmet,
    frogSoulInventory,
    ghostSoulInventory,
    reaperSoulInventory,
    arcanyDemonSoulInventory,
    pinkDemonSoulInventory,
    redDemonSoulInventory,
    vampiresSoulInventory,
    restfieldSkeletonSoulInventory,
    restfieldGhostClothes,
    miniMushroom,
    treeLeaf,
    bone,
    restfieldBlanket,
    restfieldZombieSoulInventory,
    restfieldZombieInventory,
    slimeGuts,
    commonPlate,
    mediumPlate,
    rarePlate,
    commonSushiPlate,
    mediumSushiPlate,
    rareSushiPlate,
    octopusPlate,
    mediumMeatPlate,
    commonMeatPlate,
    trashPlate,
    trashCrafting
};


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
        const anim = animPlayerStore[player.id];
        const lastLooked = lastLookPlayerStore[player.id];
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

                player.weapon = clientPlayer.weapon;
                player.armor = clientPlayer.armor;
                player.artifact = clientPlayer.artifact;

                player.fishingLevel = clientPlayer.fishing;
                player.cookingLevel = clientPlayer.cooking;
                player.enchantingLevel = clientPlayer.explore;
                player.combatLevel = clientPlayer.combat;
                player.questsOngoing = clientPlayer.questsOngoing;
                player.questsCompleted = clientPlayer.questsCompleted;
            }
        
        
        if (player.chatTimer > 1) {

            player.chatTimer -= 20;

        } else {

            chatMessageStore[player.id] = "none";
        }

        // if (blockMovement === false) {
        //     if (inputs.up) {
        //         player.y -= speed;
        //     } else if (inputs.down) {
        //         player.y += speed;
        //     }
    
        //     if (inputs.left) {
        //         player.x -= speed;
        //     } else if (inputs.right) {
        //         player.x += speed;
        //     }
        // }      


        player.anim = anim;
        player.lastLooked = lastLooked;
        player.weaponAngle = weaponAngle;
        player.chatMessage = chatMessage;
        player.username = username;

        if (player.invincible) {
            player.iFrames--;
            if (player.iFrames <= 0) {
                player.iFrames = 75;
                player.invincible = false;
            }
        }

        io.emit("player", player);
    }

    for (const projectile of projectiles) {

        projectile.x += Math.cos(projectile.angle) * projectileSpeed;
        projectile.y += Math.sin(projectile.angle) * projectileSpeed;
        projectile.timeLeft -= 5;

        for (const player of players) {
            const username = usernames[player.id]; 

            if (player.id === projectile.playerId) continue;
            const distance = Math.sqrt(
                (player.x + 15 - projectile.x) ** 2 + (player.y + 15 - projectile.y) ** 2
                );
                if (distance <= 15) {
                    
                    if (player.health > 1) {
                        player.health -= 1;
                        updateHealth(username, player.health, player.id);
                    } else {
                        player.x = 1280;
                        player.y = 1220;
                        player.health = 3;
                        updateHealth(username, player.health, player.id);
                    }
                    projectile.timeLeft = -1;
                    break;
                }
        }

        for (const enemy of enemies)
        {
            const distance = Math.sqrt(
                (enemy.x + 20 - projectile.x) ** 2 + (enemy.y + 20 - projectile.y) ** 2
                );
                if (distance <= 20) {
                    
                    if (enemy.health > 1) {
                        enemy.health -= 1;
                        updateEnemyHealth(enemy);
                    } else {
                        enemy.enabled = false;
                        enemy.health = 4;
                        updateEnemyHealth(enemy);
                    }
                    projectile.timeLeft = -1;
                    break;
                }
        }
    }

    projectiles = projectiles.filter((projectile) => projectile.timeLeft > 0);

    // io.to("islandOne").emit("enemies", enemies);
    // io.to("baseMap1").emit('players', players);
    // io.to("baseMap").emit("projectiles", projectiles);
}

setInterval(tick, 600);

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
        socket.join("lobby");
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
            room: "lobby",

            health: 3,
            fishingLevel: 0,
            cookingLevel: 0,
            enchantingLevel: 0,
            combatLevel: 0,
            questsOngoing: [],
            questsCompleted: [],
            scores: [
                {
                    mushroomTrial: 0,
                }
            ],

            inventory: [],
            weapon: [],
            armor: [],
            artifact: [],
            souls: [],
            artifacts: [],

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

        socket.on("playerLocation", (playerLocation) => {
            async function locate() {
            for (const player of players) {
                if (player.id === socket.id) {
                      player.x = playerLocation[0];
                      player.y = playerLocation[1];
                    //   console.log("recieving:", playerLocation[0])
                }
            }
            }
            locate()
        })

        socket.on("fishing", () => {
                 

            const number = Math.floor(Math.random() * (100 - 1 + 1) + 1);

            async function fishing() {

                const player = await Player.findOne({socket: socket.id}).exec();

                let fishingLevelNum = Math.trunc(player.fishing / 1000);
                
                if (player.inventory.length <= 21) {

                    //Level 1

                    if (fishingLevelNum < 1) {

                        if (number < 80) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        }
                    }

                    //Level 2

                    else if (fishingLevelNum < 3) {

                        if (number < 80) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 
                        
                        else if (number < 90) {
                            player.inventory.push(ballo);
                            io.to(socket.id).emit('obtained', ballo);
                            const fishingLevel = player.fishing + 500;
                            player.fishing += 500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 
                        
                        else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        }
                    }

                    //Level 3

                    else if (fishingLevelNum < 6) {

                        if (number < 50) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 
                        
                        else if (number < 75) {
                            player.inventory.push(ballo);
                            io.to(socket.id).emit('obtained', ballo);
                            const fishingLevel = player.fishing + 500;
                            player.fishing += 500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 

                        else if (number < 85) {
                            player.inventory.push(bass);
                            io.to(socket.id).emit('obtained', bass);
                            const fishingLevel = player.fishing + 1000;
                            player.fishing += 1000;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 
                        
                        else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        }
                    }

                    //Level 4

                    else if (fishingLevelNum < 12 || fishingLevelNum >= 12) {

                        if (number < 20) {
                            player.inventory.push(sardin);
                            io.to(socket.id).emit('obtained', sardin);
                            const fishingLevel = player.fishing + 100;
                            player.fishing += 100;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 
                        
                        else if (number < 50) {
                            player.inventory.push(ballo);
                            io.to(socket.id).emit('obtained', ballo);
                            const fishingLevel = player.fishing + 500;
                            player.fishing += 500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 

                        else if (number < 87) {
                            player.inventory.push(bass);
                            io.to(socket.id).emit('obtained', bass);
                            const fishingLevel = player.fishing + 1000;
                            player.fishing += 1000;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 

                        else if (number < 97) {
                            player.inventory.push(octopus);
                            io.to(socket.id).emit('obtained', octopus);
                            const fishingLevel = player.fishing + 1500;
                            player.fishing += 1500;
                            await Player.findOneAndUpdate({socket: socket.id}, {fishing: fishingLevel}, {new: true}).exec();
                            await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true}).exec();
                        } 
                        
                        else {
                            player.inventory.push(stick);
                            io.to(socket.id).emit('obtained', stick);
                        }
                    }

                    myPlayer[socket.id] = player; 
    
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
                    await Player.findOneAndUpdate({socket: socket.id}, {weapon:  arrayWeapon}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory:   player.inventory}, {new: true});
    
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
                const exploringLevelPlus = player.explore + 500;
                                           
                await Player.findOneAndUpdate({socket: socket.id}, {explore: exploringLevelPlus}, {new: true});
        
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
                    let arrayOfRarity = []

                    for (const item of items) {
                        if (!arrayOfTypes.includes(item.type)) {
                            arrayOfTypes.push(item.type)
                        }
                        if (!arrayOfRarity.includes(item.rarity)) {
                            arrayOfRarity.push(item.rarity)
                        }
                    }

                    let plate;
                    let xp = 0;

                    if (arrayOfTypes.includes("fish") && arrayOfTypes.includes("stick")) {
                        if (arrayOfRarity.includes("rare")) {
                            plate = rareFishStick;
                            xp = 500;
                        }
                        else if (arrayOfRarity.includes("uncommon")) {
                            plate = uncommonFishStick;
                            xp = 200;
                        }
                        else if (arrayOfRarity.includes("common")) {
                            plate = commonFishStick;
                            xp = 100;
                        }
                    }
                    else if (arrayOfTypes.includes("fish")) {
                        if (arrayOfRarity.includes("rare")) {
                            plate = rareFish;
                            xp = 500;
                        }
                        else if (arrayOfRarity.includes("uncommon")) {
                            plate = uncommonFish;
                            xp = 200;
                        }
                        else if (arrayOfRarity.includes("common")) {
                            plate = commonFish;
                            xp = 100;
                        }
                    }

                    player.inventory.push(plate);        
                    player.cooking = player.cooking + xp;                                 
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {cooking: player.cooking}, {new: true});
                    io.to(socket.id).emit('obtained', plate);
                    myPlayer[socket.id] = player; 

                    console.log(arrayOfTypes)
                
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

                    if (arrayOfNames.includes("solarGem")) {

                        if (arrayOfRarity.includes("common")) {
                            staff = solarStaffCommon;
                        }
                        
                    }
                    else if (arrayOfNames.includes("arcaneGem")) {

                        if (arrayOfRarity.includes("common")) {
                            staff = arcaneStaffCommon;
                        }
                        
                    }
                    else if (arrayOfNames.includes("nuclearGem")) {

                        if (arrayOfRarity.includes("common")) {
                            staff = nuclearStaffCommon;
                        }
                        
                    }
                    

                    player.inventory.push(staff);                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    io.to(socket.id).emit('obtained', staff);
                
              };
              cooking()
        });

        socket.on("enemyKilled", (xp) => {

            async function expObtained() {
                const player = await Player.findOne({socket: socket.id}).exec();                                           
        
                    myPlayer[socket.id] = player;   
                    player.combat = player.combat + xp;

                    await Player.findOneAndUpdate({socket: socket.id}, {combat: player.combat}, {new: true});
                                   
                
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
                    console.log(myPlayer[socket.id].currency)
                }

                const index = questsOngoing.findIndex(obj => obj.title === quest.name);

                let finishedQuest = questsOngoing.splice(index, 1);
                questsCompleted.push(finishedQuest[0])

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

                if (player.inventory.length <= 21) {
                    
                    if (item === "stick") {

                        if (number < 80) {
                            player.inventory.push(stick);  
                            io.to(socket.id).emit('obtained', stick);
                        } else {
                            player.inventory.push(willowStick);                                           
                            io.to(socket.id).emit('obtained', willowStick);
                            
                        }
                    }

                    if (item === "gem") {

                        if (number < 80) {
                            player.inventory.push(solarGem);  
                            io.to(socket.id).emit('obtained', solarGem);
                        } else if (number >= 80 && number <= 98) {
                            player.inventory.push(arcaneGem);                                           
                            io.to(socket.id).emit('obtained', arcaneGem);
                        } else {
                            player.inventory.push(nuclearGem);                                           
                            io.to(socket.id).emit('obtained', nuclearGem);
                        }
                    }
                    console.log(item)
                    if (item === "mushroomTrial") {
                        const key = player.inventory.find(item => item.name === "chestKey");
                        player.inventory.splice(player.inventory.indexOf(key), 1);

                        if (number < 30) {
                            player.inventory.push(tropicalHat);  
                            io.to(socket.id).emit('obtained', tropicalHat);
                        } 
                        else if (number >= 30 && number < 60) {
                            player.inventory.push(arcaneStaffCommon);                                           
                            io.to(socket.id).emit('obtained', arcaneStaffCommon);
                        } 
                        else if (number >= 60 && number < 80) {
                            player.inventory.push(octopus);                                           
                            io.to(socket.id).emit('obtained', octopus);
                        } 
                        else if (number >= 80 && number < 90) {
                            player.inventory.push(mushroomClothesRed);                                           
                            io.to(socket.id).emit('obtained', mushroomClothesRed);
                        } 
                        else {
                            player.inventory.push(arcaneRepeater);                                           
                            io.to(socket.id).emit('obtained', arcaneRepeater);
                        }
                    }
                    
                    await Player.findOneAndUpdate({socket: socket.id}, {inventory: player.inventory}, {new: true});
                    myPlayer[socket.id] = player;      
                            

                }
              }
              consume()
        });

        socket.on("buyItem", (item) => {
            async function consume() {
                
                const player = await Player.findOne({socket: socket.id}).exec();

                if (player.inventory.length <= 8) {                                             
            
                        myPlayer[socket.id] = player; 
                        let itemObj;     
                        
                        if (item === "stick") {
                            itemObj = {
                                type: "stick",
                                name: "stick",
                                value: 2,
                                image: "./inventory/stick.png",
                            };                           
                        }     

                        if (item === "melrodSeed") {
                            itemObj = {
                                type: "seed",
                                name: "melrodSeed",
                                value: 1,
                                image: "./inventory/melrodSeed.png",
                            };
                        }     

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
    
                    player.souls = [equipment];
                    player.armor.splice(equipment.index, 1);
                                           
                    await Player.findOneAndUpdate({socket: socket.id}, {armor: player.armor}, {new: true});
                    await Player.findOneAndUpdate({socket: socket.id}, {souls: player.souls}, {new: true});
    
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

                    console.log("after", player.inventory)
    
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

                    

                    const loginAttempt = "success";
                    //pushItem(mushroomClothesRed, socket)
                    //pushItem(mushroomClothesOrange, socket)
                    //pushItem(reaperClothes, socket)
                    //pushItem(blackVampiresClothes, socket)
                    //pushItem(fishermanClothes, socket)
                    //pushItem(tropicalHat, socket)
                    //pushItem(romanHelmet, socket)
                    //pushItem(skullHelmet, socket)
                    //pushItem(restfieldGhostClothes, socket)
                    pushItem(arcaneRepeater, socket)

                    await Player.findOneAndUpdate({socket: socket.id}, {souls: [frogSkin, ghostSkin, reaperSkin, vampiresSkin, redDemon, pinkDemon, arcanyDemon, restfieldSkeletonSkin]}, {new: true});

                    // let item = {
                    //     type: "questItem",
                    //     name: "slimePoison",
                    //     value: 20,
                    //     image: "./inventory/slimePotion.png",
                    // }
                    // let inventory = newPlayerData.inventory
                    // inventory.push(item);
                    // await Player.findOneAndUpdate({username: username}, {inventory: inventory}, {new: true}).exec()
                    // myPlayer[socket.id] = newPlayerData;


                    io.to(id).emit('loginAttempt', loginAttempt);


                } else if (playerData && playerData.password !== password) { 
                    const loginAttempt = "failed";
                    io.to(id).emit('loginAttempt', loginAttempt); 
                }             
            };
            async function playerCreate() {   
                const playerData = await Player.findOne({username: username}).exec();
                
                if (!playerData) {
                    const newPlayerData = await Player.create({username: username, password: password, socket: id}, {new: true});
                    usernames[socket.id] = username;  
                    myPlayer[socket.id] = newPlayerData;

                    const loginAttempt = "success";
                    io.to(id).emit('loginAttempt', loginAttempt); 

                    // await Player.findOneAndUpdate({socket: socket.id}, {souls: [frogSkin, ghostSkin, reaperSkin]}, {new: true});
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
    
        socket.on("inputs", (inputs) => {
            inputsMap[socket.id] = inputs;
        });

        socket.on("animPlayer", (animPlayerSocket) => {
            animPlayerStore[socket.id] = animPlayerSocket;            
        });

        socket.on("lastLookPlayer", (lastLookPlayer) => {                    
            lastLookPlayerStore[socket.id] = lastLookPlayer;  
        });

        socket.on("weaponAngle", (weaponAngle) => {                    
            weaponAngleStore[socket.id] = weaponAngle;  
        });

        socket.on("chatMessage", (chatMessage) => {                    
            chatMessageStore[socket.id] = chatMessage; 
            
            for (const player of players) {
                if (player.id === socket.id) {
                    player.chatTimer = 100;                    
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
        
        socket.on("score", (score) => {  
            async function updateScore() {
                const player = players.find(player => player.id === socket.id) 
                player.scores[0].mushroomTrial = score;   
                console.log(score, player.scores) 
                await Player.findOneAndUpdate({socket: socket.id}, {scores: player.scores}, {new: true});
                myPlayer[socket.id] = player;             
            }
            updateScore()
        });
        
        socket.on("getScores", () => {
            async function getScores() {
              try {
                // Fetch all players
                const players = await Player.find().exec();
          
                // Process the scores
                const scores = players
                  .filter(player => player.username && player.scores && player.scores[0]) // Ensure username and scores exist
                  .map(player => `${player.username}: ${player.scores[0].mushroomTrial}`); // Format the score
          
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

    const PORT  = process.env.PORT || 5000;

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

const arcaneGem = {
    type: "gem",
    name: "arcaneGem",
    value: 5,
    rarity: "common",
    image: "./inventory/arcaneGem.png",
};
const solarGem = {
    type: "gem",
    name: "solarGem",
    value: 5,
    rarity: "common",
    image: "./inventory/solarGem.png",
};
const nuclearGem = {
    type: "gem",
    name: "nuclearGem",
    value: 5,
    rarity: "common",
    image: "./inventory/nuclearGem.png",
};
const commonFishStick = {
    type: "food",
    name: "commonFishStick",
    value: 5,
    power: 1,
    rarity: "common",
    image: "./inventory/commonFishStick.png",
};
const uncommonFishStick = {
    type: "food",
    name: "uncommonFishStick",
    value: 5,
    power: 2,
    rarity: "uncommon",
    image: "./inventory/uncommonFishStick.png",
};
const rareFishStick = {
    type: "food",
    name: "rareFishStick",
    value: 5,
    power: 4,
    rarity: "rare",
    image: "./inventory/rareFishStick.gif",
};
const commonFish = {
    type: "food",
    name: "commonFish",
    value: 5,
    power: 1,
    rarity: "common",
    image: "./inventory/commonFish.png",
};
const arcaneStaffCommon = {
    type: "weapon",
    name: "arcaneStaffCommon",
    value: 30,
    rarity: "common",
    image: "./inventory/arcaneStaffCommon.png",
};
const arcaneRepeater = {
    type: "weapon",
    name: "arcaneRepeater",
    value: 30,
    rarity: "common",
    image: "./inventory/arcaneRepeaterInv.gif",
};
const solarStaffCommon = {
    type: "weapon",
    name: "solarStaffCommon",
    value: 20,
    rarity: "common",
    image: "./inventory/solarStaffCommon.png",
};
const nuclearStaffCommon = {
    type: "weapon",
    name: "nuclearStaffCommon",
    value: 50,
    rarity: "common",
    image: "./inventory/nuclearStaffCommon.png",
};
const uncommonFish = {
    type: "food",
    name: "uncommonFish",
    value: 5,
    power: 2,
    rarity: "uncommon",
    image: "./inventory/uncommonFish.png",
};
const rareFish = {
    type: "food",
    name: "rareFish",
    value: 5,
    power: 4,
    rarity: "rare",
    image: "./inventory/rareFish.gif",
};
const stick = {
    type: "stick",
    name: "stick",
    value: 2,
    rarity: "common",
    image: "./inventory/stick.png",
};
const willowStick = {
    type: "stick",
    name: "willowStick",
    value: 2,
    rarity: "rare",
    image: "./inventory/willowStick.png",
};
const chestKey = {
    type: "key",
    name: "chestKey",
    value: 30,
    rarity: "rare",
    image: "./inventory/chestKey.png",
};
const sardin = {
    type: "fish",
    name: "sardin",
    value: 1,
    rarity: "common",
    image: "./inventory/sarding.png",
};
const ballo = {
     type: "fish",
     name: "ballo",
     value: 2,
     rarity: "uncommon",
     image: "./inventory/ballo.jpg",
};
const bass = {
    type: "fish",
    name: "bass",
    value: 3,
    rarity: "rare",
    image: "./inventory/bass.png",
};
 const octopus = {
    type: "fish",
    name: "octopus",
    value: 4,
    rarity: "rare",
    image: "./inventory/octopus.png",
};

 const restfieldBlanket = {
    type: "fish",
    name: "restfieldBlanket",
    value: 4,
    rarity: "rare",
    image: "./inventory/restfieldBlanket.png",
};



// CLOTHES

const mushroomClothesRed = {
    type: "artifact",
    name: "mushroomClothesRed",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/redMushroomlInventory.png",
};
const mushroomClothesOrange = {
    type: "artifact",
    name: "mushroomClothesOrange",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/rorangeMushroomlInventory.png",
};
const tropicalHat = {
    type: "artifact",
    name: "tropicalHat",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/tropicalHatInventory.png",
};
const skullHelmet = {
    type: "artifact",
    name: "skullHelmet",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/skullInventory.png",
};
const reaperClothes = {
    type: "artifact",
    name: "reaperClothes",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/reaperInventory.png",
};
const blackVampiresClothes = {
    type: "artifact",
    name: "blackVampiresClothes",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/vampiresInventory.png",
};
const fishermanClothes = {
    type: "artifact",
    name: "fishermanClothes",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/fishrmanInventory.png",
};
const romanHelmet = {
    type: "artifact",
    name: "romanHelmet",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/romanHelmetInventory.png",
};
const restfieldGhostClothes = {
    type: "artifact",
    name: "restfieldGhostClothes",
    value: 20,
    rarity: "common",
    image: "./inventory/clothesInventory/restfieldGhostInventory.png",
};

// SOULS

const frogSkin = {
    name: "frogSkin",
    image: "./inventory/soulInventory/frogSoulInventory.png",
    type: "soul",
}
const ghostSkin = {
    name: "ghostSkin",
    image: "./inventory/soulInventory/ghostSoulInventory.png",
    type: "soul",
}
const reaperSkin = {
    name: "reaperSkin",
    image: "./inventory/soulInventory/reaperSoulInventory.png",
    type: "soul",
}
const arcanyDemon = {
    name: "arcanyDemon",
    image: "./inventory/soulInventory/arcanyDemonSoulInventory.png",
    type: "soul",
}
const pinkDemon = {
    name: "pinkDemon",
    image: "./inventory/soulInventory/pinkDemonSoulInventory.png",
    type: "soul",
}
const redDemon = {
    name: "redDemon",
    image: "./inventory/soulInventory/redDemonSoulInventory.png",
    type: "soul",
}
const vampiresSkin = {
    name: "vampiresSkin",
    image: "./inventory/soulInventory/vampiresSoulInventory.png",
    type: "soul",
}
const restfieldSkeletonSkin = {
    name: "restfieldSkeletonSkin",
    image: "./inventory/soulInventory/restfieldSkeletonSoulInventory.png",
    type: "soul",
}
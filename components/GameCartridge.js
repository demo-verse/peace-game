/*
Location - Rosca's Island
Where: Earth
Coordinates: [] // HYPE islands
Game engine code runs Rosca's Island on the Hyperion Network.
Game engine maintained by HYPE coding guild as apart of Guild Quest Metaverse Collections
More info found in a variety of archives across a variety of comms systems including Discord, Notion, Drive, Miro, and more. 
Request tours available in-game. 
Have fun!
*/


// Game engine code runs Rosca's Island on the Hyperion Network.
const npcs = [
    {
        name: "Gilgamesh",
        id: "5",
        x: 0,
        y: 0,
        location: "Gilgamesh",
        link_to: "https://opencollective.com/hype-guild",
        dialog: [
            {
                text: "Hello, I am Gilgamesh, the leader of the Hype Guild. I am here to help you with your Hype Quest. What would you like to do?",
                options: [
                    {
                        text: "I would like to learn more about Hype",
                        callback: () => {
                            handleDialog("Hype is a game engine that runs Rosca's Island on the Hyperion Network. It is maintained by HYPE coding guild as apart of Guild Quest Metaverse Collections. More info found in a variety of archives across a variety of comms systems including Discord, Notion, Drive, Miro, and more. Request tours available in-game. Have fun!", messageBox);
                        }
                    },
                    {
                        text: "I would like to buy Hypecoins",
                        callback: () => {
                            handleDialog("Exchange coming soon. You can purchase Hypecoins via Paypal (web2 gateway)", messageBox);
                        }
                    },
                    {
                        text: "How much does HYPE cost",
                        callback: () => {
                            handleDialog("HYPE is $2.00 USD per Hypecoin", messageBox);
                        }
                    },
                    {
                        text: "I would like to request a tour",
                        callback: () => {
                            handleDialog("You can request a tour at any time. Please contact the Hype Guild on Discord", messageBox);
                        }
                    },
                    {
                        text: "I would like to join a guild",
                        callback: () => {
                            handleDialog("You can join a guild at any time. Please contact the Hype Guild on Discord", messageBox);
                        }
                    },
                    {
                        text: "What can I buy with Hypecoins",
                        callback: () => {
                            handleDialog("Right now, you can secure your plot of land in the game. We have plots from $40-$400.", messageBox);
                        }
                    },
                    {
                        text: "I would like to trade for Hypecoins",
                        callback: () => {
                            handleDialog('You can offer trade by direct messaging @thetwosents#2243 on Discord', messageBox);
                        }
                    },
                    {
                        text: "Learn about HYPE",
                        callback: () => {
                            handleDialog("The Hype Guild is a community of developers and designers who are passionate about the Hypertextual World. Our goal is to create a world where people can create, share, and interact with content in a way that is accessible, immersive, and engaging.", messageBox);
                        }
                    },
                    {
                        text: "I would like to support the Hype Guild",
                        callback: () => {
                            handleDialog("You can support HYPE guild by donating to the Hype Guild's Open Collective.", messageBox);

                            setTimeout(() => {

                                // Ask the user in a promnpt if they would like to be moved there?
                                const prompt = window.prompt("Would you like to be moved to the Hype OpenCollective?");
                                if (prompt === "yes") {
                                    // New window
                                    window.open("https://opencollective.com/hype-guild/projects");
                                }
                            }, 1000);
                        }
                    },
                ]
            }
        ]
    },
    {
        name: "Joe",
        id: "6",
        x: 0,
        y: 0,
        location: "Terp Raid",
        dialog: [
            {
                text: "Hello, I am Joe. I trade for Hypecoins. What would you like to do?",
                options: [
                    {
                        text: "What do you trade for?",
                        callback: () => {
                            handleDialog("I trade for Hypecoins & Peace token.", messageBox);
                        }
                    },
                    {
                        text: "Why do you trade?",
                        callback: () => {
                            handleDialog("I've been trading my whole life. It's just natural.", messageBox);
                        }
                    },
                    {
                        text: "What is this lake?",
                        callback: () => {
                            handleDialog("Seems like things have been changing a lot lately...", messageBox);
                        }
                    }

                ]
            }
        ]
    },
    {
        name: "Cloud",
        id: "7",
        x: 0,
        y: 0,
        location: "Transmitter",
        dialog: [
            {
                text: "Hello, I am Cloud. I built the network we are using to run the game.",
                options: [
                    {
                        text: "Learn more about the network",
                        callback: () => {
                            handleDialog("The network is a decentralized network of computers that are connected to each other. The network is used to run the game and to provide a secure and stable environment for players to play the game.", messageBox);
                        }
                    },
                    {
                        text: "Learn more about the game",
                        callback: () => {
                            handleDialog("The game is an MMORPG that is played on the Hyperion Network. The game is a sandbox environment where players can create their own worlds and interact with other players.", messageBox);
                        }
                    },
                    {
                        text: "Learn more about the developers",
                        callback: () => {
                            handleDialog("The developers of the game are the developers of the network. They are the people who are responsible for maintaining the network and the game.", messageBox);
                        }
                    },
                    {
                        text: "Learn more about the Hype Guild",
                        callback: () => {
                            handleDialog("The Hype Guild is a community of developers and designers who are passionate about the Hypertextual World. Our goal is to create a world where people can create, share, and interact with content in a way that is accessible, immersive, and engaging.", messageBox);
                        }
                    },
                    {
                        text: "Hire the developers",
                        callback: () => {
                            handleDialog("To hire the developers, please DM Gilgamesh on Discord (thetwosents#2243)", messageBox);
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Milo",
        id: "8",
        x: 0,
        y: 0,
        location: "Jon's House",
        dialog: [
            {
                text: "Hello, I'm Milo. I manage the communication and network transactions for the game. Need something?",
                options: [
                    {
                        text: "Hire me",
                        callback: () => {
                            handleDialog("To hire me, please DM Gilgamesh on Discord (thetwosents#2243)", messageBox);
                        }
                    },
                    {
                        text: "Hire the developers",
                        callback: () => {
                            handleDialog("To hire the developers, please DM Gilgamesh on Discord (thetwosents#2243)", messageBox);
                        }
                    },
                    {
                        text: "Who is Milo?",
                        callback: () => {
                            handleDialog("Milo is Jon's cat IRL and represents the developers of the game.", messageBox);
                        }
                    }
                ],
            }
        ]
    },
    {
        name: "White Rabbit",
        id: "9",
        x: 0,
        y: 0,
        location: "HYPE Guild",
        dialog: [
            {
                text: "Welcome. I'm the White Rabbit.",
                options: [
                    {
                        text: "Where am I?",
                        callback: () => {
                            handleDialog("You are currently in the the HYPE entry game.", messageBox);
                        }
                    },
                    {
                        text: "What is HYPE?",
                        callback: () => {
                            handleDialog("The ERC20 hypecoin was created in April 2021 to facilitate currency exchange in the Hypertextual World.", messageBox);
                        }
                    },
                    {
                        text: "Can I earn Hypecoins?",
                        callback: () => {
                            handleDialog("Gilgamesh & Cloud can help you to find our Guild Quest and earn Hypecoins.", messageBox);
                        }
                    },
                    {
                        text: "What can I do with Hypecoins?",
                        callback: () => {
                            handleDialog("HYPE is the access token of all future metaverse experiences.", messageBox);
                        }
                    },
                    {
                        text: "I want to go down the rabbit hole",
                        callback: () => {
                            handleDialog("Follow me.", messageBox);

                            setTimeout(() => {
                                // Move to the next location
                                moveToLocation("Wand Maker");

                                // Show the next dialog
                                handleDialog("This is the wandmaker. Here you can get your wand.", messageBox);
                            }, 2000)
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Towlie",
        id: "11",
        x: 0,
        y: 0,
        location: "Towlie",
        dialog: [
            {
                text: "Howdy Howwww! I'm Towlie. I'm a developer of the game.",
                options: [
                    {
                        text: "Wanna get high?",
                        callback: () => {
                            handleDialog("You can go to Cannabis Cove to hang with us :D", messageBox);
                        }
                    },
                    {
                        text: "I want to go to Cannabis Cove",
                        callback: () => {
                            handleDialog("You got some HYPE?", messageBox);
                        }
                    },
                    {
                        text: "Where do I get HYPE?",
                        callback: () => {
                            handleDialog("You can get HYPE by completing quests in the game or find Gilgamesh", messageBox);
                        }
                    },
                    {
                        text: "What guild are you in?",
                        callback: () => {
                            handleDialog("I am maintained by the Hype Guild", messageBox);
                        }
                    },
                    {
                        text: "When were you born?",
                        callback: () => {
                            handleDialog("I was born Feb 27, 2022 by Rogue of HYPE", messageBox);
                        }
                    },
                ]
            }
        ]
    },
    {
        name: "Yoda",
        id: "12",
        x: 0,
        y: 0,
        location: "Tolgay",
        dialog: [
            {
                text: "Hello, I'm Yoda. I'm a developer of the game.",
                options: [
                    {
                        text: "Why do we need peace?",
                        callback: () => {
                            handleDialog("Peace is a solution to the problem of global inequality.", messageBox);
                        }
                    },
                    {
                        text: "What do you do, Yoda?",
                        callback: () => {
                            handleDialog("I provide a path to Peace guild through blockchain.", messageBox);
                        }
                    },
                    {
                        text: "What is Peace guild?",
                        callback: () => {
                            handleDialog("Peace guild is a decentralized network of people who are willing to share their knowledge and experience with each other.", messageBox);
                        }
                    },
                    {
                        text: "How do I join Peace guild?",
                        callback: () => {
                            handleDialog("You can join Peace guild by completing quests in the game or find Gilgamesh", messageBox);
                        }
                    },
                    {
                        text: "What is blockchain?",
                        callback: () => {
                            handleDialog("Blockchain is a distributed ledger of information that is public and immutable.", messageBox);
                        }
                    },
                    {
                        text: "Why do we need blockchain for peace?",
                        callback: () => {
                            handleDialog("Blockchain is a solution to consensus and censorship by providing a public ledger of information.", messageBox);
                        }
                    },
                    {
                        text: "I want to join Peace guild",
                        callback: () => {
                            handleDialog("I will take you to Gilgamesh now", messageBox);
                            setTimeout(() => {
                                // Move to the next location
                                moveToLocation("Gilgamesh");

                            }, 2000)
                        }
                    },

                ]
            }
        ]

    },
    {
        name: "GovernorDAO",
        id: "13",
        x: 0,
        y: 0,
        location: "GovernorDAO",
        dialog: [
            {
                text: "Hello, I'm GovernorDAO. I'm a guild leader for GovernorDAO guild.",
                options: [
                    {
                        text: "What is GovernorDAO?",
                        callback: () => {
                            handleDialog("We build governance for blockchain as a service.", messageBox);
                        }
                    },
                    {
                        text: "Why do we need governance?",
                        callback: () => {
                            handleDialog("To build trust within blockchain networks.", messageBox);
                        }
                    },
                    {
                        text: "How do I join GovernorDAO?",
                        callback: () => {
                            handleDialog("You can join GovernorDAO by completing quests in the game or find Gilgamesh", messageBox);
                        }
                    },
                ]
            }
        ]
    },
    {
        name: "BakedFoodies",
        id: "13",
        x: 0,
        y: 0,
        location: "BakedFoodies",
        dialog: [
            {
                text: "Smokeless grills is what we're about",
                options: [
                    {
                        text: "What is a smokeless grill?",
                        callback: () => {
                            handleDialog("Need this text from the guild please - Gilgamesh", messageBox);
                        }
                    }
                ]
            },
        ]
    },
    {
        name: "Rexford Santiria",
        id: "14",
        x: 0,
        y: 0,
        location: "Blue guild",
        dialog: [
            {
                text: "Hello, I'm Rexford Santiria. This island is owned by my son and I.",
                options: [
                    {
                        text: "What do you trade for?",
                        callback: () => {
                            handleDialog("I trade Hypecoins & Peace tokens *-*", messageBox);
                        }
                    }
                ]
            }
        ]

    },
    {
        name: "generalsupreme5",
        id: "14",
        x: 0,
        y: 0,
        location: "Medusa Gang",
        dialog: [
            {
                text: "Hello, I'm generalsupreme5 of Medusa Gang Guild. I'm new here, what's up?",
                options: [
                    {
                        text: "What do you trade for?",
                        callback: () => {
                            handleDialog("I trade Hypecoins & Peace tokens *-*", messageBox);
                        }
                    }
                ]
            }
        ]

    }
]

const infosigns = [
    {
        location: "infosign-1",
        n: ["GovernorDAO guild"],
        s: ["Towlie", "New San Francisco", "Peace guild"],
        e: ["???"],
        w: ["Jon's House, Milo"],
        text: "Don't forget your towel..."
    },
]

// Signs are the locations links to other urls
const signs = [
    {
        name: "Tolgay",
        id: "3",
        x: 0,
        y: 0,
        location: "StrongStart",
        link_to: "https://codepen.io/isladjan/pen/bGpjZwN"
    },
    {
        name: "Jon",
        id: "4",
        x: 0,
        y: 0,
        location: "Sign - Welcome to HYPE",
        link_to: "https://www.notion.so/jonsenterf/Welcome-to-HYPE-Guild-cc7a8396fffa4872a760042911a5ee99"
    },
    {
        name: "Sephiroth",
        id: "4",
        x: 0,
        y: 0,
        location: "HypeHouse",
        link_to: "https://codepen.io/MIDIBlocks/pen/wvzqbXr"
    },
    {
        name: "Cloud",
        id: "5",
        x: 0,
        y: 0,
        location: "HYPE Contract",
        link_to: "https://etherscan.io/token/0x2ca68647db1b789e496fafb3ec9447a97cfd716c#balances"
    },

    {
        name: "Aeris",
        id: "6",
        x: 0,
        y: 0,
        location: "Olympus",
        link_to: "https://hype-huskies.fandom.com/wiki/Hype_Huskies_Wiki"
    },
    {
        name: "Gilgamesh",
        id: "7",
        x: 0,
        y: 0,
        location: "To GovernorDAO.com",
        link_to: "https://governordao.org/"
    },
    {
        location: "Codepen - Starter",
        x: 0,
        y: 0,
        link_to: "https://codepen.io/web3whiterabbit/pen/dyZzQJR"
    },
    {
        location: "Codepen - White Rabbit Account",
        x: 0,
        y: 0,
        link_to: "https://codepen.io/web3whiterabbit/pens/loved?cursor=ZD0xJm89MCZwPTEmdj0xNjA0OTU3Mg=="
    },
    {
        location: "Codepen - AR/VR",
        x: 0,
        y: 0,
        link_to: "https://codepen.io/Madhvendra/full/WGrMer"
    },

    {
        location: "Ultima",
        x: 0,
        y: 0,
        link_to: "https://codepen.io/adamrifai/pen/YpaRNz"
    },
    {
        location: "Dojo",
        x: 0,
        y: 0,
        link_to: "https://codepen.io/web3whiterabbit/pen/XWzjBjP"
    },
    {
        location: "Dog Park",
        x: 0,
        y: 0,
        link_to: "https://codepen.io/thetwosents/pen/RwLXVPe"
    },
    {
        location: "Hubspot",
        x: 0,
        y: 0,
        link_to: "https://app.hubspot.com/contacts/21491981/objects/0-1/views/all/list",
    },
    {
        location: "Binance Faucet",
        x: 0,
        y: 0,
        link_to: "https://testnet.binance.org/faucet-smart"
    },
    {
        location: "BSC Genesis Contract",
        x: 0,
        y: 0,
        link_to: "https://github.com/bnb-chain/bsc-genesis-contract/blob/master/contracts/bep20_template/BEP20Token.template"
    }
]

const mailboxes = [
    {
        name: "GovernorDAO",
        id: "8",
        x: 0,
        y: 0,
        location: "GovernorDAO Mailbox",
        store_at: "/mailboxes/GovernorDAO"
    },
    {
        name: "HypeHouse",
        id: "9",
        x: 0,
        y: 0,
        location: "HypeHouse Mailbox",
        store_at: "/mailboxes/HypeHouse"
    },
    {
        name: "StrongStart",
        id: "10",
        x: 0,
        y: 0,
        location: "StrongStart Mailbox",
        store_at: "/mailboxes/StrongStart"
    },
    {
        name: "Peace guild",
        id: "11",
        x: 0,
        y: 0,
        location: "Peace Guild Mailbox",
        store_at: "/mailboxes/PeaceGuild"
    },
    {
        name: "Towlie Mailbox",
        id: "12",
        x: 0,
        y: 0,
        location: "Towlie Mailbox",
        store_at: "/mailboxes/Towlie"
    }
]


// Portals are the locations that the user can teleport to
const portals = [

    {
        location_at: "Portal 001",
        location_to: "Yield Farm - Portal Inbound",
    },
    {
        location_at: "Rosca's World - Portal Outbound",
        location_to: "Jon's World - Portal Inbound",
    },
    {
        location_at: "Yield Farm - Portal Outbound",
        location_to: "Peace Inbound",
    },
    {
        location_at: "Peace Outbound",
        location_to: "Rosca Inbound",
    },
    {
        location_at: "To San Francisco",
        location_to: "San Francisco Inbound"
    },
    {
        location_at: "Portal to Rosca's Island",
        location_to: "Rosca Inbound"
    },
    {
        location_at: "Portal to Peace Guild",
        location_to: "Peace Inbound"
    },
    {
        location_at: "To Governor",
        location_to: "White Rabbit 2"
    },
    {
        location_at: "Governor Outbound",
        location_to: "Peace Inbound"
    },
    {
        location_at: "To east",
        location_to: "Governor Inbound"
    },
    {
        location_at: "To blue guild",
        location_to: "Blue guild inbound"
    },
    {
        location_at: "To gilgamesh",
        location_to: "Gilgamesh inbound"
    },
    {
        location_at: "To new san fran",
        location_to: "San fran inbound"
    }
]

const droppables = [
    {
        type: "playlist",
        text: "You found a playlist! It has been added to your vault.",
        id: "1",
        x: 0,
        y: 0,
        location: "Yield Farm",
        callback: "add_to_vault",
        payload: {
            playlistId: "1",
            playlistName: "Yield Farm Playlist",
            playlistOwner: "Peace Guild",
        }
    },
]

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: "game-container",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let cursors;
let messageBox;
let player;
let map;
let showDebug = false;
const myDataRef = new Firebase('https://olympus-d8a36-default-rtdb.firebaseio.com/'); // GunDB soon!!!

function preload() {
    let game = this // this is the game object

    // Get all assets from the database at /assets only one time at the beginning
    myDataRef.child('assets').once('value', function (snapshot) {
        console.log("assets", snapshot.val());
        // console.log(snapshot.val().length);
    });

    preloadSprites(game);
}

function create() {

    // Build the map and return the map object
    let { map, worldLayer, aboveLayer } = buildMap(this);

    // Load the spawn point for the player
    const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

    // Load the player to global variable
    buildPlayer(this, spawnPoint, worldLayer);

    // Load signs
    loadSigns(this, map, signs, worldLayer);

    // Load mailboxes
    loadMailboxes(this, map, mailboxes, worldLayer);

    // Load infosigns
    loadInfoSigns(this, map, infosigns, worldLayer);

    // If the user presses the escape key, remoove the active class from #theBox
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            document.getElementById('theBox').classList.remove('active');
            document.getElementById('infoSign').classList.remove('active');
        }
    });

    // Load portals
    loadPortals(this, map, portals, worldLayer);

    // Load NPCs
    loadNPCs(this, map, worldLayer);

    if (!localStorage.getItem("hype_username")) {
        // Prompt the user to enter a HYPE username
        let username = prompt("Enter your HYPE username (create one if first time)");

        // If the user entered a username
        if (username) {
            localStorage.setItem('hype_username', username);
            myDataRef.child('presence').child(username).set({
                user: username,
                timestamp: new Date().getTime(),
                x: player.x,
                y: player.y,
                direction: player.direction || "down"
            });
            // Reload the window to refresh the player's location
            window.location.reload(true)
        } else {
            // force the user to enter a username
            alert("Please enter a username");
            window.location.reload(true);
        }
    }


    mobileController(this);


    const playersSprites = []
    let game = this;

    let onlinePlayers = [];

    // Display all the players as NPCs on the map
    myDataRef.child("presence").on("value", function (snapshot) {

        // Set the players array to the snapshot
        const players = snapshot.val();

        // Loop through the players array
        for (let player in players) {

            // If the player is not the current player
            if (players[player].user !== localStorage.getItem('hype_username')) {

                // If the player is not already in the array
                if (playersSprites.indexOf(players[player].user) === -1) {
                    // Add the player to the array
                    playersSprites.push(players[player].user)

                    // Create the player
                    const playerSprite = game.physics.add.sprite(players[player].x, players[player].y, 'atlas', 'misa-front');
                    // Add the players username as a text object
                    const playerText = game.add.text(players[player].x, players[player].y, players[player].user, { fontSize: '12px', fill: '#000' });
                    playerSprite.setOrigin(0.5, 0.5);
                    playerSprite.setData('name', players[player].user);
                    playerSprite.name = players[player].user;

                    game.physics.add.collider(playerSprite, worldLayer);

                    let playerData = {
                        x: players[player].x,
                        y: players[player].y,
                        user: players[player].user,
                        sprite: playerSprite,
                        text: playerText
                    }

                    // Push to online players array
                    onlinePlayers.push(playerData);

                }

                // If the player is already in the array
                else {
                    // Find the player in the array
                    if (onlinePlayers.length > 0) {
                        for (let i = 0; i < onlinePlayers.length; i++) {
                            if (onlinePlayers[i].user === players[player].user) {
                                // Update the player's position
                                onlinePlayers[i].sprite.x = players[player].x;
                                onlinePlayers[i].sprite.y = players[player].y;
                                onlinePlayers[i].text.x = players[player].x + 20;
                                onlinePlayers[i].text.y = players[player].y - 20;

                                // Update the player's text
                                onlinePlayers[i].text.setText(players[player].user);

                            }
                        }
                    }

                }

            } else {

            }
        }

    });

    if (localStorage.getItem('hype_username')) {

        // When the player disconnects, update the location in firebase
        myDataRef.child("presence").child(localStorage.getItem('hype_username')).onDisconnect().remove();

    } else {
        // Make them put in a username
        let prompt = window.prompt("Please enter a username");
        if (prompt) {
            localStorage.setItem('hype_username', prompt);
            myDataRef.child('presence').child(prompt).set({
                user: prompt,
                timestamp: new Date().getTime(),
                x: player.x,
                y: player.y,
                direction: player.direction || "down"
            });
        } else {
            window.location.reload(true);
        }


    }
    // add a message box to show dialog in the game 
    messageBox = this.add
        .text(16, 16, "Welcome to Guild Quest.", {
            font: "18px monospace",
            fill: "#ffffff",
            padding: { x: 20, y: 10 },
            backgroundColor: "#000000"
        })
        .setScrollFactor(0)
        .setDepth(30);

    // Position the box at the top of the screen
    messageBox.y = 32;

    // Make the messagebox aligned center in the screen
    // messageBox.x = this.sys.game.config.width / 3 - messageBox.width / 3;


    messageBox.maxWidth = 300;

    // Change message text after 2 seconds to "You are in StrongStart City"
    setTimeout(() => {
        messageBox.setText("Welcome to Rosca's Island.");

    }, 4000);

    // Ensure the messageBox is always word wrapped
    messageBox.setWordWrapWidth(messageBox.maxWidth);








    // Create the player's walking animations from the texture atlas. These are stored in the global
    // animation manager so any sprite can access them.
    const anims = this.anims;
    anims.create({
        key: "misa-left-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: "misa-right-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: "misa-front-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
    });
    anims.create({
        key: "misa-back-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
    });

    const camera = this.cameras.main;
    camera.startFollow(player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    cursors = this.input.keyboard.createCursorKeys();

    // Debug graphics
    this.input.keyboard.once("keydown-D", event => {
        // Turn on physics debugging to show player's hitbox
        this.physics.world.createDebugGraphic();

        // Create worldLayer collision graphic above the player, but below the help text
        const graphics = this.add
            .graphics()
            .setAlpha(0.75)
            .setDepth(20);
        worldLayer.renderDebug(graphics, {
            tileColor: null, // Color of non-colliding tiles
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
            faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        });
    });
}

function handleDialog(text, messageBox) {
    messageBox.setText(text);
    messageBox.setVisible(true);
    messageBox.setScrollFactor(0);
    messageBox.width = 300;
}

function update(time, delta) {
    let speed = 175;

    // if the user is holding shift, run
    let run = cursors.shift.isDown;
    if (run) {
        speed *= 2;
    }
    const prevVelocity = player.body.velocity.clone();

    // Stop any previous movement from the last frame
    player.body.setVelocity(0);

    // Horizontal movement
    if (cursors.left.isDown) {
        player.body.setVelocityX(-speed);

        // Update the database record
        if (localStorage.getItem('hype_username')) {
            myDataRef.child("presence").child(localStorage.getItem('hype_username')).update({
                x: player.x,
                y: player.y,
                direction: "left"
            });
        }
    } else if (cursors.right.isDown) {
        player.body.setVelocityX(speed);

        if (localStorage.getItem('hype_username')) {
            myDataRef.child("presence").child(localStorage.getItem('hype_username')).update({
                x: player.x,
                y: player.y,
                direction: "right"
            });
        }
    }

    // Vertical movement
    if (cursors.up.isDown) {
        player.body.setVelocityY(-speed);

        if (localStorage.getItem('hype_username')) {
            myDataRef.child("presence").child(localStorage.getItem('hype_username')).update({
                x: player.x,
                y: player.y,
                direction: "up"
            });
        }
    } else if (cursors.down.isDown) {
        player.body.setVelocityY(speed);

        if (localStorage.getItem('hype_username')) {
            myDataRef.child("presence").child(localStorage.getItem('hype_username')).update({
                x: player.x,
                y: player.y,
                direction: "down"
            });
        }
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    player.body.velocity.normalize().scale(speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    if (cursors.left.isDown) {
        player.anims.play("misa-left-walk", true);
    } else if (cursors.right.isDown) {
        player.anims.play("misa-right-walk", true);
    } else if (cursors.up.isDown) {
        player.anims.play("misa-back-walk", true);
    } else if (cursors.down.isDown) {
        player.anims.play("misa-front-walk", true);
    } else {
        player.anims.stop();

        // If we were moving, pick and idle frame to use
        if (prevVelocity.x < 0) player.setTexture("atlas", "misa-left");
        else if (prevVelocity.x > 0) player.setTexture("atlas", "misa-right");
        else if (prevVelocity.y < 0) player.setTexture("atlas", "misa-back");
        else if (prevVelocity.y > 0) player.setTexture("atlas", "misa-front");
    }

    // Save to the database for the current player


}

function displayOptions(options) {

    // Remove existing options first

    let container = document.getElementById("options");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Count number of buttonos and number of options
    let numOptions = options.length;
    // Get number of buttons with javascript
    let numButtons = container.getElementsByClassName("btn-option").length || 0;
    if (numButtons == numOptions) {
        // If number of buttons and options are the same, do nothing
        return;
    } else {
        // Add a buttono for each option to #marketplace
        for (let i = numButtons; i < numOptions; i++) {
            let button = document.createElement("button");
            // Add classname to buttons
            button.className = "btn btn-option";
            button.innerHTML = `${i + 1} - <span>${options[i].text}</span>`;
            button.onclick = function () {
                // When clicked, remove the buttono from the DOM
                options[i].callback();
            };
            container.appendChild(button);
        }
    }

    let button = document.createElement("button");
    // add class .btn
    button.className = "btn btn-option";

    button.innerHTML = "Nevermind";
    button.onclick = function () {
        // Remove all the buttons
        while (container.firstChild) {
            container.removeChild(container.firstChild);
            messageBox.setText("");
        }
    }
    container.appendChild(button);

    // If the user types a number, select the corresponding option
    document.addEventListener("keydown", function (e) {
        if (e.keyCode >= 49 && e.keyCode <= 57) {
            let option = e.keyCode - 49;
            if (option < numOptions) {
                options[option].callback();
            }
        }
    })

}


// Initializing functions
function preloadSprites(game) {
    // World
    game.load.image("tiles", "https://mikewesthad.github.io/phaser-3-tilemap-blog-posts/post-1/assets/tilesets/tuxmon-sample-32px-extruded.png");
    game.load.tilemapTiledJSON("map", "./assets/monte.json");

    // Characters
    game.load.atlas("atlas", "https://mikewesthad.github.io/phaser-3-tilemap-blog-posts/post-1/assets/atlas/atlas.png", "https://mikewesthad.github.io/phaser-3-tilemap-blog-posts/post-1/assets/atlas/atlas.json");
}

function buildMap(game) {
    map = game.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");
    const belowLayer = map.createLayer("Below Player", tileset, 0, 0);
    const worldLayer = map.createLayer("World", tileset, 0, 0);
    const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);
    worldLayer.setCollisionByProperty({ collides: true });
    aboveLayer.setDepth(10);
    return {
        worldLayer,
        belowLayer,
        map
    }
}

function loadSigns(game, map, signs, worldLayer) {
    signs.forEach(sign => {
        const signObject = map.findObject("Objects", obj => obj.name === sign.location);

        if (signObject) {
            let signSprite = buildSign(game, signObject, worldLayer);
            signSprite.setInteractive();
            game.physics.add.collider(player, worldLayer);
            game.physics.add.collider(signSprite, worldLayer);

            game.physics.add.collider(player, signSprite, () => {
                if (signSprite) {
                    // link to the sign
                    window.open(sign.link_to, "_blank");
                }
            });
        }
    });
}

function loadMailboxes(game, map, mailboxes, worldLayer) {
    mailboxes.forEach(mailbox => {
        const mailboxObject = map.findObject("Objects", obj => obj.name === mailbox.location);

        if (mailboxObject) {
            let mailboxSprite = buildMailbox(game, mailboxObject, worldLayer);
            mailboxSprite.setInteractive();
            game.physics.add.collider(mailboxSprite, worldLayer);

            game.physics.add.collider(player, mailboxSprite, () => {
                if (mailboxSprite) {
                    // set an active class on the #theBox
                    document.getElementById("theBox").classList.add("active");
                }
            });
        }
    });
}

function buildMailbox(game, mailboxObject, worldLayer) {
    let mailboxSprite = game.physics.add
        .sprite(mailboxObject.x, mailboxObject.y, "atlas", "misa-front");
    // Make the sprite transparent on the worldLayer
    mailboxSprite.setOrigin(0.5, 0.5);

    // Set the opacity of the mailboxSprite to 0
    mailboxSprite.setAlpha(0);

    return mailboxSprite;
}

function buildSign(game, sign) {
    const signSprite = game.physics.add.sprite(sign.x, sign.y, "atlas", "misa-front").setPushable(false);
    return signSprite;
}

function buildPlayer(game, spawnPoint, worldLayer) {
    player = game.physics.add
        .sprite(spawnPoint.x, spawnPoint.y, "atlas", "misa-front")
        .setSize(30, 40)
        .setOffset(0, 24);

    game.physics.add.collider(player, worldLayer);

    cursors = game.input.keyboard.createCursorKeys();

    if (localStorage.getItem('hype_username')) {
        // Add the x and y values to the hype_username object
        myDataRef.child("presence").child(localStorage.getItem('hype_username')).set({
            x: player.x,
            y: player.y,
            direction: "front",
            timestamp: new Date().getTime(),
            user: localStorage.getItem('hype_username'),
            online: true
        });
    }


}

// Event functions
function startDialog(dialog, messageBox, index = 0) {
    // Update the message box with the dialog
    messageBox.setText(dialog[index].text);

    // If the dialog[index] has options, show them
    if (dialog[index].options) {
        displayOptions(dialog[index].options);
    }
}

function loadPortals(game, map, portals, worldLayer) {
    portals.forEach(portal => {

  
      
            try {
                const location_at = map.findObject("Objects", obj => obj.name === portal.location_at);
                const location_to = map.findObject("Objects", obj => obj.name === portal.location_to);

                if (location_at && location_to) {
                    const portalSprite = game.physics.add
            .sprite(location_at.x, location_at.y, "test")
            .setPushable(false)

        // Add a collider to the portal
        game.physics.add.collider(portalSprite, worldLayer);

        // Add a collider to the player
        game.physics.add.collider(player, portalSprite, () => {
            console.log("Teleporting to " + location_to);
            player.x = location_to.x;
            player.y = location_to.y;
        });

                } else {
                    console.log("Portal not found", portal);
                }
            }
            catch (e) {
                console.log(e);
            }
    });
}

function buildPortal(game, location_at, location_to, worldLayer) {
    let portalSprite = game.physics.add
        .sprite(location_at.x, location_at.y, "atlas", "misa-front");
    // Make the sprite transparent on the worldLayer
    portalSprite.setOrigin(0.5, 0.5);
    portalSprite.setAlpha(0);
    return portalSprite;
}



// A function to load the infoSigns information into the #infoSign div
function loadInfoSigns(game, map, infoSigns, worldLayer) {
    infoSigns.forEach(infoSign => {
        const infoSignObject = map.findObject("Objects", obj => obj.name === infoSign.location);

        if (infoSignObject) {
            let infoSignSprite = buildInfoSign(game, infoSignObject, worldLayer);
            infoSignSprite.setInteractive();

            game.physics.add.collider(infoSignSprite, worldLayer);

            game.physics.add.collider(player, infoSignSprite, () => {
                if (infoSignSprite) {
                    // Set active class on #theBox which holds the infoSign


                    // set an active class on the #infoSign
                    document.getElementById("infoSign").classList.add("active");

                    // Display each of the locations by n,s,e,w
                    document.getElementById("n").innerHTML = infoSign.n;
                    document.getElementById("s").innerHTML = infoSign.s;
                    document.getElementById("e").innerHTML = infoSign.e;
                    document.getElementById("w").innerHTML = infoSign.w;

                    // Display the text
                    document.getElementById("infoSignText").innerHTML = infoSign.text;

                }
            });

        }
    });
}

function buildInfoSign(game, infoSignObject, worldLayer) {
    let infoSignSprite = game.physics.add
        .sprite(infoSignObject.x, infoSignObject.y, "atlas", "misa-front");
    // Make the sprite transparent on the worldLayer
    infoSignSprite.setOrigin(0.5, 0.5);
    infoSignSprite.setAlpha(0);

    return infoSignSprite;
}


function loadNPCs(game, map, worldLayer) {
    npcs.forEach(npc => {
        const npcObject = map.findObject("Objects", obj => obj.name === npc.location);

        if (npcObject) {
            let npcSprite = buildNPC(game, npcObject, worldLayer);
            game.physics.add.collider(player, worldLayer);
            game.physics.add.collider(npcSprite, worldLayer);

            // Check if a user ran into an NPC
            game.physics.add.collider(player, npcSprite, () => {
                // If the NPC has dialog, start the dialog
                if (npc.dialog) {
                    startDialog(npc.dialog, messageBox);
                }
            });

        }
    });
}

function buildNPC(game, npc) {
    const npcSprite = game.physics.add.sprite(npc.x, npc.y, "atlas", "misa-front").setPushable(false)
    return npcSprite;
}

async function buyLand(player, land) {
    if (typeof window.ethereum !== 'undefined') {
        const request = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        localStorage.setItem("hype_accounts", accounts);

    } else {
        console.log('MetaMask is not installed.');
    }
}

buyLand({}, {});

function moveToLocation(locationName) {

    // Find the location
    const location = map.findObject("Objects", obj => obj.name === locationName);

    // Animate the movement of the player 
    // const tween = game.tweens.add({
    //     targets: player,
    //     x: location.x,
    //     y: location.y,
    //     duration: 1000,
    //     ease: 'Power2',
    //     onComplete: () => {

    //     },
    // });
    player.x = location.x;
    player.y = location.y;
}


function updatePlayer(payload) {
    // Update the hype_username object
    myDataRef.child("presence").child(localStorage.getItem('hype_username')).update(payload);
}

function addPlayer(game, player, worldLayer) {

    // Create the sprite for the NPC
    const playerSprite = game.physics.add
        .sprite(player.x, player.y, "atlas", "misa-front")
        .setSize(30, 40)
        .setOffset(0, 24);

    // Add a collider to the player
    game.physics.add.collider(playerSprite, worldLayer);

}

// A function that activates on mobile phones that allows the entire screen to be used as a controller where if yoou move yoor finger up, you go up in the game
function mobileController(game) {

    let tile_move_count = 6;

    // check screen width is less than 1024px to also include tablets and other devices
    if (window.innerWidth < 1024) {

        let html = `
        <div id="mobile-controller">
            <div id="left-quadrant"></div>
            <div id="right-quadrant"></div>
            <div id="top-quadrant"></div>
            <div id="bottom-quadrant"></div>
        </div>
        `;

        // Insert the html into the DOM for the #mobileLayer
        document.getElementById("mobileLayer").innerHTML = html;

        // Add event listeners to the quadrants for press
        // Use ontouchmove to move the player
        document.getElementById("left-quadrant").ontouchstart = function (e) {
            e.preventDefault();

            // Animate the player
            player.anims.play("misa-left-walk", true);

            // Set the player to move left
            player.body.setVelocityX(-200);
            player.body.setVelocityY(0);


            // update in the database
            if (localStorage.getItem('hype_username')) {
                myDataRef.child("presence").child(localStorage.getItem('hype_username')).set({
                    x: player.x,
                    y: player.y,
                    direction: "left",
                    timestamp: new Date().getTime(),
                    user: localStorage.getItem('hype_username'),
                    online: true
                });
            }

        }


        // Use ontouchmove to move the player
        document.getElementById("left-quadrant").ontouchmove = function (e) {
            e.preventDefault();

            // Animate the player
            player.anims.play("misa-left-walk", true);

            // Set the player to move left
            player.body.setVelocityX(-200);
            player.body.setVelocityY(0);

            // update in the database
            if (localStorage.getItem('hype_username')) {
                myDataRef.child("presence").child(localStorage.getItem('hype_username')).set({
                    x: player.x,
                    y: player.y,
                    direction: "left",
                    timestamp: new Date().getTime(),
                    user: localStorage.getItem('hype_username'),
                    online: true
                });
            }
        }

        document.getElementById("right-quadrant").ontouchmove = function (e) {
            e.preventDefault();

            // Animate the player
            player.anims.play("misa-right-walk", true);

            // Set the player to move right
            player.body.setVelocityX(200);
            player.body.setVelocityY(0);

            // update in the database
            if (localStorage.getItem('hype_username')) {
                myDataRef.child("presence").child(localStorage.getItem('hype_username')).set({
                    x: player.x,
                    y: player.y,
                    direction: "right",
                    timestamp: new Date().getTime(),
                    user: localStorage.getItem('hype_username'),
                    online: true
                });
            }
        }

        document.getElementById("top-quadrant").ontouchmove = function (e) {
            e.preventDefault();

            // Animate the player
            player.anims.play("misa-back-walk", true);

            // Set the player to move up
            player.body.setVelocityX(0);
            player.body.setVelocityY(-200);

            // update in the database
            if (localStorage.getItem('hype_username')) {
                myDataRef.child("presence").child(localStorage.getItem('hype_username')).set({
                    x: player.x,
                    y: player.y,
                    direction: "up",
                    timestamp: new Date().getTime(),
                    user: localStorage.getItem('hype_username'),
                    online: true
                });
            }
        }

        document.getElementById("bottom-quadrant").ontouchmove = function (e) {
            e.preventDefault();

            // Animate the player
            player.anims.play("misa-front-walk", true);

            // Set the player to move down
            player.body.setVelocityX(0);
            player.body.setVelocityY(200);


            // update in the database
            if (localStorage.getItem('hype_username')) {
                myDataRef.child("presence").child(localStorage.getItem('hype_username')).set({
                    x: player.x,
                    y: player.y,
                    direction: "down",
                    timestamp: new Date().getTime(),
                    user: localStorage.getItem('hype_username'),
                    online: true
                });
            }
        }

    }

    // Ensure all buttons on the screen are tappable on mobile
    // Get all buttons
    let buttons = document.querySelectorAll("button");

    // Loop through all buttons
    buttons.forEach(button => {
        button.ontouchstart = function (e) {
            e.preventDefault();
            button.click();
        }
    });
}


/*
Example CSS for the quadrants

#mobile-controller {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

#left-quadrant {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

#right-quadrant {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

#top-quadrant {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

#bottom-quadrant {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
*/

// A function that allows a player to leave a message in the mailbox of one of the areas in the game by the location.
// The messages should be stored simply in firebase at the stored_at location.
function leaveMessage(stored_at) {
    // Get the message from the input box
    let message = document.getElementById("message-input").value;

    // Get the current time
    let time = new Date().getTime();

    // Create a new message object
    let newMessage = {
        message: message,
        time: time,
        user: localStorage.getItem('hype_username')
    }

    // Push the new message to the database
    myDataRef.child(stored_at).push(newMessage);

    // Clear the input box
    document.getElementById("message-input").value = "";
}
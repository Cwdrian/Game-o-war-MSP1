// Player name
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName").value;
    // Display name
    document.querySelector(".player-name").textContent = playerName;
});

const cardImages = [
"card_hearts_A.png",
"card_hearts_02.png",
"card_hearts_03.png",
"card_hearts_04.png",
"card_hearts_05.png",
"card_hearts_06.png",
"card_hearts_07.png",
"card_hearts_08.png",
"card_hearts_09.png",
"card_hearts_10.png",
"card_hearts_J.png",
"card_hearts_Q.png",
"card_hearts_K.png",
"card_diamonds_A.png",
"card_diamonds_02.png",
"card_diamonds_03.png",
"card_diamonds_04.png",
"card_diamonds_05.png",
"card_diamonds_06.png",
"card_diamonds_07.png",
"card_diamonds_08.png",
"card_diamonds_09.png",
"card_diamonds_10.png",
"card_diamonds_J.png",
"card_diamonds_Q.png",
"card_diamonds_K.png",
"card_clubs_A.png",
"card_clubs_02.png",
"card_clubs_03.png",
"card_clubs_04.png",
"card_clubs_05.png",
"card_clubs_06.png",
"card_clubs_07.png",
"card_clubs_08.png",
"card_clubs_09.png",
"card_clubs_10.png",
"card_clubs_J.png",
"card_clubs_Q.png",
"card_clubs_K.png",
"card_spades_A.png",
"card_spades_02.png",
"card_spades_03.png",
"card_spades_04.png",
"card_spades_05.png",
"card_spades_06.png",
"card_spades_07.png",
"card_spades_08.png",
"card_spades_09.png",
"card_spades_10.png",
"card_spades_J.png",
"card_spades_Q.png",
"card_spades_K.png",
];

//deck
const deck = cardImages.map(imageFileName => ({ image: `assets/Cards (large)/${imageFileName}` }));

const cardValues = {
    "card_hearts_A.png": 14,
    "card_hearts_02.png": 2,
    "card_hearts_03.png": 3,
    "card_hearts_04.png": 4,
    "card_hearts_05.png": 5,
    "card_hearts_06.png": 6,
    "card_hearts_07.png": 7,
    "card_hearts_08.png": 8,
    "card_hearts_09.png": 9,
    "card_hearts_10.png": 10,
    "card_hearts_J.png": 11,
    "card_hearts_Q.png": 12,
    "card_hearts_K.png": 13,
    "card_diamonds_A.png": 14,
    "card_diamonds_02.png": 2,
    "card_diamonds_03.png": 3,
    "card_diamonds_04.png": 4,
    "card_diamonds_05.png": 5,
    "card_diamonds_06.png": 6,
    "card_diamonds_07.png": 7,
    "card_diamonds_08.png": 8,
    "card_diamonds_09.png": 9,
    "card_diamonds_10.png": 10,
    "card_diamonds_J.png": 11,
    "card_diamonds_Q.png": 12,
    "card_diamonds_K.png": 13,
    "card_clubs_A.png": 14,
    "card_clubs_02.png": 2,
    "card_clubs_03.png": 3,
    "card_clubs_04.png": 4,
    "card_clubs_05.png": 5,
    "card_clubs_06.png": 6,
    "card_clubs_07.png": 7,
    "card_clubs_08.png": 8,
    "card_clubs_09.png": 9,
    "card_clubs_10.png": 10,
    "card_clubs_J.png": 11,
    "card_clubs_Q.png": 12,
    "card_clubs_K.png": 13,
    "card_spades_A.png": 14,
    "card_spades_02.png": 2,
    "card_spades_03.png": 3,
    "card_spades_04.png": 4,
    "card_spades_05.png": 5,
    "card_spades_06.png": 6,
    "card_spades_07.png": 7,
    "card_spades_08.png": 8,
    "card_spades_09.png": 9,
    "card_spades_10.png": 10,
    "card_spades_J.png": 11,
    "card_spades_Q.png": 12,
    "card_spades_K.png": 13,
};

//shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
}

let playerScore = 0;
let cpuScore = 0;

function selectAndDisplayCards() {
    
    shuffleDeck(deck);

    const randomCard1 = deck[Math.floor(Math.random() * deck.length)];
    const randomCard2 = deck[Math.floor(Math.random() * deck.length)];

    // player and cpu card img
    const playerCardElement = document.getElementById("playerCard");
    const cpuCardElement = document.getElementById("cpuCard");

    // Set the src attributes of the card images based on the selected cards
    playerCardElement.src = randomCard1.image;
    cpuCardElement.src = randomCard2.image;

    // Get the values of the card
    const playerCardValue = cardValues[randomCard1.image];
    const cpuCardValue = cardValues[randomCard2.image];

//compare values
    if (playerCardValue > cpuCardValue) {
        playerScore++; 
    } else if (playerCardValue < cpuCardValue) {
        cpuScore++; 
    }
    console.log("Player card value:", playerCardValue);
    console.log("CPU card value:", cpuCardValue);
    console.log("Player Score:", playerScore);
    console.log("CPU Score:", cpuScore);
    
    
    document.getElementById("playerScore").textContent = `Player Score: ${playerScore}`;
    document.getElementById("cpuScore").textContent = `CPU Score: ${cpuScore}`;
}

const gameButton = document.getElementById("gameButton");

gameButton.addEventListener("click", selectAndDisplayCards);
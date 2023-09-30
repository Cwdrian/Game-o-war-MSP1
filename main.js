//player name
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName").value;
// Display the player name
    document.querySelector(".player-name").textContent = playerName;
});

//deck const
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const deck = [];
for (const suit of suits) {
    for (const rank of ranks) {
        deck.push({ rank, suit });
    }
}

// Step 2: Create a function to shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
}

// Step 3: Create a function to select and log two random cards
function selectAndLogCards() {
    // Shuffle the deck
    shuffleDeck(deck);

    // Select two random cards
    const randomCard1 = deck[Math.floor(Math.random() * deck.length)];
    const randomCard2 = deck[Math.floor(Math.random() * deck.length)];

    // Log the selected cards to the console
    console.log("Player:", randomCard1);
    console.log("CPU:", randomCard2);
}

// Step 4: Add an event listener to the image button
const gameButton = document.getElementById("gameButton");

gameButton.addEventListener("click", selectAndLogCards);

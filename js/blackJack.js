/*
*  ALL THE BELOW CODE IS JUST TO DO WITH THE DECK LATER ON WILL REFACTOR INTO A DIFF FILE FOR READABILITY 
*  majority of the code here comes from this guide: https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
*/

var suits = ["Spades", "Clubs", "Diamonds", "Hearts"]; // all suits for the deck
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; // all card values
var deck = new Array();
/* 
* This function returns a new Deck (non shuffled is just in order)
*
* Shea Parcell 
*/
function getDeck() {

    let deck = new Array();
    for (let i = 0; i < suits.length; i++) { // loop through each suit 

        for (let x = 0; x < values.length; x++) { // loop through every value for each suit

            let card = { Value: values[x], Suit: suits[i] }; // card will be the current value & current suit
            deck.push(card); // add card to the deck
        }
    }

    return deck; // return the deck
}

function shuffle(deck) {
    for (let i = 0; i < 1000; i++) { // change the location of random cards 1000x
        let location1 = Math.floor((Math.random() * deck.length)); // random card 1
        let location2 = Math.floor((Math.random() * deck.length)); // random card 2
        let tmp = deck[location1];

        deck[location1] = deck[location2]; // swapping the location of the two cards
        deck[location2] = tmp;
    }
}

// No idea about this HTML stuff someone come through later and look at this please
function renderDeck(deck) {
    document.getElementById('deck').innerHTML = '';

    for (var i = 0; i < deck.length; i++) {
        var card = document.createElement("div");
        var icon = '';
        if (deck[i].Suit == 'hearts')
            icon = '&hearts';
        else if (deck[i].Suit == 'spades')
            icon = '&spades';
        else if (deck[i].Suit == 'diamonds')
            icon = '&diams';
        else
            icon = '&clubs';

        card.innerHTML = deck[i].Value + '' + icon;
        card.className = 'card';
        document.getElementById("deck").appendChild(card);
    }
}


/*
* ACTUAL BLACKJACK HERE!
*/
// Down the Road want to change this to just Player Objects with their current hand, "score", and money in the future as well
var playerOneHand = new Array(); // players hand
var houseHand = new Array(); // houses hand

function start() {
    var deck = getDeck(); // This is our deck we will be playing with
    shuffle(deck); // shuffle deck

    deal(deck) // uses the deal method to deal the first 4 cards

    if (playerAction == "Hit Me!") {
        hitMe(deck); // gives the player another card

    } else if (playerAction == "Stand") {
        //here we loop until the house is greater than players hand if value of house is greater 21 player wins
    } else if (playerAction == "Double Down") {
        // just a stub incase we decide to do it
    } else if (playerAction == "Split") {
        // just a stub incase we decide to do it
    } else {
        print("THIS SHOULD NEVER PRINT CHECK START FUNCTION IN BLACKJACK");
    }

    // House should only have one card showing at the beginning other just face down but still need to remove card from deck
    // At start of game pop 4 times in order of house(face down) -> p1 -> house -> p1
    // graphics above my paygrade atm
    // after deal then we get to the real game keep on p1 until they press stand
    // possibly introduce doubling down and splitting later on
}

function deal(deck) {
    for (i = 0; i < 2; i++) { // can be changed pretty easily down the line if we want to have more than 2 players
        var card = deck.pop(); // this card will be shown graphically
        playerOneHand.push(card); // add it into the players hand

        var card = deck.pop(); // this card will be shown graphically
        houseHand.push(card); // add it into the houses hand
    }
}

// USE ONLY FOR PLAYER
function hitMe(deck) { // later we might want to add a new variable of which player we are hitting but atm should be fine
    var card = deck.pop(); // this card will be shown graphically
    playerOneHand.push(card); // add it into the players hand
}

function checkHand(hand) {
    var sum = 0;
    for (i = 0; i < hand.length; i++) {
        sum += hand.values[i]; //P SURE THIS IS WRONG COME BACK AND CHECK
    }
}
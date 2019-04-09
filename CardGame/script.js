
function Card(rank,suit){

        this.rank = rank;
        this.suit = suit;

        this.toString = cardToString;
        this.image = cardImage; 

}

function cardToString(){

    var rank, suit;

    /*if(rank == "A"){
        rank = "Ace"

}*/

    switch(this.rank){
        
        case 1: rank = "A"; break;
        case 2: rank = "2"; break;
        case 3: rank = "3"; break;
        case 4: rank = "4"; break;
        case 5: rank = "5"; break;
        case 6: rank = "6"; break;
        case 7: rank = "7"; break;
        case 8: rank = "8"; break;
        case 9: rank = "9"; break;
        case 10: rank = "10"; break;
        case 11: rank = "J"; break;
        case 12: rank = "Q"; break;
        case 13: rank = "K"; break;
        default: rank = null; break;
    }

    switch(this.suit){
        case "1": suit = "Clubs"; break;
        case "2": suit = "Diamonds"; break;
        case "3": suit = "Hearts"; break;
        case "4": suit = "Spades"; break;
        default:suit = null; break;
    }

    if(rank == null || suit == null){
        return "INVALID CARD. STOP CHEATING."
    }

    return rank + " of " + suit;
}
function cardImage(cardface){
    switch(this.rank){
    case 1: rank = "A"; break;
    case 2: rank = "2"; break;
    case 3: rank = "3"; break;
    case 4: rank = "4"; break;
    case 5: rank = "5"; break;
    case 6: rank = "6"; break;
    case 7: rank = "7"; break;
    case 8: rank = "8"; break;
    case 9: rank = "9"; break;
    case 10: rank = "10"; break;
    case 11: rank = "J"; break;
    case 12: rank = "Q"; break;
    case 13: rank = "K"; break;
    default: rank = null; break;
}

switch(this.suit){
    case "1": suit = "C"; break;
    case "2": suit = "D"; break;
    case "3": suit = "H"; break;
    case "4": suit = "S"; break;
    default:suit = null; break;
}
return "<img src='/cards/" + rank + suit + ".png' />";

}


function Deck(){
    this.cards = [];

    this.makeDeck = deckMakeDeck;
    this.shuffle = deckShuffle;
    this.deal = deckDeal;
    this.draw = deckDraw;
    this.addCard = deckAddCard;
    this.combine = deckStackDeck;
    //this.cardCount = deckCardCount
}

function deckMakeDeck(){

    var maxSuit = 4;
    var maxRank = 13;

    for(var suit = 1; suit <= maxSuit; suit++){
        for(var rank = 1; rank <= maxRank; rank++){
            this.cards.push(new Card(rank, suit));
        }
    }

}

function deckShuffle(){

    for(var i = 0; i < this.cards.length; i++){
        var tribute = parseInt(Math.random()*this.cards.length);
        var temp = this.cards[i];
        this.cards[i] = this.cards[tribute];
        this.cards[tribute] = temp;
    }

}
function deckDeal(){
    var card;
    if(this.cards.length > 0){
        return this.cards.shift();
    }else
        return null;
}

function deckDraw(n){
    var card;
    if(n-1>= 0 && n< this.cards.length){
        card = this.cards[n];
        this.cards.splice (n-1,1);
    }else

    return null;
}
function deckAddCard(card)
{
    this.cards.push(card);
}

function deckStackDeck(deck){
    for(var i = 0; i < deck.cards.length; i++){
        this.cards.push(deck.cards[i]);
    }
    deck.cards = [];

}

var deck = new Deck();
var hand = new Deck();

deck.makeDeck();
deck.shuffle();

for(var i = 0; i < 7; i++){
    hand.addCard(decl.deal());
}

for(var i = 0; i < hand.cards.length; i++){
    $("#hand").append(hand.cards[i].image());
}


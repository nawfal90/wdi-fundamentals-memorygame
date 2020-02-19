const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
  rank: 'king',
  suit: 'diamonds',
  cardImage: "images/king-of-diamonds.png"
}

];

let cardsInPlay = [];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

function flipCard(){
  let cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src',cards[cardId].cardImage);
  if (cardsInPlay.length === 2){
    checkForMatch();
    if(cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    }else{
      alert("Sorry,try again.");
    }
  }
};
function createBoard(){
  let cardElement;
  for (let i = 0; i < cards.length; i++) {
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener("click",flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard()



//favoriteMovie = JSON.stringify(favoriteMovie);
// If favoriteMovie is "jaws"
// Assign moviePhrase the value "You're gonna need a bigger boat."
// Else if favoriteMovie is "the shining"
// Assign moviePhrase the value "All work and no play makes Jack a dull boy."
// Else if favoriteMovie is "star wars"
// Assign moviePhrase the value "Do. Or do not. There is no try."
// Else if favoriteMovie is "forrest gump"
// Assign moviePhrase the value "Life was like a box of chocolates."
// Else if favoriteMovie is "back to the future"
// Assign moviePhrase the value "Where we're going, we don't need roads."
// Else
// Assign moviePhrase the value "Great movie choice!"

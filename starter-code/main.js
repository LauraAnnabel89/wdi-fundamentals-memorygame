/* 
Step 1. Create a board
Step 2. Populate board with cards  
Step 3. Listen for click event on cards
Step 4. If two cards have been clicked, then check to see if they are the same
Step 5. If they are the same then (do something) and increment score
Step 6. Clear the selected cards
Step 7. Check if all of the cards have been turned over. If they have end the game. If not, continue
*/

var gameBoard = document.getElementById("game-board");
var newCard = document.getElementsByClassName("cards");
var cards = ["queen", "king", "queen", "king"];
var cardInPlay = [];


var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = "card";
        newCard.setAttribute('data-card', cards[i]);
        newCard.addEventListener('click', isTwoCards);
        gameBoard.appendChild(newCard);
    }
};
function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
		this.innerHTML = '<img src="king.png' + this.getAttribute('data-card') + 'queen.png">'
	  	if (cardInPlay.length === 2) {
		isMatch(cardInPlay);
		cardInPlay = [];
	}
};

var isMatch = function(array) {
	if (array[0] === array[1]) {
      alert("Yay! You found a match!");}
  else { alert("Better luck next time!");}
    for (var i = 0; i < cards.length; i++) {
    document.getElementsByClassName('card')[i].innerHTML = " ";
  }
};
/* Not sure which version works!
var isMatch = function(array) {
	(array[0] === array[1]) ? alert("Yay! You found a match!") : alert("Better luck next time!");
    for (var i = 0; i < cards.length; i++) {
    document.getElementsByClassName('card')[i].innerHTML = " ";
  }
};*/
createBoard ();
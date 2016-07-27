var gameBoard = document.getElementById("game-board");
var cards = ["queen", "queen", "king", "king"];
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
		this.innerHTML = '<img src="' + this.getAttribute('data-card') + '.png" alt = "' + this.getAttribute('data-card') + '"/>';
	  	if (cardInPlay.length === 2) {
		isMatch(cardInPlay);
		cardInPlay = [];
	}
};
var isMatch = function(array) {
	(array[0] === array[1]) ? 
		alert("You found a match!") :
		alert("Better luck next time!");
  for (var i = 0; i < cards.length; i++) {
    document.getElementsByClassName('card')[i].innerHTML = " ";
  }
};
createBoard ();
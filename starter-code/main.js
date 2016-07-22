var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo)
 { alert ("You found a match!");
 }
else 
{ alert ("Sorry try again");
}

var x = document.getElementById('game-board');
var createBoard = function (numCards) {
  for (var i = 1; i <= numCards; i++) {
    newCard.classname = "card";
    gameBoard.appendChild(newCard);
  }
};


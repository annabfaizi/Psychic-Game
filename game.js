//set of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//pc letter selection
var pcChoice = letters[Math.floor(Math.random()* letters.length)];
console.log(pcChoice);

//keeping track
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;

//resets everything
var reset = function() {
	guesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateguessesLeft();
	updatepressed();

}

//logic for user key press
document.onkeypress = function(e){
	//user key press
	var pressed;
	
	pressed = e.key;
	//comparing letters
	var compare = function(pressed, pcChoice){
		if(pressed===pcChoice){
			wins++;
		}

		else if (guesses === 0){
			reset();
		}

		else {
			losses++;
		}
	}
}








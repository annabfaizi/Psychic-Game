//set of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//pc letter selection
var pcChoice = letters.random();

//keeping track
var wins = 0;
var losses = 0;
var guesses = 10;

//logic for user key press
document.onkeypress = function(e){
	//user key press
	var pressed;
	
	pressed = e.key;

	if (guesses > 0 && pressed !== pcChoice){
		losses--;
	}
	else {
		wins++;
	}
}





//comparing letters
var match = compare(pressed, pcChoice);


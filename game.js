function reset(){
		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		pressedLetters = [];
		document.getElementById("pressedLetters").innerHTML = pressedLetters;
		document.getElementById("wins").innerHTML = wins;
		document.getElementById("losses").innerHTML = losses;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

//keeping track
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;

$( document ).ready(function() {
    console.log( "ready!" ); //ready check


//set of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pressedLetters = [];
//pc letter selection
var pcChoice = letters[Math.floor(Math.random()* letters.length)];
	console.log(pcChoice);

//accepts user key presses
document.onkeypress = function(e){
	//user key press
	var pressed;
	pressed = e.key;
	//shows user pressed key in console
	console.log(pressed);
	//joins user presses together
	pressedLetters.push(pressed);
	//pressedLetters.join(pressed + (", "));
	//prints user pressed keys to HTML
	document.getElementById("pressedLetters").innerHTML = pressedLetters;
	
	if (guessesLeft !== 0 ) {
		
		if (pressed === pcChoice){
			wins++;
			document.getElementById("wins").innerHTML = wins++;
			reset();
		}
		else{
			losses++;
			guessesLeft--;
			document.getElementById("losses").innerHTML = losses;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
		}

		pcChoice = letters[Math.floor(Math.random()* letters.length)];
		console.log(pcChoice);
		
	}
	reset();
}

});






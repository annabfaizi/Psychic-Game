$( document ).ready(function() {
    console.log( "ready!" ); //ready check


//set of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pressedLetters = [];
//pc letter selection
var pcChoice = letters[Math.floor(Math.random()* letters.length)];
	console.log(pcChoice);

//logic for user key press
document.onkeypress = function(e){
	//user key press
	var pressed;
	pressed = e.key;
	console.log(pressed);
	pressedLetters.join(pressed + (", "));
	document.getElementById("pressedLetters").innerHTML = pressedLetters;

	//keeping track
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;

	if (guessesLeft !== 0 ) {
		
		if (pressed === pcChoice){
			wins++;
			// console.log(wins);
			document.getElementById("wins").innerHTML = wins;
		}
		else{
			losses++;
			guessesLeft--;
			console.log(losses);
			console.log(guessesLeft);
			document.getElementById("losses").innerHTML = losses;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			
		}

		pcChoice = letters[Math.floor(Math.random()* letters.length)];
		console.log(pcChoice);
		pressedLetters.push(pressed);
	}
	else {
		reset();
		}
};



	// //comparing letters
	// var compare = function(pressed, pcChoice){
	// 	if(pressed===pcChoice){
	// 		wins++;
	// 	}

	// 	else if (guesses === 0){
	// 		reset();
	// 	}

	// 	else {
	// 		losses++;
	// 	}
	// }
})






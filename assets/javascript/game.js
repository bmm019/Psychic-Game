
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = null;
var guessesLeft = 9;
var guessesMade = [];
var wins = 0;
var losses = 0;



document.onkeyup = function(){

	var computerGuess = options[Math.floor(Math.random()*options.length)];
    console.log("The Computer guessed " + computerGuess);
    
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("The User guessed " + userGuess);

	if (userGuess === computerGuess) {
	 	console.log("same");
	 	wins++;
	 	console.log("The user has won " + wins + " times.");
         guessesLeft=9;
    
		
	} else {
	 	console.log("different");
	 	guessesMade++;
	 	guessesLeft--;
	 	document.getElementById("guessesSoFar").innerHTML += userGuess + " ";
	 	console.log("The user has guessed a total of " + guessesMade + " times.");
         
         if (guessesLeft === 0) {
	 			losses++;
	 			guessesLeft=9;
	 			userGuess = null;
	 			document.getElementById("guessesSoFar").innerHTML = userGuess;
             } 	

         }
      

 	//Display wins, losses, guesses left for each round
 	document.getElementById("winsCount").innerHTML = wins;
 	document.getElementById("lossesCount").innerHTML = losses;
 	document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

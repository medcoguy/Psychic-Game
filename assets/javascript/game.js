
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var wins = 0;
	var losses = 0;
	var guessesRemaining = 9;
	var guessedLetters = [];	

	document.onkeyup = function() {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	// console.log("letter: " +letter);
	 
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];

	
     if (letter === randomLetter) {
		 	guessesRemaining = 9; 
            wins++
            document.getElementById("wins").innerHTML = wins;
    
    		guessedLetters.push(letter);
 
            var lettersGuessed = (guessedLetters.join(","));
        	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
            guessedLetters = [];
	}
	 
	else if (letter !== randomLetter) {
		if (guessesRemaining > 0)  {
             
               guessesRemaining--;
               document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
            
                guessedLetters.push(letter);
        		
        		var lettersGuessed = (guessedLetters.join(","));
        		document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        } 
   
        else if (guessesRemaining === 0) {
                guessesRemaining = 9;
                losses++;
 			
 				document.getElementById("losses").innerHTML = losses;
 				guessedLetters = [];
 		}    
    }
                 
    }       
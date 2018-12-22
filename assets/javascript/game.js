//JavaScript
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var looses = 0;
var attempts = 10;
var lettersGuessed = [];

var userWins = document.getElementById("userWins");
var userLooses = document.getElementById("userLooses");
var userAttempts = document.getElementById("userAttempts");

// computer random picks the letter from array
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

//function to reset variables
    function resetVariables(){
    attempts = 10; 
    lettersGuessed = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}    

//when user presses the key
document.onkeyup = function(event) { 

    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    lettersGuessed.push(" " + userGuess);
    
//display user choices in array
    document.getElementById("userChoice").textContent = lettersGuessed;
                                           
    console.log(userGuess);
    console.log(computerGuess);

// compare user choice and computer pick
    if (userGuess == computerGuess) {
                 
        document.getElementById("userWins").textContent = wins;
        wins = wins + 1;
        alert("Yay! You won!!! Congratulations!");
        resetVariables();
    }
    else if (attempts == 0) {
    
        alert("Aw no! Sorry, you lost. Let's try again!");
        looses = looses + 1;
        document.getElementById("userLooses").textContent = looses;
        resetVariables();
    }
    else {
        attempts = attempts - 1;       
    }
    document.getElementById("userAttempts").textContent = attempts;
    document.getElementById("userChoice").textContent = lettersGuessed;
}

// display the variables
document.getElementById("userChoice").textContent = lettersGuessed;
document.getElementById("userLooses").textContent = looses;
document.getElementById("userWins").textContent = wins;
document.getElementById("userAttempts").textContent = attempts;


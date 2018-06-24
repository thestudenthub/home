function game() {
  var lastGuess = document.getElementById("paragraph")
  let randomNumber = Math.floor(Math.random()*1000);
  var userGuess = prompt("Guess a number between 1 and 1000!");
  while (userGuess !== randomNumber) {
    if (parseInt(userGuess) > randomNumber) {
      alert ("Guess lower");
      lastGuess = "Your Last Guess was: " + userGuess
      var userGuess = prompt("Guess a number between 1 and 1000!");
    } else if (parseInt(userGuess) < randomNumber) {
      alert ("Guess Higher");
      lastGuess = "Your Last Guess was: " + userGuess
      var userGuess = prompt("Guess a number between 1 and 1000!");
     } else {
        return alert("You Won! Refresh to try again!")
    }
    } 
  }


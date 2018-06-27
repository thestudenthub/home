function game() {
  let randomNumber = Math.floor(Math.random()*1000);
  var userGuess = prompt("Guess a number between 1 and 1000!");
  while (userGuess !== randomNumber) {
    if (parseInt(userGuess) > randomNumber) {
      alert ("Guess lower");
      var userGuess = prompt("Guess a number between 1 and 1000!");
    } else if (parseInt(userGuess) < randomNumber) {
      alert ("Guess Higher");
      var userGuess = prompt("Guess a number between 1 and 1000!");
     } else {
        return alert("You Won!")
    }
    } 
  }

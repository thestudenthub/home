function game() {
  document.getElementById("paragraph").innerHTML = lastGuess
  let randomNumber = Math.floor(Math.random()*1000);
  var userGuess = prompt("Guess a number between 1 and 1000!");
  while (userGuess !== randomNumber) {
    if (parseInt(userGuess) > randomNumber) {
      lastGuess = "\n Your last guess was: " + parseInt(userGuess);
      return lastGuess;
      var userGuess = prompt("Guess Lower!");
    } else if (parseInt(userGuess) < randomNumber) {
      lastGuess = "\n Your last guess was: " + parseInt(userGuess);
      return lastGuess;
      var userGuess = prompt("Guess Higher!");
    }
    lastGuess = "\n You guessed the number! Reload the page to try again!";
    return lastGuess
  }
}

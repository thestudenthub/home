function game(lastGuess) {
  document.getElementById("paragraph").innerHTML = lastGuess;
  let randomNumber = Math.floor(Math.random()*1000);
  var userGuess = prompt("Guess a number between 1 and 1000!");
  while (userGuess !== randomNumber) {
    if (parseInt(userGuess) > randomNumber) {
      var userGuess = prompt("Guess Lower!");
      lastGuess = parseInt(userGuess)
      return lastGuess;
    } else if (parseInt(userGuess) < randomNumber) {
      var userGuess = prompt("Guess Higher!");
      lastGuess = parseInt(userGuess)
      return lastGuess;
    }
    document.getElementById("paragraph").innerHTML = lastGuess;
    lastGuess = "\n You guessed the number! Reload the page to try again!";
    return lastGuess;
  }
}

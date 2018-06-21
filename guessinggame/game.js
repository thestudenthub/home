function game() {
  let randomNumber = Math.floor(Math.random()*1000);
  var text = "";
  var userGuess = prompt("Guess a number between 1 and 1000!");
  while (userGuess !== randomNumber) {
    document.getElementById("paragraph").innerHTML = text;
    if (parseInt(userGuess) > randomNumber) {
      var text = text + "\n Your last guess was: " + parseInt(userGuess);
      var userGuess = prompt("Guess Lower!");
    } else if (parseInt(userGuess) < randomNumber) {
      var text = text + "\n Your last guess was: " + parseInt(userGuess);
      var userGuess = prompt("Guess Higher!");
    }
    var text = text + "\n You guessed the number! Reload the page to try again!";
  }
}

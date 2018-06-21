function game() {
  let randomNumber = Math.floor(Math.random()*1000);
  let text = "";
  document.getElementById("paragraph").innerHTML = text;
  var userGuess = prompt("Guess a number between 1 and 1000!");
  while (userGuess !== randomNumber) {
    if (parseInt(userGuess) > randomNumber) {
      document.getElementById("paragraph").innerHTML = text;
      let text = text + "\n Your last guess was: " + parseInt(userGuess);
      var userGuess = prompt("Guess Lower!");
    } else if (parseInt(userGuess) < randomNumber) {
      document.getElementById("paragraph").innerHTML = text;
      let text = text + "\n Your last guess was: " + parseInt(userGuess);
      var userGuess = prompt("Guess Higher!");
    }
    let text = text + "\n You guessed the number! Reload the page to try again!";
  }
}

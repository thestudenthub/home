
function Game(){
let randomNumber = Math.floor(Math.random()*1000);

var userGuess = prompt("Guess a number between 1 and 1000!");


 document.write("<p> Your last guess was: <p>" + (parseInt(userGuess)))

while (userGuess != randomNumber){

if (parseInt(userGuess) === randomNumber){
  document.write("<p> You guessed the number! Reload the page to try again!<p>");

}if (parseInt(userGuess) > randomNumber){
  var userGuess = prompt("Guess Lower!")
}else{
  var userGuess = prompt("Guess Higher!")
 }
}
}


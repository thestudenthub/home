let randomNumber = Math.floor(Math.random()*1000);

var userGuess = prompt("Guess a number between 1 and 1000!");

while (userGuess != randomNumber){
 
if (parseInt(userGuess) === randomNumber){
  document.write("<p> You guessed the number! <p>");
  
}if (parseInt(userGuess) > randomNumber){
  document.write("<p> Guess lower! <p>")
  var userGuess = prompt("Guess a number between 1 and 1000!");
}else{
  document.write("<p> Guess Higher! <p>")
  var userGuess = prompt("Guess a number between 1 and 1000!"); 
}
}

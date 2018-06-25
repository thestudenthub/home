//To call this function please use sprGame()//
function sprGame(){
  var computerOutput = document.getElementById("computerChoice")
  var userChoice = prompt ("Do you choose Scissors, Paper or Rock?");
  var computerChoice = Math.random();
  if (!userChoice) {
    computerOutput.innerHTML = "Hey! You cheated! Reload the page!";
    document.write("\n");
  } else if (userChoice !== "Rock") {
    if (userChoice !== "Paper") {
      if (userChoice !== "Scissors") {
        computerOutput.innerHTML = "Please input either Scissors, Paper or Rock! Use Capitals!" + "\n";
      }
    }
  } else {
    computerOutput.innerHTML = `Player 1: ${userChoice}` + "\n";
  }
  if (computerChoice < 0.34) {
    (computerChoice = "Scissors");
    computerOutput.innerHTML = `Computer Chose: ${computerChoice}` + "\n";
  } else if (computerChoice >= 0.67) {
    (computerChoice = "Paper");
    computerOutput.innerHTML = `Computer Chose: ${computerChoice}` + "\n";
  } else {
    (computerChoice = "Rock");
    computerOutput.innerHTML = `Computer Chose: ${computerChoice}` + "\n";
  }
  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
      return alert ("Its a Draw!");
    }
    if (choice1 === "Rock") {
      if (choice2 === "Scissors") {
        return alert ("You Win!");
      }else{
        return alert ("You Lose!");
      }
    }
    if (choice1 === "Scissors") {
      if (choice2 === "Paper") {
        return alert ("You Win!");
      }else{
        return alert ("You Lose!");
      }
    }
    if (choice1 === "Paper") {
      if (choice2 === "Rock") {
        return alert ("You Win!");
      } else {
        return alert ("You Lose!");
      }
    }
  };
}

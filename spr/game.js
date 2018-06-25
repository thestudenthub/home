//To call this function please use sprGame()//
function sprGame() {
  var computerOutput = document.getElementById("computerChoice");
  var userChoice = prompt ("Do you choose Scissors, Paper or Rock?");
  var computerChoice = Math.random();
  if (!userChoice) {
    computerOutput.innerHTML = "Hey! You cheated! Reload the page!" + "<br />";
  } else if (userChoice !== "Rock") {
    if (userChoice !== "Paper") {
      if (userChoice !== "Scissors") {
        computerOutput.innerHTML = "Please input either Scissors, Paper or Rock! Use Capitals!" + "<br />";
      }
    }
  } else {
    computerOutput.innerHTML = `Player 1: ${userChoice}` + "<br />";
  }
  if (computerChoice < 0.34) {
    (computerChoice = "Scissors");
    computerOutput.innerHTML = `Computer Chose: ${computerChoice}` + "<br />";
  } else if (computerChoice >= 0.67) {
    (computerChoice = "Paper");
    computerOutput.innerHTML = `Computer Chose: ${computerChoice}` + "<br />";
  } else {
    (computerChoice = "Rock");
    computerOutput.innerHTML = `Computer Chose: ${computerChoice}` + "<br />";
  }
  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
      computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "It's A Draw!";
      return alert ("Its a Draw!");
    }
    if (choice1 === "Rock") {
      if (choice2 === "Scissors") {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Win!";
        return alert ("You Win!");
      } else {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Lose!";
        return alert ("You Lose!");
      }
    }
    if (choice1 === "Scissors") {
      if (choice2 === "Paper") {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Win!";
        return alert ("You Win!");
      } else {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Lose!";
        return alert ("You Lose!");
      }
    }
    if (choice1 === "Paper") {
      if (choice2 === "Rock") {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Win!";
        return alert ("You Win!");
      } else {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Lose!";
        return alert ("You Lose!");
      }
    }
  };
  compare();
}

//To call this function please use sprGame()//
function sprGame() {
  var computerOutput = document.getElementById("computerChoice");
  var userChoice = prompt ("Do you choose Scissors, Paper or Rock?");
  var computerChoice = Math.random();
  if (!userChoice) {
    computerOutput.innerHTML = "Hey! You cheated! Play Again!" + "<br />";
  } else if (userChoice !== "Rock") {
    if (userChoice !== "Paper") {
      if (userChoice !== "Scissors") {
        computerOutput.innerHTML = "Please input either Scissors, Paper or Rock! Use Capitals!" + "<br />";
      }
    }
  }
  if (computerChoice < 0.34) {
    computerChoice = "Scissors";
  } else if (computerChoice >= 0.67) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Rock";
  }
  function compare(choice1, choice2) {
    if (choice1 === choice2) {
      computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "It's A Draw!";
      return
    }
    if (choice1 === "Rock") {
      if (choice2 === "Scissors") {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Win!";
        return
      } else {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Lose!";
        return
      }
    }
    if (choice1 === "Scissors") {
      if (choice2 === "Paper") {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Win!";
        return
      } else {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Lose!";
        return
      }
    }
    if (choice1 === "Paper") {
      if (choice2 === "Rock") {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Win!";
        return
      } else {
        computerOutput.innerHTML = "Computer Chose: " + computerChoice + "<br />" + "You Lose!";
        return
      }
    }
  };
  compare(userChoice, computerChoice);
}

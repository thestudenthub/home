var userChoice = prompt ("Do you choose Scissors, Paper or Rock?");
var computerChoice = Math.random();
if (!userChoice) {
  document.write("Hey! You cheated! Reload the page!");
  document.write("\n");
} else if (userChoice != "Rock") {
  if (userChoice != "Paper") {
    if (userChoice != "Scissors") {
      document.write("Please input either Scissors, Paper or Rock! Use Capitals!")
      document.write("\n")
    }
  }
} else {
  document.write(`Player 1: ${userChoice}`);
  document.write("\n");
}
if (computerChoice < 0.34) {
  (computerChoice = "Scissors");
  document.write(`Computer Chose: ${computerChoice}`);
  document.write("\n");

} else if (computerChoice >= 0.67) {
  (computerChoice = "Paper");
  document.write(`Computer Chose: ${computerChoice}`);
  document.write("\n");
} else {
  (computerChoice = "Rock");
  document.write(`Computer Chose: ${computerChoice}`);
  document.write("\n");
}
var compare = function(choice1, choice2) {
 if (choice1 === choice2) {
  return "Its a Draw!";
 }
 if (choice1 === "Rock") {
   if (choice2 === "Scissors") {
    return "You Win!";
 }else{
    return "You Lose!";
  }
 }
  if (choice1 === "Scissors") {
   if (choice2 === "Paper") {
    return "You Win!";
 }else{
    return "You Lose!";
 }
  }
 if (choice1 === "Paper") {
   if (choice2 === "Rock") {
    return "You Win!";
 } else {
    return "You Lose!";
 }
 }
};

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
function getComputerChoice() {
  const choice = ['r', 'p', 's'];
  const randomNumber= Math.floor(Math.random() * 3);
  return choice[randomNumber];
}
function convert(letter) {
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissor";
}
function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smalluserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convert(user)}${smalluserWord} beats ${convert(comp)}${smallcompWord}.you win!`;

}
function lose(user, comp) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smalluserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convert(user)}${smalluserWord} loses ${convert(comp)}${smallcompWord}.you loses!`;
}
function draw(user, comp) {
  const smalluserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convert(user)}${smalluserWord} equals ${convert(comp)}${smallcompWord}.It's Draw!`;
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;
    default:

  }
  // console.log("user choice =    " + userChoice);
  // console.log("computer choice =     " + computerChoice);
}

function main() {
  rock_div.addEventListener('click', function () {
    game("r");

  })
  paper_div.addEventListener('click', function () {
    game("p");

  })
  scissor_div.addEventListener('click', function () {
    game("s");

  })

}
main();

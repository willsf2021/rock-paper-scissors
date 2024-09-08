let scoreValue = Number(localStorage.getItem("scoreValue"));
const scoreValue_span = document.querySelector("#score-value");
scoreValue_span.innerHTML = localStorage.getItem("scoreValue");
const paperButton_div = document.querySelector("#paper-container");
const scissorsButton_div = document.querySelector("#scissors-container");
const rockButton_div = document.querySelector("#rock-container");
const main_tag = document.querySelector("main");
const initialContainer_div = document.querySelector("#initial-container");
const resultContainer_div = document.querySelector(".result-container");
const userChoiceContainer = document.querySelector(".user-choice");
const computerChoiceContainer = document.querySelector(".computer-choice");
const imageUser = document.querySelector("#white-circle-image-user");
const imageComputer = document.querySelector("#white-circle-image-computer");
const playAgain = document.querySelector("#play-again");
const winMessage = document.querySelector("#you-win");
const loseMessage = document.querySelector("#you-lose");
const drawMessage = document.querySelector("#its-a-draw");

function main() {
  paperButton_div.addEventListener("click", () => {
    game("p");
  });
  scissorsButton_div.addEventListener("click", () => {
    game("s");
  });
  rockButton_div.addEventListener("click", () => {
    game("r");
  });
}

main();

function getComputerChoice() {
  const choices = ["p", "s", "r"];
  let option = Math.floor(Math.random() * 3);
  return choices[option];
}

function win(usersChoice, computerChoice) {
  initialContainer_div.style.display = "none";
  resultContainer_div.style.display = "flex";
  changePicture(usersChoice, computerChoice);

  setTimeout(() => {
    scoreValue++;
    localStorage.setItem("scoreValue", scoreValue.toString());
    scoreValue_span.innerHTML = scoreValue;
    playAgain.style.display = "inline-block";
    winMessage.style.display = "block";
  }, 1500);
}
function lose(usersChoice, computerChoice) {
  initialContainer_div.style.display = "none";
  resultContainer_div.style.display = "flex";
  changePicture(usersChoice, computerChoice);

  setTimeout(() => {
    scoreValue--;
    localStorage.setItem("scoreValue", scoreValue.toString());
    scoreValue_span.innerHTML = scoreValue;
    playAgain.style.display = "inline-block";
    loseMessage.style.display = "block";
  }, 1500);
}

function draw(usersChoice, computerChoice) {
  initialContainer_div.style.display = "none";
  resultContainer_div.style.display = "flex";
  changePicture(usersChoice, computerChoice);

  setTimeout(() => {
    playAgain.style.display = "inline-block";
    drawMessage.style.display = "block";
    return;
  }, 1500);
}

playAgain.addEventListener("click", () => {
  resultContainer_div.style.display = "none";
  playAgain.style.display = "none";
  drawMessage.style.display = "none";
  loseMessage.style.display = "none";
  winMessage.style.display = "none";
  computerChoiceContainer.style.display = "none";
  userChoiceContainer.classList.remove("paper");
  userChoiceContainer.classList.remove("scissors");
  userChoiceContainer.classList.remove("rock");
  computerChoiceContainer.classList.remove("paper");
  computerChoiceContainer.classList.remove("scissors");
  computerChoiceContainer.classList.remove("rock");
  imageUser.src = "";
  imageComputer.src = "";
  initialContainer_div.style.display = "inline-block";
});

function changePicture(user, computer) {
  userChoiceContainer.classList.remove("paper", "scissors", "rock");
  computerChoiceContainer.classList.remove("paper", "scissors", "rock");

  setTimeout(() => {
    computerChoiceContainer.style.display = "flex";
  }, 500);

  switch (user) {
    case "p":
      userChoiceContainer.classList.add("paper");
      imageUser.src = "images/icon-paper.svg";
      break;
    case "r":
      userChoiceContainer.classList.add("rock");
      imageUser.src = "images/icon-rock.svg";
      break;
    case "s":
      userChoiceContainer.classList.add("scissors");
      imageUser.src = "images/icon-scissors.svg";
      break;
  }

  switch (computer) {
    case "p":
      computerChoiceContainer.classList.add("paper");
      imageComputer.src = "images/icon-paper.svg";
      break;
    case "r":
      computerChoiceContainer.classList.add("rock");
      imageComputer.src = "images/icon-rock.svg";
      break;
    case "s":
      computerChoiceContainer.classList.add("scissors");
      imageComputer.src = "images/icon-scissors.svg";
      break;
  }
}
function game(usersChoice) {
  const computerChoice = getComputerChoice();

  if (usersChoice === computerChoice) {
    draw(usersChoice, computerChoice);
  } else {
    switch (usersChoice + computerChoice) {
      case "pr":
        win(usersChoice, computerChoice);
        break;
      case "rs":
        win(usersChoice, computerChoice);
        break;
      case "sp":
        win(usersChoice, computerChoice);
        break;
      case "rp":
        lose(usersChoice, computerChoice);
        break;
      case "sr":
        lose(usersChoice, computerChoice);
        break;
      case "ps":
        lose(usersChoice, computerChoice);
        break;
    }
  }
}

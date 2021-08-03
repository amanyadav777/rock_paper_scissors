  let pScore = 0;
  let cScore = 0;
  const playBtn = document.querySelector(".intro button");
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".match");
  const options = document.querySelectorAll(".options button");
  const winner = document.querySelector(".winner");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  const playscore = document.querySelector(".player_score p");
  const compscore = document.querySelector(".computer_score p");
  const hands = document.querySelector(".hands img");
  const computerOptions = ["rock", "paper", "scissors"];
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
    options.forEach((options) => {
      options.addEventListener("click", function () {
        const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
        computerHand.src = `./sources/${computerChoice}.png`;
        playerHand.src = `./sources/${this.textContent}.png`;

        }, 100);
      });
    });
  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      winner.textContent = "It is tie";
      return;
    }
    else if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        playscore.textContent = pScore;
        return;
      }
      if (computerChoice === "paper") {
        winner.textContent = "Computer wins";
        cScore++;
        compscore.textContent = cScore;
        return;
      }
    }
    else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        pScore++;
        playscore.textContent = pScore;
        return;
      }
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        compscore.textContent = cScore;
        return;
      }
    }
    else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
        pScore++;
        playscore.textContent = pScore;
        return;
      }
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        compscore.textContent = cScore;
        return;
      }
    }
  };

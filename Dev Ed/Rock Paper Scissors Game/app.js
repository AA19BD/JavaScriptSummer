const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = ""; //каждый раз когда playerHand.style.animation
        //и computerHand.style.animation заканчивает свое движение ,эта функция сделает все сначала
        //his.style.animation = "",и руки будут обратно дивгаться при следующем нажатии
      });
    });
    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //The Computer Choice
        const computerNumber = parseInt(Math.random() * 3); // Math.random()->0-1
        const computerChoice = computerOptions[computerNumber];
        //Animation-2
        setTimeout(() => {
          //Here we will call compareHands()
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        },2000);
        //Animation-1
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  //Update Score
  const updateScore = () => {
    const playerScore = document.querySelector(".PlayerScore p");
    const computerScore = document.querySelector(".ComputerScore p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //Checking who is winner
  const compareHands = (playerChoice, computerChoice) => {
    //Update TEXT(winner)
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      return; //it will end the function
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  playMatch();
  startGame(); //execute inner functions
};
game(); //start the game function

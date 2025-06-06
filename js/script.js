function getRandomNumber(max) {
    // This function takes a `max` number and returns a number from `0` to `max - 1` randomly

    let randomDecimalBetweenZeroAndOne,
        randomRationalNumberBetweenZeroAndMax,
        randomIntegerBetweenZeroAndMax;
    
    // S1: Get a random decimal number between 0(inclusive) and 1.
    randomDecimalBetweenZeroAndOne = Math.random(); // 0.57
    
    // S2: Get a random rational number between 0(inclusive) and max.
    randomRationalNumberBetweenZeroAndMax = randomDecimalBetweenZeroAndOne * max; // 0.57 * 2 = 1.14

    // s3: Get a random integer between 0(inclusive) and max.
    randomIntegerBetweenZeroAndMax = Math.floor(randomRationalNumberBetweenZeroAndMax); // 1

    return randomIntegerBetweenZeroAndMax;
}

function getComputerChoice() {
    let randomNumber,
        computerChoice;

    randomNumber = getRandomNumber(3);

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let promptMessage,
        humanChoice;

    promptMessage = "Make a move! Rock? Paper? or Scissors?";

    humanChoice = prompt(promptMessage);

    return humanChoice;
}


function getRoundResult(moveOne, moveTwo) {
    let roundResult;

    if (moveOne === moveTwo) {
        roundResult = "draw";
    } else if ((moveOne === "rock" && moveTwo === "paper") ||
    (moveTwo === "rock" && moveOne === "paper")) {
         roundResult = "paper";
    } else if ((moveOne === "paper" && moveTwo === "scissors") ||
    (moveTwo === "scissors" && moveOne === "paper")) {
        roundResult = "scissors";
    } else {
        // sd be safe?
        roundResult = "rock"
    }

    return roundResult;
}

function getRoundWinner(roundResult, humanChoice, computerChoice) {
    let roundWinner;

    if (roundResult === humanChoice) {
        roundWinner = "human";
    } else if (roundResult === computerChoice) {
        roundWinner = "computer";
    } else {
        roundWinner = "none";
    }

    return roundWinner;

}

function declareRoundWinner(winner) {
    if (winner === "human") {
        console.log("You win!");
    } else if (winner === "computer") {
        console.log("You lose!")
    } else {
        console.log("It's a draw!");
    }
}

function showRoundSummary(winner, computerChoice, humanChoice) {
    if (winner === "human") {
        console.log(`The computer chose "${computerChoice}". "${humanChoice}" beats "${computerChoice}"!`);
    } else if (winner === "computer") {
        console.log(`The computer chose "${computerChoice}". "${computerChoice}" beats "${humanChoice}"!`);
    } else {
        console.log(`The computer also chose "${computerChoice}".`);
    }
}

function playRound(humanChoice, computerChoice) {
    let caseInsensitiveHumanChoice,
        roundResult,
        roundWinner;

    caseInsensitiveHumanChoice = humanChoice.toLowerCase();

    roundResult = getRoundResult(caseInsensitiveHumanChoice, computerChoice);

    roundWinner = getRoundWinner(roundResult, caseInsensitiveHumanChoice, computerChoice);

    declareRoundWinner(roundWinner);

    showRoundSummary(roundWinner, computerChoice, caseInsensitiveHumanChoice);

    return roundWinner;
}


function playGame() {
    // this should invoke everything...this sets up the gameflow from start to finish
    let humanScore,
        computerScore,
        humanChoice,
        computerChoice,
        roundWinner;

    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }

    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Your score: ${humanScore}. Computer score: ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game! Your score: ${humanScore}. Computer score: ${computerScore}.`);
    } else {
        console.log(`The game was a tie! Your score: ${humanScore}. Computer score: ${computerScore}.`)
    }
    
}

playGame();
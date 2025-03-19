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

    if ((moveOne === "rock" && moveTwo === "paper") ||
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

function getRoundWinner(roundResult, humanChoice) {
    let roundWinner;

    if (roundResult === humanChoice) {
        roundWinner = "human";
    } else {
        roundWinner = "computer";
    }

    return roundWinner;

}

function playRound(humanChoice, computerChoice) {
    let caseInsensitiveHumanChoice,
        roundResult,
        roundWinner;

    caseInsensitiveHumanChoice = humanChoice.toLowerCase();

    roundResult = getRoundResult(caseInsensitiveHumanChoice, computerChoice);

    roundWinner = getRoundWinner(roundResult, caseInsensitiveHumanChoice);



    // getRoundWinner(roundResult, ca)
    // if (roundResult === caseInsensitiveHumanChoice) {
    //     console.log(`You win! The computer chose "${computerChoice}". "${humanChoice}" beats "${computerChoice}"!`);
    //     humanScore++;
    // } else {
    //     console.log(`You lose! The computer chose "${computerChoice}". "${computerChoice}" beats "${humanChoice}"!`);
    //     computerScore++;
    // }



}

function playGame() {
    // this should invoke everything...this sets up the gameflow from start to finish
    let humanScore,
        computerScore,
        humanChoice,
        computerChoice;

    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Your score: ${humanScore}. Computer score: ${computerScore}.`);
    } else {
        console.log(`You lost the game! Your score: ${humanScore}. Computer score: ${computerScore}.`);
    }
    
}

playGame();
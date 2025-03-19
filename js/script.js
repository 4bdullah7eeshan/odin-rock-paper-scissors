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

console.log(getComputerChoice());
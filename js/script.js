function getRandomNumber(max) {
    let randomDecimalBetweenZeroAndOne,
        randomRationalNumberBetweenZeroAndMax,
        randomIntegerBetweenZeroAndMax;
    
    randomDecimalBetweenZeroAndOne = Math.random();
    randomRationalNumberBetweenZeroAndMax = randomDecimalBetweenZeroAndOne * max;
    randomIntegerBetweenZeroAndMax = Math.floor(randomRationalNumberBetweenZeroAndMax);

    return randomIntegerBetweenZeroAndMax;
}

function getComputerChoice() {

}
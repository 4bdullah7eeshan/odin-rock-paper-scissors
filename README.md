# Rock Paper Scissors

Rock Paper Scissors game that can be played entirely in the console.

## Problem Solving Approach

> Overall game flow plan

### Understand

We are going to create the [Rock Paper Scissors](https://www.wikihow.com/Play-Rock,-Paper,-Scissors) game.

This game is going to be played:

- Between a user and the computer.
- Entirely in the console, meaning there is no UI.

### Plan

#### UI

**Does our game have a UI?**: No

#### Input

- Does our game have any input(s): Yes!
- What input(s) will our game have? Perhaps, entering 'Rock', 'Paper', or 'Scissors'.
- From where will get the inputs? From the user.
- How will we get the input(s) from the User? ...

#### Output

- Does our game have any output(s)? Yes! Duh!
- What is/are the desired outputs to our problem? ...
- Do we display it? Yes!
- How? ...

#### Steps From Input -> Output (Psuedocode)

- First, we will ask the user to make a move!***
    - Ask
    - provide a way for the user to ...
    - get the input
        - the input may or may not be right. check it and reprompt
    - store it in a var

    ODIN
    - Create a new function named getHumanChoice.
    - Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
        - Hint: Use the prompt method to get the user’s input.
        - You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later.
    - For now, just assume the user will always enter a valid choice.
    - Test what your function returns by using console.log.

    FINAL PLAN
    - Create a new function named getHumanChoice.
    - create a variable to store users input
    - setup a question to ask the user
        - create a var
        - store the question
    - provide a way for the user to ... 
        - use prompt
        - with it we can merge the question + the way to get the users input ...
        - once the user sends it we will get it
    - get the input
    - store in var
    - console.log

- Next, we will ask the computer to make a move!*
    - Once the move is made, we must get it as well, meaning show it to the user. That is simple.
- Next, we will compare the user's and the computer's move!
- Next, we will get the results
- Next, we will display the results
- Rounds? Best of 3/5/user's choice? ...

#### Divide & Conquer

*Based on the [TOP Guide](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#step-2-write-the-logic-to-get-the-computer-choice), we will first tackle the following:
- Write a function that randomly returns “rock”, “paper” or “scissors”.
    - Create a new function named `getComputerChoice`.
    - Write the code so that `getComputerChoice` will randomly return one of the following string values: “rock”, “paper” or “scissors”.
        - Use `Math.random` method. It returns a random number that’s greater than or equal to 0 and less than 1. We need to think about how we can use this to conditionally return one of the multiple choices.
            - Use it to return 1/2/3 randomly. 1/2/3 serves as a multiple choice.
                - How? The lesson linked [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) documentation. It has the following code we can use:

                    ```js
                    function getRandomInt(max) {
                        return Math.floor(Math.random() * max);
                    }

                    console.log(getRandomInt(3));
                    // Expected output: 0, 1 or 2
                    ```

            - Based on each choice, assign either “rock”, “paper” or “scissors”, eg. 1 for "rock", etc.
                - Once, we get the number 0/1/2, we can use conditional statements here to assign. 
            - Return the choice
    - Test that our function returns what we expect.
        - How? Using `console.log()`.

`getComputerChoice`
- Created a function
- inside this function, we need a choice randomly 0/1/2. How to get?
- Create another function that generates a random choice. the `getRandomInt`
- call it from this
- we get some value
- store it inside a var
- based on the result 0/1/2 make a move
    - var for move
    - based on rand it if else... set var
    - return var

`getRandomNumber`

- `Math.random()` gets a number between 0(inc) and 1.
- 0 <=  Math.random() < 1
- 0 <= Math.random() * n < n (multiplying the inequality with n, we get random numbers between 0 and n)
- but we want only integers...so ...
- 0 <= Math.floor(Math.random() * n) < n ; will give us integer bt 0 & n
- 

- next: Declare the players score variables

Your game will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.

- next: Write the logic to play a single round
Our game will be played round by round.

Let us think about a single round first.

We will need to write a function that takes the human and computer player choices as arguments:
- plays a single round, essentially meaning checking who won!
- increments the round winner’s score
- logs a winner announcement

Q: how will our function get the human and computer player choices? we need to call the earlier functions store their outputs and then pass to out fn.


Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.

draw too..

final steps:
- Create a new function named playRound.
- Define two parameters for playRound: humanChoice and computerChoice.
- Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
- now use the case-insensitive player choice and comp choice to get the game result
    - create a sep function that gets round result
        - takes two moves
        - based on the moves we will have a set of conditional statements...
        - which move wins will be declared/returned
    - we also need to keep track of who made the move?
        - once we get the round results.
        - check who is associated with thr round result...
        - 
- increment human score

CREATE A SEP FUNC FIRST

---

FINAL STEP: Write the logic to play the entire game

Our game will play 5 rounds. We will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

- Create a new function named playGame.
- Move your playRound function and score variables so that they’re declared inside of the new playGame function
- Play 5 rounds by calling playRound 5 times.
    - Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
    - Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.

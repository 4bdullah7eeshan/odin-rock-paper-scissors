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

- First, we will ask the user to make a move!
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
    - Test that our function returns what we expect.
        - How? Using `console.log()`.
// set initial values
let userInput;
let userPoints = 0;
let computerPoints = 0;

// generate random choice
function getComputerChoice () {

    options = ["rock", "paper", "scissors"];

    // generate random number 0 to 2
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound (userChoice, computerChoice) {

    if (userChoice === computerChoice)
        return "draw!";

    // check if user win
    if (userChoice === "rock" && computerChoice === "scissors") {
        userPoints += 1;
        return "You win! rock breaks scissors";
    }

    if (userChoice === "scissors" && computerChoice === "paper") {
        userPoints += 1;
        return "You win! scissors cuts paper";
    }

    if (userChoice === "paper" && computerChoice === "rock") {
        userPoints += 1;
        return "You win! paper beats rock";
    }

    // check if computer win
    if (computerChoice === "rock" && userChoice === "scissors") {
        computerPoints += 1;
        return "You lose! rock breaks scissors";
    }

    if (computerChoice === "scissors" && userChoice === "paper") {
        computerPoints += 1;
        return "You lose! scissors cuts paper";
    }

    if (computerChoice === "paper" && userChoice === "rock") {
        computerPoints += 1;
        return "You lose! paper beats rock";
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        userInput = window.prompt();
        console.log(playRound(userInput, getComputerChoice()));
    }

    // check the winner
    if (userPoints > computerPoints)
        console.log("You are the winner!", + userPoints + " points")
    else if (computerPoints > userPoints)
        console.log("Computer are the winner!", + computerPoints + " points")
    else
        console.log("game tied");
    
}

game();
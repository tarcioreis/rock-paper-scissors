// set initial values
let userInput;
let userPoints = 0;
let computerPoints = 0;


const container = document.querySelector(".container");

const buttons = document.createElement("div");
buttons.classList = "center";

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

const displayMessage = document.createElement("h4");
displayMessage.classList = "text-center";

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);
container.appendChild(buttons);
container.appendChild(displayMessage);
//container.insertBefore(displayMessage, rockButton);

// get user choice
function getButtonValue (event) {
    //console.log(event.target.innerText);
    const text = event.target.innerText;

    if (userPoints === 5) {
        window.alert("You won this game!!!");
        userPoints = 0;
        computerPoints = 0;
        displayMessage.innerText = "";
        document.querySelector("#userPointsTitle").innerText = userPoints;
        document.querySelector("#computerPointsTitle").innerText = computerPoints;
    }
    else if (computerPoints === 5) {
        window.alert("Computer won this game!!!");
        userPoints = 0;
        computerPoints = 0;
        displayMessage.innerText = "";
        document.querySelector("#userPointsTitle").innerText = userPoints;
        document.querySelector("#computerPointsTitle").innerText = computerPoints;
    }
    else
        playRound(text, getComputerChoice());
}

// generate random choice
function getComputerChoice () {

    options = ["Rock", "Paper", "Scissors"];

    // generate random number 0 to 2
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound (userChoice, computerChoice) {
    
    if (userChoice === computerChoice)
        displayMessage.innerText = "Draw!";

    // check if u)ser win
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        userPoints += 1;
        document.querySelector("#userPointsTitle").innerText = userPoints;
        displayMessage.innerText = "You win! rock breaks scissors";
    }

    if (userChoice === "Scissors" && computerChoice === "Paper") {
        userPoints += 1;
        document.querySelector("#userPointsTitle").innerText = userPoints;
        displayMessage.innerText = "You win! scissors cuts paper";
    }

    if (userChoice === "Paper" && computerChoice === "Rock") {
        userPoints += 1;
        document.querySelector("#userPointsTitle").innerText = userPoints;
        displayMessage.innerText = "You win! paper beats rock";
    }

    // check if computer win
    if (computerChoice === "Rock" && userChoice === "Scissors") {
        computerPoints += 1;
        document.querySelector("#computerPointsTitle").innerText = computerPoints;
        displayMessage.innerText = "You lose! rock breaks scissors";
    }

    if (computerChoice === "Scissors" && userChoice === "Paper") {
        computerPoints += 1;
        document.querySelector("#computerPointsTitle").innerText = computerPoints;
        displayMessage.innerText = "You lose! scissors cuts paper";
    }

    if (computerChoice === "Paper" && userChoice === "Rock") {
        computerPoints += 1;
        document.querySelector("#computerPointsTitle").innerText = computerPoints;
        displayMessage.innerText = "You lose! paper beats rock";
    }
}

function game () {
    
    rockButton.onclick = getButtonValue;
    paperButton.onclick = getButtonValue;
    scissorsButton.onclick = getButtonValue;

    // check the winner
    if (userPoints > computerPoints)
        console.log("You are the winner!", + userPoints + " points")
    else if (computerPoints > userPoints)
        console.log("Computer are the winner!", + computerPoints + " points")
    else
        console.log("game tied");
    
}

game();
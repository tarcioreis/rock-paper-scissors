// set initial values
let userInput;
let userPoints = 0;
let computerPoints = 0;


const container = document.querySelector(".container");

const buttons = document.createElement("div");
buttons.classList = "center";

const rockImg = document.createElement("img");
rockImg.id = "Rock";
rockImg.src = "./img/rock.png";

const paperImg = document.createElement("img");
paperImg.id = "Paper";
paperImg.src = "./img/paper.png";

const scissorsImg = document.createElement("img");
scissorsImg.id = "Scissors";
scissorsImg.src = "./img/scissors.png";

const displayMessage = document.createElement("h4");
displayMessage.classList = "text-center";
displayMessage.style.fontSize = "25px";

buttons.appendChild(rockImg);
buttons.appendChild(paperImg);
buttons.appendChild(scissorsImg);
container.appendChild(buttons);
//container.appendChild(displayMessage);
container.insertBefore(displayMessage, document.querySelector(".players"));

// get user choice
const getButtonValue = event => {
    
    const text = event.target.id;

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
const getComputerChoice = () => {

    options = ["Rock", "Paper", "Scissors"];

    // generate random number 0 to 2
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}


const playRound = (userChoice, computerChoice) => {
    
    if (userChoice === computerChoice)
        displayMessage.innerText = "Draw!";

    // check if user win
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

const game = () => {
    
    rockImg.onclick = getButtonValue;
    paperImg.onclick = getButtonValue;
    scissorsImg.onclick = getButtonValue;
}

game();

/*
<a href="https://www.flaticon.com/free-icons/rock-paper-scissors" title="rock paper scissors icons">Rock paper scissors icons created by Freepik - Flaticon</a>
 */
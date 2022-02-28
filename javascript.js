function getComputerChoice() {
    let rand = Math.random();
    let choice = "";

    if (rand < .3) {
        choice = "rock";
    } else if (rand < .6) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    console.log(rand);
    console.log(choice);
    return choice;
}

function getPlayerChoice() {
    return window.prompt("Enter your choice:");
}

function playRound(player, computer) {
    let pChoice = player.toUpperCase();
    let cChoice = computer.toUpperCase();
    let pWin = "You Win!";
    let cWin = "You Lose!";
    let tie = "Tie!";

    if (pChoice === "ROCK") {
        switch (cChoice) {
            case "ROCK":
                return `${tie} Rock ties with Rock.`;
            
            case "PAPER":
                return `${cWin} Rock loses to Paper.`

            case "SCISSORS":
                return `${pWin} Rock beats Scissors.`;
        }
    } else if (pChoice === "PAPER") {
        switch (cChoice) {
            case "ROCK":
                return `${pWin} Paper beats Rock.`;

            case "PAPER":
                return `${tie} Paper ties with Paper.`;

            case "SCISSORS":
                return `${cWin} Paper loses to Scissors.`;
        }

    } else if (pChoice === "SCISSORS") {
        switch (cChoice) {
            case "ROCK":
                return `${cWin} Scissors loses to Rock.`;

            case "PAPER":
                return `${pWin} Scissors beats Paper.`;

            case "SCISSORS":
                return `${tie} Scissors ties with Scissors.`;
        }

    } else {
        console.log("ERROR: pChoice doesn't match any expected values");    
    }

}

function playGame(rounds) {
    for (var i = 0; i < rounds; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

playGame(window.prompt("How many rounds to play:"));
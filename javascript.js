//Get HTML references
const playerDisplay = document.querySelector('#player-display');
const resultDisplay = document.querySelector('#result-display');
const computerDisplay = document.querySelector('#computer-display');

const buttons = document.querySelectorAll('.choiceButtons');

//Add Event Listeners to choice buttons
buttons[0].addEventListener('click', () => playGame('rock'));
buttons[1].addEventListener('click', () => playGame('paper'));
buttons[2].addEventListener('click', () => playGame('scissors'));

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

//ON BUTTON PRESSED
//  Display player choice
//    Display image in player choice display
//  Display computer choice
//    Display image in computer choice display
//  Run RPS function to get result
//  Display results
function displayPlayerChoice(choice) {
    const src = `images/${choice}.svg`;

    if (document.querySelector('#player-image') === null) {
        
        const img = document.createElement('img');
        img.src = src;
        img.setAttribute('id', 'player-image');

        document.querySelector('#player-display').appendChild(img);
    } else {
        document.querySelector('#player-image').src = src;
    }
    

    //Create img element linked to choice image and append it to #player-display
}

function displayComputerChoice(choice) {
    const imgString = `images/${choice}.svg`
}

//Called when one of the R-P-S buttons is pressed
function playGame(player) {
    console.log(`Player Choice: ${player}`);
    let p = player;
    let c = getComputerChoice();

    displayPlayerChoice(p);

    if (p === 'rock') {
        switch (c) {
            case 'rock':  
                //Display computer choice

        }
    } else if (p === 'paper') {
        //Display player choice

    } else if (p === 'scissors') {
        //Display player choice

    } else {
        console.log('ERROR: Player choice did not return rock || paper || scissors')
        return;
    }
}

function getPlayerChoice() {
    //return window.prompt("Enter your choice:");
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



// function playGame(rounds) {
//     for (var i = 0; i < rounds; i++) {
//         let playerChoice = getPlayerChoice();
//         let computerChoice = getComputerChoice();
//         console.log(playRound(playerChoice, computerChoice));
//     }
// }

//playGame(window.prompt("How many rounds to play:"));
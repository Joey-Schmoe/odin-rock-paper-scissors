//Get HTML references
const playerDisplay = document.querySelector('#player-display');
const resultDisplay = document.querySelector('#result-display');
const computerDisplay = document.querySelector('#computer-display');

const buttons = document.querySelectorAll('.choiceButtons');

//Add Event Listeners to choice buttons
buttons[0].addEventListener('click', () => playGame('rock'));
buttons[1].addEventListener('click', () => playGame('paper'));
buttons[2].addEventListener('click', () => playGame('scissors'));

let playerScore = 0;
let computerScore = 0;

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

    document.querySelector('#player-image').src = src;
}

function displayComputerChoice(choice) {
    const src = `images/${choice}.svg`

    document.querySelector('#computer-image').src = src;
}

//Called when one of the R-P-S buttons is pressed
function playGame(player) {
    console.log(`Player Choice: ${player}`);
    let p = player;
    let c = getComputerChoice();

    let w = "You Win!";
    let t = "Tie!";
    let l = "You Lose!"
    
    
    const resultTextDisplay = document.querySelector('#result-text');
    const resultWinnerTextDisplay = document.querySelector('#result-text-winner');

    let resultText = "";
    let winnerText = "";

    displayPlayerChoice(p);
    displayComputerChoice(c);

    if (p === 'rock') {
        switch (c) {
            case 'rock':  
                winnerText = t;
                resultText = 'ties with';
                break;

            case 'paper':
                winnerText = l;
                resultText = 'loses to';
                computerScore++;
                break;

            case 'scissors':
                winnerText = w;
                resultText = 'beats';
                break;
        }
    } else if (p === 'paper') {
        switch (c) {
            case 'rock':  
                winnerText = w;
                resultText = 'beats';
                break;

            case 'paper':
                winnerText = t;
                resultText = 'ties with';
                break;

            case 'scissors':
                winnerText = l;
                resultText = 'loses';
                break;
        }

    } else if (p === 'scissors') {
        switch (c) {
            case 'rock':  
                winnerText = l;
                resultText = 'loses to';
                break;

            case 'paper':
                winnerText = w;
                resultText = 'beats';
                break;

            case 'scissors':
                winnerText = t;
                resultText = 'ties with';
                break;
        }

    } else {
        console.log('ERROR: Player choice did not return rock || paper || scissors')
        return;
    }

    resultText = `${capitalize(p)} ${ resultText } ${capitalize(c)}`;

    //Write results and winner to html textcontent
    resultTextDisplay.textContent = resultText;
    resultWinnerTextDisplay.textContent = winnerText;
}

function capitalize(string) {
    let lowerString = string.toLowerCase();
    let firstLetter = string[0].toUpperCase();
    let capitalizedString = firstLetter + lowerString.slice(1);
    return capitalizedString;
}
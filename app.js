// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

// create an array to hold on to the state of past games
let pastGamesArr = [];

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!
    e.preventDefault();
    // get the name data from the form
    const data = new FormData(nameForm);
    // set the state to this data from the form
   
    name1 = data.get(`team-one`);
    name2 = data.get(`team-two`);
    // reset the form values
    nameForm.reset();
    displayCurrentGameEl(name1, name2, score1, score2);
});

teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    score1++;

    displayCurrentGameEl(name1, name2, score1, score2);
});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    score2++;

    displayCurrentGameEl(name1, name2, score1, score2);
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    score1--;

    displayCurrentGameEl(name1, name2, score1, score2);
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    score2--;

    displayCurrentGameEl(name1, name2, score1, score2);
});

finishGameButton.addEventListener('click', () => {
    // add the current game to an array of games in state.
    let gameObj = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2
    };
    
    pastGamesArr.push(gameObj);
    // HINT: it will be helpful to keep track of these games as objects with 4 properties, one for each piece of state we're tracking
    displayAllGames();

    // reset the initial state to start with a new form
    resetGame();
    displayCurrentGameEl(name1, name2, score1, score2);
});

function displayCurrentGameEl(name1, name2, score1, score2) {
    // clear out the current game div
    currentGameEl.textContent = '';
    // change the label to show team one's name;
    // change the label to show team two's name;
    if (name1 === '' || name1 === undefined){
        teamOneLabel.textContent = 'Team One';
    } else {
        teamOneLabel.textContent = name1;
    }
    
    if (name2 === '' || name2 === undefined){
        teamTwoLabel.textContent = 'Team Two';
    } else {
        teamTwoLabel.textContent = name2;
    }

    let gameObj = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2
    };
    
    // call the render game function to create a game element
    // append the element to the cleared out current game div
    let div = renderGame(gameObj);
    currentGameEl.append(div);
}

function displayAllGames() {
    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';

    // loop through the past games in state
    // render and append a past game for each past game in state
    for (let game of pastGamesArr){
        pastGamesEl.append(renderGame(game));
    }
}

function resetGame(){
    name1 = ``;
    name2 = ``;
    score1 = 0;
    score2 = 0;
}

displayCurrentGameEl(name1, name2, score1, score2);
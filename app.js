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

let name1 = '';
let name2 =  '';
let score1 = 0;
let score2 = 0;

nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!

    // get the name data from the form

    // set the state to this data from the form

    // reset the form values

    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    
    displayCurrentGameEl();});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score

    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score

    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score

    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    
    // add the current game to an array of games in state.
    // HINT: it will be helpful to keep track of these games as objects with 4 properties, one for each piece of state we're tracking

    displayAllGames();

    // reset the initial state to start with a new form

    displayCurrentGameEl();
});


function displayCurrentGameEl() {
    // clear out the current game div

    // change the label to show team one's name;
    // change the label to show team two's name;

    // call the render game function to create a game element
    
    // append the element to the cleared out current game div
}


function displayAllGames() {
    // clear out the past games list in the DOM

    // loop through the past games in state
    // render and append a past game for each past game in state
}


displayCurrentGameEl();

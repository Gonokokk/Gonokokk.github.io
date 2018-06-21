// import { expression, fieldExpression } from './task_of_number.js';
// import { expression2, fieldOfWord } from './task_dictionary.js';

const congratulations = document.querySelector('#congratulations');
const lose = document.querySelector('#lose');
const chooseTask = document.querySelector('#start');
const modal = document.querySelector('#modal');
const userEnter1 = document.querySelector('#result1');
const userEnter2 = document.querySelector('#result2');

export function nextRound() {
    userEnter1.value = '';
    userEnter2.value = '';
    congratulations.hidden = true;
    modal.hidden = false;
    chooseTask.hidden = false;
    lose.hidden = true;
    // expression.removeChild(fieldExpression);
    // expression2.removeChild(fieldOfWord);
}

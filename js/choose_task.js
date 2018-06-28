import task1 from './task_of_number.js';
import task2 from './task_dictionary.js';
import { clearPage } from './clear_page.js';
import { changeHealth1, changeHealth2 } from './health.js';
import { nextRoundT1 } from './next_round_t1.js';
import { nextRoundT2 } from './next_round_t2.js';

const character1 = document.querySelector('#myBar1');
const character2 = document.querySelector('#myBar2');
const num = 20;

export { num, character1, character2 };

export function chooseTasks() {
    const modal = document.querySelector('#modal');
    const congratulations = document.querySelector('#congratulations');
    const lose = document.querySelector('#lose');
    let k = 15;
    let l = 59;
    modal.hidden = true;
    const allTasks = [task1, task2];
    const randomFunc = allTasks[Math.floor(Math.random() * allTasks.length)];
    if (randomFunc === task1) {
        // task with number's expression
        nextRoundT1();
    } else {
        // task with dictionary
        nextRoundT2();
    };
}

import task1 from './task_of_number.js';
import task2 from './task_dictionary.js';
import { nextRound } from './next_round.js';

export function chooseTasks() {
    const modal = document.querySelector('#modal');
    const congratulations = document.querySelector('#congratulations');
    const lose = document.querySelector('#lose');
    modal.hidden = true;
    const allTasks = [task1, task2];
    const randomFunc = allTasks[Math.floor(Math.random() * allTasks.length)];
    if (randomFunc === task1) {
        // task with number's expression
        task1()
            .then((response) => {
                const btn1 = document.querySelector('#result1_btn');
                btn1.addEventListener('click', () => {
                    const userEnter = document.querySelector('#result1').value;
                    const fieldTask1 = document.querySelector('#field_task1');
                    fieldTask1.hidden = true;
                    // validate user's enter dates
                    if (response === parseInt(userEnter, 10)) {
                        congratulations.hidden = false;
                        setTimeout(nextRound, 4000);
                    } else {
                        lose.hidden = false;
                        setTimeout(nextRound, 4000);
                    }
                });
            });
    } else {
        // task with dictionary
        task2()
            .then((response) => {
                const btn2 = document.querySelector('#result2_btn');
                const userEnter = document.querySelector('#result2');
                btn2.addEventListener('click', () => {
                    const fieldTask2 = document.querySelector('#field_task2');
                    fieldTask2.hidden = true;
                    const userEnterVal = userEnter.value;
                    if (response === userEnterVal) {
                        congratulations.hidden = false;
                        setTimeout(nextRound, 4000);
                    } else {
                        lose.hidden = false;
                        setTimeout(nextRound, 4000);
                    }
                });
            });
    }
}
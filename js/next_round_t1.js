import task1 from './task_of_number.js';
import { changeHealth1, changeHealth2 } from './health.js';
import { clearPage } from './clear_page.js';
import { num, character1, character2 } from './choose_task.js';

export function nextRoundT1() {
	task1()
            .then((response) => {
            	console.log(response);
                const btn1 = document.querySelector('#result1_btn');
                btn1.addEventListener('click', () => {
                    const userEnter = document.querySelector('#result1').value;
                    const fieldTask1 = document.querySelector('#field_task1');
                    fieldTask1.hidden = true;
                    // validate user's enter dates
                    if (response === parseInt(userEnter, 10)) {
                        changeHealth2(num, character2);
                        congratulations.hidden = false;
                        setTimeout(clearPage, 4000);
                    } else {
                        changeHealth1(num, character1);
                        lose.hidden = false;
                        setTimeout(clearPage, 4000);
                    }
                });
            });
}
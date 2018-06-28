import task2 from './task_dictionary.js';
import { changeHealth1, changeHealth2 } from './health.js';
import { clearPage } from './clear_page.js';
import { num, character1, character2 } from './choose_task.js';

export function nextRoundT2() {
	task2()
            .then((response) => {
                console.log(response);
                const btn2 = document.querySelector('#result2_btn');
                const userEnter = document.querySelector('#result2');
                btn2.addEventListener('click', () => {
                    const fieldTask2 = document.querySelector('#field_task2');
                    fieldTask2.hidden = true;
                    const userEnterVal = userEnter.value;
                    if (response === userEnterVal) {
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

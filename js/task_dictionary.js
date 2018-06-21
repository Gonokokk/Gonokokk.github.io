import dictionary from '../json/dictionary.json';

const expression = document.querySelector('.word');
const fieldOfWord = document.createElement('p');

// choose random word
export default function task2() {
    return new Promise((resolve) => {
        const fieldTask2 = document.querySelector('.task2');
        fieldTask2.hidden = false;
        const word = Object.keys(dictionary);
        const array = {};
        for (const key in dictionary) {
            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                array[key] = dictionary[key];
            }
        }
        const randomNum = word[Math.floor(Math.random() * word.length)];
        const randomWord = array[randomNum];
        const transcription = randomWord;
        fieldOfWord.innerHTML = randomNum;
        expression.appendChild(fieldOfWord);
        resolve(transcription);
    });
}

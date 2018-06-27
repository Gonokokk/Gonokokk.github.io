import  SpriteSheet from './SpriteSheet.js';
import { loadImage } from './loaders.js';
import { loadHeroes } from './loaders.js';
import { createModal } from './modal.js';
import { chooseTasks } from './choose_task.js';

const canvas = document.querySelector('#screen');
const context = canvas.getContext('2d');

const canvas2 = document.querySelector('#screen2');
const context2 = canvas2.getContext('2d');

const hero1 = loadHeroes('./images/hero.png', 190, 250, 4);
const hero2 = loadHeroes('./images/monster.png', 200, 250, 4);

setInterval(() => {
    context2.clearRect(110, 340, 190, 250);
    drawImage(hero1, 100, 320, 190, 250);
}, 200);

setInterval(() => {
    context2.clearRect(650, 300, 200, 250);
    drawImage(hero2, 650, 300, 190, 250);
}, 200);

function drawImage(img, x, y, width, height) {
    if (!img.loaded) return;
    if (img.num >= img.count) img.num = 1;
    else img.num += 1;
    context2.drawImage(img.dom, img.width*(img.num - 1), 0, img.width, img.height, x, y, width, height);
}

loadImage('./images/tile.jpg')
    .then((image) => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('ground', 120, 75);
        sprites.define('bg', 150, 110);

        for (let x = 0; x < 100; ++x) {
            for (let y = 0; y < 50; ++y) {
                sprites.drawTile('bg', context, x, y);
            }
        }
        for (let x = 0; x < 100; ++x) {
            for (let y = 30; y < 40; ++y) {
                sprites.drawTile('ground', context, x, y);
            }
        }
    })
    .then(setTimeout(createModal, 3000));

// choose task
const chooseTask = document.querySelector('#start');
chooseTask.addEventListener('click', chooseTasks);

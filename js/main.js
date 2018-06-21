import SpriteSheet from './SpriteSheet.js';
import { loadImage } from './loaders.js';
import { createModal } from './modal.js';
import { chooseTasks } from './choose_task.js';

const canvas = document.querySelector('#screen');
const context = canvas.getContext('2d');

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
    });

loadImage('./images/hero.png')
    .then((image) => {
        const sprites = new SpriteSheet(image, 200, 250);
        sprites.define('hero', 1, 1);
        sprites.draw('hero', context, 0, 255);
    });

loadImage('./images/monster.png')
    .then((image) => {
        const sprites = new SpriteSheet(image, 200, 250);
        sprites.define('hero', 1, 1);
        sprites.draw('hero', context, 750, 235);
    })
    .then(setTimeout(createModal, 3000));

// choose task
const chooseTask = document.querySelector('#start');
chooseTask.addEventListener('click', chooseTasks);

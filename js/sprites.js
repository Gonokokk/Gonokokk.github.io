import SpriteSheet from './SpriteSheet.js';
import { loadImage } from './loaders.js';

export function loadBackgroundSprites() {
    return loadImage('./images/picture.jpg')
        .then((image) => {
            const bgImage = new SpriteSheet(image, 600, 600);
            bgImage.definePic('bg', 0, 0);
        });
}

export function loadHeroSprite() {
    return loadImage('./images/css_sprites.png')
        .then((image) => {
            const hero = new SpriteSheet(image, 50, 50);
            hero.define('idle', 20, 20, 50, 50);
            return hero;
        });
}

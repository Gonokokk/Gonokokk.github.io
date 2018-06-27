export function loadImage(url) {
    return new Promise((resolve) => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

export function loadHeroes(path, width, height, count) {
        const image = document.createElement('img');
        const result = {
            dom: image,
            width: width,
            height: height,
            count: count,
            loaded: false,
            num: 1
        };
        image.onload = function() {
            result.loaded = true;
        }
        image.src = path;
        return result;
}

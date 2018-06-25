const person1 = {health: 100};
const person2 = {health: 100};

export function changeHealth1(num, element) {
    const count = person1.health - num;
    const id = setInterval(frame, 260);
    function frame() {
        if (person1.health <= (count)) {
            clearInterval(id);
        } else if (person1.health > 0) {
            person1.health--;
            element.style.width = person1.health + '%';
            element.innerHTML = person1.health * 1;
            if (person1.health === num) {
                person1.isAlive = false;
            }
            return person1.health;
        } else {
            clearInterval(id);
        }
    }
}

export function changeHealth2(num, element) {
    const count = person2.health - num;
    const id = setInterval(frame, 260);
    function frame() {
        if (person2.health <= (count)) {
            clearInterval(id);
        } else if (person2.health > 0) {
            person2.health--;
            element.style.width = person2.health + '%';
            element.innerHTML = person2.health * 1;
            if (person2.health === num) {
                person2.isAlive = false;
            }
            return person2.health;
        } else {
            clearInterval(id);
        }
    }
}
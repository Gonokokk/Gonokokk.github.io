const expression = document.querySelector('.expression');
const fieldExpression = document.createElement('p');

// choose random expression
export default function task1() {
    return new Promise((resolve) => {
        const operation = ['+', '-', '*', '/'];
        const num1 = Math.floor((Math.random() * 100) + 1);
        const num2 = Math.floor((Math.random() * 10) + 1);
        const operator = Math.floor(Math.random() * operation.length);
        const fieldTask1 = document.querySelector('.task1');
        fieldTask1.hidden = false;
        fieldExpression.innerHTML = num1 + operation[operator] + num2;
        expression.appendChild(fieldExpression);
        resolve(eval(num1 + operation[operator] + num2));
    });
}

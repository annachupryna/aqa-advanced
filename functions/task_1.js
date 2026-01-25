`
Завдання 1
Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
`

// function desclaration
function calculateSquare(width, height) {
    return width * height;
}
console.log(calculateSquare(2, 3));

// function expression
let calculateSquareExpression = function(width, height) {
    return width * height;
}
console.log(calculateSquareExpression(2, 3));

// arrow function
let calculateSquareArrowFunction = (width, height) => width * height;
console.log(calculateSquareArrowFunction(2, 3));

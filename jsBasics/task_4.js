`Завдання 4.1

π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
Створіть змінну radius і присвойте їй числове значення радіуса кола.
Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
`;

let piNumber = Math.PI;
let radius = 3;
let circleSquare = piNumber * Math.pow(radius, 2);

console.log(circleSquare.toFixed(2));

`
Завдання 4.2
Створіть змінну length і присвойте їй числове значення довжини прямокутника.
Створіть змінну width і присвойте їй числове значення ширини прямокутника.
Обчисліть площу прямокутника за формулою length * width і виведіть результат.
`;
let length = 5;
let width = 3;
let square = length * width;

console.log(square);

`Завдання 4.3
Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
Створіть змінну height і присвойте їй числове значення висоти циліндра.
Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
`;

let cylinderRadius = 5;
let cylinderHeight = 7;
let cylinderVolume = Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight;

console.log(cylinderVolume.toFixed(2));

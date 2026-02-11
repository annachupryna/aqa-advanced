`
Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі
`;

const users = [
  { name: "John", age: 22 },
  { name: "Alice", age: 19 },
  { name: "Andrew", age: 20 },
];

for (const user of users) {
  console.log(`${user.name} is ${user.age} years old`);
}

for (const { name, age } of users) {
  console.log(`${name} is ${age} years old`);
}

`
Завдання 2

В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних
`

const fetchTodo = () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json());

const fetchUser = () =>
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json());

const allResult = Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => ({ todo, user }))
    .catch(console.error);

const raceResult = Promise.race([fetchTodo(), fetchUser()])
    .catch(console.error);

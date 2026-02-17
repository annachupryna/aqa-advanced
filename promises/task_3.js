const fetchTodoAsync = async () =>
  (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();

const fetchUserAsync = async () =>
  (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();

const runAll = async () => {
  try {
    return await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
  } catch (e) {
    console.error(e);
  }
};

const runRace = async () => {
  try {
    return await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
  } catch (e) {
    console.error(e);
  }
};

runAll().then(console.log);
runRace().then(console.log);

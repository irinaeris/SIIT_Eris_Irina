console.log("addTodo.js -", baseUrl);

const toDoInput = document.getElementById("todo-input");
const toDoButton = document.getElementById("todo-button");

toDoButton.onclick = function () {
  const newTodo = {
    name: toDoInput.value,
    completed: false,
  };
  console.log(toDoInput);

  createToDo(newTodo).then(function () {
    location.reload();
  });
};

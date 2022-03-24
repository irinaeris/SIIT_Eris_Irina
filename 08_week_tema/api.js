// Aici tinem request-urile la server

// Tinem codul care este share intre addTodo si displayTodos

// care este scopul variabilei? Global - vizibil in toata pagina din browser

const baseUrl = "http://localhost:3000";

function getTodos() {
  return fetch(`${baseUrl}/todos`).then(function (response) {
    return response.json();
  });
}

function createToDo(newToDo) {
  return fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newToDo),
  });
}

function updateDB(todoId) {
  const updateTodoId = todos[i].id;
  const updateToDoData = {
    name: todos[i].name,
    completed: false,
  };
  fetch(`${baseURL}/todos/${updateTodoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateToDoData),
  });
  updateDB();
}

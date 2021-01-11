import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ""
  ProxyState.todos.forEach(todo => template += todo.Template)
  document.getElementById("tasks").innerHTML = template
}

function _updateComplete() {
  document.getElementById("tasks-ratio").innerText = `${ProxyState.todos.filter(todo => !todo.completed).length} more tasks`
  // `${ProxyState.todos.filter(todo => todo.completed).length}/${ProxyState.todos.length}`
}

export default class TodoController {
  constructor() {
    //DONE Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
    ProxyState.on("todos", _updateComplete)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    if (e.target.description.value) {
      try {
        todoService.addTodo({ description: e.target.description.value });
      } catch (error) {
        console.error(error)
      }
    }
    e.target.reset()
  }

  updateComplete() {
    _updateComplete()
  }

  toggleTodoStatus(localId) {
    try {
      todoService.toggleTodoStatus(localId);
    } catch (error) {
      console.error(error)
    }
  }

  removeTodo(localId) {
    try {
      todoService.removeTodo(localId);
    } catch (error) {
      console.error(error)
    }
  }
}
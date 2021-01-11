import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";
import { generateId } from "../Utils/GenerateId.js";
import { displayService } from "./DisplayService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'Daniel/todos/'


class TodoService {
  async getTodos() {
    console.log("getting todos...")
    try {
      let res = await api.get(url);
      ProxyState.todos = res.data.map(todo => new Todo(todo, generateId()));
      displayService.status.todos = true;
    } catch (error) {
      console.error("Todo API wasn't reached. Todo interaction has been removed from the DOM.")
      this.noTodos()
      displayService.status.todos = true;
    }
  }

  async addTodo(todo) {
    let localId = generateId()
    ProxyState.todos = [...ProxyState.todos, new Todo(todo, localId)];
    let res = await api.post(url, todo);
    ProxyState.todos[ProxyState.todos.findIndex(todo => todo.localId == localId)] = new Todo(res.data, localId)
  }

  async toggleTodoStatus(localId) {
    let todo = await ProxyState.todos.find(todo => todo.localId == localId);
    todo.completed ? todo.completed = false : todo.completed = true;
    this.updateComplete()

    let apiId = ProxyState.todos.find(todo => todo.localId == localId)._id
    await api.put(url + apiId, todo);
  }

  async removeTodo(localId) {
    let apiId = ProxyState.todos.find(todo => todo.localId == localId)._id
    ProxyState.todos = ProxyState.todos.filter(todo => todo.localId != localId)

    await api.delete(url + apiId)
  }

  updateComplete() {
    window.app.todoController.updateComplete()
  }

  noTodos() {
    window.app.todoController.noTodos()
  }
}

const todoService = new TodoService();
export default todoService;
export default class Todo {
  constructor(data, localId) {
    this.localId = localId
    data._id ? this._id = data._id : null;
    this.completed = data.completed || false;
    this.description = data.description;
  }

  get Template() {
    return /*html*/`
    <div 
    id="task-${this.localId}"
    class="d-flex justify-content-left align-items-center p-1" >
      <input
      type="checkbox"
      class="todo-checkbox mr-1"
      onclick="app.todoController.toggleTodoStatus('${this.localId}')" 
      ${this.completed ? "checked" : ""}>
      <span>${this.description}</span>
      <button 
      onclick="app.todoController.removeTodo('${this.localId}')" >Delete</button>
    </div>
    `
  }
}
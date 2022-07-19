import React, { Component } from "react";

import Counter from "./Counter";
import Dropdown from "./dropdown/Dropdown";
import ColorPicker from "./colorPicker/ColorPicker";
import TodoList from "./todoList/TodoList";

const colorOptions = [
  {label: 'orange', color: '#DF7861'},
  {label: 'coral', color: '#4CACBC'},
  {label: 'green', color: '#94B49F'},
  {label: 'fiolet', color: '#9A86A4'},
  {label: 'bezh', color: '#DFBB9D'},
];

class Main extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'Todo-1', completed: false},
      {id: 'id-2', text: 'Todo-2', completed: false},
      {id: 'id-3', text: 'Todo-3', completed: false},
    ]
  };

  // Methods
  deleteTodo = (id) => {
    console.log("id ---> ", id);
    this.setState(prevState => (
      {todos: prevState.todos.filter(el => el.id !== id)}
    ))
};

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce((acc, el) => el.completed ? acc + 1 : acc, 0)

    return (
        <div className="App-main">
          <div className="main-container">

            <div className="todo-container">
              <p className="total-task">Total tasks: {todos.length}</p>
              <p className="total-task">Total completed tasks: {completedTodos}</p>
              <TodoList todos={todos} deleteTodo={this.deleteTodo}/>
            </div>

            <h2 className="title">You can fun with "Counter", "Dropdown" and "Colorpicker"</h2>
            <div className="trainee-container"> 
              <Counter initialValue={0}></Counter>
              <Dropdown/>
              <ColorPicker options={colorOptions}/>
            </div>
          </div>  
        </div>
    )
  };
};

export default Main;
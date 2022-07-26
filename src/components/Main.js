import React, { Component } from "react";
import shortid from "shortid";

import Counter from "./Counter";
import Dropdown from "./dropdown/Dropdown";
import ColorPicker from "./colorPicker/ColorPicker";
import TodoList from "./todoList/TodoList";
import TodoEditor from "./TodoEditor";
import Filter from "./Filter";
import Modal from "./Modal";

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
    ],
    filter: '',
    openModal: false
  };

  // Methods
  toggleModal = () => {
    this.setState(({openModal}) => ({
      openModal: !openModal
    }))

  };

  handleInputChange = event => {
    this.setState({inputValue: event.currentTarget.value})
  };

  deleteTodo = (id) => {
    this.setState(prevState => (
      {todos: prevState.todos.filter(el => el.id !== id)}
    ))
  };

  toggleCompleted = id => {
    this.setState(({todos}) => ({
      todos: todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    }))
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if(todo.id === id){
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     };
    //     return todo;
    //   })
    // }))
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false
    }
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos]
    }));
  };

  filterTodo = value => {
    this.setState({filter: value});
    // const normFilter = this.state.filter.toLowerCase();
    // const filteredTodos = this.state.todos.filter(el => 
    //  el.text.toLowerCase().includes(normFilter)
    //   );
  };

  render() {
    const { todos, openModal } = this.state;
    const completedTodos = todos.reduce((acc, el) => el.completed ? acc + 1 : acc, 0);

    return (
        <div className="App-main">
          
          
          <div className="main-container">
            <button type="button" onClick={this.toggleModal}>Open Modal</button>
          {openModal && 
          <Modal onClose={this.toggleModal}>
            <h3>This is Modal Window</h3>
            <p>We guarantee professional boost, high-performing teams, 
              a goal-oriented approach, friendly and positive atmosphere! 
              We are committed to high-quality results! If you are crazy 
              about development, join us</p>

              <button 
                    type="button" 
                    className="todoList__btn" 
                    onClick={this.toggleModal}>&#10007;
                </button>
              
          </Modal>
          }

            <TodoEditor onSubmit={this.addTodo}/>

            <div className="todo-container">
              <p className="total-task">Total tasks: {todos.length}</p>
              <p className="total-task">Total completed tasks: {completedTodos}</p>
              <Filter onSubmit={this.filterTodo}/>
              <TodoList todos={todos} deleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
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
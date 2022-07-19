import React from "react";

const TodoList = ({todos, deleteTodo} ) => (
    <ul className="todoList">
        {todos.map(({id, text, completed}) => 
        <li className="todoList__item" key={id}>
            <p className="todoList__text">{text}</p>
            <button type="button" className="todoList__btn" onClick={() => {deleteTodo(id)}}>&#10007;</button>
        </li>
        )}
    </ul>
);

export default TodoList;
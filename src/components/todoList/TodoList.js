import React from "react";
import classNames from 'classnames';

const TodoList = ({todos, deleteTodo, onToggleCompleted} ) => (
    <ul className="todoList">
        {todos.map(({id, text, completed}) => 
        <li key={id} className={classNames("todoList__item", {"completed": completed})}>
            <p className="todoList__text">{text}</p>
            <hr/>
            <div className="controls-wrapper">
                <label className={classNames("custom-label", {"custom-label--checked": completed})}>
                    <input 
                        type='checkbox' 
                        className="custom-checkbox" 
                        checked={completed} 
                        onChange={() => {onToggleCompleted(id)}}
                    />  
                </label>
                <button 
                    type="button" 
                    className="todoList__btn" 
                    onClick={() => {deleteTodo(id)}}>&#10007;
                </button>  
            </div> 
        </li>
        )}
    </ul>
);

export default TodoList;
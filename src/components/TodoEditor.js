import React, {Component} from "react";

class TodoEditor extends Component{
    state = {
        message: ''
    };

    // Methods
    handleChange = event => {
        this.setState({message: event.currentTarget.value});
        
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.message); 
        this.setState({message: ''})
    };


    render(){
        return(
            <form className="todo__editor" onSubmit={this.handleSubmit}>
                <h4>Here you can add new task</h4>
                <textarea className="editor-input" onChange={this.handleChange} value={this.state.message}></textarea>
                <button className="editor-btn" type="submit">Add</button>
            </form>
        )
    }
};

export default TodoEditor;
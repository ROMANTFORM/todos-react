import React, { Component } from "react";

class Filter extends Component {
    state = {
        searchValue: ''
    };

    // Methods
    handlerSearch = event => {
        this.setState({searchValue: event.currentTarget.value})
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchValue);
        this.setState({searchValue: ''})
    }

    render(){
        return (
            <form className="search-wrapper" onSubmit={this.handleSubmit}>
                <input 
                className="search-input" 
                type="text" 
                value={this.state.searchValue}
                placeholder="Search your task..."
                onChange={this.handlerSearch}
                />
                <button className="search-btn">Search</button>
            </form>
        )
    }
};

export default Filter;
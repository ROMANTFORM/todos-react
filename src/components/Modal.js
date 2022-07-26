import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{
    componentDidMount(){
       window.addEventListener('keydown', this.handleKeyDown)
    };
    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = event => {
        if(event.code === "Escape"){
            console.log(event.code)
            this.props.onClose();
        };
    };

    handleBackdropClick = event => {
        if(event.target === event.currentTarget){
            this.props.onClose();
        };
    };

    render(){
        return createPortal(
        <div className="modal__backdrop" onClick={this.handleBackdropClick}>
            <div className="modal__content">{this.props.children}</div>
        </div>, modalRoot)
    }
};

export default Modal;
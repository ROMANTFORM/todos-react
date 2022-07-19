import React, {Component} from "react";

class Dropdown extends Component {

    state = {
        visible: false
    }

    // Methods
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    render(){
        return (
          <div className="dropdown-wrapper">
            <button type="button" className="dropdown__show-btn" onClick={this.toggle}>
                {this.state.visible ? 'Hide' : 'Show'}
            </button>
            {this.state.visible && <div className="dropdown-menu">Dropdown menu</div>} 
          </div>  
        )
    }
};
    


export default Dropdown;
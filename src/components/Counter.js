import React, {Component} from "react";

import Controls from "./Controls";

class Counter extends Component {

    // default props
    static defaultProps = {
        initialValue: 0
    }

    state = {
        value: this.props.initialValue
    };

    // Methods
    handleIncrement = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value + 1
            }
        })
    };

    handlDecrement = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value - 1
            }
        })
    };

    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">{this.state.value}</span>
                <Controls
                onIncrement={this.handleIncrement}
                onDecrement={this.handlDecrement}
                />
                {/* Controls вынесены в отдельный компонент */}
                {/* <div className="Counter__controls">
                    <button className="Counter__btn" onClick={this.handleIncrement}>Up</button>
                    <button className="Counter__btn" onClick={this.handlDecrement}>Down</button>
                </div> */}
            </div>
        )
    };
};

export default Counter;
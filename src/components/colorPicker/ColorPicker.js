import React, { PureComponent } from "react";
import classNames from "classnames";

class ColorPicker extends PureComponent {

    state = {
        activeOptionIdx: 0,
        color: ''
    };

    // Methods
    setActiveIdx = (index) => {
        this.setState({activeOptionIdx: index, color: this.props.options[index].color})
    };

    makeActiveClass = (index) => {
        // использование библиотеки classnames
        return classNames('colorPicker__item', {
            'colorPicker__item--active': index === this.state.activeOptionIdx
        });
    

        // const optionClasses = ['colorPicker__item'];
        // if(index === this.state.activeOptionIdx){
        //     optionClasses.push('colorPicker__item--active');
        // };
        // return optionClasses.join(' ')
    };

    render(){
        return (
            <div className="colorPicker">
                <h2 style={{"color": this.state.color}}>Color Picker</h2>
                <div className="colorPicker-wrapper">
                    {this.props.options.map(({label, color}, index) => (
                            <span 
                            className={this.makeActiveClass(index)}
                            key={label}
                            style={{"backgroundColor": color}}
                            onClick={() => this.setActiveIdx(index)}
                            ></span>
                        )
                    )}  
                </div>
            </div>
        )
    }
};

export default ColorPicker;
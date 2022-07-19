import React from "react";

const Controls = ({onIncrement, onDecrement}) => (
    <div className="Counter__controls">
        <button className="Counter__btn" onClick={onIncrement}>Up</button>
        <button className="Counter__btn" onClick={onDecrement}>Down</button>
    </div>
);

export default Controls;
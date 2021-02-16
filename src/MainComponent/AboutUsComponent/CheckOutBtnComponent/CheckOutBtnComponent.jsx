import React from "react";
import './CheckOutBtn.css';


const CheckOutBtn = (props) => {
    return (
        <button className={'check__btn' + ' ' + props.className}>
            <span className="icon-check"></span>
            Check out with Zellbee
        </button>
    )
}

export default CheckOutBtn;
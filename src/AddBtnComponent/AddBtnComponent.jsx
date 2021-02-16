import React from "react";
import adb from './AddBtn.module.css';

const AddBtn = (props) => {
    return (
        <button className={adb.button + ' ' + props.className}>
            {props.btnText}
        </button>
    )
}

export default AddBtn;
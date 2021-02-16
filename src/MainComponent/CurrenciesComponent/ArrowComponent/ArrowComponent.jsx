import React from "react";
import '../Currencies.css';
import Slider from 'react-slick'

const Arrow = (props) => {
    const { onClick } = props
    return (
        <a className="link" onClick={onClick}>
            <span className="icon-arrow"></span>
        </a>
    )
}

export default Arrow;
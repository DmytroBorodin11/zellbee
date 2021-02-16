import React from 'react';
import  './MainBtn.css';
import h from "../HeaderComponent/Header.css";
import hr from '../HeroComponent/Hero.css';


const MainBtn = (props) => {
    console.log(props);
    return (
        <div>
            <a className={'main__btn' + ' ' + props.className}>
                Get started today
                <span className="icon-arrow"></span>
            </a>
        </div>
    )
}
export default MainBtn;
import React from 'react';
import logoHex from '../assets/imgs/hero_imgs/logo_hex.svg';
import logo from '../assets/imgs/hero_imgs/zellbee.svg';
import './Header.css';
import '../App.css';
import MainBtn from "../MainBtnComponent/MainBtnComponent";
const Header = (props) => {
    let burgerBtn = React.createRef();
    let navBar = React.createRef();
    let addClassToElem = () => {
        burgerBtn.current.classList.toggle('active');
        navBar.current.classList.toggle('active');
    }
    return (
        <div className={'header__wrapper'}>
            <header>
                <div className="container">
                    <div className={'header__row'}>
                        <div className={'logo__block'}>
                            <img src={logoHex} className='logo__hex'/>
                            <img src={logo} className='logo'/>
                        </div>
                        <nav onClick={addClassToElem} ref={navBar}>
                            <a className='header__link'>
                                Contact Us
                            </a>
                            <MainBtn className='header__link'/>
                        </nav>
                        <div className='burger'>
                            <div ref={burgerBtn} onClick={addClassToElem} className='burger__btn'>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
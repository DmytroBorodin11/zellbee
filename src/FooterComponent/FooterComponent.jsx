import React from "react";
import './Footer.css'
import logo_1 from '../assets/imgs/footer/footer__logo.svg';
import logo_2 from '../assets/imgs/footer/f_logo.svg';


const Footer = (props) => {
    return (
        <footer>
            <div className="container c_12">
                <div className="footer__logo__block">
                    <img className="logo__1" src={logo_1}/>
                    <img className="logo__2" src={logo_2}/>
                </div>
                <div className="footer__menu__block">
                    <div className="menu__list">
                        <h3 className="menu__title">
                            PRODUCT
                        </h3>
                        <ul>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Home
                                </a>
                            </li>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Features
                                </a>
                            </li>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu__list">
                        <h3 className="menu__title">
                            COMPANY
                        </h3>
                        <ul>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    About
                                </a>
                            </li>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Jobs
                                </a>
                            </li>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Affiliates
                                </a>
                            </li>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu__list">
                        <h3 className="menu__title">
                            SUPPORT
                        </h3>
                        <ul>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Help Center
                                </a>
                            </li>
                            <li className="footer_list__item">
                                <a className="footer__link">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__social__block">
                    <a className="footer__social__link">
                        <span className="icon-social_1"></span>
                    </a>
                    <a className="footer__social__link">
                        <span className="icon-social_2"></span>
                    </a>
                    <a className="footer__social__link">
                        <span className="icon-social_3"></span>
                    </a>
                    <a className="footer__social__link">
                        <span className="icon-social_4"></span>
                    </a>
                </div>
            </div>
            <div className="container c_13">
                <p className="footer__text">
                    © 2020
                </p>
                <div className="footer__text__block">
                    <p className="footer__text">
                        Privacy policy
                    </p>
                    <p className="footer__text">
                        Terms
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
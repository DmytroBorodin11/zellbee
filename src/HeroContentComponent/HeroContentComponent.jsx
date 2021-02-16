import React from "react";
import cc from './HeroContent.module.css';
import dec from '../assets/imgs/hero_imgs/arrow_dig.svg'
import user from '../assets/imgs/hero_imgs/user.svg';
import money from '../assets/imgs/hero_imgs/money.svg';
import diagram from '../assets/imgs/hero_imgs/diagram.png';
import mockup from '../assets/imgs/hero_imgs/mockup.png';
import diagram_bg from '../assets/imgs/hero_imgs/diagram_bg.png';
import geo from '../assets/imgs/hero_imgs/geo.svg';
import paypal from '../assets/imgs/hero_imgs/paypal.svg';
import bitcoin from '../assets/imgs/hero_imgs/bitcoin.svg';
import stripe from '../assets/imgs/hero_imgs/stripe.svg';
import AddBtn from "../AddBtnComponent/AddBtnComponent";

const HeroContent = (props) => {
    return (
        <div className={cc.content__block}>
            <div className={cc.icon_1}>
                <div className={cc.icon__block}>
                    <img src={geo}/>
                </div>
            </div>
            <div className={cc.icon_2}>
                <div className={cc.icon__block}>
                    <img src={paypal}/>
                </div>
            </div>
            <div className={cc.icon_3}>
                <div className={cc.icon__block}>
                    <img src={stripe}/>
                </div>
            </div>
            <div className={cc.icon_4}>
                <div className={cc.icon__block}>
                    <img src={bitcoin}/>
                </div>
            </div>
            <h2 className={cc.title}>
                Report
            </h2>
            <p className={cc.subtitle}>
                Joanne Doe Shop’s
            </p>
            <div className={cc.grid__box}>
                <div className={cc.box__1}>
                    <div className={cc.box__3}>
                        <div className={cc.grid__item + ' ' + cc.grid__item_1}>
                            <div className={cc.block}>
                                <div className={cc.text__block}>
                                    <p className={cc.grid__item__number}>330</p>
                                    <p className={cc.grid__item__title}>TOTAL ORDERS</p>
                                </div>
                                <img src={dec}/>
                            </div>
                        </div>
                        <div className={cc.grid__item + ' ' + cc.grid__item_1}>
                            <div className={cc.block}>
                                <div className={cc.text__block}>
                                    <p className={cc.grid__item__number}>80</p>
                                    <p className={cc.grid__item__title}>REPEAT CUSTOMERS</p>
                                </div>
                                <img src={user}/>
                            </div>
                        </div>
                    </div>
                    <div className={cc.grid__item + ' ' + cc.grid__item_4}>
                        <div className={cc.block}>
                            <div className={cc.text__blokc}>
                                <p className={cc.grid__item__title}>MARKETING STATISTIC</p>
                                <div className={cc.legend__block}>
                                    <p className={cc.legend__text}>760</p>
                                    <span className={cc.legend__bar + ' ' + cc.bar1}></span>
                                    <p className={cc.legend__text}>920</p>
                                    <span className={cc.legend__bar + ' ' + cc.bar2}></span>
                                    <p className={cc.legend__text}>460</p>
                                    <span className={cc.legend__bar + ' ' + cc.bar3}></span>
                                </div>
                            </div>
                            <img src={diagram}/>
                        </div>
                    </div>
                    <div className={cc.grid__item + ' ' + cc.grid__item_6}>
                        <div className={cc.block}>
                            <div className={cc.price__block}>
                                <p className={cc.price__text}>$ 3.1 K</p>
                                <p className={cc.price__subtext}>+10%</p>
                            </div>
                            <p className={cc.grid__item__title}>SALES</p>
                            <img src={diagram_bg}/>
                            <div className={cc.footer}>
                                <p className={cc.footer__text}>Day 1</p>
                                <p className={cc.footer__text}>Day 30</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cc.box__2}>
                    <div className={cc.grid__item + ' ' + cc.grid__item_3}>
                        <div className={cc.block}>
                            <img src={money}/>
                            <div className={cc.text__block}>
                                <p className={cc.grid__item__number}>$250k</p>
                                <p className={cc.grid__item__title}>REPEAT CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                    <div className={cc.grid__item + ' ' + cc.grid__item_5}>
                        <div className={cc.block}>
                            <div className={cc.header}>
                                <img src={mockup}/>
                            </div>
                            <div className={cc.body}>
                                <p className={cc.body__title}>
                                    Your product here
                                </p>
                                <div className={cc.price__block}>
                                    <div className={cc.legend__block}>
                                        <span className={cc.legend__bar + ' ' + cc.bar1}></span>
                                        <span className={cc.legend__bar + ' ' + cc.bar2}></span>
                                    </div>
                                    <p className={cc.price}>$5.9</p>
                                </div>
                                <AddBtn btnText={'Add to cart'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent;
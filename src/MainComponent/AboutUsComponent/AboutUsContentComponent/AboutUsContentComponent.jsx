import React from "react";
import './AboutUsContent.css';
import user from '../../../assets/imgs/icon_font/user.svg';
import ava from '../../../assets/imgs/about_us_imgs/ava.jpg';
import geo from '../../../assets/imgs/hero_imgs/geo.svg';
import paypal from '../../../assets/imgs/hero_imgs/paypal.svg';
import stripe from '../../../assets/imgs/about_us_imgs/partner_9.svg';
import check_bg from '../../../assets/imgs/about_us_imgs/check_bg.svg';
import cancel from '../../../assets/imgs/icon_font/cancel.svg';
import p_1 from '../../../assets/imgs/about_us_imgs/partner_1.svg';
import p_2 from '../../../assets/imgs/about_us_imgs/partner_2.jpg';
import p_3 from '../../../assets/imgs/about_us_imgs/partner_3.svg';
import p_4 from '../../../assets/imgs/about_us_imgs/partner_4.svg';
import p_8 from '../../../assets/imgs/about_us_imgs/partner_8.svg';
import p_9 from '../../../assets/imgs/about_us_imgs/icon_5.svg';
import AddBtn from "../../../AddBtnComponent/AddBtnComponent";


const AboutUsContent = (props) => {
    return (
        <div className='aboutUs_comp'>
            <div className="header__block">
                <p className="profile">
                    Profile
                </p>
                <div className="user__icon_block">
                    <img src={user}/>
                </div>
            </div>
            <div className="ava__block">
                <img src={ava}/>
                <p className="ava__name">
                    Your shop name
                </p>
            </div>
            <div className="menu__bar">
                <p className="m__link active">
                    Products
                </p>
                <p className="m__link">
                    Contact
                </p>
                <p className="m__link">
                    Feedback
                </p>
            </div>
            <div className="ab__partners__block">
                <div className="ab__part__block p_1">
                    <div className="img__block">
                        <img src={p_1}/>
                    </div>
                    <p className="text__bar"></p>
                    <p className="text__bar mid"></p>
                </div>
                <div className="ab__part__block p_2">
                    <div className="img__block">
                        <img src={p_2}/>
                    </div>
                    <p className="text__bar"></p>
                    <p className="text__bar mid"></p>
                </div>
                <div className="ab__part__block p_3">
                    <div className="img__block">
                        <img src={p_3}/>
                    </div>
                    <p className="text__bar"></p>
                    <p className="text__bar mid"></p>
                </div>
                <div className="ab__part__block p_4">
                    <div className="img__block">
                        <img src={p_4}/>
                    </div>
                    <p className="text__bar"></p>
                    <p className="text__bar mid"></p>
                </div>
            </div>
            <div className="ab__card">
                <div className="ab__card_header">
                    <div className="ab__check_block">
                        <img src={check_bg}/>
                        <span className="icon-check"></span>
                    </div>
                    <button className="ab__cancel_btn">
                        <img src={cancel}/>
                    </button>
                </div>
                <div className="ab__card_body">
                    <p className="title">
                        Checkout
                    </p>
                    <p className="subtitle">
                        Select payment method
                    </p>
                    <div className="ab__card__body_block">
                        <div className="partner_block paypal">
                            <img src={paypal}/>
                        </div>
                        <div className="partner_block stripe">
                            <img src={stripe}/>
                        </div>
                        <div className="partner_block bitcoin">
                            <img src={p_8}/>
                        </div>
                        <div className="partner_block geo">
                            <img src={geo}/>
                        </div>
                        <div className="partner_block mastercard">
                            <img src={p_9}/>
                        </div>
                        <div className="partner_block">
                            <p className="text">
                                + more
                            </p>
                        </div>
                    </div>
                    <div className="ab__price__block">
                        <p className="subtitle">
                            Total
                        </p>
                        <p className="price">
                            $20.00
                        </p>
                    </div>
                    <div className="ab__buttons_block">
                        <AddBtn btnText={'Back'}/>
                        <AddBtn btnText={'Continue'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent;
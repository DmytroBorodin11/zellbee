import React from "react";
import './AboutUs.css';
import ListItem from "../ListItemComponent/ListItemComponent";
import hex_bg_1 from '../../assets/imgs/about_us_imgs/hex_bg_1.svg';
import hex_bg_2 from '../../assets/imgs/about_us_imgs/hex_bg_2.svg';
import hex_bg_3 from '../../assets/imgs/about_us_imgs/hex_bg_3.svg';
import hex_bg_4 from '../../assets/imgs/about_us_imgs/hex_bg_4.svg';
import hex_bg_5 from '../../assets/imgs/about_us_imgs/hex_bg_5.svg';
import hex_group_bg_1 from '../../assets/imgs/about_us_imgs/hex_group_bg_1.svg';
import hex_group_bg_2 from '../../assets/imgs/about_us_imgs/hex_group_bg_2.svg';
import hex_group_bg_3 from '../../assets/imgs/about_us_imgs/hex_group_bg_3.svg';
import ellipse from '../../assets/imgs/about_us_imgs/ellipse_bg.svg';
import hex_icon from '../../assets/imgs/about_us_imgs/hex_icon.svg';
import p_5 from '../../assets/imgs/about_us_imgs/partner_5.svg';
import p_6 from '../../assets/imgs/about_us_imgs/partner_6.svg';
import p_7 from '../../assets/imgs/about_us_imgs/partner_7.svg';
import ContentWrap from "../../ContentWrapComponent/ContentWrapComponent";
import AddBtn from "../../AddBtnComponent/AddBtnComponent";
import CheckOutBtn from "./CheckOutBtnComponent/CheckOutBtnComponent";
import MainBtn from "../../MainBtnComponent/MainBtnComponent";

const AboutUs = (props) => {
    return (
        <section className='s_1'>
            <div className="container">
                <p className="section__name">
                    ABOUT US
                </p>
                <h2 className="section__title">
                    Your Go-To place to sell any digital items
                </h2>
            </div>
            <div className="container c_1">
                <div className="row">
                    <div className="left__block">
                        <img src={hex_bg_1} className="hex__bg"/>
                        <img src={hex_group_bg_1} className="hex__group_bg hex__group__bg"/>
                        <ContentWrap className='content__group' cwLogo={hex_icon} innerComp='AboutUsContent'/>
                    </div>
                    <div className="right__block">
                        <h3 className="block__title">
                            ZellBee is the most powerful platform to sell your digital products and downloads
                            online.
                        </h3>
                        <p className="block__text">
                            ZellBee is the most powerful platform to sell your digital products and downloads
                            online. Build your brand online with the following solutions on your own.
                        </p>
                        <ListItem className='check' iconText={'Customizable Store Templates'}/>
                        <ListItem className='check' iconText={'Robust Analytics'}/>
                        <ListItem className='check' iconText={'Financial Reports'}/>
                        <ListItem className='check' iconText={'Personalized Coupons'}/>
                        <ListItem className='check' iconText={'Developer Support, and more'}/>
                    </div>
                </div>
            </div>
            <div className="container c_2">
                <div className="row">
                    <div className="left__block">
                        <img src={hex_bg_2} className="hex__bg"/>
                        <img src={hex_group_bg_2} className="hex__group_bg hex__group__bg"/>
                        <img src={ellipse} className='ellipse__bg'/>
                        <div className="ab__card">
                            <div className="ab__card__wrapper">
                                <div className="ab__card_header">
                                    <img src={p_6}/>
                                </div>
                                <div className="ab__card_body">
                                    <p className="card__body_text">
                                        Lifetime VPN key
                                    </p>
                                    <div className="bars_block">
                                        <div className="block">
                                            <p className="card__body__text_bar"></p>
                                            <p className="card__body__text_bar"></p>
                                            <p className="card__body__text_bar"></p>
                                            <p className="card__body__text_bar"></p>
                                        </div>
                                        <p className="price__text">
                                            $299
                                        </p>
                                    </div>
                                    <AddBtn btnText={'Add to cart'} className={'c2_btn'}/>
                                </div>
                                <CheckOutBtn className={'c2_check_btn'}/>
                                <div className="card__partner__block p_5">
                                    <div className="block">
                                        <img src={p_5}/>
                                    </div>
                                </div>
                                <div className="card__partner__block p_7">
                                    <div className="block">
                                        <img src={p_7}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right__block">
                        <h3 className="block__title">
                            Your business is important for us! We made a platform that understands that.
                        </h3>
                        <p className="block__text">
                            On ZellBee, you can embed our checkout solution on your website. You can also use our store
                            theme customizer, or you can add your custom store theme.
                        </p>
                        <ListItem className='check' iconText={'Just 3 minute to launch your store'}/>
                        <ListItem className='check' iconText={'Lorem ipsum dolor sit amet'}/>
                        <ListItem className='check' iconText={'Consectetur adipiscing elit'}/>
                    </div>
                </div>
            </div>
            <div className="container c_3">
                <div className="row">
                    <div className="left__block">
                        <img src={hex_bg_1} className="hex__bg"/>
                        <img src={hex_group_bg_1} className="hex__group_bg hex__group__bg"/>
                        <div className="ab__card">
                            <div className="ab__card__icon">
                                <span className="icon-attention"></span>
                            </div>
                            <p className="ab__card__title">
                                With others,
                                Sorry, you can’t sell here
                            </p>
                            <div className="block">
                                <p className="text__bar"></p>
                                <p className="text__bar"></p>
                                <p className="text__bar"></p>
                                <p className="text__bar"></p>
                            </div>
                        </div>
                        <div className="ab__card">
                            <div className="ab__card__icon">
                                <span className="icon-check"></span>
                            </div>
                            <p className="ab__card__title">
                                But with us,
                                Selling anything , anywhere -
                                no restrictions.
                            </p>
                            <div className="block">
                                <p className="text__bar"></p>
                                <p className="text__bar"></p>
                            </div>
                        </div>
                    </div>
                    <div className="right__block">
                        <h3 className="block__title">
                            Do you suffer from Account or other marketplace suspensions?
                        </h3>
                        <p className="block__text">
                            We never limit or ask your KYC forms. Simply NO BS. You can sell whatsoever you want, anywhere, for anybody.
                            Why suck:
                        </p>
                        <ListItem className='cancel' iconText={'No KYC '}/>
                        <ListItem className='cancel' iconText={'No ID/Profile verifications'}/>
                    </div>
                </div>
            </div>
            <div className="container c_4">
                <img src={hex_group_bg_3}/>
                <img src={hex_bg_3}/>
                <img src={hex_bg_4}/>
                <img src={hex_bg_5}/>
                <div className="row">
                    <div className="left__block">
                        <div className="fees__block">
                            <h3 className="block__title">
                                Fees
                            </h3>
                            <div className="dm__block">
                                <div className="dm dm__1">
                                    <div className="service__name">
                                        <span>
                                            Zellbee
                                        </span>
                                    </div>
                                    <p className="price__text">
                                        $490
                                    </p>
                                    <p className="subtext">
                                        per year
                                    </p>
                                </div>
                                <div className="dm dm__2">
                                    <div className="service__name">
                                        <span>
                                            Other
                                        </span>
                                    </div>
                                    <p className="price__text">
                                        $18000
                                    </p>
                                    <p className="subtext">
                                        per year
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right__block">
                        <p className="section__name">
                            TITILE GOES HERE
                        </p>
                        <h3 className="question">
                            Are shoppy/sellix secretly overtaking you?
                        </h3>
                        <p className="text">
                            Selling 1000$/day with them costing you 18000$/year
                            while with us it's just less than 490$/year !
                        </p>
                        <MainBtn/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
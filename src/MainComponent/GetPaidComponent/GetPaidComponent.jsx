import React from "react";
import './GetPaid.css'
import hex_bg_1 from '../../assets/imgs/get_paid/hex_bg_1.svg';
import card_img_1 from '../../assets/imgs/get_paid/partner_1.svg';
import card_img_3 from '../../assets/imgs/get_paid/card_img_3.png';
import card_img_4 from '../../assets/imgs/get_paid/card_img_4.png';
import card_img_5 from '../../assets/imgs/get_paid/card_img_5.png';
import card_img_6 from '../../assets/imgs/get_paid/card_img_6.png';
import inr_card_img_1 from '../../assets/imgs/get_paid/inr_card_img_1.svg';
import inr_card_img_2 from '../../assets/imgs/get_paid/inr_card_img_2.svg';
import inr_card_img_3 from '../../assets/imgs/get_paid/inr_card_img_3.svg';
import p_2 from '../../assets/imgs/get_paid/partner_2.svg';
import p_3 from '../../assets/imgs/get_paid/partner_3.svg';
import p_4 from '../../assets/imgs/get_paid/partner_4.svg';
import p_5 from '../../assets/imgs/get_paid/partner_5.svg';
import AddBtn from "../../AddBtnComponent/AddBtnComponent";
import CheckOutBtn from "../AboutUsComponent/CheckOutBtnComponent/CheckOutBtnComponent";
import ListItem from "../ListItemComponent/ListItemComponent";

const GetPaid = (props) => {
    return (
        <section className='s_2'>
            <div className="wrapper">
                <div className="container c_5">
                    <p className="section__name">
                        TITILE GOES HERE
                    </p>
                    <h2 className="section__title">
                        Want to Get Paid Instantly & Directly?
                    </h2>
                    <p className="section__text">
                        For your Digital Goods With No suspension Now!
                        Let ZellBee Handle on everything :)
                        Get your store up and running in less than just 5 minutes.
                        ZellBee is For creators and online businesses who hate complexity but want quick results selling their digital assets.
                    </p>
                </div>
                <div className="container c_6">
                    <div className="row">
                        <div className="left__block">
                            <p className="block__number">
                                01
                            </p>
                            <h3 className="block__title">
                                Add your products
                            </h3>
                            <div className="block__text">
                                Sell anything you create or have - physical goods, digital products, keys, or subscriptions. It is powered by one, easy-to-use                                       platform made for creators.
                            </div>
                            <div className="block__link">
                                Learn more
                                <span className="icon-arrow"></span>
                            </div>
                        </div>
                        <div className="right__block">
                            <img src={hex_bg_1} className='hex__bg'/>
                            <div className="card__wrapper">
                                <div className="card__block">
                                    <div className="card__header">
                                    </div>
                                    <div className="card__body">
                                        <div className="bars_block">
                                            <div className="block">
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                            </div>
                                            <p className="price__text">

                                            </p>
                                        </div>
                                        <AddBtn btnText={'Add to cart'}/>
                                    </div>
                                </div>
                                <p className="card__wrap_text">
                                    Digital
                                </p>
                            </div>
                            <div className="card__wrapper">
                                <div className="card__block">
                                    <div className="card__header">
                                    </div>
                                    <div className="card__body">
                                        <div className="bars_block">
                                            <div className="block">
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                            </div>
                                            <p className="price__text">

                                            </p>
                                        </div>
                                        <AddBtn btnText={'Add to cart'}/>
                                    </div>
                                </div>
                                <p className="card__wrap_text">
                                    Physical
                                </p>
                            </div>
                            <div className="card__wrapper">
                                <div className="card__block">
                                    <div className="card__header">
                                        <img src={card_img_1}/>
                                    </div>
                                    <div className="card__body">
                                        <div className="bars_block">
                                            <div className="block">
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                                <p className="card__body__text_bar"></p>
                                            </div>
                                            <p className="price__text">

                                            </p>
                                        </div>
                                        <AddBtn btnText={'Check Out Now'}/>
                                    </div>
                                </div>
                                <p className="card__wrap_text">
                                    Physical
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container c_7">
                    <div className="row">
                        <div className="left__block">
                            <p className="block__number">
                                02
                            </p>
                            <h3 className="block__title">
                                Sell Anywhere: social media or your website.
                            </h3>
                            <div className="block__text">
                                Sell on Forums, your YouTube/telegram channels, Instagram page or Soundcloud with a simple link, or on your own website with our                                    integrated "Buy Now" buttons.
                            </div>
                            <div className="block__link">
                                Learn more
                                <span className="icon-arrow"></span>
                            </div>
                        </div>
                        <div className="right__block">
                            <img src={hex_bg_1} className='hex__bg'/>
                            <div className="c_7_card">
                                <div className="img__block p_2">
                                    <div className="block">
                                        <img src={p_2} />
                                    </div>
                                </div>
                                <div className="img__block p_3">
                                    <div className="block">
                                        <img src={p_3} />
                                    </div>
                                </div>
                                <div className="img__block p_4">
                                    <div className="block">
                                        <img src={p_4}/>
                                    </div>
                                </div>
                                <div className="img__block p_5">
                                   <div className="block">
                                       <img src={p_5} />
                                   </div>
                                </div>
                                <div className="cancel__header">
                                    <span className="icon-cancel"></span>
                                </div>
                                <div className="c_7__card_body">
                                    <div className="cards__block">
                                        <div className="inner__card">
                                            <div className="inner__card__header">
                                                <div className="inner__card__img">
                                                    <img src={inr_card_img_1}/>
                                                </div>
                                            </div>
                                            <div className="inner__card__body">
                                                <div className="bars_block">
                                                    <div className="block">
                                                        <p className="card__body__text_bar"></p>
                                                        <p className="card__body__text_bar"></p>
                                                    </div>
                                                    <p className="price__text">
                                                        $10
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner__card">
                                            <div className="inner__card__header">
                                                <img src={inr_card_img_2}/>
                                                <img src={inr_card_img_3}/>
                                            </div>
                                            <div className="inner__card__body">
                                                <div className="bars_block">
                                                    <div className="block">
                                                        <p className="card__body__text_bar"></p>
                                                        <p className="card__body__text_bar"></p>
                                                    </div>
                                                    <p className="price__text">
                                                        $5
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CheckOutBtn/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container c_8">
                    <div className="row">
                        <div className="left__block">
                            <p className="block__number">
                                03
                            </p>
                            <h3 className="block__title">
                                Automated Delivery & Customer support
                            </h3>
                            <div className="block__text">
                                Whether it's a file, serial number, service or even dynamically generated via an API, we provide instant automated delivery of goods to the customer.
                            </div>
                            <ListItem className='check' iconText={'Variety of Product Types'}/>
                            <ListItem className='check' iconText={'Email Delivery'}/>
                            <ListItem className='check' iconText={'Custom Email Templates'}/>
                            <ListItem className='check' iconText={'Replacement System'}/>
                            <ListItem className='check' iconText={'Buyer Queries'}/>
                            <ListItem className='check' iconText={'Interactive Feedbacks'}/>
                            <div className="block__link">
                                Learn more
                                <span className="icon-arrow"></span>
                            </div>
                        </div>
                        <div className="right__block">
                            <img src={hex_bg_1} className='hex__bg'/>
                            <div className="c_8_card">
                                <div className="c_8_card__body">
                                    <div className="icon__block">
                                        <span className="icon-check_1"></span>
                                    </div>
                                    <p className="card__body_text">
                                        1 feedback from <span>@LoyalCustomer</span>
                                    </p>
                                </div>
                            </div>
                            <div className="c_8_card">
                                <div className="c_8_card__body">
                                    <div className="icon__block">
                                        <img src={card_img_3}/>
                                    </div>
                                    <p className="card__body_text">
                                        Congrats! You’ve completed <span>50 sales</span>!
                                    </p>
                                </div>
                            </div>
                            <div className="c_8_card">
                                <div className="c_8_card__body">
                                    <div className="icon__block">
                                        <div className="icon">
                                            <img src={card_img_4}/>
                                        </div>
                                        <div className="icon">
                                            <img src={card_img_5}/>
                                        </div>
                                        <div className="icon">
                                            <img src={card_img_6}/>
                                        </div>
                                    </div>
                                    <p className="card__body_text">
                                        5 messages from customers
                                    </p>
                                    <span className="icon-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetPaid;
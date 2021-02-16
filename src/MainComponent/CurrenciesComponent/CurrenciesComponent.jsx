import React from "react";
import './Currencies.css';
import './SliderComponent/ZellbioSlider.css';
import hex_bg_1 from '../../assets/imgs/currencies/hex_bg_1.svg';
import hex_bg_2 from '../../assets/imgs/currencies/hex_bg_2.svg';
import hex_bg_3 from '../../assets/imgs/currencies/hex_bg_3.svg';
import hex_bg_4 from '../../assets/imgs/currencies/hex_bg_4.svg';
import hex_group_bg from '../../assets/imgs/currencies/hex_group_bg.svg';
import partner_1 from '../../assets/imgs/currencies/partner_1.svg';
import partner_2 from '../../assets/imgs/currencies/partner_2.svg';
import partner_3 from '../../assets/imgs/currencies/partner_3.svg';
import partner_4 from '../../assets/imgs/currencies/partner_4.svg'
import MainBtn from "../../MainBtnComponent/MainBtnComponent";
import Slider from 'react-slick';
import ZellbioSlider from "./SliderComponent/ZellbioSliderComponent";
import Arrow from "./ArrowComponent/ArrowComponent";

const Currencies = (props) => {

    return (
        <section className="s_4">
            <div className="wrapper">
                <img src={hex_bg_1} className="bg__img"/>
                <img src={hex_bg_2} className="bg__img"/>
                <div className="container c_10">
                    <p className="section__name">
                        currencies
                    </p>
                    <h2 className="section__title">
                        Vast Variety of Gateways
                    </h2>
                    <p className="section__text">
                        Reach a wider audience by supporting a wide range of payment methods including cryptocurrencies
                        as well as other known brands and payment processors.
                    </p>
                    <div className="row_wrap">
                        <div className="slider__block">
                            <ZellbioSlider/>
                        </div>
                    </div>
                </div>
                <div className="container c_11">
                    <img src={hex_bg_3} className='cont__img'/>
                    <img src={hex_group_bg} className='cont__img'/>
                    <img src={hex_bg_4} className='cont__img'/>
                    <div className="row">
                        <div className="row__text">
                            <h4 className="title">
                                Let's Get Started!
                            </h4>
                            <p className="block__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sit ultrices adipiscing
                                ultrices non. Feugiat iaculis in amet, rhoncus, nisl.
                            </p>
                        </div>
                        <MainBtn/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Currencies;
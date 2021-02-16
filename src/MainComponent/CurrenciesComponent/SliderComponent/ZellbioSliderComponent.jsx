import React from "react";
import Slider from 'react-slick';
import './ZellbioSlider.css';
import partner_1 from "../../../assets/imgs/currencies/partner_1.svg";
import partner_2 from "../../../assets/imgs/currencies/partner_2.svg";
import partner_3 from "../../../assets/imgs/currencies/partner_3.svg";
import partner_4 from "../../../assets/imgs/currencies/partner_4.svg";
import Arrow from "../ArrowComponent/ArrowComponent";
import PrewArrow from "../PrewArrowComponent";

const settings = {
    className: "slider variable-width",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow />,
    prevArrow: <PrewArrow/>,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                rows: 2,
                slidesPerRow: 1,
                slidesToShow: 2,
            }
        }
    ]
}

const ZellbioSlider = (props) => {
    return (
        <Slider {...settings}>
            <div className="slide__block">
                <img src={partner_1} className='img__p1'/>
            </div>
            <div className="slide__block">
                <img src={partner_2} className='img__p2'/>
            </div>
            <div className="slide__block">
                <img src={partner_3} className='img__p3'/>
            </div>
            <div className="slide__block">
                <img src={partner_4} className='img__p4'/>
            </div>
            <div className="slide__block">
                <img src={partner_1} className='img__p1'/>
            </div>
            <div className="slide__block">
                <img src={partner_2} className='img__p2'/>
            </div>
            <div className="slide__block">
                <img src={partner_3} className='img__p3'/>
            </div>
            <div className="slide__block">
                <img src={partner_4} className='img__p4'/>
            </div>
        </Slider>
    )
}

export default ZellbioSlider;
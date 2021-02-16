import React from 'react';
import '../App.css';
import './Hero.css';
import MainBtn from "../MainBtnComponent/MainBtnComponent";
import ContentWrap from "../ContentWrapComponent/ContentWrapComponent";
import HeroContent from '../HeroContentComponent/HeroContentComponent';
import hex from '../assets/imgs/hero_imgs/side_logo_hex.svg';
import p1 from '../assets/imgs/hero_imgs/partner_1.svg';
import p2 from '../assets/imgs/hero_imgs/partner_2.svg';
import p3 from '../assets/imgs/hero_imgs/partner_3.svg';
import p4 from '../assets/imgs/hero_imgs/partner_4.svg';
import p5 from '../assets/imgs/hero_imgs/partner__5.svg';

const Hero = () => {
    return (
        <div className={'hero__wrapper wrapper'}>
            <section className={"hero"}>
                <div className={'container'}>
                    <div className='text__block'>
                        <h1 className='hero__title'>
                            Selling whatever
                            digital goods online shouldn't be this hard.
                        </h1>
                        <p className='hero__text'>
                            A simple yet powerful e-commerce platform to sell any digital product online. Promote your ebooks, memberships, software, design assets,                              music, or any type of digital asset directly to your customers. Zellbee takes care of rest.
                        </p>
                        <MainBtn className='hero__btn'/>
                    </div>
                    <div className='hero__block container'>
                        <div className='hero__block_wrap'>
                            <ContentWrap className='wrap__height' innerComp={"HeroContent"} cwLogo={hex}/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container bottom">
                <p className="hero__bottom_text">
                    Trusted by over 2600 Digital Products sellers from across the world
                </p>
                <div className="hero__partners__block">
                    <img src={p1}/>
                    <img src={p2}/>
                    <img src={p3}/>
                    <img src={p4}/>
                    <img src={p5}/>
                </div>
                <p className="hero__bottom_subtext">
                    Proven: The most effective way to get Paid Directly and Instantly without suspensions,
                    to your provided payment methods.
                </p>
            </div>
        </div>
    )
}
export default Hero;
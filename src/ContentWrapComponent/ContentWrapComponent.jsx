import React from 'react';
import './ContentWrap.css'
import HeroContent from "../HeroContentComponent/HeroContentComponent";
import AboutUsContent from "../MainComponent/AboutUsComponent/AboutUsContentComponent/AboutUsContentComponent";



const ContentWrap = (props) => {
    console.log(props);
    let comp;

    if (props.innerComp == 'HeroContent') {
        comp = <HeroContent/>;
    }else if (props.innerComp == 'AboutUsContent') {
        comp = <AboutUsContent/>;
    }
    return (
        <div className={'block__1' + ' ' + props.className}>
            <div className={"sidebar"}>
                <img src={props.cwLogo} className={'sidebar__logo'}/>
                <span className={'content__bar' + ' ' + 'active'}></span>
                <span className={'content__bar' + ' ' + 'mid'}></span>
                <span className={'content__bar'}></span>
                <span className={'content__bar' + ' ' + 'mid'}></span>
            </div>
            <div className={'block__2'}>
                {comp}
            </div>
        </div>
    )
}

export default ContentWrap;



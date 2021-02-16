import React from "react";
import './CaseStudy.css'
import hex_bg from '../../assets/imgs/case_study/hex_bg.svg';
import hex_bg_2 from '../../assets/imgs/case_study/hex_bg_2.svg';
const CaseStudy = (props) => {
    return (
        <section className='s_3'>
            <div className="container c_9">
                <p className="section__name">
                    CASE STUDY
                </p>
                <h2 className="section__title">
                    This is Why 1000s Of sellers choose zellbee to reach millions of buyers every month.
                </h2>
                <p className="section__text">
                    For your Digital Goods With No suspension Now!
                    Let ZellBee Handle on everything :)
                    Get your store up and running in less than just 5 minutes.
                    ZellBee is For creators and online businesses who hate complexity but want quick results selling their digital assets.
                </p>
                <div className="row">
                    <div className="c_9__card">
                         <div className="card__header">
                             <img src={hex_bg}/>
                         </div>
                        <div className="card__body">
                            <h4 className="card__title">
                                Gf2 store saved 750$ in selling fees in just 30 days.
                            </h4>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sit ultrices adipiscing ultrices non. Feugiat iaculis in amet, rhoncus,                                  nisl.
                            </p>
                        </div>
                    </div>
                    <div className="c_9__card">
                        <div className="card__header">
                            <img src={hex_bg_2}/>
                        </div>
                        <div className="card__body">
                            <h4 className="card__title">
                                Gf2 store saved 750$ in selling fees in just 30 days.
                            </h4>
                            <p className="card__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sit ultrices adipiscing ultrices non. Feugiat iaculis in amet, rhoncus,                                  nisl.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy;
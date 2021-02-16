import React from "react";
import './Main.css';
import AboutUs from "./AboutUsComponent/AboutUsComponent";
import GetPaid from "./GetPaidComponent/GetPaidComponent";
import CaseStudy from "./CaseStudyComponent/CaseStudyComponent";
import Currencies from "./CurrenciesComponent/CurrenciesComponent";

const Main = (props) => {

    return (
        <main>
            <AboutUs/>
            <GetPaid/>
            <CaseStudy/>
            <Currencies/>
        </main>
    )
}

export default Main;
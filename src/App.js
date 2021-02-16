import React from "react";
import './App.css';
import Header from "./HeaderComponent/HeaderComponent";
import Hero from "./HeroComponent/HeroComponent";
import Main from "./MainComponent/MainComponent";
import Footer from "./FooterComponent/FooterComponent";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

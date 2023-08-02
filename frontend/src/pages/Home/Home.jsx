import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Movies />
        <Footer />
      </div>
    </>
  );
};

export default Home;

import React, { Fragment } from "react";
import Landing from "../Componets/Landing";
import Features from "../Componets/Features";
import StayProductive from "../Componets/StayProductive";
import Testimonials from "../Componets/Testimonials";
import GetStarted from "../Componets/GetStarted";
import Footer from "../Componets/Footer";

const Home = () => {
  return (
    <div>
      <Fragment>
        <Landing />
        <Features />
        <StayProductive />
        <Testimonials />
        <GetStarted />
      </Fragment>
    </div>
  );
};

export default Home;

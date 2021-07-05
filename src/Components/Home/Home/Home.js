import React from "react";
import { useContext } from "react";
import { userContext } from "../../../App";
import About from "../About/About";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Reviews></Reviews>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;

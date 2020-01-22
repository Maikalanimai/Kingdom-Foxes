import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Nav from "../Nav/Nav.jsx";
import "./home.scss";
import legacy_banner from "../../assets/legacy-kof-banner.png";
import imp from "../../assets/imperial-logo.png";
import pun from "../../assets/punthread.png";

function Home() {
  return (
    <div className="home">
      <Header />
      <Nav />
      <main className="home-main">
        <div className="home-inner">
          <h1 className="who">Who Are We?</h1>
          <hr />
          <div className="home-about">
            Officially the Kingdom of Foxes (K of F), known in-game as Kingdom
            Foxes (Fox), is a competitive community guild with role-playing
            elements. We were founded on 2 June 2014, making us one of the
            oldest and most well established guilds on Wynncraft.
            <div className="home-about">
              Our history and legacy is incomparable to any other. Join if you'd
              like to make history with us.
            </div>
          </div>
        </div>
        <img src={legacy_banner} alt="former logo" className="old-logo" />
        <h1 className="consider">
          Consider us or one of our allies!
          <hr />
        </h1>
        <a href="https://forums.wynncraft.com/threads/%E2%98%86-paladins-united-level-73-guild-recruiting-level-60.246617/">
          <img className="punlogo" src={pun} alt="Paladins United" />
        </a>
        <a href="https://bit.ly/JoinImpUWU">
          <img className="imp" src={imp} alt="Imperial" />
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

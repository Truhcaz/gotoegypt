import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import sky from "../assets/img/sky.png";
import desert from "../assets/img/desert4.png";
import pyramids from "../assets/img/giza_pyramids3.png";
import { ReactComponent as DoubleDownChevron } from "../assets/icon/double-down-chevron.svg";

const StyledHero = styled.div`
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
   background-image: url(${sky});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top left;

  .hero__container {
    text-align: center;
    color: var(--white);
    display: flex;
    align-items: center;
    margin-bottom: 5vh;

    .hero__socials {
      font-family: var(--font3);
      flex-basis: 20%;
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        transform: rotate(-90deg);
      }
    }

    .hero__titles {
      font-family: var(--font1);
      flex-basis: 60%;
      h3 {
        font-family: var(--font2);
        font-size: 12px;
        color: var(--sand);
        text-transform: uppercase;
        letter-spacing: 3px;
        padding-bottom: 1em;
        position: relative;
      }
      h3::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 3em;
        border: 1px solid var(--sand);
      }
      h1 {
        color: var(--white);
        font-size: calc(16px + 1vw);
      }

      .scrolldown__container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .scrolldown__svg {
          width: 30px;
          height: 30px;
          fill: var(--white);
        }
        .scrolldown__text {
          font-family: var(--font2);
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 3px;
        }
      }
    }

    .hero__email {
      font-family: var(--font3);
      transform: rotate(-90deg);
      flex-basis: 20%;
    }
  }

  .parallax__container {
    position: relative;
    flex-grow: 1;

    .desert__container {
      height: 100%;
      position: relative;
    }
    .pyramids {
      width: clamp(800px, 1000px, 60%);
      position: absolute;
      top: 0;
      right: 50%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    .desert {
      position: absolute;
      bottom: 0;
      z-index: 2;
      width: 100%;
      min-width: 900px;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Navbar></Navbar>
        <div className="hero__container">
          <div className="hero__socials">
            <ul>
              <li>Fb</li>
              <li>In</li>
              <li>Tw</li>
            </ul>
          </div>
          <div className="hero__titles">
            <h3>The ancient world</h3>
            <h1>
              Discover the awe--inspiring Pyramids of Giza and ancient Egypt's
            </h1>
            <div className="scrolldown__container">
              <DoubleDownChevron className="scrolldown__svg" />
              <span className="scrolldown__text">Scroll down</span>
            </div>
          </div>
          <div className="hero__email">hi@gotoegypt.com</div>
        </div>
        <div className="parallax__container">
          <div className="desert__container">
            <img className="desert" src={desert} alt="desert" />
            <div className="pyramids__container">
              <img className="pyramids" src={pyramids} alt="pyramids" />
            </div>
          </div>
        </div>
    </StyledHero>
  );
};

export default Hero;

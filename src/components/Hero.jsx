import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import sky from "../assets/img/sky2.png";
import desert from "../assets/img/desert5.png";
import pyramids from "../assets/img/giza_pyramids5.png";
import { ReactComponent as DoubleDownChevron } from "../assets/icon/double-down-chevron.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StyledHero = styled.div`
  height: 100vh;
  background : transparent;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-image: url(${sky});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .hero__container {
    text-align: center;
    color: var(--white);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 5vh;
    position: absolute;
    top: 15%;
    width: 100%;
    height: 100%;
    z-index: 2;

    .hero__content{
      display: flex;
      align-items: center;
    }

    .hero__socials {
      font-family: var(--roboto-font);
      font-size: 12px;
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
      font-family: var(--playfair-font);
      flex-basis: 60%;
      h3 {
        font-family: var(--montserrat-font);
        font-size: 12px;
        color: var(--sand);
        text-transform: uppercase;
        letter-spacing: 3px;
        padding-bottom: 1em;
        margin-bottom: 1em;
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
        margin-bottom: 1em;
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
          font-family: var(--montserrat-font);
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 3px;
        }
      }
    }

    .hero__email {
      font-size: 12px;
      font-family: var(--roboto-font);
      transform: rotate(-90deg);
      flex-basis: 20%;
    }
  }

  .hero__img {
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    bottom: 0;
  }

  .desert {
    z-index: 3;
    background-image: url(${desert});
    /* transition: transform 1s ease; */
  }
  .pyramids {
    z-index: 2;
    background-image: url(${pyramids});
  }
  .sky {
    z-index: 1;
    background-image: url(${sky});
  }

  .fade__layer {
    position: absolute;
    bottom: 0;
    height: 300px;
    width: 100%;
    z-index: 3;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(218, 178, 132, 1) 65%
    );
  }
`;

const Hero = () => {
  
  const container = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container,
    offset: ["start 0.5", "0.5 start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });



  const pyramidParallax = useTransform(scrollYProgress2, [0, 1], ["-50%", "50%"]);
  const desertParallax = useTransform(scrollYProgress1, [0, 1], ["10%", "-10%"]);
  const titleParallax = useTransform(scrollYProgress2, [0, 1], ["-100%", "100%"]);

  return (
    <StyledHero ref={container}>
      <Navbar></Navbar>
      <motion.div style={{ y: titleParallax }} className="hero__container">
        <div className="hero__content">
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
      </motion.div>
      {/* <div className="sky hero__img"></div> */}
      <motion.div style={{ y: desertParallax }} className="desert hero__img"></motion.div>
      <motion.div style={{ y: pyramidParallax }} className="pyramids hero__img"></motion.div>
      <div className="fade__layer"></div>
    </StyledHero>
  );
};

export default Hero;

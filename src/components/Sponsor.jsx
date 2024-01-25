import React from "react";
import styled from "styled-components";
import nationalGeo from "../assets/img/national-geographic.png";
import pyramidInt from "../assets/img/pyramid-international.png";
import bbc from "../assets/img/bbc.png";
import lonelyPlanet from "../assets/img/lonely-planet.png";
import { ReactComponent as RightArrow } from "../assets/icon/arrow.svg";
import bookNowBg from "../assets/img/road.png";

const StyledSponsor = styled.div`
  height: 100vh;
  background-color: var(--bg-color2);
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 2em;
  color: var(--white);

  .sponsor__container {
    width: 70%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    .sponsor__titles {
      font-family: var(--playfair-font);
      h3 {
        font-family: var(--montserrat-font);
        color: var(--black);
        font-size: var(--sm-size);
        text-transform: uppercase;
      }
    }
    .sponsor__logos {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 200px;
      }
    }
    .sponsor__book-now {
        width: 100%;
        height: 100%;
        background-image: url(${bookNowBg});
        background-size: cover;
        background-position: center;
        position: relative;

        .fade{
            position: absolute;
            top:0;
            width: 100%;
            height: 100%;
            background-color:rgba(212,169,126,0.80) 
        }
      .book-now {
        width: 180px;
        position: absolute;
        top: 100px;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        border: 1px solid black;
        padding: 1em 2em;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 1em;
        font-family: var(--montserrat-font);

        .left-arrow {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
const Sponsor = () => {
  return (
    <StyledSponsor>
      <div className="sponsor__container">
        <div className="sponsor__titles">
          <h3>Thank you</h3>
          <h1>
            To our Sponsors and Event <span className="night">Partners</span>
          </h1>
        </div>
        <div className="sponsor__logos">
          <img src={nationalGeo} alt="national geographic" />
          <img src={pyramidInt} alt="pyramid international" />
          <img src={bbc} alt="BBC" />
          <img src={lonelyPlanet} alt="lonely planet" />
        </div>
        <div className="sponsor__book-now">
            <div className="fade"></div>
            <button className="book-now"> BOOK NOW <RightArrow className="left-arrow" />
            </button>
        </div>
      </div>
    </StyledSponsor>
  );
};

export default Sponsor;

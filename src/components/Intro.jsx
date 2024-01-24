import React from 'react'
import styled from 'styled-components'
import camel from '../assets/img/camel.png'
import { ReactComponent as PlayButton } from "../assets/icon/play-button.svg";

const StyledIntro = styled.div`
    height: 100vh;
    background-color: var(--bg-color);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .intro__container{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.5em;
      font-family: var(--playfair-font);
      color: var(--white);
      width: 80%;

      .intro__titles{
          text-align: center;

          h3{
            font-family: var(--montserrat-font);
            color: var(--black);
            font-size: var(--sm-size);
            text-transform: uppercase;
          }
      }
      .intro__text{
        display: flex;
        justify-content: space-between;
        padding: 0 1em;

        p{
          padding: 0 50px;
          line-height: 1.5em;
          letter-spacing: 1px;
        }
      }
      .intro__thumbnail{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 0.5em;

        .camel{
          width: 100%;
        }
        .caption{
          position: absolute;
          left:0;
          bottom: 10px;
          flex-basis:20%;
          font-family: var(--roboto-font);
          font-size: 10px;
          color:var(--black);
          transform: rotate(-90deg);
          transform-origin: bottom left;
          padding-left: 1em
        }

        .play-btn{
          width: auto;
          height: 15%;
          position: absolute;
          top: 50%;
          right: 50%;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          box-shadow: inset 0px 0px 25px -2px grey;
          border-radius: 50%;
        }

      }

    }
`
const Intro = () => {
  return (
    <StyledIntro>
        <div data-aos="fade-up" data-aos-duration="2000" className="intro__container">
          <div className="intro__titles">
              <h3>The ancient</h3>
              <h1> Egyptian <span className='night'>Civilization</span></h1>
          </div>
          <div className="intro__text">
          <p>The ancient Egyptian civilization, famous for its pyramids, pharaohs,  mummies 
            and tombs, flourished for thousands of years. But what was its lasting impact?</p>
          <p>Watch the video below to learn how ancient Egypt contributed to modern-day society 
            with its many cultural developments, particularly in language and mathematics</p>
          </div>
          <div className="intro__thumbnail">
            <span className='caption'> All right reserved @2024</span>
            <img className='camel' src={camel} alt="camel"/>
            <PlayButton className='play-btn'></PlayButton>
          </div>
        </div>
    </StyledIntro>
  )
}

export default Intro
import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'

const StyledExperiences = styled.div`
    height: 100vh;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 2em ;
    
    .experiences__container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
        width: 80%;
        font-family: var(--playfair-font);
        color: var(--white);

        .experiences__titles{
            width: 100%;
            text-align:center;
            h3{
            font-family: var(--montserrat-font);
            color: var(--black);
            font-size: var(--sm-size);
            text-transform: uppercase;
          }
        }

        .experiences__text{
            display: flex;
            justify-content: center;
            text-align: center;
            p{
                font-size: 16px;
                width: 80%;
                line-height: 1.5em;
                letter-spacing: 1px;
            }
        }

        .experiences__carousel__container{
            width: 100%;
            padding: 0 100px;
        }
        
    }
`

const Experiences = () => {

  return (
    <StyledExperiences>
        <div className="experiences__container">
            <div className="experiences__titles">
                <h3>Go back in time</h3>
                <h1>With our top <span className="night"> experiences</span></h1>
            </div>
            <div className="experiences__text">
                <p>magnificent monuments, lush delta, and with its long past and welcoming, story-loving people</p>
            </div>
            <div className="experiences__carousel__container">
                <Carousel></Carousel>
            </div>
        </div>
    </StyledExperiences>
  )
}

export default Experiences
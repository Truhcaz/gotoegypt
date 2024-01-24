import React from "react";
import styled from "styled-components";
import tut from "../assets/img/tutankhamun.png";
import bastet from "../assets/img/anubis.png";
import { ReactComponent as RightArrow } from "../assets/icon/arrow.svg";
const StyledAbout = styled.div`
  height: auto;
  background-color: var(--bg-color2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;

  .about__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    font-family: var(--playfair-font);
    color: var(--white);
    gap: 2.5em;

    .about__titles{
        text-align: center;
        h3{
            font-family: var(--montserrat-font);
            color: var(--black);
            font-size: var(--sm-size);
            text-transform: uppercase;
          }
    }
    .about__content{
        display: flex;
        gap: 5em;
        .content__text{
            display: flex;
            flex-direction: column;
            gap: 2.5em;
            width: 100%;
            
            h1{
                letter-spacing: 3px;
            }
            p{
                font-size: 16px;
                width: 80%;
                line-height: 1.5em;
                letter-spacing: 1px;
            }

            a{
                font-family: var(--roboto-font);
                color: var(--black);
            }
        }
        .tut, .bastet{
            background: linear-gradient(180deg, rgba(221,187,150,1) 50%, rgba(212,169,126,1) 75%);
            border-radius: 100%;
        }
        .content__img{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            

            .tut__img{
                width: calc(100px + 7vw);
                flex-shrink: 0;
            }
            .bastet__img{
                width: calc(100px + 20vw);
                flex-shrink: 0;
            }
        }
    }
    .show-more{
        cursor: pointer;
        border: 1px solid black;
        padding: 1em 2em;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 1em;
        font-family: var(--montserrat-font);

        .left-arrow{
            width: 20px;
            height: 20px;
        }
    }
  }
`;
const About = () => {
  return (
    <StyledAbout>
      <div className="about__container">
        <div className="about__titles">
          <h3>10 things</h3>
          <h1>You probably didn't know about <span className="night">ancient Egypt</span></h1>
        </div>

        <div className="about__content">
          <div className="content__text" data-aos="fade-right" data-aos-duration='2000'>
            <h1> His original name was not Tutankhamun</h1>
            <p>
              Tutankhamun was originally named Tutankhaten. This name, which
              literally means "living image of the Aten", reflected the fact
              that Tutankhaten's parents worshipped a sun god known as "the
              Aten". After a few years on the throne the young king ...
            </p>
            <a href="/">Read More</a>
          </div>
          <div className="content__img tut" data-aos="fade-left" data-aos-duration='2000'>
                <img className='tut__img' src={tut} alt="tutankhamun"/>
          </div>
        </div>

        <div className="about__content">
          <div className="content__img bastet" data-aos="fade-right" data-aos-duration='2000'>
                <img className='bastet__img' src={bastet} alt="bastet" />
          </div>
          <div className="content__text" data-aos="fade-left" data-aos-duration='2000'>
          <h1> Cats were represented in religious practices</h1>
            <p>
              Cats in ancient Egypt were represented in social and religious
              practices of Ancient Egypt for more than 30 centuries. Several
              Ancient Egyptian deities were depicted and sculptured with
              cat-like heads such as Mafdet, Bastet and Sekhmet, representing
              justice, fertility and power. The deity Mut was also depicted as a
              cat and in the company of a cat.
            </p>
            <a href="/"> Read More </a>
          </div>
        </div>
        <button className="show-more"> SHOW MORE <RightArrow className='left-arrow'/> </button>
      </div>
    </StyledAbout>
  );
};

export default About;

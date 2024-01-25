import React from 'react'
import styled from 'styled-components'
import logo from '../assets/img/logo.png'

const StyledFooter = styled.div`
    background-color: var(--bg-color2);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    .footer__container{
        flex-basis: 100%;
        width: 100%;
        margin: 2em;
        border-top: 1px solid var(--black);
        padding: 2em;
        color: var(--black);
        font-family: var(--playfair-font);
        ul{
            width: 100%;
            display: flex;
            list-style: none;
            justify-content: space-between;
        
            li{
                img{
                    max-height: 30px;
                    }
                }
            }
            .group{
                display: flex;
                gap: 2em;
            }
        }
`
const Footer = () => {
  return (
    <StyledFooter>
            <div className="footer__container">
                <ul>
                    <li>All rights reserved © 2024</li>
                    <li> <img src={logo} alt="logo" /></li>
                    <div className="group">
                    <li>Privacy</li>
                    <li>Disclaimer</li>
                    <li>Contact</li>
                    </div>
                </ul>
            </div>
    </StyledFooter>
  )
}

export default Footer
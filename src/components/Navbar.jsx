import React from 'react'
import styled from "styled-components";
import logo from '../assets/img/logo.png';
import { ReactComponent as MenuIcon } from "../assets/icon/3x3dot-black.svg";
const StyledNavbar = styled.div`

    /* background-color: #313733; */
    color: var(--white);
    font-family: var(--font1);
    font-size: 16px;
    padding: 1.5em;
    margin-bottom: 2em;
    ul{
        margin: 0;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2em;
    }

    .logo{
        margin-right: auto;
        .logo-img{
            max-height: 30px;
        }
    }

    .menu{
        margin-left: 5em;
        .menu-icon{
            fill: var(--sand);
        }
    }

    @media (max-width: 900px) {
        .logo, .menu{
            margin: 0;
        }
        ul{
            justify-content: space-between;
        }
    }
`
const Navbar = () => {
  return (
    <StyledNavbar>
        <ul>
            <li className='logo'> <img className='logo-img' src={logo} alt="gotoegypt_logo" /> </li>
            <li>Home</li>
            <li>Explore</li>
            <li>Article</li>
            <li>Galeries</li>
            <li>Contact</li>
            <li className='menu'> <MenuIcon className='menu-icon'/> </li>

        </ul>
    </StyledNavbar>
  )
}

export default Navbar
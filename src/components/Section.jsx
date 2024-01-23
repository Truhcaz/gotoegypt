import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
    height: 100vh;
    background-color: var(--bg-color);
    position: relative;

    .fade__container{
        position: absolute;
        top:-200px;
        height: 200px;
        width: 100%;
        z-index: 3;
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(218,178,132,1) 74%);
    }
`
const Section = () => {
  return (
    <StyledSection>
        <div className="fade__container"></div>
    </StyledSection>
  )
}

export default Section
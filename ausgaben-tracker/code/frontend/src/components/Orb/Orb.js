import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()

    console.log(width, height)

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width/1.2}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

     const OrbStyled = styled.div`
        width: 300vh;
        height: 300vh;
        position: absolute;
        border-radius: 10%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #cf40b7 0%, #4aacf2 100%);
        filter: blur(500px);
        animation: ${moveOrb} 10s alternate linear infinite;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb
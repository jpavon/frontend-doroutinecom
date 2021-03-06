import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`

export const Spinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -20px;
    margin-top: -20px;
    width: 40px;
    height: 40px;
    background-color: #999;

    border-radius: 100%;
    animation: ${animation} 1s infinite ease-in-out;
`

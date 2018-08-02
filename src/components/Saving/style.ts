import styled, { keyframes } from 'styled-components'

import { theme } from 'styles'

const animation = keyframes`
    0% {
        transform: rotate(360deg);
    }
`
export const Saving = styled.div`
    position: absolute;
    top: 50%;
    right: 9px;
    margin-top: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-top: 2px solid ${theme.colorPrimary};
    border-right: 2px solid transparent;
    animation: ${animation} 0.6s linear infinite;
    z-index: 90;
`

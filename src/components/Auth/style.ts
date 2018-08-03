import styled from 'styled-components'

export const Auth = styled.div`
    max-width: 400px;
    margin: 0 auto;

    [class*='Field'] {
        background-color: transparent;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const AuthButton = styled.div`
    display: flex;

    button {
        margin: auto;
    }
`

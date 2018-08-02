import * as React from 'react'

import Button from 'components/Button'

import { Auth as AuthStyled, AuthButton } from './style'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    e2e?: string
    footer?: React.ReactNode
}

const Auth: React.SFC<IProps> = (props) => (
    <AuthStyled data-e2e={props.e2e}>
        <form method="post" onSubmit={props.handleSubmit}>
            <div>{props.children}</div>
            <AuthButton>
                <Button type="submit">Submit</Button>
            </AuthButton>
        </form>
        {props.footer || null}
    </AuthStyled>
)

export default Auth

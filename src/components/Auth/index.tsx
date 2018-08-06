import * as React from 'react'

import Button from 'components/Button'

import { Auth as AuthStyled, AuthButton } from './style'

interface Props {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const Auth: React.SFC<Props> = (props) => (
    <AuthStyled>
        <form method="post" onSubmit={props.handleSubmit}>
            <div>{props.children}</div>
            <AuthButton>
                <Button type="submit">Submit</Button>
            </AuthButton>
        </form>
    </AuthStyled>
)

export default Auth

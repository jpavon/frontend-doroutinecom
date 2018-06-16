import * as React from 'react'

import Button from 'components/Button'

import './style.scss'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    className: string
    footer?: React.ReactNode
}

const Auth: React.SFC<IProps> = (props) => (
    <div className={`auth ${props.className}`}>
        <form method="post" onSubmit={props.handleSubmit}>
            <div className="auth-inner">{props.children}</div>
            <div className="auth-button">
                <Button type="submit">Submit</Button>
            </div>
        </form>
        {props.footer || null}
    </div>
)

export default Auth

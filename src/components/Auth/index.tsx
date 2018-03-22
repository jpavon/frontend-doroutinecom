import * as React from 'react'

import Button from 'components/Button'

import './style.scss'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    className: string
    footer?: React.ReactNode
}

const Auth: React.SFC<IProps> = ({children, className, handleSubmit, footer = null}) => (
    <div className={`auth ${className}`}>
        <form method="post" onSubmit={handleSubmit}>
            <div className="auth-inner">
                {children}
            </div>
            <div className="auth-button">
                <Button type="submit">Submit</Button>
            </div>
        </form>
        {footer}
    </div>
)

export default Auth

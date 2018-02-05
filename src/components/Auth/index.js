import React from 'react'

import Button from 'components/Button'

import './style.css'

const Auth = ({children, className, handleSubmit, footer}) => (
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

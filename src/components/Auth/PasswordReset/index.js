import React from 'react'
import ErrorMessage from 'components/ErrorMessage'

const PasswordReset = ({handleSubmit, errors, success, setRef}) => (
    <div className="password-reset">
        <h1>Password Reset</h1>
        {success && <div className="message-success">{success}</div>}
        <form method="post" onSubmit={handleSubmit}>
            <ErrorMessage error={errors} />
            <label htmlFor="email">
                Email:
            </label>
            <input id="email" type="email" ref={(ref) => setRef(ref, 'email')} />
            <br/>
            <label htmlFor="password">
                New password:
            </label>
            <input id="password" type="password" ref={(ref) => setRef(ref, 'password')} />
            <br/>
            <label htmlFor="passwordConfirmation">
                Type new password again:
            </label>
            <input id="passwordConfirmation" type="password" ref={(ref) => setRef(ref, 'passwordConfirmation')} />

            <input type="submit" value="Submit" />
        </form>
    </div>
)

export default PasswordReset

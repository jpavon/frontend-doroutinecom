import React from 'react'
import ErrorMessage from 'components/ErrorMessage'

const PasswordForgotten = ({handleSubmit, errors, success, setRef}) => (
    <div className="password-forgotten">
        <h1>Password Forgotten</h1>
        {success && <div className="message-success">{success}</div>}
        <form method="post" onSubmit={handleSubmit}>
            <ErrorMessage error={errors} />
            <label htmlFor="email">
                Email:
            </label>
            <input id="email" type="text" ref={(ref) => setRef(ref, 'email')} />
            <input type="submit" value="Submit" />
        </form>
    </div>
)

export default PasswordForgotten

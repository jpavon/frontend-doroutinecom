import React from 'react'

const PasswordForgotten = ({handleSubmit, errors, success, setRef}) => (
    <div className="password-forgotten">
        <h1>Password Forgotten</h1>
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email:
            </label>
            <input id="email" type="text" ref={(ref) => setRef(ref, 'email')} />
            <input type="submit" value="Submit" />
        </form>
    </div>
)

export default PasswordForgotten

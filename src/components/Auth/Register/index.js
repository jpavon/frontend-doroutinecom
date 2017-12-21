import React from 'react'

const Login = ({handleSubmit, errors, setRef}) => (
    <div className="register">
        <h1>Register</h1>
        <form method="post" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input id="name" type="text" ref={(ref) => setRef(ref, 'name')} />
            </div>

            <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input id="email" type="text" ref={(ref) => setRef(ref, 'email')} />
            </div>

            <div>
                <label htmlFor="password">
                    Password:
                </label>
                <input id="password" type="password" ref={(ref) => setRef(ref, 'password')} />
            </div>

            <div>
                <label htmlFor="passwordConfirmation">
                    Password confirmation:
                </label>
                <input id="passwordConfirmation" type="password" ref={(ref) => setRef(ref, 'passwordConfirmation')} />
            </div>

            <input type="submit" value="Submit" />
        </form>
    </div>
)

export default Login

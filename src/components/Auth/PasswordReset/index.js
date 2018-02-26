import React from 'react'

import Auth from 'components/Auth'
import Field from 'components/Field'

const PasswordReset = ({handleSubmit, setRef}) => (
    <Auth className="password-reset" handleSubmit={handleSubmit}>
        <Field
            uncontrolled
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Type your email"
            inputRef={(ref) => setRef(ref, 'email')}
        />
        <Field
            uncontrolled
            label="New Password"
            type="password"
            id="password"
            placeholder="Type your new password"
            inputRef={(ref) => setRef(ref, 'password')}
        />
        <Field
            uncontrolled
            label="Type new password again"
            type="password"
            id="passwordConfirmation"
            placeholder="Type your new password again"
            inputRef={(ref) => setRef(ref, 'passwordConfirmation')}
        />
    </Auth>
)

export default PasswordReset

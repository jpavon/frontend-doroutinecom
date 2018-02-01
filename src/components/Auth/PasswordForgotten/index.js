import React from 'react'

import Auth from 'components/Auth'
import Field from 'components/Field'

const PasswordForgotten = ({handleSubmit, errors, success, setRef}) => (
    <Auth className="password-forgotten" handleSubmit={handleSubmit}>
        <Field
            uncontrolled
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Type your email"
            inputRef={(ref) => setRef(ref, 'email')}
        />
    </Auth>
)

export default PasswordForgotten

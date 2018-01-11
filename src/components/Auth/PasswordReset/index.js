import React from 'react'

import Section from 'components/Section'
import Input from 'components/Form/Input'
import Button from 'components/Button'
import Label from 'components/Form/Label'

const PasswordReset = ({handleSubmit, errors, success, setRef}) => (
    <Section small className="password-reset" title="Password Reset">
        <form method="post" onSubmit={handleSubmit}>
            <Label htmlFor="email">
                Email
            </Label>
            <Input
                type="email"
                id="email"
                inputRef={(ref) => setRef(ref, 'email')}
                size="large"

            />
            <Label htmlFor="password">
                New password
            </Label>
            <Input
                type="password"
                id="password"
                inputRef={(ref) => setRef(ref, 'password')}
                size="large"

            />
            <Label htmlFor="passwordConfirmation">
                Type new password again
            </Label>
            <Input
                type="password"
                id="passwordConfirmation"
                inputRef={(ref) => setRef(ref, 'passwordConfirmation')}
                size="large"

            />
            <Button type="submit">Submit</Button>
        </form>
    </Section>
)

export default PasswordReset

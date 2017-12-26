import React from 'react'

import Section from 'components/Section'
import Input from 'components/Form/Input'
import Button from 'components/Button'
import Label from 'components/Form/Label'

const PasswordForgotten = ({handleSubmit, errors, success, setRef}) => (
    <Section small className="password-forgotten" title="Password Forgotten">
        <form method="post" onSubmit={handleSubmit}>
            <Label htmlFor="email">
                Email:
            </Label>
            <Input
                id="email"
                name="email"
                type="text"
                size="large"
                inputRef={(ref) => setRef(ref, 'email')}
            />
            <Button type="submit">Submit</Button>
        </form>
    </Section>
)

export default PasswordForgotten

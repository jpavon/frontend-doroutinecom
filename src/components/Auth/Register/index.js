import React from 'react'

import Section from 'components/Section'
import Input from 'components/Form/Input'
import Button from 'components/Button'
import Label from 'components/Form/Label'

import './style.css'

const Login = ({handleSubmit, errors, setRef}) => (
    <Section small className="register" title="Register">
        <form method="post" onSubmit={handleSubmit}>
            <Label htmlFor="name">
                Name
            </Label>
            <Input
                id="name"
                inputRef={(ref) => setRef(ref, 'name')}
                size="large"
            />
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
                Password
            </Label>
            <Input
                type="password"
                id="password"
                inputRef={(ref) => setRef(ref, 'password')}
                size="large"
            />
            <Label htmlFor="passwordConfirmation">
                Password confirmation
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

export default Login

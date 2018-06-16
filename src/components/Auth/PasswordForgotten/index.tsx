import * as React from 'react'

import Input from 'components/Form/Input'
import Auth from 'components/Auth'
import Field from 'components/Field'

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    emailRef: React.RefObject<HTMLInputElement>
}

const PasswordForgotten: React.SFC<IProps> = (props) => (
    <Auth className="password-forgotten" handleSubmit={props.handleSubmit}>
        <Field label="Email" id="email">
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Type your email"
                inputRef={props.emailRef}
            />
        </Field>
    </Auth>
)

export default PasswordForgotten

import React from 'react'

import Input from 'components/withForm/Input'
import withForm from 'components/withForm'
import InputWrapper from 'components/Form/InputWrapper'

const Form = () => (
    <form className="lift-form">
        <div className="lift-name">
            <Input
                name="name"
                placeholder="Lift name"
                background="dark"
            />
        </div>
        <div className="lift-rm">
            <InputWrapper item="kg RM">
                <Input
                    name="rm"
                    placeholder="Lift RM"
                    item="kg RM"
                />
            </InputWrapper>
        </div>
    </form>
)

export default withForm(Form)

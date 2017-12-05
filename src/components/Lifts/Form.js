import React from 'react'
import Input from 'components/Form/Input'
import InputWrapper from 'components/Form/InputWrapper'
import InputItem from 'components/Form/InputItem'
import withForm from 'components/Form/withForm'

const Form = () => (
    <form className="lift-form">
        <div className="lift-name">
            <Input
                name="name"
                placeholder="Lift name"
                align="center"
                background="dark"
            />
        </div>
        <div className="lift-rm">
            <InputWrapper>
                <Input
                    name="rm"
                    placeholder="Lift RM"
                    align="right"
                />
                <InputItem
                    item="kg RM"
                />
            </InputWrapper>
        </div>
    </form>
)

export default withForm(Form)

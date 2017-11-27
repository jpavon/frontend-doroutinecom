import React from 'react'
import Input from 'components/Form/Input'
import InputWrapper from 'components/Form/InputWrapper'
import InputItem from 'components/Form/InputItem'
import withForm from 'components/Form/withForm'

const Form = ({data}) => (
    <form className="lift-form">
        <div className="lift-name">
            <Input
                name="name"
                value={data.name}
                placeholder="Lift name"
                alignCenter
            />
        </div>
        <div className="lift-rm">
            <InputWrapper>
                <Input
                    name="rm"
                    value={data.rm}
                    placeholder="Lift RM"
                    alignRight
                />
                <InputItem
                    item="kg RM"
                />
            </InputWrapper>
        </div>
    </form>
)

export default withForm(Form)

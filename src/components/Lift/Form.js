import React from 'react'
import Input from 'components/Form/Input'
import withForm from 'components/Form/withForm'

const Form = ({errors}) => (
    <form className="lift-form">
        <div className="lift-name">
            <Input
                name="name"
                placeholder="Lift name"
            />
        </div>
        <div className="lift-rm">
            <Input
                name="rm"
                placeholder="Lift RM"
                // item={{
                //     name: 'kg RM',
                //     position: 'right'
                // }}
                alignRight
            />
        </div>
    </form>
)

export default withForm(Form)

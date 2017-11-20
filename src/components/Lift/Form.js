import React from 'react'
import Input from 'components/Input'
import withForm from 'components/Form'

const Form = ({errors}) => (
    <form className="lift-form">
        <div className="lift-name">
            <Input
                name="name"
                errors={errors.name}
                placeholder="Lift name"
            />
        </div>
        <div className="lift-rm">
            <Input
                name="rm"
                errors={errors.rm}
                placeholder="Lift RM"
                item={{
                    name: 'kg RM',
                    position: 'right'
                }}
                alignRight
            />
        </div>
    </form>
)

export default withForm(Form)

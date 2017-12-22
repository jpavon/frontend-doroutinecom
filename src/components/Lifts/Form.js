import React from 'react'
import Input from 'components/withForm/Input'
import withForm from 'components/withForm'

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
            <div className="input-wrapper">
                <Input
                    name="rm"
                    placeholder="Lift RM"
                    align="right"
                />
                <div className="input-item">
                    kg RM
                </div>
            </div>
        </div>
    </form>
)

export default withForm(Form)

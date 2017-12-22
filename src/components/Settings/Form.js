import React, { Fragment } from 'react'

import Input from 'components/withForm/Input'
import withForm from 'components/withForm'

const Form = () => (
    <Fragment>
        <div className="settings-name">
            <Input
                name="name"
            />
        </div>
        <div className="settings-email">
            <Input
                name="email"
            />
        </div>
    </Fragment>
)

export default withForm(Form)

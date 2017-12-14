import React, { Fragment } from 'react'

import Input from 'components/Form/Input'
import withForm from 'components/Form/withForm'

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

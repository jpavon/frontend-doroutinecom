import React, { Fragment } from 'react'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'
import Checkbox from 'components/Form/Checkbox'

const Form = () => (
    <Fragment>
        <Input
            name="name"
            placeholder="Name..."
            align="center"
            background="dark"
        />

        <Checkbox
            name="isDone"
        />
    </Fragment>
)
export default withForm(Form)

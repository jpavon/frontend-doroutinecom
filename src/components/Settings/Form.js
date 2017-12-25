import React, { Fragment } from 'react'

import Input from 'components/withForm/Input'
import withForm from 'components/withForm'
import Label from 'components/Form/Label'

const Form = () => (
    <Fragment>
        <Label htmlFor="name">Name</Label>
        <Input
            name="name"
        />
        <Label htmlFor="name">Email</Label>
        <Input
            name="email"
        />
    </Fragment>
)

export default withForm(Form)

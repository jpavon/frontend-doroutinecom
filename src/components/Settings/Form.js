import React, { Fragment } from 'react'

import Input from 'components/withForm/Input'
import withForm from 'components/withForm'
import Label from 'components/Form/Label'

const Form = () => (
    <Fragment>
        <Label htmlFor="name">Name</Label>
        <Input
            id="name"
            name="name"
        />
        <Label htmlFor="email">Email</Label>
        <Input
            id="email"
            name="email"
        />
    </Fragment>
)

export default withForm(Form)

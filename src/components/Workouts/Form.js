import React from 'react'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'

const Form = () => (
    <Input
        name="name"
        placeholder="Name..."
        align="center"
        background="dark"
    />
)
export default withForm(Form)

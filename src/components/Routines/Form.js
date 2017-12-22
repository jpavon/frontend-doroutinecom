import React from 'react'

import withForm from 'components/withForm'
import Input from 'components/withForm/Input'

const Form = () => (
    <Input
        name="name"
        placeholder="Title..."
    />
)
export default withForm(Form)

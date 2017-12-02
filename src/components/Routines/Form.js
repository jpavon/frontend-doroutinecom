import React from 'react'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'

const Form = () => (
    <Input
        name="name"
        placeholder="Title..."
    />
)
export default withForm(Form)

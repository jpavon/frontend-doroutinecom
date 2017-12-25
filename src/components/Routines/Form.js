import React, { Fragment } from 'react'

import withForm from 'components/withForm'
import Input from 'components/withForm/Input'
import Label from 'components/Form/Label'

const Form = ({data}) => (
    <Fragment>
        <Label htmlFor={`name${data.id}`}>Title</Label>
        <Input
            id={`name${data.id}`}
            name="name"
            placeholder="Title..."
        />
    </Fragment>
)
export default withForm(Form)

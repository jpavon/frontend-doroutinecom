import React, { Fragment } from 'react'

import Input from 'components/Form/Input'
import withForm from 'components/Form/withForm'

const Form = ({data}) => (
    <Fragment>
        <Input
            name="name"
        />
        <Input
            name="email"
        />
    </Fragment>
)

export default withForm(Form)

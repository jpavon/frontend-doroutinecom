import React, { Fragment } from 'react'
import classNames from 'classnames'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'
import Checkbox from 'components/Form/Checkbox'

const Form = ({state}) => (
    <Fragment>
        <div className={classNames(
            'workout-name',
            state.data.isDone && 'workout-name--is-done'
        )}>
            <Input
                name="name"
                placeholder="Name..."
                align="center"
                background="dark"
            />
        </div>


        <Checkbox
            name="isDone"
        />
    </Fragment>
)
export default withForm(Form)

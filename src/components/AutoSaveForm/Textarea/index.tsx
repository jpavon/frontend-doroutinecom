import * as React from 'react'
import * as PropTypes from 'prop-types'

import Alert from 'components/Form/Alert'
import UncontrolledTextarea from 'components/Form/Textarea'
import Saving from 'components/Saving'

interface ITextareaProps {
    name: string

    // ...rest
    // tslint:disable-next-line
    [key: string]: any
}

interface ITextareaContext {
    formContext: {
        onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
        values: object
        errors: {
            [index: string]: string
        }
        updating: string | null
    }
}

class Textarea extends React.Component<ITextareaProps> {

    static contextTypes = {
        formContext: PropTypes.object.isRequired
    }

    context: ITextareaContext

    render() {

        const {
            name,
            ...rest
        } = this.props

        const { values, errors, onChange, updating } = this.context.formContext

        return (
            <div style={{position: 'relative'}}>
                {updating === name && <Saving />}
                <UncontrolledTextarea
                    name={name}
                    value={values[name] || ''}
                    onChange={onChange}
                    {...rest}
                />
                <Alert
                    message={errors[name]}
                />
            </div>
        )
    }
}

export default Textarea

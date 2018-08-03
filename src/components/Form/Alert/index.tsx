import * as React from 'react'

import { FormAlert } from './style'

interface Props {
    message: string | null
}

const Alert: React.SFC<Props> = (props) => {
    return props.message ? (
        <FormAlert data-e2e="form-alert">{props.message}</FormAlert>
    ) : null
}

export default Alert

import * as React from 'react'

import { FormAlert } from './style'

interface IAlertProps {
    message: string | null
}

const Alert: React.SFC<IAlertProps> = (props) => {
    return props.message ? <FormAlert>{props.message}</FormAlert> : null
}

export default Alert

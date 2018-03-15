import * as React from 'react'
import * as classNames from 'classnames'

import './style.css'

interface ILabelProps {
    htmlFor: string
    className?: string
}

const Label: React.SFC<ILabelProps> = (props) => {

    const {
        children,
        className,
        ...rest
    } = props

    return (
        <label
            className={classNames(
                'label',
                className
            )}
            {...rest}
        >
            {children}
        </label>
    )
}

export default Label

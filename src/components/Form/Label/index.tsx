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
        htmlFor
    } = props

    return (
        <label
            htmlFor={htmlFor}
            className={classNames(
                'label',
                className
            )}
        >
            {children}
        </label>
    )
}

export default Label

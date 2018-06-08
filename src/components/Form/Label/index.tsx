import * as React from 'react'
import * as classNames from 'classnames'

import './style.scss'

interface ILabelProps {
    htmlFor: string
    className?: string
    title?: string
}

const Label: React.SFC<ILabelProps> = (props) => {
    const { children, className, htmlFor, title } = props

    return (
        <label
            htmlFor={htmlFor}
            className={classNames('label', className)}
            title={title}
        >
            {children}
        </label>
    )
}

export default Label

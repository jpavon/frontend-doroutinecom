import * as React from 'react'
import * as classNames from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'

import './style.css'

interface ITextareaProps {
    name: string
    className?: string
    value: string
    onChange: (event: React.SyntheticEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.SFC<ITextareaProps> = ({name, className, ...rest}) => (
    <TextareaAutosize
        rows={2}
        name={name}
        className={classNames(
            'textarea',
            className
        )}
        {...rest}
    />
)

export default Textarea

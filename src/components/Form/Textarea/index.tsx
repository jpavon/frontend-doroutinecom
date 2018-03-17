import * as React from 'react'
import * as classNames from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'

import './style.css'

export interface ITextareaProps {
    id: string
    name: string
    className?: string
    value?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.SFC<ITextareaProps> = ({name, className, value, onChange}) => (
    <TextareaAutosize
        rows={2}
        name={name}
        className={classNames(
            'textarea',
            className
        )}
        value={value}
        onChange={onChange}
    />
)

export default Textarea

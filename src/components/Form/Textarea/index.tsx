import * as React from 'react'
import * as classNames from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'

import './style.scss'

export interface ITextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
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

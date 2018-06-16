import * as React from 'react'
import * as classNames from 'classnames'
import TextareaAutosize from 'react-autosize-textarea'

import './style.scss'

export interface ITextareaProps
    extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.SFC<ITextareaProps> = (props) => (
    <TextareaAutosize
        rows={2}
        name={props.name}
        className={classNames('textarea', props.className)}
        value={props.value}
        onChange={props.onChange}
    />
)

export default Textarea

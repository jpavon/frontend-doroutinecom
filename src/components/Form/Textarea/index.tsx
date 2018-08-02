import * as React from 'react'

import { Textarea as StyledTextarea } from './style'

export interface ITextareaProps
    extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.SFC<ITextareaProps> = (props) => (
    <StyledTextarea
        rows={2}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        {...props}
    />
)

export default Textarea

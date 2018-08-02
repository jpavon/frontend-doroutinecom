import styled from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea'

import { inputStyles } from 'components/Form/Input/style'

export const Textarea = styled(TextareaAutosize)`
    ${inputStyles};
    max-width: 100%;
    height: auto;
    overflow: hidden;
`

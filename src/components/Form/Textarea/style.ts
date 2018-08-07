import styled from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea'

import { inputStyles } from 'components/Form/Input/style'

// tslint:disable-next-line:no-any
export const Textarea = styled(TextareaAutosize as any)`
    ${inputStyles};
    max-width: 100%;
    height: auto;
    overflow: hidden;
`

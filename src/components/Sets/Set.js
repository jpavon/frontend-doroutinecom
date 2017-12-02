import React from 'react'

import Form from 'components/Sets/Form'
import ButtonIcon from 'components/ButtonIcon'

const Set = ({set, i, updateSet, lift, removeSet}) => (
    <div className="set">
        <div className="set-number">
            Set {i + 1}
        </div>
        <Form
            data={set}
            update={updateSet}
            lift={lift}
        />
        <ButtonIcon
            remove
            danger
            className="set-button-remove"
            onClick={() => removeSet(set.id)}
        />
    </div>
)

export default Set

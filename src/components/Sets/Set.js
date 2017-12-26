import React from 'react'

import Form from 'components/Sets/Form'
import ButtonIcon from 'components/ButtonIcon'

const Set = ({set, i, updateSet, removeSet}) => (
    <div className="set">
        <div className="set-number">
            Set {i + 1} - <span className="set-rmPercentage">RM% {set.rmPercentage}</span>
        </div>
        <Form
            data={set}
            update={updateSet}
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

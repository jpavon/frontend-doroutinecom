import React from 'react'

import Form from 'components/Sets/Form'
import ButtonIcon from 'components/ButtonIcon'

const Set = ({set, i, updateSet, lift, removeSet}) => (
    <div className="set">
        <Form
            index={i}
            data={set}
            update={updateSet}
            lift={lift}
        />
        <ButtonIcon remove danger onClick={() => removeSet(set.id)} />
    </div>
)

export default Set

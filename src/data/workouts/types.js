import PropTypes from 'prop-types'
import PropTypesAir from 'airbnb-prop-types'

import { RoutineType } from 'data/routines/types'

export const WorkoutType = PropTypes.shape(PropTypesAir.forbidExtraProps({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    routineId: PropTypes.number,
    name: PropTypes.string,
    startedAt: PropTypes.string.isRequired,
    completedAt: PropTypes.string,
    notes: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,

    displayName: PropTypes.string,
    day: PropTypes.string,
    duration: PropTypes.string,
    routine: RoutineType
}))

export const WorkoutsType = PropTypes.arrayOf(WorkoutType)

import PropTypes from 'prop-types'

export const WorkoutType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    routineId: PropTypes.number,
    name: PropTypes.string,
    startedAt: PropTypes.string.isRequired,
    completedAt: PropTypes.string,
    notes: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
})

export const WorkoutsType = PropTypes.arrayOf(WorkoutType)

import PropTypes from 'prop-types'

export const RoutineType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    program: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        content: PropTypes.string
    }),
    name: PropTypes.string,
    notes: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
})

export const RoutinesType = PropTypes.arrayOf(RoutineType)

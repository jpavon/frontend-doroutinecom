import PropTypes from 'prop-types'
import PropTypesAir from 'airbnb-prop-types'

export const RoutineType = PropTypes.shape(PropTypesAir.forbidExtraProps({
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
}))

export const RoutinesType = PropTypes.arrayOf(RoutineType)

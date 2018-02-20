import PropTypes from 'prop-types'
import PropTypesAir from 'airbnb-prop-types'

export const LiftType = PropTypes.shape(PropTypesAir.forbidExtraProps({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    name: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
}))

export const LiftsType = PropTypes.arrayOf(LiftType)

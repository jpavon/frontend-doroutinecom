import PropTypes from 'prop-types'

export const LiftType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    name: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
})

export const LiftsType = PropTypes.arrayOf(LiftType)

import PropTypes from 'prop-types'
import Moment from 'moment'

export const SetType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    exerciseId: PropTypes.number.isRequired,
    reps: PropTypes.number,
    weight: PropTypes.number,
    isCompleted: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
})

export const SetsType = PropTypes.arrayOf(SetType)

export const TopLiftSetsType = PropTypes.arrayOf(PropTypes.shape({
    workoutId: PropTypes.number.isRequired,
    liftId: PropTypes.number.isRequired,
    lift: PropTypes.string,
    moment: PropTypes.instanceOf(Moment),
    reps: PropTypes.number.isRequired,
    rm: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    completedAt: PropTypes.string.isRequired,
}))

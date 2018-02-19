import PropTypes from 'prop-types'

export const ExerciseType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    liftId: PropTypes.number,
    workoutId: PropTypes.number,
    routineId: PropTypes.number,
    order: PropTypes.number,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
})

export const ExercisesType = PropTypes.arrayOf(ExerciseType)

export const ExerciseRoutineAndWorkoutIdType = (props, propName, componentName) => {
    if (!props.routineId && !props.workoutId) {
        return new Error(`One of props 'routineId' or 'workoutId' was not specified in '${componentName}'.`);
    }

    if (props.routineId && props.workoutId) {
        return new Error(`Only one 'routineId' or 'workoutId' needs to be specified in '${componentName}'.`);
    }
}

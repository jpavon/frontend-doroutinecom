import * as actions from 'data/exercises/actions'
import apiEpic from 'utils/apiEpic'

const getExercisesEpic = apiEpic(
    actions.getExercisesRequest,
    actions.getExercisesSuccess,
    actions.getExercisesFailure
)

const postExerciseEpic = apiEpic(
    actions.postExerciseRequest,
    actions.postExerciseSuccess,
    actions.postExerciseFailure
)

const putExerciseEpic = apiEpic(
    actions.putExerciseRequest,
    actions.putExerciseSuccess,
    actions.putExerciseFailure
)

const deleteExerciseEpic = apiEpic(
    actions.deleteExerciseRequest,
    actions.deleteExerciseSuccess,
    actions.deleteExerciseFailure
)

export default [
    getExercisesEpic,
    postExerciseEpic,
    putExerciseEpic,
    deleteExerciseEpic
]

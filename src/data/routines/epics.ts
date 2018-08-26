import { ActionsObservable, ofType } from 'redux-observable'
import { tap, ignoreElements, mapTo } from 'rxjs/operators'

import history from 'utils/history'
import apiEpic from 'utils/apiEpic'
import * as workoutsActions from 'data/workouts/actions'
import * as actions from 'data/routines/actions'
import constants from 'data/routines/constants'

const getRoutinesEpic = apiEpic(
    actions.getRoutinesRequest,
    actions.getRoutinesSuccess,
    actions.getRoutinesFailure
)

const postRoutineEpic = apiEpic(
    actions.postRoutineRequest,
    actions.postRoutineSuccess,
    actions.postRoutineFailure
)

const putRoutineEpic = apiEpic(
    actions.putRoutineRequest,
    actions.putRoutineSuccess,
    actions.putRoutineFailure
)

const deleteRoutineEpic = apiEpic(
    actions.deleteRoutineRequest,
    actions.deleteRoutineSuccess,
    actions.deleteRoutineFailure
)

const redirectAfterPostEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.postRoutineSuccess>>
) =>
    action$.pipe(
        ofType(constants.ROUTINES_POST_SUCCESS),
        tap((action) => history.push(`/routines/${action.payload.id}`)),
        ignoreElements()
    )

const redirectAfterDeleteEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.deleteRoutineSuccess>>
) =>
    action$.pipe(
        ofType(constants.ROUTINES_DELETE_SUCCESS),
        tap(() => history.push('/routines')),
        ignoreElements()
    )

const refreshWorkoutsAfterDeleteEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.deleteRoutineSuccess>>
) =>
    action$.pipe(
        ofType(constants.ROUTINES_DELETE_SUCCESS),
        mapTo(workoutsActions.getWorkoutsRequest())
    )

export default [
    getRoutinesEpic,
    postRoutineEpic,
    putRoutineEpic,
    deleteRoutineEpic,
    redirectAfterPostEpic,
    redirectAfterDeleteEpic,
    refreshWorkoutsAfterDeleteEpic
]

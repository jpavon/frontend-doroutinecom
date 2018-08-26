import { ActionsObservable, ofType } from 'redux-observable'
import { tap, ignoreElements, mapTo } from 'rxjs/operators'

import history from 'utils/history'
import apiEpic from 'utils/apiEpic'
import * as exercisesActions from 'data/exercises/actions'
import * as actions from 'data/lifts/actions'
import constants from 'data/lifts/constants'

const getLiftsEpic = apiEpic(
    actions.getLiftsRequest,
    actions.getLiftsSuccess,
    actions.getLiftsFailure
)

const postLiftEpic = apiEpic(
    actions.postLiftRequest,
    actions.postLiftSuccess,
    actions.postLiftFailure
)

const putLiftEpic = apiEpic(
    actions.putLiftRequest,
    actions.putLiftSuccess,
    actions.putLiftFailure
)

const deleteLiftEpic = apiEpic(
    actions.deleteLiftRequest,
    actions.deleteLiftSuccess,
    actions.deleteLiftFailure
)

const redirectAfterPostEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.postLiftSuccess>>
) =>
    action$.pipe(
        ofType(constants.LIFTS_POST_SUCCESS),
        tap((action) => history.push(`/lifts/${action.payload.id}`)),
        ignoreElements()
    )

const redirectAfterDeleteEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.deleteLiftSuccess>>
) =>
    action$.pipe(
        ofType(constants.LIFTS_DELETE_SUCCESS),
        tap(() => history.push('/lifts')),
        ignoreElements()
    )

const refreshExercisesAfterDeleteEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.deleteLiftSuccess>>
) =>
    action$.pipe(
        ofType(constants.LIFTS_DELETE_SUCCESS),
        mapTo(exercisesActions.getExercisesRequest())
    )

export default [
    getLiftsEpic,
    postLiftEpic,
    putLiftEpic,
    deleteLiftEpic,
    redirectAfterPostEpic,
    redirectAfterDeleteEpic,
    refreshExercisesAfterDeleteEpic
]

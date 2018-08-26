import { ActionsObservable, ofType } from 'redux-observable'
import {
    tap,
    ignoreElements,
    switchMap,
    take,
    startWith,
    zip
} from 'rxjs/operators'

import history from 'utils/history'
import apiEpic from 'utils/apiEpic'
import * as actions from 'data/workouts/actions'
import constants from 'data/workouts/constants'
import * as exercisesActions from 'data/exercises/actions'
import * as setsActions from 'data/sets/actions'
import exercisesConstants from 'data/exercises/constants'
import setsConstants from 'data/sets/constants'

const getWorkoutsEpic = apiEpic(
    actions.getWorkoutsRequest,
    actions.getWorkoutsSuccess,
    actions.getWorkoutsFailure
)

const postWorkoutEpic = apiEpic(
    actions.postWorkoutRequest,
    actions.postWorkoutSuccess,
    actions.postWorkoutFailure
)

const postWorkoutFromEpic = apiEpic(
    actions.postWorkoutFromRequest,
    actions.postWorkoutFromSuccess,
    actions.postWorkoutFromFailure
)

const putWorkoutEpic = apiEpic(
    actions.putWorkoutRequest,
    actions.putWorkoutSuccess,
    actions.putWorkoutFailure
)

const deleteWorkoutEpic = apiEpic(
    actions.deleteWorkoutRequest,
    actions.deleteWorkoutSuccess,
    actions.deleteWorkoutFailure
)

const loadEntitiesFromSuccesAndRedirectEpic = (
    action$: ActionsObservable<
        | ReturnType<typeof actions.postWorkoutFromSuccess>
        | ReturnType<typeof exercisesActions.getExercisesSuccess>
        | ReturnType<typeof setsActions.getSetsSuccess>
    >
) =>
    action$.pipe(
        ofType(constants.WORKOUTS_POST_FROM_SUCCESS),
        switchMap((action: ReturnType<typeof actions.postWorkoutFromSuccess>) =>
            action$.pipe(
                zip(
                    action$
                        .ofType(exercisesConstants.EXERCISES_GET_SUCCESS)
                        .pipe(take(1)),
                    action$.ofType(setsConstants.SETS_GET_SUCCESS).pipe(take(1))
                ),
                tap(() => history.push(`/workouts/${action.payload.id}`)),
                ignoreElements(),
                startWith(exercisesActions.getExercisesRequest()),
                startWith(setsActions.getSetsRequest())
            )
        )
    )

const redirectAfterDeleteEpic = (
    action$: ActionsObservable<ReturnType<typeof actions.deleteWorkoutSuccess>>
) =>
    action$.pipe(
        ofType(constants.WORKOUTS_DELETE_SUCCESS),
        tap(() => history.push('/workouts')),
        ignoreElements()
    )

export default [
    getWorkoutsEpic,
    postWorkoutEpic,
    postWorkoutFromEpic,
    putWorkoutEpic,
    deleteWorkoutEpic,
    loadEntitiesFromSuccesAndRedirectEpic,
    redirectAfterDeleteEpic
]

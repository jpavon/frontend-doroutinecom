import { ActionsObservable, ofType } from 'redux-observable'
import {
    switchMap,
    take,
    startWith,
    zip,
    filter,
    mergeMap,
    throttleTime,
    mapTo
} from 'rxjs/operators'
import { of } from 'rxjs/index'

import appConstants from 'data/constants'
import userConstants from 'data/user/constants'
import routinesConstants from 'data/routines/constants'
import workoutsConstants from 'data/workouts/constants'
import exercisesConstants from 'data/exercises/constants'
import liftsConstants from 'data/lifts/constants'
import setsConstants from 'data/sets/constants'
import * as appActions from 'data/actions'
import * as userActions from 'data/user/actions'
import * as routinesActions from 'data/routines/actions'
import * as workoutsActions from 'data/workouts/actions'
import * as exercisesActions from 'data/exercises/actions'
import * as liftsActions from 'data/lifts/actions'
import * as setsActions from 'data/sets/actions'
import * as uiActions from 'data/ui/actions'
import { SERVER_ERROR } from 'utils/api'

const getAppDataEpic = (
    action$: ActionsObservable<
        | ReturnType<typeof appActions.getAppData>
        | ReturnType<typeof userActions.getUserSuccess>
        | ReturnType<typeof routinesActions.getRoutinesSuccess>
        | ReturnType<typeof workoutsActions.getWorkoutsSuccess>
        | ReturnType<typeof exercisesActions.getExercisesSuccess>
        | ReturnType<typeof setsActions.getSetsSuccess>
        | ReturnType<typeof liftsActions.getLiftsSuccess>
    >
) =>
    action$.pipe(
        ofType(appConstants.GET_APP_DATA_REQUEST),
        switchMap(() =>
            action$.pipe(
                zip(
                    action$.ofType(userConstants.USER_GET_SUCCESS),
                    action$.ofType(routinesConstants.ROUTINES_GET_SUCCESS),
                    action$.ofType(workoutsConstants.WORKOUTS_GET_SUCCESS),
                    action$.ofType(exercisesConstants.EXERCISES_GET_SUCCESS),
                    action$.ofType(setsConstants.SETS_GET_SUCCESS),
                    action$.ofType(liftsConstants.LIFTS_GET_SUCCESS)
                ),
                take(1),
                mapTo(uiActions.removeLoading()),
                startWith(userActions.getUserRequest()),
                startWith(routinesActions.getRoutinesRequest()),
                startWith(workoutsActions.getWorkoutsRequest()),
                startWith(exercisesActions.getExercisesRequest()),
                startWith(setsActions.getSetsRequest()),
                startWith(liftsActions.getLiftsRequest()),
                startWith(uiActions.showLoading())
            )
        )
    )

type FailureActionsObservable = ActionsObservable<
    | ReturnType<typeof userActions.getUserFailure>
    | ReturnType<typeof routinesActions.getRoutinesFailure>
    | ReturnType<typeof workoutsActions.getWorkoutsFailure>
    | ReturnType<typeof exercisesActions.getExercisesFailure>
    | ReturnType<typeof setsActions.getSetsFailure>
    | ReturnType<typeof liftsActions.getLiftsFailure>
>

const unauthErrorEpic = (action$: FailureActionsObservable) =>
    action$.pipe(
        ofType(
            userConstants.USER_GET_FAILURE,
            routinesConstants.ROUTINES_GET_FAILURE,
            workoutsConstants.WORKOUTS_GET_FAILURE,
            exercisesConstants.EXERCISES_GET_FAILURE,
            setsConstants.SETS_GET_FAILURE,
            liftsConstants.LIFTS_GET_FAILURE
        ),
        throttleTime(2000),
        filter((action) => action.error.message === 'Unauthenticated.'),
        mergeMap((action) =>
            of(
                userActions.unauthUser(),
                uiActions.showAlert({ type: 'error', message: action.error })
            )
        )
    )

const appErrorsEpic = (action$: FailureActionsObservable) =>
    action$.pipe(
        ofType(
            userConstants.USER_GET_FAILURE,
            routinesConstants.ROUTINES_GET_FAILURE,
            workoutsConstants.WORKOUTS_GET_FAILURE,
            exercisesConstants.EXERCISES_GET_FAILURE,
            setsConstants.SETS_GET_FAILURE,
            liftsConstants.LIFTS_GET_FAILURE
        ),
        throttleTime(2000),
        filter((action) => action.error.message === SERVER_ERROR),
        mergeMap(() =>
            of(
                uiActions.removeLoading(),
                uiActions.showAlert({
                    type: 'error',
                    message: 'Unexpected error'
                })
            )
        )
    )

export default [getAppDataEpic, unauthErrorEpic, appErrorsEpic]

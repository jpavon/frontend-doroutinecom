import { combineReducers } from 'redux'

import * as userConstants from 'data/user/constants'

import user from 'data/user/reducers'
import routines from 'data/routines/reducers'
import workouts from 'data/workouts/reducers'
import exercises from 'data/exercises/reducers'
import sets from 'data/sets/reducers'
import lifts from 'data/lifts/reducers'
import ui from 'data/ui/reducers'

const appReducer = combineReducers({
    user,
    routines,
    workouts,
    exercises,
    sets,
    lifts,
    ui
})

const rootReducer = (state, action) => {
    if (action.type === userConstants.USER_UNAUTH) {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer

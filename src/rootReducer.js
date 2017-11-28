import { combineReducers } from 'redux'

import ui from 'data/ui/reducers'
import routines from 'data/routines/reducers'
import workouts from 'data/workouts/reducers'
import exercises from 'data/exercises/reducers'
import sets from 'data/sets/reducers'
import lifts from 'data/lifts/reducers'

const rootReducer = combineReducers({
    routines,
    workouts,
    exercises,
    sets,
    lifts,
    ui
})

export default rootReducer;

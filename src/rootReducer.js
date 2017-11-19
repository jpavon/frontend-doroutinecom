import { combineReducers } from 'redux'

import ui from 'data/ui/reducers'
import workouts from 'data/workouts/reducers'
import exercises from 'data/exercises/reducers'
import sets from 'data/sets/reducers'
import lifts from 'data/lifts/reducers'

const rootReducer = combineReducers({
    ui,
    workouts,
    exercises,
    sets,
    lifts
})

export default rootReducer;

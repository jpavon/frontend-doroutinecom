import { combineReducers } from 'redux'

import workouts from 'data/workouts/reducers'
import exercises from 'data/exercises/reducers'
import sets from 'data/sets/reducers'

const rootReducer = combineReducers({
    workouts,
    exercises,
    sets
})

export default rootReducer;

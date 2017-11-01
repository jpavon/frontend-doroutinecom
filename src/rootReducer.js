import { combineReducers } from 'redux'

import workouts from 'data/workouts/reducers'

const rootReducer = combineReducers({
    workouts
})

export default rootReducer;

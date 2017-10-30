import { combineReducers } from 'redux'

import workouts from 'workouts/reducers'

const rootReducer = combineReducers({
    workouts
})

export default rootReducer;

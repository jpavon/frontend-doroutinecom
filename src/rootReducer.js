import { combineReducers } from 'redux'

import workouts from 'models/workouts/reducers'

const rootReducer = combineReducers({
    workouts
})

export default rootReducer;

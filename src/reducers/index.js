import { combineReducers } from 'redux'

import * as ActionTypes from 'actions'

const workouts = (state = {}, action) => {
    const { type } = action

    switch (type) {
      case ActionTypes.WORKOUTS_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case ActionTypes.WORKOUTS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.response
        }
      case ActionTypes.WORKOUTS_FAILURE:
        return {
          ...state,
          isFetching: false
        }
      default:
        return state
    }
}

const rootReducer = combineReducers({
  workouts
})

export default rootReducer

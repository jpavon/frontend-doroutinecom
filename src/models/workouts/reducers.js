import * as Types from 'models/workouts/types'

const workouts = (state = {}, action) => {
    switch (action.type) {
      case Types.WORKOUTS_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case Types.WORKOUTS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.response
        }
      case Types.WORKOUTS_FAILURE:
        return {
          ...state,
          isFetching: false
        }
      default:
        return state
    }
}

export default workouts

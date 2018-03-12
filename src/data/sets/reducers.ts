import { ISetsState, ISetsAction, ISet } from 'data/sets/types'

import * as constants from 'data/sets/constants'
import * as dataTypes from 'data/constants'
import * as utils from 'data/utils'

const initialState: ISetsState = {
    fetchStatus: dataTypes.STATUS_NONE,
    entitiesStatus: {},
    entities: [],
    error: null
}

const sets = (state = initialState, action: ISetsAction): ISetsState => {
    const { type, payload, error, id } = action

    switch (type) {
        case constants.SETS_GET_REQUEST:
            return utils.request(state)

        case constants.SETS_GET_SUCCESS:
            return utils.getSuccess(state, (payload as ISet[]))

        case constants.SETS_GET_FAILURE:
            return utils.failure(state, error)

        case constants.SETS_POST_REQUEST:
            return utils.request(state)

        case constants.SETS_POST_SUCCESS:
            return utils.postSuccess(state, (payload as ISet))

        case constants.SETS_POST_FAILURE:
            return utils.failure(state, error)

        case constants.SETS_PUT_REQUEST:
            return utils.putRequest(state, id)

        case constants.SETS_PUT_SUCCESS:
            return utils.putSuccess(state, (payload as ISet))

        case constants.SETS_PUT_FAILURE:
            return utils.failure(state, error)

        case constants.SETS_DELETE_REQUEST:
            return utils.deleteRequest(state, id)

        case constants.SETS_DELETE_SUCCESS:
            return utils.deleteSuccess(state, (payload as ISet).id)

        case constants.SETS_DELETE_FAILURE:
            return utils.failure(state, error)

        default:
            return state
    }
}

export default sets

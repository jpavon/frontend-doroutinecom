import * as actions from 'data/sets/actions'
import apiEpic from 'utils/apiEpic'

const getSetsEpic = apiEpic(
    actions.getSetsRequest,
    actions.getSetsSuccess,
    actions.getSetsFailure
)

const postSetEpic = apiEpic(
    actions.postSetRequest,
    actions.postSetSuccess,
    actions.postSetFailure
)

const putSetEpic = apiEpic(
    actions.putSetRequest,
    actions.putSetSuccess,
    actions.putSetFailure
)

const deleteSetEpic = apiEpic(
    actions.deleteSetRequest,
    actions.deleteSetSuccess,
    actions.deleteSetFailure
)

export default [getSetsEpic, postSetEpic, putSetEpic, deleteSetEpic]

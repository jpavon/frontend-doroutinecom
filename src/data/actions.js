import * as helperTypes from 'data/types'

const mountAction = () => ({
    type: helperTypes.MOUNTED
})

export const mount = () => (dispatch, getState) => {
    return dispatch(mountAction())
}

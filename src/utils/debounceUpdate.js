import debounce from 'lodash/debounce'

const dispatchUpdate = (dispatch, resolve) => (
    dispatch().then(resolve)
)

const debounced = debounce(dispatchUpdate, 300)

const debounceUpdate = (dispatch) => (
    new Promise(debounced.bind(null, dispatch))
)

export default debounceUpdate

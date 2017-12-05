import debounce from 'lodash/debounce'

const dispatchUpdate = (fn, resolve, reject) => (
    fn().then(resolve).catch(reject)
)

const debounceUpdateDispatch = debounce(dispatchUpdate, 300)

const debounceUpdate = (fn) => (
    new Promise((debounceUpdateDispatch || dispatchUpdate).bind(null, fn))
)

export default debounceUpdate

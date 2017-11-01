import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import api from 'middleware/api'
import rootReducer from 'rootReducer'

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
)

export default configureStore

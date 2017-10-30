import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import api from 'shared/middleware/api'
import rootReducer from 'shared/rootReducer'

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
)

export default configureStore

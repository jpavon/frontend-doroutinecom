import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import api from 'middleware/api'
import rootReducer from 'rootReducer'

let middleware = [thunk, api]
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger()]
}

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(...middleware)
        )
    )

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('rootReducer', () => {
                const nextRootReducer = require('rootReducer').default
                store.replaceReducer(nextRootReducer)
            })
        }
    }

    return store
}

export default configureStore

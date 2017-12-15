import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import apiMiddleware from 'utils/apiMiddleware'
import rootReducer from 'data/rootReducer'

const middleware = [thunk, apiMiddleware]
if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        collapsed: true
    })
    middleware.push(logger)
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
            module.hot.accept('rootReducer', () => {
                const nextRootReducer = require('data/rootReducer').default
                store.replaceReducer(nextRootReducer)
            })
        }
    }

    return store
}

export default configureStore

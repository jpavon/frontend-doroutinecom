import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import apiMiddleware from 'utils/apiMiddleware'
import rootReducer from 'utils/rootReducer'

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

    // if (process.env.NODE_ENV !== 'production') {
    //     if (module.hot) {
    //         module.hot.accept('utils/rootReducer', () => {
    //             const nextRootReducer = require('utils/rootReducer').default
    //             store.replaceReducer(nextRootReducer)
    //         })
    //     }
    // }

    return store
}

export default configureStore

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import api from 'shared/middleware/api'
import rootReducer from 'shared/rootReducer'
import DevTools from 'shared/containers/DevTools'

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, api, createLogger()),
            DevTools.instrument()
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('shared/rootReducer', () => {
            const nextRootReducer = require('shared/rootReducer').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore

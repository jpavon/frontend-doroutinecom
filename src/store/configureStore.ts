import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { IRootState } from 'data/types'

import rootReducer from 'store/rootReducer'
import rootSaga from 'store/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware: Middleware[] = [sagaMiddleware]
if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        collapsed: true
    })
    middleware.push(logger)
}

const configureStore = (preloadedState?: IRootState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(...middleware))
    )

    sagaMiddleware.run(rootSaga)

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

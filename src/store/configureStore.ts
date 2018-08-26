import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from 'store/rootEpic'
import rootReducer from 'store/rootReducer'
import history from 'utils/history'

const epicMiddleware = createEpicMiddleware()

const middleware: Middleware[] = [routerMiddleware(history), epicMiddleware]
if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        collapsed: true
    })
    middleware.push(logger)
}

const configureStore = () => {
    const store = createStore(
        connectRouter(history)(rootReducer),
        {},
        compose(applyMiddleware(...middleware))
    )

    epicMiddleware.run(rootEpic)

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

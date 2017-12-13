import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import history from 'utils/history'
import configureStore from 'store/configureStore'
// import registerServiceWorker from 'registerServiceWorker'

import App from 'App'

import 'styles/global.css'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
// registerServiceWorker()

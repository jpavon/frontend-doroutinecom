import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from 'store/configureStore'
// import registerServiceWorker from 'registerServiceWorker'

import App from 'App'

import 'styles/global.css'

const store = configureStore()

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
// registerServiceWorker()

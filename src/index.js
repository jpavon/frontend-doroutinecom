import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import moment from 'moment'

import history from 'utils/history'
import configureStore from 'store/configureStore'
import registerServiceWorker from 'utils/registerServiceWorker'

import App from 'App'

import 'styles/global.css'

moment.updateLocale('en', {
    week: {
        dow: 1,
    }
})

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()

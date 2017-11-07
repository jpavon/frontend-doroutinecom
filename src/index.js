import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { camelizeKeys } from 'humps'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

import Routes from 'routes'
import configureStore from 'store/configureStore'
// import registerServiceWorker from 'registerServiceWorker'

const store = configureStore(camelizeKeys(window.__INITIAL_STATE__))
delete window.__INITIAL_STATE__

render(
    <Router>
        <Routes store={store} />
    </Router>,
    document.getElementById('root')
)
// registerServiceWorker();

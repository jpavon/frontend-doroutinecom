import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { camelizeKeys } from 'humps'

import Root from 'rootContainer'
import configureStore from 'store/configureStore'
// import registerServiceWorker from 'registerServiceWorker'

const store = configureStore(camelizeKeys(window.__INITIAL_STATE__))
delete window.__PRELOADED_STATE__

render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
)
// registerServiceWorker();

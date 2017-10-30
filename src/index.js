import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import 'bulma/css/bulma.css'

import Root from 'shared/containers/Root'
import configureStore from 'shared/store/configureStore'
import registerServiceWorker from 'registerServiceWorker'

const store = configureStore()

render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
)
registerServiceWorker();

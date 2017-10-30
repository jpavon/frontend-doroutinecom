import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import Home from 'shared/pages/Home'
import Lifts from 'shared/pages/Lifts'

let DevTools
if (process.env.NODE_ENV !== 'production') DevTools = require('./DevTools').default;

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/lifts" component={Lifts} />

            {process.env.NODE_ENV !== 'production' && <DevTools />}
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root

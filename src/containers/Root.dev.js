import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import DevTools from 'containers/DevTools'
import App from 'containers/App'
import Nav from 'containers/Nav'

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/test" component={Nav} />
            <DevTools />
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root

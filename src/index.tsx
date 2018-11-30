import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { GlobalStyles } from 'styles'
import history from 'utils/history'
import configureStore from 'store/configureStore'
import { unregister } from 'utils/registerServiceWorker'
import ScrollToTop from 'components/ScrollToTop'
import App from 'App'

const store = configureStore()

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollToTop>
                <GlobalStyles />
                <App />
            </ScrollToTop>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

unregister()

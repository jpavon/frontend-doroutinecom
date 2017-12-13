import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Helmet>
                    {this.props.header}
                </Helmet>
                <div className="container">
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Layout

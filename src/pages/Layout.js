import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Nav from 'components/Nav'

import 'scss/global.css'

class Layout extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Layout title</title>
                </Helmet>
                <Nav />
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Nav from 'containers/Nav'

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
                {this.props.children}
            </div>
        )
    }
}

export default Layout

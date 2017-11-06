import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { mount } from 'data/actions'

import Nav from 'components/Nav'

import 'scss/global.css'

class Layout extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        mount: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.mount()
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

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = {
    mount
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

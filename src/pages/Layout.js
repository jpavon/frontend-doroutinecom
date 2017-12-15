import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { removeError } from 'data/ui/actions'

import Footer from 'components/Footer'
import ErrorMessage from 'components/ErrorMessage'

class Layout extends Component {

    static propTypes = {
        error: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ]).isRequired,

        removeError: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.props.error && this.props.removeError()
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    {this.props.header}
                </Helmet>
                <div className="container">
                    <ErrorMessage error={this.props.error} />
                    {this.props.children}
                    <Footer />
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state, props) => ({
    error: state.ui.error
})

const mapDispatchToProps = {
    removeError
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

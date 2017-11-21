import React, { Component } from 'react'
import { connect } from 'react-redux'

import LiftsContainer from 'containers/HomeContainer/LiftsContainer'
import BlocksContainer from 'containers/HomeContainer/BlocksContainer'

import './style.css'

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <LiftsContainer />
                <BlocksContainer />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

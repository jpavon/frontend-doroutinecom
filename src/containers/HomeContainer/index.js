import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleIsEditing } from 'data/ui/actions'

import LiftsContainer from 'containers/HomeContainer/LiftsContainer'
import BlocksContainer from 'containers/HomeContainer/BlocksContainer'
import Button from 'components/Button'

import './style.css'

class HomeContainer extends Component {

    static propTypes = {
        toggleIsEditing: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
    }

    handleIsEditing = () => {
        this.props.toggleIsEditing()
    }

    render() {
        return (
            <div>
                <div>
                    <Button onClick={this.handleIsEditing}>Edit mode</Button>
                </div>
                <LiftsContainer />
                <BlocksContainer />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    toggleIsEditing
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

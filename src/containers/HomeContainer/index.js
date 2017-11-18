import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LiftsContainer from 'containers/HomeContainer/LiftsContainer'
import BlocksContainer from 'containers/HomeContainer/BlocksContainer'
import Button from 'components/Button'

import './style.css'

class HomeContainer extends Component {

    // static propTypes = {
    // }

    constructor(props) {
        super(props)

        this.state = {
            ui: {
                isEditing: false
            }
        }
    }

    handleIsEditing = () => {
        this.setState((prevState) => ({
            ui: { isEditing: !prevState.ui.isEditing }
        }))
    }

    render() {
        return (
            <div>
                <div>
                    <Button onClick={this.handleIsEditing}>Edit mode</Button>
                </div>
                <LiftsContainer ui={this.state.ui} />
                <BlocksContainer ui={this.state.ui} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

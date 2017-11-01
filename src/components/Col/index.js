import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

class Col extends React.Component {

    static propTypes = {
        number: PropTypes.number
    }

    render() {
        return (
            <div className={classNames('col', this.props.number && `col--${this.props.number}` )}>
                {this.props.children}
            </div>
        )
    }
}

export default Col

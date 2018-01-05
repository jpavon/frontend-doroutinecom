import React, { Component } from 'react'
import classNames from 'classnames'

import './style.css'

class Tooltip extends Component {

    state = {
        open: true
    }

    render() {
        const { className, text, content } = this.props
        const { open } = this.state

        return (
            <div
                className={classNames(
                    'tooltip',
                    className
                )}
                onMouseEnter={() => this.setState({open: true})}
                onMouseLeave={() => this.setState({open: false})}
            >
                <span className="tooltip-text">{text}</span>

                {open &&
                    <div className="tooltip-content">
                        {content}
                    </div>
                }
            </div>
        )
    }

}

export default Tooltip

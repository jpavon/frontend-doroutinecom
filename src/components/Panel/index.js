import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

class Panel extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        header: PropTypes.string
    }

    render() {
        const {
            className,
            children,
            header,
            ...rest
        } = this.props;

        return (
            <div className={classNames('panel', className)} {...rest}>
                {header &&
                    <div className="panel-header">
                        {header}
                    </div>
                }
                {children}
            </div>
        )
    }
}

export default Panel

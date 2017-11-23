import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ErrorMessage from 'components/Form/ErrorMessage'

class Input extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        alignRight: PropTypes.bool
    }

    static contextTypes = {
        data: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const differentData = this.context.data[this.props.name] !== nextContext.data[this.props.name]
        const differentErrors = this.context.errors[this.props.name] !== nextContext.errors[this.props.name]
        return differentData || differentErrors
    }

    render() {
        const { name, alignRight, ...rest } = this.props
        return [
            <input
                key={1}
                value={this.context.data[this.props.name] || ''}
                onChange={(event) => this.context.onChange(event, this.props.name)}
                className={classNames(
                    'input',
                    alignRight && 'input-right'
                )}
                {...rest}
            />,
            <ErrorMessage
                key={2}
                errors={this.context.errors[this.props.name][0]}
            />
        ]
    }
}

export default Input

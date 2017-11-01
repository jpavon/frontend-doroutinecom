import React from 'react'

import './style.css'

class Container extends React.Component {

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default Container

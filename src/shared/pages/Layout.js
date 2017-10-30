import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Nav from 'shared/containers/Nav'

class Layout extends Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Layout title</title>
                </Helmet>
                <Nav />
                {this.props.children}
            </div>
        )
    }
}

export default Layout

import React from 'react'
import classNames from 'classnames'

import './style.css'

const Header = ({children, small}) => (
    <h1 className={classNames(
            'header',
            small && 'header--small'
        )}
    >
        {children}
    </h1>
)

export default Header

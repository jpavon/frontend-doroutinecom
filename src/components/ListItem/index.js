import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const ListItem = (props) => {

    const { to, children, className } = props

    const Element = to ? Link : 'div'

    return (
        <Element to={to} className={`list-item ${className}`}>
            {children}
        </Element>
    )
}

export default ListItem

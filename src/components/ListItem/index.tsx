import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

interface IListItemProps {
    to: string
    className: string
}

const ListItem: React.SFC<IListItemProps> = (props) => {

    const { to, children, className } = props

    const Element = to ? Link : 'div'

    return (
        <Element to={to} className={`list-item ${className}`}>
            {children}
        </Element>
    )
}

export default ListItem

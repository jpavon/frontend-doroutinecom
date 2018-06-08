import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

interface IListItemProps {
    to: string
    className: string
    info?: string[]
}

const ListItem: React.SFC<IListItemProps> = (props) => {
    const { to, children, className, info } = props

    const Element = to ? Link : 'div'

    return (
        <Element to={to} className={`list-item ${className}`}>
            {children}
            {info &&
                info.length > 0 && (
                    <div className="list-item-info">
                        Exercises:{' '}
                        {info.map((item, index) => {
                            if (info.length === index + 1) {
                                return item
                            }
                            return `${item}, `
                        })}
                    </div>
                )}
        </Element>
    )
}

export default ListItem

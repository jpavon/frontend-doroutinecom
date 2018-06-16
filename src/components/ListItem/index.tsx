import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

interface IListItemProps {
    to: string
    className: string
    info?: string[]
}

const ListItem: React.SFC<IListItemProps> = (props) => {
    const Element = props.to ? Link : 'div'

    return (
        <Element to={props.to} className={`list-item ${props.className}`}>
            {props.children}
            {props.info &&
                props.info.length > 0 && (
                    <div className="list-item-info">
                        Exercises:{' '}
                        {props.info &&
                            props.info.map((item, index) => {
                                if (
                                    props.info &&
                                    props.info.length === index + 1
                                ) {
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

import React from 'react'
import classNames from 'classnames'

import Header from 'components/Header'

import './style.css'

const Section = ({children, className, title, small}) => (
    <section
        className={classNames(
            'section',
            small && 'section--small',
            className
        )}
    >
        <Header>{title}</Header>
        {children}
    </section>
)

export default Section

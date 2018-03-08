import React, { Fragment } from 'react'
import { TransitionMotion, spring } from 'react-motion'

const willEnter = () => ({
    opacity: 0,
})

const willLeave = () => ({
    opacity: spring(0),
})

const getStyles = () => ({
    opacity: spring(1),
})

const Transition = ({children, className, noData}) => (
    <TransitionMotion
        styles={children.length > 0 ? children.map((item) => ({ key: `${item.key}`, style: getStyles(), data: item })) : []}
        willLeave={willLeave}
        willEnter={willEnter}
    >
        {(interpolatedStyles) =>
            <Fragment>
                {interpolatedStyles.length > 0 ? interpolatedStyles.map(({ key, style, data }) =>
                    <div
                        key={`${key}-transition`}
                        style={{
                            opacity: style.opacity,
                        }}
                        className={className}
                    >
                        {data}
                    </div>
                ) : children}
            </Fragment>
        }
    </TransitionMotion>
)

export default Transition

import * as React from 'react'
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

type ITransitionElement = React.ReactElement<{key: string}>

export interface ITransitionProps {
    className?: string
    children: ITransitionElement | ITransitionElement[]
}

const Transition: React.SFC<ITransitionProps> = ({children, className = ''}) => (
    <TransitionMotion
        styles={Array.isArray(children) && children.length > 0 ?
            (children as ITransitionElement[]).map((item) => (
                { key: `${item.key}`, style: getStyles(), data: item }
            )) : []
        }
        willLeave={willLeave}
        willEnter={willEnter}
    >
        {(interpolatedStyles) =>
            <>
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
            </>
        }
    </TransitionMotion>
)

export default Transition

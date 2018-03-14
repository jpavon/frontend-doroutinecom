import * as React from 'react'

import './style.css'

interface IProps {
    children: React.ReactNode
}

const Lifts: React.SFC<IProps> = ({children}) => (
    <div className="lifts">
        {children}
    </div>
)

export default Lifts

import * as React from 'react'

import './style.scss'

const Profile: React.SFC<{}> = ({children}) => (
    <div className="profile">
        {children}
    </div>
)

export default Profile

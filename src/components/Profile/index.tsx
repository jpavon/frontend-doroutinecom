import * as React from 'react'

import './style.css'

const Profile: React.SFC<{}> = ({children}) => (
    <div className="profile">
        {children}
    </div>
)

export default Profile

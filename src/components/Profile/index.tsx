import * as React from 'react'

import './style.scss'

const Profile: React.SFC<{}> = (props) => (
    <div className="profile">{props.children}</div>
)

export default Profile

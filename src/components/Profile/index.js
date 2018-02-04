import React from 'react'

import './style.css'

const Profile = ({children}) => (
    <div className="profile">
        {/*<div className="profile-data">
            <div className="profile-data-col">
                <div className="profile-data-item">
                    <div className="profile-data-value">
                        2
                    </div>
                    <div className="profile-data-title">
                        Workouts Completed
                    </div>
                </div>
            </div>
        </div>*/}

        {children}
    </div>
)

export default Profile

import React from 'react'

const Loading = ({error, pastDelay}) => {
    if (error) {
        return <div>Error!</div>
    } else if (pastDelay) {
        return <div>Loading...</div>
    } else {
        return null
    }
}

export default Loading

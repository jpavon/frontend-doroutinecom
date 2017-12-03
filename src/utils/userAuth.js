

const userAuth = (token, history, location) => {
    localStorage.setItem('token', token)

    history.push(
        (location.state && location.state.from) ?
        location.state.from :
        '/'
    )
}

export default userAuth

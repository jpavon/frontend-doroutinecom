type Action<T extends string, P> = P extends undefined
    ? { type: T }
    : { type: T } & P

const action = <T extends string, P = undefined>(
    actionType: T,
    payload?: P
) => {
    const constructor = () =>
        Object.assign(
            {},
            {
                type: actionType
            },
            payload
        ) as Action<T, P>

    const map = <P, R = { payload?: P }>(payloadCreator: (payload: P) => R) => (
        payload: P
    ) =>
        Object.assign(
            {},
            { type: actionType },
            payloadCreator(payload)
        ) as Action<T, R>

    return Object.assign(constructor, {
        with: map
    })
}

export default action

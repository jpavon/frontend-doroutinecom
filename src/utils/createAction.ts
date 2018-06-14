type Action<T extends string, P> = P extends undefined
    ? { type: T }
    : { type: T; payload: P }

type MetaAction<T extends string, P, M> = M extends undefined
    ? { type: T; payload: P }
    : { type: T; payload: P; meta: M }

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
            payload ? { payload } : undefined
        ) as Action<T, P>

    const map = <P, M = undefined, R = { payload?: P; meta?: M }>(
        payloadCreator: (payload: P) => R,
        metaCreator?: (payload: P) => M
    ) => (payload: P) =>
        Object.assign(
            {},
            { type: actionType },
            { payload: payloadCreator(payload) },
            metaCreator
                ? {
                      meta: metaCreator(payload)
                  }
                : undefined
        ) as MetaAction<T, R, M>

    return Object.assign(constructor, {
        with: map
    })
}

export default action

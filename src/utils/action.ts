type Action<T extends string, D> = D extends void
    ? { type: T }
    : { type: T } & D

// type ActionPayloadMeta<T extends string, P, M> = M extends void
//     ? { type: T; payload: P }
//     : { type: T; payload: P; meta: M }

type ActionMeta<P, M> = M extends void
    ? { payload: P }
    : { payload: P; meta: M }

const action = <T extends string, D = void>(actionType: T, data?: D) => {
    const constructor = () =>
        Object.assign(
            {
                type: actionType
            },
            data
        ) as Action<T, D>

    const map = <P, M = void, R = ActionMeta<P, M>>(
        dataCreator: (data: P) => R
    ) => (passedData: P) =>
        Object.assign({}, { type: actionType }, dataCreator(passedData))

    return Object.assign(constructor, {
        with: map
    })
}

export default action

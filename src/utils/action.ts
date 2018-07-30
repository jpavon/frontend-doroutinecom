type Action<T extends string, D> = D extends void
    ? { type: T }
    : { type: T } & D

const action = <T extends string, D = void>(actionType: T, data?: D) => {
    return Object.assign(
        {
            type: actionType
        },
        data
    ) as Action<T, D>
}

export default action

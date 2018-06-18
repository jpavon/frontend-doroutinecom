import createAction from './createAction'

enum Type {
    TEST = 'TEST'
}

interface Data {
    id: number
    name: string
}

test('action with type', () => {
    const creator = createAction(Type.TEST)

    const action: { type: Type.TEST } = creator()

    expect(action).toEqual({ type: 'TEST' })
})

test('action with type and payload', () => {
    const creator = createAction(Type.TEST, { test: 'test' })

    const action: { type: Type.TEST; payload: { test: string } } = creator()

    expect(action).toEqual({ type: 'TEST', payload: { test: 'test' } })
})

test('action with payload creator', () => {
    const creator = createAction(Type.TEST).with((user: Data) => user)

    const action: { type: Type.TEST; payload: Data } = creator({
        id: 1,
        name: 'test'
    })

    expect(action).toEqual({
        type: 'TEST',
        payload: {
            id: 1,
            name: 'test'
        }
    })
})

test('action with payload and meta creator', () => {
    const creator = createAction(Type.TEST).with(
        (user: Data) => user,
        (user) => ({
            id: user.id
        })
    )

    const action: { type: Type.TEST; payload: Data } = creator({
        id: 1,
        name: 'test'
    })

    expect(action).toEqual({
        type: 'TEST',
        payload: {
            id: 1,
            name: 'test'
        },
        meta: { id: 1 }
    })
})

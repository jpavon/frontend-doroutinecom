import action from './action'

enum Type {
    TEST = 'TEST'
}

interface Data {
    id: number
    name: string
}

interface Meta {
    id: number
}

test('action with type', () => {
    const creator = action(Type.TEST)

    const act: { type: Type.TEST } = creator()

    expect(act).toEqual({ type: 'TEST' })
})

test('action with type and payload', () => {
    const creator = action(Type.TEST, { test: 'test' })

    const act: { type: Type.TEST; test: string } = creator()

    expect(act).toEqual({ type: 'TEST', test: 'test' })
})

test('action with payload creator', () => {
    const creator = action(Type.TEST).with<Data>((user) => ({
        payload: user
    }))

    const act: { type: Type.TEST; payload: Data } = creator({
        id: 1,
        name: 'test'
    })

    expect(act).toEqual({
        type: 'TEST',
        payload: {
            id: 1,
            name: 'test'
        }
    })
})

test('action with payload creator with meta', () => {
    const creator = action(Type.TEST).with<Data, Meta>((user) => ({
        payload: user,
        meta: { id: user.id }
    }))

    const act: { type: Type.TEST; payload: Data; meta: Meta } = creator({
        id: 1,
        name: 'test'
    })

    expect(act).toEqual({
        type: 'TEST',
        payload: {
            id: 1,
            name: 'test'
        },
        meta: {
            id: 1
        }
    })
})

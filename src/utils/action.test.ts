import action from './action'

enum Type {
    TEST = 'TEST'
}

interface TestPayload {
    id: number
    name: string
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
    const creator = action(Type.TEST).with((user: TestPayload) => user)

    const act: { type: Type.TEST } & TestPayload = creator({
        id: 1,
        name: 'test'
    })

    expect(act).toEqual({
        type: 'TEST',
        id: 1,
        name: 'test'
    })
})

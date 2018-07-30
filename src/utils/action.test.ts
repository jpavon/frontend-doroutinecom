import action from './action'

enum Type {
    TEST = 'TEST'
}

test('action with type', () => {
    const creator = () => action(Type.TEST)

    const act: { type: Type.TEST } = creator()

    expect(act).toEqual({ type: 'TEST' })
})

test('action with type and payload', () => {
    const creator = (test: string) => action(Type.TEST, { test })

    const act: { type: Type.TEST; test: string } = creator('my-string')

    expect(act).toEqual({ type: 'TEST', test: 'my-string' })
})

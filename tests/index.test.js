import faker from 'faker'

import {
    goTo,
    expectSelectorToContainText,
    expectSelectOptionToBe,
    expectCheckboxToBe,
    selectOption,
} from './utils'

let page

beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.setViewport({ width: 1200, height: 800})
}, global.TIMEOUT)

describe('auth', async () => {
    test('user can register', async () => {
        await goTo(page, '/register')
        await page.click('input[id=name]')
        await page.type('input[id=name]', global.USER.name)
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', global.USER.password)
        await page.click('input[id=passwordConfirmation]')
        await page.type('input[id=passwordConfirmation]', global.USER.password)
        await page.click('button[type=submit]')
        await expectSelectorToContainText(page, '.routines', 'Routines')
    }, global.TIMEOUT)

    test('user can logout', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.logout')
        await page.click('.logout')
        await expectSelectorToContainText(page, '.login', 'Login')
    }, global.TIMEOUT)

    test('user can request forgotten password email', async () => {
        await goTo(page, '/login')
        await page.waitForSelector('.login')
        await page.click('.login-password-forgotten a')
        await page.waitForSelector('.password-forgotten')
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('button[type=submit]')
        await page.waitFor(1000)
        await expectSelectorToContainText(page, 'body', 'A password reset email has been sent.')
    }, global.TIMEOUT)

    test('user can\'t register with same email', async () => {
        await goTo(page, '/register')
        await page.waitForSelector('.register')
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('button[type=submit]')
        await page.waitFor(1000)
        await expectSelectorToContainText(page, 'body', 'The email has already been taken. ')
    }, global.TIMEOUT)

    test('user can login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', global.USER.password)
        await page.click('button[type=submit]')
        await expectSelectorToContainText(page, '.routines', 'Routines')
    }, global.TIMEOUT)
})

describe('routines creation', async () => {
    test('create a routine', async () => {
        await goTo(page, '/')
        await page.waitForSelector('.routines-button-create')
        await page.click('.routines-button-create button')
        await page.waitForSelector('.routine-single')
        await page.click('.routine-single input')
        await page.type('.routine-single input', global.ROUTINE.name)
        await page.waitFor(1000)
        await selectOption(page, '.routine-single select[name=weightMeasure]', global.ROUTINE.weightMeasure)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('create a lift', async () => {
        await page.click('.lifts-button-create button')
        await page.waitForSelector('.lift')
        await page.click('.lift input[name=name]')
        await page.type('.lift input[name=name]', global.LIFT.name)
        await page.waitFor(1000)
        await page.click('.lift input[name=rm]')
        await page.type('.lift input[name=rm]', global.LIFT.rm)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('create a workout', async () => {
        await page.click('.workouts-button-create')
        await page.waitForSelector('.workout')
        await page.click('.workout input[name=name]')
        await page.type('.workout input[name=name]', global.WORKOUT.name)
        await page.waitFor(1000)
        await page.click('.workout input[name=isDone]')
        await page.waitFor(1000)
        await page.click('.workout textarea[name=notes]')
        await page.type('.workout textarea[name=notes]', global.WORKOUT.notes)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('create a exercise', async () => {
        await page.click('.exercises-button-create button')
        await page.waitForSelector('.exercise')
        await selectOption(page, '.exercise select', global.LIFT.name)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('create a set', async () => {
        await page.click('.sets-button-create button')
        await page.waitForSelector('.set')
        await page.click('.set input[name=weight]')
        await page.type('.set input[name=weight]', global.SET.weight)
        await page.waitFor(1000)
        await page.click('.set input[name=reps]')
        await page.type('.set input[name=reps]', global.SET.reps)
        await page.waitFor(1000)
    }, global.TIMEOUT)
})

describe('routine is saved on reload', async () => {
    test('routine is saved', async () => {
        await page.reload()

        await page.waitForSelector('.routine-single')
        await expectSelectorToContainText(page, '.routine-single', global.ROUTINE.name)
        await expectSelectOptionToBe(page, '.routine-single select[name=weightMeasure]', global.ROUTINE.weightMeasure)
    }, global.TIMEOUT)

    test('lift is saved', async () => {
        await expectSelectorToContainText(page, '.lift-name', global.LIFT.name)
        await expectSelectorToContainText(page, '.lift-rm', global.LIFT.rm)
    }, global.TIMEOUT)

    test('workout is saved', async () => {
        await expectSelectorToContainText(page, '.workout', global.WORKOUT.name)
        await expectSelectorToContainText(page, '.workout', global.WORKOUT.notes)
        await expectCheckboxToBe(page, '.workout input[name=isDone]', true)
    }, global.TIMEOUT)

    test('exercise is saved', async () => {
        await expectSelectOptionToBe(page, '.exercise select', global.LIFT.name)
    }, global.TIMEOUT)

    test('set is saved', async () => {
        await expectSelectorToContainText(page, '.set-weight', global.SET.weight)
        await expectSelectorToContainText(page, '.set-reps', global.SET.reps)
    }, global.TIMEOUT)
})

describe('routine shows validation errors', async () => {
    test('lift rm', async () => {
        await page.click('.lift input[name=rm]')
        await page.type('.lift input[name=rm]', 'string')
        await page.waitFor(1000)
        await expectSelectorToContainText(page, '.lift', 'must be a number')
    }, global.TIMEOUT)

    test('set weight', async () => {
        await page.click('.set input[name=weight]')
        await page.type('.set input[name=weight]', 'string')
        await page.waitFor(1000)
        await expectSelectorToContainText(page, '.set', 'must be a number')
    }, global.TIMEOUT)

    test('set reps', async () => {
        await page.click('.set input[name=reps]')
        await page.type('.set input[name=reps]', 'string')
        await page.waitFor(1000)
        await expectSelectorToContainText(page, '.set', 'must be a number')
    }, global.TIMEOUT)
})

describe('settings', async () => {
    test('update user', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.settings')
        await page.click('#name')
        await page.type('#name', 'updated')
        await page.waitFor(1000)
        await page.click('#email')
        await page.type('#email', 'updated')
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('user info is saved on reload', async () => {
        await page.reload()

        await expectSelectorToContainText(page, '.settings', global.USER.name + 'updated')
        await expectSelectorToContainText(page, '.settings', global.USER.email + 'updated')
    }, global.TIMEOUT)
})

import faker from 'faker'

import {
    expectSelectorToHaveText,
    expectSelectToHaveText,
    selectOption,
    goTo
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
        await expectSelectorToHaveText(page, '.routines', 'Routines')
    }, global.TIMEOUT)

    test('user can logout', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.logout')
        await page.click('.logout')
        await expectSelectorToHaveText(page, '.login', 'Login')
    }, global.TIMEOUT)

    test('user can login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', global.USER.password)
        await page.click('button[type=submit]')
        await expectSelectorToHaveText(page, '.settings', 'Settings')
    }, global.TIMEOUT)
})

describe('routines', async () => {

    test('create a routine', async () => {
        await goTo(page, '/')
        await page.waitForSelector('button')
        await page.click('button')
        await page.waitForSelector('.routine-single')
        await page.click('.routine-single input')
        await page.type('.routine-single input', ROUTINE.name)
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
        await page.click('.workout input')
        await page.type('.workout input', global.WORKOUT.name)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('create a exercise', async () => {
        await page.click('.exercises-button-create button')
        await page.waitForSelector('.exercise')
        await selectOption(page, '.exercise select', global.LIFT.name)
    }, global.TIMEOUT)

    test('create a set', async () => {
        await page.click('.sets-button-create button')
        await page.waitForSelector('.set')
        await page.click('.set-rmPercentage input')
        await page.type('.set-rmPercentage input', global.SET.rmPercentage)
        await page.waitFor(1000)
        await page.click('.set-reps input')
        await page.type('.set-reps input', global.SET.reps)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('routine is saved on reload', async () => {
        await page.reload()

        await page.waitForSelector('.routine-single')
        await expectSelectorToHaveText(page, '.routine-single', ROUTINE.name)

        await expectSelectorToHaveText(page, '.lift-name', global.LIFT.name)
        await expectSelectorToHaveText(page, '.lift-rm', global.LIFT.rm)

        await expectSelectorToHaveText(page, '.workout', global.WORKOUT.name)

        await expectSelectorToHaveText(page, '.exercise select', global.LIFT.name)

        await expectSelectorToHaveText(page, '.set-rmPercentage', global.SET.rmPercentage)
        await expectSelectorToHaveText(page, '.set-reps', global.SET.reps)
    }, global.TIMEOUT)
})

describe('settings', async () => {

    test('update user settings', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.settings')
        await page.click('.settings-name input')
        await page.type('.settings-name input', 'updated')
        await page.waitFor(1000)
        await page.click('.settings-email input')
        await page.type('.settings-email input', 'updated')
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('user info is saved on reload', async () => {
        await page.reload()

        await expectSelectorToHaveText(page, '.settings-name', global.USER.name + 'updated')
        await expectSelectorToHaveText(page, '.settings-email', global.USER.email + 'updated')
    }, global.TIMEOUT)
})
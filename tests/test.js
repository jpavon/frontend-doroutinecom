import puppeteer from 'puppeteer'

import {
    goTo,
    expectSelectorToContainText,
    expectSelectOptionToBe,
    expectCheckboxToBe,
    selectOption,
    expectElementToBeOfLength
} from './utils'

let page
let browser

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
        slowMo: 0,
    })
    page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 800 })
})

afterAll(() => {
    browser.close()
})

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
        await page.waitForSelector('.profile')
    }, global.TIMEOUT)

    test('user can logout', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.logout')
        await page.click('.logout')
        await page.waitForSelector('.login')
    }, global.TIMEOUT)

    test('user can request forgotten password email', async () => {
        await goTo(page, '/login')
        await page.waitForSelector('.login')
        await page.click('.login-password-forgotten a')
        await page.waitForSelector('.password-forgotten')
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('button[type=submit]')
        await page.waitForSelector('.alert')
        await expectSelectorToContainText(page, '.alert', 'A password reset email has been sent.')
    }, global.TIMEOUT)

    test('user can\'t register with same email', async () => {
        await goTo(page, '/register')
        await page.waitForSelector('.register')
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('button[type=submit]')
        await page.waitForSelector('.alert')
        await expectSelectorToContainText(page, '.alert', 'The email has already been taken. ')
    }, global.TIMEOUT)

    test('user can login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', global.USER.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', global.USER.password)
        await page.click('button[type=submit]')
        await page.waitForSelector('.profile')
    }, global.TIMEOUT)
})

let liftsLength = 10
let routinesLength = 3

describe('default routines and lifts are created', async () => {
    test('check lifts', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('.lifts')
        await expectElementToBeOfLength(page, '.lifts-lift', liftsLength)
    }, global.TIMEOUT)

    test('check routines', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('.routines')
        await expectElementToBeOfLength(page, '.routines-routine', routinesLength)
    }, global.TIMEOUT)
})

describe('lifts creation', async () => {
    test('create a lift', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('.lift-button-create')
        await page.click('.lift-button-create')
        liftsLength++
        await page.waitForSelector('.lift')
    }, global.TIMEOUT)

    test('create multiple lifts', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('.lift-button-create')
        await page.click('.lift-button-create')
        liftsLength++
        await page.waitForSelector('.lift')
        await goTo(page, '/lifts')
        await page.waitForSelector('.lifts-lift')
        await expectElementToBeOfLength(page, '.lifts-lift', liftsLength)
    }, global.TIMEOUT)

    test('update a lift', async () => {
        await page.click('.lift-button-create')
        liftsLength++
        await page.waitForSelector('.lift')
        await page.click('.lift input')
        await page.type('.lift-form input', global.LIFT.name)
        await page.waitFor(1000)
    }, global.TIMEOUT)
})

describe('lift is saved on reload', async () => {
    test('lift is saved', async () => {
        await page.reload()
        await page.waitForSelector('.lift')
        await expectSelectorToContainText(page, '.lift', global.LIFT.name)
    }, global.TIMEOUT)
})

describe('lift deletion', async () => {
    test('lifts can be deleted', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('.lift-button-create')
        await page.click('.lift-button-create')
        liftsLength++
        await page.waitForSelector('.lift')
        page.on('dialog', async (dialog) => {
            await dialog.accept()
        })
        await page.click('.lift-button-remove')
        liftsLength--
        await page.waitForSelector('.lifts')
        await expectElementToBeOfLength(page, '.lifts-lift', liftsLength)
    }, global.TIMEOUT)
})

let exercisesLength = 0
let setsLength = 0

describe('routines creation', async () => {
    test('create a routine', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('.routines')
        await page.click('.routine-button-create')
        routinesLength++
        await page.waitForSelector('.routine')
    }, global.TIMEOUT)

    test('create multiple routines', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('.routines')
        await page.click('.routine-button-create')
        routinesLength++
        await page.waitForSelector('.routine')
        await goTo(page, '/routines')
    }, global.TIMEOUT)

    test('routine creation saved on reload', async () => {
        await page.reload()
        await expectElementToBeOfLength(page, '.routines-routine', routinesLength)
    }, global.TIMEOUT)

    test('update a routine', async () => {
        await page.click('.routine-button-create')
        routinesLength++
        await page.waitForSelector('.routine')
        await page.click('.routine input')
        await page.type('.routine-form input', global.ROUTINE.name)
        await page.waitFor(1000)

        await page.click('.routine textarea[name=notes]')
        await page.type('.routine textarea[name=notes]', global.ROUTINE.notes)
    }, global.TIMEOUT)

    test('create a exercise', async () => {
        await page.click('.exercises-button-create button')
        exercisesLength++
        await page.waitForSelector('.exercise')
        await selectOption(page, '.exercise select', global.LIFT.name)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('create multiple exercises', async () => {
        await page.click('.exercises-button-create button')
        exercisesLength++
        await page.waitFor(1000)
        await expectElementToBeOfLength(page, '.exercise', exercisesLength)
    }, global.TIMEOUT)

    test('create a set', async () => {
        await page.click('.sets-button-create button')
        setsLength++
        await page.waitForSelector('.set')
        await page.click('.set input[name=weight]')
        await page.type('.set input[name=weight]', global.SET.weight)
        await page.waitFor(1000)
        await page.click('.set input[name=reps]')
        await page.type('.set input[name=reps]', global.SET.reps)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('create multiple sets', async () => {
        await page.click('.sets-button-create button')
        setsLength++
        await page.waitFor(1000)
        await expectElementToBeOfLength(page, '.set', setsLength)
    }, global.TIMEOUT)
})

describe('routine is saved on reload', async () => {
    test('routine is saved', async () => {
        await page.reload()

        await page.waitForSelector('.routine')
        await expectSelectorToContainText(page, '.routine', global.ROUTINE.name)
        await expectSelectorToContainText(page, '.routine', global.ROUTINE.notes)
    }, global.TIMEOUT)

    test('exercise is saved', async () => {
        await expectSelectOptionToBe(page, '.exercise select', global.LIFT.name)
    }, global.TIMEOUT)

    test('set is saved', async () => {
        await expectSelectorToContainText(page, '.set', global.SET.weight)
        await expectSelectorToContainText(page, '.set', global.SET.reps)
    }, global.TIMEOUT)
})

describe('routine shows validation errors', async () => {
    test('set weight', async () => {
        await page.click('.set input[name=weight]')
        await page.type('.set input[name=weight]', '.333')
        await page.waitFor(1000)
        await expectSelectorToContainText(page, '.set', 'format is invalid')
    }, global.TIMEOUT)

    test('set reps', async () => {
        await page.click('.set input[name=reps]')
        await page.type('.set input[name=reps]', '.333')
        await page.waitFor(1000)
        await expectSelectorToContainText(page, '.set', 'format is invalid')
    }, global.TIMEOUT)
})

let workoutsLength = 0

describe('create workout from routine', async () => {

    test('create workout with routine content', async () => {
        await page.click('.routine-button-create-workout')
        workoutsLength++
        await page.waitForSelector('.workout')

        await expectSelectorToContainText(page, '.alert', '00:0')
        await expectSelectorToContainText(page, '.workout', global.SET.weight)
        await expectSelectorToContainText(page, '.workout', global.SET.reps)
        await expectSelectOptionToBe(page, '.exercise select', global.LIFT.name)
    }, global.TIMEOUT)

    test('complete a set', async () => {
        await page.click('.set-action label')
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('toggle show remove buttons', async () => {
        await page.click('.sets-header-item--toggle button')
    }, global.TIMEOUT)

    test('remove a set', async () => {
        await page.waitForSelector('.set-action button')
        await page.click('.set-action button')
        setsLength--
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('complete a workout', async () => {
        await page.click('.workout-button-completed')
        await page.waitForSelector('.workout-button-restart')

        await expectSelectorToContainText(page, '.alert', 'Completed')
    }, global.TIMEOUT)

    test('change started date', async () => {
        await page.waitForSelector('[name=startedAt]')
        await page.click('[name=startedAt]')
        await page.waitFor(1000)
        await page.click('.datetime-startedAt [data-value="15"]')
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('change completed date', async () => {
        await page.waitForSelector('[name=completedAt]')
        await page.click('[name=completedAt]')
        await page.waitFor(1000)
        await page.click('.datetime-completedAt [data-value="14"]')
        await page.waitFor(1000)
    }, global.TIMEOUT)
})

describe('workout is saved on reload', async () => {
    test('workout is saved', async () => {
        await page.reload()

        await expectSelectorToContainText(page, '.workout', global.ROUTINE.name)
        await expectSelectorToContainText(page, '.workout', '15/')
        await expectSelectorToContainText(page, '.workout', '14/')
        await expectElementToBeOfLength(page, '.set', setsLength)
    }, global.TIMEOUT)
})

describe('top sets table have items', async () => {
    test('profile', async () => {
        await goTo(page, '/')
        await page.waitForSelector('.profile')
        await expectElementToBeOfLength(page, '.sets-table-item', 1)
    })

    test('lift', async () => {
        await page.click('.sets-table-item')
        await page.waitForSelector('.lift')
        await expectElementToBeOfLength(page, '.sets-table-item', 1)
    })
})

describe('workout deletion', async () => {
    test('workouts can be deleted', async () => {
        await goTo(page, '/workouts')
        await page.waitForSelector('.workouts-workout')
        await page.click('.workouts-workout')
        await page.waitForSelector('.workout')
        await page.click('.workout-button-remove')
        workoutsLength--
        await page.waitForSelector('.workouts')
        await expectElementToBeOfLength(page, '.workouts-workout', workoutsLength)
    }, global.TIMEOUT)
})

describe('routine deletion', async () => {
    test('routines can be deleted', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('.routine-button-create')
        await page.click('.routine-button-create')
        routinesLength++
        await page.waitForSelector('.routine')
        await page.click('.routine-button-remove')
        routinesLength--
        await page.waitForSelector('.routines')
        await expectElementToBeOfLength(page, '.routines-routine', routinesLength)
    }, global.TIMEOUT)
})

describe('settings', async () => {
    test('check defaults', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.settings')

        await expectSelectOptionToBe(page, '[name=weightMeasure]', 'kg')
        await expectSelectOptionToBe(page, '[name=startOfWeek]', 'Monday')
        await expectSelectOptionToBe(page, '[name=dateFormat]', 'DD/MM/YYYY')
    })

    test('update user', async () => {
        await page.click('[name=name]')
        await page.type('[name=name]', 'updated')
        await page.waitFor(1000)

        await page.click('[name=email]')
        await page.type('[name=email]', 'updated')
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('update user option weight', async () => {
        await selectOption(page, '[name=weightMeasure]', global.USER.weightMeasure)
        await page.waitFor(1000)
    }, global.TIMEOUT)

    test('update user option startOfWeek', async () => {
        await selectOption(page, '[name=startOfWeek]', global.USER.startOfWeek)
        await page.waitForNavigation()
        await page.waitForSelector('.settings')
    }, global.TIMEOUT)

    test('update user option dateFormat', async () => {
        await selectOption(page, '[name=dateFormat]', global.USER.dateFormat)
        await page.waitForNavigation()
        await page.waitForSelector('.settings')
    }, global.TIMEOUT)

    test('user info is saved on reload', async () => {
        await expectSelectorToContainText(page, '.settings', global.USER.name + 'updated')
        await expectSelectorToContainText(page, '.settings', global.USER.email + 'updated')
        await expectSelectOptionToBe(page, '[name=weightMeasure]', global.USER.weightMeasure)
        await expectSelectOptionToBe(page, '[name=startOfWeek]', global.USER.startOfWeek)
        await expectSelectOptionToBe(page, '[name=dateFormat]', global.USER.dateFormat)
    }, global.TIMEOUT)
})

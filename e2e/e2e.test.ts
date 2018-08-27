import {
    goTo,
    expectSelectorToContainText,
    expectSelectOptionToBe,
    selectOption,
    expectElementToBeOfLength
} from './utils'

import fixtures from './fixtures'

jest.setTimeout(10000)

describe('auth', async () => {
    test('user can register', async () => {
        await goTo(page, '/register')
        await page.click('input[id=name]')
        await page.type('input[id=name]', fixtures.USER.name)
        await page.click('input[id=email]')
        await page.type('input[id=email]', fixtures.USER.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', fixtures.USER.password)
        await page.click('input[id=passwordConfirmation]')
        await page.type(
            'input[id=passwordConfirmation]',
            fixtures.USER.password
        )
        await page.click('button[type=submit]')
        await page.waitForSelector('[data-e2e=profile]')
    })

    test('user can logout', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('[data-e2e=logout-button]')
        await page.click('[data-e2e=logout-button]')
        await page.waitForSelector('[data-e2e=login]')
    })

    test('user can request forgotten password email', async () => {
        await goTo(page, '/login')
        await page.waitForSelector('[data-e2e=login]')
        await page.click('[data-e2e=login-password-forgotten-button]')
        await page.waitForSelector('[data-e2e=password-forgotten]')
        await page.click('input[id=email]')
        await page.type('input[id=email]', fixtures.USER.email)
        await page.click('button[type=submit]')
        await page.waitForSelector('[data-e2e=alert]')
        await expectSelectorToContainText(
            page,
            '[data-e2e=alert]',
            'A password reset email has been sent.'
        )
    })

    test("user can't register with same email", async () => {
        await goTo(page, '/register')
        await page.waitForSelector('[data-e2e=register]')
        await page.click('input[id=email]')
        await page.type('input[id=email]', fixtures.USER.email)
        await page.click('button[type=submit]')
        await page.waitForSelector('[data-e2e=alert]')
        await expectSelectorToContainText(
            page,
            '[data-e2e=alert]',
            'The email has already been taken. '
        )
    })

    test('user can login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', fixtures.USER.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', fixtures.USER.password)
        await page.click('button[type=submit]')
        await page.waitForSelector('[data-e2e=profile]')
    })
})

describe('start message is displayed', async () => {
    test('has 0/3 message', async () => {
        await goTo(page, '/')
        await expectSelectorToContainText(
            page,
            '[data-e2e=start-message]',
            '0/3'
        )
    })
})

let liftsLength = 0 // 16
let routinesLength = 0 // 3

describe('default routines and lifts are created', async () => {
    test('check lifts', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('[data-e2e=lifts]')
        await expectElementToBeOfLength(
            page,
            '[data-e2e=lift-list-item]',
            liftsLength
        )
    })

    test('check routines', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('[data-e2e=routines]')
        await expectElementToBeOfLength(
            page,
            '[data-e2e=routine-list-item]',
            routinesLength
        )
    })
})

describe('lifts creation', async () => {
    test('create a lift', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('[data-e2e=lift-button-create]')
        await page.click('[data-e2e=lift-button-create]')
        liftsLength++
        await page.waitForSelector('[data-e2e=lift]')
    })

    test('create multiple lifts', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('[data-e2e=lift-button-create]')
        await page.click('[data-e2e=lift-button-create]')
        liftsLength++
        await page.waitForSelector('[data-e2e=lift]')
        await goTo(page, '/lifts')
        await page.waitForSelector('[data-e2e=lift-list-item]')
        await expectElementToBeOfLength(
            page,
            '[data-e2e=lift-list-item]',
            liftsLength
        )
    })

    test('update a lift', async () => {
        await page.click('[data-e2e=lift-button-create]')
        liftsLength++
        await page.waitForSelector('[data-e2e=lift-input-name]')
        await page.click('[data-e2e=lift-input-name]')
        await page.type('[data-e2e=lift-input-name]', fixtures.LIFT.name)
        await page.waitFor(2000)
    })
})

describe('lift is saved', async () => {
    test('lift is saved  on reload', async () => {
        await page.reload()
        await page.waitForSelector('[data-e2e=lift]')
        await expectSelectorToContainText(
            page,
            '[data-e2e=lift]',
            fixtures.LIFT.name
        )
    })
})

describe('lift deletion', async () => {
    test('lifts can be deleted', async () => {
        await goTo(page, '/lifts')
        await page.waitForSelector('[data-e2e=lift-button-create]')
        await page.click('[data-e2e=lift-button-create]')
        liftsLength++
        await page.waitForSelector('[data-e2e=lift]')
        page.on('dialog', async (dialog) => {
            await dialog.accept()
        })
        await page.click('[data-e2e=lift-button-delete]')
        liftsLength--
        await page.waitForSelector('[data-e2e=lifts]')
        await expectElementToBeOfLength(
            page,
            '[data-e2e=lift-list-item]',
            liftsLength
        )
    })
})

let exercisesLength = 0
let setsLength = 0

describe('routines creation', async () => {
    test('create a routine', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('[data-e2e=routines]')
        await page.click('[data-e2e=routine-button-create]')
        routinesLength++
        await page.waitForSelector('[data-e2e=routine]')
    })

    test('create multiple routines', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('[data-e2e=routines]')
        await page.click('[data-e2e=routine-button-create]')
        routinesLength++
        await page.waitForSelector('[data-e2e=routine]')
        await goTo(page, '/routines')
    })

    test('routine creation saved on reload', async () => {
        await page.reload()
        await expectElementToBeOfLength(
            page,
            '[data-e2e=routine-list-item]',
            routinesLength
        )
    })

    test('update a routine', async () => {
        await page.click('[data-e2e=routine-button-create]')
        routinesLength++
        await page.waitForSelector('[data-e2e=routine]')
        await page.click('[data-e2e=routine-input-name]')
        await page.type('[data-e2e=routine-input-name]', fixtures.ROUTINE.name)
        await page.waitFor(2000)

        await page.click('[data-e2e=routine-input-notes]')
        await page.type(
            '[data-e2e=routine-input-notes]',
            fixtures.ROUTINE.notes
        )
    })

    test('create a exercise', async () => {
        await page.click('[data-e2e=exercises-button-create]')
        exercisesLength++
        setsLength++
        await page.waitForSelector('[data-e2e=exercise]')
        await selectOption(
            page,
            '[data-e2e=exercise-lift-select]',
            fixtures.LIFT.name
        )
        await page.waitFor(2000)
    })

    test('create multiple exercises', async () => {
        await page.click('[data-e2e=exercises-button-create]')
        exercisesLength++
        setsLength++
        await page.waitFor(2000)
        await expectElementToBeOfLength(
            page,
            '[data-e2e=exercise]',
            exercisesLength
        )
    })

    test('create a set', async () => {
        await page.click('[data-e2e=sets-button-create]')
        setsLength++
        await page.waitForSelector('[data-e2e=set]')
        await page.click('[data-e2e=set-input-weight]')
        await page.type('[data-e2e=set-input-weight]', fixtures.SET.weight)
        await page.waitFor(2000)
        await page.click('[data-e2e=set-input-reps]')
        await page.type('[data-e2e=set-input-reps]', fixtures.SET.reps)
        await page.waitFor(2000)
    })

    test('create multiple sets', async () => {
        await page.click('[data-e2e=sets-button-create]')
        setsLength++
        await page.waitFor(2000)
        await expectElementToBeOfLength(page, '[data-e2e=set]', setsLength)
    })
})

describe('routine is saved on reload', async () => {
    test('routine is saved', async () => {
        await page.reload()

        await page.waitForSelector('[data-e2e=routine]')
        await expectSelectorToContainText(
            page,
            '[data-e2e=routine]',
            fixtures.ROUTINE.name
        )
        await expectSelectorToContainText(
            page,
            '[data-e2e=routine]',
            fixtures.ROUTINE.notes
        )
    })

    test('exercise is saved', async () => {
        await expectSelectOptionToBe(
            page,
            '[data-e2e=exercise-lift-select]',
            fixtures.LIFT.name
        )
    })

    test('set is saved', async () => {
        await expectSelectorToContainText(
            page,
            '[data-e2e=set]',
            fixtures.SET.weight
        )
        await expectSelectorToContainText(
            page,
            '[data-e2e=set]',
            fixtures.SET.reps
        )
    })
})

describe('routine shows validation errors', async () => {
    test('set weight', async () => {
        await page.click('[data-e2e=set-input-weight]')
        await page.type('[data-e2e=set-input-weight]', '.333')
        await page.waitForSelector(
            '[data-e2e=set-weight] [data-e2e=form-alert]'
        )
        await expectSelectorToContainText(
            page,
            '[data-e2e=set-weight] [data-e2e=form-alert]',
            'format is invalid'
        )
    })

    test('set reps', async () => {
        await page.click('[data-e2e=set-input-reps]')
        await page.type('[data-e2e=set-input-reps]', '.333')
        await page.waitForSelector('[data-e2e=set-reps] [data-e2e=form-alert]')
        await expectSelectorToContainText(
            page,
            '[data-e2e=set-reps] [data-e2e=form-alert]',
            'format is invalid'
        )
    })
})

let workoutsLength = 0

describe('create workout from routine', async () => {
    test('create workout with routine content', async () => {
        await page.click('[data-e2e=routine-button-create-workout]')
        workoutsLength++
        await page.waitForSelector('[data-e2e=workout]')

        await expectSelectorToContainText(
            page,
            '[data-e2e=workout]',
            fixtures.ROUTINE.name
        )
        await expectSelectorToContainText(page, '[data-e2e=alert]', '00:0')
        await expectSelectorToContainText(
            page,
            '[data-e2e=workout]',
            fixtures.SET.weight
        )
        await expectSelectorToContainText(
            page,
            '[data-e2e=workout]',
            fixtures.SET.reps
        )
        await expectSelectOptionToBe(
            page,
            '[data-e2e=exercise-lift-select]',
            fixtures.LIFT.name
        )
    })

    test('complete a set', async () => {
        await page.click('[data-e2e=set-action-checkbox]')
        await page.waitFor(2000)
    })

    test('toggle show remove buttons', async () => {
        await page.click('[data-e2e=set-action-toggle-actions]')
    })

    test('remove a set', async () => {
        await page.waitForSelector('[data-e2e=set-action-remove]')
        await page.click('[data-e2e=set-action-remove]')
        setsLength--
        await page.waitFor(2000)
    })

    test('create and complete another set', async () => {
        await page.click('[data-e2e=set-action-toggle-actions]')
        await page.click('[data-e2e=sets-button-create]')
        setsLength++
        await page.waitFor(300)
        await page.click('[data-e2e=set-action-checkbox]')
    })

    test('complete a workout', async () => {
        await page.click('[data-e2e=workout-button-completed]')
        await page.waitForSelector('[data-e2e=workout-button-restart]')

        await expectSelectorToContainText(page, '[data-e2e=alert]', 'Completed')
    })

    test('change started date', async () => {
        await page.waitForSelector('[name=startedAt]')
        await page.click('[name=startedAt]')
        await page.waitFor(2000)
        await page.click('[data-e2e=datetime-startedAt] [data-value="15"]')
        await page.waitFor(2000)
    })

    test('change completed date', async () => {
        await page.waitForSelector('[name=completedAt]')
        await page.click('[name=completedAt]')
        await page.waitFor(2000)
        await page.click('[data-e2e=datetime-completedAt] [data-value="14"]')
        await page.waitFor(2000)
    })
})

describe('workout is saved on reload', async () => {
    test('workout is saved', async () => {
        await page.reload()

        await expectSelectorToContainText(
            page,
            '[data-e2e=workout]',
            fixtures.ROUTINE.name
        )
        await expectSelectorToContainText(page, '[data-e2e=workout]', '15/')
        await expectSelectorToContainText(page, '[data-e2e=workout]', '14/')
        await expectElementToBeOfLength(page, '[data-e2e=set]', setsLength)
    })
})

describe('top sets table have items', async () => {
    test('profile', async () => {
        await goTo(page, '/')
        await page.waitForSelector('[data-e2e=profile]')
        await expectElementToBeOfLength(page, '[data-e2e=sets-table-item]', 1)
    })

    test('lift', async () => {
        await page.click('[data-e2e=sets-table-item]')
        await page.waitForSelector('[data-e2e=lift]')
        await expectElementToBeOfLength(page, '[data-e2e=sets-table-item]', 1)
    })
})

describe('start message can be completed', async () => {
    test('has 3/3 message', async () => {
        await goTo(page, '/')
        await expectSelectorToContainText(
            page,
            '[data-e2e=start-message]',
            '3/3'
        )
    })

    test('can be hidden', async () => {
        await page.click('[data-e2e=start-message-hide-button]')
        await page.waitFor(100)
        await expectElementToBeOfLength(page, '[data-e2e=start-message]', 0)
    })
})

describe('workout deletion', async () => {
    test('workouts can be deleted', async () => {
        await goTo(page, '/workouts')
        await page.waitForSelector('[data-e2e=workout-list-item]')
        await page.click('[data-e2e=workout-list-item]')
        await page.waitForSelector('[data-e2e=workout]')
        await page.click('[data-e2e=workout-button-delete]')
        workoutsLength--
        await page.waitForSelector('[data-e2e=workouts]')
        await expectElementToBeOfLength(
            page,
            '[data-e2e=workout-list-item]',
            workoutsLength
        )
    })
})

describe('routine deletion', async () => {
    test('routines can be deleted', async () => {
        await goTo(page, '/routines')
        await page.waitForSelector('[data-e2e=routine-button-create]')
        await page.click('[data-e2e=routine-button-create]')
        routinesLength++
        await page.waitForSelector('[data-e2e=routine]')
        await page.click('[data-e2e=routine-button-delete]')
        routinesLength--
        await page.waitForSelector('[data-e2e=routines]')
        await expectElementToBeOfLength(
            page,
            '[data-e2e=routine-list-item]',
            routinesLength
        )
    })
})

describe('settings', async () => {
    test('check defaults', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('[data-e2e=settings]')

        await expectSelectOptionToBe(page, '[name=weightMeasure]', 'kg')
        await expectSelectOptionToBe(page, '[name=startOfWeek]', 'Monday')
        await expectSelectOptionToBe(page, '[name=dateFormat]', 'DD/MM/YYYY')
    })

    test('update user', async () => {
        await page.click('[name=name]')
        await page.type('[name=name]', 'updated')
        await page.waitFor(2000)

        await page.click('[name=email]')
        await page.type('[name=email]', 'updated')
        await page.waitFor(2000)
    })

    test('update user option weight', async () => {
        await selectOption(
            page,
            '[name=weightMeasure]',
            fixtures.USER.weightMeasure
        )
        await page.waitFor(2000)
    })

    test('update user option startOfWeek', async () => {
        await selectOption(
            page,
            '[name=startOfWeek]',
            fixtures.USER.startOfWeek
        )
        await page.waitFor(2000)
    })

    test('update user option dateFormat', async () => {
        await selectOption(page, '[name=dateFormat]', fixtures.USER.dateFormat)
        await page.waitFor(2000)
    })

    test('user info is saved on reload', async () => {
        await expectSelectorToContainText(
            page,
            '[data-e2e=settings]',
            fixtures.USER.name + 'updated'
        )
        await expectSelectorToContainText(
            page,
            '[data-e2e=settings]',
            fixtures.USER.email + 'updated'
        )
        await expectSelectOptionToBe(
            page,
            '[name=weightMeasure]',
            fixtures.USER.weightMeasure
        )
        await expectSelectOptionToBe(
            page,
            '[name=startOfWeek]',
            fixtures.USER.startOfWeek
        )
        await expectSelectOptionToBe(
            page,
            '[name=dateFormat]',
            fixtures.USER.dateFormat
        )
    })
})

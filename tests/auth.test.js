import faker from 'faker'

import { page } from './index.test'
import { expectSelectorToHaveText, goTo } from './utils'

const user = {
    name: 'TEST_USER_' + faker.name.firstName(),
    email: 'TEST_USER_EMAIL_' + faker.internet.email(),
    password: faker.internet.password(),
}

describe('auth', () => {
    test('user can register', async () => {
        await goTo(page, '/register')
        await page.click('input[id=name]')
        await page.type('input[id=name]', user.name)
        await page.click('input[id=email]')
        await page.type('input[id=email]', user.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', user.password)
        await page.click('input[id=passwordConfirmation]')
        await page.type('input[id=passwordConfirmation]', user.password)
        await page.click('input[type=submit]')
        await expectSelectorToHaveText(page, 'h1', 'Routines')
    }, 16000)

    test('user can logout', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.logout')
        await page.click('.logout')
        await expectSelectorToHaveText(page, 'h1', 'Login')
    }, 16000)

    test('user can login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', user.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', user.password)
        await page.click('input[type=submit]')
        await expectSelectorToHaveText(page, 'h1', 'Routines')
    }, 16000)
})

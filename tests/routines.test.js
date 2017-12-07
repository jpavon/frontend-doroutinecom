import faker from 'faker'

import { APP_URL, page } from './index.test'
import { expectSelectorToHaveText, goTo } from './utils'

const routine = {
    name: faker.lorem.words
}

const lift = {
    name: faker.lorem.words,
    rm: faker.random.number
}

describe('routines', () => {
    test('login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', 'test@test.es')
        await page.click('input[id=password]')
        await page.type('input[id=password]', '123123')
        await page.click('input[type=submit]')
        await expectSelectorToHaveText(page, 'h1', 'Routines')
    }, 16000)

    test('create a routine', async () => {
        await page.waitForSelector('button'),
        await page.click('button')
        await expectSelectorToHaveText(page, 'h2', 'Lifts')
    }, 16000)

    test('create a lift', async () => {
        await page.click('.lifts-button-create')
        await page.waitForSelector('.lift-name')
        await page.click('.lift-name input')
        await page.type('.lift-name input', lift.name)
        await page.click('.lift-rm input')
        await page.type('.lift-rm input', lift.rm)
        await page.reload()
        await expectSelectorToHaveText(page, '.lift-name', lift.name)
        await expectSelectorToHaveText(page, '.lift-rm', lift.rm)
    }, 16000)
})

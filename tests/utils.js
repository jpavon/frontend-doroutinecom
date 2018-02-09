import env from '../src/env'

export const goTo = async (page, url) => {
    await page.goto(env.APP_URL + url, { waitUntil: 'load' })
}

export const expectSelectorToContainText = async (page, selector, text) => {
    await page.waitForSelector(selector)
    const selectorText = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.innerHTML
    }, selector)
    expect(selectorText).toContain(text)
}

export const expectSelectOptionToBe = async (page, selector, text) => {
    await page.waitForSelector(selector)
    const selectorText = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.options[el.selectedIndex].text
    }, selector)
    expect(selectorText).toBe(text)
}

export const expectCheckboxToBe = async (page, selector, value) => {
    await page.waitForSelector(selector)
    const selectorValue = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.checked
    }, selector)
    expect(selectorValue).toBe(value)
}

export const selectOption = async (page, selector, text) => {
    await page.waitForSelector(selector)
    await page.evaluate((selector, text) => {
        const select = document.querySelector(selector)

        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].text === text) {
                select.selectedIndex = i
                break
            }
        }

        const event = new Event('change', { bubbles: true })
        event.simulated = true
        select.dispatchEvent(event)
    }, selector, text)
}

export const expectElementToBeOfLength = async (page, selector, length) => {
    if (length !== 0) {
        await page.waitForSelector(selector)
    }
    const selectorLength = await page.evaluate((selector) => {
        return document.querySelectorAll(selector).length
    }, selector)

    expect(selectorLength).toBe(length)
}

// export const typeUpdate = async (page, selector, updatedText) => {
//     await page.evaluate((selector, updatedText) => {
//         const input = document.querySelector(selector)

//         input.value = input.value + updatedText

//         const event = new Event('change', { bubbles: true })
//         event.simulated = true
//         input.dispatchEvent(event)
//     }, selector, updatedText)
// }

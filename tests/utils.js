export const goTo = async (page, url) => {
    await page.goto(APP_URL + url, { waitUntil: 'networkidle0' })
}

export const expectSelectorToHaveText = async (page, selector, text) => {
    await page.waitForSelector(selector)
    const selectorText = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.innerHTML
    }, selector)
    expect(selectorText).toContain(text)
}

export const expectSelectToHaveText = async (page, selector, text) => {
    await page.waitForSelector(selector)
    const selectorText = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.options[el.selectedIndex].text
    }, selector)
    expect(selectorText).toContain(text)
}

export const selectOption = async (page, selector, text) => {
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

export const typeUpdate = async (page, selector, updatedText) => {
    await page.evaluate((selector, updatedText) => {
        const input = document.querySelector(selector)

        input.value = input.value + updatedText

        const event = new Event('change', { bubbles: true })
        event.simulated = true
        input.dispatchEvent(event)
    }, selector, updatedText)
}

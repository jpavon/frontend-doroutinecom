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

        select.dispatchEvent(new Event('change', {
            'bubbles': true
        }))
    }, selector, text)
}

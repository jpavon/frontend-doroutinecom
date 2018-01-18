import moveTo from 'moveto'

const scrollTo = (className, options = {}) => {
    setTimeout(() => {
        const elements = document.getElementsByClassName(className)
        const el = elements[elements.length - 1]

        if (!isElementInViewport(el)) {
            const move = new moveTo(options)
            move.move(el)
        }
    }, 100) // wait for element to mount
}

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

export default scrollTo

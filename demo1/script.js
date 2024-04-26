const title = document.querySelector('.title')
const leftLeaf = document.querySelector('.left-leaf')
const rightLeaf = document.querySelector('.right-leaf')
const bush2 = document.querySelector('.bush2')
const mountain1 = document.querySelector('.mountain1')
const mountain2 = document.querySelector('.mountain2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    leftLeaf.style.marginLeft = -value + 'px'
    rightLeaf.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mountain1.style.marginBottom = -value * 1.1 + 'px'
    mountain2.style.marginBottom = -value * 1.2 + 'px'
})
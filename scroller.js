console.log('hello world')

class Scroller {
    constructor(element) {
        this.element = element;

        this.element.querySelector('.right-button').addEventListener('click', this.goRight.bind(this)) //binding necessary?
        this.element.querySelector('.left-button').addEventListener('click', this.goLeft.bind(this))

        this.chosen = '1'

        this.panelElements = {}
        this.element.querySelectorAll('.panel').forEach(div => this.panelElements[div.dataset.panelId] = div)

        this.spotElements = {}
        this.element.querySelectorAll('.spot').forEach(div => this.spotElements[div.dataset.panelId] = div)
    }

    goRight() {
        const currentNum = Number(this.chosen)
        if (currentNum > Object.keys(this.panelElements).length) {
            this.chosen = '1'
        } else {
            this.chosen = String(currentNum)
        }

        this.updateDOM()
    }

    updateDOM() {
        Object.values(this.panelElements).forEach(div => div.classList.remove('shown'))
        Object.values(this.spotElements).forEach(div => div.classList.remove('shown'))

        this.panelElements[this.chosen].classList.add('shown')
        this.spotElements[this.chosen].classList.add('shown')
    }
}

const scrollers = document.querySelectorAll('div.scroller')
scrollers.forEach(divElement => new Scroller(divElement))
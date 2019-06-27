class PanelsLink {
  constructor(accordionElement) {
    this.accordionElement = accordionElement;
    this.panelData = this.accordionElement.dataset.tense;
    this.itemElement = document.querySelector(`.panel[data-tense='${this.panelData}']`);
    this.panelElement = new PanelItem(this.panelElement);
    this.element.addEventListener('click', () => this.select())
  }

  select() {

  }
}

class PanelItem {
  constructor(accordionElement) {
    // Assign this.element to the passed in element
    this.element = accordionElement;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(element => element.classList.remove('tabs-item-selected'));

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));

class PanelsLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tense;
    this.itemElement = document.querySelector(`.panel[data-tense='${this.panelData}']`);
    this.panelElement = new PanelItem(this.itemElement);
    this.element.addEventListener('click', () => this.select())
  }

  select() {
    const links = document.querySelectorAll('.panel');
    Array.from(links).forEach(element => element.classList.remove('active-panel'));
    this.element.classList.add('active-panel');
    this.panelItem.select();
  }
}

class PanelItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.panel');
    Array.from(items).forEach(element => element.classList.remove('active-panel'));
    this.element.classList.add('active-panel');
  }
}

let panels = document.querySelectorAll('.panel').forEach(panel => new PanelLink(panel));

class PanelLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tense;
    this.itemElement = document.querySelector(`.panel[data-tense='${this.data}']`);
    this.panelItem = new PanelItem(this.itemElement);
    this.element.addEventListener('click', () => this.select())
  }

  select() {
    const links = document.querySelectorAll('.panel-link');
    Array.from(links).forEach(element => element.classList.remove('active-panel-link'));
    this.element.classList.add('active-panel-link');
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

let links = document.querySelectorAll('.panel-link').forEach(link => new PanelLink(link));

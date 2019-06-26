console.log('hello world')

class Tabs {
    constructor(element) {
      this.element = element;
  
      this.tabLinks = {};
      const linkElements = element.querySelectorAll('.tabs-link');
      for (let i = 0; i < linkElements.length; i++) {
        this.tabLinks[linkElements[i].dataset.tab] = new TabLink(linkElements[i], this);
      }
  
      this.tabItems = {};
      const itemElements = element.querySelectorAll('.tabs-item');
      for (let i = 0; i < itemElements.length; i++) {
        this.tabItems[itemElements[i].dataset.tab] = new TabItem(itemElements[i]);
      }
    }
  
    choose(tabID) {
      Object.keys(this.tabLinks).forEach(key => this.tabLinks[key].deselect());
      this.tabLinks[tabID].select();
      Object.keys(this.tabItems).forEach(key => this.tabItems[key].deselect());
      this.tabItems[tabID].select();
    }
  }
  
  class TabLink {
    constructor(element, parent) {
      this.element = element;
      this.data = element.dataset.tab;
      
      this.element.addEventListener('click', () => parent.choose(this.data));
    };
  
    select() {
      this.element.classList.add('tabs-link-selected');
    }
  
    deselect() {
      this.element.classList.remove('tabs-link-selected');
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      this.element.classList.add('tabs-item-selected');
    }
  
    deselect() {
      this.element.classList.remove('tabs-item-selected');
    }
  }
  
  const tabSections = document.querySelectorAll('div.tabs');
  tabSections.forEach(divElement => new Tabs(divElement));
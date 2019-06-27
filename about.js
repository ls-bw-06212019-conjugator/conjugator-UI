

class Feature {
    constructor(domElement) {
      this.domElement = domElement;
      
      this.expandButton = this.domElement.querySelector('.expandButton');
     
      this.expandButton.textContent = "Read More";
      
      
      this.expandButton.addEventListener('click', () => this.expandFeature(this));
    }
      
    
  
    expandFeature() {
      
      this.domElement.classList.toggle('feature-open');
    } 
}

  
  let bottomabout = document.querySelectorAll('.feature');
   
  bottomabout.forEach (feature => new Feature(feature));
  
  
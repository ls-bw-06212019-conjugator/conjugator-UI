

class Feature {
    constructor(domElement) {
      this.domElement = domElement;

      this.expandButton = this.domElement.querySelector('.expandButton');

      this.paragraphtext = this.domElement.querySelector('.paragraphtext');


      this.expandButton.addEventListener('click', () => this.expandFeature());
    } 

    expandFeature() {
      
      this.paragraphtext.classList.toggle('paragraphtext-open');
    console.log('callsuccesful')

    } 

}

  
  let bottomabout = document.querySelectorAll('.feature');
   
  bottomabout.forEach (feature => new Feature(feature));
  
  

class overlay{

    // Constructor
constructor(){
    // Buttons
    const amenitiesBtn = document.querySelector('#amenitiesBtn');
    const picsBtn = document.querySelector('#picsBtn');
    const detailsBtn = document.querySelector('#details');
    const contactBtn = document.querySelector('#contact');
    const closeButton = document.querySelectorAll('.closeOverlay');

    // Overlay
    const amenitiesOverlay = document.querySelector('#amenitiesOverlay');
    const picsOverlay = document.querySelector('#picsOverlay');
    const detailsOverlay = document.querySelector('#detailsOverlay');
    const contactOverlay = document.querySelector('#contactOverlay');
    
    // Initiate Events
    this.events()
    
}

    // Events
events(){
    amenitiesBtn.addEventListener("click", ()=>{
        amenitiesOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })
    document.querySelector('#details').addEventListener("click", ()=>{
        detailsOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })    

    document.querySelector('#picsBtn').addEventListener("click", ()=>{
        picsOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })

    document.querySelector('#contact').addEventListener("click", ()=>{
        contactOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })
     
}

}

export default overlay;
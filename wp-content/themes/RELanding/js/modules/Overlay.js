
class overlay{

    // Constructor
constructor(){
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
        // Buttons
    const amenitiesBtn = document.querySelector('#amenitiesBtn');
    const contactBtn = document.querySelector('#contact');
    const detailsBtn = document.querySelector('#details');
    const picsBtn = document.querySelector('#picsBtn');
    const closeButton = document.querySelector('.closeOverlay');

    // Amenities
    amenitiesBtn.addEventListener("click", ()=>{
        amenitiesOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })
    amenitiesOverlay.querySelector('.closeOverlay').addEventListener("click", ()=> {
        amenitiesOverlay.classList.remove('overlayOn')
        document.querySelector('body').style.overflowY = 'scroll'

    })

    // Details
    detailsBtn.addEventListener("click", ()=>{
        detailsOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })
    detailsOverlay.querySelector('.closeOverlay').addEventListener("click", ()=> {
        detailsOverlay.classList.remove('overlayOn')
        document.querySelector('body').style.overflowY = 'scroll'

    })

    // Pictures
    picsBtn.addEventListener("click", ()=>{
        picsOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })
    picsOverlay.querySelector('.closeOverlay').addEventListener("click", ()=> {
        picsOverlay.classList.remove('overlayOn')
        document.querySelector('body').style.overflowY = 'scroll'

    })

    // Contact
    contactBtn.addEventListener("click", ()=>{
        contactOverlay.classList.add('overlayOn')
        document.querySelector('body').style.overflowY = 'hidden'
    })
    contactOverlay.querySelector('.closeOverlay').addEventListener("click", ()=> {
        contactOverlay.classList.remove('overlayOn')
        document.querySelector('body').style.overflowY = 'scroll'

    })
     
}

}

export default overlay;
import $ from 'jquery'

class overlay{

    // Constructor
constructor(){
    // const amenities = document.querySelector('#amenities');
    this.amenities = $('#amenities');
    // const amenitiesOverlay = document.querySelector('#amenitiesOverlay');
    this.amenitiesOverlay = $('#amenitiesOverlay');
}

    // Events
events(){
    this.amenities.on("click", alert('hi'))
}


    // Methods
    overlayOn(){
        this.amenitiesOverlay.addClass('overlayOn');
        console.log('hi')
    }
}

export default overlay;
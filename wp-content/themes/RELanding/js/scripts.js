import '../css/style.css'

// Modules
import overlay from './modules/Overlay';


// Instantiate a new object using our modules / classes
const Overlay = new overlay();

// Allow JS & CSS to display without page refresh
if(module.hot){
    module.hot.accept()
}

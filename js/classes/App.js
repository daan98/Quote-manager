import { dateInput, hourInput, ownerInput, petInput, phoneInput, symptonInput, form } from '../selectors.js';
import { readData, addAppointment } from '../functions.js';

export default class App{
    constructor(){
        // EXECUTING THE EVENTS LISTENERS
        this.initApp();
    }

    initApp(){
        // EVENT LISTENER
        eventListener();
        function eventListener(){
            petInput.addEventListener('change', readData);
            ownerInput.addEventListener('change', readData)
            phoneInput.addEventListener('change', readData)
            dateInput.addEventListener('change', readData)
            hourInput.addEventListener('change', readData)
            symptonInput.addEventListener('change', readData)
            form.addEventListener('submit', addAppointment)
        }
    }
}

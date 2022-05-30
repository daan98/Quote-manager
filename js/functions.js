import Appointment from './classes/Appointment.js';
import UI from './classes/UI.js';
import { appointsList, dateInput, hourInput, ownerInput, petInput, phoneInput, symptonInput, form } from './selectors.js';

const ui = new UI;
const appointmentClass = new Appointment;
let editing;
const appointmentsObj = {
    pet: '',
    owner: '',
    phone: '',
    date: '',
    hour: '',
    sympton: ''
};

// FUNCTIONS
export function readData(e){
    appointmentsObj[e.target.name] = e.target.value;
}

export function addAppointment(e){
    e.preventDefault();
    const {pet, owner, phone, date, hour, sympton} = appointmentsObj;

    if(pet == "" || owner == "" || phone == "" || date == "" || hour == "" || sympton == ""){
        ui.showMessage('Campo(s) vacio(s), favor de llenarlos todos', 'error');
        return;
    }

    if(editing){
        appointmentClass.editAppointment({...appointmentsObj});
        ui.showMessage('Cita Editada con éxito');
        form.querySelector('button[type="submit"]').textContent = 'agregar cita';
        editing = false;
    }else{
        appointmentsObj.id = Date.now();
        appointmentClass.saveAppointment({...appointmentsObj}); // PASSING A COPY OF THE OBJECT DUE IT IS GLOBAL
        ui.showMessage('Cita agregada correctamente');
    }

    ui.showAppointment(appointmentClass);

    form.reset();
}

export function deleteAppointment(id){
    appointmentClass.deleteAppointment(id);
    ui.showAppointment(appointmentClass);
}

export function editAppointment(appointment){
    const {pet, owner, phone, date, hour, sympton, id} = appointment;

    //SETTING VALUES ON INPUTS
    petInput.value = pet;
    ownerInput.value = owner;
    phoneInput.value = phone;
    dateInput.value = date;
    hourInput.value = hour;
    symptonInput.value = sympton;

    // RESETTING OBJECT PROPERTIES
    appointmentsObj.pet = pet;
    appointmentsObj.owner = owner;
    appointmentsObj.phone = phone;
    appointmentsObj.date = date;
    appointmentsObj.hour = hour;
    appointmentsObj.sympton = sympton;
    appointmentsObj.id = id;

    form.querySelector('button[type="submit"]').textContent = "editar cita";
    editing = true;
}

export function cleanHTML(){
    while(appointsList.firstChild){
        appointsList.firstChild.remove();
    }
}
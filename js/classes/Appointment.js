export default class Appointment{
    constructor(){
        this.appointments = []
    }

    saveAppointment(appointment){
        this.appointments = [...this.appointments, appointment];
    }

    deleteAppointment(id){
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
    }

    editAppointment(updatedAppointment){
        this.appointments = this.appointments.map(appointment => appointment.id === updatedAppointment.id ? updatedAppointment : appointment);
    }
}
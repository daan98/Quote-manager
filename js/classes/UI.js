import { cleanHTML, deleteAppointment, editAppointment } from '../functions.js';
import { appointsList } from '../selectors.js';
export default class UI{
    showMessage(message, type){
        const messageDiv = document.createElement('p');
        messageDiv.classList.add('d-bloc<k', 'text-center', 'alert', 'col-12', 'font-weight-bold')
        messageDiv.textContent = message;
        document.getElementById('contenido').insertBefore(messageDiv, document.querySelector('.agregar-cita'));

        if(type == "error"){
            messageDiv.classList.add('alert-danger');
        } else{
            messageDiv.classList.add('alert-success');
        }
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    showAppointment({appointments}){ // IT'S POSSIBLE TO APPLY DESTRUCTURING TO THE PARAMETER
        cleanHTML();
        appointments.forEach(appointment => {
            const {pet, owner, phone, date, hour, sympton, id} = appointment;
            const liAppointment = document.createElement('li');
            
            liAppointment.dataset.id = id;
            liAppointment.style.listStyle = 'none';
            liAppointment.classList.add('p-3', 'cita');0
            liAppointment.innerHTML = `<h2 class="font-weight-bolder card-title">${pet}</h2>
                                    <span class="font-weight-bolder">Nombre propietario: </span> ${owner}<br>
                                    <span class="font-weight-bolder">Teléfono: </span> ${phone}<br>
                                    <span class="font-weight-bolder">Fecha: </span> ${date}<br>
                                    <span class="font-weight-bolder">Hora de la cita: </span> ${hour}<br>
                                    <span class="font-weight-bolder">Sintomas: </span> ${sympton}<br>`;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'mr-2');
            deleteBtn.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            deleteBtn.onclick = () => deleteAppointment(id);

            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'btn-info');
            editBtn.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            editBtn.onclick = () => editAppointment(appointment);

            liAppointment.appendChild(deleteBtn);
            liAppointment.appendChild(editBtn);
            appointsList.appendChild(liAppointment);
        });  
    }
}
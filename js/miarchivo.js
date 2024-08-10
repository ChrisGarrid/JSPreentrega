class Reservation {
    constructor(clientName, numOfGuests, time) {
        this.clientName = clientName;
        this.numOfGuests = numOfGuests;
        this.time = time;
    }

    // Método para mostrar la información de la reserva
    showInfo() {
        return `Cliente: ${this.clientName}, Número de invitados: ${this.numOfGuests}, Hora: ${this.time}`;
    }
}

// Clase que manejará la lista de reservas y operaciones
class ReservationManager {
    constructor() {
        this.reservations = [];
    }

    // Operación de agregar nueva reserva
    addReservation(reservation) {
        this.reservations.push(reservation);
        alert(`Reserva para ${reservation.clientName} ha sido agregada.`);
    }

    // Método de operación para mostrar la lista de reservas
    showReservations() {
        if (this.reservations.length === 0) {
            alert("No hay reservas en la lista de hoy");
        } else {
            let reservationList = "Lista de Reservas:\n";
            this.reservations.forEach((reservation, index) => {
                reservationList += `${index + 1}. ${reservation.showInfo()}\n`;
            });
            alert(reservationList);
        }
    }

    // Método de operación para buscar una reserva por nombre de cliente
    findReservation(clientName) {
        const reservation = this.reservations.find(reservation => reservation.clientName.toLowerCase() === clientName.toLowerCase());
        if (reservation) {
            alert(`Reserva encontrada:\n${reservation.showInfo()}`);
        } else {
            alert(`No se encontró ninguna reserva para el cliente ${clientName}.`);
        }
    }

    // Método de operación para cancelar una reserva
    cancelReservation(clientName) {
        const index = this.reservations.findIndex(reservation => reservation.clientName.toLowerCase() === clientName.toLowerCase());
        if (index !== -1) {
            const removedReservation = this.reservations.splice(index, 1)[0];
            alert(`Reserva para ${removedReservation.clientName} ha sido cancelada.`);
        } else {
            alert(`No se encontró ninguna reserva para el cliente ${clientName}.`);
        }
    }
}

// Creación del menú de acciones con prompt y alert
const manager = new ReservationManager();
let option;
do {
    option = prompt("Seleccione una opción:\n1. Hacer Reserva\n2. Mostrar Reservas\n3. Buscar Reserva\n4. Cancelar Reserva\n5. Salir.");
    switch (option) {
        case '1':
            const clientName = prompt("Ingrese el nombre del cliente:");
            const numOfGuests = prompt("Ingrese el número de invitados:");
            const time = prompt("Ingrese la hora de la reserva:");
            const newReservation = new Reservation(clientName, numOfGuests, time);
            manager.addReservation(newReservation);
            break;
        case '2':
            manager.showReservations();
            break;
        case '3':
            const searchName = prompt("Ingrese el nombre del cliente para buscar la reserva:");
            manager.findReservation(searchName);
            break;
        case '4':
            const deleteName = prompt("Ingrese el nombre del cliente para cancelar la reserva:");
            manager.cancelReservation(deleteName);
            break;
        case '5':
            alert("Saliendo...");
            break;
        default:
            alert("Opción no válida. Por favor, intente de nuevo.");
    }
} while (option !== '5');

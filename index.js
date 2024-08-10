class Reservation {
    constructor(clientName, numOfGuest, time){
    this.clientName = clientName;
    this.numOfGuests = numOfGuests,
    this.time = time,
    }
    //Método para mostrar la información de la reserva //
    showInfo() {
        return `Cliente: ${this.clientName},Número de invitados: ${this.numbOfGuests},Hora: ${this.time}`;
    }
    }

    // Ahora la clase que manejará la lista de reservas y operaciones (3 inicialmente), agregar, mostrar y eliminar reservas//
    class ReservationManager{
        constructor() {
            this.Reservations = [];
        }
    //Operacion de Agregar nueva reserva//
    addReservation(Reservation) {
        this.Reservations.push(Reservation);
        alert(`Reserva para $reservation.clientName} Ha sido agregada.`);
    }
    // Metodo de operacion para mostrar la lista de reservas
    showReservations(){
        if(this.Reservations.length === 0) {
            alert("No hay reservas en la lista de hoy");
        }else{
            ley reservationList = "lista de Reserva :\n",
            this.Reservations.forEach((reservation, index)) => {
                reservationList += `${index + 1}. ${reservation.showInfo()}\n`;
            });
            alert(reservationList);
        }
    }

    //Metodo de operación para buscar una reserva por nombre de cliente (se podria mejorar añadiendo otros fitros de busqueda)//
    FindReservation(clientName){
        const reservation = this.Reservations.find(reservation => reservation.clientName.toLowerCase() === clientName.toLowerCase());
        if(reservation){
            alert(`Reserva encontrada: \n${reservation.showInfo()}`);
        }else {
            alert(`No se encontró ninguna reserva para el cliente ${clientName}.`)
        }
    }
    //Metodo de operación para cancelar una reserva//
cancelReservation(clientName){
    const index = this.Reservations.findIndex(reservation => reservation.clientName.toLowerCase() === clientName.toLowerCase());
    if (index !== -1){
        const removedReservation = this.Reservations.splice(index,1)[0];
        alert(`Reserva para ${removedReservation.clientName} a sido cancelada`);
    }else{
        alert(`No se encontró ninguna reserva para el cliente ${clientName}.`);
    }
    }


    // Creacion de menu de acciones con los prompt y alert//
    const manager = new ReservationManager();
    let option;
    do{
        option = prompt("Seleccione una opcion: \n1. Hacer Reserva\n2. Mostrar Reservas\n3 Buscar Reserva\n4. Cancelar Reserva\n5. Salir.");
    switch(option) {
        case '1':
            const clientName = prompt("Ingrese el nombre del clinete");
            const numbOfGuests = prompt("Ingrese el numero de invitados:");
            const time = prompt("Ingrese la hora de la reserva:");
            const newReservation = new Reservation(clientName, numbOfGuests,time);
            manager.addReservation(newReservation);
            break;
        case '2':
            manager.showReservations();
            break;
        case '3' :
            const searchName = prompt("Ingrese el nombre del cliente para buscar la reserva");
            manager.findReservation(searchName);
            break;
        case '4' :
        const deleteName = prompt("Ingrese el nombre del cliente para cancelar la reserva");
        manager.cancelReservation(deleteName);
        break;
        case '5' :
            alert("Saliendo...");
        break;
        default:
            alert("opcion no válida. Por favor, intente denuevo");
    }
    while(option !'5');
    }
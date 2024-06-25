document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('ticket_button');

    const km_price = 0.21;

    button.addEventListener('click', () => {

        // Inserisco i dati da prompt
        let age = prompt("Quanti anni hai?");
        let distance = prompt("Quanti km vuoi fare?");

        // Calcolo il costo del biglietto
        let ticket_price = age * km_price;

        // Calcolo il costo del biglietto scontato
        if (age < 18) {
            ticket_price *= 0.8;
        }
        else if (age > 65) {
            ticket_price *= 0.6;
        }

        // Stampo a schermo il costo del biglietto
        document.getElementById('ticket_display').innerText = ticket_price.toFixed(2) + ' EURO';
    });
});
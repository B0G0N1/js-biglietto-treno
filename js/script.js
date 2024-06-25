// Aspetta che il documento sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Costante per il prezzo al km
    const km_price = 0.21;

    // Chiede all'utente l'età e la distanza
    let age = prompt("Quanti anni hai?");
    let distance = prompt("Quanti km vuoi fare?");

    // Converte l'età in numero (potrebbe essere una stringa dal prompt)
    age = parseInt(age);
    // Converte la distanza in numero
    distance = parseFloat(distance);

    // Calcola il prezzo del biglietto
    let ticket_price = distance * km_price;

    // Applica lo sconto in base all'età
    if (age < 18) {
        ticket_price *= 0.8; // Sconto del 20% per i minori di 18 anni
    } else if (age > 65) {
        ticket_price *= 0.6; // Sconto del 40% per i maggiori di 65 anni
    }

    // Mostra il prezzo del biglietto formattato
    document.getElementById('ticket_display').innerText = ticket_price.toFixed(2) + ' EURO';
});
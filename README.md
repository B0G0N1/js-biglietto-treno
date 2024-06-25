Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Ricordatevi di fare il file README.md in cui scomponete il problema in sotto problemi
Numero minimo di push: 6
Buon pranzo a dopo.



<!-------------------
    PSEUDOCODICE 
-------------------->

All'avvio della pagina:
    Inizializza le variabili 
    let 'age'
    let 'distance' 
    let 'ticket_price'
    cost 'km_price'

Quando viene premuto il pulsante con ID "gen_ticket":

Richiedi all'utente di inserire il numero di chilometri che vuole percorrere tramite un prompt
    > salva il risultato nella variabile 'distance'
Richiedi all'utente di inserire l'età del passeggero tramite un prompt
    > salva il risultato nella variabile 'age'

Calcola il prezzo del biglietto senza sconto:
    > distance x km_price
    > salva questa combinazione nella variabile 'ticket_price'

Applica lo sconto in base all'età del passeggero:
    Sconto del 20% per i minorenni
    > SE age < 18
        > ('ticket_price' / 100) * 80
    Sconto del 40% per gli over 65
    > SE age > 65
        > ('ticket_price' / 100) * 60

Trasforma in forma umana il prezzo del ticket

Mostra la password all'utente tramite un messaggio a schermo:
    > stampa il valore di 'ticket_price'
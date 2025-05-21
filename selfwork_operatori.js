
// scelta di un numero da utente 

 let numero1 = parseInt( prompt(`scegli un numero`))

console.log (numero1);
let numero2 = parseInt( prompt(`scegli un secondo numero`))

console.log (numero2);
// operazioni da eseguire

//somma
let somma = numero1 + numero2;
console.log (`la somma dei due numeri è ${somma}`);

//moltiplicazione
let moltiplicazione = numero1 * numero2;
console.log (`la moltiplicazione dei due numeri è ${moltiplicazione}`);

//sottrazione
let sottrazione = numero1 - numero2;
console.log (`la sottrazione dei due numeri è ${sottrazione}`);

//divisione
let divisione = numero1 / numero2;
console.log (`la somma dei due numeri è ${divisione}`);

//potenza
let potenza = numero1 ** numero2;
console.log (`la somma dei due numeri è ${potenza}`);


console.log(`la somma dei due numeri è ${somma} e la moltiplicazione è ${moltiplicazione} e la sottrazione è ${sottrazione} e la divisione è ${divisione} e la potenza è ${potenza}`);


// selwork operatori 4

let numero_gatti_totali = 50;
console.log(`il numero totale di gatti è ${numero_gatti_totali}`);

let numero_gatti_in_fila = 8;
console.log(`il numero di gatti in fila è ${numero_gatti_in_fila}`);


let numero_di_file = Math.floor(numero_gatti_totali / numero_gatti_in_fila);
console.log (`il numero di file è ${numero_di_file}`);

let numero_di_gatti_mancanti = numero_gatti_totali % numero_gatti_in_fila;
console.log(`il numero di gatti mancanti per completatre la fila è ${numero_di_gatti_mancanti}`);

let numero_gatti_mancati_nel_ultima_fila = numero_gatti_in_fila - numero_di_gatti_mancanti;
console.log(`il numero di gatti mancanti per completare l'ultima fila e ${numero_gatti_mancati_nel_ultima_fila}`);

console.log(`il numero totale di gatti è ${numero_gatti_totali} e il numero di gatti in fila è ${numero_gatti_in_fila} e il numero di file è ${numero_di_file} e il numero di gatti mancanti per completare la fila è ${numero_gatti_mancati_nel_ultima_fila} e il numero di gatti mancanti per completare l'ultima fila è ${numero_gatti_mancati_nel_ultima_fila}`);








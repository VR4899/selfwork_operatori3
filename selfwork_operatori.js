
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

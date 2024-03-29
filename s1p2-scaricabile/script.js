/*
REGOLE
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  I principali datatype che abbiamo in javascript sono gli seguenti : 
     - Number : Number e un datatype che ti permette di inserire dentro una scattola dei numeri, senza racchiuderli con gli appici tipo : ( 2 - sono un numero ) 
     - String : Ti permette di inserire in una scattola all'interno del tuo pc un insieme di carratteri racchiusi tra gli appici tipo : ("Sono una stringa")
     - Boolean : ti conferma che cio che si trova nella scattola sia vera o falsa, cioe ti fa il confronto tra due nomi e vede se sono uguali, tipo Alessio e uguale ad Alessio,
                 di conseguenza il nostro boolean sara vero.
     - Array : un insieme di dati salvati nella stessa scattola
     - Oggetto : e una scatola dove ci sono delle chiavi che hanno delle proprieta di vario tipo, come per esempio stringa, numero o boolean. */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto e uno spazio della memoria del computer alla qualle viene assegnato delle proprieta che hanno una chiave e un valore. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* Risposta esercizio 3 */

let a = 12;
let b = 20;
let risultato = a + b;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* Risposta esercizio 4 */

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* Risposta esercizio 5 */

let name = "Costa";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* Risposta esercizio 6 */

let risultato2 = a - 4;
console.log(risultato)
console.log(risultato2)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* Risposta esercizio 7  */

let name1 = "john";
let name2 = "John";
let controlName = name1 === name2;
console.log(controlName)
console.log(controlName = name2.toLowerCase()===name1.toLowerCase())
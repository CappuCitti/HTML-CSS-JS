# Variabili & costanti
In JavaScript esistono tre metodi per creare una variabile: `var`, `let` e `const`. Ognuna di questi metodi ha regole e ha caratteristiche diverse.<br>
Le variabili possono essere utilizzate per memorizzare dati in un programma, come stringhe, numeri, oggetti JSON o valori booleani.

### Sintassi di una variabile
```js
var school = "IIS Galvani";
```
* `var` è usato per dichiarare la variabile
* `school` è il nome della variabile
* `=` dice al programma che deve assegnare un valore alla variabile (questo è chiamato un operatore di assegnazione)
* `IIS Galvani` è il valore che la variabile memorizzerà

### Esempio di un programma JavaScript che utilizza una variabile
```js
// Variabile
var school = "IIS Galvani";

// Output
console.log("Scuola: " + school)
```

Output:
```shell
Scuola: IIS Galvani
```

### Dati di una variabile
**Una variabile può memorizzare qualsiasi tipo di dati.**
```js
// Array di oggetti
var students = [ { name: "Hannah", age: 12 }, { name: "Alex", age: 13 } ];

// Stringa
var name = "Alexander Smith";

// Intero
var grade = 82;

// Booleano
var passed = true;
```

### Tipi di variabile
*Una **variabile** è un contenitore di dati situato in una porzione di memoria destinata a contenere valori, suscettibili di modifica nel corso dell'esecuzione di un programma. Una variabile è caratterizzata da un nome.*<br>
*Una **costante** è un dato non modificabile situato in una porzione di memoria destinata a contenere un valore.*

Esistono tre diverse parole chiave utilizzate per dichiarare una variabile in JavaScript, ognuna di esse ha un diverso utilizzo.
Parola chiave | Scopo | Riassegnabile | Ridichiarabile
--: | :-- | :-: | :-: 
`var` | Funzione | :heavy_check_mark: | :heavy_check_mark:
`const` | Blocco di codice | :x: | :x:
`let` | Blocco di codice | :heavy_check_mark: | :x:

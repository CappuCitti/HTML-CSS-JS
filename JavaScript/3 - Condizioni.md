# Dichiarazioni condizionali
**Le istruzioni condizionali vengono utilizzate per eseguire azioni diverse in base a condizioni diverse.**

* ### `if`
L'istruzione `if` viene utilizzata per controllare se una condizione è vera.
```js
// Sintassi

if (condizione) {
  // Istruzioni che vengono eseguite se la condizione è vera
}
```

* ### `else`
L'istruzione `else` esegue il codice al suo interno in caso la condizione risulti falsa
```js
// Sintassi

if (condizione) {
  // Istruzioni che vengono eseguite se la condizione è vera
} else {
  // Istruzioni che vengono eseguite se la condizione è falsa
}
```

* ### `else if`
L'istruzione `else if` esegue un ulteriore controllo in caso la condizione precedente sia falsa
```js
// Sintassi

if (condizione) {
  // Istruzioni che vengono eseguite se la condizione è vera
} else if (condizione) {
  // Istruzioni che vengono eseguite se la condizione precedente è falsa
} else {
  // Istruzioni che vengono eseguite se ambe le condizoni sono false
}
```

# Lo `switch`
L'istruzione `switch` viene utilizzata quando ci sono tante condizioni da controllare. L'espressione viene valutata una volta ed in seguito viene confrontata con i valori di ogni caso, quando un caso combacia all'espressione viene eseguito il blocco di codice associato, se non esiste caso corrispondente viene seguito il blocco di codice predefinito.
```js
// Sintassi

switch(espressione) {
  case x:
    // Blocco di codice corrispondente al caso "x"
    break;
  case y:
    // Blocco di codice corrispondente al caso "y"
    break;
  default:
    // Codice di default
}
```

### Esempio
Nel seguente esempio viene utilizzato `Date()`, uno [Standard built-in object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) di JavaScript, per ottenere informazioni correnti su ora e data.<br>
Il metodo `getDay()` restituisce il numero corrispondende al giorno della settimana, da 0 (Domenica) a 6 (Sabato).<br>
Di seguito viene controllato il giorno della settimana associato al numero corrispondente restituito da `getDay()` ed associato alla variabile `day`.
```js
const now = new Date();
let day;

switch (now.getDay()) {
  case 0:
    day = "Domenica";
    break;
  case 1:
    day = "Lunedì";
    break;
  case 2:
     day = "Martedì";
    break;
  case 3:
    day = "Mercoledì";
    break;
  case 4:
    day = "Giovedì";
    break;
  case 5:
    day = "venerdì";
    break;
  case 6:
    day = "Sabato";
}

console.log("Oggi è " + day);

```

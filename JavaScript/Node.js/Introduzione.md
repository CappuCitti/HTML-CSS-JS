# Node.js
![Node.js](http://www.allafinedelpalo.it/wp-content/uploads/2016/06/1436439824nodejs-logo.png)

**Node.js è un runtime system open source multipiattaforma orientato agli eventi per l'esecuzione di codice JavaScript**, costruita sul motore JavaScript V8 di Google Chrome. Molti dei suoi moduli base sono scritti in JavaScript, e gli sviluppatori possono scrivere nuovi moduli in JavaScript.

## Moduli base di Node.js
Node.js fornisce, come altri linguaggi di programmazione, [librerie](https://www.w3schools.com/nodejs/ref_modules.asp) gia' scritte, come [`fs`](#fs) e [`path`](#path).

### `path`
Il modulo [`path`](https://nodejs.org/docs/latest/api/path.html) permette di lavorare con i percorsi reali della macchina sulla quale è avviata l’applicazione. Ha a disposizione metodi per navigare tra le cartelle e per montare path complessi a partire da più stringhe.

### `fs`
Il modulo [`fs`](https://nodejs.org/docs/latest/api/fs.html), insieme col precedente, di lavorare a stretto contatto con il filesystem della macchina, eseguendo tutte le operazioni tipiche di questo ambito come ad esempio la copia, la rinominazione, la cancellazione, la lettura e la scrittura di file e cartelle.

```js
// Importa fs
const fs = require('fs');

// Apre il file "Hello.txt" (se esiste) con la flag "read"
fs.open('./Data/Hello.txt', 'r', function (err, f) {
  if (err) {
    return console.error(err);
  } else {
    console.log(f);
  }
});

/* Output
Hello, World!
*/
```

## Librerie NPM
[NPM](https://www.npmjs.com/) rappresenta un repository di librerie scritte apposta per poter essere utilizzate con Node.js. Oltre al semplice repository web, NPM presenta anche un comando per scaricare, ricercare ed aggiornare i pacchetti software da includere nelle nostre applicazioni.

Nella seguente linea di comando sara' richiesta l'installazione della libreria `colors`, utile per utilizzare i colori nella console.
```shell
npm install colors
```

E' possibile installare piu' librerie contemporanemanete semplicemente aggiungendole alla fine della linea di comando.
```bat
npm i express mongoose
```
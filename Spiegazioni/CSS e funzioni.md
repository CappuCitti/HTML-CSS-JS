# Cascading Style Sheets
I fogli di stile a cascata (CSS) vengono utilizzati per formattare il layout di una pagina web.<br>
Il CSS si può controllare il colore, il carattere, la dimensione del testo, la spaziatura tra gli elementi, il modo in cui gli elementi sono posizionati e disposti, quali immagini di sfondo o colori di sfondo devono essere utilizzati, diverse visualizzazioni per diversi dispositivi e dimensioni dello schermo e molto altro ancora!

### Implementare il CSS nella pagina HTML
I CSS possono essere aggiunti ai documenti HTML in 3 modi:
* **Inline** - usando l'attributo style all'interno degli elementi HTML
* **Interno** - utilizzando un elemento `<style>` nella sezione `<head>`
* **Esterno** - utilizzando un elemento `<link>` per collegarsi a un file CSS esterno

```html
<!DOCTYPE html>
<html lang="it">

<head>
  <title>Uso del CSS</title>

  <!-- CSS Esterno -->
  <link rel="stylesheet" href="./style.css">

  <!-- CSS Interno -->
  <style>
    p {
      font-weight: bold;
    }
  </style>
</head>

<body>
  <!-- CSS Inline -->
  <h1 style="color: #ffd000;">Titolo</h1>
</body>

</html>
```

### Elementi, classi CSS e ID
Quando si confronta la classe CSS con l'ID, la differenza è che la classe CSS applica uno stile a più elementi. Un ID applica uno stile a un elemento univoco.

```html
<!DOCTYPE html>
<html lang="it">

<head>
  <title>CSS</title>

  <style>
    /* Attribuzione dello stile a due tag */
    h2, h3 {
      padding-left: 20px;
    }

    /* Definizione di una classe */
    .orangeBackground {
      background-color: orange;
    }

    /* Definizione di un ID */
    #brown {
      color: brown;
    }
  </style>
</head>

<body>
  <!-- Richiamo della classe -->
  <h1 class="orangeBackground">Titolo</h1>
  <p class="orangeBackground">Lorem ipsum dolor sit amet.</p>

  <!-- Richiamo di un ID -->
  <div id="brown">
    <h2>Intersezione</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  </div>
</body>

</html>
```

# JavaScript
Javascript viene utilizzato per modificare il contenuto delle pagine HTML, eseguire operazioni ed inviare richieste al server.

### Implementare JavaScript nella pagina HTML
E' possobile implementare scripts JavaScrpt utilizzando tag `<script>` all'interno della tag `<head>`, come collegamento esterno o direttamente scrivendo codice al suo interno:
```html
<head>
  <title>Funzioni</title>

  <!-- Collegamento esterno -->
  <script src="./index.js"></script>

  <!-- Script interno -->
  <script>
    function getNothing() {
      return "nothing";
    }
  </script>
</head>
```

### Sintassi di una funzione
**Una funzione JavaScript è un blocco di codice progettato per eseguire un'attività particolare.**<br>
Una funzione JavaScript viene eseguita quando "qualcosa" la invoca.
<br>
\- Una funzione JavaScript è definita con la parola chiave function, seguita da un nome, seguito da parentesi *()*.<br>
\- I nomi delle funzioni possono contenere lettere, cifre, trattini bassi e simboli del dollaro (stesse regole delle variabili).<br>
\- Le parentesi possono includere i nomi dei parametri separati da virgole: *(parametro1, parametro2, ...)*.<br>
\- Il codice da eseguire, dalla funzione, è posto tra parentesi graffe: *{}*.<br>

Gli argomenti della funzione sono i valori ricevuti dalla funzione quando viene richiamata.<br>
**All'interno della funzione, gli argomenti (i parametri) si comportano come variabili locali.**
```js
function randomNum(x) {
  return Math.floor(Math.random() * x) + 1;
}
```

### Richiamre una funzione
Le funzioni di JavaScript vengono spesso chiamate tramite bottoni all'interno della pagina HTML, passando il nome della funzione come valore del parametro `onCLick`.
```html
<button onclick="time()">Get time</button>
```
<br>
Esempio:

```html
<!DOCTYPE html>
<html lang="it">

<head>
  <title>Time</title>

  <script>
    function time() {
      const now = new Date();
      document.getElementById('res').innerHTML = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
    }
  </script>
</head>

<body>
  <button onclick="time()">Get time</button>
  <p id="res"></p>
</body>

</html>
```






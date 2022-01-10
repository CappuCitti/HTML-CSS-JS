# Le funzioni
**Una funzione JavaScript è un blocco di codice progettato per eseguire un'attività particolare.**<br>
Una funzione JavaScript viene eseguita quando viene invocata.
<br>

* Una funzione JavaScript è definita con la parola chiave function, seguita da un nome, seguito da parentesi *()* e *{}*.<br>
*  I nomi delle funzioni possono contenere lettere, cifre, trattini bassi ed il simbolo del dollaro (stesse regole delle variabili).<br>
*  Le parentesi possono includere i nomi dei parametri separati da virgole: *(parametro1, parametro2, ...)*.<br>
*  Il codice da eseguire, dalla funzione, è posto tra parentesi graffe: *{}*.<br>

Gli argomenti della funzione sono i valori ricevuti quando essa viene richiamata.<br>
**All'interno della funzione, gli argomenti (parametri) si comportano come variabili locali.**
```js
function randomNum(x) {
  return Math.floor(Math.random() * x) + 1;
}
```

### Richiamre una funzione
Le funzioni di JavaScript vengono spesso chiamate tramite bottoni all'interno della pagina HTML, passando il nome della funzione come valore del parametro `onclick`.
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
      document.getElementById('res').innerHTML = now.toLocaleDateString() + "-" + now.toLocaleTimeString();
    }
  </script>
</head>

<body>
  <button onclick="time()">Get time</button>
  <p id="res"></p>
</body>

</html>
```

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

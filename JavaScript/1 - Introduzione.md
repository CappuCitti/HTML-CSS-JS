# JavaScript
Javascript viene utilizzato per modificare il contenuto delle pagine HTML, eseguire operazioni ed inviare richieste al server.

### Implementare JavaScript nella pagina HTML
E' possibile implementare scripts JavaScrpt utilizzando tag `<script>` dopo la tag `<body>`, come collegamento esterno o direttamente scrivendo codice al suo interno:
```html
<head>
  <title>Funzioni</title>
</head>

<body>
  <!-- Collegamento esterno -->
  <script src="./index.js"></script>

  <!-- Script interno -->
  <script>
    function getNothing() {
      // Questo è un commento
      return "nothing";
    }
  </script>
</body>
```

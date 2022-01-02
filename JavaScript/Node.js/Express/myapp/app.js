// Importa express
const express = require('express');
const app = express();
// La porta su cui il sito sara' in ascolto
const port = 3000;

// Crea le indicazioni per la route "/"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Avvia il sito
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
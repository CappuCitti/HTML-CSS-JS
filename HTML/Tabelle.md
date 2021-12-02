# Tabelle HTML
Le tabelle HTML consentono agli sviluppatori web di organizzare i dati in righe e colonne.

Il tag `<table>` definisce una tabella HTML.<br>
Una tabella HTML è costituita da un elemento `<table>` e uno o più elementi `<tr>`, `<th>` e `<td>`.<br>
L'elemento `<tr>` definisce una riga di tabella, l'elemento `<th>` definisce un'intestazione di tabella e l'elemento `<td>` definisce una cella di tabella.

## Attributi di `<table>`
Attributo | Valore | Descrizione | Esempio
--- | --- | --- | ---
`border` | px | Specifica la larghezza del bordo. | `border="1"`

## Attributi di `<td>` e `<th>`
Attributo | Valore | Descrizione | Esempio
--- | --- | --- | ---
`colspan` | celle | Per fare in modo che una cella si estenda su più colonne | `colspan="2"`
`rowspan` | celle | Per fare in modo che una cella si estenda su più righe | `rowspan="3"`

## Esempio di tabella
```html
<table border="1" style="width:30%;">
  <tr>
    <th colspan="3">2022</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th colspan="2" rowspan="2">Festa</th>
    <td></td>
  </tr>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```
<table border="1">
  <tr>
    <th colspan="3">2022</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th colspan="2" rowspan="2">Festa</th>
    <td></td>
  </tr>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

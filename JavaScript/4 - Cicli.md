# I cicli
**I cicli possono eseguire un blocco di codice più volte.**

I loop sono utili, se si desidera eseguire lo stesso codice più e più volte, ogni volta con un valore diverso. Spesso vengono utilizzati quando si lavora con gli _array_.

## Tipi di loop
* `for` scorre un blocco di codice un certo numero di volte.
* `for/in` scorre le proprietà di un oggetto.
* `for/of` scorre i valori di un oggetto iterabile.
* `while` scorre un blocco di codice mentre una condizione specificata è vera.
* `do/while` scorre anche un blocco di codice mentre una condizione specificata è vera.

* ### Ciclo `for`
```js
// Sintassi

for (variabile; condizione; azione) {
  // Blocco di codice da eseguire
}
```

Nel seguente esempio viene stanziata e dichiarata la variabile `i` con il valore di `0`, una volta entrati nel _ciclo for_ essa aumenterà ogni volta di 1 (`i++`) finchè non risulti falsa (`i < 11`). Ogni volta che il blocco di codice verrà eseguito emetterà in console il risultato delle operazioni in successione della tabellina del 3 (`"3 * " + i + " = " + i*3`).
```js
for (let i = 0; i < 11; i++) {
  console.log("3 * " + i + " = " + i*3);
}

/* Output
3 * 0 = 0
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30
*/
```


* ### Ciclo `For In`
Il ciclo `For In` viene utilizzato per scorrere le proprietà di un oggetto.
```js
// Sintassi

for (let key in object) {
  // Blocco di codice da eseguire
}
```

Nel seguente esempio viene dato l'oggetto `person`, il _ciclo For In_ verrà eseguito un numero di volte pari agli elementi contenuti al suo interno, e per ognuno di essi prenderà la sua chiave.
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  job: "Software Engineer"
}

for (let k in person) {
  console.log(k + ":" + person[k]);
}

/* Output
firstName: John
lastname: Doe
age: 27
job: Software Engineer
*/
```

* ### Il metodo `forEach()`
Il metodo `Array.forEach()` viene utilizzato per eseguire una funzione per ogni elemento.<br>
🔗 [Sintassi completa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?retiredLocale=it#syntax)
```js
// Sintassi

Array.forEach(e => {
  // Blocco di codice da eseguire
})
```

* ### Ciclo `For Of`
Il ciclo `For Of` viene utilizzato per far scorrere i valori di un array, di una stringa, di una mappa ed altro.
```js
// Sintassi

for (let val of oggettoItinerabile) {
  // Blocco di codice da eseguire
}
```

Nel seguente esempio viene dato l'array `people`, il _ciclo For Of_ verrà eseguito un numero di volte pari agli elementi contenuti al suo interno, e per ogni posizione prenderà il suo valore.
```js
const people = ['Adams', 'Baker', 'Clark', 'Davis', 'Evans']

for (let name of people) {
  console.log(name);
}

/* Output
Adams
Baker
Clark
Davis
Evans
*/
```

In questo altro esempio viene data la stringa `str`, e con il _ciclo For Of_ viene fatto scorrere ogni carattere.
```js
const str = "Hello, world!"

for (let c of str) {
  console.log(c);
}

/* Output
H
e
l
l
o
,
 
w
o
r
l
d
!
*/
```

* ### Ciclo `While`
Il _ciclo While_ esegue un blocco di codice fin quando una la condizione di controllo è vera.
```js
// Sintassi

while (condizione) {
  // Blocco di codice da eseguire
}
```
* ### Ciclo `Do/While`
Il *ciclo Do/While* esegue una volta il blocco di codice al suo interno, dopo di che lo eseguira' soltanto in caso la condizione risulti vera.
 ```js
// Sintassi

do {
  // Blocco di codice da eseguire
} while (condizione);
```

# Tipi di liste
### Liste non ordinate
Le liste non ordinate o liste puntate iniziano con il tag `<ul>`. Ogni elemento dell'elenco inizia con il tag `<li>`.<br>
Per impostazione predefinita, gli elementi dell'elenco verranno contrassegnati con punti elenco (cerchietti neri).
```html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Ut enim ad minim veniam</li>
</ul>
```

### Elenchi numerati
Un elenco ordinato inizia con il tag `<ol>`. Ogni elemento dell'elenco inizia con il tag `<li>`.<br>
Gli elementi dell'elenco saranno contrassegnati da numeri per impostazione predefinita.<br><br>
Tipi di elenchi numerati:
Simbolo | Tipo di elenco
--- | ---
1 | *Predefinito* \| Gli elementi dell'elenco sono numerati con numeri.
I | Le voci dell'elenco sono numerate con numeri romani maiuscoli.
i | Le voci dell'elenco sono numerate con numeri romani minuscoli.
A | Le voci dell'elenco sono numerate con lettere maiuscole.
a | Le voci dell'elenco sono numerate con lettere minuscole.

Il tag `<ol>` ha due attributi utili:
* `start` si utilizza per specificare da dove iniziare gli elementi dell'elenco.
* `reversed` numera l'elenco in ordine decrescente
Le liste ordina

```html
<ol type="I" start="5" reversed>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Ut enim ad minim veniam</li>
</ol>
```

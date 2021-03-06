# Link di collegamento
Il tag `<a>` definisce un collegamento ipertestuale, utilizzato per collegare una pagina all'altra.<br>
L'attributo più importante dell'elemento `<a>` è l'attributo **href**, che indica la destinazione del collegamento.<br>
Per impostazione predefinita, i collegamenti verranno visualizzati come segue in tutti i browser:<br>
* Un collegamento non visitato è sottolineato e blu
* Un collegamento visitato è sottolineato e viola
* Un collegamento attivo è sottolineato e rosso

### Principali attributi del tag `<a>`
Attributo | Valore | Descrizione | Esempio
---  | --- | --- | ---
`href` | URL | Specifica l'URL della pagina a cui va il collegamento | `href="https://github.com/CappuCitti"`
`target` | `_blank` / `_parent` / `_self` / `_top` | Specifica dove aprire il documento collegato | `target="_blank"`
`title` | Text | Il titolo del collegamento. Viene visualizzato come un suggerimento. | `title="Il mio GitHub"`

#### Valori dell'attributo `target`

Valore | Descrizione
--- | ---
`_blank` | Apre il link in una nuova finestra o scheda
`_self`	| Apre il documento collegato nella stessa finestra in cui è stato cliccato (impostazione predefinita)
`_parent`	| Apre il documento collegato nel frame *genitore*
`_top` | Apre il documento collegato in tutto il corpo della finestra

Esempio:
```html
<p>Da <a href="https://github.com/CappuCitti" title="Il mio GitHub" target="_blank">questo link</a> verrà aperta un'altra scheda con la mia homepage di GitHub!
```
**Risultato**: Da <a href="https://github.com/CappuCitti" title="Il mio GitHub" target="_blank">questo link</a> verrà aperta un'altra scheda con la mia homepage di GitHub!
<br><br>
  
### Altri utilizzi di `href`
#### Collegamenti ad indirizzi email:
```html
<a href="mailto:someone@example.com">Invia e-mail</a>
```
**Risultato**: <a href="mailto:someone@example.com">Invia e-mail</a>
  
#### Collegamenti a numeri di telefono:
```html
<a href="tel:+391112223333">Chiama subito!</a>
```
**Risultato**: <a href="tel:+391112223333">Chiama subito!</a>
  
#### Collegamenti ad altre sezioni della pagina:
```html
<a href="#link-di-collegamento">Vai alla sezione link di collegamento</a>
```
**Risultato**: <a href="#link-di-collegamento">Vai alla sezione link di collegamento</a>
  
#### Collegamenti a funzioni JavaScrip:
```html
<a href="javascript:alert('Hello World!');">Esegue un <i>alert</i></a>
```
**Risultato**: <a href="javascript:alert('Hello World!');">Esegue un <i>alert</i></a>

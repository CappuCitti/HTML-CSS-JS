# Formattazione del testo
L'HTML contiene diversi elementi per definire il testo con un significato speciale.

Tag | Descrizione | Esempio
:-: | --- | ---
`<b>` | Testo in grassetto | <b>Lorem ipsum</b>
`<strong>` | Testo importante (grassetto) | <strong>Lorem ipsum</strong>
`<i>` | Testo in corsivo  | <i>Lorem ipsum</i>
`<em>` | Testo enfatizzato (corsivo) | <em>Lorem ipsum</em>
`<u>` | Testo sottolineato | Non supportato su GitHub
`<mark>` | Testo evidenziato | Non supportato su GitHub
`<small>` | Testo più piccolo | Non supportato su GitHub
`<del>` | Testo sbarrato | <del>Lorem ipsum</del>
`<sub>` | Testo in pedice | Lorem <sub>ipsum dolor</sub>
`<sup>` | Testo in apice | Lorem <sup>ipsum dolor</sup>

### Andare a capo
Il tag HTML `<br>` produce un'interruzione di riga nel testo (carriage-ritorno). È utile per scrivere una poesia o un indirizzo, dove la divisione dei versi è significativa.<br>
**Questo tag non necessita di un tag di chiusura!**


## Il tag `<address>`
Il tag `<address>` definisce le informazioni di contatto per l'autore/proprietario di un documento o di un articolo.<br>
Le informazioni di contatto possono essere un indirizzo e-mail, un URL, un indirizzo fisico, un numero di telefono, un social media, ecc.
Il testo nell'elemento `<address>` di solito viene visualizzato in corsivo e i browser aggiungeranno sempre un'interruzione di riga prima e dopo l'elemento `<address>`.

## Il tag `<time>`
IL tag `<time>` rappresenta un periodo di tempo specifico. Può includere l'attributo datetime per tradurre le date in un formato leggibile dalla macchina, consentendo migliori risultati del motore di ricerca o funzionalità personalizzate come i promemoria.


Attributo | Valore | Descrizione | Esempio
--- | --- | --- | ---
`datetime` | time* | Per indicare l'ora e/o la data dell'elemento e deve essere in uno dei formati descritti di seguito. | `datetime="2021-11-05 20:00"`

\*:link: [Formati data validi](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time?retiredLocale=it#valid_datetime_values)

Esempio:
```html
<p>Il film sarà proiettato il giorno <time datetime="2021-12-20 18:00">20 dicembre 2021 alle 18:00</time></p> 
```

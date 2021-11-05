# Introduzione a HTML
L'HTML (HyperText Markup Language) è l'elemento costitutivo più elementare del Web. Definisce il significato e la struttura dei contenuti web. Altre tecnologie oltre all'HTML sono generalmente utilizzate per descrivere l'aspetto/la presentazione ([CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)) o la funzionalità/comportamento (JavaScript) di una pagina web.

## I *\<tag\>*
Sono etichette per marcare una stringa di testo o una porzione della pagina.<br>
I nomi delle tag sono contenuti nelle parentesi angolari (*\<* e *\>*), **ogni volta che un tag viene aperto per la maggior parte delle volte deve essere chiuso**.<br>
Esempio: `<tag> </tag>`

## Tag principali
Tag | Descrizione
--- | ---
`<html> </html>` | Tag radice
`<head> </head>` | Intestazione della pagina
`<body> </body>` | Corpo della pagina

## Attributi
Gli attributi estengono le informazioni relative ad un determinato tag ed il suo significato.<br>
Per esempio l'attributo `lang` dellat tag `<html>` andrà a dichiarare la lingua predefinita del testo nella pagina.<br>
Esempio: `<html lang="it">`

NB: **Gli attributi possono essere specificati solo all'interno dei tag di inizio e non devono mai essere utilizzati nei tag di fine.**

## Tag comuni
Alcuni tag HTML comunemente usati sono elencati di seguito

### Intestazione
Esisto 6 livelli di intestazioni del titolo, essi vanno da 1 (più grande) a 6 (più piccolo).
```html
<h1>Titolo<h1>
```

### Paragrafo
```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan eleifend sapien, et venenatis neque.</p>
```

### *Line Break*
Il tag `<br>` produce un'interruzione di riga nel testo (ritorno a capo). È utile per scrivere una poesia o un indirizzo, dove la divisione dei versi è significativa.<br>
(Non necessita di tag di chiusura)

### Linea orizzontale
Il tag `<hr>` andrà a creare un linea orizzontale nella pagina.<br>
(Non necessita di tag di chiusura)

### Immagine in linea
Il tag `<img>` viene utilizzato per incorporare un'immagine in una pagina HTML.<br>
Le immagini non sono tecnicamente inserite in una pagina web; le immagini sono collegate a pagine web. Il tag `<img>` crea uno spazio di contenimento per l'immagine di riferimento.

## Intestazione base di una pagina HTML
```html
<!DOCTYPE html> <!-- Specifica il linguaggio della pagina -->
<html lang="it">
<head>
  <title>Titolo della pagina</title>
</head>
<body>
  
</body>
</html>
```

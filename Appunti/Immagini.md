# Le immagini
Il tag HTML `<img>` viene utilizzato per incorporare un'immagine in una pagina web.<br>
Le immagini non sono tecnicamente inserite in una pagina web; le immagini sono collegate a pagine web. Il tag `<img>` crea uno spazio di contenimento per l'immagine di riferimento.<br>
Il tag `<img>` è vuoto, contiene solo attributi e __non ha un tag di chiusura__.

### Principali attributi del tag `<img>`
Attributo | Obbligatorio | Valore | Descrizione | Esempio
---  | :-: | --- | --- | ---
`src` | :heavy_check_mark:| ImgPathOrLink | Specifica il percorso dell'immagine | `src="https://avatars.githubusercontent.com/u/90761268"`
`alt` | :heavy_check_mark: | String | Specifica un testo alternativo per l'immagine | `alt="Avatar of my GitHub's account"`
`draggable` |  | Boolean | Indica se l'elemento può essere trascinato | `draggable="false"`
`height` | | Integer (px) | Specifica l'altezza di un'immagine |
`width` | | Integer (px) | Specifica la larghezza di un'immagine |

### Collegamenti ipertestuali
Per usare l'immagine come collegamento in HTML, si usa il tag `<img>` così come il tag `<a>` con l'attributo `href`.<br>
Il tag `<img>` serve per utilizzare un'immagine in una pagina web e il tag `<a>` serve per aggiungere un collegamento. Sotto l'attributo tag immagine src, aggiungi l'URL dell'immagine.
```html
<a href="https://github.com/CappuCitti" target="_blank" title="Home del mio GitHub">
  <img src="https://avatars.githubusercontent.com/u/90761268" alt="Avatar of my GitHub's account" height="100" width="100">
</a>
```
**Risultato**:<br>
<a href="https://github.com/CappuCitti" target="_blank" title="Home del mio GitHub">
  <img src="https://avatars.githubusercontent.com/u/90761268" alt="Avatar of my GitHub's account" height="100" width="100">
</a>

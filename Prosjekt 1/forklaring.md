Krav til siden

1) I websiden skal det benyttes CSS for å stile elementene og vi forventer at det er lagt ned litt arbeid i å lage en visuelt tiltalende side.
2) I websiden skal du bruke CSS Flexbox layout for å posisjonere elementene (CSS Flexible Box Layout Module, sjekk på web hva det er).
3) Bruk Javascript for gjøre noen ett eller flere elementer på siden interaktiv (hva dette skal være og hvor avansert du vil gjøre det er helt opp til deg).
4) Siden skal ha et favicon (sjekk på web hva dette er) 
5) Siden skal være gyldig HTML (kunne valideres av W3C markup validator) og være testet for forskjellige weblesere
6) CSS og Javascript skal være i egne filer
7) Lag lettlest dokumentasjon hvor du forklarer kort hvor/hvordan du har løst kravene over


Dokumentasjon:

1) CSS for å style elementer - åpenbart her, overkill med bruk av farger, animasjoner o.l.
2) Flexbox brukes i navbar ("doge"-hodet øverst til høyre er siste elementet i navbar flexboksen med float: right og margin-left: auto) og i selve innholdet på siden, satt om som "columns".
3) Javascript brukes flittig for å sjekke bl.a. hash i url for å linke til undersider, samt for å justere på css-verdier med logikk. Kan sees ved å bytte mellom "Home" og "Info".
4) Favicon (doge)
5) Ingen varsler eller feilmeldinger i html checker.
6) CSS er samlet i /styles, med en hoved-fil, style.css, som importerer alle andre. Dette for å unngå å måtte importere en haug med filer i .html-fila.


1) CSS for å style elementer - åpenbart her, overkill med bruk av farger, animasjoner o.l.
2) Flexbox brukes i navbar ("doge"-hodet øverst til høyre er siste elementet i navbar flexboksen med float: right og margin-left: auto) og i selve innholdet på siden, satt om som "columns".
3) Javascript brukes flittig for å sjekke bl.a. hash i url for å linke til undersider, samt for å justere på css-verdier med logikk. Kan sees ved å bytte mellom "Home" og "Info".
4) Favicon (doge)
5) Ingen varsler eller feilmeldinger i html checker.
6) CSS er samlet i /styles, med en hoved-fil, style.css, som importerer alle andre. Dette for å unngå å måtte importere en haug med filer i .html-fila.


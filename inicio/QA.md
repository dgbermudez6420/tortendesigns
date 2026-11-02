# Prüfung der deutschen Landingpage

Stand: 2. November 2026.

- Sechs deutsche Orientierungskarten unmittelbar vor der Galerie erhalten.
- Desktop und responsive Breiten 360/390 Pixel geprüft; keine überlaufenden Karten.
- 32 Bilder vorhanden, 24 Galerieseiten, keine doppelten IDs oder fehlenden lokalen Verweise.
- Impultienda-Skript genau einmal eingebunden. Hauptpreis wird dynamisch ersetzt, ohne doppeltes Währungssymbol oder veraltetes Preis-ARIA-Label.
- Kauf-Link im Browser geöffnet: beide optionalen Zusatzangebote im Checkout sichtbar und nicht ausgewählt. Keine Zusatzangebotskarten auf der Landingpage; kein bumps=0, keine vorausgewählten Produkte.
- Test-UTMs source, medium und campaign bleiben im Kauf-Link erhalten, auch nach Zustimmung und Laden beider UTMify-Skripte.
- Im Teststandort meldete die Plattform US$ 27.89. Eine tatsächliche EUR-Auslieferung für einen Käufer in Deutschland wurde nicht simuliert.
- UTMify: vor neuer Zustimmung 0 Skripte, nach Ablehnen 0, nach Akzeptieren 2; wiederholtes Akzeptieren erzeugt keine Duplikate; Widerruf mit Neuladen führt zu 0. Funktionale Impultienda-Integration bleibt bei Ablehnung verfügbar.
- Originalpixel 6ad940bb506346904dbb45fd mit pixel/pixel.js und utms/latest.js, letzteres mit data-utmify-prevent-subids. Beide async/defer.
- Kein Kauf abgeschlossen, keine personenbezogenen Kundendaten eingegeben.

## Noch abzustimmen

- Der Eigentümer hat 15 Tage bestätigt und den Checkout angepasst. Frischer Browser-Reload bestätigt nun ebenfalls 15 Tage Garantie.
- Checkout zeigte am Teststandort Englisch. Kein sichtbarer Sprachschalter oder dokumentierter Sprachparameter im geprüften Embed-Skript gefunden.
- Die Site bleibt nur für den Eigentümer zugänglich. Datenschutz und Anbieterangaben vor öffentlicher Vermarktung prüfen.

## Textanpassung vom 02.11.2026
- Screenshotbezogene Erklärung unter dem Kaufbutton durch „Angebot nur für kurze Zeit“ ersetzt; darunterliegende Paket-Zusammenfassung entfernt.
- Oberste Leiste zeigt ebenfalls „Angebot nur für kurze Zeit“. Keine zusätzlichen Timer, Fristen oder Bestandsangaben.
- Desktop und 390-Pixel-Rahmen visuell geprüft; keine horizontale Überbreite. Checkout, dynamischer Preis und alle Skripte unverändert.

## Dynamischer Vergleichspreis
- data-main-original-price oberhalb des Kaufpreises ergänzt, durchgestrichen und ohne Behauptung eines früheren Verkaufspreises.
- Frischer Plattformkatalog und Browser zeigen am Teststandort US$ 69.99 über US$ 27.89; beide Werte stammen aus derselben Währungsformatierung.
- Kein festes 59,99-€-Fallback, keine eigene Währungsumrechnung, kein neuer Prozent- oder Sparbetrag. Leerer Vergleichspreis bleibt bis zur Plattformantwort verborgen.
- Desktop und 390-Pixel-Rahmen visuell geprüft, keine horizontale Überbreite.

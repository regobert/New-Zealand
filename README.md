🇳🇿 NZ Zuidereiland ’26–’27 — Alpiene Dagtochten & Vaste Bases
Een mobiele Progressive Web App (PWA) voor onze 27-daagse rondreis over het Zuidereiland van Nieuw-Zeeland (22 december 2026 – 17 januari 2027). De volledige applicatie bestaat uit één zelfstandig HTML-bestand (`index.html`), werkt offline in de bergen (Fiordland, Aoraki / Mount Cook, Arthur's Pass) en synchroniseert live tussen alle 3 de reisgenoten.
---
✨ Belangrijkste Functies
📅 Interactief Dagschema (27 Dagen):
Volledig overzicht met alpiene dagtochten, hoogtemeters, netto rijtijden en 6 vaste bases.
Snel schakelen & uitwijken: Pas ter plekke de overnachting aan (DOC Camping, Holiday Park of Hotel / Cabin) of activeer met één tik het slecht-weer alternatief.
Directe navigatie: Open elk startpunt, hotel of camping rechtstreeks in Google Maps.
🎫 Boekingen & Automatische Gmail / Google Drive Koppeling:
Bevat alle bevestigde gegevens voor de China Southern Airlines vluchten (`Go261106304953400055`), GO Rentals Toyota RAV4 AWD (`738216766`), The Bealey Quarter in Christchurch (`5995014854`) en Ellena Court Motel in Blenheim (`6557531399`).
Auto-scan: Na een eenmalige Google-koppeling scant de app automatisch op nieuwe bevestigingsmails in Gmail en reisdocumenten in Google Drive.
AI + Offline Importer: Plak tekst uit een bevestigingsmail of upload een PDF-voucher om deze direct te herkennen en aan de juiste reisdagen te koppelen.
🗺️ Ingebouwde Overzichtskaart (OpenStreetMap & OSRM):
Interactieve kaart met schakelbaar bergreliëf (`OpenTopoMap`), etappe-filters en offline coördinaten-fallback.
🎒 Gezamenlijke Paklijst & Alpiene Veiligheid:
Af te vinken per reiziger (3 kolommen), aangevuld met noodnummers (`111`), MetService bergweer, NZ Biosecurity-tips en veiligheidsfiches voor de 5 alpiene toptochten.
👥 Groepssync & Reis-Kasboekje (NZD / EUR):
Registreer gezamenlijke uitgaven in NZD met automatische omrekening naar EUR en onderlinge verrekening voor 3 reizigers via een gedeelde groepscode (`NZ2026`).
---
🚀 Online zetten met GitHub Pages (1x instellen)
Maak een nieuwe repository aan op GitHub (bijv. `nz-zuidereiland`).
Upload het app-bestand en noem het `index.html` (samen met deze `README.md`).
Ga in je repository naar Settings → Pages.
Kies bij Source voor Deploy from a branch, selecteer de `main` branch (map `/ (root)`) en klik op Save.
Na ca. 30 seconden is de app live bereikbaar op:
```text
   https://<jouw-gebruikersnaam>.github.io/<repository-naam>/
   ```
---
📱 Installeren op Mobiel (Android & iPhone)
Zodra de GitHub Pages-link live staat, kunnen alle 3 de reisgenoten hem als volwaardige app op hun telefoon zetten:
Android (Chrome):
Open de GitHub Pages-link in Chrome.
Tik rechtsboven op het menu (⋮) → App installeren (of Toevoegen aan startscherm).
iPhone (Safari):
Open de GitHub Pages-link in Safari.
Tik onderin op het Deel-icoon (□↑) → Zet op beginscherm.
Samenwerken koppelen:
Open het tabblad Groep & € en controleer dat bij alle drie dezelfde groepscode (`NZ2026`) staat ingesteld.
---
🔗 Gmail & Google Drive Koppeling Activeren (Optioneel)
Voor automatisch scannen van je Gmail en het koppelen van Google Drive-bestanden vanaf jouw eigen GitHub-adres:
Ga naar de Google Cloud Console en maak een project aan.
Schakel onder APIs & Services → Library de Gmail API en Google Drive API in.
Ga naar Credentials → Create Credentials → OAuth client ID (type: Web application).
Voeg bij Authorized JavaScript origins jouw GitHub Pages-domein toe:
```text
   https://<jouw-gebruikersnaam>.github.io
   ```
Open de app op je telefoon → ga naar Boekingen → tik op ⚙️ Instellen, plak je Client ID en tik op 🔗 Verbind Google (Auto-Scan).
---
🛠️ Later Aanpassen
Gegevens wijzigen in de app (zonder code): Alle dagplanningen, overnachtingen, boekingen, paklijst-items en uitgaven kunnen direct op de telefoon worden aangepast. Gebruik onder Groep & € de knop ⬇️ Exporteer JSON Back-up om op elk gewenst moment een lokale reservekopie te bewaren.
Code of functies bijwerken op GitHub: Open `index.html` op GitHub, klik op het potlood-icoon (Edit) of vervang het bestand door een nieuwe versie en klik op Commit changes. Jullie ingevulde gegevens op de telefoon blijven bij een code-update gewoon behouden.

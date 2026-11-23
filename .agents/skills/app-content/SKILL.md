---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Explainer "Messen: Längen, Flächen, Volumen" (Strang `mathematik/groessen-und-messen`), Auftrag lernapps/apps#398, Regeln des Epics lernapps/apps#402 (`docs/mathe-epic/regeln.md`). Der Plan `.vibe/plans/01-mathe-messen.md` hält die Entscheidungen im Einzelnen.

## Curriculum

Hessen (Annahme der Regeln), Stufen 5-6 und 7-8, Gymnasium. Orientierung ist allein die Lernlandkarte Mathematik (`https://lernapps.net/apps/map/mathematik.json`); die Reihenfolge ergibt sich aus `requires`. KMK-Bildungsstandards und Kerncurriculum wurden nicht geöffnet und werden nicht zitiert.

## Competencies

Alle aus dem Strang `groessen-und-messen`; Satz „Ich kann …“ steht in der Karte und wird nicht umformuliert.

- Kapitel `groessen` (5-6): `groessenvorstellungen-schaetzen` (Seite `schaetzen`), `messen-laenge-masse-geld-zeit` (`messen`), `umrechnung-groessen` (`umrechnen`).
- Kapitel `flaechen-koerper` (5-6): Recap `voraussetzungen` (`recap: mathematik/grundfiguren-eben`, `mathematik/grundkoerper-quader-wuerfel`, enthält die Komponente `Kurztest`), `einheiten-flaeche-volumen` (`einheiten`), `flaeche-umfang-quadrat-rechteck` (`rechteck`), `zusammengesetzte-figuren` (`zusammengesetzt`), `volumen-oberflaeche-quader-wuerfel` (`quader`).
- Kapitel `zerlegen` (7-8): Recap `voraussetzungen` (`recap: mathematik/vierecke-grundfiguren`, `mathematik/grundkoerper-prisma-zylinder`, `Kurztest`), `flaeche-umfang-dreieck-viereck` (`dreieck-viereck`), `volumen-oberflaeche-prisma` (`prisma`).

Je Baustein mindestens drei Aufgaben, Ids `<seite>-<nr>` oder sprechend (`schaetzen-tuer`); die Liste „Baustein → Seite“ steht im Plan. Alle neun Seiten und beide Recap-Seiten sind gebaut; jede Seite hat 4 bis 6 Aufgaben (Ids siehe die Seitendateien).

## Content structure

Abschnitt-Ids: `einstieg` (Ziel in einem Satz, leichte erste Aufgabe), `idee` (Erklärung mit Bild; auf `dreieck-viereck` zusätzlich `dreieck` und `vierecke`), `beispiel` (`example`-Kasten), `uebung`; das `Merke` ist ein `note`-Kasten in `idee`. Die letzte Seite jedes Kapitels (`umrechnen`, `quader`, `prisma`) endet mit `rueckblick` („Das kannst du jetzt“). Titel sagen, was der Abschnitt auf der Seite tut. Höchstens 350 Wörter Text, ein Bild oder eine Aufgabe in den ersten vier Blöcken. Recap-Seiten (`recap:`, Dateiname `voraussetzungen.yaml` in `flaechen-koerper` und `zerlegen`; es gibt keine Kurztest-Seiten): Kopf „Das brauchst du für dieses Kapitel“, je Baustein ein Abschnitt (Überschrift = Name des Bausteins in der Wortwahl der Karte), Fachbegriffe fett mit Beispiel, Komponente `Kurztest`, Checkliste „Du bist bereit, wenn du …“, Hinweis mit Kartenseite `https://lernapps.net/apps/map/mathematik/c/<id>/`.

## Terminology

Wörter der Karte (Namen der Bausteine). Darstellungen heißen überall gleich: Einheitsquadrat, Einheitswürfel, Einheitentreppe, Rechteckmodell, Stützpunkt. Schreibweisen nach Regeln Abschnitt 2: Dezimalkomma, `·` und `:`, `−` (U+2212), Zahl + geschütztes Leerzeichen + Einheit, ab fünf Stellen Dreiergruppen mit schmalem geschütztem Leerzeichen, Brüche gesetzt. Anrede „du“, kurze Sätze, kein „man“ in Arbeitsaufträgen, keine Marken, erfundene gemischte Namen. Glossar (`definition`): Messen, Einheit, Stützpunkt, Einheitentreppe, Flächeninhalt, Umfang, Volumen, Oberfläche, Grundfläche, Höhe, Fläche, Seite, Kante, Quader, Würfel, Prisma, Netz, Parallelogramm, Raute, Trapez, Drachen.

## Exercise patterns

Neun Muster; Fehlertypen stehen in jedem `generated` unter `mistakes` mit Hinweis.

1. `schaetzen-pruefen` (schaetzen): `generated`, Antwort mit Toleranz; Fehler „Zehnerpotenz daneben“; dazu `ordering`, `single-choice` „Welche Einheit passt?“.
2. `messen-sachaufgabe` (messen): `generated` mit Einheit; Fehler Zeit dezimal gerechnet, Einheiten gemischt.
3. `treppe-umrechnen` (umrechnen): `generated` mit `compare.number.unit`; Fehler Richtung, Zeit mit 10; `matching`.
4. `auslegen-zaehlen` (einheiten, rechteck): Bild von Einheitsquadraten → `number` → `generated`; Fehler Fläche/Umfang verwechselt, m statt m².
5. `zerlegen-rechnen` (zusammengesetzt): Bild mit Zerlegung → `generated`; Fehler gemeinsame Kante doppelt.
6. `stapeln-netz` (quader): Schichtenbild → `generated` V und O; Fehler Flächenpaar vergessen, cm² statt cm³.
7. `zerschneiden-ergaenzen` (dreieck-viereck): Komponente `schere`, danach `generated`; Fehler schräge Seite statt Höhe, Halbieren vergessen.
8. `prisma-stapel` (prisma): `generated` G · h und O = 2 G + M; Fehler Dreieckshöhe statt Prismenhöhe.
9. `recap-kurztest` (Recap-Seiten): Komponente `Kurztest` (`src/components/Kurztest.*`, aus den gemeinsamen Dateien des Epics kopiert; Props `question`, `options`, `right`, `wrong`, `nojs`), 2 Kurztests je Baustein, sofortige Rückmeldung, danach der Satz mit der Kartenseite.

Komponente `Schere` (`src/components/Schere.*`, nur auf `dreieck-viereck`): Props `base`, `height`, `shift` (Maße des Parallelogramms), Beschriftungen der drei Knöpfe und drei Statustexte; Logik und Test in `Schere.ts` und `Schere.test.ts` (Fläche bleibt in jedem Schritt gleich). Kein Übungsbaustein, sie zeigt die Idee; die Aufgaben darunter sind `generated`.

Muster 2 und 3 wurden um Aufgaben zu Fläche und Volumen auf `einheiten` (`dm2-in-cm2`, `dm3-in-cm3`, `cm2-in-dm2`) erweitert; `generated` mit zwei Zahlen aus `oneOf` statt Dezimalbereich, damit Dezimalzahlen exakt bleiben.

Zahlen: Maße natürliche Zahlen oder eine Dezimale, Seiten ≥ 1; `where` gegen unsinnige Größen; Rechenprobe über feste Seeds im Build.

## Figures

Eigene SVGs in `src/images/` (`stuetzpunkt-tuer`, `lineal-bleistift`, `einheitentreppe-laenge`, `quadratdezimeter`, `kubikdezimeter`, `rechteck-eine-reihe`, `rechteckmodell`, `rechteck-merkmale`, `quader-merkmale`, `l-figur-zerlegt`, `quader-aus-wuerfeln`, `quader-netz`, `viereck-arten`, `parallelogramm-hoehe`, `prisma-merkmale`, `dreieck-halb`, `trapez-zerlegt`, `raute-diagonalen`, `prisma-stapel`, `prisma-netz`) (Quelle „eigene Zeichnung“, Lizenz CC BY 4.0), 360 px tauglich, mit `alt` (was zu sehen ist) und `caption` (worauf achten); Farbe nie allein (Beschriftung oder Muster dazu); die Figur zeigt das Gegebene, nie die Antwort. Einheitsquadrat hellblau mit Raster, Einheitswürfel isometrisch, Einheitentreppe von klein nach groß links nach rechts mit Faktorpfeilen (Länge ·10, Fläche ·100, Volumen ·1000, Zeit ·60 als Gegenbeispiel), Rechteckmodell mit Seitenlängen außen. Skizzen: `.vibe/sketches/`.

## Sources

Karte und Issue. Eigene Herleitungen und eigene Aufgaben. Nachschlagen ist keine Quelle: nichts aus Büchern, Arbeitsblättern oder anderen Seiten übernehmen, keine externen Links (auch nicht an Aufgaben; verlangt das Werkzeug einen Link, zeigt er auf die Kartenseite des Bausteins). Keine Dritt-Inhalte. 1 l = 1 dm³ steht als eine Zeile in `einheiten` (Annahme außerhalb der Karte, vom fachlichen Prüfer zu bestätigen).

## Adding a chapter or round

1. Baustein-Id und „Ich kann“ aus der Karte; Voraussetzungen von außen als Recap-Seite (`recap:`) mit Komponente `Kurztest` vor die Seiten stellen.
2. Seite `src/<kapitel>/<seite>.yaml` mit `competencies: [<id>]`, Abschnitte wie oben, Muster aus der Liste, mindestens drei Aufgaben steigender Schwierigkeit.
3. Seite in `chapter.yaml` unter `pages`, Kapitel in `src/app.yaml` unter `chapters` eintragen; Glossarbegriffe als `definition`.
4. 1 bis 3 ihrer Übungen in `selfAssessment` aufnehmen, wie Skill `lernapps-explainer-self-assessment` sagt (jede Seite mit mindestens zwei Aufgaben, bevorzugt `generated`).
5. `npx vp build`, `npx vp check --fix`, `npx --no -- lernapps check`, Commit.

## Rules learned from mistakes

- `generated`: Keine Falschantwort darf bei irgendeinem Zufallswert die richtige sein (Fehler `mistake equals the answer`): `where` einschränken, zum Beispiel `g * h != 2 * (g + s)`.
- Eine Formel oder Aufgabe, die bei 360 px zu breit wird (`usable-at-360px`), in Zeilen aufteilen (mehrere `formula`-Blöcke).
- Text mit `: ` in Anführungszeichen setzen (`title`, `alt`, `text`), sonst liest YAML eine Map.
- Zahl, geschütztes Leerzeichen, Einheit in jedem Text; Große Zahlen ab fünf Stellen mit schmalem geschütztem Leerzeichen. Beim Hinzufügen neuer Texte prüfen (`grep` nach Ziffer, Leerzeichen, Einheit).
- Ein Hinweis nach falscher Antwort nennt nie die Lösung, nur den Fehler.

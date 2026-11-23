---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: code
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: { checks-pass: 1, usable-at-360px: 3 }
---

# Plan: mathe-messen, first version

<!--
For you, the assistant. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Entry draft, Content method and Retrospective, in the
  creator's language. Delete the comment of a section once the section is filled.
- Work on the branch `work`, locally: push nothing before Commit.
-->

*Started 2026-11-23. Explore, Plan, Code, Commit.*

## Goal

Lernende der Klassen 5-8 erfahren, dass Messen heißt zu zählen, wie oft eine Einheit hineinpasst. Sie schätzen und rechnen Größen um, legen Flächen aus, füllen Körper und zerlegen und ergänzen Figuren, bis aus dem Zählen die Formeln werden. (Quelle: Issue lernapps/apps#398, Leitidee; der Orchestrator vertritt den Menschen.)

## Key decisions

- Archetyp `explainer`, Format 2: Das Issue fordert ein Explainer (Seiten mit Erklärung, Beispiel, Bild, Aufgaben). `quiz` trägt keine Herleitungen, `interactive` ist kein Spiel- oder Simulationsfall; Zerlegen und Auslegen kommen als Komponenten in den Explainer.
- Strang `mathematik/groessen-und-messen` (Issue, Karte: `explainerFocus: strand`).
- Sprache nur Deutsch `[de]` (Issue nennt nichts anderes; Karte und Regeln sind deutsch). (guess)
- Kapitel wie im Issue: 1 Größen schätzen, messen, umrechnen (5-6) · 2 Flächen auslegen, Körper füllen (5-6) · 3 Zerlegen und ergänzen (7-8).
- Sammel-Wiederholung (`recap`) nach regeln.md Abschnitt 7 am Anfang von Kapitel 2 und Kapitel 3 (siehe Notes). Kapitel 1 braucht keine Voraussetzung von außen.
- Kein `scope`: keine `open-task` und kein Material des Menschen; `scope` ist dann optional (structure.md).
- Darstellungen: Messen mit Einheiten (Einheitsquadrat, Einheitswürfel, Einheitentreppe) und Rechteckmodell, in allen Seiten gleich benannt.

## Notes

**Strang:** `mathematik/groessen-und-messen` (Karte `mathematik.json`, `explainerFocus: strand`, Stand der Karte: Entwurf). Alle 9 Bausteine des Issues stehen im Strang; keiner ist Lücke der Karte. Kein Baustein fehlt.

**Bausteine nach Kapitel, nach `requires` geordnet (Karte: Stufe/Schritt, öffnet):**

| Kap. | Baustein (id) | Stufe/Schritt | intern vorausgesetzt | von außen vorausgesetzt |
|---|---|---|---|---|
| 1 | `groessenvorstellungen-schaetzen` | 5-6 / 1, öffnet 30 | – | – |
| 1 | `messen-laenge-masse-geld-zeit` | 5-6 / 2, öffnet 18 | schaetzen | – |
| 1 | `umrechnung-groessen` | 5-6 / 2, öffnet 19 | schaetzen | – |
| 2 | `einheiten-flaeche-volumen` | 5-6 / 3, öffnet 15 | umrechnung | – |
| 2 | `flaeche-umfang-quadrat-rechteck` | 5-6 / 4, öffnet 14 | einheiten-flaeche-volumen | `grundfiguren-eben` |
| 2 | `zusammengesetzte-figuren` | 5-6 / 5, öffnet 0 | flaeche-umfang-quadrat-rechteck | – |
| 2 | `volumen-oberflaeche-quader-wuerfel` | 5-6 / 5, öffnet 3 | flaeche-umfang-quadrat-rechteck | `grundkoerper-quader-wuerfel` |
| 3 | `flaeche-umfang-dreieck-viereck` | 7-8 / 1, öffnet 3 | flaeche-umfang-quadrat-rechteck | `vierecke-grundfiguren` |
| 3 | `volumen-oberflaeche-prisma` | 7-8 / 2, öffnet 2 | volumen-oberflaeche-quader-wuerfel, flaeche-umfang-dreieck-viereck | `grundkoerper-prisma-zylinder` |

Die Karte gibt die Reihenfolge vor; sie stimmt mit dem Zuschnitt des Issues überein. Kapitelzuschnitt aus dem Issue unverändert. In Kapitel 3 steht „Dreieck, Viereck“ vor „Prisma“, weil das Prisma beide Vorgänger braucht.

**Sammel-Wiederholung von außen (Karte, Abschnitt 7 der Regeln; ohne Blick in die Apps der anderen):**
- Kapitel 2: `grundfiguren-eben` (Rechteck, Quadrat, Seiten, Winkel, parallel/senkrecht; die Karte nennt dort `parallel-senkrecht-abstand` als Vorgänger, das erklärt der Abschnitt mit), `grundkoerper-quader-wuerfel` (Kanten, Flächen, Ecken, Netz).
- Kapitel 3: `vierecke-grundfiguren` (Parallelogramm, Raute, Trapez, Drachen; Höhe als senkrechter Abstand), `grundkoerper-prisma-zylinder` (Prisma: Grund- und Deckfläche, Mantel, Höhe; Zylinder nur zur Unterscheidung, gemessen wird er in #429).
- Offen: ob der Block `recap` Fachbegriffe, Beispiel und Selbsttest kann; sonst Recap-Seite aus normalen Blöcken und Fund fürs Werkzeug melden (Regel 7.6). Wird im Plan geklärt (Skill `lernapps-explainer`, `structure.md`).

**Didaktik (Richtung aus dem Issue):** Messen mit Einheiten trägt alles. Ablauf: Körpermaße und Stützpunkte → Einheitsquadrate auslegen, Einheitswürfel stapeln → Formel als Abkürzung des Zählens → in 7-8 zerlegen und ergänzen → Prisma als Stapel aus Grundflächen. Die Einheitentreppe ist die Stellenwerttafel mit Einheiten (Kap. 1), bekommt in Kap. 2 die Stufen cm², m², cm³ und zeigt, warum 100 bzw. 1000. Bei der Zeit zeigt Kapitel 1 offen, wo die Treppe nicht passt (60 statt 10).

**Wie Lernende zum Baustein kommen, und welcher Fehler die Rückmeldung fängt:**
- `groessenvorstellungen-schaetzen`: Sie sammeln Stützpunkte (Tür 2 m, Tafel Schokolade 100 g), schätzen, messen nach, prüfen den Fehler. Fehler: Zehnerpotenz daneben (Zimmer „2 km hoch“), Einheit passt nicht zur Sache.
- `messen-laenge-masse-geld-zeit`: Sie zählen, wie oft die Einheit passt (Lineal, Waage, Uhr), rechnen in Sachaufgaben. Fehler: Zeit dezimal gerechnet (1,30 h = 1 h 30 min), Geld mit Komma falsch gerundet, Einheiten gemischt addiert.
- `umrechnung-groessen`: Sie lesen die Umrechnung an der Einheitentreppe ab (Stellenwerttafel) und wählen die passende Einheit. Fehler: Faktor in falscher Richtung, falsch verschobenes Komma, Zeit mit 10 statt 60.
- `einheiten-flaeche-volumen`: Sie legen 1 cm² und 1 cm³ aus und zählen: 10 · 10 = 100, 10 · 10 · 10 = 1000. Fehler: mit 10 statt 100 bzw. 1000 umgerechnet.
- `flaeche-umfang-quadrat-rechteck`: Reihen mal Spalten aus dem Auslegen; Umfang als Weg um die Figur. Fehler: Fläche und Umfang verwechselt, Einheit m statt m², addiert statt multipliziert.
- `zusammengesetzte-figuren`: Zerlegen in Rechtecke, Ergänzen zum Rechteck. Fehler: gemeinsame Kante doppelt im Umfang, Teilflächen vergessen, beim Ergänzen nicht abgezogen.
- `volumen-oberflaeche-quader-wuerfel`: Schichten stapeln (Grundfläche mal Höhe), Netz auslegen (sechs Rechtecke, drei Paare). Fehler: Oberfläche mit Volumen verwechselt, ein Flächenpaar vergessen, cm² mit cm³ vertauscht.
- `flaeche-umfang-dreieck-viereck`: Interaktive Schere: Parallelogramm wird Rechteck, Dreieck ist halbes Parallelogramm, Trapez als Mittellinie · Höhe. Fehler: schräge Seite statt Höhe benutzt, Halbieren vergessen, Umfang aus Höhe statt Seiten.
- `volumen-oberflaeche-prisma`: Prisma als Stapel gleicher Grundflächen: G · h; Oberfläche = 2 G + Mantel. Fehler: Höhe des Prismas mit Höhe des Dreiecks verwechselt, Mantel vergessen.

**Umfang (in/aus):** In: Länge, Masse, Geld, Zeit; Flächen- und Volumeneinheiten; Rechteck, Quadrat, zusammengesetzte Figuren aus Rechtecken, Quader, Würfel; Dreieck, Parallelogramm, Raute, Trapez, Drachen; gerade Prismen mit Dreieck oder Viereck als Grundfläche. Aus: Kreis, Zylinder, Kegel, Pyramide, Kugel (#429); Eigenschaften und Konstruktion der Figuren und Körper, Netze zeichnen (#397, #432). Zahlenraum: Maße mit Komma bis Tausendstel (1 dm³ = 1 l ggf. nur als Hinweis), Stufen mm … km, g … t, cm² … km² nur in der Treppe, cm³ … m³. Sprache: Deutsch.

**Quellen (geöffnet):** Lernlandkarte `mathematik.json` (geöffnet, gelesen). Issue #398 (Auftrag). Nicht geöffnet und daher nicht geprüft: KMK-Bildungsstandards (2022), Hessisches Kerncurriculum Sek I; der Strang folgt der Karte, ein Lehrplan wird nach Skill nicht gebraucht. Alle Aufgaben, Herleitungen und Bilder entstehen selbst; nichts wird aus Büchern übernommen. Keine Drittinhalte, keine externen Links.

**Offene Fragen an den Orchestrator:** (1) Recap als Block oder als Seite, siehe oben. (2) Sollen Volumen- und Hohlmaß-Verknüpfung (1 l = 1 dm³) als Hinweis stehen? Karte nennt es nicht; Vorschlag: ja, als eine Zeile in `einheiten-flaeche-volumen`. (guess)

### Review (Musterseite, Lernenden-Prüfer Klasse 5, unabhängiger Unteragent)

Umgesetzt auf `groessen/schaetzen`: „Maßstab im Kopf“ und „Zehnerpotenz“ entfernt; doppelte Definition bereinigt; Bild vor die Erklärung „Wie oft passt …“, unbeschriftete Zeichen (Linie, Klinke) entfernt; Tabelle enthält jetzt alle Größen, nach denen gefragt wird (Finger, Bleistift, Bus), Einheit l entfernt; „Merke“ verrät die Aufgabe nicht mehr (Aufgabe jetzt zur Hand 10 cm); Zahlenaufgabe als echte Schätzung (Ranzen, Toleranz 100 g, Einheit in der Aufgabe genannt); Rückmeldungen nennen nicht mehr die Lösung; Platz 1 = kleinste Länge. Nicht geändert (Laufzeit, Funde): Standardrückmeldung „Lies dazu noch einmal den Text“ bei Reihenfolge, wahr/falsch und Zahl; „Antworte zuerst: Wähle, tippe oder ordne alles zu“ ohne Hinweis auf fehlende Einträge; Symbol „Neue Aufgabe“ ohne sichtbaren Text; Link „Mehr dazu“ führt auf lernapps.net, „Karte“ unerklärt; Fachbegriff-Link springt auf dieselbe Seite; KI-Tutor-Block nicht verständlich für Klasse 5. Offen: fachlicher Prüfer, Lernenden-Prüfer über alle Seiten.

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. Ask; write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Check the start: the folder `.agents/skills/lernapps-app` exists (else stop and tell the creator that the folder
      was not started with `init`), and `git branch --show-current` prints `work` (else `git switch -c work`).
- [x] Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: at
      their own address, free and public, and once listed as a copy on lernapps.net. Say that the technical part
      (GitHub) comes at the end and that you do it.
- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-map-assignment` and read the learning map of the subject as it says. The creator brings
      the content themselves (material, a word list, the pages): note under "Notes" which competencies of the map it
      covers. Else write the skill's assignment, with its story; the creator's yes answers the topics Content and
      Amount. A subject without a map: skip this task and say so.
- [x] Load skill `lernapps-exercise-patterns` and read its reference for the subject. Note under "Notes" how learners
      will practise what the goal names.
- [x] Choose the archetype as skill `lernapps-app` says: read the README of each archetype in question, then tell the
      creator in plain words what the chosen one can and cannot do. Write the archetype and its reason under "Key
      decisions".
- [x] Run `npx --no -- lernapps skills --archetype <name>` with the chosen archetype. It installs the archetype's
      skills and adds the archetype's tasks to this plan.
- [x] Load skill `lernapps-explainer-design`. An explainer has the look of the runtime: write "fixed by the
      archetype" under the topic "Look and feel" of "Answers".
- [x] Interview: ask every other topic of "Answers", in order. Leave out only a topic that an answer of the creator
      already covers, and note which answer. A topic nobody answered is asked once before you write an assumption
      with "(guess)".
- [x] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [x] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [x] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [x] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.
      Creator: Orchestrator: Recherche freigegeben; Recap als Recap-Seite plus Kurztest-Seite; 1 l = 1 dm³ ja (guess); Musterseite K1 schätzen mit Stützpunkt

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

- Goal: Aus dem Issue #398: „Ich verstehe, dass Messen heißt, zu zählen, wie oft eine Einheit hineinpasst, und kann Größen schätzen, umrechnen und Flächen und Volumen durch Auslegen, Zerlegen und Ergänzen bestimmen.“
- Learners: Mathematik, Stufen 5-6 und 7-8 (Issue). Vorwissen: Bausteine von außen siehe Notes.
- Model and focus: Issue: Darstellung „Messen mit Einheiten“ trägt das Explainer; Schwerpunkt Visualisierung und Üben (Einheitsquadrate, Einheitentreppe, Schere). Kein Spielgefühl. Vorbild-App aus dem Katalog: keine genannt.
- Hurdles: je Baustein in Notes („welcher Fehler die Rückmeldung fängt“); Beispiele aus dem Issue: Zehnerpotenz, 60 statt 10, 100/1000 statt 10, Höhe statt schräger Seite.
- Content: schreibt die Session aus Karte, Issue und eigenen Herleitungen; kein eigenes Material des Menschen.
- Amount: Issue: 3 Kapitel, 9 Bausteine, mindestens 3 Aufgaben je Baustein (Regeln 3.1), plus zwei Sammel-Wiederholungen. Alles in der ersten Version.
- Languages: Deutsch (guess, Issue nennt keine zweite Sprache).
- Look and feel: fixed by the archetype.
- Terms: Wörter der Karte (Namen der Bausteine); Darstellungen: Einheitsquadrat, Einheitswürfel, Einheitentreppe, Rechteckmodell, Stützpunkt (Issue, Regeln 1.5).
- Finding the app: Messen, Längen, Flächen, Volumen, Umrechnen, Flächeninhalt, Umfang, Rauminhalt, Klasse 5 bis 8 (Entwurf, wird im Eintrag fixiert).

## Plan

<!--
- Map the confirmed content onto the archetype. No new content questions: a gap in the content goes back to Explore.
- The creator confirms the plan in one read. After the yes you work on your own.
-->

### Tasks

- [x] Map the content as "Map the content" of skill `lernapps-explainer-design` says, and write the result under
      "Content method".
- [x] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [x] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [x] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [x] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [x] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Orchestrator: Plan bestätigt; Kurztest als Komponente in der recap-Seite statt eigener Seiten; schere einzige weitere Komponente

### Content method

**Seiten und Kapitel** (Kapitel-ID · Seiten-ID · Baustein; Abschnitt-IDs überall `einstieg`, `idee`, `beispiel`, `uebung`; Titel sagen, was der Abschnitt tut):

| Kapitel | Seite | Baustein | Typ |
|---|---|---|---|
| `groessen` (K1, 5-6) | `schaetzen` | groessenvorstellungen-schaetzen | **Musterseite** |
| | `messen` | messen-laenge-masse-geld-zeit | |
| | `umrechnen` | umrechnung-groessen | |
| `flaechen-koerper` (K2, 5-6) | `voraussetzungen` | recap: geometrie/grundfiguren-eben, geometrie/grundkoerper-quader-wuerfel | Recap („Das brauchst du für dieses Kapitel“) |
| | (kein eigener Kurztest) | Selbsttest als Komponente `Kurztest` in der Seite `voraussetzungen` | siehe Änderung unten |
| | `einheiten` | einheiten-flaeche-volumen | |
| | `rechteck` | flaeche-umfang-quadrat-rechteck | |
| | `zusammengesetzt` | zusammengesetzte-figuren | |
| | `quader` | volumen-oberflaeche-quader-wuerfel | |
| `zerlegen` (K3, 7-8) | `voraussetzungen` | recap: geometrie/vierecke-grundfiguren, geometrie/grundkoerper-prisma-zylinder | Recap |
| | (kein eigener Kurztest) | Komponente `Kurztest` in `voraussetzungen` | |
| | `dreieck-viereck` | flaeche-umfang-dreieck-viereck | |
| | `prisma` | volumen-oberflaeche-prisma | |

Baustein → Seite: jeder der 9 Bausteine steht auf genau einer Seite und wird dort mit mindestens 3 Aufgaben geübt (Regeln 3.1). Reihenfolge der Seiten = Reihenfolge der `requires`. Kein `ahead`.

**Darstellungen (in allen Seiten gleich benannt, im Guide unter „Figures“):** *Einheitsquadrat* (1 cm × 1 cm, hellblau, Raster), *Einheitswürfel* (1 cm³, isometrisch), *Einheitentreppe* (Stufen von klein nach groß, Pfeil mit Faktor; Treppe der Länge ×10, der Fläche ×100, des Volumens ×1000, der Zeit ×60 als Gegenbeispiel), *Rechteckmodell* (Rechteck in Reihen und Spalten, Seitenlängen außen), *Stützpunkt* (Merkgröße mit Wert, z. B. „Tür ≈ 2 m“). Farbe nie allein (Beschriftung und Muster dazu). Alle Bilder eigene SVGs in `src/images/`, mit `alt` und `caption`, 360 px breit; Quelle „eigene Zeichnung“, Lizenz CC BY 4.0.

**Muster (Name · Kompetenzart · Form · Beispiel):**
1. `schaetzen-pruefen` · schätzen · `generated` mit `answer` und `compare.number.tolerance` (Schätzung gilt innerhalb des Faktors), Fehler „Zehnerpotenz daneben“ · „Wie hoch ist ein Zimmer? Gib in m an.“ Dazu `ordering` von Gegenständen nach Länge und `single-choice`: „Welche Einheit passt?“.
2. `messen-sachaufgabe` · messen, rechnen · `generated` mit Einheit und Zeit-Fehler (1,30 h ≠ 1 h 30 min), Geld in ganzen Cent; Figur: Lineal / Uhr als `image`.
3. `treppe-umrechnen` · umrechnen · `generated` mit `compare.number.unit`, Fehler „Faktor in falscher Richtung“, „Zeit mit 10“; Figur: Einheitentreppe (`image`), `matching` Größe ↔ Einheit.
4. `auslegen-zaehlen` · Einheiten und Fläche · `image` (Einheitsquadrate ausgelegt) → `number` „Wie viele Einheitsquadrate?“ → `generated` Fläche und Umfang des Rechtecks, Fehler „Umfang mit Fläche verwechselt“, „Einheit m statt m²“.
5. `zerlegen-rechnen` · zusammengesetzte Figuren · `image` der L-Figur mit gestrichelter Zerlegung, `generated` mit zwei Rechtecken (Maße aus `given`, Figur in der Aufgabe als Text beschrieben, Teilbild nur aus Gegebenem), Fehler „gemeinsame Kante im Umfang doppelt“.
6. `stapeln-netz` · Volumen, Oberfläche · `image` Schichten, `generated` für V und O, Fehler „Flächenpaar vergessen“, „cm² statt cm³“.
7. `zerschneiden-ergaenzen` · Dreieck, Viereck · Komponente `schere` (siehe unten) plus `image`, `generated` mit Höhe ≠ Seite, Fehler „schräge Seite statt Höhe“, „Halbieren vergessen“.
8. `prisma-stapel` · Prisma · `image` Stapel gleicher Grundflächen, `generated` G · h und O = 2G + M, Fehler „Dreieckshöhe statt Prismenhöhe“.
9. `recap-kurztest` · Voraussetzungen prüfen · normale Seite „… Kurztest“: je Baustein 1 bis 2 Kurzaufgaben (`single-choice`, `number`), Rückmeldung mit Fehlerhinweis und Verweis „Wenn nicht: <Bausteinname>, Kartenseite https://lernapps.net/apps/map/mathematik/c/<id>/“.

Alle `generated` mit festem Seed im Build geprüft (Rechenprobe), `where` gegen unsinnige Größen (Maße natürliche Zahlen oder eine Dezimale, Seiten ≥ 1).

**Änderung nach dem Plan (Orchestrator):** Der Recap behält `recap:`; der Selbsttest steht als Komponente `Kurztest` direkt in der Recap-Seite (Vorbild `src/components/Kurztest.*` in `lernapps/mathe-saetze-entdecken`, Branch `work`; nur diese Komponente kopieren und anpassen, Tastatur und Textalternative sind dort vorhanden). Rückfall nur wenn das nicht geht: eigene Kurztest-Seite direkt hinter dem Recap. Damit entfallen die Seiten `voraussetzungen-kurztest`; die Code-Aufgaben „Recap“ gelten entsprechend (Seite `voraussetzungen` mit Komponente). Muster 9 `recap-kurztest` ist die Komponente. Zählt unter Komponenten: `schere` und `Kurztest`.

**Komponente `schere` (Orchestrator: ok):** Einzige Komponente. Sie zeigt ein Parallelogramm mit Maßen; Lernende verschieben eine senkrechte Schnittlinie mit Pfeiltasten oder Schieber, das abgeschnittene Dreieck wird per Schaltfläche „Dreieck umlegen“ auf die andere Seite gelegt, es entsteht ein Rechteck. Zweite Stufe: Dreieck wird verdoppelt zum Parallelogramm. Prüft: Lernende ergänzen die Flächenzahl (Exercise-Contract). Kann nicht: freie Figuren schneiden, Trapez nur als Bild. `nojs`-Text und `image`-Folge in 3 Schritten als statische Form; Bedienung per Tastatur, Fokus sichtbar, Textalternative nach jeder Änderung (aria-live). Begründung: kein Block zeigt eine Figur, die auf Eingabe umgebaut wird (`prefer-built-in-block`). Wenn das Werkzeug es nicht trägt, bleibt die statische Bildfolge (Fund melden).

**Engagement je Seite (Ein Zeile):** *Einstieg* = eine leichte Aufgabe oder Frage vor der Erklärung (z. B. Schätze die Tür); *Wechsel* = anschauen (Bild) → selbst tun → lesen; *Belohnung* = am Kapitelende ein „Das kannst du jetzt“; *Geschichte* = keine durchgängige (Stufe 7-8 und Sachbezug genügen; Aufgaben mit erfundenen Namen und Alltagsdingen, keine Marken) (guess); *Wiederholung nur mit Absicht* (die Einheitentreppe kehrt in neuer Form wieder).

**Engagement je Seite** (Einstieg · Wechsel · Belohnung · Geschichte):
- `schaetzen`: Frage „Wie hoch ist eure Tür?“ mit Schätzfeld vor der Erklärung · Körpermaß-Bild, dann Schätzen, dann Stützpunkt-Tabelle · „Du hast fünf Stützpunkte“ · keine Geschichte.
- `messen`: Frage „Wie oft passt der Bleistift auf die Heftbreite?“ · Zählen am Lineal-Bild, Rechnen, Lesen · Sachaufgaben mit Geld und Zeit · keine.
- `umrechnen`: Stellenwert-Treppe zuerst, Frage „Wie viele Meter sind 3 km?“ · Treppe ablesen, tun, Zeit als Ausnahme lesen · eigene Faustregel formuliert · keine.
- `voraussetzungen` / `-kurztest`: Kopf „Das brauchst du für dieses Kapitel“, Checkliste am Schluss · Begriffe lesen, Kurztest tun · „Du bist bereit, wenn …“ · keine.
- `einheiten`: Einheitsquadrat auslegen und zählen, bevor 100 genannt wird · Bild, Zählaufgabe, Treppe-Erweiterung · „Warum 100 und 1000“ selbst gesagt · keine.
- `rechteck`: Ein Rechteck aus Einheitsquadraten, Reihen zählen · Auslegen (Bild) → Formel als Abkürzung → Umfang als Weg · Formel selbst gefunden · keine.
- `zusammengesetzt`: Eine L-Form, die erst nicht aufgeht · Zerlegen (Bild), Rechnen, Ergänzen · beide Wege geben dieselbe Zahl · keine.
- `quader`: Schichten stapeln, Würfel zählen · Stapel (Bild), Netz (Bild), Rechnen · V und O unterschieden · keine.
- `dreieck-viereck`: Schere: Parallelogramm schneiden und umlegen · Schere, Dreieck als Hälfte, Merke, Rechnen · „Fläche = Grundseite · Höhe“ selbst begründet · keine.
- `prisma`: Stapel aus Dreiecken · Stapel (Bild), G · h, Mantel auslegen · Formel als Verallgemeinerung der Quaderformel · keine.
Eine durchgehende Geschichte gibt es nicht (guess): Der Strang ist Sachbezug; Aufgaben erzählen kleine Alltagsfälle mit erfundenen Namen.

**Glossar:** `definition` für Messen, Einheit, Stützpunkt, Einheitentreppe, Flächeninhalt, Umfang, Volumen, Oberfläche, Höhe (Dreieck), Grundfläche; aus den Recaps: Fläche, Umfang, Seite, Kante, Quader, Würfel, Prisma, Parallelogramm, Raute, Trapez, Drachen, Netz. Jeder Fachbegriff aus Recaps erklärt mit Beispiel (Regeln 7.2).

**Sonstiges:** 1 l = 1 dm³ als eine Zeile in `einheiten` (guess, außerhalb der Karte; der fachliche Prüfer bestätigt). Keine `links:` nach außen: wo das Werkzeug einen verlangt, die Kartenseite des Bausteins. Brüche gesetzt (`\frac`), in Rückmeldungen von `generated` `a/b` erlaubt, jede solche Stelle wird gezählt (Regeln 2). Dezimalkomma, `·` als Malzeichen, geschützte Leerzeichen vor Einheiten.

**Wie ein späterer Agent ein Kapitel ergänzt:** Seite in `chapter.yaml` eintragen, Baustein-ID aus der Karte, Muster aus dieser Liste, Figuren wie oben benannt.

**Baustein → Seite** siehe Tabelle. Offen nach dem Plan: Lernenden-Prüfung der Musterseite; fachlicher Prüfer bestätigt 1 l = 1 dm³ und alle Rechnungen.
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [x] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype explainer`.
- [x] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [x] Load skill `lernapps-explainer`.
- [x] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [x] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [x] Musterseite K1 schaetzen (Kapitel groessen): app.yaml (strand, Titel, intro, sources), chapter.yaml, Seite mit Einstieg, Stützpunkt-Bild (SVG), Beispiel, Merke, 4+ Aufgaben (generated schätzen, ordering, single-choice, number) mit Fehlerhinweisen; Figuren-Konventionen im Guide
<!-- tasks: pattern (1 added): the one page or screen that is the pattern for the others -->
- [x] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
      Creator: Orchestrator: Musterseite angenommen, übrige Seiten nach Muster; Zahlenaufgabe vor Veröffentlichen erneut prüfen lassen
- [x] Seiten messen und umrechnen (Kapitel groessen): Lineal-/Uhr-Bild, Sachaufgaben mit Geld und Zeit; Einheitentreppe (SVG) mit Zeit-Gegenbeispiel, matching, generated mit Richtungsfehlern; Kapitelabschluss
- [x] Kapitel flaechen-koerper, Recap: Seite voraussetzungen (recap grundfiguren-eben, grundkoerper-quader-wuerfel) mit Kopf, Fachbegriffen fett mit Beispiel, Checkliste, und Seite voraussetzungen-kurztest mit Kurzaufgaben und Verweis auf die Kartenseiten
- [x] Seiten einheiten und rechteck: Einheitsquadrat auslegen, Treppe cm², m², cm³ (inkl. 1 l = 1 dm³ als eine Zeile), Rechteckmodell, Fläche und Umfang, generated mit Fehlertypen
- [x] Seiten zusammengesetzt und quader: Zerlegen und Ergänzen (SVG), Umfang ohne gemeinsame Kante; Schichten und Netz (SVG), Volumen und Oberfläche, generated mit Rechenprobe
- [x] Kapitel zerlegen, Recap: Seite voraussetzungen (recap vierecke-grundfiguren, grundkoerper-prisma-zylinder) und voraussetzungen-kurztest wie in Kapitel 2
- [x] Komponente schere (Logikmodul, Test, nojs, Tastatur, aria-live) und Seite dreieck-viereck: Parallelogramm, Dreieck, Trapez, Raute, Drachen; generated mit Höhe-Fehlern
- [x] Seite prisma: Stapel aus Grundflächen, G · h, Oberfläche 2G + Mantel, generated; Kapitel- und App-Abschluss, Glossar vollständig, intro und sources in app.yaml
<!-- tasks: pages (7 added): the other pages or screens, after the pattern -->
- [ ] Update the content guide so that it describes the app as built (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every screen and state, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.
      Compare each with its sketch.
- [ ] Do the whole-app check of skill `lernapps-learner-check`. Fix what it finds and write under "Notes" what you
      fixed.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
- The creator asked to stop before publishing (a trial): stop here and say so.
-->

### Tasks

- [ ] Load skill `lernapps-explainer-self-assessment`. Add the self-assessment as it says, or write under "Key
      decisions" why the app has none. Commit.
- [ ] Load skill `lernapps-github`. Set up the repository and Pages as it says. Ask for the repository's name and
      every click only the creator can make, in one message.
- [ ] Push `work`, open the preview pull request and see its checks to green, as skill `lernapps-github` says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App". Ask
      whether it may go online. Stop and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit,
      the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm that the app shows. Never use a derived address.
- [ ] Load skill `lernapps-listing`. Write the entry under "Entry draft" as it says, with the creator's answer to
      "Finding the app".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as skill `lernapps-listing` says, without asking first: the
      pull request is the review. See it to "bestanden", then show the creator the pull request and its result.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

### Entry draft

<!-- YAML valid against the entry schema the listing skill names. Only known values, never invented. -->

```yaml
```

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->

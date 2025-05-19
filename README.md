# MusicStoreAngular

**Inhaltsverzeichnis:**

- [MusicStoreAngular](#musicstoreangular)
  - [Einleitung](#einleitung)
  - [Aufgabenstellung](#aufgabenstellung)
  - [Umsetzung der Aufgabe mit dem SEMusicStoreBase](#umsetzung-der-aufgabe-mit-dem-semusicstorebase)
    - [Schritt 1: Repository klonen](#schritt-1-repository-klonen)
    - [Schritt 2: `SEMusicStoreBase` mit der IDE öffnen](#schritt-2-semusicstorebase-mit-der-ide-öffnen)
    - [Schritt 3: Starten der Anwendung `TemplateTools.ConApp`](#schritt-3-starten-der-anwendung-templatetoolsconapp)
    - [Schritt 4: `SEMusicStoreBase` kopieren =\> `SEMusicStoreAngular`](#schritt-4-semusicstorebase-kopieren--semusicstoreangular)
    - [Schritt 5: `SEMusicStoreAngular` mit der IDE öffnen](#schritt-5-semusicstoreangular-mit-der-ide-öffnen)
    - [Schritt 6: Starten der Anwendung `TemplateTools.ConApp`](#schritt-6-starten-der-anwendung-templatetoolsconapp)
    - [Schritt 7: `Preprocessor` einstellen](#schritt-7-preprocessor-einstellen)
    - [Schritt 8: Starten der `CodeGenerierung`](#schritt-8-starten-der-codegenerierung)
    - [Schritt 9: Starten der Anwendung `SEMusicStoreAngular.ConApp`](#schritt-9-starten-der-anwendung-semusicstoreangularconapp)
      - [Testen des Imports](#testen-des-imports)
    - [Schritt 10: Starten der Anwendung `SEMusicStoreAngular.WebApi`](#schritt-10-starten-der-anwendung-semusicstoreangularwebapi)
    - [Schritt 11: `SEMusicStoreAngular.AngularApp` mit **VSCode** öffnen](#schritt-11-semusicstoreangularangularapp-mit-vscode-öffnen)
    - [Schritt 12: Einstellung zur `REST-Api` prüfen](#schritt-12-einstellung-zur-rest-api-prüfen)
    - [Schritt 13: Starten der `AngularApp` Anwendung](#schritt-13-starten-der-angularapp-anwendung)
    - [Schritt 14: Eingabeformular für die Entity-`Genre` erstellen](#schritt-14-eingabeformular-für-die-entity-genre-erstellen)
      - [Schritt 14.A: Erstellen der Übersicht-Komponente für `Genre`](#schritt-14a-erstellen-der-übersicht-komponente-für-genre)
      - [Schritt 14.B: Erstellen der Bearbeitung-Komponente für `Genre`](#schritt-14b-erstellen-der-bearbeitung-komponente-für-genre)
      - [Schritt 14.C: Anpassen der Übersicht-Komponente für `Genre`](#schritt-14c-anpassen-der-übersicht-komponente-für-genre)

---

## Einleitung

Dieses Projekt ist der **zweite** Teil aus einer mehrteiligen Reihe, die sich mit der Erstellung eines Software-Systems beschäftigt. Als Startvorlage für eine schnelle Entwicklung wird [SEMusicStoreBase](https://github.com/leoggehrer/SEMusicStoreBase) verwendet. Diese Vorlage orientiert sich an der Umsetzung der [SEArchitecture](https://github.com/leoggehrer/SEArchitecture) und bietet bereits eine Vielzahl von Komponenten.

Hauptthema dieser Reihe ist die Erstellung von Eingabeformularen für die **Entitäten** `Genre`, `Artist`, `Album` und `Track`. Die Formulare werden mit dem **Angular**-Framework umgesetzt.

## Aufgabenstellung

Eine detailierte Aufgabenstellung mit dem Titel **MusicStore** finden [hier](https://github.com/leoggehrer/MusicStore).

---

## Umsetzung der Aufgabe mit dem SEMusicStoreBase

Mit dem `SEMusicStoreBase` können Sie die Aufgabenstellung in wenigen Schritten umsetzen.

**Umsetzungstabelle:**

| Schritt | Beschreibung                                           |
|---------|--------------------------------------------------------|
| 1       | `SEMusicStoreBase` klonen                              |
| 2       | `SEMusicStoreBase` mit der IDE öffnen                  |
| 3       | Starten der Anwendung `TemplateTools.ConApp`           |
| 4       | `SEMusicStoreBase` kopieren => `SEMusicStoreAngular`   |
| 5       | `SEMusicStoreAngular` mit der IDE öffnen               |
| 6       | Starten der Anwendung `TemplateTools.ConApp`           |
| 7       | `Preprocessor` einstellen                              |
| 8       | Starten der `CodeGenerierung`                          |
| 9       | Starten der Anwendung `SEMusicStoreAngular.ConApp`     |
| 10      | Starten der Anwendung `SEMusicStoreAngular.WebApi`     |
| 11      | `SEMusicStoreAngular.AngularApp` mit **VSCode** öffnen |
| 12      | Einstellung zur `REST-Api` prüfen                      |
| 13      | Starten der `AngularApp` Anwendung                     |
| 14      | Eingabeformular für die Entity-`Genre` erstellen       |
| 14.A    | Erstellen der Übersicht-Komponente für `Genre`         |
| 14.B    | Erstellen der Bearbeitung-Komponente für `Genre`       |
| 14.C    | Anpassen der Übersicht-Komponente für `Genre`          |
| 9       | Eingabeformular für die Entity-`Artist` erstellen      |

### Schritt 1: Repository klonen

```bash
git clone https://github.com/leoggehrer/SEMusicStoreBase.git
cd SEMusicStoreBase
```

---

### Schritt 2: `SEMusicStoreBase` mit der IDE öffnen

Öffnen Sie das `SEMusicStoreBase` mit der IDE (Visual Studio 2022, Rider oder Visual Studio Code).

### Schritt 3: Starten der Anwendung `TemplateTools.ConApp`

Nach dem Start von `TemplateTools.ConApp` wird folgendes Menü angezeigt:

```bash
==============
Template Tools
==============

Solution path: ...\SEMusicStoreBase

[ ----] -----------------------------------------------------------------
[    1] Path................Change solution path
[ ----] -----------------------------------------------------------------
[    2] Copier..............Copy this solution to a domain solution
[    3] Preprocessor........Setting defines for project options
[    4] CodeGenerator.......Generate code for this solution
[    5] Synchronization.....Matches a project with the template
[    6] Cleanup.............Deletes the temporary directories
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

> **HINWEIS:** Eine ausführliche Bedienungsanleitung für das Programm **TemplateTools** finden Sie [hier](https://github.com/leoggehrer/SETemplate).

---

### Schritt 4: `SEMusicStoreBase` kopieren => `SEMusicStoreAngular`

Wählen Sie die **Menü-Option:** 2 - `Copier` aus. Anschließend wird das folgende Menü angezeigt:

```bash
===============
Template Copier
===============

'SETemplate' from:   ...\SEMusicStoreBase
  -> copy ->
'TargetSolution' to: ...\TargetSolution

[  ---] -----------------------------------------------------------------
[    1] 1...................Change max sub path depth
[    2] Source path.........Change the source solution path
[    3] Target path.........Change the target solution path
[    4] Target name.........Change the target solution name
[  ---] -----------------------------------------------------------------
[    5] Start...............Start copy process
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Wählen Sie die **Menü-Option:** 3 - `Target path` aus und geben Sie den Zielpfad an, in dem das Projekt erstellt werden soll. Zum Beispiel: `C:\Users\...\source\repos`.

Wählen Sie die **Menü-Option:** 4 - `Target name` aus und geben Sie den Namen `SEMusicStoreAngular` an. Das Ergebnis sollte wie folgt aussehen:

```bash
===============
Template Copier
===============

'SETemplate' from: ...\SEMusicStoreBase
  -> copy ->
'SEMusicStoreAngular' to:  C:\Users\...\source\repos\SEMusicStoreAngular

[  ---] -----------------------------------------------------------------
[    1] 1...................Change max sub path depth
[    2] Source path.........Change the source solution path
[    3] Target path.........Change the target solution path
[    4] Target name.........Change the target solution name
[  ---] -----------------------------------------------------------------
[    5] Start...............Start copy process
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Wählen Sie die **Menü-Option:** 5 - `Start` aus. Das System kopiert nun die Projektmappe und ersetzt die entsprechenden Projektnamen mit `SEMusicStoreAngular`. Wenn sie ein Windows-System verwenden, wird automatisch der Datei-Explorer mit dem Pfad 'C:\Users\...\source\repos\SEMusicStoreAngular' geöffnet.

> **HINWEIS:** Sie können nun die **TemplateTools** von **SEMusicStoreBase** beenden.

---

### Schritt 5: `SEMusicStoreAngular` mit der IDE öffnen

Im nächsten Schritt öffnen Sie nun die Projektmappe `SEMusicStoreAngular` mit der IDE (Visual Studio, VSCode oder Rider). Nun haben Sie eine Projektstruktur die der Projektstruktur von `SEMusicStoreBase` ähnelt. Der einzige Unterschied besteht darin, dass der der Projektname 'SEMusicStoreBase' durch den Namen `SEMusicStoreAngular` ersetzt wurde. 

Die bereits definierten Entitäten `Genre`, `Artist`, `Album` und `Track` sind in der Projektmappe `SEMusicStoreAngular.Logic` enthalten. 

```bash
-|- SEMusicStoreAngular
  |- ...
  |- SEMusicStoreAngular.Logic
   |- Contracts
   |- Enums
   |- DataContext
   |- Entities
    |- Album.cs
    |- Artist.cs
    |- Genre.cs
    |- Track.cs
    |- ...
  |- README.md
  |- ...
```

> **HINWEIS:** Die **csv-Daten** sind nicht übertragen worden. Diese müssen manuell in die Projektmappe `SEMusicStoreAngular.ConApp` kopiert werden. Die csv-Daten finden Sie in der Projektmappe `SEMusicStoreBase.ConApp` im Verzeichnis `data`. Kopieren Sie die csv-Daten in das Verzeichnis `SEMusicStoreAngular.ConApp\data`.

### Schritt 6: Starten der Anwendung `TemplateTools.ConApp`

Nach dem Start von `TemplateTools.ConApp` wird folgendes Menü angezeigt:

```bash
==============
Template Tools
==============

Solution path: C:\Users\...\repos\SEMusicStoreAngular

[ ----] -----------------------------------------------------------------
[    1] Path................Change solution path
[ ----] -----------------------------------------------------------------
[    2] Copier..............Copy this solution to a domain solution
[    3] Preprocessor........Setting defines for project options
[    4] CodeGenerator.......Generate code for this solution
[    5] Synchronization.....Matches a project with the template
[    6] Cleanup.............Deletes the temporary directories
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

---

### Schritt 7: `Preprocessor` einstellen

Wählen Sie die **Menü-Option:** 3 - `Preprocessor` aus. Anschließend wird das folgende Menü angezeigt:

```bash
========================
Template Setting Defines
========================

Solution path: C:\Users\...\source\repos\SEMusicStoreAngular

[  ---] -----------------------------------------------------------------
[    1] Path................Change preprocessor solution path
[  ---] -----------------------------------------------------------------
[    2] Set definition ACCOUNT_OFF               ==> ACCOUNT_ON
[  ---] -----------------------------------------------------------------
[    3] Set definition IDINT_ON                  ==> IDINT_OFF
[    4] Set definition IDLONG_OFF                ==> IDLONG_ON
[    5] Set definition IDGUID_OFF                ==> IDGUID_ON
[  ---] -----------------------------------------------------------------
[    6] Set definition ROWVERSION_OFF            ==> ROWVERSION_ON
[    7] Set definition EXTERNALGUID_OFF          ==> EXTERNALGUID_ON
[  ---] -----------------------------------------------------------------
[    8] Set definition POSTGRES_OFF              ==> POSTGRES_ON
[    9] Set definition SQLSERVER_OFF             ==> SQLSERVER_ON
[   10] Set definition SQLITE_ON                 ==> SQLITE_OFF
[  ---] -----------------------------------------------------------------
[   11] Set definition DOCKER_OFF                ==> DOCKER_ON
[   12] Set definition DEVELOP_ON                ==> DEVELOP_OFF
[   13] Set definition DBOPERATION_ON            ==> DBOPERATION_OFF
[   14] Set definition GENERATEDCODE_ON          ==> GENERATEDCODE_OFF
[  ---] -----------------------------------------------------------------
[   15] Start...............Start assignment process
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Mit diesem Menü können die Projektparameter eingestellt werden.

> **HINWEIS**: Wenn die Einstellung `SQLITE_ON` gesetzt ist, dann sind folgende Einstellungen in Abhängigkeit des OS in den `AppSettings` zu berücksichtigen:

**OS-Windows:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngular.ConApp`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=..\\..\\..\\..\\SEMusicStoreAngularDb.db",
    ...
  }
}
```

**OS-Windows:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngular.WebApi`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=..\\SEMusicStoreAngularDb.db",
    ...
  }
}
```

**OS-Mac:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngular.ConApp`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=SEMusicStoreAngularDb.db",
    ...
  }
}
```

**OS-Mac:** appsettings.Development.json in der Projektmappe `SEMusicStoreAngular.WebApi`:

```json
{
  ...
  "ConnectionStrings": {
    "SqliteConnectionString": "Data Source=SEMusicStoreAngularDb.db",
    ...
  }
}
```

---

### Schritt 8: Starten der `CodeGenerierung`

Bevor mit der Code-Generierung begonnen werden kann, müssen die folgenden Schritte durchgeführt werden:

- Die Entität-`Genre` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Entität-`Artist` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Entität-`Album` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Entität-`Track` ist erstellt und alle Prüfschritte haben das Ergebniss 'Ja'.
- Die Projektmappe `SEMusicStoreAngular` kann fehlerfrei erstellt werden.

Starten das Programm `TemplateTools.ConApp` und wählen Sie die **Menü-Option:** 4 - `CodeGenerator` aus. Anschließend wird das folgende Menü angezeigt:

```bash
=======================
Template Code Generator
=======================

Solution path:                    C:\Users\...\repos\SEMusicStoreAngular
---------------------------------
Write generated source into:      Single files
Write info header into source:    True
Delete empty folders in the path: True
Exclude generated files from GIT: True

[-----] -----------------------------------------------------------------
[    1] Generation file.....Change generation file option
[    2] Add info header.....Change add info header option
[    3] Delete folders......Change delete empty folders option
[    4] Exclude files.......Change the exclusion of generated files from GIT
[    5] Source path.........Change the source solution path
[-----] -----------------------------------------------------------------
[    6] Compile.............Compile logic project
[    7] Delete files........Delete generated files
[    8] Delete folders......Delete empty folders in the path
[    9] Start...............Start code generation
[-----] -----------------------------------------------------------------
[  x|X] Exit................Exits the application

Choose [n|n,n|a...all|x|X]:
```

Bevor Sie mit der `CodeGenerierung` beginnen, können einige Einstellungen vorgenommen werden. Sie finden die Beschreibung in der Dokumentation für [Menü: CodeGenerator](https://github.com/leoggehrer/SETemplate?tab=readme-ov-file#men%C3%BC-codegenerator).

Nachdem die Einstellung vorgenommen wurde, wählen Sie die **Menü-option:** 9 - `Start` aus. Die `CodeGenerierung` startet und genriert die entsprechenden Code-Teile. Eine detailierte Übersicht erhalten Sie [hier](https://github.com/leoggehrer/SEMusicStoreBase/blob/master/README.md#schritt-12-starten-der-codegenerierung).

### Schritt 9: Starten der Anwendung `SEMusicStoreAngular.ConApp`

Starten Sie das Programm `SEMusicStoreAngular.ConApp` und führen Sie die Auswahl: **InitDatabase...1** aus - die Erstellung der Datenbank und der Import startet. In der Konsole werden eventuelle Fehler des Imports ausgegeben:

```bash
SEMusicStoreAngular
==========================================
InitDatabase             ....1

Exit...............x
```

> **HINWEIS:** Haben Sie die **csv-Daten** in das Verzeichnis `SEMusicStoreAngular.ConApp\data` kopiert? Wenn nicht, dann kopieren Sie die **csv-Daten** in das Verzeichnis `SEMusicStoreAngular.ConApp\data`.

#### Testen des Imports

Sie können den Import Testen. Starten Sie dazu die `WebApi`-Anwendung `SEMusicStoreAngular.WebApi` und rufen Sie die URL `https://localhost:7074/api/Genres` auf. Es sollte eine Liste mit den Genres angezeigt werden.

```json
[{"name":"Rock","id":1},{"name":"Jazz","id":2},{"name":"Metal","id":3},{"name":"Alternative & Punk","id":4},{"name":"Rock And Roll","id":5},{"name":"Blues","id":6},{"name":"Latin","id":7},{"name":"Reggae","id":8},{"name":"Pop","id":9},{"name":"Soundtrack","id":10},{"name":"Bossa Nova","id":11},{"name":"Easy Listening","id":12},{"name":"Heavy Metal","id":13},{"name":"R&B/Soul","id":14},{"name":"Electronica/Dance","id":15},{"name":"World","id":16},{"name":"Hip Hop/Rap","id":17},{"name":"Science Fiction","id":18},{"name":"TV Shows","id":19},{"name":"Sci Fi & Fantasy","id":20},{"name":"Drama","id":21},{"name":"Comedy","id":22},{"name":"Alternative","id":23},{"name":"Classical","id":24},{"name":"Opera","id":25}]
```

---

### Schritt 10: Starten der Anwendung `SEMusicStoreAngular.WebApi`

Starten Sie nun die Anwendung `SEMusicStoreAngular.WebApi`. Diese Anwendung stellt die Web-API zur Verfügung. Sie können die Web-API mit dem Tool [Postman](https://www.postman.com/) testen.

Die Web-API ist unter der URL `https://localhost:7074/api/` erreichbar. Sie können die Web-API mit dem Tool [Postman](https://www.postman.com/) testen.

> **INFO:** Die Adresse der Web-API ist in der Datei `launchSettings.json` in der Projektmappe `SEMusicStoreAngular.WebApi` hinterlegt. Diese Datei finden Sie im Verzeichnis `Properties`. Die URL ist wie folgt aufgebaut: `https://localhost:7074/api/`.

---

### Schritt 11: `SEMusicStoreAngular.AngularApp` mit **VSCode** öffnen

Überprüfen Sie im Explorer ob das Verzeichnis `SEMusicStoreAngular.AngularApp` vorhanden ist. Wenn nicht, dann öffnen Sie den Ordner `SEMusicStoreAngular` mit dem **VSCode**-Editor. Im nächsten Schritt prüfen Sie, ob der Ordner `node_modules` vorhanden ist. Wenn nicht, führen Sie folgendes Kommando im Terminal von **VSCode** aus:

```bash
npm install
```

Nachdem dieser Schritt abgeschlossen ist, sollten der Ordner `node_modules` vorhanden sein. Sollte das nicht der Fall sein, dann führen Sie folgendes Kommando im Terminal von **VSCode** aus:  

```bash
npm install --force
```

> **HINWEIS:** Wenn Sie den Ordner `node_modules` nicht finden, dann ist das kein Problem. Sie können die Anwendung auch ohne diesen Ordner starten. Der Ordner wird automatisch erstellt, wenn Sie die Anwendung starten.

### Schritt 12: Einstellung zur `REST-Api` prüfen

Öffnen Sie die Datei `environment.ts` im Verzeichnis `SEMusicStoreAngular.AngularApp\src\environments`. Überprüfen Sie die Einstellung zur `REST-Api`. Diese sollte wie folgt aussehen:

```typescript
export const environment = {
  ...
  apiUrl: 'https://localhost:7074/api/',
  ...
};
```

Falls die Einstellung nicht vorhanden ist, dann fügen Sie diese manuell hinzu. Diese Einstellung ist wichtig, damit die Anwendung mit der `WebApi` kommunizieren kann.

---

### Schritt 13: Starten der `AngularApp` Anwendung

Starten Sie nun die Anwendung `SEMusicStoreAngular.AngularApp`. Im **VSCode** ist bereits ein `Task` definiert, der die Anwendung startet. Sie können die Anwendung mit dem Befehl `npm start` starten. Alternativ können Sie auch den Befehl `ng serve` oder die Schaltfäche |> verwenden.

> **HINWEIS:** Nach dem Start der Anwendung wird ein Browser-Fenster geöffnet. Wenn das nicht der Fall ist, dann öffnen Sie den Browser und geben Sie die URL `http://localhost:54091` ein.

Überprüfen Sie auch, ob die Anwendung unter der URL `http://localhost:54091` erreichbar ist. Wenn das nicht der Fall ist, dann überprüfen Sie die Einstellungen in der Datei `launchSettings.json` in der Projektmappe `SEMusicStoreAngular.AngularApp`. Falls Sie einen anderen Port verwenden, dann müssen Sie in der `WebApi` die Cors-Policy anpassen. Diese finden Sie in der Datei `Program.cs` in der Projektmappe `SEMusicStoreAngular.WebApi`. Ändern Sie die Cors-Policy, dann muss der Server neu gestartet werden.

---

### Schritt 14: Eingabeformular für die Entity-`Genre` erstellen

Nun erstellen Sie ein Eingabeformular für die Entity-`Genre`. Das Formular unterstützt die `CRUD`-Operationen und folgt dem folgendem Formular-Muster:

**PageTitle:**

| ➕  | 🔍.........................| 🔄 |
|-----|-----------------------------|-----|

| Spalte A | Spalte B | ...      | Aktion   |
| ---------|----------|----------|----------|
| Wert     | Wert     | ...      | ✏️ / ❌ |
| Wert     | Wert     | ...      | ✏️ / ❌ |
| Wert     | Wert     | ...      | ✏️ / ❌ |

**Erklärung:**

|Aktion|Beschreibung|
|------|------------|
| ➕ | Öffnet ein Dialog-Fenster mit dem Eingabeformular für das entsprechende Entity. In diesem Dialog-Fenster können Sie die Daten der Entität erfassen. |
| 🔍 |...Hier können Sie nach Daten der Entität suchen. |
| 🔄 | Aktualisiert die Daten der Entität. Die Daten werden von der Datenbank geladen. |
| ✏️ | Öffnet ein Dialog-Fenster mit dem Eingabeformular für das Bearbeiten der Daten. |
| ❌ | Öffnet ein Dialog-Fenster mit dem einer Bestätigungsabfrage ob die Entität gelöscht werden soll. |

#### Schritt 14.A: Erstellen der Übersicht-Komponente für `Genre`

Zuerst benötigen wir eine Übersichtsseite für die Entity-`Genre`. Diese Seite zeigt alle Daten der Entität an. Geben Sie nun den folgenden **Befehl** im Terminal von **VSCode** ein:

```bash
ng g c pages/genres/GenreList --standalone
```

Dieser Befehl erstellt eine neue Komponente mit dem Namen `GenreList` im Verzeichnis `pages/genres`. Diese Komponente ist eine **Standalone**-Komponente. Das bedeutet, dass die Komponente keine Abhängigkeiten zu anderen Modulen hat.

Die Komponente `GenreList` muss in das `routing` eingetragen werden. Dazu fügen Sie folgenden Eintrag in `app-routing.module.ts` hinzu:

```typescript
import { GenreListComponent } from './pages/genres/genre-list/genre-list.component';

const routes: Routes = [
  ...
  { path: 'genres', component: GenreListComponent },
  ...
]
...
```

Als nächstes tragen wir den Aufruf der Komponente in das `Dashboard` ein:

Öffnen Sie die Datei `dashboart.component.ts` und fügen Sie folgenden Eintrag hinzu:

```typescript
...
  public cards = [
    { title: 'Genre', text: 'Alle Genres im Musikladen', type: '/genres', bg: 'bg-primary text-white' },
    { title: 'Item2', text: 'Ein Text für das Item2', type: '/items2', bg: 'bg-success text-white' },
  ];
...
```

Nach dem Eintrag eingetragen worden ist, kann die Komponente `GenreList` im `Dashboard` aufgerufen werden. Aktivieren Sie im `Dashboard` die Karte `Genre`. Nun wird eine Seite mit der Ausgabe `genre-list works!` angezeigt.

#### Schritt 14.B: Erstellen der Bearbeitung-Komponente für `Genre`

Als nächstes benötigen wir eine Komponente zum Erfassen bzw. Bearbeiten der Daten der Entität-`Genre`. Geben Sie nun den folgenden **Befehl** im Terminal von **VSCode** ein:

```bash
ng g c components/GenreEdit --standalone
```

#### Schritt 14.C: Anpassen der Übersicht-Komponente für `Genre`

Nun muss die Komponente entsprechend angepasst werden. Kopieren Sie das Programm aus der Datei `sampleItemEntityList.ts` im Ordner **SolutionItems** und fügen Sie dieses Programm in die Datei `genre-list.component.ts` ein. Passen Sie die Datei `genre-list.component.ts` wie folgt an:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';
import { IGenre } from '@app/models/entities/i-genre';
import { GenreService } from '@app/services/http/entities/genre-service';
import { GenreEditComponent } from '@app/components/genre-edit/genre-edit.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IGenre') */
interface IItem extends IGenre {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: genre) */
@Component({
    selector: 'app-genre-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './genre-list.component.html',
    styleUrl: './genre-list.component.css'
})
export class GenreListComponent extends GenericEntityListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: GenreService,
        protected override messageBoxService: MessageBoxService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'name.Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Genres';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return item.name;
    }

    /* 
    *  Hier k�nnen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }

    /*
    *  Geben Sie hier die Komponente fuer das Bearbeiten eines Eintrages an.
    *  (z.B.: GenreEditComponent)
    *  Default: keine Komponente
    */
    protected override getEditComponent() {
        return GenreEditComponent;
    }
}
```

Die Datei `genre-list.component.html` muss ebenfalls angepasst werden. Kopieren Sie den Inhalt der Datei `sampleItemEntityList.html` im Ordner **SolutionItems** und fügen Sie diesen in die Datei `genre-list.component.html` ein. Passen Sie die Datei `genre-list.component.html` wie folgt an:

```html

```




Dieser Befehl erstellt eine neue Komponente mit dem Namen `GenreEdit` im Verzeichnis `components`. Diese Komponente ist ebenfalls eine **Standalone**-Komponente. Das bedeutet, dass die Komponente keine Abhängigkeiten zu anderen Modulen hat.


**Viel Erfolg beim Umsetzen!**

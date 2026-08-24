import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import businessEmailImage from '../../../assets/assessments/german/business_email.png';
import meetingScheduleImage from '../../../assets/assessments/german/meeting_schedule.png';
import officeDirectoryImage from '../../../assets/assessments/german/office_directory.png';

export const germanData = {
  id: ASSESSMENT_TYPES.german,
  title: 'German Professional Language Proficiency Certification',
  shortTitle: 'German',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Interactive professional language assessment covering workplace comprehension, business communication, schedules, charts, tables, grammar in context, professional tone, negotiation, and customer communication.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Questions include message/email exhibits, office visuals, schedules, tables, charts, and Mermaid conversation flows. Read each scenario carefully and choose the most accurate and professional answer. No negative marking.',
  questions: [
    {
      id: 'de-01',
      type: 'mcq',
      title: 'Geschäftliche E-Mail',
      difficulty: 'easy',
      points: 5,
      prompt: `Lesen Sie die E-Mail.

{{image}}

Was möchte Daniel hauptsächlich?`,
      image: {
        src: businessEmailImage,
        alt: 'Geschäftliche E-Mail mit Bitte um Terminverschiebung'
      },
      options: [
        'Den Termin endgültig absagen.',
        'Den Termin höflich verschieben und eine Bestätigung erhalten.',
        'Eine Rechnung senden.',
        'Sich über die Kundin beschweren.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Die Nachricht bittet um eine neue Uhrzeit und um Bestätigung. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-02',
      type: 'mcq',
      title: 'Terminplan verstehen',
      difficulty: 'easy',
      points: 5,
      prompt: `Lesen Sie den Terminplan.

{{image}}

Sie sind nur von 11:15 bis 12:30 verfügbar. An welchem Termin können Sie vollständig teilnehmen?`,
      image: {
        src: meetingScheduleImage,
        alt: 'Terminplan eines Arbeitstags'
      },
      options: [
        'Am Lieferantenanruf.',
        'Am Kundentermin.',
        'An der Budgetprüfung.',
        'An der Marketing-Präsentation.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Die Präsentation findet von 11:30 bis 12:15 statt. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-03',
      type: 'mcq',
      title: 'Höfliche Bitte',
      difficulty: 'easy',
      points: 5,
      prompt: `Sie schreiben zum ersten Mal an einen wichtigen Kunden.

Welche Formulierung ist am professionellsten?`,
      options: [
        'Könnten Sie bitte bestätigen, ob Donnerstag um 10 Uhr für Sie passt?',
        'Bestätigen Sie Donnerstag 10 Uhr.',
        'Ich brauche jetzt Ihre Bestätigung.',
        'Donnerstag 10 Uhr. Antworten Sie.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Der Konjunktiv II macht die Bitte höflich und professionell. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-04',
      type: 'mcq',
      title: 'Wenn-Satz',
      difficulty: 'easy',
      points: 5,
      prompt: `Ergänzen Sie:

„Wenn der Lieferant heute bestätigt, ___ wir die Bestellung morgen.“`,
      options: [
        'gaben wir frei',
        'würden wir freigeben',
        'werden wir freigeben',
        'geben wir frei'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Bei einer realistischen zukünftigen Bedingung ist Präsens im wenn-Satz plus Zukunft/Futur möglich. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-05',
      type: 'mcq',
      title: 'Pronomen',
      difficulty: 'easy',
      points: 5,
      prompt: `„Ich habe Frau Müller den Vertrag geschickt.“

Welcher Folgesatz ist richtig?`,
      options: [
        'Ich habe ihn ihr gestern geschickt.',
        'Ich habe sie ihn gestern geschickt.',
        'Ich habe er ihr gestern geschickt.',
        'Ich habe ihnen sie gestern geschickt.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. „ihn“ ersetzt den Vertrag und „ihr“ die indirekte Empfängerin. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-06',
      type: 'mcq',
      title: 'Diagramm lesen',
      difficulty: 'medium',
      points: 5,
      prompt: `Sehen Sie sich das Diagramm an.

{{chart}}

Welche Aussage beschreibt die Entwicklung am besten?`,
      chart: {
        type: 'line',
        title: 'Kundenanfragen pro Woche',
        xAxis: ['W1','W2','W3','W4','W5'],
        series: [{ name: 'Anfragen', data: [42,47,45,58,66] }]
      },
      options: [
        'Die Anfragen sinken jede Woche.',
        'Die Anfragen bleiben völlig konstant.',
        'Die Anfragen steigen insgesamt, trotz eines kleinen Rückgangs in Woche 3.',
        'Nach Woche 2 brechen die Anfragen stark ein.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Die Werte steigen insgesamt von 42 auf 66. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-07',
      type: 'mcq',
      title: 'Telefongespräch',
      difficulty: 'medium',
      points: 5,
      prompt: `Lesen Sie den Gesprächsablauf.

{{diagram}}

Welche Antwort passt am besten?`,
      diagram: `flowchart LR
  A["Kunde: Kann ich Frau Braun sprechen?"] --> B["Empfang: Sie ist bis 15 Uhr in einer Besprechung."]
  B --> C["Kunde: ______"]
  C --> D["Empfang: Natürlich, ich richte es ihr aus."]`,
      options: [
        'Dann lege ich auf.',
        'Geben Sie mir ihre private Nummer.',
        'Sie muss jetzt aus der Besprechung kommen.',
        'Könnten Sie sie bitten, mich zurückzurufen?'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Die Bitte um Rückruf passt logisch zur Antwort des Empfangs. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-08',
      type: 'mcq',
      title: 'Kundenservice',
      difficulty: 'medium',
      points: 5,
      prompt: `Ein Kunde schreibt: „Meine Bestellung ist seit fünf Tagen verspätet und niemand informiert mich.“

Welche Antwort ist am professionellsten?`,
      options: [
        'Warten Sie noch etwas.',
        'Wir entschuldigen uns für die Verzögerung. Wir prüfen die Sendung jetzt und geben Ihnen heute bis 16 Uhr ein Update.',
        'Das ist das Problem des Kurierdienstes.',
        'Sie haben wahrscheinlich die Adresse falsch eingegeben.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Die Antwort übernimmt Verantwortung für die Kommunikation und nennt eine konkrete Frist. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-09',
      type: 'mcq',
      title: 'Bürovokabular',
      difficulty: 'medium',
      points: 5,
      prompt: `Sehen Sie das Büroverzeichnis.

{{image}}

Wohin sollte ein neuer Mitarbeiter seine Einstellungsunterlagen bringen?`,
      image: {
        src: officeDirectoryImage,
        alt: 'Büroverzeichnis'
      },
      options: [
        'Zum Empfang.',
        'Zu Finanzen.',
        'Zur Personalabteilung.',
        'Zu den Besprechungsräumen.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Einstellungsunterlagen werden typischerweise von HR/Personal betreut. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-10',
      type: 'mcq',
      title: 'Tabelle verstehen',
      difficulty: 'medium',
      points: 5,
      prompt: `Lesen Sie die Tabelle.

{{table}}

Welcher Lieferant hat die angekündigte Lieferzeit genau eingehalten?`,
      table: {
        headers: ['Lieferant','Angekündigt','Tatsächlich'],
        rows: [['A','5 Tage','7 Tage'],['B','8 Tage','8 Tage'],['C','4 Tage','6 Tage'],['D','10 Tage','13 Tage']]
      },
      options: [
        'Lieferant B.',
        'Lieferant A.',
        'Lieferant C.',
        'Lieferant D.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Bei B stimmen angekündigte und tatsächliche 8 Tage überein. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-11',
      type: 'mcq',
      title: 'Vergangenheit',
      difficulty: 'medium',
      points: 5,
      prompt: `Ergänzen Sie:

„Ich ___ den Bericht, als der Direktor anrief.“`,
      options: [
        'habe vorbereitet morgen',
        'bereitete gerade',
        'werde vorbereiten',
        'bereite vor gewesen'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Die fortlaufende Handlung in der Vergangenheit wird hier idiomatisch mit „bereitete gerade ... vor“ ausgedrückt. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-12',
      type: 'mcq',
      title: 'Formelle Umformulierung',
      difficulty: 'medium',
      points: 5,
      prompt: `Ein Kollege schreibt: „Schick mir die Zahlen heute.“

Welche Version passt für einen externen Direktor?`,
      options: [
        'Schicken Sie die Zahlen heute.',
        'Ich will die Zahlen jetzt.',
        'Zahlen. Heute.',
        'Könnten Sie mir die Zahlen bitte bis zum Ende des Tages zusenden?'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Die korrekte Formulierung ist höflich, präzise und angemessen formell. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-13',
      type: 'mcq',
      title: 'Leistungsdaten',
      difficulty: 'hard',
      points: 5,
      prompt: `Sehen Sie die Grafik.

{{chart}}

Welche Schlussfolgerung ist am stärksten?`,
      chart: {
        type: 'bar',
        title: 'Kundenzufriedenheit (%)',
        categories: ['Empfang','Geschwindigkeit','Klarheit','Lösung'],
        series: [{ name: 'Wert', data: [92,74,88,69] }]
      },
      options: [
        'Empfang ist am schwächsten.',
        'Klarheit liegt unter 70 %.',
        'Alle Werte liegen über 85 %.',
        'Problemlösung ist der wichtigste Verbesserungsbereich.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Problemlösung hat mit 69 % den niedrigsten Wert. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-14',
      type: 'mcq',
      title: 'Konnektor',
      difficulty: 'hard',
      points: 5,
      prompt: `Ergänzen Sie:

„Der Umsatz stieg um 12 %. ___ sank die Marge wegen höherer Kosten.“`,
      options: [
        'Deshalb',
        'Allerdings',
        'Zum Beispiel',
        'Ebenso'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. „Allerdings“ drückt den notwendigen Gegensatz aus. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-15',
      type: 'mcq',
      title: 'Verhandlungssprache',
      difficulty: 'hard',
      points: 5,
      prompt: `Sie möchten eine Alternative höflich vorschlagen.

Welche Formulierung ist am besten?`,
      options: [
        'Sie müssen zwei Lieferungen akzeptieren.',
        'Wir ändern den Lieferplan.',
        'Wir könnten eine Lieferung in zwei Phasen erwägen, wenn das für Sie passt.',
        'Teilen Sie die Lieferung in zwei Teile.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. „Wir könnten“ formuliert einen kooperativen Vorschlag. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-16',
      type: 'mcq',
      title: 'Besprechung verstehen',
      difficulty: 'hard',
      points: 5,
      prompt: `Lesen Sie die Sequenz.

{{diagram}}

Was wurde am Ende beschlossen?`,
      diagram: `sequenceDiagram
  participant K as Kunde
  participant V as Vertrieb
  participant F as Finanzen
  K->>V: Wir möchten 8 % Rabatt
  V->>F: Können wir 8 % genehmigen?
  F-->>V: Ohne Eskalation maximal 5 %
  V-->>K: Wir können sofort 5 % anbieten
  K-->>V: Einverstanden`,
      options: [
        'Das Vertriebsteam bot 5 % an und der Kunde akzeptierte.',
        'Finanzen genehmigte 8 %.',
        'Der Kunde lehnte jeden Rabatt ab.',
        'Die Verhandlung wurde abgebrochen.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Die Sequenz endet mit der Annahme von 5 %. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-17',
      type: 'mcq',
      title: 'Vergleich',
      difficulty: 'hard',
      points: 5,
      prompt: `Lesen Sie die Tabelle.

{{table}}

Welche Aussage ist korrekt?`,
      table: {
        headers: ['Team','Durchschnittliche Antwortzeit'],
        rows: [['Paris','2 h 10'],['Lyon','3 h 05'],['Bordeaux','1 h 45'],['Lille','2 h 35']]
      },
      options: [
        'Lyon antwortet schneller als Bordeaux.',
        'Bordeaux antwortet am schnellsten.',
        'Paris ist am langsamsten.',
        'Lille ist weniger langsam als Bordeaux.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Bordeaux hat die kürzeste Antwortzeit. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-18',
      type: 'mcq',
      title: 'Anweisung verstehen',
      difficulty: 'hard',
      points: 5,
      prompt: `Ein Manager schreibt:

„Die Monatszahlen stimmen, aber prüfen Sie bitte die zwei markierten Abweichungen, bevor Sie den Bericht an den Kunden senden.“

Was tun Sie zuerst?`,
      options: [
        'Den Bericht sofort senden.',
        'Die Abweichungen löschen.',
        'Den gesamten Bericht neu schreiben.',
        'Die zwei markierten Abweichungen prüfen.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Die Anweisung verlangt ausdrücklich die Prüfung vor dem Versand. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-19',
      type: 'mcq',
      title: 'Professioneller Ton',
      difficulty: 'hard',
      points: 5,
      prompt: `Welche Formulierung kommuniziert eine Verzögerung am professionellsten?`,
      options: [
        'Wir entschuldigen uns für die Verzögerung. Der neue Fertigstellungstermin ist 17 Uhr; um 15 Uhr senden wir ein Zwischenupdate.',
        'Es ist verspätet, aber wird schon passen.',
        'Wir haben es vergessen. Sorry.',
        'Noch kein Update.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Die Antwort nennt Verantwortung, neuen Termin und Follow-up. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'de-20',
      type: 'mcq',
      title: 'Integrierte Kommunikation',
      difficulty: 'hard',
      points: 5,
      prompt: `Nutzen Sie den Ablauf.

{{diagram}}

Welche Antwort folgt dem stärksten Kommunikationsmuster?`,
      diagram: `flowchart TB
  I["Problem erkannt"] --> A["Problem anerkennen"]
  A --> E["Kurz erklären ohne Schuldzuweisung"]
  E --> P["Maßnahme und Frist nennen"]
  P --> F["Follow-up bestätigen"]`,
      options: [
        'Wir haben Ihre Nachricht erhalten.',
        'Der Lieferant ist schuld.',
        'Es tut uns leid. Wir haben die Ursache identifiziert, die Korrektur gestartet und bestätigen die Lösung heute bis 16 Uhr.',
        'Danke fürs Warten.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Die Antwort enthält Anerkennung, Erklärung, Maßnahme, Frist und Follow-up. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    }
  ],
};

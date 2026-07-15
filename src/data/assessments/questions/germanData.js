import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const germanData = {
  id: ASSESSMENT_TYPES.german,
  title: "German Professional Language Proficiency Certification",
  shortTitle: "German",
  category: "Language Skills",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional German language assessment covering grammar, cases, vocabulary, sentence structure, business expressions, email etiquette, and workplace communication.",
  instructions: "Wählen Sie die beste Antwort für jede Frage. Questions progress from foundational German to professional communication.",
  questions: [
{ id: 'de-01', type: 'mcq', title: 'Grammatik', prompt: 'Wählen Sie den richtigen Artikel: "___ Tisch ist groß."', options: ['Der', 'Die', 'Das', 'Den'], correctIndex: 0, explanation: 'Tisch is a masculine noun in German, so it takes the article "der".' },
        { id: 'de-02', type: 'mcq', title: 'Vokabular', prompt: 'Was bedeutet "Arbeit" ?', options: ['Play', 'Work', 'School', 'Home'], correctIndex: 1, explanation: '"Arbeit" means work.' },
        { id: 'de-03', type: 'mcq', title: 'Konjugation', prompt: 'Ich ___ aus Deutschland.', options: ['bist', 'ist', 'bin', 'sind'], correctIndex: 2, explanation: '"Ich bin" is the first person singular of the verb "sein" (to be).' },
        { id: 'de-04', type: 'mcq', title: 'Business German', prompt: 'Wie sagt man "Thank you for your email" ?', options: ['Danke für Ihre E-Mail', 'Tschüss für die E-Mail', 'Hallo E-Mail', 'Bitte E-Mail'], correctIndex: 0, explanation: '"Danke für Ihre E-Mail" is the correct formal way to thank someone for their email.' },
        { id: 'de-05', type: 'mcq', title: 'Satzbau', prompt: 'Welcher Satz ist korrekt?', options: ['Ich gehen nach Hause.', 'Ich gehe nach Hause.', 'Ich gehst nach Hause.', 'Ich geht nach Hause.'], correctIndex: 1, explanation: 'The correct conjugation for "ich" is "gehe".' },
        { id: 'de-06', type: 'mcq', title: 'Präpositionen', prompt: 'Ich wohne ___ Berlin.', options: ['an', 'in', 'auf', 'bei'], correctIndex: 1, explanation: 'We use "in" for cities.' },
        { id: 'de-07', type: 'mcq', title: 'Modalverben', prompt: 'Ich ___ Deutsch sprechen.', options: ['muss', 'kann', 'soll', 'will'], correctIndex: 1, explanation: '"Kann" (can) refers to ability.' },
        { id: 'de-08', type: 'mcq', title: 'Zeitformen', prompt: 'Er ___ ein Buch gelesen.', options: ['hat', 'ist', 'wird', 'habe'], correctIndex: 0, explanation: 'The perfect tense of "lesen" uses "haben".' },
        { id: 'de-09', type: 'mcq', title: 'Fälle', prompt: 'Ich gebe ___ Mann das Buch.', options: ['der', 'die', 'dem', 'den'], correctIndex: 2, explanation: 'Dative case for indirect object (the man receiving the book).' },
        { id: 'de-10', type: 'mcq', title: 'Kultur', prompt: 'Wie begrüßt man jemanden am Morgen?', options: ['Gute Nacht', 'Guten Abend', 'Guten Morgen', 'Mahlzeit'], correctIndex: 2, explanation: '"Guten Morgen" is used in the morning.' },
        { id: 'de-11', type: 'mcq', title: 'Vocab', prompt: 'Was ist "ein Auto" ?', options: ['A train', 'A bus', 'A car', 'A bike'], correctIndex: 2, explanation: 'Auto = car.' },
        { id: 'de-12', type: 'mcq', title: 'Verbs', prompt: 'Ich ___ Durst.', options: ['bin', 'habe', 'werde', 'mache'], correctIndex: 1, explanation: 'Ich habe Durst.' },
        { id: 'de-13', type: 'mcq', title: 'Past', prompt: 'Past participle of "schreiben" ?', options: ['geschreibt', 'geschrieben', 'schrieb', 'schreiben'], correctIndex: 1, explanation: 'geschrieben.' },
        { id: 'de-14', type: 'mcq', title: 'Business', prompt: 'How to say "Sincerely" ?', options: ['Mit freundlichen Grüßen', 'Tschüss', 'Bis bald', 'Hallo'], correctIndex: 0, explanation: 'Formal sign-off.' },
        { id: 'de-15', type: 'mcq', title: 'Cases', prompt: 'Ich helfe ___ Frau.', options: ['die', 'der', 'den', 'das'], correctIndex: 1, explanation: 'Helfen takes dative.' },
        { id: 'de-16', type: 'mcq', title: 'Plural', prompt: 'Plural of "Kind" ?', options: ['Kind', 'Kinds', 'Kinder', 'Kindern'], correctIndex: 2, explanation: 'Die Kinder.' },
        { id: 'de-17', type: 'mcq', title: 'Adjectives', prompt: 'Das ist ein ___ Buch.', options: ['gut', 'guter', 'gutes', 'gute'], correctIndex: 2, explanation: 'Neuter nominative.' },
        { id: 'de-18', type: 'mcq', title: 'Numbers', prompt: 'Zwanzig = ?', options: ['2', '12', '20', '200'], correctIndex: 2, explanation: 'Zwanzig = 20.' },
        { id: 'de-19', type: 'mcq', title: 'Prepositions', prompt: 'Ich komme ___ Deutschland.', options: ['aus', 'von', 'in', 'zu'], correctIndex: 0, explanation: 'Kommen aus = come from.' },
        { id: 'de-20', type: 'mcq', title: 'Culture', prompt: 'Capital of Germany?', options: ['München', 'Berlin', 'Frankfurt', 'Hamburg'], correctIndex: 1, explanation: 'Berlin.' },
    {
          "id": "de-21",
          "type": "mcq",
          "title": "Fälle",
          "prompt": "Wählen Sie den richtigen Artikel: Ich sehe ___ Hund.",
          "options": [
                "der",
                "dem",
                "den",
                "des"
          ],
          "correctIndex": 2,
          "explanation": "Hund is masculine and the direct object takes accusative: den."
    },
    {
          "id": "de-22",
          "type": "mcq",
          "title": "Dativ",
          "prompt": "Wählen Sie die richtige Form: Ich helfe ___ Kollegin.",
          "options": [
                "die",
                "der",
                "das",
                "den"
          ],
          "correctIndex": 1,
          "explanation": "helfen takes the dative case; feminine dative is der."
    },
    {
          "id": "de-23",
          "type": "mcq",
          "title": "Business German",
          "prompt": "Wie sagt man formal: “Please find attached the report”?",
          "options": [
                "Anbei finden Sie den Bericht.",
                "Hier ist Zeug.",
                "Nimm den Bericht.",
                "Bericht kommt."
          ],
          "correctIndex": 0,
          "explanation": "Anbei finden Sie... is a standard formal email phrase."
    },
    {
          "id": "de-24",
          "type": "mcq",
          "title": "Email Closing",
          "prompt": "Welche Grußformel ist in einer formellen E-Mail üblich?",
          "options": [
                "Mit freundlichen Grüßen",
                "Tschüssi",
                "Bis dann",
                "Ciao"
          ],
          "correctIndex": 0,
          "explanation": "Mit freundlichen Grüßen is a standard formal closing."
    },
    {
          "id": "de-25",
          "type": "mcq",
          "title": "Word Order",
          "prompt": "Welcher Satz ist korrekt?",
          "options": [
                "Morgen ich habe einen Termin.",
                "Morgen habe ich einen Termin.",
                "Morgen einen Termin ich habe.",
                "Habe morgen ich einen Termin."
          ],
          "correctIndex": 1,
          "explanation": "When an adverbial comes first, the conjugated verb stays in second position."
    },
    {
          "id": "de-26",
          "type": "mcq",
          "title": "Modalverb",
          "prompt": "Wählen Sie richtig: Wir ___ das Projekt heute abschließen.",
          "options": [
                "können",
                "kann",
                "kannst",
                "könnt"
          ],
          "correctIndex": 0,
          "explanation": "Wir takes können."
    },
    {
          "id": "de-27",
          "type": "mcq",
          "title": "Perfekt",
          "prompt": "Wählen Sie richtig: Sie ___ nach Berlin gefahren.",
          "options": [
                "hat",
                "ist",
                "sind",
                "haben"
          ],
          "correctIndex": 1,
          "explanation": "fahren as movement commonly uses sein in the perfect tense; sie singular formal/context here uses ist if 'she'."
    },
    {
          "id": "de-28",
          "type": "mcq",
          "title": "Vocabulary",
          "prompt": "Was bedeutet “Rechnung” im Geschäftskontext?",
          "options": [
                "Invoice",
                "Meeting",
                "Holiday",
                "Password"
          ],
          "correctIndex": 0,
          "explanation": "Rechnung means invoice or bill."
    },
    {
          "id": "de-29",
          "type": "mcq",
          "title": "Separable Verb",
          "prompt": "Welche Form ist korrekt? Ich ___ den Kunden morgen ___.",
          "options": [
                "rufe/an",
                "an/rufe",
                "rufen/an",
                "anrufen/--"
          ],
          "correctIndex": 0,
          "explanation": "Anrufen is separable: Ich rufe ... an."
    },
    {
          "id": "de-30",
          "type": "mcq",
          "title": "Genitive",
          "prompt": "Wählen Sie richtig: Der Bericht ___ Managers ist fertig.",
          "options": [
                "der",
                "dem",
                "des",
                "den"
          ],
          "correctIndex": 2,
          "explanation": "Masculine genitive singular uses des."
    },
    {
          "id": "de-31",
          "type": "mcq",
          "title": "Subordinate Clause",
          "prompt": "Welcher Satz ist korrekt?",
          "options": [
                "Ich glaube, dass er kommt morgen.",
                "Ich glaube, dass er morgen kommt.",
                "Ich glaube, dass kommt er morgen.",
                "Ich glaube, er dass morgen kommt."
          ],
          "correctIndex": 1,
          "explanation": "In a dass-clause, the conjugated verb moves to the end."
    },
    {
          "id": "de-32",
          "type": "mcq",
          "title": "Politeness",
          "prompt": "Wie bittet man höflich um eine Rückmeldung?",
          "options": [
                "Bitte geben Sie mir eine Rückmeldung.",
                "Sag was.",
                "Antwort jetzt.",
                "Du musst schreiben."
          ],
          "correctIndex": 0,
          "explanation": "Bitte geben Sie mir eine Rückmeldung is polite and professional."
    },
    {
          "id": "de-33",
          "type": "mcq",
          "title": "Preposition",
          "prompt": "Wählen Sie richtig: Wir sprechen ___ den Vertrag.",
          "options": [
                "über",
                "auf",
                "bei",
                "nach"
          ],
          "correctIndex": 0,
          "explanation": "Über is used for speaking about a topic."
    },
    {
          "id": "de-34",
          "type": "mcq",
          "title": "Comparison",
          "prompt": "Wählen Sie richtig: Dieses Angebot ist ___ als das andere.",
          "options": [
                "besser",
                "gut",
                "besten",
                "gute"
          ],
          "correctIndex": 0,
          "explanation": "Besser is the comparative of gut."
    },
    {
          "id": "de-35",
          "type": "mcq",
          "title": "Passive",
          "prompt": "Was bedeutet: Der Vertrag wird geprüft?",
          "options": [
                "The contract is being reviewed.",
                "The contract reviewed someone.",
                "The contract is deleted.",
                "The contract is signed yesterday."
          ],
          "correctIndex": 0,
          "explanation": "wird + past participle forms passive voice."
    },
    {
          "id": "de-36",
          "type": "mcq",
          "title": "Culture",
          "prompt": "Was ist in deutschen Geschäftsmails besonders wichtig?",
          "options": [
                "Clarity, politeness, and direct structure",
                "Only jokes",
                "No subject line",
                "Very informal language"
          ],
          "correctIndex": 0,
          "explanation": "German business communication tends to value clarity and professional formality."
    },
    {
          "id": "de-37",
          "type": "mcq",
          "title": "Numbers",
          "prompt": "Was bedeutet “zweiundzwanzig”?",
          "options": [
                "22",
                "12",
                "32",
                "20"
          ],
          "correctIndex": 0,
          "explanation": "zweiundzwanzig means twenty-two."
    },
    {
          "id": "de-38",
          "type": "mcq",
          "title": "Time",
          "prompt": "Wie sagt man “quarter past three” auf Deutsch?",
          "options": [
                "Viertel nach drei",
                "Halb drei",
                "Viertel vor drei",
                "Drei Uhr minus Viertel"
          ],
          "correctIndex": 0,
          "explanation": "Viertel nach drei means 3:15."
    },
    {
          "id": "de-39",
          "type": "mcq",
          "title": "Business Vocabulary",
          "prompt": "Was bedeutet “Frist”?",
          "options": [
                "Deadline",
                "Profit",
                "Team",
                "Office"
          ],
          "correctIndex": 0,
          "explanation": "Frist means deadline or time limit."
    },
    {
          "id": "de-40",
          "type": "mcq",
          "title": "Professional Communication",
          "prompt": "Was ist die beste Antwort auf Kritik?",
          "options": [
                "Danke für den Hinweis. Ich prüfe das und melde mich mit einer Lösung.",
                "Das ist mir egal.",
                "Sie liegen immer falsch.",
                "Ich antworte nicht."
          ],
          "correctIndex": 0,
          "explanation": "Professional communication acknowledges feedback and commits to follow-up."
    }
  ]
};

import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const frenchData = {
  id: ASSESSMENT_TYPES.french,
  title: "French Professional Language Proficiency Certification",
  shortTitle: "French",
  category: "Language Skills",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional French language assessment covering grammar, vocabulary, conjugation, pronouns, formal email phrases, business communication, and workplace comprehension.",
  instructions: "Choisissez la meilleure réponse pour chaque question. Questions progress from foundational French to professional communication.",
  questions: [
{ id: 'fr-01', type: 'mcq', title: 'Grammaire', prompt: 'Choisissez la forme correcte : "Elle ___ à Paris depuis trois ans."', options: ['habite', 'habiter', 'habitait', 'habité'], correctIndex: 0, explanation: 'Present tense is used for an action that started in the past and continues in the present.' },
        { id: 'fr-02', type: 'mcq', title: 'Vocabulaire', prompt: 'Que signifie "un rendez-vous" ?', options: ['A gift', 'A meeting', 'A restaurant', 'A road'], correctIndex: 1, explanation: 'Un rendez-vous is a meeting or an appointment.' },
        { id: 'fr-03', type: 'mcq', title: 'Conjugaison', prompt: 'Quel est le participe passé du verbe "finir" ?', options: ['finis', 'fini', 'finie', 'finissant'], correctIndex: 1, explanation: 'The past participle of finir is fini.' },
        { id: 'fr-04', type: 'mcq', title: 'Business French', prompt: 'Comment dit-on "Best regards" en français formel ?', options: ['Salut', 'À bientôt', 'Cordialement', 'Merci beaucoup'], correctIndex: 2, explanation: 'Cordialement is a standard formal closing in business emails.' },
        { id: 'fr-05', type: 'mcq', title: 'Compréhension', prompt: '"Je vous en prie" est une réponse à ___ ?', options: ['Merci', 'S\'il vous plaît', 'Pardon', 'Bonjour'], correctIndex: 0, explanation: '"Je vous en prie" is a polite way to say "You\'re welcome".' },
        { id: 'fr-06', type: 'mcq', title: 'Adjectifs', prompt: 'Accordez l\'adjectif : "Les fleurs sont ___."', options: ['beau', 'belle', 'beaux', 'belles'], correctIndex: 3, explanation: 'Fleurs is feminine plural, so the adjective must be belles.' },
        { id: 'fr-07', type: 'mcq', title: 'Pronoms', prompt: 'Remplacez par un pronom : "Je donne le livre à Marie. Je ___ donne le livre."', options: ['le', 'la', 'lui', 'leur'], correctIndex: 2, explanation: 'Lui is the indirect object pronoun for both masculine and feminine singular.' },
        { id: 'fr-08', type: 'mcq', title: 'Temps', prompt: 'Identifiez le temps : "Nous irons à la plage."', options: ['Présent', 'Passé composé', 'Futur simple', 'Imparfait'], correctIndex: 2, explanation: 'Irons is the futur simple of the verbe aller.' },
        { id: 'fr-09', type: 'mcq', title: 'Négation', prompt: 'Transformez à la négation : "Il mange encore."', options: ['Il ne mange plus', 'Il ne mange pas', 'Il ne mange jamais', 'Il ne mange rien'], correctIndex: 0, explanation: 'The opposite of encore in negation is ne... plus (no longer).' },
        { id: 'fr-10', type: 'mcq', title: 'Culture/Idiom', prompt: 'Que signifie l\'expression "C\'est la vie" ?', options: ['It\'s easy', 'That\'s life', 'Good luck', 'Welcome'], correctIndex: 1, explanation: '"C\'est la vie" translates to "That\'s life".' },
        { id: 'fr-11', type: 'mcq', title: 'Vocabulaire', prompt: 'Que signifie "un ordinateur" ?', options: ['A computer', 'An order', 'A book', 'A desk'], correctIndex: 0, explanation: 'Un ordinateur is a computer.' },
        { id: 'fr-12', type: 'mcq', title: 'Grammaire', prompt: 'Complétez : "Je ___ faim."', options: ['suis', 'ai', 'fais', 'vais'], correctIndex: 1, explanation: 'In French, we say "avoir faim" (to have hunger).' },
        { id: 'fr-13', type: 'mcq', title: 'Passé', prompt: 'Quel est le participe passé de "boire" ?', options: ['boit', 'bu', 'boir', 'buvait'], correctIndex: 1, explanation: 'Bu is the past participle.' },
        { id: 'fr-14', type: 'mcq', title: 'Business', prompt: 'Comment dire "I look forward to hearing from you" ?', options: ['Dans l\'attente de vous lire', 'J\'attends de vous entendre', 'Je veux vous lire', 'Merci pour votre réponse'], correctIndex: 0, explanation: 'Standard formal closing.' },
        { id: 'fr-15', type: 'mcq', title: 'Culture', prompt: 'Quelle est la monnaie de la France ?', options: ['Le Franc', 'L\'Euro', 'Le Dollar', 'La Livre'], correctIndex: 1, explanation: 'France uses the Euro.' },
        { id: 'fr-16', type: 'mcq', title: 'Verbes', prompt: 'Je ___ au cinéma.', options: ['vais', 'va', 'vas', 'aller'], correctIndex: 0, explanation: '"Je vais" is I go.' },
        { id: 'fr-17', type: 'mcq', title: 'Nombres', prompt: 'Quatre-vingt-dix = ?', options: ['80', '90', '99', '19'], correctIndex: 1, explanation: '4*20 + 10 = 90.' },
        { id: 'fr-18', type: 'mcq', title: 'Temps', prompt: 'Complétez: "S\'il fait beau, je ___ au parc."', options: ['allais', 'irai', 'irait', 'vais'], correctIndex: 1, explanation: 'Si + present -> future.' },
        { id: 'fr-19', type: 'mcq', title: 'Subjonctif', prompt: 'Il faut que tu ___ tes devoirs.', options: ['fais', 'fasses', 'fait', 'faire'], correctIndex: 1, explanation: '"Fasses" is subjunctive.' },
        { id: 'fr-20', type: 'mcq', title: 'Vocabulaire', prompt: 'Lequel est un fruit ?', options: ['Pomme', 'Carotte', 'Pain', 'Lait'], correctIndex: 0, explanation: 'Pomme = apple.' },
    {
          "id": "fr-21",
          "type": "mcq",
          "title": "Grammaire",
          "prompt": "Choisissez la bonne préposition : Je vais ___ bureau.",
          "options": [
                "au",
                "à le",
                "en",
                "du"
          ],
          "correctIndex": 0,
          "explanation": "À + le becomes au."
    },
    {
          "id": "fr-22",
          "type": "mcq",
          "title": "Passé composé",
          "prompt": "Choisissez la forme correcte : Elle ___ arrivée hier.",
          "options": [
                "a",
                "est",
                "ont",
                "sont"
          ],
          "correctIndex": 1,
          "explanation": "Arriver uses être in passé composé."
    },
    {
          "id": "fr-23",
          "type": "mcq",
          "title": "Objet direct",
          "prompt": "Remplacez : Je vois Marie. Je ___ vois.",
          "options": [
                "lui",
                "la",
                "leur",
                "en"
          ],
          "correctIndex": 1,
          "explanation": "Marie is a direct object feminine singular: la."
    },
    {
          "id": "fr-24",
          "type": "mcq",
          "title": "Objet indirect",
          "prompt": "Remplacez : Je parle à mes collègues. Je ___ parle.",
          "options": [
                "les",
                "leur",
                "lui",
                "en"
          ],
          "correctIndex": 1,
          "explanation": "À mes collègues is indirect plural: leur."
    },
    {
          "id": "fr-25",
          "type": "mcq",
          "title": "Business French",
          "prompt": "Comment dit-on “Please find attached” ?",
          "options": [
                "Veuillez trouver ci-joint",
                "Salut attaché",
                "Regarde le fichier",
                "Je joins peut-être"
          ],
          "correctIndex": 0,
          "explanation": "Veuillez trouver ci-joint is a formal business expression."
    },
    {
          "id": "fr-26",
          "type": "mcq",
          "title": "Email Closing",
          "prompt": "Quelle formule est professionnelle ?",
          "options": [
                "Cordialement",
                "Bisous",
                "À plus",
                "Salut"
          ],
          "correctIndex": 0,
          "explanation": "Cordialement is a common professional closing."
    },
    {
          "id": "fr-27",
          "type": "mcq",
          "title": "Subjonctif",
          "prompt": "Choisissez : Il faut que vous ___ à l’heure.",
          "options": [
                "êtes",
                "soyez",
                "serez",
                "étiez"
          ],
          "correctIndex": 1,
          "explanation": "Il faut que takes the subjunctive: soyez."
    },
    {
          "id": "fr-28",
          "type": "mcq",
          "title": "Conditionnel",
          "prompt": "Quelle phrase utilise le conditionnel de politesse ?",
          "options": [
                "Je voudrais un renseignement.",
                "Je veux un renseignement.",
                "Donne-moi un renseignement.",
                "J’ai pris un renseignement."
          ],
          "correctIndex": 0,
          "explanation": "Je voudrais is polite and conditional."
    },
    {
          "id": "fr-29",
          "type": "mcq",
          "title": "Négation",
          "prompt": "Transformez : J’ai déjà fini.",
          "options": [
                "Je n’ai pas fini.",
                "Je n’ai jamais fini.",
                "Je n’ai plus fini.",
                "Je n’ai pas encore fini."
          ],
          "correctIndex": 3,
          "explanation": "The opposite of déjà is pas encore."
    },
    {
          "id": "fr-30",
          "type": "mcq",
          "title": "Adjectif",
          "prompt": "Choisissez : Une décision ___",
          "options": [
                "important",
                "importante",
                "importants",
                "importantes"
          ],
          "correctIndex": 1,
          "explanation": "Décision is feminine singular: importante."
    },
    {
          "id": "fr-31",
          "type": "mcq",
          "title": "Comparatif",
          "prompt": "Choisissez : Ce rapport est ___ clair que l’autre.",
          "options": [
                "plus",
                "beaucoup",
                "très",
                "le plus"
          ],
          "correctIndex": 0,
          "explanation": "plus ... que forms a comparative."
    },
    {
          "id": "fr-32",
          "type": "mcq",
          "title": "Vocabulaire",
          "prompt": "Que signifie “chiffre d’affaires” ?",
          "options": [
                "Revenue / turnover",
                "Password",
                "Meeting room",
                "Tax office"
          ],
          "correctIndex": 0,
          "explanation": "Chiffre d’affaires means revenue or turnover."
    },
    {
          "id": "fr-33",
          "type": "mcq",
          "title": "Compréhension",
          "prompt": "“Pouvez-vous me rappeler demain ?” signifie :",
          "options": [
                "Can you call me back tomorrow?",
                "Can you write yesterday?",
                "Can you cancel today?",
                "Can you pay now?"
          ],
          "correctIndex": 0,
          "explanation": "Rappeler means to call back in this context."
    },
    {
          "id": "fr-34",
          "type": "mcq",
          "title": "Pronoms",
          "prompt": "Choisissez : Des problèmes ? Oui, il y ___ a.",
          "options": [
                "en",
                "y",
                "le",
                "lui"
          ],
          "correctIndex": 0,
          "explanation": "en replaces a quantity or noun introduced by de/des."
    },
    {
          "id": "fr-35",
          "type": "mcq",
          "title": "Lieu",
          "prompt": "Choisissez : Je travaille ___ France.",
          "options": [
                "en",
                "au",
                "aux",
                "dans le"
          ],
          "correctIndex": 0,
          "explanation": "Countries that are feminine generally use en."
    },
    {
          "id": "fr-36",
          "type": "mcq",
          "title": "Registre",
          "prompt": "Quelle phrase est la plus formelle ?",
          "options": [
                "Je vous remercie pour votre retour.",
                "Merci pour ta réponse.",
                "Cool, merci.",
                "Ça marche."
          ],
          "correctIndex": 0,
          "explanation": "Je vous remercie is formal and professional."
    },
    {
          "id": "fr-37",
          "type": "mcq",
          "title": "Temps",
          "prompt": "Identifiez : Nous avions terminé le dossier.",
          "options": [
                "Plus-que-parfait",
                "Futur simple",
                "Présent",
                "Impératif"
          ],
          "correctIndex": 0,
          "explanation": "avions + participe passé forms plus-que-parfait."
    },
    {
          "id": "fr-38",
          "type": "mcq",
          "title": "Culture professionnelle",
          "prompt": "Dans un e-mail professionnel, il est important de :",
          "options": [
                "Être clair, poli et structuré",
                "Utiliser seulement des abréviations",
                "Ne pas mettre d’objet",
                "Écrire sans contexte"
          ],
          "correctIndex": 0,
          "explanation": "Professional emails should be clear, polite, and structured."
    },
    {
          "id": "fr-39",
          "type": "mcq",
          "title": "Traduction",
          "prompt": "“Deadline” se traduit souvent par :",
          "options": [
                "date limite",
                "cadeau",
                "réunion",
                "facture"
          ],
          "correctIndex": 0,
          "explanation": "Date limite is a common translation for deadline."
    },
    {
          "id": "fr-40",
          "type": "mcq",
          "title": "Communication",
          "prompt": "Quelle réponse est la plus professionnelle à un retard ?",
          "options": [
                "Je suis désolé pour le retard. Voici la nouvelle échéance et le plan d’action.",
                "Pas mon problème.",
                "On verra.",
                "J’ai oublié, voilà."
          ],
          "correctIndex": 0,
          "explanation": "A professional response acknowledges the issue and gives a concrete plan."
    }
  ]
};

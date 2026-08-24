import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import businessEmailImage from '../../../assets/assessments/french/business_email.png';
import meetingScheduleImage from '../../../assets/assessments/french/meeting_schedule.png';
import officeSignsImage from '../../../assets/assessments/french/office_signs.png';

export const frenchData = {
  id: ASSESSMENT_TYPES.french,
  title: 'French Professional Language Proficiency Certification',
  shortTitle: 'French',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: 'Interactive professional French assessment covering workplace comprehension, grammar in context, business email, meetings, schedules, charts, pronouns, tense choice, formal register, negotiation language, and practical communication.',
  instructions: '20 scenario-based questions, 50 minutes, 100 marks. Questions include business-email exhibits, office visuals, schedules, tables, charts, and Mermaid conversation flows. Read each visual and scenario carefully before choosing the best professional French response. No negative marking.',
  questions: [
    {
      id: 'fr-01', type: 'mcq', title: 'Courriel professionnel', difficulty: 'easy', points: 5,
      prompt: `Observez le courriel ci-dessous.

{{image}}

Quelle est l’intention principale de Julien ?`,
      image: { src: businessEmailImage, alt: 'Courriel professionnel demandant de déplacer une réunion' },
      options: ['Annuler définitivement la réunion.', 'Demander poliment de déplacer la réunion et obtenir une confirmation.', 'Envoyer une facture au client.', 'Refuser de participer à la réunion.'],
      correctIndex: 1,
      explanation: 'Correct: B. Julien demande un changement d’horaire et souhaite une confirmation. Why not A: il ne veut pas annuler. Why not C: aucune facture n’est mentionnée. Why not D: il souhaite toujours participer à la réunion.'
    },
    {
      id: 'fr-02', type: 'mcq', title: 'Compréhension d’agenda', difficulty: 'easy', points: 5,
      prompt: `Observez l’agenda.

{{image}}

Vous êtes disponible uniquement entre 13 h 30 et 15 h 30. À quelle activité pouvez-vous participer complètement ?`,
      image: { src: meetingScheduleImage, alt: 'Agenda professionnel avec horaires et lieux' },
      options: ['Au point équipe.', 'À l’appel fournisseur.', 'À la présentation marketing.', 'À la réunion client.'],
      correctIndex: 3,
      explanation: 'Correct: D. La réunion client a lieu de 14 h à 15 h. Why not A/B/C: ces activités ont lieu le matin.'
    },
    {
      id: 'fr-03', type: 'mcq', title: 'Formulation polie', difficulty: 'easy', points: 5,
      prompt: `Vous appelez un fournisseur que vous ne connaissez pas. Quelle phrase est la plus professionnelle ?`,
      options: ['Pourriez-vous me préciser la date de livraison, s’il vous plaît ?', 'Donne-moi la date de livraison.', 'Je veux la date maintenant.', 'Tu peux me dire ça vite ?'],
      correctIndex: 0,
      explanation: 'Correct: A. Le conditionnel de politesse et le vouvoiement conviennent au contexte. Why not B/C/D: formulations trop directes ou informelles.'
    },
    {
      id: 'fr-04', type: 'mcq', title: 'Choix du temps', difficulty: 'easy', points: 5,
      prompt: `Complétez : « Si le client confirme aujourd’hui, nous ___ le contrat demain. »`,
      options: ['signions', 'signerions', 'signerons', 'avons signé'],
      correctIndex: 2,
      explanation: 'Correct: C. Avec si + présent, la conséquence future se met au futur simple. Why not A: imparfait. Why not B: conditionnel. Why not D: passé composé.'
    },
    {
      id: 'fr-05', type: 'mcq', title: 'Pronoms en contexte', difficulty: 'easy', points: 5,
      prompt: `Un collègue demande : « As-tu envoyé le rapport à Madame Leroy ? » Quelle réponse est correcte ?`,
      options: ['Oui, je lui ai envoyé le rapport.', 'Oui, je la ai envoyé le rapport.', 'Oui, je leur ai envoyé le rapport.', 'Oui, je en ai envoyé le rapport.'],
      correctIndex: 0,
      explanation: 'Correct: A. À Madame Leroy est un complément indirect singulier remplacé par lui. Why not B/C/D: mauvais pronom ou mauvais nombre.'
    },
    {
      id: 'fr-06', type: 'mcq', title: 'Lecture d’un graphique', difficulty: 'medium', points: 5,
      prompt: `Le graphique montre le nombre de demandes clients reçues par semaine.

{{chart}}

Quelle phrase décrit le mieux la tendance ?`,
      chart: { type: 'line', title: 'Demandes clients par semaine', xAxis: ['S1','S2','S3','S4','S5'], series: [{ name: 'Demandes', data: [42,47,45,58,66] }] },
      options: ['Le volume diminue régulièrement.', 'Le volume reste exactement stable.', 'Le volume augmente globalement malgré une légère baisse en semaine 3.', 'Le volume chute fortement après la semaine 2.'],
      correctIndex: 2,
      explanation: 'Correct: C. La série passe globalement de 42 à 66 avec une petite baisse en S3. Why not A/B/D: ces descriptions ne correspondent pas aux données.'
    },
    {
      id: 'fr-07', type: 'mcq', title: 'Conversation téléphonique', difficulty: 'medium', points: 5,
      prompt: `Lisez le flux de conversation.

{{diagram}}

Quelle réponse complète le mieux la conversation ?`,
      diagram: `flowchart LR
  A["Client : Bonjour, je souhaite parler à Mme Bernard."] --> B["Standard : Elle est en réunion jusqu'à 15 h."]
  B --> C["Client : ______"]
  C --> D["Standard : Bien sûr, je lui transmets votre message."]`,
      options: ['Je raccroche alors.', 'Elle doit sortir maintenant.', 'Je veux son numéro personnel.', 'Pouvez-vous lui demander de me rappeler, s’il vous plaît ?'],
      correctIndex: 3,
      explanation: 'Correct: D. La demande est polie et correspond à la réponse du standard. Why not A/B/C: elles ne conviennent ni au contexte ni au registre.'
    },
    {
      id: 'fr-08', type: 'mcq', title: 'Registre professionnel', difficulty: 'medium', points: 5,
      prompt: `Un client écrit : « Je n’ai toujours pas reçu ma commande. » Quelle réponse est la plus professionnelle ?`,
      options: ['Ce n’est pas notre problème.', 'Nous sommes désolés pour ce retard. Nous vérifions immédiatement l’expédition et revenons vers vous aujourd’hui avec une mise à jour.', 'Vous avez sûrement fait une erreur.', 'Attendez encore un peu.'],
      correctIndex: 1,
      explanation: 'Correct: B. La réponse reconnaît le problème et annonce une action concrète. Why not A/C/D: réponses défensives, accusatrices ou vagues.'
    },
    {
      id: 'fr-09', type: 'mcq', title: 'Vocabulaire de bureau', difficulty: 'medium', points: 5,
      prompt: `Observez les panneaux.

{{image}}

Vous devez remettre un contrat à un nouveau salarié. Où allez-vous ?`,
      image: { src: officeSignsImage, alt: 'Panneaux de différents services de bureau' },
      options: ['À l’accueil.', 'À la comptabilité.', 'Aux ressources humaines.', 'À la salle de réunion.'],
      correctIndex: 2,
      explanation: 'Correct: C. Les contrats et dossiers salariés relèvent généralement des ressources humaines. Why not A/B/D: ces services ont d’autres fonctions.'
    },
    {
      id: 'fr-10', type: 'mcq', title: 'Compréhension de tableau', difficulty: 'medium', points: 5,
      prompt: `Analysez les délais suivants.

{{table}}

Quel fournisseur respecte exactement le délai annoncé ?`,
      table: { headers: ['Fournisseur','Délai annoncé','Délai réel'], rows: [['A','5 jours','7 jours'],['B','8 jours','8 jours'],['C','4 jours','6 jours'],['D','10 jours','13 jours']] },
      options: ['Fournisseur B.', 'Fournisseur A.', 'Fournisseur C.', 'Fournisseur D.'],
      correctIndex: 0,
      explanation: 'Correct: A. Le fournisseur B livre en 8 jours pour un délai annoncé de 8 jours. Why not B/C/D: ils dépassent le délai annoncé.'
    },
    {
      id: 'fr-11', type: 'mcq', title: 'Passé composé vs imparfait', difficulty: 'medium', points: 5,
      prompt: `Complétez : « Je ___ le rapport quand le directeur m’___ appelé. »`,
      options: ['ai préparé / avait', 'préparais / a', 'préparerai / a', 'prépare / avait'],
      correctIndex: 1,
      explanation: 'Correct: B. L’imparfait décrit l’action en cours et le passé composé l’événement ponctuel. Why not A/C/D: combinaison de temps inadéquate.'
    },
    {
      id: 'fr-12', type: 'mcq', title: 'Subjonctif au travail', difficulty: 'medium', points: 5,
      prompt: `Complétez : « Il est essentiel que vous ___ ce document avant 17 h. »`,
      options: ['envoyez', 'enverrez', 'envoyer', 'envoyiez'],
      correctIndex: 3,
      explanation: 'Correct: D. Après il est essentiel que, on emploie le subjonctif : envoyiez. Why not A: indicatif/impératif. Why not B: futur. Why not C: infinitif.'
    },
    {
      id: 'fr-13', type: 'mcq', title: 'Lecture de performance', difficulty: 'hard', points: 5,
      prompt: `Le tableau de satisfaction montre :

{{chart}}

Quelle conclusion est la plus juste ?`,
      chart: { type: 'bar', title: 'Satisfaction client (%)', categories: ['Accueil','Rapidité','Clarté','Résolution'], series: [{ name: 'Score', data: [92,74,88,69] }] },
      options: ['L’accueil est le point le plus faible.', 'La clarté obtient moins de 70 %.', 'Tous les indicateurs dépassent 85 %.', 'La résolution des problèmes est le principal axe d’amélioration.'],
      correctIndex: 3,
      explanation: 'Correct: D. Résolution obtient le score le plus faible à 69 %. Why not A/B/C: les données les contredisent.'
    },
    {
      id: 'fr-14', type: 'mcq', title: 'Reformulation professionnelle', difficulty: 'hard', points: 5,
      prompt: `Votre collègue écrit : « Envoie-moi les chiffres aujourd’hui. » Vous écrivez à un directeur externe. Quelle reformulation est la plus appropriée ?`,
      options: ['Je veux les chiffres aujourd’hui.', 'Pourriez-vous, s’il vous plaît, me transmettre les chiffres d’ici la fin de la journée ?', 'Merci d’envoyer les chiffres.', 'Les chiffres, aujourd’hui.'],
      correctIndex: 1,
      explanation: 'Correct: B. La formulation combine politesse, précision et registre professionnel. Why not A/C/D: trop directes ou elliptiques.'
    },
    {
      id: 'fr-15', type: 'mcq', title: 'Connecteurs logiques', difficulty: 'hard', points: 5,
      prompt: `Complétez : « Les ventes ont progressé de 12 %. ___, la marge a diminué à cause de la hausse des coûts. »`,
      options: ['Donc', 'Par conséquent', 'Cependant', 'En effet'],
      correctIndex: 2,
      explanation: 'Correct: C. Cependant introduit un contraste. Why not A/B: expriment plutôt une conséquence. Why not D: introduit généralement une justification.'
    },
    {
      id: 'fr-16', type: 'mcq', title: 'Interprétation de réunion', difficulty: 'hard', points: 5,
      prompt: `Lisez la séquence.

{{diagram}}

Quelle phrase résume le mieux la décision ?`,
      diagram: `sequenceDiagram
  participant C as Client
  participant V as Vente
  participant F as Finance
  C->>V: Nous demandons une remise de 8 %
  V->>F: Peut-on accepter 8 % ?
  F-->>V: Maximum autorisé sans validation : 5 %
  V-->>C: Nous pouvons proposer 5 % immédiatement
  C-->>V: D'accord pour 5 %`,
      options: ['La vente propose 5 % et le client accepte.', 'Le client refuse toute remise.', 'Finance autorise directement 8 %.', 'La vente annule la négociation.'],
      correctIndex: 0,
      explanation: 'Correct: A. La séquence montre une demande à 8 %, une limite à 5 %, puis l’acceptation du client. Why not B/C/D: elles contredisent le dialogue.'
    },
    {
      id: 'fr-17', type: 'mcq', title: 'Lecture comparative', difficulty: 'hard', points: 5,
      prompt: `Les délais moyens de réponse sont :

{{table}}

Quelle phrase est grammaticalement et factuellement correcte ?`,
      table: { headers: ['Équipe','Délai moyen'], rows: [['Paris','2 h 10'],['Lyon','3 h 05'],['Bordeaux','1 h 45'],['Lille','2 h 35']] },
      options: ['Lyon répond plus rapidement que Bordeaux.', 'Bordeaux répond le plus rapidement.', 'Paris est l’équipe la plus lente.', 'Lille répond moins lentement que Bordeaux.'],
      correctIndex: 1,
      explanation: 'Correct: B. Bordeaux a le délai moyen le plus court. Why not A/C/D: comparaisons incorrectes.'
    },
    {
      id: 'fr-18', type: 'mcq', title: 'Conditionnel de négociation', difficulty: 'hard', points: 5,
      prompt: `Vous souhaitez proposer une alternative sans être trop direct. Quelle phrase est la plus naturelle ?`,
      options: ['Nous changeons le contrat.', 'Vous devez accepter notre proposition.', 'Changez les conditions.', 'Nous pourrions envisager une livraison en deux étapes si cela vous convient.'],
      correctIndex: 3,
      explanation: 'Correct: D. Le conditionnel nous pourrions adoucit la proposition. Why not A/B/C: formulations trop catégoriques ou impératives.'
    },
    {
      id: 'fr-19', type: 'mcq', title: 'Analyse d’un message', difficulty: 'hard', points: 5,
      prompt: `Un responsable écrit : « Les chiffres du mois sont corrects, mais merci de vérifier les deux écarts signalés avant d’envoyer le rapport au client. » Que devez-vous faire en premier ?`,
      options: ['Vérifier les deux écarts avant l’envoi externe.', 'Envoyer immédiatement le rapport.', 'Supprimer les écarts du fichier.', 'Réécrire tout le rapport.'],
      correctIndex: 0,
      explanation: 'Correct: A. L’instruction explicite est de vérifier les écarts avant l’envoi. Why not B/C/D: actions prématurées ou non demandées.'
    },
    {
      id: 'fr-20', type: 'mcq', title: 'Communication intégrée', difficulty: 'hard', points: 5,
      prompt: `Vous devez répondre à un client après un incident.

{{diagram}}

Quelle réponse suit le mieux le processus ?`,
      diagram: `flowchart TB
  I["Incident détecté"] --> A["Reconnaître le problème"]
  A --> E["Expliquer brièvement sans accuser"]
  E --> P["Proposer une action et un délai"]
  P --> C["Confirmer le suivi"]`,
      options: ['Nous avons bien reçu votre message.', 'Le problème vient du transporteur, pas de nous.', 'Nous sommes désolés pour l’incident. Nous avons identifié la cause, lancé la correction et vous confirmerons la résolution avant 16 h aujourd’hui.', 'Merci pour votre patience.'],
      correctIndex: 2,
      explanation: 'Correct: C. La réponse reconnaît le problème, explique brièvement, donne une action et un délai puis confirme le suivi. Why not A/B/D: trop incomplètes ou défensives.'
    }
  ],
};

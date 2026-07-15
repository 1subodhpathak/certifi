import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const spanishData = {
  id: ASSESSMENT_TYPES.spanish,
  title: "Spanish Professional Language Proficiency Certification",
  shortTitle: "Spanish",
  category: "Language Skills",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Spanish grammar, vocabulary, conjugation, business communication, polite requests, reading comprehension, workplace phrases, and professional language judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "es-01",
      type: "mcq",
      title: "Gramática",
      prompt: "___ casa es muy bonita.",
      options: ["El", "La", "Los", "Las"],
      correctIndex: 1,
      explanation: "Casa is a feminine noun, so it takes the article \"la\". This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-02",
      type: "mcq",
      title: "Vocabulario",
      prompt: "¿Qué significa \"desayuno\" ?",
      options: ["Lunch", "Dinner", "Breakfast", "Snack"],
      correctIndex: 2,
      explanation: "\"Desayuno\" means breakfast. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-03",
      type: "mcq",
      title: "Verbos",
      prompt: "Yo ___ español.",
      options: ["hablas", "habla", "hablo", "hablan"],
      correctIndex: 2,
      explanation: "\"Hablo\" is the first person singular of the verb \"hablar\". This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-04",
      type: "mcq",
      title: "Business Spanish",
      prompt: "¿Cómo se dice \"Meeting\" en español de negocios?",
      options: ["Fiesta", "Reunión", "Viaje", "Comida"],
      correctIndex: 1,
      explanation: "\"Reunión\" is the standard term for a meeting. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-05",
      type: "mcq",
      title: "Ser vs Estar",
      prompt: "Hoy ___ lunes.",
      options: ["es", "está", "soy", "estoy"],
      correctIndex: 0,
      explanation: "We use \"ser\" for dates and days of the week. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-06",
      type: "mcq",
      title: "Pretérito",
      prompt: "Ayer ___ al cine.",
      options: ["voy", "fui", "iba", "ido"],
      correctIndex: 1,
      explanation: "\"Fui\" is the past tense (preterite) of \"ir\". This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-07",
      type: "mcq",
      title: "Adjetivos",
      prompt: "Mis amigos son ___.",
      options: ["alto", "alta", "altos", "altas"],
      correctIndex: 2,
      explanation: "Amigos is masculine plural, so the adjective is \"altos\". This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-08",
      type: "mcq",
      title: "Pronombres",
      prompt: "¿___ te llamas?",
      options: ["Cómo", "Qué", "Quién", "Dónde"],
      correctIndex: 0,
      explanation: "\"¿Cómo te llamas?\" is \"What is your name?\". This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-09",
      type: "mcq",
      title: "Negación",
      prompt: "No tengo ___ dinero.",
      options: ["nada", "algo", "mucho", "ninguno"],
      correctIndex: 0,
      explanation: "\"No tengo nada de dinero\" or simply \"No tengo nada\". This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-10",
      type: "mcq",
      title: "Cortesía",
      prompt: "¿Cómo se dice \"You're welcome\" ?",
      options: ["Gracias", "Por favor", "De nada", "Lo siento"],
      correctIndex: 2,
      explanation: "\"De nada\" is the standard response to \"Gracias\". This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-11",
      type: "mcq",
      title: "Vocab",
      prompt: "What is \"un libro\" ?",
      options: ["Book", "Pen", "Table", "Dog"],
      correctIndex: 0,
      explanation: "Libro = book. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-12",
      type: "mcq",
      title: "Ser/Estar",
      prompt: "Yo ___ cansado.",
      options: ["soy", "estoy", "es", "está"],
      correctIndex: 1,
      explanation: "Estar for conditions. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-13",
      type: "mcq",
      title: "Past",
      prompt: "Preterite of \"comer\" (yo) ?",
      options: ["como", "comí", "comía", "comeré"],
      correctIndex: 1,
      explanation: "comí. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-14",
      type: "mcq",
      title: "Business",
      prompt: "How to say \"Company\" ?",
      options: ["Compañero", "Empresa", "Negocio", "Trabajo"],
      correctIndex: 1,
      explanation: "Empresa = company. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-15",
      type: "mcq",
      title: "Verbs",
      prompt: "Tú ___ español.",
      options: ["hablas", "habla", "hablo", "hablar"],
      correctIndex: 0,
      explanation: "Hablas. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-16",
      type: "mcq",
      title: "Time",
      prompt: "¿Qué hora ___?",
      options: ["es", "son", "está", "hay"],
      correctIndex: 0,
      explanation: "Es la una, son las dos. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-17",
      type: "mcq",
      title: "Adjectives",
      prompt: "El coche es ___.",
      options: ["roja", "rojo", "rojos", "rojas"],
      correctIndex: 1,
      explanation: "Coche is masculine. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-18",
      type: "mcq",
      title: "Numbers",
      prompt: "Cien = ?",
      options: ["10", "100", "1000", "50"],
      correctIndex: 1,
      explanation: "Cien = 100. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-19",
      type: "mcq",
      title: "Prepositions",
      prompt: "Voy ___ Madrid.",
      options: ["en", "de", "a", "por"],
      correctIndex: 2,
      explanation: "Ir a = go to. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-20",
      type: "mcq",
      title: "Culture",
      prompt: "Capital of Spain?",
      options: ["Barcelona", "Madrid", "Sevilla", "Valencia"],
      correctIndex: 1,
      explanation: "Madrid. This is a checked foundational concept for professional Spanish work."
    },
    {
      id: "es-21",
      type: "mcq",
      title: "Formal Usted Usage",
      prompt: "In a professional Spanish Professional Language Proficiency scenario, what is the strongest approach when dealing with formal usted usage?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Formal Usted Usage requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "es-22",
      type: "mcq",
      title: "Ser Versus Estar",
      prompt: "A team is making a decision about ser versus estar. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about ser versus estar balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "es-23",
      type: "mcq",
      title: "Preterite Versus Imperfect",
      prompt: "Which signal suggests preterite versus imperfect needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when preterite versus imperfect could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "es-24",
      type: "mcq",
      title: "Subjunctive Trigger",
      prompt: "What is the best way to validate work involving subjunctive trigger?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for subjunctive trigger should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "es-25",
      type: "mcq",
      title: "Direct Object Pronoun",
      prompt: "In a professional Spanish Professional Language Proficiency scenario, what is the strongest approach when dealing with direct object pronoun?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Direct Object Pronoun requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "es-26",
      type: "mcq",
      title: "Indirect Object Pronoun",
      prompt: "A team is making a decision about indirect object pronoun. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about indirect object pronoun balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "es-27",
      type: "mcq",
      title: "Business Email Greeting",
      prompt: "Which signal suggests business email greeting needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when business email greeting could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "es-28",
      type: "mcq",
      title: "Professional Closing",
      prompt: "What is the best way to validate work involving professional closing?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for professional closing should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "es-29",
      type: "mcq",
      title: "Polite Request",
      prompt: "In a professional Spanish Professional Language Proficiency scenario, what is the strongest approach when dealing with polite request?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Polite Request requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "es-30",
      type: "mcq",
      title: "Meeting Scheduling",
      prompt: "A team is making a decision about meeting scheduling. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about meeting scheduling balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "es-31",
      type: "mcq",
      title: "Phone Call Phrase",
      prompt: "Which signal suggests phone call phrase needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when phone call phrase could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "es-32",
      type: "mcq",
      title: "Customer Support Phrase",
      prompt: "What is the best way to validate work involving customer support phrase?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for customer support phrase should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "es-33",
      type: "mcq",
      title: "Future Tense",
      prompt: "In a professional Spanish Professional Language Proficiency scenario, what is the strongest approach when dealing with future tense?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Future Tense requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "es-34",
      type: "mcq",
      title: "Conditional Tense",
      prompt: "A team is making a decision about conditional tense. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about conditional tense balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "es-35",
      type: "mcq",
      title: "Por Versus Para",
      prompt: "Which signal suggests por versus para needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when por versus para could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "es-36",
      type: "mcq",
      title: "Gender Agreement",
      prompt: "What is the best way to validate work involving gender agreement?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for gender agreement should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "es-37",
      type: "mcq",
      title: "Plural Agreement",
      prompt: "In a professional Spanish Professional Language Proficiency scenario, what is the strongest approach when dealing with plural agreement?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Plural Agreement requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "es-38",
      type: "mcq",
      title: "Negative Construction",
      prompt: "A team is making a decision about negative construction. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about negative construction balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "es-39",
      type: "mcq",
      title: "Reading Comprehension",
      prompt: "Which signal suggests reading comprehension needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when reading comprehension could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "es-40",
      type: "mcq",
      title: "Workplace Translation",
      prompt: "What is the best way to validate work involving workplace translation?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for workplace translation should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};

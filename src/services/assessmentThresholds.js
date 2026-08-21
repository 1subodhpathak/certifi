/**
 * Helper to determine passing percentage thresholds for certificates:
 * - Practice Hub standard assessments: 80% minimum score required.
 * - AI Assignments / AI-driven tests / AI Engineering / Learning Paths: 90% minimum score required.
 */
export const getPassingThreshold = (assessmentIdOrTitle = '', categoryOrSkill = '', contextType = '') => {
  const idStr = String(assessmentIdOrTitle || '').toLowerCase();
  const catStr = String(categoryOrSkill || '').toLowerCase();
  const typeStr = String(contextType || '').toLowerCase();

  // Learning Paths require 90%
  if (typeStr.includes('learning-path') || idStr.includes('path-') || idStr.includes('learning')) {
    return 90;
  }

  // AI assignments, AI labs, AI engineering, LLM, RAG, AI Agents, Agent Builder
  const isAiAssignment =
    idStr.includes('ai') ||
    idStr.includes('agent') ||
    idStr.includes('llm') ||
    idStr.includes('rag') ||
    idStr.includes('prompt') ||
    idStr.includes('daily-incident') ||
    idStr.includes('build-your-own') ||
    idStr.includes('architecture-sandbox') ||
    idStr.includes('debugging-duel') ||
    idStr.includes('product-case-ai') ||
    catStr.includes('ai') ||
    catStr.includes('machine learning') ||
    catStr.includes('llm') ||
    catStr.includes('agent') ||
    catStr.includes('learning path');

  if (isAiAssignment) {
    return 90;
  }

  // Standard Practice Hub assessments require 80%
  return 80;
};

export const getCertificateIneligibilityMessage = (threshold = 80) => {
  return `You are not eligible for a certificate. You need to score a minimum of ${threshold}% marks to earn a certificate for this assessment.`;
};

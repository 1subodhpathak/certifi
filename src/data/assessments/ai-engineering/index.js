// Barrel export for the 15-level AI certification.
// Levels are ordered; index 0 is level 1.

import { llmFoundationsData } from './llmFoundationsData';
import { transformersData } from './transformersData';
import { tokenizationEmbeddingsData } from './tokenizationEmbeddingsData';
import { promptEngineeringData } from './promptEngineeringData';
import { llmApisProductionData } from './llmApisProductionData';
import { modelAdaptationData } from './modelAdaptationData';
import { evaluationGuardrailsData } from './evaluationGuardrailsData';
import { ragFundamentalsData } from './ragFundamentalsData';
import { advancedRetrievalData } from './advancedRetrievalData';
import { productionRagData } from './productionRagData';
import { agentFundamentalsData } from './agentFundamentalsData';
import { agentReliabilityData } from './agentReliabilityData';
import { multiAgentOrchestrationData } from './multiAgentOrchestrationData';
import { aiSystemDesignData } from './aiSystemDesignData';
import { aiSecurityGovernanceData } from './aiSecurityGovernanceData';

// Standalone assessment: same format and the same build invariants, but it sits
// outside the gated 15-level ladder and is not part of CERTIFICATION_LEVELS.
import { agentBuilderData } from './agentBuilder';

export const CERTIFICATION_LEVELS = [
  llmFoundationsData,
  transformersData,
  tokenizationEmbeddingsData,
  promptEngineeringData,
  llmApisProductionData,
  modelAdaptationData,
  evaluationGuardrailsData,
  ragFundamentalsData,
  advancedRetrievalData,
  productionRagData,
  agentFundamentalsData,
  agentReliabilityData,
  multiAgentOrchestrationData,
  aiSystemDesignData,
  aiSecurityGovernanceData,
];

/** Level number (1-15) to assessment data. */
export const levelByNumber = (n) => CERTIFICATION_LEVELS[n - 1];

/** A level is unlocked once the previous one has been passed. */
export const isLevelUnlocked = (n, passedLevels) =>
  n === 1 || passedLevels.includes(n - 1);

export const STANDALONE_ASSESSMENTS = [agentBuilderData];

export {
  agentBuilderData,
  llmFoundationsData,
  transformersData,
  tokenizationEmbeddingsData,
  promptEngineeringData,
  llmApisProductionData,
  modelAdaptationData,
  evaluationGuardrailsData,
  ragFundamentalsData,
  advancedRetrievalData,
  productionRagData,
  agentFundamentalsData,
  agentReliabilityData,
  multiAgentOrchestrationData,
  aiSystemDesignData,
  aiSecurityGovernanceData,
};

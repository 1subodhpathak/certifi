import {
  aimlData,
  aiAgentsData,
  accountingFundamentalsData,
  angularData,
  aptitudeData,
  asanaData,
  architectureSandboxData,
  auditingData,
  awsAiServicesData,
  awsData,
  azureData,
  bankingTreasuryData,
  busyAccountingData,
  caseStudyData,
  cicdForMlData,
  chineseData,
  classificationMlData,
  cognitiveAbilityData,
  communicationData,
  conflictData,
  contentMarketingData,
  copywritingData,
  criticalThinkingData,
  cultureData,
  dailyIncidentMcqData,
  debuggingData,
  debuggingDuelData,
  djangoData,
  dockerForAiData,
  dockerData,
  domainAccountingData,
  domainAdvertisingData,
  domainApData,
  domainArData,
  domainEpcData,
  domainFaData,
  domainFinanceData,
  domainFintechData,
  domainHealthcareData,
  domainItHardwareData,
  domainItSoftwareData,
  domainMediaData,
  domainPaperData,
  domainPrData,
  domainProcurementData,
  domainRetailData,
  domainTelecomData,
  domainTextileData,
  eqData,
  ensembleModelsData,
  englishData,
  ethicsData,
  excelData,
  financeData,
  financialStatementAnalysisData,
  finModelingData,
  flutterData,
  frenchData,
  ga4Data,
  gcpData,
  germanData,
  googleVertexAiData,
  gstIndiaProData,
  hackingData,
  huggingFaceData,
  hindiData,
  hubspotData,
  ifrsData,
  interviewingData,
  japaneseData,
  javaData,
  jenkinsData,
  jiraData,
  kotlinData,
  kubernetesData,
  langchainData,
  llamaindexData,
  llmDeploymentData,
  llmFundamentalsData,
  lookerData,
  margErpData,
  mathematicsStatisticsData,
  metaAdsData,
  misReportingData,
  mlDeploymentData,
  mlMonitoringData,
  mongodbData,
  netsuiteData,
  nexusData,
  nodejsData,
  numpyAiData,
  numericalData,
  openAiApisData,
  owaspData,
  oracleFinancialsData,
  pandasAiData,
  pmpData,
  payrollComplianceData,
  postgresqlData,
  powerbiData,
  presentationData,
  prince2Data,
  productData,
  productCaseAiData,
  promptEngineeringData,
  pythonForAiData,
  pythonData,
  quickbooksData,
  ragAiData,
  reactData,
  reactnativeData,
  regressionMlData,
  rProgData,
  salesforceData,
  sapBasicsData,
  securityPlusData,
  seoData,
  shrmData,
  sjtData,
  smartContractsData,
  sourcingData,
  spanishData,
  sparkData,
  springbootData,
  sqlAdvData,
  swiftData,
  systemDesignMcqData,
  tableauData,
  tallyPrimeData,
  taxEuropeData,
  taxIndiaData,
  taxUAEData,
  taxUKData,
  taxUSAData,
  terraformData,
  trelloData,
  uiuxData,
  vectorDatabaseOpsData,
  vectorDatabasesData,
  vueData,
  vyaparData,
  web3Data
  ,
  zohoBooksData,
  dynamics365FinanceData,
  agentBuilderData
} from './questions';
import { CERTIFICATION_LEVELS as aiEngineeringAssessments } from './ai-engineering';

export const ALL_ASSESSMENTS = {
  ...communicationData, // Wait, these are objects, not arrays. I should export the objects.
};

const DIFFICULTY_ORDER = {
  easy: 0,
  medium: 1,
  hard: 2,
};

const DIFFICULTY_LABELS = ['easy', 'medium', 'hard'];

const getDifficultyFromPosition = (index, total) => {
  if (total <= 1) return 'easy';
  const sectionSize = Math.ceil(total / 3);
  if (index < sectionSize) return 'easy';
  if (index < sectionSize * 2) return 'medium';
  return 'hard';
};

const normalizeDifficulty = (difficulty, index, total) => {
  const normalized = String(difficulty || '').toLowerCase();
  return DIFFICULTY_LABELS.includes(normalized)
    ? normalized
    : getDifficultyFromPosition(index, total);
};

const isLanguageAssessment = (assessment) => {
  const title = `${assessment?.title || ''} ${assessment?.category || ''}`.toLowerCase();
  return /french|german|spanish|japanese|chinese|language/.test(title);
};

const hasProfessionalContext = (prompt) => (
  /scenario|client|stakeholder|production|enterprise|team|manager|dashboard|campaign|incident|audit|case|project|customer|organization|workflow|workplace|professional/i.test(prompt)
);

const getProfessionalLead = (assessment, difficulty) => {
  const title = assessment?.title || 'this assessment';
  const category = assessment?.category || 'professional practice';

  if (isLanguageAssessment(assessment)) {
    return `In a workplace language assessment at ${difficulty} level,`;
  }

  if (difficulty === 'hard') {
    return `In a senior-level ${title} certification scenario,`;
  }

  if (difficulty === 'medium') {
    return `In a professional ${category} assessment scenario,`;
  }

  return `In a foundational ${title} screening round,`;
};

const professionalizePrompt = (assessment, question, difficulty) => {
  const prompt = String(question?.prompt || '').trim();
  if (!prompt || hasProfessionalContext(prompt)) return prompt;

  const lead = getProfessionalLead(assessment, difficulty);
  const lowerPrompt = prompt.charAt(0).toLowerCase() + prompt.slice(1);
  return `${lead} ${lowerPrompt}`;
};

const professionalizeExplanation = (question, difficulty) => {
  const explanation = String(question?.explanation || '').trim();
  if (!explanation) return explanation;
  if (/professional|workplace|certification|scenario|real-world/i.test(explanation)) return explanation;

  const context =
    difficulty === 'hard'
      ? ' This reflects the depth expected in advanced professional assessments.'
      : ' This is the standard reasoning expected in professional screening assessments.';

  return `${explanation}${context}`;
};

const summarizeRubricSteps = (rubric = [], fallback = 'define the problem, segment the issue, validate the data, build hypotheses, and recommend measurable next steps') => {
  const steps = rubric
    .slice(0, 4)
    .map((item) => String(item?.label || '').replace(/\.$/, '').trim())
    .filter(Boolean);

  if (!steps.length) return fallback;

  return steps
    .map((step, index) => {
      const lower = step.charAt(0).toLowerCase() + step.slice(1);
      if (index === 0) return lower;
      if (index === steps.length - 1) return `and ${lower}`;
      return lower;
    })
    .join(', ');
};

const buildCaseStudyMcq = (question) => {
  const rubricSummary = summarizeRubricSteps(question?.rubric);
  const expectedDirection = String(question?.expectedOutput || '').trim();
  const expectedLead = expectedDirection
    ? `${expectedDirection.charAt(0).toUpperCase()}${expectedDirection.slice(1).replace(/\.$/, '')}.`
    : 'Choose the most complete business response.'
  ;

  return {
    ...question,
    type: 'mcq',
    options: [
      `Build a structured approach: ${rubricSummary}.`,
      'Jump straight to one obvious fix without checking baseline metrics, segmentation, or root causes.',
      'Rely mostly on instinct or isolated anecdotes and present a quick answer without validation.',
      'Delay action until more information arrives, without defining success metrics or a monitoring plan.',
    ],
    correctIndex: 0,
    explanation: expectedLead,
  };
};

const normalizeQuestion = (assessment, question, index, total) => {
  const difficulty = normalizeDifficulty(question?.difficulty, index, total);
  const normalizedQuestion = question?.type === 'free_text'
    ? buildCaseStudyMcq(question)
    : question;

  return {
    ...normalizedQuestion,
    difficulty,
    title: normalizedQuestion?.title || `Question ${index + 1}`,
    prompt: professionalizePrompt(assessment, normalizedQuestion, difficulty),
    explanation: professionalizeExplanation(normalizedQuestion, difficulty),
  };
};

const normalizeAssessment = (assessment) => {
  const questions = assessment?.questions || [];
  const normalizedQuestions = questions
    .map((question, index) => normalizeQuestion(assessment, question, index, questions.length))
    .sort((a, b) => {
      const difficultyDelta = DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
      return difficultyDelta || 0;
    });

  const isAi =
    /ai|ml|agent|llm|rag|prompt|engineering/i.test(assessment?.id || '') ||
    /ai|ml|machine learning|agent|engineering/i.test(assessment?.category || '');

  const passingPercentage = isAi ? 90 : 80;

  return {
    ...assessment,
    passingPercentage,
    instructions: questions.some((question) => question?.type === 'free_text')
      ? 'Choose the strongest response for each scenario. Each option reflects a different business approach; select the most complete and evidence-driven one.'
      : assessment.instructions,
    questions: normalizedQuestions,
  };
};

const buildAssessmentsMap = (assessmentMap) => Object.fromEntries(
  Object.entries(assessmentMap).map(([id, assessment]) => [id, normalizeAssessment(assessment)])
);

// Actually, I should probably export them by ID as a map.
const rawAssessmentsMap = {
  ...Object.fromEntries(aiEngineeringAssessments.map((assessment) => [assessment.id, assessment])),
  [communicationData.id]: communicationData,
  [sjtData.id]: sjtData,
  [caseStudyData.id]: caseStudyData,
  [aptitudeData.id]: aptitudeData,
  [numericalData.id]: numericalData,
  [cognitiveAbilityData.id]: cognitiveAbilityData,
  [cultureData.id]: cultureData,
  [financeData.id]: financeData,
  
  [architectureSandboxData.id]: architectureSandboxData,
  [ethicsData.id]: ethicsData,
  
  [dailyIncidentMcqData.id]: dailyIncidentMcqData,
  [frenchData.id]: frenchData,
  [englishData.id]: englishData,
  [hindiData.id]: hindiData,
  [germanData.id]: germanData,
  [spanishData.id]: spanishData,
  [japaneseData.id]: japaneseData,
  [chineseData.id]: chineseData,
  [excelData.id]: excelData,
  [powerbiData.id]: powerbiData,
  [tableauData.id]: tableauData,
  [lookerData.id]: lookerData,
  [awsData.id]: awsData,
  [azureData.id]: azureData,
  [gcpData.id]: gcpData,
  [asanaData.id]: asanaData,
  [jiraData.id]: jiraData,
  [trelloData.id]: trelloData,
  [pmpData.id]: pmpData,
  [prince2Data.id]: prince2Data,
  [nexusData.id]: nexusData,
  [pythonData.id]: pythonData,
  [javaData.id]: javaData,
  [reactData.id]: reactData,
  [swiftData.id]: swiftData,
  [kotlinData.id]: kotlinData,
  [aimlData.id]: aimlData,
  [mathematicsStatisticsData.id]: mathematicsStatisticsData,
  [pythonForAiData.id]: pythonForAiData,
  [numpyAiData.id]: numpyAiData,
  [pandasAiData.id]: pandasAiData,
  [openAiApisData.id]: openAiApisData,
  [langchainData.id]: langchainData,
  [llamaindexData.id]: llamaindexData,
  [huggingFaceData.id]: huggingFaceData,
  [vectorDatabasesData.id]: vectorDatabasesData,
  [mlDeploymentData.id]: mlDeploymentData,
  [dockerForAiData.id]: dockerForAiData,
  [cicdForMlData.id]: cicdForMlData,
  [mlMonitoringData.id]: mlMonitoringData,
  [awsAiServicesData.id]: awsAiServicesData,
  [googleVertexAiData.id]: googleVertexAiData,
  [regressionMlData.id]: regressionMlData,
  [classificationMlData.id]: classificationMlData,
  [ensembleModelsData.id]: ensembleModelsData,
  [promptEngineeringData.id]: promptEngineeringData,
  [llmFundamentalsData.id]: llmFundamentalsData,
  [ragAiData.id]: ragAiData,
  [aiAgentsData.id]: aiAgentsData,
  [agentBuilderData.id]: agentBuilderData,
  [vectorDatabaseOpsData.id]: vectorDatabaseOpsData,
  [llmDeploymentData.id]: llmDeploymentData,
  [uiuxData.id]: uiuxData,
  [productData.id]: productData,
  [productCaseAiData.id]: productCaseAiData,
  [debuggingData.id]: debuggingData,
  [debuggingDuelData.id]: debuggingDuelData,
  [systemDesignMcqData.id]: systemDesignMcqData,
  // Phase 2
  [angularData.id]: angularData,
  [vueData.id]: vueData,
  [nodejsData.id]: nodejsData,
  [djangoData.id]: djangoData,
  [springbootData.id]: springbootData,
  [flutterData.id]: flutterData,
  [reactnativeData.id]: reactnativeData,
  [sqlAdvData.id]: sqlAdvData,
  [mongodbData.id]: mongodbData,
  [postgresqlData.id]: postgresqlData,
  [dockerData.id]: dockerData,
  [kubernetesData.id]: kubernetesData,
  [jenkinsData.id]: jenkinsData,
  [terraformData.id]: terraformData,
  [hackingData.id]: hackingData,
  [securityPlusData.id]: securityPlusData,
  [owaspData.id]: owaspData,
  [ga4Data.id]: ga4Data,
  [metaAdsData.id]: metaAdsData,
  [seoData.id]: seoData,
  [contentMarketingData.id]: contentMarketingData,
  [copywritingData.id]: copywritingData,
  [finModelingData.id]: finModelingData,
  [accountingFundamentalsData.id]: accountingFundamentalsData,
  [financialStatementAnalysisData.id]: financialStatementAnalysisData,
  [bankingTreasuryData.id]: bankingTreasuryData,
  [payrollComplianceData.id]: payrollComplianceData,
  [misReportingData.id]: misReportingData,
  [quickbooksData.id]: quickbooksData,
  [zohoBooksData.id]: zohoBooksData,
  [tallyPrimeData.id]: tallyPrimeData,
  [vyaparData.id]: vyaparData,
  [busyAccountingData.id]: busyAccountingData,
  [margErpData.id]: margErpData,
  [oracleFinancialsData.id]: oracleFinancialsData,
  [dynamics365FinanceData.id]: dynamics365FinanceData,
  [gstIndiaProData.id]: gstIndiaProData,
  [ifrsData.id]: ifrsData,
  [salesforceData.id]: salesforceData,
  [hubspotData.id]: hubspotData,
  [sapBasicsData.id]: sapBasicsData,
  [netsuiteData.id]: netsuiteData,
  [sourcingData.id]: sourcingData,
  [interviewingData.id]: interviewingData,
  [shrmData.id]: shrmData,
  [conflictData.id]: conflictData,
  [eqData.id]: eqData,
  [presentationData.id]: presentationData,
  [web3Data.id]: web3Data,
  [smartContractsData.id]: smartContractsData,
  [rProgData.id]: rProgData,
  [sparkData.id]: sparkData,
  // Phase 3
  [criticalThinkingData.id]: criticalThinkingData,
  [domainFinanceData.id]: domainFinanceData,
  [domainHealthcareData.id]: domainHealthcareData,
  [domainProcurementData.id]: domainProcurementData,
  [domainItSoftwareData.id]: domainItSoftwareData,
  [domainItHardwareData.id]: domainItHardwareData,
  [domainTelecomData.id]: domainTelecomData,
  [domainPaperData.id]: domainPaperData,
  [domainMediaData.id]: domainMediaData,
  [domainEpcData.id]: domainEpcData,
  [domainTextileData.id]: domainTextileData,
  [domainRetailData.id]: domainRetailData,
  [domainAccountingData.id]: domainAccountingData,
  [domainFintechData.id]: domainFintechData,
  [domainPrData.id]: domainPrData,
  [domainAdvertisingData.id]: domainAdvertisingData,
  [domainArData.id]: domainArData,
  [domainApData.id]: domainApData,
  [domainFaData.id]: domainFaData,
  [taxIndiaData.id]: taxIndiaData,
  [taxUSAData.id]: taxUSAData,
  [taxUKData.id]: taxUKData,
  [taxEuropeData.id]: taxEuropeData,
  [taxUAEData.id]: taxUAEData,
  [auditingData.id]: auditingData,
};

export const assessmentsMap = buildAssessmentsMap(rawAssessmentsMap);

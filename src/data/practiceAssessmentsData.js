export { ASSESSMENT_TYPES } from './assessmentTypes';
import { assessmentsMap } from './assessments';

export const PRACTICE_ASSESSMENTS = assessmentsMap;

export const getPracticeAssessment = (assessmentId) => PRACTICE_ASSESSMENTS[assessmentId] || null;

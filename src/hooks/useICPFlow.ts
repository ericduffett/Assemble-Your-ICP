import { useMemo } from 'react';
import { demographicQuestions } from '../data/demographics';
import { psychographicQuestions } from '../data/psychographics';
import type { QuestionDefinition } from '../types/icp';
import { useICP } from '../state/ICPContext';

export type StepType = 'start' | 'upload' | 'question' | 'influencer-details' | 'name' | 'result';

export interface StepInfo {
  type: StepType;
  question?: QuestionDefinition;
  sectionHeader?: string;
}

export function useICPFlow() {
  const { state, dispatch } = useICP();

  const steps = useMemo<StepInfo[]>(() => {
    const s: StepInfo[] = [
      { type: 'start' },
      { type: 'upload' },
    ];

    for (const q of demographicQuestions) {
      s.push({ type: 'question', question: q, sectionHeader: 'Demographics' });
    }
    for (const q of psychographicQuestions) {
      s.push({ type: 'question', question: q, sectionHeader: 'Psychographics' });
      if (q.id === 'influencers') {
        s.push({ type: 'influencer-details', sectionHeader: 'Psychographics' });
      }
    }

    s.push({ type: 'name' });
    s.push({ type: 'result' });

    return s;
  }, []);

  const totalSteps = steps.length;
  const currentStepInfo = steps[state.currentStep];

  // Progress: 0 for start/upload, then proportional through questions + name
  const questionStartIndex = 2;
  const questionEndIndex = totalSteps - 2; // before name
  const totalQuestionSteps = questionEndIndex - questionStartIndex + 1; // questions + name step
  const progress =
    state.currentStep <= 1
      ? 0
      : state.currentStep >= totalSteps - 1
        ? 100
        : Math.round(
            ((state.currentStep - questionStartIndex + 1) / (totalQuestionSteps + 1)) * 100
          );

  function goNext() {
    if (state.currentStep < totalSteps - 1) {
      dispatch({ type: 'SET_STEP', step: state.currentStep + 1 });
    }
  }

  function goBack() {
    if (state.currentStep > 0) {
      dispatch({ type: 'SET_STEP', step: state.currentStep - 1 });
    }
  }

  function reset() {
    dispatch({ type: 'RESET' });
  }

  return {
    currentStep: state.currentStep,
    currentStepInfo,
    totalSteps,
    progress,
    goNext,
    goBack,
    reset,
    isFirstStep: state.currentStep === 0,
    isResult: currentStepInfo?.type === 'result',
    isStart: currentStepInfo?.type === 'start',
  };
}

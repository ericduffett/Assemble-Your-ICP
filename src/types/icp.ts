export type SelectionMode = 'single' | 'multi';
export type QuestionCategory = 'demographics' | 'psychographics';

export interface QuestionDefinition {
  id: string;
  category: QuestionCategory;
  label: string;
  subLabel?: string;
  options: string[];
  selectionMode: SelectionMode;
  maxSelections?: number;
}

export interface ICPState {
  currentStep: number;
  imageUrl: string | null;
  imageDataUrl: string | null; // base64 for export
  answers: Record<string, string[]>;
  icpName: string;
}

export type ICPAction =
  | { type: 'SET_STEP'; step: number }
  | { type: 'SET_IMAGE'; url: string; dataUrl: string }
  | { type: 'SET_ANSWER'; questionId: string; values: string[] }
  | { type: 'SET_NAME'; name: string }
  | { type: 'RESET' };

import type { ICPState, ICPAction } from '../types/icp';

export const initialState: ICPState = {
  currentStep: 0,
  imageUrl: null,
  imageDataUrl: null,
  answers: {},
  icpName: '',
};

export function icpReducer(state: ICPState, action: ICPAction): ICPState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.step };
    case 'SET_IMAGE':
      return { ...state, imageUrl: action.url, imageDataUrl: action.dataUrl };
    case 'SET_ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.values },
      };
    case 'SET_NAME':
      return { ...state, icpName: action.name };
    case 'RESET':
      if (state.imageUrl) {
        URL.revokeObjectURL(state.imageUrl);
      }
      return { ...initialState };
    default:
      return state;
  }
}

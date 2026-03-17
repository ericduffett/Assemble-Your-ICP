import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { ICPState, ICPAction } from '../types/icp';
import { icpReducer, initialState } from './icpReducer';

interface ICPContextValue {
  state: ICPState;
  dispatch: React.Dispatch<ICPAction>;
}

const ICPContext = createContext<ICPContextValue | null>(null);

export function ICPProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(icpReducer, initialState);
  return (
    <ICPContext.Provider value={{ state, dispatch }}>
      {children}
    </ICPContext.Provider>
  );
}

export function useICP() {
  const ctx = useContext(ICPContext);
  if (!ctx) throw new Error('useICP must be used within ICPProvider');
  return ctx;
}

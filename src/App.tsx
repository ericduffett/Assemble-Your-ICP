import { ICPProvider, useICP } from './state/ICPContext';
import { useICPFlow } from './hooks/useICPFlow';
import { ProgressBar } from './components/ProgressBar';
import { StepNavigation } from './components/StepNavigation';
import { StartScreen } from './components/StartScreen';
import { ImageUpload } from './components/ImageUpload';
import { QuestionStep } from './components/QuestionStep';
import { NameInput } from './components/NameInput';
import { ResultCard } from './components/ResultCard';

function AppContent() {
  const { state, dispatch } = useICP();
  const {
    currentStepInfo,
    progress,
    goNext,
    goBack,
    reset,
    isStart,
    isResult,
  } = useICPFlow();

  const showProgress = !isStart && !isResult && currentStepInfo?.type !== 'upload';
  const showNav = !isStart && !isResult;

  // Can we advance?
  let canGoNext = false;
  if (currentStepInfo?.type === 'upload') {
    canGoNext = !!state.imageUrl;
  } else if (currentStepInfo?.type === 'question' && currentStepInfo.question) {
    const selected = state.answers[currentStepInfo.question.id] ?? [];
    canGoNext = selected.length > 0;
  } else if (currentStepInfo?.type === 'name') {
    canGoNext = state.icpName.trim().length > 0;
  }

  // Next button label
  let nextLabel = 'Next';
  if (currentStepInfo?.type === 'name') {
    nextLabel = 'See Result';
  }

  function renderStep() {
    if (!currentStepInfo) return null;

    switch (currentStepInfo.type) {
      case 'start':
        return <StartScreen onStart={goNext} />;

      case 'upload':
        return (
          <ImageUpload
            currentImage={state.imageUrl}
            onImageSelected={(url, dataUrl) =>
              dispatch({ type: 'SET_IMAGE', url, dataUrl })
            }
          />
        );

      case 'question': {
        const q = currentStepInfo.question!;
        return (
          <QuestionStep
            key={q.id}
            question={q}
            selected={state.answers[q.id] ?? []}
            onSelect={(values) =>
              dispatch({ type: 'SET_ANSWER', questionId: q.id, values })
            }
          />
        );
      }

      case 'name':
        return (
          <NameInput
            value={state.icpName}
            onChange={(name) => dispatch({ type: 'SET_NAME', name })}
          />
        );

      case 'result':
        return <ResultCard onStartOver={reset} />;

      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      {showProgress && (
        <ProgressBar
          progress={progress}
          sectionHeader={currentStepInfo?.sectionHeader}
        />
      )}

      <div className="flex-1 flex flex-col min-h-0">{renderStep()}</div>

      {showNav && (
        <StepNavigation
          onBack={goBack}
          onNext={goNext}
          canGoBack={currentStepInfo?.type !== 'upload'}
          canGoNext={canGoNext}
          nextLabel={nextLabel}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ICPProvider>
      <AppContent />
    </ICPProvider>
  );
}

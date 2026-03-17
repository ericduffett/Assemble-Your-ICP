interface StepNavigationProps {
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  nextLabel?: string;
}

export function StepNavigation({
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  nextLabel = 'Next',
}: StepNavigationProps) {
  return (
    <div className="flex justify-between items-center px-6 py-4 gap-4">
      <button
        onClick={onBack}
        disabled={!canGoBack}
        className="min-h-[48px] px-6 py-3 rounded-xl text-base font-medium
          bg-gray-100 text-gray-700
          disabled:opacity-30 disabled:cursor-not-allowed
          active:bg-gray-200 transition-colors"
      >
        Back
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="min-h-[48px] px-8 py-3 rounded-xl text-base font-medium
          bg-indigo-600 text-white
          disabled:opacity-40 disabled:cursor-not-allowed
          active:bg-indigo-700 transition-colors"
      >
        {nextLabel}
      </button>
    </div>
  );
}

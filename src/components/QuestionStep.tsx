import type { QuestionDefinition } from '../types/icp';

interface QuestionStepProps {
  question: QuestionDefinition;
  selected: string[];
  onSelect: (values: string[]) => void;
}

export function QuestionStep({ question, selected, onSelect }: QuestionStepProps) {
  const { label, subLabel, options, selectionMode, maxSelections } = question;
  const isMulti = selectionMode === 'multi';
  const max = maxSelections ?? options.length;

  function handleToggle(option: string) {
    if (isMulti) {
      if (selected.includes(option)) {
        onSelect(selected.filter((s) => s !== option));
      } else if (selected.length < max) {
        onSelect([...selected, option]);
      }
    } else {
      onSelect([option]);
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-4 overflow-y-auto">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
          {label}
        </h2>
        {subLabel && (
          <p className="text-base text-gray-500 text-center mb-2">{subLabel}</p>
        )}
        {isMulti && (
          <p className="text-sm text-gray-400 text-center mb-4">
            Select up to {max} &mdash;{' '}
            <span
              className={
                selected.length === max ? 'text-indigo-600 font-semibold' : ''
              }
            >
              {selected.length} of {max} selected
            </span>
          </p>
        )}
        {!isMulti && (
          <p className="text-sm text-gray-400 text-center mb-4">
            Choose one
          </p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {options.map((option) => {
            const isSelected = selected.includes(option);
            const isDisabled = isMulti && !isSelected && selected.length >= max;
            return (
              <button
                key={option}
                onClick={() => handleToggle(option)}
                disabled={isDisabled}
                className={`min-h-[48px] px-4 py-3 rounded-xl text-sm font-medium text-center
                  transition-all duration-150 border-2
                  ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300'
                  }
                  ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'active:scale-[0.97]'}
                `}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

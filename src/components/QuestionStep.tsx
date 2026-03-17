import { useState } from 'react';
import type { QuestionDefinition, QuestionOption } from '../types/icp';

interface QuestionStepProps {
  question: QuestionDefinition;
  selected: string[];
  onSelect: (values: string[]) => void;
}

function getLabel(option: QuestionOption): string {
  return typeof option === 'string' ? option : option.label;
}

function getDescription(option: QuestionOption): string | undefined {
  return typeof option === 'string' ? undefined : option.description;
}

export function QuestionStep({ question, selected, onSelect }: QuestionStepProps) {
  const { label, subLabel, options, selectionMode, maxSelections } = question;
  const isMulti = selectionMode === 'multi';
  const max = maxSelections ?? options.length;
  const [showHints, setShowHints] = useState(false);

  const hasAnyDescriptions = options.some(
    (opt) => typeof opt !== 'string' && opt.description
  );

  function handleToggle(optionLabel: string) {
    if (isMulti) {
      if (selected.includes(optionLabel)) {
        onSelect(selected.filter((s) => s !== optionLabel));
      } else if (selected.length < max) {
        onSelect([...selected, optionLabel]);
      }
    } else {
      onSelect([optionLabel]);
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
          <p className="text-sm text-gray-400 text-center mb-2">
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
          <p className="text-sm text-gray-400 text-center mb-2">
            Choose one
          </p>
        )}

        {hasAnyDescriptions && (
          <div className="text-center mb-4">
            <button
              onClick={() => setShowHints((v) => !v)}
              className="text-sm text-gray-400 underline underline-offset-2
                decoration-gray-300 active:text-indigo-500 transition-colors"
            >
              {showHints ? 'Hide hints' : 'Show hints'}
            </button>
          </div>
        )}

        {!hasAnyDescriptions && <div className="mb-2" />}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {options.map((option) => {
            const optLabel = getLabel(option);
            const description = getDescription(option);
            const isSelected = selected.includes(optLabel);
            const isDisabled = isMulti && !isSelected && selected.length >= max;
            return (
              <button
                key={optLabel}
                onClick={() => handleToggle(optLabel)}
                disabled={isDisabled}
                className={`min-h-[48px] px-4 py-3 rounded-xl text-center
                  transition-all duration-200 border-2
                  ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300'
                  }
                  ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'active:scale-[0.97]'}
                `}
              >
                <span className="text-sm font-medium">{optLabel}</span>
                {showHints && description && (
                  <span
                    className={`block text-xs mt-1 ${
                      isSelected ? 'text-indigo-200' : 'text-gray-400'
                    }`}
                  >
                    {description}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

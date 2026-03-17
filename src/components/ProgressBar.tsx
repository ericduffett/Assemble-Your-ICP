interface ProgressBarProps {
  progress: number;
  sectionHeader?: string;
}

export function ProgressBar({ progress, sectionHeader }: ProgressBarProps) {
  return (
    <div className="w-full px-6 pt-4 pb-2">
      {sectionHeader && (
        <p
          className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
            sectionHeader === 'Demographics'
              ? 'text-blue-600'
              : 'text-purple-600'
          }`}
        >
          {sectionHeader}
        </p>
      )}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

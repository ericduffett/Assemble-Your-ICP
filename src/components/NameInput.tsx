interface NameInputProps {
  value: string;
  onChange: (name: string) => void;
}

export function NameInput({ value, onChange }: NameInputProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Name Your ICP
      </h2>
      <p className="text-base text-gray-500 mb-6 text-center max-w-sm">
        Give your Ideal Customer Profile a memorable name.
        Try an alliterative name that captures their personality!
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='e.g. "Budget-Conscious Bill"'
        className="w-full max-w-md text-center text-xl px-6 py-4 rounded-2xl
          border-2 border-gray-200 focus:border-indigo-500 focus:outline-none
          text-gray-900 placeholder-gray-400 transition-colors"
      />
    </div>
  );
}

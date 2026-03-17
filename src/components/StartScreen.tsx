interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Assemble Your ICP
      </h1>
      <p className="text-lg text-gray-500 max-w-md mb-2">
        Build an Ideal Customer Profile by uploading a photo and choosing
        the demographics and psychographics that define your target customer.
      </p>
      <p className="text-base text-gray-400 max-w-sm mb-8">
        You'll answer questions one at a time, then export a presentation-ready slide.
      </p>
      <button
        onClick={onStart}
        className="min-h-[56px] px-10 py-4 rounded-2xl text-lg font-semibold
          bg-indigo-600 text-white active:bg-indigo-700 transition-colors shadow-lg"
      >
        Get Started
      </button>
    </div>
  );
}

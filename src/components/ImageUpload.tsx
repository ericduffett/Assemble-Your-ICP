import { useRef, useState, useCallback } from 'react';

interface ImageUploadProps {
  currentImage: string | null;
  onImageSelected: (objectUrl: string, dataUrl: string) => void;
}

export function ImageUpload({ currentImage, onImageSelected }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = useCallback(
    (file: File) => {
      const objectUrl = URL.createObjectURL(file);
      // Also create a data URL for the export
      const reader = new FileReader();
      reader.onload = () => {
        onImageSelected(objectUrl, reader.result as string);
      };
      reader.readAsDataURL(file);
    },
    [onImageSelected]
  );

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Upload Your ICP Image
      </h2>
      <p className="text-base text-gray-500 mb-6 text-center max-w-sm">
        Upload a picture of your ICP. This picture will serve as the main visual element of your slide.
      </p>

      {currentImage ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-64 h-80 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-md">
            <img
              src={currentImage}
              alt="ICP person"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <button
            onClick={() => inputRef.current?.click()}
            className="text-sm text-indigo-600 font-medium underline"
          >
            Change Image
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`w-full max-w-sm h-64 rounded-2xl border-2 border-dashed
            flex flex-col items-center justify-center cursor-pointer transition-colors
            ${
              isDragging
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-300 bg-gray-50 active:bg-gray-100'
            }`}
        >
          <svg
            className="w-12 h-12 text-gray-400 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-base font-medium text-gray-600">
            Tap to upload
          </p>
          <p className="text-sm text-gray-400 mt-1">or drag and drop</p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

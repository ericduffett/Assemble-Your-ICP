import { useRef, useState } from 'react';
import { useICP } from '../state/ICPContext';
import { exportResultCard } from '../utils/exportImage';

interface ResultCardProps {
  onStartOver: () => void;
}

// Helper to get answers for a question ID
function getAnswers(answers: Record<string, string[]>, id: string): string[] {
  return answers[id] ?? [];
}

// Section block for the export layout
function ExportSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;
  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: '#6366f1',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: 4,
        }}
      >
        {title}
      </div>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: 24, color: '#1f2937', lineHeight: 1.5 }}>
          {item}
        </div>
      ))}
    </div>
  );
}

// On-screen section for the responsive view
function DisplaySection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="mb-3">
      <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">
        {title}
      </p>
      {items.map((item, i) => (
        <p key={i} className="text-sm text-gray-800 leading-relaxed">
          {item}
        </p>
      ))}
    </div>
  );
}

export function ResultCard({ onStartOver }: ResultCardProps) {
  const { state } = useICP();
  const exportRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const { answers, imageDataUrl, imageUrl, icpName } = state;

  const demographicItems = [
    { header: 'Age', value: getAnswers(answers, 'age-range')[0] },
    { header: 'Gender', value: getAnswers(answers, 'gender')[0] },
    { header: 'Income', value: getAnswers(answers, 'income')[0] },
    { header: 'Geography', value: getAnswers(answers, 'geography')[0] },
    { header: 'Household', value: getAnswers(answers, 'household')[0] },
    { header: 'Employment', value: getAnswers(answers, 'employment')[0] },
  ].filter((d) => d.value);

  const leftSections = [
    { title: 'Hobbies & Interests', items: getAnswers(answers, 'hobbies') },
    { title: 'Influencers & Media', items: getAnswers(answers, 'influencers') },
    { title: 'Core Values', items: getAnswers(answers, 'core-values') },
    { title: 'Fears', items: getAnswers(answers, 'opposite-fear') },
  ];

  const rightSections = [
    { title: 'JTBD — Functional', items: getAnswers(answers, 'jtbd-functional') },
    { title: 'JTBD — Emotional', items: getAnswers(answers, 'jtbd-emotional') },
    { title: 'JTBD — Social', items: getAnswers(answers, 'jtbd-social') },
    { title: 'Buying Objections', items: getAnswers(answers, 'buying-objections') },
  ];

  async function handleExport() {
    if (!exportRef.current) return;
    setIsExporting(true);
    try {
      await exportResultCard(exportRef.current);
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* On-screen responsive view */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {icpName || 'Your ICP'}
        </h1>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {/* Left column */}
          <div className="text-right">
            {leftSections.map((s) => (
              <DisplaySection key={s.title} title={s.title} items={s.items} />
            ))}
          </div>

          {/* Center - image */}
          <div className="flex items-start justify-center">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="ICP"
                className="w-full h-72 object-contain rounded-xl"
              />
            )}
          </div>

          {/* Right column */}
          <div>
            {rightSections.map((s) => (
              <DisplaySection key={s.title} title={s.title} items={s.items} />
            ))}
          </div>
        </div>

        {/* Demographics */}
        <div className="mt-6 max-w-3xl mx-auto border-t border-gray-200 pt-4">
          <div className="flex justify-center items-start divide-x divide-gray-300">
            {demographicItems.map((d) => (
              <div key={d.header} className="flex-1 text-center px-2">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">{d.header}</p>
                <p className="text-sm text-gray-700 mt-0.5">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-4 px-6 py-4">
        <button
          onClick={onStartOver}
          className="min-h-[48px] px-6 py-3 rounded-xl text-base font-medium
            bg-gray-100 text-gray-700 active:bg-gray-200 transition-colors"
        >
          Start Over
        </button>
        <button
          onClick={handleExport}
          disabled={isExporting}
          className="min-h-[48px] px-8 py-3 rounded-xl text-base font-medium
            bg-indigo-600 text-white active:bg-indigo-700 transition-colors
            disabled:opacity-50"
        >
          {isExporting ? 'Exporting...' : 'Download Slide'}
        </button>
      </div>

      {/* Hidden export div at 1920x1080 */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
        }}
      >
        <div
          ref={exportRef}
          style={{
            width: 1920,
            height: 1080,
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: 48,
            boxSizing: 'border-box',
          }}
        >
          {/* Title */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: '#111827',
              }}
            >
              {icpName || 'Your ICP'}
            </div>
          </div>

          {/* 3-column body */}
          <div
            style={{
              display: 'flex',
              flex: 1,
              gap: 32,
              minHeight: 0,
            }}
          >
            {/* Left column */}
            <div style={{ flex: 1, overflow: 'hidden', textAlign: 'right' }}>
              {leftSections.map((s) => (
                <ExportSection key={s.title} title={s.title} items={s.items} />
              ))}
            </div>

            {/* Center - image */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {imageDataUrl && (
                <img
                  src={imageDataUrl}
                  alt="ICP"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: 16,
                  }}
                />
              )}
            </div>

            {/* Right column */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
              {rightSections.map((s) => (
                <ExportSection key={s.title} title={s.title} items={s.items} />
              ))}
            </div>
          </div>

          {/* Demographics footer */}
          <div
            style={{
              marginTop: 24,
              paddingTop: 16,
              borderTop: '2px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {demographicItems.map((d, i) => (
              <div
                key={d.header}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  borderLeft: i > 0 ? '1px solid #d1d5db' : 'none',
                  padding: '0 12px',
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {d.header}
                </div>
                <div style={{ fontSize: 22, color: '#374151', marginTop: 4 }}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

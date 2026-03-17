import { demographicQuestions } from '../data/demographics';
import { psychographicQuestions } from '../data/psychographics';
import type { QuestionOption } from '../types/icp';

// Build a lookup from label -> description across all questions
function buildDescriptionMap(): Record<string, string> {
  const map: Record<string, string> = {};
  const allQuestions = [...demographicQuestions, ...psychographicQuestions];
  for (const q of allQuestions) {
    for (const opt of q.options) {
      if (typeof opt !== 'string' && opt.description) {
        map[opt.label] = opt.description;
      }
    }
  }
  return map;
}

const descriptionMap = buildDescriptionMap();

function formatItem(label: string): string {
  const desc = descriptionMap[label];
  return desc ? `${label} — ${desc}` : label;
}

function formatSection(title: string, items: string[]): string {
  if (items.length === 0) return '';
  const lines = items.map((item) => `  - ${formatItem(item)}`);
  return `${title}:\n${lines.join('\n')}`;
}

export function buildProfileText(
  icpName: string,
  answers: Record<string, string[]>,
  influencerDetails: Record<string, string>,
): string {
  const sections: string[] = [];

  sections.push(`# ${icpName || 'Your ICP'}`);
  sections.push('');

  // Demographics
  sections.push('## Demographics');
  const demoFields = [
    { label: 'Age Range', id: 'age-range' },
    { label: 'Gender', id: 'gender' },
    { label: 'Income / Spending Power', id: 'income' },
    { label: 'Geography', id: 'geography' },
    { label: 'Household / Life Context', id: 'household' },
    { label: 'Employment Status', id: 'employment' },
  ];
  for (const field of demoFields) {
    const val = answers[field.id]?.[0];
    if (val) {
      const desc = descriptionMap[val];
      sections.push(`  - ${field.label}: ${val}${desc ? ` — ${desc}` : ''}`);
    }
  }
  sections.push('');

  // Psychographics
  sections.push('## Psychographics');

  const hobbies = answers['hobbies'] ?? [];
  if (hobbies.length > 0) {
    sections.push(formatSection('Hobbies & Interests', hobbies));
  }

  const influencers = answers['influencers'] ?? [];
  if (influencers.length > 0) {
    sections.push('Influencers & Media:');
    for (const cat of influencers) {
      const detail = influencerDetails[cat];
      sections.push(`  - ${cat}${detail ? `: ${detail}` : ''}`);
    }
  }

  const values = answers['core-values'] ?? [];
  if (values.length > 0) {
    sections.push(formatSection('Core Values', values));
  }

  const fears = answers['opposite-fear'] ?? [];
  if (fears.length > 0) {
    sections.push(formatSection('Fears', fears));
  }

  const objections = answers['buying-objections'] ?? [];
  if (objections.length > 0) {
    sections.push(formatSection('Buying Objections', objections));
  }

  sections.push('');

  // JTBD
  sections.push('## Jobs-to-Be-Done');

  const functional = answers['jtbd-functional'] ?? [];
  if (functional.length > 0) {
    sections.push(formatSection('Functional', functional));
  }

  const emotional = answers['jtbd-emotional'] ?? [];
  if (emotional.length > 0) {
    sections.push(formatSection('Emotional', emotional));
  }

  const social = answers['jtbd-social'] ?? [];
  if (social.length > 0) {
    sections.push(formatSection('Social', social));
  }

  return sections.join('\n');
}

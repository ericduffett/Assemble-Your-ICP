import type { QuestionDefinition } from '../types/icp';

export const demographicQuestions: QuestionDefinition[] = [
  {
    id: 'age-range',
    category: 'demographics',
    label: 'Age Range',
    options: ['13-15', '16-18', '19-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    selectionMode: 'single',
  },
  {
    id: 'gender',
    category: 'demographics',
    label: 'Gender',
    options: ['Male', 'Female', 'Nonbinary'],
    selectionMode: 'single',
  },
  {
    id: 'income',
    category: 'demographics',
    label: 'Income / Spending Power',
    options: [
      { label: 'Needs Only Budget', description: 'Mostly essentials; non-essentials are rare.' },
      { label: 'Limited Budget', description: 'Some "wants," but choices are constrained.' },
      { label: 'Comfortable Budget', description: 'Regular "wants" are possible without stress.' },
      { label: 'High Budget', description: 'Can choose convenience/brand often; upgrades are common.' },
      { label: 'Luxury Budget', description: 'Premium experiences/brands are routine; cost is rarely a limiter.' },
    ],
    selectionMode: 'single',
  },
  {
    id: 'geography',
    category: 'demographics',
    label: 'Geography',
     options: [
    {
      label: 'Local',
      description: 'New Trier Area'
    },
    {
      label: 'Nearby',
      description: 'Chicago + nearby suburbs.'
    },
    {
      label: 'In-State',
      description: 'In Illinois but more than 1 hour drive away.'
    },
    {
      label: 'Out of State',
      description: 'Lives in the U.S. but not in Illinois.'
    },
    {
      label: 'International',
      description: 'Does not live in the U.S.'
    },
    {
      label: 'Multi-Home',
      description: 'Sometimes local and sometimes away. (i.e. college student or snowbird.)'
    }
  ],
    selectionMode: 'single',
  },
  {
  id: 'household',
  category: 'demographics',
  label: 'Household / Life Context',
  options: [
    { label: 'Student - Lives With Parents', description: 'Middle/high school student living at home.' },
    { label: 'Student - Lives Away', description: 'College or training; away most of the year.' },
    { label: 'Adult - Lives With Parents', description: 'Adult living with parents or extended family.' },
    { label: 'Single Adult - Lives on Own', description: 'Lives alone or with roommates.' },
    { label: 'Partnered/Married - No Kids', description: 'Couple household without children at home.' },
    { label: 'Partnered/Married - Young Kids', description: 'Has children under 13 living at home.' },
    { label: 'Partnered/Married - Teens', description: 'Has children 13 or older living at home.' },
    { label: 'Single/Separated - Young Kids', description: 'Single parent household with children under 13 at home.' },
    { label: 'Single/Separated - Teens', description: 'Single parent household with teenage children at home.' },
    { label: 'Empty Nest / Adult Kids', description: 'Children are grown and living elsewhere.' },
  ],
  selectionMode: 'single',
},
{
  id: 'employment',
  category: 'demographics',
  label: 'Employment Status',
  options: [
    { label: 'Not Working', description: 'Not currently employed (e.g., student, caregiver, retired, unemployed).' },
    { label: 'Part-Time', description: 'Works some hours per week; schedule varies.' },
    { label: 'Full-Time', description: 'Works a regular full-time schedule; often time-constrained.' },
  ],
  selectionMode: 'single',
},
];

import type { QuestionDefinition } from '../types/icp';

export const psychographicQuestions: QuestionDefinition[] = [
    {
    id: 'hobbies',
    category: 'psychographics',
    label: 'Hobbies & Interests',
    options: [
      'Watching sports',
      'Playing sports',
      'Fitness / gym',
      'Outdoors',
      'Gaming',
      'Music',
      'Theatre',
      'Art / design',
      'DIY / making',
      'Fashion / style',
      'Beauty / self-care',
      'Tech / gadgets',
      'Cars / motors',
      'Foodie / cooking',
      'Travel',
      'Reading',
      'Movies / TV',
      'Social media creator',
      'Volunteering',
      'School / academics',
      'Clubs / activities',
      'Entrepreneurship',
      'Pets / animals',
      'Collecting',
    ],
    selectionMode: 'multi',
    maxSelections: 3,
  },
  {
    id: 'influencers',
    category: 'psychographics',
    label: 'Influencers & Media',
    subLabel: 'Who do they trust or follow that shapes what they want to buy?',
    options: [
      'Friends / classmates',
      'Parents / family',
      'Teachers / coaches',
      'TikTok creators',
      'YouTube creators',
      'Instagram accounts',
      'Snapchat stories',
      'Podcasts',
      'Review sites (Google/Yelp/Amazon)',
      'Online communities (Reddit/Discord/forums)',
      'Celebrities',
      'Athletes',
      'Experts / professionals',
      'Brand accounts (social channels & email)',
    ],
    selectionMode: 'multi',
    maxSelections: 3,
  },
  {
    id: 'core-values',
    category: 'psychographics',
    label: 'Core Values',
    options: [
      { label: 'Adventure', description: 'Trying new experiences and taking risks.' },
      { label: 'Affection', description: 'Feeling loved and cared about.' },
      { label: 'Avoiding New Things', description: 'Sticking with what’s familiar; avoiding change.' },
      { label: 'Belonging', description: 'Feeling accepted by a group.' },
      { label: 'Community', description: 'Being part of a local group or team.' },
      { label: 'Control', description: 'Having a plan and being in charge.' },
      { label: 'Creativity', description: 'Making things and expressing ideas.' },
      { label: 'Delight', description: 'Having fun and enjoying the moment.' },
      { label: 'Freedom of Expression', description: 'Being yourself without getting judged.' },
      { label: 'Freedom of Movement', description: 'Going where you want; not feeling stuck.' },
      { label: 'Friendship', description: 'Close friends and shared experiences.' },
      { label: 'Good Looks', description: 'Looking attractive and put-together.' },
      { label: 'Health', description: 'Feeling healthy and avoiding sickness.' },
      { label: 'Learning New Things', description: 'Getting better and building skills.' },
      { label: 'Luxury', description: 'Premium quality and special experiences.' },
      { label: 'Nostalgia', description: 'Remembering and reliving good memories.' },
      { label: 'Obedience', description: 'Following rules and doing what’s expected.' },
      { label: 'Participation', description: 'Being included and getting involved.' },
      { label: 'Peace of Mind', description: 'Feeling calm and not stressed.' },
      { label: 'Physical Activity', description: 'Moving your body; being active.' },
      { label: 'Power', description: 'Having influence and being taken seriously.' },
      { label: 'Reassurance', description: 'Knowing you made the right choice.' },
      { label: 'Reliability', description: 'Things work every time; dependable.' },
      { label: 'Respect', description: 'Being treated seriously and valued.' },
      { label: 'Revenge', description: 'Getting even when treated unfairly.' },
      { label: 'Romance', description: 'Feeling wanted or close to someone.' },
      { label: 'Safety', description: 'Avoiding danger and getting hurt.' },
      { label: 'Security', description: 'Feeling stable about the future.' },
      { label: 'Status', description: 'Being seen as cool, successful, or important.' },
      { label: 'Strength', description: 'Feeling tough, capable, and resilient.' },
      { label: 'Sympathy', description: 'People understand you and care.' },
      { label: 'Tension', description: 'Excitement, drama, or a big challenge.' },
    ],
    selectionMode: 'multi',
    maxSelections: 3,
  },
  {
    id: 'opposite-fear',
    category: 'psychographics',
    label: 'Opposite Fear (What they want to avoid)',
    options: [
      { label: 'Feeling stuck in routine', description: 'Worried life is boring or predictable.' },          // Adventure
      { label: 'Feeling unloved', description: 'Worried no one really cares.' },                            // Affection
      { label: 'Making changes', description: 'Worried new things will go wrong.' },                    // Avoiding New Things
      { label: 'Feeling left out', description: 'Worried they won’t be accepted.' },                        // Belonging
      { label: 'Feeling disconnected', description: 'Worried they don’t have a place/group.' },            // Community
      { label: 'Feeling out of control', description: 'Worried things will be chaotic.' },                  // Control
      { label: 'Feeling boxed in', description: 'Worried they can’t express ideas.' },                      // Creativity
      { label: 'Feeling bored', description: 'Worried nothing feels fun.' },                                // Delight
      { label: 'Feeling judged', description: 'Worried they can’t be themselves.' },                        // Freedom of Expression
      { label: 'Feeling restricted', description: 'Worried they can’t go or do what they want.' },         // Freedom of Movement
      { label: 'Losing friends', description: 'Worried they won’t have close friends.' },                   // Friendship
      { label: 'Feeling unattractive', description: 'Worried about their appearance.' },                   // Good Looks
      { label: 'Getting sick', description: 'Worried about health problems.' },                             // Health
      { label: 'Falling behind', description: 'Worried they won’t keep up or improve.' },                  // Learning New Things
      { label: 'Feeling “not good enough”', description: 'Worried they can’t have the best.' },             // Luxury
      { label: 'Losing the good old days', description: 'Worried things change too fast.' },                // Nostalgia
      { label: 'Getting in trouble', description: 'Worried about breaking rules or disappointing adults.' },// Obedience
      { label: 'Missing out', description: 'Worried they won’t be included.' },                             // Participation
      { label: 'Feeling stressed', description: 'Worried about constant anxiety.' },                        // Peace of Mind
      { label: 'Feeling out of shape', description: 'Worried about low energy or fitness.' },               // Physical Activity
      { label: 'Being ignored', description: 'Worried they won’t have a say.' },                            // Power
      { label: 'Second-guessing', description: 'Worried they made the wrong choice.' },                     // Reassurance
      { label: 'Being let down', description: 'Worried it won’t work when needed.' },                       // Reliability
      { label: 'Not respected', description: 'Worried others won’t take them seriously.' },                 // Respect
      { label: 'Being wronged', description: 'Worried unfairness goes unpunished.' },                       // Revenge
      { label: 'Feeling unwanted', description: 'Worried no one is interested in them.' },                  // Romance
      { label: 'Getting hurt', description: 'Worried about danger or accidents.' },                         // Safety
      { label: 'Feeling unstable', description: 'Worried the future could fall apart.' },                   // Security
      { label: 'Looking uncool', description: 'Worried about low social status.' },                         // Status
      { label: 'Feeling weak', description: 'Worried they can’t handle challenges.' },                      // Strength
      { label: 'Feeling misunderstood', description: 'Worried no one gets what they’re going through.' },   // Sympathy
      { label: 'No excitement', description: 'Worried life feels flat or dull.' },                          // Tension
    ],
    selectionMode: 'multi',
    maxSelections: 3,
  },
  {
    id: 'buying-objections',
    category: 'psychographics',
    label: 'Buying Objections',
    subLabel: 'What concerns might stop them from buying in this category?',
    options: [
      'Too expensive',
      'I don’t really need it',
      'I’m not sure it’s good quality',
      'I’m not sure it will work for me',
      'I might not use it enough',
      'I’m worried I’ll regret it',
      'I don’t trust the brand/seller',
      'It seems too complicated',
      'It takes too much effort',
      'It doesn’t fit my style or identity',
      'I’m worried what others will think',
      'I’d rather save my money',
      'I can borrow/replace it with something else',
    ],
    selectionMode: 'multi',
    maxSelections: 3,
  },
  {
    id: 'jtbd-functional',
    category: 'psychographics',
    label: 'Jobs-to-Be-Done',
    subLabel: 'Functional — What practical task does the customer need to get done?',
    options: [
      { label: 'Save time', description: 'Get things done faster so they have more time for what matters.' },
      { label: 'Save money', description: 'Spend less or get more value for every dollar.' },
      { label: 'Make something easier', description: 'Fewer steps, less effort, less hassle to get it done.' },
      { label: 'Get better results', description: 'Higher quality, more accuracy, or a better outcome than before.' },
      { label: 'Stay organized or on track', description: 'Keep plans, tasks, and responsibilities from falling through the cracks.' },
      { label: 'Learn or improve a skill', description: 'Build new abilities or get better at something they care about.' },
      { label: 'Avoid problems', description: 'Prevent mistakes, reduce hassle, or lower the risk of something going wrong.' },
      { label: 'Stay healthy or feel better', description: 'Take care of their body, feel more energized, or avoid getting sick.' },
      { label: 'Stay comfortable or at ease', description: 'Feel physically comfortable and avoid discomfort or inconvenience.' },
      { label: 'Stay protected or secure', description: 'Keep themselves, their stuff, or their information safe.' },
      { label: 'Pass the time or be entertained', description: 'Fill downtime with something fun, interesting, or relaxing.' },
      { label: 'Communicate or stay in touch', description: 'Stay connected with friends, family, or people who matter.' },
      { label: 'Meet a requirement', description: 'Be ready for school, work, an event, or something they have to do.' },
      { label: 'Get access to something', description: 'Reach something that is hard to find, exclusive, or not easily available.' },
      { label: 'Make a decision easier', description: 'Cut through too many choices and feel confident picking the right one.' },
      { label: 'Track progress', description: 'See how they are doing and measure improvement over time.' },
    ],
    selectionMode: 'multi',
    maxSelections: 2,
  },
  {
    id: 'jtbd-emotional',
    category: 'psychographics',
    label: 'Jobs-to-Be-Done',
    subLabel: 'Emotional — How does the customer want to FEEL?',
    options: [
      { label: 'Confident', description: 'They feel like they look good and they have got this handled.' },
      { label: 'Calm', description: 'Less stressed, less overwhelmed, and more at peace.' },
      { label: 'Safe', description: 'Nothing bad is going to happen; they feel protected.' },
      { label: 'Proud', description: 'They did something meaningful and it feels great.' },
      { label: 'Motivated', description: 'Fired up and ready to take action on something.' },
      { label: 'In control', description: 'They are on top of things and nothing is slipping through the cracks.' },
      { label: 'Excited', description: 'Something fun or new is happening and they can not wait.' },
      { label: 'Relieved', description: 'A weight has been lifted off their shoulders.' },
      { label: 'Rewarded', description: 'They deserve this treat and it feels like a win.' },
      { label: 'Free from guilt', description: 'They are doing the right thing and do not have to feel bad about it.' },
      { label: 'Connected', description: 'Less alone and more understood by the people around them.' },
    ],
    selectionMode: 'multi',
    maxSelections: 2,
  },
  {
    id: 'jtbd-social',
    category: 'psychographics',
    label: 'Jobs-to-Be-Done',
    subLabel: 'Social — How does the customer want to be SEEN by others?',
    options: [
      { label: 'Belong', description: 'Fit in and be accepted as part of a group or community.' },
      { label: 'Stand out', description: 'Be noticed as unique, different, or one of a kind.' },
      { label: 'Look successful', description: 'Be seen as someone who has achieved status or accomplishment.' },
      { label: 'Look competent', description: 'Be seen as someone who knows what they are doing.' },
      { label: 'Look stylish or attractive', description: 'Be seen as someone with great taste or good looks.' },
      { label: 'Show my values', description: 'Let others know what they stand for and care about.' },
      { label: 'Be trusted or taken seriously', description: 'Be seen as credible, reliable, and worth listening to.' },
      { label: 'Be seen as responsible', description: 'Be seen as a good parent, student, leader, or teammate.' },
      { label: 'Be “in the know”', description: 'Be seen as aware, ahead of trends, and plugged in.' },
      { label: 'Avoid embarrassment', description: 'Not look bad, awkward, or out of place in front of others.' },
      { label: 'Strengthen relationships', description: 'Be a better friend, teammate, or family member.' },
    ],
    selectionMode: 'multi',
    maxSelections: 2,
  },
];

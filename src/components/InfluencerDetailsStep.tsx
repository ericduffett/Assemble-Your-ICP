interface InfluencerDetailsStepProps {
  selectedCategories: string[];
  details: Record<string, string>;
  onDetailChange: (category: string, detail: string) => void;
}

const placeholderMap: Record<string, string> = {
  'Friends / classmates': 'e.g., friend group, girlfriend, sports team, study buddy',
  'Parents / family': 'e.g., mom, older sibling, uncle who owns a business',
  'Teachers / coaches': 'e.g., basketball coach, business teacher, guidance counselor',
  'TikTok creators': 'e.g., @charlidamelio, @khaby.lame, @dunkindonuts',
  'YouTube creators': 'e.g., @MrBeast, @EmmaChamberlain, @MarkRober',
  'Instagram accounts': 'e.g., @nike, @foodnetwork, @natgeo',
  'Snapchat stories': 'e.g., Daily Mail, ESPN, friends\' stories',
  'Podcasts': 'e.g., Call Her Daddy, The Joe Rogan Experience, SmartLess',
  'Review sites (Google/Yelp/Amazon)': 'e.g., Amazon reviews, Google reviews, Yelp restaurant ratings',
  'Online communities (Reddit/Discord/forums)': 'e.g., r/sneakers, Discord gaming servers, Facebook groups',
  'Celebrities': 'e.g., Taylor Swift, Travis Kelce, Zendaya',
  'Athletes': 'e.g., LeBron James, Caitlin Clark, Patrick Mahomes',
  'Experts / professionals': 'e.g., dermatologist on TikTok, financial advisor, tech reviewer',
  'Brand accounts (social channels & email)': 'e.g., Nike email list, Starbucks Instagram, Apple announcements',
};

export function InfluencerDetailsStep({
  selectedCategories,
  details,
  onDetailChange,
}: InfluencerDetailsStepProps) {
  return (
    <div className="flex-1 flex flex-col items-center px-4 py-4 overflow-y-auto">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
          Get Specific
        </h2>
        <p className="text-base text-gray-500 text-center mb-6">
          Give 1-3 specific examples for each influencer type you selected.
        </p>

        <div className="space-y-5">
          {selectedCategories.map((category) => (
            <div key={category}>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                {category}
              </label>
              <input
                type="text"
                value={details[category] ?? ''}
                onChange={(e) => onDetailChange(category, e.target.value)}
                placeholder={placeholderMap[category] ?? 'e.g., specific names or accounts'}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-gray-200
                  text-base text-gray-800 placeholder-gray-400
                  focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

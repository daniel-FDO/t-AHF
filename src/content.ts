// Verified content from https://tavistockprotect.com/adviser/anjorin-henry-fasan/
// Keep this file as the single source of truth for names, copy, contact details and services.

export const adviser = {
  name: 'Anjorin Henry Fasan',
  firstName: 'Anjorin',
  role: 'Protection Adviser',
  firm: 'Tavistock Protect',
  email: 'a.fasan@tavistockprotect.com',
  phone: '07393159005',
  phoneDisplay: '07393159005',
  photo:
    'https://tavistockprotect.com/wp-content/uploads/2026/10/Anjorin-Henry-Fasan.jpeg',
  photoThumb:
    'https://tavistockprotect.com/wp-content/uploads/2026/10/Anjorin-Henry-Fasan-150x150.jpeg',
  profileUrl: 'https://tavistockprotect.com/adviser/anjorin-henry-fasan/',
  firmContactUrl: 'https://tavistockprotect.com/#contact',
  intro: [
    'Your Future Matters. Your Family Deserves Protection.',
    'Life is unpredictable, but your family’s financial security shouldn’t be left to chance. As your Protection Adviser, I go beyond recommending insurance policies. I take time to understand your story, priorities, and aspirations, helping you find protection that truly matters. From Life Insurance to Critical Illness Cover and Income Protection, my mission is simple: protect your income, safeguard your loved ones, and secure tomorrow, starting today.',
  ],
  about: [
    'I am a dedicated Protection Adviser passionate about helping individuals, couples, and families achieve financial security and peace of mind. I specialise in providing personalised advice on Life Insurance, Critical Illness Cover, and Income Protection, ensuring that every recommendation reflects my clients’ needs, circumstances, and budgets.',
    'I believe that protecting your loved ones and financial future should be simple, affordable, and accessible. My approach is built on trust, transparency, professionalism, and putting clients first. I am committed to helping you make informed decisions and find suitable protection solutions for life’s unexpected challenges.',
  ],
  whoIHelp:
    'I help individuals, couples, families, homeowners, and self-employed professionals protect their financial future against life’s uncertainties. Whether you are looking to secure your family’s financial well-being, protect your mortgage, or safeguard your income, I provide personalised advice tailored to your needs and budget. My goal is to help you find suitable Life Insurance, Critical Illness Cover, and Income Protection solutions, giving you confidence and peace of mind.',
  quote:
    'Protecting what matters most is more than just having insurance; it’s about securing your family’s future and financial peace of mind. My commitment is to provide honest, personalised protection advice, helping you make informed decisions today for a more financially secure tomorrow.',
}

export const credentials = [
  {
    icon: 'clock',
    title: 'Experience',
    text: 'Helping families and business owners make informed decisions',
  },
  {
    icon: 'shield',
    title: 'FCA Regulated',
    text: 'Tavistock Protect is authorised and regulated by the FCA, providing peace of mind that your interests are protected every step of the way.',
  },
  {
    icon: 'chat',
    title: 'Client Focus',
    text: 'No insurance jargon I provide clear, straightforward advice focused on finding solutions that meet your needs and budget.',
  },
  {
    icon: 'refresh',
    title: 'Ongoing Support',
    text: 'Regular reviews to ensure your cover remains suitable. Here to support you as your circumstances change.',
  },
] as const

export const services = [
  {
    id: 'life-critical-illness',
    icon: 'heart',
    title: 'Life and Critical Illness Cover',
    summary:
      'Helping ensure you and your loved ones have financial support in place if life takes an unexpected turn.',
  },
  {
    id: 'income-protection',
    icon: 'pound',
    title: 'Income Protection',
    summary:
      'Helps provide a regular income in the event you are unable to work as a result of an illness or injury, offering financial protection when you need it most.',
  },
  {
    id: 'mortgage-products',
    icon: 'home',
    title: 'Mortgage Products',
    summary:
      'I can support you in finding a mortgage that works for you, whether you’re taking your first step onto the property ladder or reviewing your current deal.',
  },
  {
    id: 'private-medical-insurance',
    icon: 'plus',
    title: 'Private Medical Insurance',
    summary:
      'I offer private medical insurance, which provides faster access to private medical treatment and avoids NHS waiting times.',
  },
  {
    id: 'business-protection',
    icon: 'briefcase',
    title: 'Business Protection',
    summary:
      'I offer business protection that helps your business stay financially secure if a key individual is unable to work or passes away and helps cover business liabilities.',
  },
  {
    // From Tavistock Protect's printed flyer for Anjorin.
    id: 'accident-cover',
    icon: 'shieldPlus',
    title: 'Accident Cover',
    summary:
      'Plans provide lump sum payments for accidents, extended hospital stays and for accidental death, as well as providing daily hospital benefits. Family plans are available with no extra charge for additional children.',
  },
  // {
  //   id: 'sports-hazardous-pursuits',
  //   icon: 'mountain',
  //   title: 'Sports & Hazardous Pursuits',
  //   summary:
  //     'Specialist protection solutions for those with active lifestyles, providing valuable financial protection for you and your family.',
  // },
] as const

// From Tavistock Protect's printed flyers for Anjorin.
export const insurerPanel = {
  eyebrow: 'Insurance protection specialists',
  title: 'Insurance Solutions for Peace of Mind',
  intro:
    'Through our established relationships with the largest and most reputable insurers in the UK, and together with our own specialist products, we pride ourselves on being able to find the best possible protection for you regardless of your occupation, health condition or age.',
  providersTitle: 'Cost-effective insurance solutions from all major providers in the UK',
  providers: [
    'Aegon',
    'AIG',
    'Allianz',
    'Aviva',
    'AXA',
    'Canada Life',
    'Cirencester Friendly',
    'Guardian',
    'Holloway Friendly',
    'HSBC',
    'LV=',
    'Legal & General',
    'Royal London',
    'RSA',
    'Scottish Widows',
    'Shepherds Friendly',
    'Vitality',
    'Zurich',
  ],
  closing:
    'Your peace of mind is worth it: protect your loved ones and cover your financial obligations in the event of an illness, an accident or your death.',
}

export const regulatory = [
  'Tavistock Protect Limited is authorised and regulated by the Financial Conduct Authority with Firm Reference Number 575993. Tavistock Protect Limited is registered under company registration number NI614798. Tavistock Protect Limited is a wholly owned subsidiary of Tavistock Investments Plc.',
  'Tavistock Essentials, FCA No. 1027620, is an Appointed Representative of Tavistock Protect Ltd.',
]

// Options from the enquiry form on Anjorin's profile page.
export const enquiryOptions = {
  bestTime: ['Morning', 'Afternoon', 'Evening', 'Anytime'],
  employment: [
    'Employed',
    'Self-employed',
    'Business Owner',
    'Retired',
    'Unemployed',
  ],
  heardFrom: [
    'Facebook',
    'Instagram',
    'TikTok',
    'LinkedIn',
    'YouTube',
    'Google Search',
    'Word of mouth recommendation',
    'Station / Poster Advertising (QR Code)',
    'Other – please state',
  ],
} as const

export type Article = {
  slug: string
  title: string
  image?: string
  url: string
  source: string
  author?: string
}

// Anjorin's own article. Its full text lives in a hosted flipbook; we don't
// reproduce or paraphrase content we haven't verified.
export const featuredArticle: Article = {
  slug: 'anjorin-henry-fasan-blog',
  title: 'Anjorin Henry Fasan Blog',
  // Local copy: the image on tavistockprotect.com is labelled with another
  // adviser's name. Save the corrected cover at public/anjorin-henry-fasan-blog.png.
  image: '/anjorin-henry-fasan-blog.png',
  url: 'https://tavistock.aflip.in/AnjorinHenryFasanBlog',
  source: 'Tavistock Protect',
  author: 'Anjorin Henry Fasan',
}

export const video = {
  id: '5-56hcSjRC0',
  eyebrow: 'Life Insurance vs Life Assurance',
  title: 'What’s the Difference and Which Could Be Right for You?',
  caption: 'The Key Differences Between Life Insurance and Life Assurance',
  image: 'https://img.youtube.com/vi/5-56hcSjRC0/hqdefault.jpg',
  url: 'https://www.youtube.com/watch?v=5-56hcSjRC0',
}

// Third-party news shown on Anjorin's profile under "Related reading".
export const relatedReading: Article[] = [
  {
    slug: 'aviva-perci-health',
    title: 'Aviva partners with Perci Health',
    image:
      'https://tavistockprotect.com/wp-content/uploads/2026/07/AdobeStock_1905191547.jpeg',
    url: 'https://connect.avivab2b.co.uk/adviser/articles/news/workplace-and-group-protection/introducing-perci-health/',
    source: 'Aviva',
  },
  {
    slug: 'guardian-critical-illness',
    title: 'Guardian’s New Critical Illness Covers Go Live',
    image:
      'https://tavistockprotect.com/wp-content/uploads/2026/07/AdobeStock_1993067017.jpeg',
    url: 'https://guardian1821.co.uk/about-us/news/guardians-new-critical-illness-covers-go-live/',
    source: 'Guardian',
  },
]

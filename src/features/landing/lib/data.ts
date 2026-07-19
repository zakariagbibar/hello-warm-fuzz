export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  duration: string;
  connections: number;
  features: string[];
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    id: '1m',
    name: '1 Month',
    tagline: 'Perfect to try us out',
    price: 12,
    originalPrice: 19,
    duration: '1 Month',
    connections: 1,
    features: [
      '15,000+ Live Channels',
      '60,000+ Movies & Series (VOD)',
      'Full HD / 4K Ultra HD',
      '1 Simultaneous Connection',
      'All Devices Supported',
      'Anti-Freeze Technology',
      '24/7 Support',
    ],
  },
  {
    id: '3m',
    name: '3 Months',
    tagline: 'Best value for short-term',
    price: 29,
    originalPrice: 49,
    duration: '3 Months',
    connections: 1,
    features: [
      '15,000+ Live Channels',
      '60,000+ Movies & Series (VOD)',
      'Full HD / 4K Ultra HD',
      '1 Simultaneous Connection',
      'All Devices Supported',
      'Anti-Freeze Technology',
      '24/7 Priority Support',
      'Free Setup Assistance',
    ],
  },
  {
    id: '6m',
    name: '6 Months',
    tagline: 'Great mid-term value',
    price: 45,
    originalPrice: 79,
    duration: '6 Months',
    connections: 1,
    popular: true,
    features: [
      '15,000+ Live Channels',
      '60,000+ Movies & Series (VOD)',
      'Full HD / 4K Ultra HD',
      '1 Simultaneous Connection',
      'All Devices Supported',
      'Anti-Freeze Technology',
      '24/7 Priority Support',
      'Free Setup Assistance',
    ],
  },
  {
    id: '12m',
    name: '12 Months',
    tagline: 'Our most popular plan',
    price: 69,
    originalPrice: 129,
    duration: '12 Months',
    connections: 1,
    features: [
      '15,000+ Live Channels',
      '60,000+ Movies & Series (VOD)',
      'Full HD / 4K Ultra HD',
      '1 Simultaneous Connection',
      'All Devices Supported',
      'Anti-Freeze Technology',
      '24/7 VIP Support',
      'Free Setup Assistance',
    ],
  },
];


export type Channel = {
  name: string;
  category: string;
  logo: string;
};

export const channels: Channel[] = [
  { name: 'beIN Sports 1', category: 'Sports', logo: '⚽' },
  { name: 'beIN Sports 2', category: 'Sports', logo: '⚽' },
  { name: 'Sky Sports Premier', category: 'Sports', logo: '⚽' },
  { name: 'ESPN', category: 'Sports', logo: '🏆' },
  { name: 'NBA TV', category: 'Sports', logo: '🏀' },
  { name: 'Cartoon Network', category: 'Kids', logo: '🎨' },
  { name: 'Disney Channel', category: 'Kids', logo: '🏰' },
  { name: 'Nickelodeon', category: 'Kids', logo: '🧸' },
  { name: 'Boomerang', category: 'Kids', logo: '🐰' },
  { name: 'HBO', category: 'Movies', logo: '🎬' },
  { name: 'Netflix Movies', category: 'Movies', logo: '🎞️' },
  { name: 'Cinema Max', category: 'Movies', logo: '🍿' },
  { name: 'Fox Movies', category: 'Movies', logo: '🎥' },
  { name: 'MBC 1', category: 'Entertainment', logo: '📺' },
  { name: 'MBC 2', category: 'Movies', logo: '🎬' },
  { name: 'MBC Action', category: 'Movies', logo: '💥' },
  { name: 'BBC One', category: 'Entertainment', logo: '📡' },
  { name: 'CNN', category: 'News', logo: '📰' },
  { name: 'Al Jazeera', category: 'News', logo: '🌍' },
  { name: 'Sky News', category: 'News', logo: '📰' },
  { name: 'Discovery', category: 'Documentary', logo: '🔬' },
  { name: 'Nat Geo', category: 'Documentary', logo: '🦁' },
  { name: 'Animal Planet', category: 'Documentary', logo: '🐘' },
  { name: 'E! Entertainment', category: 'Entertainment', logo: '⭐' },
];

export const faqs = [
  {
    question: 'What is IPTV?',
    answer:
      'IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over the internet instead of traditional cable or satellite. All you need is an internet connection and a compatible device.',
  },
  {
    question: 'What devices are supported?',
    answer:
      'Smart TVs (Samsung, LG, Android TV), Amazon Fire Stick, Apple TV, Roku, Android/iOS phones and tablets, MAG boxes, and any device with a compatible IPTV player app.',
  },
  {
    question: 'How fast does my internet need to be?',
    answer:
      'We recommend a minimum of 10 Mbps for Full HD streaming and 25 Mbps for 4K. Most modern broadband connections easily meet these requirements.',
  },
  {
    question: 'How quickly is my subscription activated?',
    answer:
      'Your account is activated automatically within minutes of payment. You will receive your login credentials and setup instructions by email immediately.',
  },
  {
    question: 'Can I use the service while traveling?',
    answer:
      'Yes! IPTvvv works worldwide. As long as you have an internet connection, you can stream your channels from any country.',
  },
  {
    question: 'How many connections can I use at once?',
    answer:
      'All plans include 1 simultaneous connection. You can add extra connections during checkout if needed.',
  },
];

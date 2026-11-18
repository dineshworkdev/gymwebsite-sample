/**
 * Gym Website Template — Public Website Data & Business Information
 *
 * IMPORTANT NOTICE FOR BUYERS:
 * All business details below (gym name, address, phone numbers, WhatsApp links,
 * emails, social media profiles, and Google Maps links) are SAMPLE PLACEHOLDERS
 * provided strictly for visual demonstration purposes.
 *
 * You MUST replace these placeholder values with your own or your client's
 * real business information before deploying this website commercially.
 */

export const GYM_INFO = {
  // Brand identity (SAMPLE PLACEHOLDERS)
  name: 'APEX GYM',
  brandPrefix: 'APEX',
  brandSuffix: 'GYM',
  tagline: 'Train Hard. Live Strong.',
  description: 'Your premier neighborhood athletic and strength training facility.',
  shortDescription: 'Modern training floor, expert coaching, and performance-driven culture.',

  // Physical Address (SAMPLE PLACEHOLDER: Fictional demonstration address)
  // Replace with your gym's physical street address
  address: '742 Evergreen Terrace, Suite 100, Springfield, OR 97477',

  // Phone & WhatsApp (SAMPLE PLACEHOLDERS: Fictional 555-series phone numbers)
  // Replace with your real contact phone number and WhatsApp international format
  phone: '+1 (555) 234-5678',
  whatsapp: '+1 (555) 234-5678',
  whatsappLink: 'https://wa.me/15552345678',

  // Email & Social Media (SAMPLE PLACEHOLDERS)
  // Replace with your business email address and real social media profile URLs
  email: 'info@apexgym-template.com',
  instagram: '@apexgym_template',

  // Google Maps Direction URL (SAMPLE PLACEHOLDER)
  // Replace with your gym's Google Maps share link (e.g. https://maps.google.com/?q=Your+Gym+Name)
  googleMaps: 'https://maps.google.com/?q=Apex+Gym+Sample+Location',

  // Google Maps Embed URL (SAMPLE PLACEHOLDER: Left blank by default)
  // Optional: To embed a live interactive Google Map iframe on your site,
  // search your business on Google Maps -> click Share -> Embed a map -> paste the iframe src URL here.
  googleMapsEmbed: '',

  // Operational Hours (Configurable session slots)
  hours: [
    {
      days: 'Monday – Friday',
      sessions: [
        { label: 'Morning', open: '05:30 AM', close: '11:00 AM' },
        { label: 'Evening', open: '04:00 PM', close: '10:00 PM' },
      ],
      closed: false,
    },
    {
      days: 'Saturday',
      sessions: [
        { label: 'Full Day', open: '07:00 AM', close: '08:00 PM' },
      ],
      closed: false,
    },
    {
      days: 'Sunday',
      sessions: [],
      closed: true,
    },
  ],

  // Social Media Channels (SAMPLE PLACEHOLDERS)
  socials: [
    { name: 'Instagram', handle: '@apexgym_template', url: 'https://instagram.com' },
    { name: 'Facebook', handle: 'ApexGymTemplate', url: 'https://facebook.com' },
    { name: 'YouTube', handle: 'ApexGymChannel', url: 'https://youtube.com' },
  ],
};

export const BRAND_VALUES = [
  {
    number: '01',
    title: 'Structured Training',
    description: 'Free weights, barbells, and machines arranged for disciplined daily workouts.',
  },
  {
    number: '02',
    title: 'Focused Environment',
    description: 'A clean, organized space dedicated to consistent athletic effort and personal fitness goals.',
  },
  {
    number: '03',
    title: 'Active Guidance',
    description: 'Practical exercise instruction and support to help members train safely and build strength.',
  },
];

export const FACILITY_SPECS = [
  {
    title: 'Free Weight Training Area',
    tag: 'Strength',
    description: 'Dumbbells, barbells, and adjustable benches for compound and isolation lifting.',
  },
  {
    title: 'Conditioning Floor',
    tag: 'Fitness',
    description: 'Open workout floor dedicated to cardio, core conditioning, and functional movement.',
  },
  {
    title: 'Machine & Cable Stations',
    tag: 'Resistance',
    description: 'Resistance machines and cable equipment supporting balanced muscular training.',
  },
  {
    title: 'Floor Training Space',
    tag: 'Workout Space',
    description: 'Spacious workout layout designed for focused, uninterrupted training sessions.',
  },
];

export const PROGRAMS = [
  {
    id: 'strength-training',
    name: 'Strength Training',
    category: 'Strength',
    shortDesc: 'Barbell and dumbbell exercises focused on building fundamental muscular strength and progressive overload.',
  },
  {
    id: 'general-fitness',
    name: 'General Fitness & Conditioning',
    category: 'Conditioning',
    shortDesc: 'Full-body conditioning and circuit workouts designed to improve overall stamina, endurance, and health.',
  },
  {
    id: 'weight-training',
    name: 'Free Weight Training',
    category: 'Weights',
    shortDesc: 'Self-paced or guided dumbbell, barbell, and bench training for muscle building and physical tone.',
  },
  {
    id: 'functional-movement',
    name: 'Movement & Flexibility',
    category: 'Movement',
    shortDesc: 'Warm-up routines, core stabilization, and stretching exercises to support healthy daily movement.',
  },
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 10,
    admissionFee: 0,
    durationDays: 30,
    duration: '1 Month',
    description: 'Essential gym access with standard equipment and locker facilities.',
    admissionNote: '$0 admission fee',
    features: [
      'Standard gym floor access',
      'Cardio & strength machines',
      'Locker room & shower access',
      'Free initial fitness orientation',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 30,
    admissionFee: 0,
    durationDays: 30,
    duration: '1 Month',
    description: 'Complete gym access with group classes and personalized workout routines.',
    admissionNote: '$0 admission fee',
    features: [
      'Full facility access 6 days/week',
      'All group conditioning classes',
      'Personalized routine template',
      'Progress tracking consultation',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 50,
    admissionFee: 0,
    durationDays: 30,
    duration: '1 Month',
    description: 'Full facility access plus dedicated coaching sessions and recovery amenities.',
    admissionNote: '$0 admission fee',
    features: [
      'Everything in Standard',
      '2 Personal trainer sessions/month',
      'Sauna & recovery zone access',
      'Nutrition & meal planning guide',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 80,
    admissionFee: 0,
    durationDays: 30,
    duration: '1 Month',
    description: 'VIP all-access membership with unlimited coaching support and priority perks.',
    admissionNote: '$0 admission fee',
    features: [
      'Unlimited 1-on-1 coaching check-ins',
      'Priority facility & class booking',
      'Complimentary guest passes (2/month)',
      'Dedicated locker & complimentary towel service',
    ],
  },
];

/**
 * SAMPLE GALLERY ITEMS — IMPORTANT: DEMO IMAGES
 * All images included in this template are demonstration assets provided solely
 * to showcase the website's appearance and layout. They are not licensed for reuse
 * in your commercial projects. Before publishing your customized website, remove
 * the demonstration images from public/images/ and replace them with images you own
 * or have appropriate usage rights to use.
 */
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Battle Ropes & Turf Lane',
    category: 'Conditioning',
    tag: 'Conditioning',
    src: './images/battle-ropes-turf-area.jpg',
    alt: 'Indoor functional turf track equipped with heavy battle ropes and colorful fitness mural',
    caption: 'High-intensity functional turf track with conditioning battle ropes and dedicated agility space.',
    aspect: 'wide',
    colorAccent: '#2F7D4A',
    stats: 'Turf & Agility Zone',
  },
  {
    id: 2,
    title: 'Strength & Workout Benches',
    category: 'Strength',
    tag: 'Strength',
    src: './images/workout-benches-strength-zone.jpg',
    alt: 'Row of adjustable workout benches under motivational banner in the strength area',
    caption: 'Adjustable workout benches and barbell stations for pressing, core, and free-weight movements.',
    aspect: 'standard',
    colorAccent: '#F4C400',
    stats: 'Free Weights & Press',
  },
  {
    id: 3,
    title: 'Free Weights & Dumbbells',
    category: 'Strength',
    tag: 'Strength',
    src: './images/free-weights-dumbbell-rack.jpg',
    alt: 'Free weights section featuring tiered dumbbell racks, mirrors, and barbell plates',
    caption: 'Comprehensive dumbbell selection on two-tier racks, mirrored lifting stations, and Olympic plate trees.',
    aspect: 'standard',
    colorAccent: '#F4C400',
    stats: 'Dumbbells & Plates',
  },
  {
    id: 4,
    title: 'Cable Crossover Station',
    category: 'Conditioning',
    tag: 'Conditioning',
    src: './images/cable-crossover-station.jpg',
    alt: 'Dual adjustable pulley cable crossover station with multi-grip pull-up bar and workout benches',
    caption: 'Dual adjustable pulley system with pull-up bar for cable flies, pulldowns, and upper body conditioning.',
    aspect: 'wide',
    colorAccent: '#2F7D4A',
    stats: 'Dual Cable Pulley',
  },
  {
    id: 5,
    title: 'Main Floor & Structural Pillars',
    category: 'Facility',
    tag: 'Facility',
    src: './images/gym-floor-yellow-pillars.jpg',
    alt: 'Panoramic view of main training floor featuring signature yellow structural pillars and barbell stations',
    caption: 'Modern athletic gym interior with vibrant structural columns, open layout, and dedicated barbell zones.',
    aspect: 'wide',
    colorAccent: '#F4C400',
    stats: 'Signature Interior',
  },
  {
    id: 6,
    title: 'Strength Training Circuit',
    category: 'Facility',
    tag: 'Facility',
    src: './images/strength-machines-circuit.jpeg',
    alt: 'Selectorized resistance machines including lat pulldown and chest press in the strength circuit',
    caption: 'Pin-selected resistance machines and cable stations designed for targeted muscle building and safe training.',
    aspect: 'standard',
    colorAccent: '#4B555D',
    stats: 'Resistance Circuit',
  },
];

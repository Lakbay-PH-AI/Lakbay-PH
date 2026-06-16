export type Category =
  | "Hotels"
  | "Accommodations"
  | "Transportation"
  | "Theme parks"
  | "Markets"
  | "Foods";

export type TravelTag =
  | "Budget"
  | "Luxury"
  | "Family-friendly"
  | "Foodie"
  | "Adventure"
  | "Romantic"
  | "Local favorite"
  | "Best value";

export interface Destination {
  id: string;
  name: string;
  region: string;
  summary: string;
  heroImage: string;
  tags: TravelTag[];
  bestFor: string[];
}

export interface Hotel {
  id: string;
  destinationId: string;
  name: string;
  area: string;
  priceRange: string;
  rating: number;
  tags: TravelTag[];
  amenities: string[];
}

export interface Accommodation extends Hotel {
  type: "Villa" | "Hostel" | "Boutique stay" | "Serviced apartment";
}

export interface TransportOption {
  id: string;
  destinationId: string;
  mode: "Flight" | "Ferry" | "Bus" | "Van" | "Private transfer" | "Train";
  route: string;
  estimate: string;
  notes: string;
  tags: TravelTag[];
}

export interface Attraction {
  id: string;
  destinationId: string;
  name: string;
  type: "Theme park" | "Nature" | "Heritage" | "Island hopping" | "Museum";
  priceRange: string;
  tags: TravelTag[];
}

export interface ThemePark extends Attraction {
  type: "Theme park";
  familyRating: number;
}

export interface Market {
  id: string;
  destinationId: string;
  name: string;
  specialty: string;
  hours: string;
  tags: TravelTag[];
}

export interface FoodSpot {
  id: string;
  destinationId: string;
  name: string;
  specialty: string;
  priceRange: string;
  tags: TravelTag[];
}

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  category: Category;
  estimate: string;
}

export interface CouponDeal {
  id: string;
  source: "Klook" | "Agoda" | "AirAsia MOVE" | "Local partner";
  title: string;
  code?: string;
  autoApplied?: boolean;
  discount: string;
  minimumSpend: string;
  expiry: string;
  eligibility: string;
  category: "Hotels" | "Activities" | "Transportation" | "Theme parks" | "Food and dining";
  termsPreview: string;
  verified: boolean;
  howToUse: string;
}

export interface AIProviderSetting {
  provider: "OpenAI" | "Claude" | "Perplexity" | "Gemini" | "Mistral" | "Groq" | "OpenRouter";
  apiKey: string;
  baseUrl?: string;
  model: string;
  enabled: boolean;
  isDefault: boolean;
}

export interface UserPreferences {
  nightMode: boolean;
  glassMode: boolean;
  depthMode: boolean;
  animatedMode: boolean;
  fontFamily: string;
  fontScale: number;
  animationIntensity: number;
  resultDensity: "compact" | "standard" | "immersive";
  responseStyle: "Concise" | "Balanced" | "Detailed";
  couponSearch: boolean;
  preferKlook: boolean;
  includeThirdParty: boolean;
  verifiedOnly: boolean;
  hideExpired: boolean;
  notifyBetterDeals: boolean;
}

export interface SavedItem {
  id: string;
  kind: "search" | "destination" | "stay" | "food" | "transport" | "deal";
  title: string;
  detail: string;
  tags: string[];
}

export interface SharePayload {
  email: string;
  subject: string;
  intro: string;
  channel: "Email" | "Messenger" | "Copy" | "Download";
  sections: string[];
  mode: "summary" | "full" | "selected";
}

export interface SearchAnalysis {
  prompt: string;
  destination: Destination;
  categories: Category[];
  budget: "Budget" | "Balanced" | "Luxury";
  duration: string;
  styleTags: TravelTag[];
  summary: string;
  hotels: Hotel[];
  accommodations: Accommodation[];
  transport: TransportOption[];
  attractions: Attraction[];
  themeParks: ThemePark[];
  markets: Market[];
  foods: FoodSpot[];
  deals: CouponDeal[];
  itinerary: ItineraryItem[];
  tips: string[];
  budgetEstimate: string;
}

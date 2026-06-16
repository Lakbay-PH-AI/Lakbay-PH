import type {
  Accommodation,
  Attraction,
  CouponDeal,
  Destination,
  FoodSpot,
  Hotel,
  Market,
  SavedItem,
  ThemePark,
  TransportOption
} from "../types/travel";

export const destinations: Destination[] = [
  {
    id: "palawan",
    name: "Palawan",
    region: "Mimaropa",
    summary: "Island-hopping, limestone lagoons, beachfront resorts, and slow luxury around El Nido, Coron, and Puerto Princesa.",
    heroImage: "https://images.unsplash.com/photo-1598120292128-6ad2c11d5ff3?auto=format&fit=crop&w=1400&q=80",
    tags: ["Luxury", "Adventure", "Romantic", "Family-friendly"],
    bestFor: ["Beachfront resorts", "Island hopping", "Airport transfers"]
  },
  {
    id: "cebu",
    name: "Cebu",
    region: "Central Visayas",
    summary: "A bright city-and-coast base for lechon, heritage walks, island trips, waterfalls, and quick flights or ferries.",
    heroImage: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?auto=format&fit=crop&w=1400&q=80",
    tags: ["Foodie", "Best value", "Adventure", "Local favorite"],
    bestFor: ["Food markets", "Nearby hotels", "Ferry connections"]
  },
  {
    id: "baguio",
    name: "Baguio",
    region: "Cordillera Administrative Region",
    summary: "Cool-weather food trips, night markets, pine views, museums, family parks, and easy weekend itineraries from Manila.",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80",
    tags: ["Budget", "Foodie", "Family-friendly", "Local favorite"],
    bestFor: ["3-day itinerary", "Street food", "Markets"]
  },
  {
    id: "boracay",
    name: "Boracay",
    region: "Western Visayas",
    summary: "White Beach stays, sunset sailing, water activities, family resorts, and transport planning through Caticlan or Kalibo.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    tags: ["Romantic", "Family-friendly", "Luxury", "Best value"],
    bestFor: ["Beach stays", "Transfers", "Activities"]
  },
  {
    id: "manila",
    name: "Manila",
    region: "National Capital Region",
    summary: "Heritage districts, mall dining, theme parks nearby, transport hubs, nightlife, markets, and quick road trips.",
    heroImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80",
    tags: ["Family-friendly", "Foodie", "Best value", "Local favorite"],
    bestFor: ["Theme parks", "Museums", "Transit base"]
  }
];

export const hotels: Hotel[] = [
  { id: "h1", destinationId: "palawan", name: "Lagen Cove Resort", area: "El Nido", priceRange: "PHP 12,000-18,000/night", rating: 4.8, tags: ["Luxury", "Romantic"], amenities: ["Airport transfer", "Family rooms", "Island tours"] },
  { id: "h2", destinationId: "palawan", name: "Coron Bayfront Suites", area: "Coron Town", priceRange: "PHP 4,500-7,200/night", rating: 4.5, tags: ["Best value", "Adventure"], amenities: ["Breakfast", "Dive desk", "Van pickup"] },
  { id: "h3", destinationId: "cebu", name: "Cebu Heritage House", area: "Downtown Cebu", priceRange: "PHP 2,800-5,000/night", rating: 4.4, tags: ["Foodie", "Best value"], amenities: ["Market access", "Cafe", "Late check-in"] },
  { id: "h4", destinationId: "baguio", name: "Pineview Stay", area: "Session Road", priceRange: "PHP 2,200-4,200/night", rating: 4.3, tags: ["Budget", "Family-friendly"], amenities: ["Heated shower", "Walkable", "Parking"] },
  { id: "h5", destinationId: "boracay", name: "Station Two Pearl", area: "White Beach", priceRange: "PHP 6,000-10,500/night", rating: 4.6, tags: ["Romantic", "Family-friendly"], amenities: ["Beachfront", "Airport transfer", "Pool"] },
  { id: "h7", destinationId: "manila", name: "Okada Manila", area: "Entertainment City, Parañaque", priceRange: "PHP 12,000-22,000/night estimate", rating: 4.7, tags: ["Luxury", "Family-friendly"], amenities: ["Casino resort", "Pool", "Dining", "Bay-area access"] },
  { id: "h6", destinationId: "manila", name: "Intramuros Modern Inn", area: "Ermita", priceRange: "PHP 3,300-6,200/night", rating: 4.2, tags: ["Best value", "Local favorite"], amenities: ["Heritage walks", "Airport desk", "Rooftop"] }
];

export const accommodations: Accommodation[] = [
  { ...hotels[1], id: "a1", name: "Coron Islander Hostel", type: "Hostel", priceRange: "PHP 900-1,800/night", tags: ["Budget", "Adventure"] },
  { ...hotels[2], id: "a2", name: "Cebu Mango Loft", type: "Serviced apartment", priceRange: "PHP 2,200-3,800/night", tags: ["Foodie", "Best value"] },
  { ...hotels[3], id: "a3", name: "Camp John Hay Cabin", type: "Villa", priceRange: "PHP 5,000-9,000/night", tags: ["Family-friendly", "Romantic"] },
  { ...hotels[4], id: "a4", name: "Bulabog Boutique Stay", type: "Boutique stay", priceRange: "PHP 3,800-6,500/night", tags: ["Best value", "Adventure"] }
];

export const transport: TransportOption[] = [
  { id: "t1", destinationId: "palawan", mode: "Flight", route: "Manila to Puerto Princesa or El Nido", estimate: "1h 25m flight; PHP 2,600-7,500", notes: "Book transfers early for late arrivals.", tags: ["Best value", "Family-friendly"] },
  { id: "t2", destinationId: "boracay", mode: "Flight", route: "Manila to Caticlan, then boat and van", estimate: "1h flight plus 45m transfer; PHP 3,200-8,000", notes: "Caticlan is faster than Kalibo for short trips.", tags: ["Best value"] },
  { id: "t3", destinationId: "cebu", mode: "Ferry", route: "Cebu Pier to Bohol or nearby islands", estimate: "2h ferry; PHP 900-1,600", notes: "Morning ferries pair well with food walks.", tags: ["Adventure", "Budget"] },
  { id: "t4", destinationId: "baguio", mode: "Bus", route: "Manila to Baguio via express coach", estimate: "4.5-6h; PHP 760-1,500", notes: "Choose early morning or late evening for lighter traffic.", tags: ["Budget", "Best value"] },
  { id: "t5", destinationId: "manila", mode: "Private transfer", route: "NAIA to Tagaytay, Enchanted Kingdom, or city hotels", estimate: "PHP 2,500-6,500", notes: "Best for families and theme park days.", tags: ["Family-friendly"] }
];

export const attractions: Attraction[] = [
  { id: "at1", destinationId: "palawan", name: "Big Lagoon Island Hop", type: "Island hopping", priceRange: "PHP 1,800-3,500", tags: ["Adventure", "Romantic"] },
  { id: "at2", destinationId: "cebu", name: "Kawasan Falls Day Trip", type: "Nature", priceRange: "PHP 2,000-4,500", tags: ["Adventure", "Local favorite"] },
  { id: "at3", destinationId: "baguio", name: "BenCab Museum", type: "Museum", priceRange: "PHP 200-350", tags: ["Family-friendly", "Local favorite"] },
  { id: "at4", destinationId: "manila", name: "Intramuros Heritage Loop", type: "Heritage", priceRange: "PHP 500-1,800", tags: ["Best value", "Local favorite"] }
];

export const themeParks: ThemePark[] = [
  { id: "p1", destinationId: "manila", name: "Star City", type: "Theme park", priceRange: "PHP 699-999", tags: ["Family-friendly", "Best value"], familyRating: 4.3 },
  { id: "p2", destinationId: "manila", name: "Enchanted Kingdom Side Trip", type: "Theme park", priceRange: "PHP 1,200-1,800", tags: ["Family-friendly", "Adventure"], familyRating: 4.7 },
  { id: "p3", destinationId: "cebu", name: "Anjo World", type: "Theme park", priceRange: "PHP 550-850", tags: ["Family-friendly", "Best value"], familyRating: 4.2 }
];

export const markets: Market[] = [
  { id: "m1", destinationId: "cebu", name: "Carbon Market", specialty: "Dried mango, street snacks, flowers, local produce", hours: "Early morning to evening", tags: ["Foodie", "Local favorite"] },
  { id: "m2", destinationId: "baguio", name: "Baguio Night Market", specialty: "Ukay-ukay, grilled corn, strawberry taho", hours: "9 PM to 2 AM", tags: ["Budget", "Foodie"] },
  { id: "m3", destinationId: "manila", name: "Salcedo Saturday Market", specialty: "Regional dishes and artisan food", hours: "Saturday mornings", tags: ["Foodie", "Family-friendly"] },
  { id: "m4", destinationId: "palawan", name: "Puerto Princesa Baywalk Market", specialty: "Seafood grills and local snacks", hours: "Late afternoon to night", tags: ["Best value", "Local favorite"] }
];

export const foods: FoodSpot[] = [
  { id: "f1", destinationId: "cebu", name: "House of Lechon", specialty: "Cebu lechon and puso", priceRange: "PHP 350-900/person", tags: ["Foodie", "Local favorite"] },
  { id: "f2", destinationId: "baguio", name: "Good Taste Session", specialty: "Budget family plates and buttered chicken", priceRange: "PHP 180-450/person", tags: ["Budget", "Family-friendly"] },
  { id: "f3", destinationId: "palawan", name: "Kinabuchs Grill", specialty: "Tamilok, grilled seafood, island pulutan", priceRange: "PHP 400-1,000/person", tags: ["Adventure", "Foodie"] },
  { id: "f4", destinationId: "boracay", name: "D'Talipapa Seafood Cookout", specialty: "Market seafood cooked to order", priceRange: "PHP 500-1,500/person", tags: ["Foodie", "Best value"] },
  { id: "f5", destinationId: "manila", name: "Binondo Food Crawl", specialty: "Dumplings, hopia, noodles, fried siopao", priceRange: "PHP 300-900/person", tags: ["Foodie", "Local favorite"] }
];

export const deals: CouponDeal[] = [
  { id: "d1", source: "Klook", title: "Palawan island-hopping bundle", code: "PALAWAN10", discount: "10% off", minimumSpend: "PHP 3,000", expiry: "2026-09-30", eligibility: "New and returning app users", category: "Activities", termsPreview: "Valid on selected El Nido and Coron tours.", verified: true, howToUse: "Copy the code, open the deal, and apply during checkout." },
  { id: "d2", source: "Klook", title: "Manila theme park pass", autoApplied: true, discount: "Up to 18% off", minimumSpend: "No minimum", expiry: "2026-08-15", eligibility: "Selected dates only", category: "Theme parks", termsPreview: "Auto-applied on participating park tickets.", verified: true, howToUse: "Open the deal and choose an eligible date." },
  { id: "d3", source: "Agoda", title: "Philippines weekend stay saver", code: "PHSTAY7", discount: "7% off", minimumSpend: "PHP 5,000", expiry: "2026-10-01", eligibility: "Hotels and serviced apartments", category: "Hotels", termsPreview: "Blackout dates may apply.", verified: false, howToUse: "Apply code before payment if the stay qualifies." },
  { id: "d4", source: "AirAsia MOVE", title: "Caticlan transfer flash deal", code: "BORACAYRIDE", discount: "PHP 300 off", minimumSpend: "PHP 1,500", expiry: "2026-07-20", eligibility: "Van and ferry transfer bundles", category: "Transportation", termsPreview: "Limited seats per travel date.", verified: true, howToUse: "Paste the code in the promo field." },
  { id: "d5", source: "Local partner", title: "Baguio food crawl group voucher", code: "PINEEATS", discount: "15% off", minimumSpend: "PHP 2,000", expiry: "2026-12-31", eligibility: "Groups of 4 or more", category: "Food and dining", termsPreview: "Reservation required.", verified: true, howToUse: "Mention the voucher when booking." }
];

export const savedItems: SavedItem[] = [
  { id: "s1", kind: "search", title: "3-day Baguio food trip", detail: "Budget hotels, night market, cafe route", tags: ["Budget", "Foodie"] },
  { id: "s2", kind: "destination", title: "Palawan family beach week", detail: "Airport transfers and lagoon tours", tags: ["Family-friendly", "Luxury"] },
  { id: "s3", kind: "deal", title: "Klook Manila theme park pass", detail: "Auto-applied ticket discount", tags: ["Klook", "Verified"] },
  { id: "s4", kind: "food", title: "Cebu lechon map", detail: "Downtown stays near food stops", tags: ["Foodie"] }
];

export const allCategories = ["Hotels", "Accommodations", "Transportation", "Theme parks", "Markets", "Foods"] as const;

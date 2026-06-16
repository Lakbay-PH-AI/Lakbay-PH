import {
  accommodations,
  attractions,
  deals,
  destinations,
  foods,
  hotels,
  markets,
  themeParks,
  transport
} from "../data/mockData";
import type { Category, SearchAnalysis, TravelTag } from "../types/travel";

const categoryTerms: Record<Category, string[]> = {
  Hotels: ["hotel", "resort", "stay", "room", "rooms"],
  Accommodations: ["accommodation", "hostel", "villa", "apartment", "boutique"],
  Transportation: ["transport", "transfer", "flight", "ferry", "bus", "van"],
  "Theme parks": ["theme park", "park", "enchanted", "star city"],
  Markets: ["market", "night market", "shopping", "bazaar"],
  Foods: ["food", "foods", "eat", "restaurant", "street food", "lechon", "seafood"]
};

export const promptSuggestions = [
  "Find beachfront resorts in Palawan with airport transfer and family rooms",
  "Best food markets in Cebu with nearby hotels",
  "Compare ferries, buses, and flights from Manila to Boracay",
  "Suggest a 3-day Baguio trip with cheap hotels and street food",
  "Theme parks near Manila with nearby accommodations"
];

export function analyzePrompt(prompt: string, selectedCategories: Category[]): SearchAnalysis {
  const normalized = prompt.toLowerCase();
  const matchedHotel = hotels.find((hotel) => normalized.includes(hotel.name.toLowerCase().split(" ")[0]));
  const asksPrice = /\b(how much|price|cost|rate|rates|night|per night|magkano)\b/.test(normalized);
  const destination =
    (matchedHotel ? destinations.find((item) => item.id === matchedHotel.destinationId) : undefined) ??
    destinations.find((item) => normalized.includes(item.name.toLowerCase())) ??
    destinations.find((item) => item.bestFor.some((term) => normalized.includes(term.toLowerCase().split(" ")[0]))) ??
    destinations[0];

  const inferredCategories = (Object.keys(categoryTerms) as Category[]).filter((category) =>
    categoryTerms[category].some((term) => normalized.includes(term))
  );

  const categories = Array.from(new Set([...selectedCategories, ...inferredCategories, ...(matchedHotel ? (["Hotels", "Accommodations"] as Category[]) : [])]));
  const activeCategories = categories.length > 0 ? categories : (["Hotels", "Transportation", "Foods", "Markets"] as Category[]);
  const budget = normalized.includes("cheap") || normalized.includes("budget")
    ? "Budget"
    : normalized.includes("luxury") || normalized.includes("premium")
      ? "Luxury"
      : "Balanced";
  const durationMatch = normalized.match(/(\d+)[-\s]?(day|days|night|nights)/);
  const duration = durationMatch ? `${durationMatch[1]} ${durationMatch[2]}` : "Flexible 3-5 days";
  const styleTags: TravelTag[] = [
    ...(budget === "Budget" ? ["Budget" as const] : []),
    ...(budget === "Luxury" ? ["Luxury" as const] : []),
    ...(normalized.includes("family") ? ["Family-friendly" as const] : []),
    ...(normalized.includes("food") || normalized.includes("market") ? ["Foodie" as const] : []),
    ...(normalized.includes("romantic") || normalized.includes("couple") ? ["Romantic" as const] : []),
    ...(normalized.includes("adventure") || normalized.includes("island") ? ["Adventure" as const] : [])
  ];

  const byDestination = <T extends { destinationId: string }>(items: T[]) =>
    items.filter((item) => item.destinationId === destination.id || (destination.id === "boracay" && item.destinationId === "boracay"));

  const prioritizeHotel = <T extends { name: string }>(items: T[]) => {
    if (!matchedHotel) return items;
    return [...items].sort((a, b) => {
      const aMatch = a.name === matchedHotel.name ? 0 : 1;
      const bMatch = b.name === matchedHotel.name ? 0 : 1;
      return aMatch - bMatch;
    });
  };

  const resultDeals = deals.filter((deal) => {
    if (activeCategories.includes("Theme parks") && deal.category === "Theme parks") return true;
    if (activeCategories.includes("Transportation") && deal.category === "Transportation") return true;
    if ((activeCategories.includes("Hotels") || activeCategories.includes("Accommodations")) && deal.category === "Hotels") return true;
    if (activeCategories.includes("Foods") && deal.category === "Food and dining") return true;
    return deal.source === "Klook" && (destination.id === "palawan" || destination.id === "manila");
  });

  return {
    prompt,
    destination,
    categories: activeCategories,
    budget,
    duration,
    styleTags: Array.from(new Set([...styleTags, ...destination.tags])).slice(0, 5),
    summary: matchedHotel
      ? `LuzonLoop matched your prompt to ${matchedHotel.name} in ${matchedHotel.area}, with price-focused hotel details and nearby Manila travel modules.`
      : `LuzonLoop matched your prompt to ${destination.name}, with ${activeCategories.map((item) => item.toLowerCase()).join(", ")} modules and a ${budget.toLowerCase()} planning style.`,
    directAnswer: matchedHotel && asksPrice
      ? `${matchedHotel.name} is estimated at ${matchedHotel.priceRange}. Rates change by date, room type, taxes, promos, and availability, so use this as a planning estimate and check the live booking page before paying.`
      : undefined,
    hotels: prioritizeHotel(byDestination(hotels)).slice(0, 3),
    accommodations: byDestination(accommodations).slice(0, 2),
    transport: byDestination(transport).concat(transport.filter((item) => prompt.toLowerCase().includes("boracay") && item.destinationId === "boracay")).slice(0, 3),
    attractions: byDestination(attractions).slice(0, 3),
    themeParks: themeParks.filter((item) => item.destinationId === destination.id || destination.id === "manila" || activeCategories.includes("Theme parks")).slice(0, 2),
    markets: byDestination(markets).slice(0, 3),
    foods: byDestination(foods).slice(0, 3),
    deals: resultDeals.slice(0, 4),
    itinerary: [
      { day: 1, title: `${destination.name} arrival and area check-in`, description: "Settle near the recommended area, confirm transfers, and keep the first night light.", category: "Transportation", estimate: budget === "Budget" ? "PHP 2,000-4,500" : "PHP 6,000-12,000" },
      { day: 2, title: "Core experience day", description: "Prioritize the strongest local experience from your categories, then add nearby food or market stops.", category: activeCategories[0], estimate: "PHP 1,500-6,500" },
      { day: 3, title: "Deals-backed add-on", description: "Use a verified activity, transport, or dining deal before heading back.", category: "Foods", estimate: "PHP 900-3,800" }
    ],
    tips: [
      "Keep all routing inside the Philippines and confirm seasonal ferry or road conditions.",
      "Book airport transfers before remote island arrivals.",
      "Use verified coupons first, then compare direct booking prices.",
      "For markets and street food, carry cash and travel light."
    ],
    budgetEstimate: budget === "Budget" ? "PHP 8,000-16,000 per person" : budget === "Luxury" ? "PHP 35,000-70,000 per person" : "PHP 18,000-35,000 per person"
  };
}

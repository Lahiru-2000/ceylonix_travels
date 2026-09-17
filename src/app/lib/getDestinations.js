import { mergeLocaleList } from "./mergeLocaleList";

export async function getDestinations(locale = "en") {
  const localeUrl = locale === "en" ? null : `/data/destinations-${locale}.json`;
  return mergeLocaleList("/data/destinations.json", localeUrl, "destinations");
}

export async function getDestinationBySlug(slug, locale = "en") {
  const destinations = await getDestinations(locale);
  return destinations.find((item) => item.slug === slug) || null;
}

export function getDestinationRegions(destinations) {
  const groups = [];

  destinations.forEach((item) => {
    const regionSlug = item.regionSlug;
    if (!regionSlug) return;
    const existing = groups.find((group) => group.regionSlug === regionSlug);
    if (existing) {
      existing.items.push(item);
      existing.ratingSum += Number(item.rating) || 0;
      return;
    }
    groups.push({
      regionSlug,
      region: item.region,
      image: item.image,
      items: [item],
      ratingSum: Number(item.rating) || 0,
    });
  });

  return groups.map((group) => ({
    regionSlug: group.regionSlug,
    region: group.region,
    image: group.image,
    count: group.items.length,
    rating: group.items.length ? (group.ratingSum / group.items.length).toFixed(1) : "0.0",
  }));
}

export function getDestinationsByRegionSlug(destinations, regionSlug) {
  return destinations.filter((item) => item.regionSlug === regionSlug);
}

export function getRelatedDestinations(destinations, current) {
  return destinations.filter((item) => item.region === current.region && item.slug !== current.slug).slice(0, 4);
}

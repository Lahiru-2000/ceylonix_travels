import { mergeLocaleList } from "./mergeLocaleList";

export async function getDestinations(locale = "en") {
  const localeUrl = locale === "en" ? null : `/data/destinations-${locale}.json`;
  return mergeLocaleList("/data/destinations.json", localeUrl, "destinations");
}

export async function getDestinationBySlug(slug, locale = "en") {
  const destinations = await getDestinations(locale);
  return destinations.find((item) => item.slug === slug) || null;
}

export function getRelatedDestinations(destinations, current) {
  return destinations.filter((item) => item.region === current.region && item.slug !== current.slug).slice(0, 4);
}

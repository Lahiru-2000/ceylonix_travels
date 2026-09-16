import { mergeLocaleList } from "./mergeLocaleList";

export async function getPackages(locale = "en") {
  const localeUrl = locale === "en" ? null : `/data/packages-${locale}.json`;
  return mergeLocaleList("/data/packages.json", localeUrl, "packages");
}

export async function getPackageBySlug(slug, locale = "en") {
  const packages = await getPackages(locale);
  return packages.find((item) => item.slug === slug) || null;
}

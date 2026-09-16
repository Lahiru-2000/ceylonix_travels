async function fetchJson(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) return null;
  return response.json();
}

export async function mergeLocaleList(baseUrl, localeUrl, listKey) {
  const base = await fetchJson(baseUrl);
  const list = base?.[listKey] || [];
  if (!localeUrl) return list;

  const localized = await fetchJson(localeUrl);
  const overlay = localized?.[listKey] || [];
  if (!overlay.length) return list;

  const bySlug = Object.fromEntries(overlay.map((item) => [item.slug, item]));
  return list.map((item) => ({ ...item, ...(bySlug[item.slug] || {}) }));
}

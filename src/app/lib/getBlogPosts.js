import { mergeLocaleList } from "./mergeLocaleList";

export async function getBlogPosts(locale = "en") {
  const localeUrl = locale === "en" ? null : `/data/blog-posts-${locale}.json`;
  return mergeLocaleList("/data/blog-posts.json", localeUrl, "posts");
}

export async function getBlogPostBySlug(slug, locale = "en") {
  const posts = await getBlogPosts(locale);
  return posts.find((post) => post.slug === slug) || null;
}

export function getRelatedBlogPosts(posts, current) {
  return posts.filter((post) => post.slug !== current.slug).slice(0, 2);
}

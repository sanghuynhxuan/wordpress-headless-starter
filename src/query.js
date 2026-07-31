export function toPostPreview(post) {
  return { id: post.id, slug: post.slug, title: post.title?.rendered ?? '', excerpt: post.excerpt?.rendered ?? '', publishedAt: post.date_gmt };
}

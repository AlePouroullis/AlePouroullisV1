export const getNavigationLink = (slug) => `/blog/post/${encodeURIComponent(slug)}`;
export const getHref = (slug) => ({
  pathname: `/blog/post/[slug]`,
  query: { slug },
});

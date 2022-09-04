export const getNavigationLink = (slug) => `/blog/post/${slug}`;
export const getHref = (slug) => ({
  pathname: `/blog/post`,
  query: { post: slug },
});

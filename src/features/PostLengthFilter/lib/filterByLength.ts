export const filterByLength = (
  posts: { title?: string; body?: string; id?: number; userId?: number; postId?: number; email?: string; name?: string }[],
  minLength: number
) =>
posts.filter((post) => {
  if (post.title) {
    return typeof post.title === 'string' && post.title.length >= minLength;
  } else if (post.name) {
    return typeof post.name === 'string' && post.name.length >= minLength;
  }
  return false;
}
);
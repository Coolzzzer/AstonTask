export const filterByLength = (
  posts: { post: string; comment: string; id: number }[],
  minLength: number
) => posts.filter(post => post.post.length >= minLength);

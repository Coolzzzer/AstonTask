export function filterByLength(
    posts: { title: string; body: string }[],
    minLength: number
  ): { title: string; body: string }[] {
    return posts.filter(post => post.body.length >= minLength);
  }
  
  
  

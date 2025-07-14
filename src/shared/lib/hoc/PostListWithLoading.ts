import type { FC } from "react";
import { withLoading } from "./withLoading"; 
import { PostList } from "../../../widgets/PostList/PostList";

export const PostListWithLoading: FC<{
  posts: { post: string; comment: string; userId: number}[];
  minLength: number;
  isLoading: boolean;
}> = withLoading(PostList);

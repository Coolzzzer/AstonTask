import type { FC } from "react";
import { withLoading } from "./withLoading"; 
import { PostList } from "../../../widgets/PostList/PostList";

export const PostListWithLoading: FC<{
  posts: { title: string; body: string }[];
  minLength: number;
  isLoading: boolean;
}> = withLoading(PostList);

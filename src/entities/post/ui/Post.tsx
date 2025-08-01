// src/entities/post/ui/Post.tsx

import type { FC } from "react";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";


type PostProps = {
  post: {
    title?: string;
    body?: string;
    id?: number;
    userId?: number;
    postId?: number;
    email?: string;
    name?: string;
  };
};

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div style={{ background: "grey", margin: "10px", width: "800px", padding: "10px" }}>
      {post.title}

      {post.name && post.email && (
        <div>
          <div>{post.name}</div>
          <div>{post.email}</div>
        </div>
      )}

      {post.body && <CommentList comments={post.body} />}
    </div>
  );
};


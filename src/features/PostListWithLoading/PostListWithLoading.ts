import { withLoading } from "../../shared/lib/hoc/withLoading";
import type { PostListProps} from "../../shared/types/post";
import { PostList } from "../../widgets/PostList/PostList";

export const PostListWithLoading = withLoading<PostListProps>(PostList);
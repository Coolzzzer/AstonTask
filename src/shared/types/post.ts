export type PostItem = {
    post: string;
    comment: string;
    id: number; 
}
export type PostListProps = {
    posts: PostItem[];
    minLength: number;
}
export type WithLoadingProps = {
    isLoading: boolean;
    minLength: number;
}
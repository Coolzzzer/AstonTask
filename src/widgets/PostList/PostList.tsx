import { PostCard } from "../../entities/post/ui/PostCard"

type objProps = {
    id: number,
    title: string,
    body: string
}

type PostListProps = {
    array: objProps[]
}

export const PostList: React.FC<PostListProps> = ({array}) => {

    return (
      <>
        <ul>
            {array.map(obj => (
                <li key={obj.id}>
                    <PostCard>
                        <h2>{obj.title}</h2>
                        <h4>{obj.body}</h4>
                    </PostCard>
                </li>
            ))}
        </ul>
      </>
    )
}


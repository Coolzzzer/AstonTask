import type { ReactNode } from "react"


type PostCardProps = {
    children: ReactNode
}

export const PostCard: React.FC<PostCardProps> = ({children}) => {
    return (
      <>
        <div>
            {children}
        </div>
      </>
    )
}

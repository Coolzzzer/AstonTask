import { useParams} from "react-router-dom";
import { useGetAlbumsByUserIdQuery } from "../entities/post/albumsApi";


export const UserAlbumsPage = () => {
  const { userId } = useParams();
  const id = Number(userId);

  const { data: albums = [], isLoading } = useGetAlbumsByUserIdQuery(id);

  if (isLoading) return <div>Loading albums...</div>;
  return (
    <div>
      {albums.map((album) => (
          <div  key={album.id} style={{ margin: "10px", padding: "10px", background: "#eee", width: "400px" }}>
            <h4>{album.title}</h4>
          </div>
      ))}
    </div>
  );
};

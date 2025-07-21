import { NavLink, useParams} from "react-router-dom";
import { useGetAlbumsByUserIdQuery } from "../../entities/post/albumsApi";


const UserAlbumsPage = () => {
  const { userId } = useParams();
  const id = Number(userId);

  const { data: albums = [], isLoading } = useGetAlbumsByUserIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {albums.map((album) => (
          <div key={album.id} style={{ margin: "10px", padding: "10px", background: "#eee", width: "400px" }}>
            <NavLink to={`/photos/${album.id}`}>
              <h4>{album.title}</h4>
            </NavLink>
          </div>
      ))}
    </div>
  );
};
export default UserAlbumsPage

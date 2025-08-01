import { NavLink, useParams} from "react-router-dom";
import { useGetAlbumsByUserIdQuery } from "../../entities/post/albumsApi";
import { Album } from "../../entities/album/ui/Album";


const UserAlbumsPage = () => {
  const { userId } = useParams();
  const parsedId = Number(userId);
  const id = parsedId >= 1 && parsedId <= 10 ? parsedId : 1;
  const { data: albums = [], isLoading } = useGetAlbumsByUserIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};
export default UserAlbumsPage

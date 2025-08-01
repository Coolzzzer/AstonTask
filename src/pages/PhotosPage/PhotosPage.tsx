import { useParams } from "react-router-dom";
import { useGetPhotosByAlbumIdQuery } from "../../entities/post/photosAli";
import { Photo } from "../../entities/photo/ui/Photo";


const PhotosPage  = () => {
    const { albumId } = useParams();
    const id = Number(albumId);
  
    const { data: photos = [], isLoading } = useGetPhotosByAlbumIdQuery(id);
    if (isLoading) return <div>Loading...</div>;
    return (
        <ul>
            {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
            ))}
        </ul>
    )
}
export default PhotosPage 
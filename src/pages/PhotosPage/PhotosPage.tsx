import { useParams } from "react-router-dom";
import { useGetPhotosByAlbumIdQuery } from "../../entities/post/photosAli";


const PhotosPage  = () => {
    const { albumId } = useParams();
    const id = Number(albumId);
  
    const { data: photos = [], isLoading } = useGetPhotosByAlbumIdQuery(id);
    if (isLoading) return <div>Loading...</div>;
    return (
            <ul>
                {photos.map((photo)=>(
                    <div key={photo.id} style={{ margin: "10px", padding: "10px", background: "#eee", width: "400px" }}>
                        <h4>{photo.title}</h4>
                        <img src={photo.url}/>
                    </div>
                ))}
            </ul>
    )
}
export default PhotosPage 
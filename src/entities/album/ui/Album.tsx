
import type { FC } from "react";
import { NavLink } from "react-router-dom";

type AlbumProps = {
  album: {
    id: number;
    title: string;
  };
};

export const Album: FC<AlbumProps> = ({ album }) => {
  return (
    <div style={{ margin: "10px", padding: "10px", background: "#eee", width: "400px" }}>
      <NavLink to={`/photos/${album.id}`}>
        <h4>{album.title}</h4>
      </NavLink>
    </div>
  );
};
import type { FC } from "react";

type PhotoProps = {
  photo: {
    id: number;
    title: string;
    url: string;
  };
};

export const Photo: FC<PhotoProps> = ({ photo }) => {
  return (
    <div style={{ margin: "10px", padding: "10px", background: "#eee", width: "400px" }}>
      <h4>{photo.title}</h4>
      <img src={photo.url} alt={photo.title} style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

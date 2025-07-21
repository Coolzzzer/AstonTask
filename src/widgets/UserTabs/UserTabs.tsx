import { NavLink, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import type { ChangeEvent } from "react";

export const UserTabs = () => {
  const params = useParams<{ userId?: string; postId?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const initialId = params.userId ?? params.postId ?? "1";
  const [selectedId, setSelectedId] = useState(initialId);

  const handleIdChange = (type: "user" | "post") => (e: ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setSelectedId(newId);
    const baseSegment = type === "user" ? "users" : "posts";
    const path = location.pathname.replace(/(users|posts)\/\d+/, `${baseSegment}/${newId}`);
    navigate(path);
  };

  return (
    <div>
      <nav style={{ marginBottom: "10px" }}>
        <NavLink to={`/users`}>Users </NavLink> |{" "}
        <NavLink to={`/users/${selectedId}/posts`}>Posts </NavLink> |{" "}
        <NavLink to={`/posts/${selectedId}/comments`}>Comments </NavLink> |{" "}
        <NavLink to={`/users/${selectedId}/albums`}>Albums </NavLink> |{" "}
        <NavLink to={`/users/${selectedId}/todos`}>Todos </NavLink>
      </nav>
      <div style={{ marginBottom: "10px" }}>
        {params.userId && (
          <>
            User:
            <select
              value={selectedId}
              onChange={handleIdChange("user")}
              style={{ marginLeft: "5px" }}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </option>
              ))}
            </select>
          </>
        )}
        {params.postId && (
          <>
            Post:
            <select
              value={selectedId}
              onChange={handleIdChange("post")}
              style={{ marginLeft: "5px" }}
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
};
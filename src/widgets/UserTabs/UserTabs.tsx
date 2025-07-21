import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const UserTabs = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const obj = useParams()
  const initialId = id ?? "1";
  const [userId, setUserId] = useState(initialId);
  const [postId, setPostId] = useState(initialId);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setUserId(newId);
    setPostId(newId);
    const currentPath = location.pathname.replace(/\/users\/\d+/, `/users/${newId}`);
    navigate(currentPath);
  };

  return (
    <div>
      <nav style={{ marginBottom: '10px' }}>
        <NavLink to={`/users`}>Users </NavLink>{" | "}
        <NavLink to={`/users/${userId}/posts`}>Posts </NavLink>{" | "}
        <NavLink to={`/posts/${postId}/comments`}>Comments </NavLink>{" | "}
        <NavLink to={`/users/${userId}/albums`}>Albums </NavLink>{" | "}
        <NavLink to={`/users/${userId}/todos`}>Todos </NavLink>
      </nav>
      <label>
      {obj.hasOwnProperty('userId') ? 
      <>
        User:
        <select value={userId} onChange={handleSelectChange} style={{ marginLeft: '5px' }}>
        {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={(i + 1).toString()}>
              {i + 1}
            </option>
          ))}
        </select>
      </>
      : 
        null
      }  
      </label>

      <Outlet />
    </div>
  );
};
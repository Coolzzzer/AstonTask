import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const UserTabs = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const initialUserId = id ?? "1";
  const [userId, setUserId] = useState(initialUserId);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setUserId(newId);
    const currentPath = location.pathname.replace(/\/users\/\d+/, `/users/${newId}`);
    navigate(currentPath);
  };

  return (
    <div>
      <nav style={{ marginBottom: '10px' }}>
        <NavLink to={`/posts`}>All </NavLink>{" | "}
        <NavLink to={`/users/${userId}/posts`}>Posts </NavLink>{" | "}
        <NavLink to={`/users/${userId}/albums`}>Albums </NavLink>{" | "}
        <NavLink to={`/users/${userId}/todos`}>Todos </NavLink>
      </nav>

      <label>
        User:
        <select value={userId} onChange={handleSelectChange} style={{ marginLeft: '5px' }}>
          {Array.from({ length: 2 }, (_, i) => (
            <option key={i + 1} value={(i + 1).toString()}>
              User {i + 1}
            </option>
          ))}
        </select>
      </label>

      <Outlet />
    </div>
  );
};

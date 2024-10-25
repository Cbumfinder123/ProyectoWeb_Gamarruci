import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">Perfil de Usuario</h2>
      <p className="profile-text">Nombre: {user.firstName} {user.lastName}</p>
      <p className="profile-text">Email: {user.email}</p>
      <Link to="/" className="btn3-danger" onClick={logout}>Cerrar sesión</Link>
    </div>
  );
};

export default Profile;

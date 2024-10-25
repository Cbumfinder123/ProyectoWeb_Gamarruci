import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
  document.title = "Gamarucci | Registro";
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/register', userData);
      alert('Usuario registrado con éxito');
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
      navigate('/user');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="register-containerU">
      <form onSubmit={handleSubmit} className="register-formU">
        <h2 className="register-titleU">Registro</h2>
        <input
          type="text"
          name="firstName"
          placeholder="Nombres"
          value={userData.firstName}
          onChange={handleChange}
          className="register-inputU"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellidos"
          value={userData.lastName}
          onChange={handleChange}
          className="register-inputU"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ingrese correo"
          value={userData.email}
          onChange={handleChange}
          className="register-inputU"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={userData.password}
          onChange={handleChange}
          className="register-inputU"
          required
        />
        <input
          type="submit"
          value="Registrar"
          className="register-buttonU"
        />
      </form>
    </div>
  );

};

export default Register;

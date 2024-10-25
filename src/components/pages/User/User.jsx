import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./User.css";

const User = () => {
  document.title = "Gamarucci | Login";
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', credentials);
      alert('Inicio de sesión exitoso');
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.dispatchEvent(new Event("storage"));
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
    }
  };

 return (
    <div className="user-containerU">
      <form onSubmit={handleSubmit} className="formU">
        <h2 className="titleU">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Ingrese correo"
          onChange={handleChange}
          className="inputU"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          className="inputU"
          required
        />
        <input
          type="submit"
          value="Ingresar"
          className="btn btn-dark buttonU"
        />
        <Link to="/register" className="linkU">Crear cuenta</Link>
      </form>
    </div>
  );
};

export default User;

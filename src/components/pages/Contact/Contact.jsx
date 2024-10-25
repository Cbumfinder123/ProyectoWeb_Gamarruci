import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  document.title = "Gamarucci | Contact";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/submit', formData);
      alert('¡Datos del formulario enviados con éxito!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar los datos del formulario:', error);
      alert('Error al enviar los datos del formulario');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contáctanos</h2>
      <p>¿Tienes alguna duda o consulta? ¡Escríbenos!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;

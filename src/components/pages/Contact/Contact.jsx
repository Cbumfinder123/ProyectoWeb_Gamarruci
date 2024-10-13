import React from 'react'

const Contact = () => {

  document.title = "Gamarucci | Contact"

  return (
    <section id="contact" class="contact-section">
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna duda o consulta? ¡Escríbenos!</p>
        <form action="#" method="POST">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" class="btn btn-success">Enviar</button>
        </form>
    </section>
  )
}

export default Contact
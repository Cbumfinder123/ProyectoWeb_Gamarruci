const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// ENDPOINT DE REGISTRO
app.post('/register', (req, res) => {
  const userData = req.body;

  // LEER USUARIOS EXISTENTES
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);

    // AÑADIR NUEVO USUARIO
    jsonData.push(userData);
    fs.writeFile('users.json', JSON.stringify(jsonData), (err) => {
      if (err) throw err;
      res.status(200).send('Usuario registrado con éxito');
    });
  });
});

// ENDPOINT DE INICIO DE SESION
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
});

//ENDPOINT DE CONTACTOS
app.post('/submit', (req, res) => {
  const formData = req.body;

  // LEE LOS DATOS ACTUALES
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);

    // AÑADE NUEVOS DATOS
    jsonData.push(formData);
    fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
      if (err) throw err;
      res.status(200).send('Datos del formulario guardados');
    });
  });
});

//INICIAR EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

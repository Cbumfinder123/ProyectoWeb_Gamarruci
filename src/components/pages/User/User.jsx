import { Link, useNavigate } from "react-router-dom"
import "./User.css"
import { useState } from "react"

const User = () => {

  document.title = "Gamarucci | Login"

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  // USANDO EL HOOK USE NAVIGATE PARA REDIRECCIONAR
  const navigate = useNavigate()

  const login = () => {

    let userArr = {
      username: user,
      passworduser: password
    }

    // CREA EL OBJETO USER Y LO AÑADE AL LOCALSTORAGE
    localStorage.setItem("user", JSON.stringify(userArr))

    navigate("/")
  }

  return (
    <div>
      <form action="">
        <h2>Login</h2>
        <input type="text" placeholder="Ingrese correo" onChange={(e) => setUser(e.target.value)} required/>
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required/>
        <input type="submit" value="Ingresar" className="btn btn-dark" onClick={login}/>
        <Link to={"/register"}>Crear cuenta</Link>
      </form>
    </div>
  )
}

export default User
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {

  // HOOJ PARA LA NAVEGACION
  const navigate = useNavigate()

  // FUNCION PARA CERRAR SESION
  const logout = () => {

    // ELIMINA EL OBJETO USER DEL LOCALSTORAGE
    localStorage.removeItem("user")

    navigate("/")
  }

  return (
    <div>
      <Link className='btn btn-danger' onClick={() => logout()}>Cerrar sesion</Link>
    </div>
  )
}

export default Profile
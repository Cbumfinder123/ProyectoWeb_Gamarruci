import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

const NavBar = () => {
  const { totalQuantity } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("storage", handleStorageChange);

    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // EFECTO NAVBAR AMPLIANDOSE PARA EL MOBILE
  const toggleMenu = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "100%") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "100%";
    }
  };

  return (
    <div className="container-navbar">
      <span style={{ padding: "10px" }} className="menu-btn" onClick={toggleMenu}>☰</span>
      <h1 to={"/"} className="title">GAMARUCCI</h1>
      {totalQuantity > 0 ? (
        <div className="cart">
          <Link to={"/cart"} className="bi bi-cart4" style={{ color: "black" }}></Link><h6>{totalQuantity}</h6>
        </div>
      ) : (
        <Link to={"/cart"} className="bi bi-cart4 cart"></Link>
      )}
      {user ? (
        <Link to={"/profile"} className="username">Hola, {user.firstName}!</Link>
      ) : (
        <Link to={"/user"} className="bi bi-person user"></Link>
      )}
      <nav id="sidebar" className="sidebar" style={{ zIndex: "99" }}>
        <a href="javascript:void(0)" className="close-btn" onClick={toggleMenu}>×</a>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"} aria-current="page" to={"/"}>HOME</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"} to={"/productos"}>PRODUCTS</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"} to={"/coleccion"}>COLLECTION</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"} to={"/bands"}>BANDS</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"} to={"/new-arrivals"}>NEW ARRIVALS</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"} to={"/contact"}>CONTACT</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"} to={"/blog"}>BLOG</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

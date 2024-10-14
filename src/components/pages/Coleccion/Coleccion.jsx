import { useEffect, useState } from "react";
import BannerC from "./BannerC";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import "./Coleccion.css";

const Coleccion = () => {
  const [productos, setProductos] = useState([]);
  document.title = "Gamarucci | Coleccion";

  useEffect(() => {
    fetch('/database/productos.json')
      .then(response => response.json())
      .then(data => {
        let filteredProductos = data.filter(p => p.category === "vinilo" || p.category === "CD");
        setProductos(filteredProductos);
      });
  }, []);

  return (
    <div>
      <BannerC/>
      <Carousel/>
      <br></br>
      <br></br>
      <a className="colecciones-title">Colecciones</a>
      <section className="container-vinilos">
        {
          productos.map(p => (
            <div key={p.id} className="card-cd" data-aos="flip-left">
              <div style={{ overflow: "hidden" }}>
                <img className="coleccion-img" src={`/images/${p.img}`} alt="" />
              </div>
              <h3>{p.banda}</h3>
              <Link to={`/producto/${p.id}`} className="btn2 btn-danger">Buy now</Link>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Coleccion;

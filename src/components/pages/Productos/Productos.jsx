import { Link, useParams } from "react-router-dom"
import "./Productos.css"
import { useEffect, useState } from "react";

const Productos = () => {

  document.title = "Gamarucci | Productos"

  const [producto, setProducto] = useState([]);

  // LLAMANDO AL ARCHIVO PRODUCTS.JSON PARA MOSTRAR EN PRODUCTOS
  useEffect(() => {
    fetch('/database/productos.json')
      .then(response => response.json())
      .then(data => {
        let ropa = data.filter(p => p.category == "ropa")

        setProducto(ropa)
      })
  }, []);

  return (
    <div>
      <div className="container-productos">
        {
          producto.map(prod => (
            <div className="item-producto" data-aos="flip-up" key={prod.id}>
              <div className="item-img-detail" >
                <img className="img-producto" src={`/images/${prod.img}`} alt="" />
              </div>
              <div className="item-desc-detail" >
                <h4 className="band">Polo {prod.banda}</h4>
                <p className="description">{prod.description}</p>
                <Link to={`/producto/${prod.id}`} className="btn btn-dark">Buy now</Link>
              </div>
            </div>
          ))
        }
      </div>
      <nav aria-label="Page navigation example" className="p-5">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Productos
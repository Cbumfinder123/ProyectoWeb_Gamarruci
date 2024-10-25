import { Link } from "react-router-dom";
import "./Productos.css";
import { useEffect, useState } from "react";

const Productos = () => {
  document.title = "Gamarucci | Productos";
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 

  useEffect(() => {
    fetch('/database/productos.json')
      .then(response => response.json())
      .then(data => {
        let ropa = data.filter(p => p.category === "ropa");
        setProductos(ropa);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div>
      <div className="container-productos">
        {currentItems.map(prod => (
          <div className="item-producto" data-aos="flip-up" key={prod.id}>
            <div className="item-img-detail">
              <img className="img-producto" src={`/images/${prod.img}`} alt="" />
            </div>
            <div className="item-desc-detail">
              <h4 className="band">Merch {prod.banda}</h4>
              <p className="description">{prod.description}</p>
              <Link to={`/producto/${prod.id}`} className="btn btn-dark">Buy now</Link>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example" className="p-5">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={handlePrevPage}>Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link">{currentPage}</a>
          </li>
          <li className={`page-item ${currentItems.length < itemsPerPage ? 'disabled' : ''}`}>
            <a className="page-link" onClick={handleNextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Productos;

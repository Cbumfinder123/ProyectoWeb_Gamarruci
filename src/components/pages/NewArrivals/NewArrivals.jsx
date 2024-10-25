import React, { useEffect, useState } from 'react';
import BanerN from './BanerN';
import { Link } from 'react-router-dom';
import './NewArrivals.css';

const NewArrivals = () => {
  const [productos, setProductos] = useState([]);
  document.title = "Gamarucci | New Arrivals";

  useEffect(() => {
    fetch('/database/productos.json')
      .then(response => response.json())
      .then(data => {
        let filteredProductos = data.filter(p => p.category === "ROPAN" || p.category === "CDN");
        setProductos(filteredProductos);
      });
  }, []);

  return (
    <div>
      <BanerN />
      <br /><br />
      <section className="container-newarrivals">
        {productos.map(p => (
          <div key={p.id} className="card-newarrivals" data-aos="flip-left">
            <div style={{ overflow: "hidden" }}>
              <img className="newarrivals-img" src={`/images/${p.img}`} alt={p.description} />
            </div>
            <h3 className='h3N'>{p.banda}</h3>
            <p className='P-arrivals'>{p.description}</p>
            <Link to={`/producto/${p.id}`} className="btn-newarrivals btn-danger">Buy now</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default NewArrivals;

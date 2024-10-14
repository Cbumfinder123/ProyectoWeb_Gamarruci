import "./BandaDetail.css"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const BandaDetail = () => {

  const [prods, setProds] = useState([])
  const {banda} = useParams()

  useEffect(() => {

    fetch("/database/productos.json")
      .then(response => response.json())
      .then(data => {
        let bandaDetail = data.filter(b => b.banda == banda.toUpperCase())

        setProds(bandaDetail)
        console.log(bandaDetail)
      })

  }, [])

  return (
    <div style={{backgroundColor: "white"}}>
      <h1 style={{backgroundColor: "black", color: "white", padding: "12px", textAlign: "center"}}>{banda.toUpperCase()}</h1>
        <div className="container-detail-card">
        {
          prods.map(p => (
            <div className="banda-detail-card">
              <img src={`/images/${p.img}`} alt="" />
              <h5>{p.description}</h5>
              <h5>Stock: {p.stock}</h5>
              <h5>S/. {p.precio}</h5>
              <Link to={`/producto/${p.id}`} className="btn btn-dark">Buy now</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BandaDetail
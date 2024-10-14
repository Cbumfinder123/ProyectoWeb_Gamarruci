import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./ItemDetail.css"

const ItemDetail = () => {

  const { addToCart } = useContext(CartContext);
  const [prodItem, setProdItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { itemId } = useParams()

  //LLAMANDO AL ARCHIVO PRODUCTOS.JSON
  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch('/database/productos.json')

        const data = await response.json()

        const item = data.find(p => p.id === Number(itemId))

        if (item) {

          setProdItem(item)
        } else {

          throw new Error('Item no encontrado')
        }
      } catch (err) {

        setError(err.message)
      } finally {

        setLoading(false)
      }
    }

    fetchData()
    
  }, [itemId])

  // FUNCION PARA AGREGAR PRDOUCTO AL CARRITO
  const addCart = () => {

    const productToAdd = {
      id: prodItem.id,
      banda: prodItem.banda,
      precio: prodItem.precio,
      quantity: quantity,
      img: prodItem.img
    }

    // FUNCION DEL CARTCONTEXT
    addToCart(productToAdd)

    // LIBRERIA TOASTIFY
    Toastify({
      text: "agregado al carrito",
      className: "info",
      style: {
        background: "black",
      }
    }).showToast();
  }

  // BOTON DE AGREGAR MAS PRODUCTO
  const Increment = () => {

    if(quantity < prodItem.stock) {

      setQuantity(quantity + 1)
    }
  }

  // BOTON DE RESTAR PRODUCTO
  const Decrement = () => {

    if(quantity > 1 ){

      setQuantity(quantity - 1)
    }
  }

  return (
    <div>
      {
      prodItem 
      && 
      <div className="item-detail-prod">
        <div>
          <img className="item-detail" src={`/images/${prodItem.img}`} alt=""/>
        </div>
        <div className="container-desc">
          <h4 className="desc">{prodItem.description}</h4>
          <h3>Precio: S/. {prodItem.precio} <i class="bi bi-cash" style={{color: "green", fontSize: "30px"}}></i></h3>
          <div style={{display: "flex", flexDirection: "column", gap: "25px", alignItems: "center"}}>
            <Link className="btn btn-dark" onClick={addCart}>Agregar al carrito</Link>
            <div style={{display: "flex", justifyContent: "center", gap: "35px", padding: "7px", alignItems: "center"}}>
              <button className="btn btn-outline-light" style={{border: "black solid"}} onClick={() => Decrement()}> ➖ </button>
              <h3>{quantity}</h3>
              <button className="btn btn-outline-light" style={{border: "black solid"}} onClick={() => Increment()}> ➕ </button>
            </div>
          </div>
          <div>
            <Link to={"/productos"} className="btn btn-primary m-2">Seguir comprando</Link>
            <Link to={"/cart"} className="btn btn-success m-2">Ir al carrito</Link>
          </div>
          <div>
            <h4>Metodos de pago</h4>
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
              <img className="pagos" src={`/images/plin-logo.png`} alt="plin" />
              <img className="pagos" src={`/images/yape-logo.webp`} alt="yape" />
              <img className="pagos" src={`/images/visa.png`} alt="Visa" />
              <img className="pagos" src={`/images/mastercard.png`} alt="Mastercard" />
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default ItemDetail
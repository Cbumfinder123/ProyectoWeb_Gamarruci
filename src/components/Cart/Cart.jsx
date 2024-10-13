import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css"

const Cart = () => {

  document.title = "Gamarucci | Carrito"

  // USANDO FUNCIONES DEL COTENTEXTO
  const { cart, deleteProduct, totalQuantity } = useContext(CartContext);

  // BORRADO DE PRODUCTO
  const deleteProducts = (id) => {

    // LIBRERIA SWEETALERT
    Swal.fire({
      icon: "error",
      title: "Estas seguro de eliminar?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {

      if (result.isConfirmed) {

        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
        
      } else if (result.isDenied) {

        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  // MUESTRA LA IMAGEN Y TEXTO DEL CARRITO VACIO
  if(totalQuantity <= 0)
    {
      return ( 
        <div className="container-cart-empty">
          <img className="carrito" src={"/images/carrito.gif"} alt="" />
          <h4>Su carrito esta vacio</h4>
        </div>
        )
    }

  return (
    <div>
      <div className="container-cart">
          {
            cart.map(prod => (
              <div className="cart-item" key={prod.id}>
                <img className="img-cart" src={`/images/${prod.img}`} alt={`${prod.banda}`} />
                <div>
                <h4>{prod.banda}</h4>
                <h4>S/. {prod.precio}</h4>
                <h5 className="unidades">{prod.quantity} unidades</h5>
                </div>
                <button className="btn btn-danger" onClick={() => deleteProducts(prod.id)}>Eliminar</button>
              </div>
            ))
          }
      </div>
      <Link to={"/checkout"} className="btn btn-success btn-finalizar">Finalizar compra</Link>
    </div>
  )
}

export default Cart
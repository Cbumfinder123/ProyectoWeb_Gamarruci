import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import "./Checkout.css"

const Checkout = () => {

  // USANDO EL TOTAL DEL CONTEXTO DEL CARRITO
  const { total } = useContext(CartContext)
  const [envio, setEnvio] = useState(15)
  let date = new Date().toLocaleString()

  useEffect(() => {

    if (total > 70) {

      setEnvio(0);
    } else {

      setEnvio(15);
    }
  }, [total]);

  // CREANDO UN VALOR NUMERICO RANDOM PARA EL TICKET DE COMPRA EXITOSA
  const numeroRan = Math.floor(Math.random() * 1000000000000)

  // ALERTA DE COMPRA EXITOSA CON SWEETALERT
  const pagar = (e) => {

    e.preventDefault()

    // LIBRERIA SWEETALERT
    Swal.fire({
      title: `Numero de ticket GC-${numeroRan}`,
      text: "Gracias por su compra",
      icon: "success"
    });

    // BORRANDO DEL LOCALSTORAGE EL CARRITO
    localStorage.removeItem("cart")
  }

  return (
    <div className="container-checkout">
      <section className="container-form-tarjeta" >
        <form action="#" onSubmit={pagar}>
          <label for="nombre">Nombre del titular</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required />

          <label for="tarjeta">Número de tarjeta</label>
          <input type="number" id="tarjeta" name="tarjeta" placeholder="1234 5678 9012 3456" required pattern="\d{16}" />

          <label for="vencimiento">Fecha de vencimiento</label>
          <input type="month" id="vencimiento" name="vencimiento" required />

          <label for="cvv">CVV</label>
          <input type="number" id="cvv" name="cvv" placeholder="123" required pattern="\d{3}" />

          <input type="submit" value="Realizar pago" />
      </form>
      </section>
      <div className="total">
        <h5>Total a pagar</h5>
        <h2>S/. {total}</h2>
        <br />
        <h4>Detalles de compra</h4>
        <h5>Envio:</h5>
        <h5>S/. {envio} ( por compras mayores a S/. 70 envio gratis )</h5>
        <br />
        <h5>Fecha de solicitud:</h5>
        <h5>{date}</h5>
        <br />
        <h4>El total es S/. {total + envio}</h4>
        <hr />
        <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
          <img className="pagos" src={`/images/plin-logo.png`} alt="plin" />
          <img className="pagos" src={`/images/yape-logo.webp`} alt="yape" />
          <img className="pagos" src={`/images/visa.png`} alt="Visa" />
          <img className="pagos" src={`/images/mastercard.png`} alt="Mastercard" />
        </div>
      </div>
    </div>
  )
}

export default Checkout
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import NavBar from "./components/NavBar/NavBar"
import Inicio from "./components/pages/Inicio/Inicio"
import Productos from "./components/pages/Productos/Productos"
import Cart from "./components/Cart/Cart"
import Coleccion from "./components/pages/Coleccion/Coleccion"
import Bands from "./components/pages/Bands/Bands"
import NewArrivals from "./components/pages/NewArrivals/NewArrivals"
import Contact from "./components/pages/Contact/Contact"
import Blog from "./components/pages/Blog/Blog"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Register from "./components/pages/Register/Register"
import User from "./components/pages/User/User"
import Checkout from "./components/pages/Checkout/Checkout"
import Profile from "./components/pages/Profile/Profile"
import BandaDetail from "./components/BandaDetail/BandaDetail"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/productos" element={<Productos />}/>
            <Route path="/coleccion" element={<Coleccion />}/>
            <Route path="/bands" element={<Bands />}/>
            <Route path="/new-arrivals" element={<NewArrivals />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/producto/:itemId" element={<ItemDetail />}/>
            <Route path="/bands/:banda" element={<BandaDetail />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

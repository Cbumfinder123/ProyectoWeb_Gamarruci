import React, { createContext, useState, useEffect } from "react";

// SE CREA EL CONTEXTO EN LA VARIABLE CARTCONTEXT
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // OBTENGO EL OBJETO CART DEL LOCALSTORAGE 
  useEffect(() => {

    const getCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(getCart);
  }, []);

  // FUNCION PARA AGREGAR PRODUCTO AL CARRITO
  const addToCart = (product) => {

    if(!isInCart(product.id)){
    
      const productToAdd = [...cart, product];

      setCart(productToAdd);

      localStorage.setItem("cart", JSON.stringify(productToAdd)); 
    } else {

      const prodModifyQuantity = cart.map(prod => prod.id === product.id ?
                                            { ...prod, quantity: prod.quantity + product.quantity }
                                            : 
                                            prod
                                          );
      
      setCart(prodModifyQuantity);
      
      localStorage.setItem("cart", JSON.stringify(prodModifyQuantity));
    }
  };

  // FUNCION QUE REVISA SI EXISTE EL PRODUCTO
  const isInCart = (id) => {

    return cart.some(prod => prod.id === id)
  }

  // FUNCION PARA BORRAR PRODUCTO
  const deleteProduct = (productId) => {

    const delProduct = cart.filter((item) => item.id !== productId);

    setCart(delProduct);

    // AGERGO EL OBJETO PRODUCTO DEL PARAMETRO productId Y LO AÑADO AL LOCALSTORAGE
    localStorage.setItem("cart", JSON.stringify(delProduct));
  };

  // FUNCION QUE DEVUELVE LA CANTIDAD DE PRODUCTOS AGREGADOS
  const getTotalQuantity = () => {

    let totalQuantity = 0

    cart.forEach(prod => {

        totalQuantity += prod.quantity
    })

    return totalQuantity
  }

  const totalQuantity = getTotalQuantity()

  // FUNCION QUE MUESTRA EL TOTAL DEL CARRITO
  const getTotal = () => {

    let total = 0

    cart.forEach(prod => {

        total += prod.quantity * prod.precio
    }) 

    return total
  }

  const total = getTotal()

  return (
    // ENVIA LAS FUNCIONES Y VARIABLES PARA TODA LA APLICACION
    <CartContext.Provider value={{ cart, addToCart, deleteProduct, totalQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};
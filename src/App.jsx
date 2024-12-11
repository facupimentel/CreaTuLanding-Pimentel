import NavBar from "./components/NavBar"

import ItemListContainer from "./components/ItemListContainer"
import { useState } from "react"
import Footer from "./components/Footer"



function App() {
  const [totalProductos, setTotalProductos] = useState(0)

  const agregarAlCarrito = ()=>{
    setTotalProductos(totalProductos + 1)
  }

  return (
    <>
      <NavBar totalProductos={totalProductos} />
      <ItemListContainer agregarAlCarrito={agregarAlCarrito}/>
      <Footer/>
    </>
  )
}

export default App

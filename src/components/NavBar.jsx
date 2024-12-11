import logo from "../img/header/logo1.png"
import CartWidget from "./CartWidget"


// eslint-disable-next-line react/prop-types
const NavBar = ({totalProductos}) => {

    
    

  return (
    <>
    <header>
        <nav className="navbar">
                <img src={logo} alt=""/>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>

                  <CartWidget totalProductos={totalProductos}/>
        </nav>
    </header>

    <div className="banner"></div>
    </>
  )
}

export default NavBar

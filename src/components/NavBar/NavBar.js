import Carrito from '../Carrito/Carrito'

const NavBar = () => {

    return (
        <nav>
            <h2 class = "h2">TIENDA</h2>    
            <div>
                <button  class = "button" >Membresías</button>
                <button class = "button">Indumentaria</button>
                <button class = "button">Artículos</button>                
            </div>        
            <Carrito />
        </nav>
    )
}

export default NavBar

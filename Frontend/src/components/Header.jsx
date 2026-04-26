import React from 'react'
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <header>
        <nav>
          <div className='nav-1'>
            <NavLink className="nav-home" to="/">TopClothes</NavLink>
            <NavLink className="nav-link" to="/categorias">Categorias</NavLink>
            </div>
            <div className='nav-2'><NavLink className="nav-cart" to="/cart" >Carrito</NavLink></div>
            
        </nav>
    </header>
  )
}

export default Header
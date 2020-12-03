import React from 'react';

import {NavLink} from "react-router-dom"
import routes from "../routes"


const Nawigation = () => {
  return(
    <header>
    <nav>
    <NavLink exact to={routes.HomePage}>Home </NavLink>
    <NavLink exact to={routes.MoviesPage}>movies </NavLink>
     </nav>
     </header>
  )
}



export default Nawigation;

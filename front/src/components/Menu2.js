import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/EstilosMenu2.css';
export const Menu2 = () => {
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container-fluid">

        <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="http://localhost:3000/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>
        </button>

        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
            <a class="navbar-brand mt-2 mt-lg-0" href="https://http://localhost:3000/">
            <img src='./images/productos/logo2.png' alt='Restaurante Delicias Italianas Logo' ></img>
            </a>
        
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
                <a class="nav-link " href="http://localhost:3000/">Ventas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="http://localhost:3000/">Menu</a>
            </li>
            </ul>
            
        </div>
        

        <div class="d-flex align-items-center ">
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
           
            <Link to='/cart'>
                    <i class='fa fa-shopping-cart fa-1  ml-4 tamIcon' aria-hidden="false"></i>
                    <span className='ml-2 fondoCarro' id='cart_count'>0</span>
           </Link>


           

            <div class="dropdown ml-2">
            <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow "
                href="http://localhost:3000/"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person-circle tamIcon ml-4" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </a>
           
            </div>
        </div>

        </div>

</nav>



    </div>
  )
}



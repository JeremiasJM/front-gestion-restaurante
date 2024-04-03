import React from "react";
import './navegador.css';
import logo from '../../resource/media/img-logo/logo-sin-bg.png';


const Navegador = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid ">
          <a className="navbar-brand" href="">
            <img
              alt="logo de Rolling Food Reservas"
              className="navbar__logo"
              src={logo}
            />
          </a>
          <a className="navbar-brand" href="#">
        
        
          </a>
          <button
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#offcanvasNavbar"
            data-bs-toggle="offcanvas"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            aria-labelledby="offcanvasNavbarLabel"
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            tabIndex="-1"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              
              </h5>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                type="button"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a aria-current="page" className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reservas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navegador;

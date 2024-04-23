import "./navegador.css";
import logo from "../../assets/resource/media/img-logo/logo-sin-bg.png";
import { Link } from "react-router-dom";
import { FaUserLock } from 'react-icons/fa';

const Navegador = () => {
  return (
    <>
      <header>
        <nav className="container-fluid navbar bg-body-css p-3">
          <div className="container-fluid">
            <Link className="navbar-brand d-none d-md-block" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="navbar">
              <div className="nav-links">
                <Link to="/login" className="nav-link">
                  <FaUserLock className="iconoLogin" />
                </Link>
                <Link to="/Reserva" className="nav-link">
                  <button className="buttonDos">Reservas</button>
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
                <span className="menu"> MENU</span>
              </button>
            </div>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-uppercase"
                  id="offcanvasNavbarLabel"
                >
                  Rolling Food
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/Reserva"
                    >
                      Reserva
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/Galeria"
                    >
                      Galeria
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/About"
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/Contacto"
                    >
                      Contacto
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/login"
                    >
                      Iniciar sesión
                    </Link>
                    <li class="nav-item">
                      <Link
                        class="nav-link active  text-uppercase"
                        aria-current="page"
                        to="/Contacto"
                      >
                        Contacto
                      </Link>
                    </li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navegador;

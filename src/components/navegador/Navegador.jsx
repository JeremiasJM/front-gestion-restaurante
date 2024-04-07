import './navegador.css';
import logo from '../../assets/resource/media/img-logo/logo-sin-bg.png';
import { Link } from 'react-router-dom';

const Navegador = () => {
  return (
    <>
      <header className="container-fluid">
        <nav class="navbar bg-body-css fixed-top">
          <div class="container-fluid ">
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              class="navbar-toggler"
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
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5
                  class="offcanvas-title text-uppercase"
                  id="offcanvasNavbarLabel"
                >
                  Rolling Food
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <Link
                      class="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/Reserva"
                    >
                      Reserva
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/Galeria"
                    >
                      Galeria
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active  text-uppercase"
                      aria-current="page"
                      to="/About"
                    >
                      Nosotros
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

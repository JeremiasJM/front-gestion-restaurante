import "./navegador.css";
import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import logo from "../../assets/resource/media/img-logo/logo-sin-bg.png";
import { Link } from "react-router-dom";
import { FaUserLock } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme } from "@mui/material/styles";
const Navegador = () => {
  const isLogeado = false;
  const isAdmin = false;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(193, 163, 98)",
      },
    },
  });
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid ">
            <Link className="navbar-brand d-none d-md-block" to="/">
              <img src={logo} className="" alt="logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse mt-4"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" className="nav-link ">
                    <button className="buttonDos">Inicio</button>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Reserva" className="nav-link ">
                    <button className="buttonDos">Reservas</button>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Galeria" className="nav-link ">
                    <button className="buttonDos">Galeria</button>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/About" className="nav-link ">
                    <button className="buttonDos">Nosotros</button>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Contacto" className="nav-link ">
                    <button className="buttonDos">Contacto</button>
                  </Link>
                </li>
              </ul>
              <div class="d-flex">
                {!isLogeado ? (
                  <div>
                    <Button
                      id=""
                      className="buttonDos"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      theme={theme}
                      color="primary"
                    >
                      Nombre
                      <IoPersonCircleOutline size={32} />
                    </Button>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {!isAdmin ? (
                        <MenuItem onClick={handleClose} className="buttonDos">
                          Cerra Session
                        </MenuItem>
                      ) : (
                        <div>
                          <MenuItem onClick={handleClose} className="buttonDos">
                            Cerra Session
                          </MenuItem>
                          <MenuItem onClick={handleClose} className="buttonDos">
                            Cerra Session
                          </MenuItem>
                        </div>
                      )}
                    </Menu>
                  </div>
                ) : (
                  <Link to="/login" className="nav-link">
                    <FaUserLock className="iconoLogin" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navegador;

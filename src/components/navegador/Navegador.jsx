import "./navegador.css";
import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import logo from "../../assets/resource/media/img-logo/logo-sin-bg.png";
import { Link } from "react-router-dom";
import { FaUserLock } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme } from "@mui/material/styles";
import { jwtDecode } from "jwt-decode";
const Navegador = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [nombre, setNombre] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLogin(true);
        setNombre(decoded.nombre);
        setIsAdmin(decoded.admin);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        setIsLogin(false);
        setIsAdmin(false);
      }
    } else {
      setIsLogin(false);
      setIsAdmin(false);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    setIsAdmin(false);
    setNombre(null);
    setAnchorEl(null);
    window.location.href = "/";
  };
  const handleAdmin = () => {
    window.location.href = "/admin";
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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid ">
            <Link className="navbar-brand d-md-block" to="/">
              <img src={logo} className="" alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mt-4"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link ">
                    <button className="buttonDos">Inicio</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reserva" className="nav-link ">
                    <button className="buttonDos">Reservas</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/galeria" className="nav-link ">
                    <button className="buttonDos">Galeria</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link ">
                    <button className="buttonDos">Nosotros</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link ">
                    <button className="buttonDos">Contacto</button>
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                {isLogin ? (
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
                      {nombre}
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
                        <MenuItem onClick={handleLogout} className="buttonDos">
                          Cerra Session
                        </MenuItem>
                      ) : (
                        <div>
                          <MenuItem onClick={handleAdmin} className="buttonDos">
                            Panel de Administrador
                          </MenuItem>
                          <MenuItem
                            onClick={handleLogout}
                            className="buttonDos"
                          >
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

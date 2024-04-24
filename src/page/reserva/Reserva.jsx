import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserva.css";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { esES } from "@mui/x-date-pickers/locales";
import { ReservaProvider } from "../../context/ReserveContext";
import Swal from "sweetalert2";
import gifSweet from '../../assets/resource/media/gif-sweetAlert/Restaurant.gif'

const Reserva = () => {
  const { addReserva, reservas } = useContext(ReservaProvider);
  const [value, setValue] = useState(dayjs());
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [comensales, setComensales] = useState(1);
  const [fecha, setFecha] = useState(dayjs());
  const [hora, setHora] = useState("20:00");
  const [email, setEmail] = useState("");

  const [validationError, setValidationError] = useState(false);

  const extractDate = (isoDate) => {
    const dateOnly = dayjs(isoDate).format("YYYY-MM-DD");
    return dateOnly;
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const email = decoded.email;
        setEmail(email);
        setIsLogin(true);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        setIsLogin(false);
      }
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !fecha || !hora || !comensales) {
      setValidationError("Complete los Campos Correspondiente");
      return;
    }
    if (!nombre || nombre.length > 10 || !/^[a-zA-Z\s]+$/.test(nombre)) {
      setValidationError("Dato no Valido: Solo letras");
      return;
    }

    if (!apellido || apellido.length > 15 || !/^[a-zA-Z\s]+$/.test(apellido)) {
      setValidationError("Dato no Valido: Solo letras");
      return;
    }

 
    const selectedDate = new Date(fecha);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (!fecha || selectedDate < currentDate) {
      setValidationError("Fecha no Dispoble");
      return;
    }
    if (!comensales || comensales < 1 || comensales >= 5) {
      setValidationError("Dato no Valido: Solo numero");
      return;
    }
   
    let contador = 0;
    for (let i = 0; i < reservas.length; i++) {
      const reserva = reservas[i];
      if (
        extractDate(reserva.fecha) === extractDate(fecha) &&
        reserva.hora === hora
      ) {
        contador++;
      }
      if (contador >= 5) {
        setValidationError("Reservas Agotadas");
        return;
      }
    }
    
    const reserva = {
      nombre,
      apellido,
      fecha, 
      hora,
      comensales,
    };
    console.log(reserva);
    addReserva(reserva);
    Swal.fire({
      title: "Reserva Realizada",
      imageUrl: gifSweet,
      imageHeight: 200,
      imageWidth: 240,
      showConfirmButton: false
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <>
      {isLogin ? (
        <div className="container reservaPage mt-4 mb-5 py-3">
          <div className="row">
            <div className="col-12 col-lg-6  d-flex  justify-content-center align-items-center  ">
              <div className="px-4 shadow p-1 p-md-5  ">
                <Row>
                  <Col>
                    <div className="seccion-reserva px-4 shadow p-1 p-md-5  text-center subtitulo mt-1 ">
                      <div>
                        <div className="text-center titulo ">Reserva</div>
                      </div>

                      <p>
                        Bienvenido a nuestro servicio de reservas en línea para
                        disfrutar de una experiencia gastronómica única.
                        Ofrecemos reservas por mesa para grupos de hasta 5
                        comensales.{" "}
                      </p>

                      <p>
                        Nuestro horario de atención es de{" "}
                        <span className="fst-italic fw-semibold">
                          Martes a Domingo, de 20:00 a 02:00
                        </span>
                        , para que puedas disfrutar de nuestra cocina de alta
                        calidad en cualquier día de la semana.
                      </p>
                      <p className="fst-italic fw-semibold text-center">
                        "Celebra los momentos importantes de la vida con
                        nosotros. Reserva tu mesa y convierte cada ocasión en
                        una experiencia inolvidable.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex  justify-content-center align-items-center">
              <div className="px-4 shadow p-1 p-md-5 ">
                <Row>
                  <Col>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          name="nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          placeholder="Nombre del usuario"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          name="apellido"
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                          placeholder="Apellido del usuario"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Dropdown id="comensales">
                          <Dropdown.Toggle className="" id="dropdown-basic">
                            Cantidad de comensales: {comensales}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {[1, 2, 3, 4, 5].map((num) => (
                              <Dropdown.Item
                                key={num}
                                onClick={() => setComensales(num)}
                              >
                                {num} persona{num > 1 ? "s" : ""}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                      <Form.Group className="mb-3 row">
                        <Form.Label className="col-sm-6 col-md-4 w-100">
                          Elegí el dia y hora :
                        </Form.Label>
                        <div className="col-sm-6 col-md-5 ">
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            value={fecha}
                            onChange={(newValue) => setFecha(newValue)} // Actualiza el estado de la fecha
                            localeText={
                              esES.components.MuiLocalizationProvider
                                .defaultProps.localeText
                            }
                          >
                            <DesktopDatePicker
                              className="form-control"
                              value={fecha}
                              onChange={(newValue) => setFecha(newValue)} // Actualiza el estado de la fecha
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                              localeText={esES.DesktopDatePicker}
                            />
                          </LocalizationProvider>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-2">
                          <Dropdown id="horario">
                            <Dropdown.Toggle className="" id="dropdown-basic">
                              {hora} Hs
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => setHora("20:00")}>
                                20:00 Hs
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => setHora("23:30")}>
                                23:30 Hs
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </Form.Group>

                      <Button
                        className="universal-button mt-5 w-100"
                        type="submit"
                      >
                        Enviar Reserva
                      </Button>
                      {validationError && (
                        <div className="col-12">
                          <div className="alert alert-danger" role="alert">
                            {validationError}
                          </div>
                        </div>
                      )}
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" d-flex  justify-content-center align-items-center  ">
          <div className="px-4 shadow p-1 p-md-5  ">
            <Row>
              <Col>
                <div className="seccion-reserva px-4 shadow p-1 p-md-5  text-center subtitulo mt-1 ">
                  <div>
                    <div className="text-center titulo ">Reserva</div>
                  </div>

                  <p>
                    Bienvenido a nuestro servicio de reservas en línea para
                    disfrutar de una experiencia gastronómica única. Le pedimos
                    por favor que pueda Iniciar session{" "}
                  </p>
                  <button
                    className="button2 type2 mt-1 mb-3"
                    onClick={() => navigate("/login")}
                  ></button>
                  <p>
                    Nuestro horario de atención es de{" "}
                    <span className="fst-italic fw-semibold">
                      Martes a Domingo, de 20:00 a 02:00
                    </span>
                    , para que puedas disfrutar de nuestra cocina de alta
                    calidad en cualquier día de la semana.
                  </p>
                  <p className="fst-italic fw-semibold text-center">
                    "Celebra los momentos importantes de la vida con nosotros.
                    Reserva tu mesa y convierte cada ocasión en una experiencia
                    inolvidable.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Reserva;

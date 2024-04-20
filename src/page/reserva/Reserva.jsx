import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserva.css";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";

import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Reserva = ({ editReserva, handleClose }) => {
  
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { createReserva, updateReserva } = useContext(ReservaProvider);
  


  const [reservas, setReservas] = useState({
    id: editReserva ? editReserva.id : uuidv4(),
    nombre: editReserva ? editReserva.nombre : "",
    fecha: editReserva ? editReserva.fecha : "",
    hora: editReserva ? editReserva.hora : "2",
    comensales: editReserva ? editReserva.comensales : "",
  });
  const handleChange = (e) => {
    setReservas({
      ...reservas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editReserva) {
      updateReserva(reservas);
      handleClose();
      setReservas({
        id: uuidv4(),
        nombre: "",
        fecha: "",
        hora: "",
        comensales: "",
      });
    } else {
      createReserva(reservas);
      setReservas({
        id: uuidv4(),
        nombre: "",
        fecha: "",
        hora: "",
        comensales: "",
      });
    }
  };

  return (
    <>
      <div className="container reservaPage  py-3">
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
                      disfrutar de una experiencia gastronómica única. Ofrecemos
                      reservas por mesa para grupos de hasta 5 comensales.{" "}
                    </p>

                    <p>
                      Nuestro horario de atención es de{" "}
                      <span className="fst-italic fw-semibold">
                        Lunes a Domingo, de 21:00 a 02:00
                      </span>
                      , para que puedas disfrutar de nuestra cocina de alta
                      calidad en cualquier día de la semana.
                    </p>
                    <p className="fst-italic fw-semibold text-center">
                      "Celebra los momentos importantes de la vida con nosotros.
                      Reserva tu mesa y convierte cada ocasión en una
                      experiencia inolvidable.
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
                      <Form.Label>Nombre y Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        value={reserva.nombre}
                        onChange={handleChange}
                        name="nombre"
                        placeholder="Nombre del usuario"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Dropdown
                        id="comensales"
                        value={reserve.comensales}
                        onChange={handleChange}
                      >
                        <Dropdown.Toggle className="" id="dropdown-basic">
                          Cantidad de comensales:
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item value="1">1 persona</Dropdown.Item>
                          <Dropdown.Item value="2">2 personas</Dropdown.Item>
                          <Dropdown.Item value="3">3 personas</Dropdown.Item>
                          <Dropdown.Item value="4">4 personas</Dropdown.Item>
                          <Dropdown.Item value="5">5 personas</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      
                    </Form.Group>
                    <Form.Group className="mb-3 row">
                      <Form.Label className="col-sm-6 col-md-4 w-100">
                        Elegi el dia y hora :
                      </Form.Label>
                      <div className="col-sm-6 col-md-4 ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            className="form-control"
                            value={selectedDate}
                            onChange={(date) => {
                              setSelectedDate(date);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                      <div className="col-sm-6 col-md-4 mt-2">
                      {/* <Dropdown
                        id="horario"
                        value={reserve.hora}
                        onChange={handleChange}
                      > */}
                        {/* <Dropdown.Toggle className="" id="dropdown-basic">
                          21:00 Hs
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item value="1" >21:00 Hs</Dropdown.Item>
                          <Dropdown.Item value="2">22:00 Hs</Dropdown.Item>
                          <Dropdown.Item value="3">23:00 Hs</Dropdown.Item>
                          <Dropdown.Item value="4">00:00 Hs</Dropdown.Item>
                          <Dropdown.Item value="5">01:00 Hs</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown> */}
                        <select
                          id="horario"
                          className="form-control"
                          value={reserve.hora}
                          onChange={handleChange}
                        >
                          <option value="21:00">21:00 Hs</option>
                          <option value="22:00">
                            22:00 Hs
                          </option>
                          <option value="23:00">23:00 Hs</option>
                          <option value="00:00">00:00 Hs</option>
                          <option value="01:00">01:00 Hs</option>
                        </select> 
                      </div>
                    </Form.Group>

                    <Button
                      className="universal-button mt-5 w-100"
                      type="submit"
                      
                    >
                      Enviar Reserva
                    </Button>
                    <div className="mt-4 button-borders w-100">
                    <Button
                      className="primary-button w-100"
                      type="submit"
                      
                    >
                      Enviar Reserva
                    </Button></div>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Reserva.propTypes = {
  editReserve: PropTypes.object,
};

export default Reserva;

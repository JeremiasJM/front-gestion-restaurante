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
  const { createReserva, updateReserva } = useContext(ReservaProvider);

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const [validationError, setValidationError] = useState("");

  const [reserva, setReserva] = useState({
    id: editReserva ? editReserva.id : uuidv4(),
    nombre: editReserva ? editReserva.nombre : "",
    fecha: editReserva ? editReserva.fecha : "",
    hora: editReserva ? editReserva.hora : "",
    comensales: editReserva ? editReserva.comensales : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserva({
      ...reserva,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, fecha, hora, comensales } = reserva;
    let validationError = "";

    if (!nombre || !apellido || !fecha || !hora || !comensales) {
      validationError("Complete los Campos Correspondientes");
      return;
    }
    if (!nombre || nombre.length > 10 || !/^[a-zA-Z\s]+$/.test(nombre)) {
      validationError("Dato no Valido: Solo letras");
      return;
    }

    if (!apellido || apellido.length > 15 || !/^[a-zA-Z\s]+$/.test(apellido)) {
      validationError("Dato no Valido: Solo letras");
      return;
    }
    if (isNaN(comensales) || comensales < 1 || comensales > 5) {
      validationError("Seleccione un numero de comensales entre 1 y 5");
    } else {
      const horaValida = ["21:00", "22:00", "23:00", "00:00", "01:00"].includes(
        hora
      );
      if (!horaValida) {
        validationError(
          "Seleccione una hora valida entre las 21:00 y las 01:00"
        );
      }
      const fechaActual = new Date();
      const fechaReserva = new Date(fecha);
      if (fechaReserva < fechaActual) {
        validationError("La fecha de reserva debe ser en el futuro");
      }
    }

    setValidationError(validationError);

    if (!validationError) {
      if (editReserva) {
        updateReserva(reserva);
        handleClose();
      }
    } else {
      createReserva(reserva);
    }

    setReserva({
      id: uuidv4(),
      nombre: "",
      fecha: "",
      hora: "",
      comensales: "",
    });

    Swal.fire({
      position: "top-center",
      iconHtml: "",
      title: "Reserva enviada con exito.",
      showConfirmButton: false,
      timer: 3500,
    });
  };

  return (
    <>
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
                      disfrutar de una experiencia gastronómica única. Ofrecemos
                      reservas por mesa para grupos de hasta 5 comensales.{" "}
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
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        value={reserva.nombre}
                        onChange={handleChange}
                        name="nombre"
                        placeholder="Nombre del usuario"
                      />
                    </Form.Group>

                    {validationError && (
                      <Form.Text className="text-danger">
                        Completa el campo
                      </Form.Text>
                    )}
                    <Form.Group className="mb-3">
                      <Form.Label> Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        value={reserva.apellido}
                        onChange={handleChange}
                        name="apellido"
                        placeholder="Nombre del usuario"
                      />
                    </Form.Group>
                    {validationError && (
                      <Form.Text className="text-danger">
                        Completa el campo
                      </Form.Text>
                    )}
                    <Form.Group className="mb-3">
                      <Dropdown
                        id="comensales"
                        value={reserva.comensales}
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
                        Elegí el dia y hora :
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
                        <Dropdown
                          id="horario"
                          value={reserva.hora}
                          onChange={handleChange}
                        >
                          <Dropdown.Toggle className="" id="dropdown-basic">
                            21:00 Hs
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item value="1">21:00 Hs</Dropdown.Item>
                            <Dropdown.Item value="2">22:00 Hs</Dropdown.Item>
                            <Dropdown.Item value="3">23:00 Hs</Dropdown.Item>
                            <Dropdown.Item value="4">00:00 Hs</Dropdown.Item>
                            <Dropdown.Item value="5">01:00 Hs</Dropdown.Item>
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
                    <div className="mt-4 button-borders w-100">
                      <Button className="primary-button w-100" type="submit">
                        Enviar Reserva
                      </Button>
                    </div>
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
  editReserva: PropTypes.object,
};

export default Reserva;

import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserva.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { ReservaProvider } from "../../context/ReserveContext";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { v4 as uuidv4 } from "uuid";
import {tenedorgif} from '../../assets/resource/media/iconos/tenedor-gif.gif'

const Reserva = () => {
  const { addReserva, reservas } = useContext(ReservaProvider);

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [validationErrors, setValidationErrors] = useState({});
  const [reserva, setReserva] = useState({
    id: uuidv4(),
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    comensales: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserva({
      ...reserva,
      [name]: value,
    });
  };

  const extractDate = (isoDateString) => {
    const dateOnly = isoDateString.split("T")[0];
    return dateOnly;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, fecha, hora, comensales } = reserva;
    let errors = {};

    if (!nombre || !apellido || !fecha || !hora || !comensales) {
      errors.emptyFields = "Complete todos los campos.";
    }

    if (!nombre || nombre.length > 10 || !/^[a-zA-Z\s]+$/.test(nombre)) {
      errors.nombre = "Nombre no válido: solo letras hasta 10 caracteres.";
    }

    if (!apellido || apellido.length > 15 || !/^[a-zA-Z\s]+$/.test(apellido)) {
      errors.apellido = "Apellido no válido: solo letras hasta 15 caracteres.";
    }

    if (isNaN(comensales) || comensales < 1 || comensales > 5) {
      errors.comensales = "Seleccione un número de comensales entre 1 y 5.";
    }

    const horaValida = ["21:00", "22:00", "23:00", "00:00", "01:00"].includes(hora);
    if (!horaValida) {
      errors.hora = "Seleccione una hora válida entre las 21:00 y las 01:00.";
    }

    const fechaActual = new Date();
    const fechaReserva = new Date(fecha);
    if (fechaReserva < fechaActual) {
      Swal.fire({
        position: '',
        iconHtml:{tenedorgif},
        title: 'Fecha no disponible',
        showConfirmButton: false,
        timer: 2500,
      })
    }

    for (let i = 0; i < reservas.length ; i++){
      const vreserva = reservas[i]
      
      if(extractDate(vreserva.fecha) === extractDate(fecha) && vreserva.hora === hora ){
       
        
        setValidationErrors("Reserva no disponible")
        Swal.fire({
          position: '',
          iconHtml:
            '',
          title: 'Reserva no disponible',
          showConfirmButton: false,
          timer: 2500,
        })
        return
      };
    } ;

    if (Object.keys(errors).length === 0) {
      addReserva(reserva);

      // Reset fields and errors after successful submission
      setReserva({
        id: uuidv4(),
        nombre: "",
        apellido: "",
        fecha: "",
        hora: "",
        comensales: "",
      });
      setSelectedDate(dayjs());
      setValidationErrors({});
      Swal.fire({
        position: '',
        iconHtml:
          '',
        title: 'Formulario enviado con exito.',
        showConfirmButton: false,
        timer: 2500,
    });

    } else {
      setValidationErrors(errors);
    }

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
                        isInvalid={validationErrors.nombre}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validationErrors.nombre}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        value={reserva.apellido}
                        onChange={handleChange}
                        name="apellido"
                        placeholder="Apellido del usuario"
                        isInvalid={validationErrors.apellido}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validationErrors.apellido}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Cantidad de comensales:</Form.Label>
                      <Form.Control
                        as="select"
                        value={reserva.comensales}
                        onChange={handleChange}
                        name="comensales"
                        isInvalid={validationErrors.comensales}
                      >
                        <option value="">Seleccione</option>
                        <option value="1">1 persona</option>
                        <option value="2">2 personas</option>
                        <option value="3">3 personas</option>
                        <option value="4">4 personas</option>
                        <option value="5">5 personas</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {validationErrors.comensales}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 row">
                      <Form.Label className="col-sm-6 col-md-4 w-100">
                        Elige el día y hora:
                      </Form.Label>
                      <div className="col-sm-6 col-md-4 ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            className="form-control"
                            value={selectedDate}
                            onChange={(date) => {
                              setSelectedDate(date);
                              setReserva({
                                ...reserva,
                                fecha: date.format("YYYY-MM-DD"),
                              });
                            }}
                            renderInput={(props) => <TextField {...props} />}
                          />
                        </LocalizationProvider>
                        {setValidationErrors.fecha && (
                          <div className="text-danger">{validationErrors.fecha}</div>
                        )}
                      </div>
                      <div className="col-sm-6 col-md-4 mt-2">
                        <Form.Control
                          as="select"
                          value={reserva.hora}
                          onChange={handleChange}
                          name="hora"
                          isInvalid={validationErrors.hora}
                        >
                          <option value="">Seleccione</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                          <option value="23:00">23:00</option>
                          <option value="00:00">00:00</option>
                          <option value="01:00">01:00</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.hora}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

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

export default Reserva;
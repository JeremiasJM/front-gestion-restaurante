import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserva.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ReservaProvider } from "../../context/ReservaContext";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Reserva = ({ editarReserva, handleClose }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { createReserve, updateReserve } = useContext(ReservaProvider);
  
  const [reserve, setReserve] = useState({
    id: editarReserva ? editarReserva.id : uuidv4(),
    nombre: editarReserva ? editarReserva.nombre : "",
    fecha: editarReserva ? editarReserva.fecha : "",
    hora: editarReserva ? editarReserva.hora : "",
    comensales: editarReserva ? editarReserva.comensales : "",
  });
    const handleChange = (e) =>{

      setReserve({
        ...reserve ,
        [e.target.name]:
          e.target.value 
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(editarReserva){
        updateReserve(reserve);
        handleClose();
        setReserve({
          id: uuidv4(),
          nombre: "",
          fecha:"",
          hora:"",
          comensales: "",
        });
      } else{
        createReserve(reserve);
        setReserve({
          id: uuidv4(),
          nombre: "",
          fecha:"",
          hora:"",
          comensales: "",
        });
      };
    }
  
  


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
                          value={reserve.nombre}
                          onChange={handleChange}
                          name="nombre"
                          placeholder="Nombre del usuario"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Cantidad de comensales: </Form.Label>
                        <select 
                        id="comensales" 
                        className="form-control"
                        value={reserve.comensales}
                        onChange={handleChange}
                        >
                          <option value="1">1 persona</option>
                          <option value="2">
                            2 personas
                          </option>
                          <option value="3">3 personas</option>
                          <option value="4">4 personas</option>
                          <option value="5">5 personas</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="mb-3 row">
                        <Form.Label className="col-sm-6 col-md-4">
                          Elegi el dia y hora :{" "}
                        </Form.Label>
                        <div className="col-sm-6 col-md-4">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              className="form-control"
                              value={selectedDate}
                              onChange={(date) => {
                                setSelectedDate(date);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <select
                           id="horario" 
                           className="form-control"
                           value={reserve.hora}
                           onChange={handleChange}
                           >
                            <option value="1">21:00 Hs</option>
                            <option value="2" selected>
                              22:00 Hs
                            </option>
                            <option value="3">23:00 Hs</option>
                            <option value="4">00:00 Hs</option>
                            <option value="5">01:00 Hs</option>
                          </select>
                        </div>
                      </Form.Group>

                      <Button
                        className="mt-5 w-100"
                        type="submit"
                        variant="warning"
                      >
                        Enviar Reserva
                      </Button>
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
    editarReserva: PropTypes.object,
  };

export default Reserva;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserva.css";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";

import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Reserva = () => {
  const [value, setValue] = useState(dayjs());

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
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre y Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Nombre del usuario"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Dropdown id="comensales">
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
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                      <div className="col-sm-6 col-md-4 mt-2">
                        <Dropdown id="horario">
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

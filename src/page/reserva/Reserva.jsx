
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserva.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


const Reserva = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <>
      <div className="d-flex justify-content-center align-items-center reservaPage ">
        <div className="px-4 shadow p-1 p-md-5  ">
          <div>
            <div className="text-center titulo ">Reserva</div>
          </div>

          <Row>
            <Col>
              <div className="seccion-reserva p-2 px-5 py-5 text-center subtitulo ">
                <p>
                  Celebra los momentos importantes de la vida con nosotros.
                  Reserva tu mesa y convierte cualquier ocasión en un festín
                  inolvidable.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center my-5  ">
        <div className="px-4 shadow p-1 p-md-5 mt-5 w-50">
          <Row>
            <Col>
              <Form>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Nombre del usuario"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      name="apellido"
                      placeholder="Apellido del usuario"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Cantidad de comensales </Form.Label>
                    <select id="comensales" className="form-control">
                      <option value="1">1 persona</option>
                      <option value="2" selected>
                        2 personas
                      </option>
                      <option value="3">3 personas</option>
                      <option value="4">4 personas</option>
                      <option value="5">5 personas</option>
                      <option value="6">6 o mas personas</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Elegi el dia y hora que te gustaria reservar:{" "}
                    </Form.Label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Form.Group>

                  <Button
                    className="mt-5 w-100"
                    type="submit"
                    variant="warning"
                  >
                    Enviar Reserva
                  </Button>
                </Form>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Reserva;

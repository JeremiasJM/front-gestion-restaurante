import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const FormRegister = ({ tipo }) => {
  const [usuario, setUsuario] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    admin: false,
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(usuario, "<-- Usuario a enviar");

    setUsuario({
      id: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      admin: false,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col
          xs={8}
          sm={9}
          md={8}
          lg={10}
          className="border border-4 rounded border-warning p-4"
        >
          <h3 className="text-warning text-center mb-4">{tipo}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <InputGroup className="mb-3">
                <InputGroup.Text className="text-warning">
                  <i className="bi bi-file-person"></i>
                </InputGroup.Text>

                <Form.Control
                  className="text-center font-monospace"
                  type="text"
                  value={usuario.nombre}
                  name="nombre"
                  placeholder="Nombre del Usuario"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text className="text-warning">
                  <i className="bi bi-person-vcard-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  className="text-center font-monospace"
                  type="text"
                  value={usuario.apellido}
                  name="apellido"
                  placeholder="Apellido del usuario"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text className="text-warning">
                  <i className="bi bi-envelope-at-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  className="text-center font-monospace"
                  type="email"
                  value={usuario.email}
                  name="email"
                  placeholder="Insertar email del usuario"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text className="text-warning">
                  <i className="bi bi-eye-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  className="text-center font-monospace"
                  type="password"
                  value={usuario.password}
                  name="password"
                  placeholder="Contraseña del usuario"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Col className="text-end">
              <Button type="submit" variant="warning">
                Registrarse
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormRegister;

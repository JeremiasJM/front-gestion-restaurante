import { useContext, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './Register.css';
import { UsersProvider } from '../../context/UsersContext';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, usuarios} = useContext(UsersProvider);
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
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

    const existe = usuarios.find((user) => user.email === usuario.email);

    if(usuario.nombre.length !== 0 && usuario.apellido.length !== 0 && usuario.password.length !== 0 && !existe){
      
      console.log(usuarios, "<--usuarios Register");

      createUser(usuario);
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario registrado!",
        showConfirmButtom: false,
        timer: 1500,
      });

      setUsuario({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        admin: false,
      });
      navigate("/");

    }else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Verifique e ingrese correctamente todos los datos, por favor.",
        showConfirmButtom: false,
        timer: 1500,
      });
      console.error("Verifique e ingrese correctamente todos los datos, por favor.");
    }

  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center bg_register vh-100">
      <Row className="justify-content-center  w-100  px-5">
        <Col
          sm={10}
          md={9}
          lg={8}
          xl={6}
          className="border border-5 rounded border-warning p-4 card_register align-items-center shadow"
        >




          <h3 className="text-center mb-4 titulo">Registro</h3>
          <Form onSubmit={handleSubmit} className="px-3">
            <Form.Group className="mb-3">
              <InputGroup className="mb-3">
                <InputGroup.Text className="text-warning">
                  <i className="bi bi-file-person"></i>
                </InputGroup.Text>

                <Form.Control
                  className="ps-md-4 ps-xxl-5"
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
                  className="ps-md-4 ps-xxl-5"
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
                  className="ps-md-4 ps-xxl-5"
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
                  className="ps-md-4 ps-xxl-5"
                  type="password"
                  value={usuario.password}
                  name="password"
                  placeholder="Contraseña del usuario"
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Button
                className="mt-4 w-100  button_register"
                variant="warning"
                type="submit"
              >
                Registrarse
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
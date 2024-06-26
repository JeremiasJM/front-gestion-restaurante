import { useState, useContext } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Register.css";
import { UsersProvider } from "../../context/UsersContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPassword, MdEmail, MdDangerous } from "react-icons/md";
import { FaUserAlt, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";

const Register = () => {
  const { addUser, usuarios } = useContext(UsersProvider);
  const navigate = useNavigate();

  const [eye1, setEye1] = useState(false);
  const [equalPasswords, setEqualPasswords] = useState(true);
  let [existe, setExiste] = useState(false);

  const [usuario, setUsuario] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    admin: false,
    repeatPass: "",
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });

    if (e.target.name == "password") {
      setEqualPasswords(e.target.value === usuario.repeatPass);
    } else if (e.target.name == "repeatPass") {
      setEqualPasswords(e.target.value === usuario.password);
    }
  };

  // ...

  let usuariosArray = Object.values(usuarios);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existe = usuariosArray.some((user) => user.email === usuario.email);

    if (
      usuario.nombre.length !== 0 &&
      usuario.apellido.length !== 0 &&
      usuario.password.length !== 0 &&
      !existe &&
      equalPasswords
    ) {
      addUser(usuario);

      Swal.fire({
        imageUrl:
          "https://i.pinimg.com/originals/98/e1/2a/98e12ad7295a3b653cae1d3e7f4de764.gif",
        imageHeight: "200",
        imageWidth: "240",
        title: "Usuario registrado!",
        showConfirmButton: false,
        timer: "4500",
      });

      setUsuario({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        admin: false,
        repeatPass: "",
      });

      navigate("/login");
    } else {
      Swal.fire({
        imageUrl:
          "https://i.pinimg.com/originals/ab/a7/24/aba724ba3b793dbd8058bccf0b5f3b9e.gif",
        imageHeight: "200",
        imageWidth: "240",
        title: "Error en el registro",
        html: "<p>Verifique e ingrese correctamente todos los datos, por favor.</p>",
        showConfirmButton: false,
        timer: "4500",
      });
      console.error(
        "Verifique e ingrese correctamente todos los datos, por favor."
      );
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center  bg_register vh-100"
    >
      <Row className="justify-content-center  w-100  px-5">
        <Col
          sm={10}
          md={9}
          lg={8}
          xl={6}
          className="border border-5 rounded border-warning p-4 card_register align-items-center shadow"
        >
          <h3 className="text-center mb-4 titulo">Registrate</h3>
          <Form onSubmit={handleSubmit} className="px-3">
            <Form.Group className="my-3">
              <InputGroup className="mb-3">
                <InputGroup.Text className="labels">
                  <FaUserAlt />
                </InputGroup.Text>

                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1 rounded rounded-start-0"
                  type="text"
                  value={usuario.nombre}
                  name="nombre"
                  placeholder="Insertar nombre del usuario"
                  onChange={handleChange}
                  maxLength="30"
                  minLength="5"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="my-3">
              <InputGroup>
                <InputGroup.Text className="labels">
                  <FaHouseChimneyUser />
                </InputGroup.Text>
                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1 rounded rounded-start-0"
                  type="text"
                  value={usuario.apellido}
                  name="apellido"
                  placeholder="Insertar apellido del usuario"
                  onChange={handleChange}
                  maxLength="30"
                  minLength="5"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="my-3">
              <InputGroup>
                <InputGroup.Text className="labels">
                  <MdEmail />
                </InputGroup.Text>
                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1 rounded rounded-start-0"
                  type="email"
                  value={usuario.email}
                  name="email"
                  placeholder="Email del usuario"
                  onChange={handleChange}
                  maxLength="40"
                  minLength="5"
                />
              </InputGroup>
            </Form.Group>

            {existe ? (
              <div className="text-center text-danger mb-2">
                <MdDangerous />
                El email ya está en uso. Introduzca uno nuevo.
              </div>
            ) : null}

            <Form.Group className="my-3">
              <InputGroup>
                <InputGroup.Text className="labels">
                  <RiLockPasswordLine />
                </InputGroup.Text>
                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1"
                  type={eye1 ? "text" : "password"}
                  value={usuario.password}
                  name="password"
                  placeholder="Ingrese su contraseña"
                  onChange={handleChange}
                  maxLength="40"
                  minLength="5"
                />
                <Button
                  variant=""
                  className="labels border border-2 border-start-0"
                  onClick={() => setEye1(!eye1)}
                >
                  {eye1 ? <FaRegEye /> : <FaRegEyeSlash />}
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group className="my-3">
              <InputGroup>
                <InputGroup.Text className="labels">
                  <MdPassword />
                </InputGroup.Text>
                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1"
                  type="password"
                  value={usuario.repeatPass}
                  name="repeatPass"
                  placeholder="Repita la contraseña"
                  onChange={handleChange}
                  maxLength="40"
                  minLength="5"
                  onPaste={(e) => e.preventDefault()}
                />
              </InputGroup>
            </Form.Group>

            {equalPasswords ? null : (
              <div className="text-center text-danger">
                <MdDangerous />
                Las contraseñas no coinciden
              </div>
            )}

            <Button
              className="mt-3 w-100  button_register"
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

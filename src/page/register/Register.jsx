import { useContext, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './Register.css';
import { UsersProvider } from '../../context/UsersContext';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { RiLockPasswordLine  } from "react-icons/ri";
import { MdPassword, MdEmail, MdDangerous  } from "react-icons/md";
import { FaUserAlt, FaRegEyeSlash, FaRegEye   } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";


const Register = () => {
  const { createUser, usuarios} = useContext(UsersProvider);
  const navigate = useNavigate();

  const [eye1, setEye1] = useState(false);
  const [equalPasswords, setEqualPasswords] = useState(true);
  const [camposValidos, setCamposValidos] = useState(true);

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    admin: false,
    repeatPass: ""
  });


  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });

    if(e.target.name == "password"){
      setEqualPasswords(e.target.value === usuario.repeatPass);
    }else if(e.target.name == "repeatPass"){
      setEqualPasswords(e.target.value === usuario.password);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existe = usuarios.find((user) => user.email === usuario.email);
    
    if(usuario.nombre.length !== 0 && usuario.apellido.length !== 0 && usuario.password.length !== 0 && !existe && equalPasswords){
      
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
        repeatPass: ""
      });
      navigate("/");

    }else{
      setCamposValidos(false);
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
        <Col sm={10} md={9} lg={8} xl={6} 
          className="border border-5 rounded border-warning p-4 card_register align-items-center shadow"
        >
          <h3 className="text-center mb-4 titulo">Registrate</h3>
          <Form onSubmit={handleSubmit} className="px-3">
            <Form.Group className="mb-3">
              <InputGroup className="mb-3">
                <InputGroup.Text className="labels">
                <FaUserAlt />
                </InputGroup.Text>

                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1 rounded rounded-start-0"
                  type="text"
                  value={usuario.nombre}
                  name="nombre"
                  placeholder="Nombre del Usuario"
                  onChange={handleChange}
                  maxLength="30"
                  minLength="5"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text className="labels">
                  <FaHouseChimneyUser />
                </InputGroup.Text>
                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1 rounded rounded-start-0"
                  type="text"
                  value={usuario.apellido}
                  name="apellido"
                  placeholder="Apellido del usuario"
                  onChange={handleChange}
                  maxLength="30"
                  minLength="5"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
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
                <Button variant='' className='labels border border-2 border-start-0' onClick={() => setEye1(!eye1)}>
                  { eye1 ? <FaRegEye /> : <FaRegEyeSlash  />}
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-1">
              <InputGroup>
                <InputGroup.Text className="labels">
                  <MdPassword />
                </InputGroup.Text>
                <Form.Control
                  className="ps-md-4 ps-xxl-5 border border-start-1"
                  type= "password"
                  value={usuario.repeatPass}
                  name="repeatPass"
                  placeholder="Repita la contraseña"
                  onChange={handleChange}
                  maxLength="40"
                  minLength="5"
                />

                
              </InputGroup>
            </Form.Group>

            {equalPasswords ? null : <div className="text-center mt-2 text-danger"><MdDangerous />Las contraseñas no coinciden</div>}

            {camposValidos ? null : <div className="text-center mt-2 text-danger"><MdDangerous />Verifique e ingrese correctamente todos los datos, por favor.</div>}
            
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
import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import iconUsers from "../../assets/resource/media/iconos/icons-user.png";
import iconPassword from "../../assets/resource/media/iconos/icons-password.png";
import { useNavigate } from "react-router";
import Register from "../../page/register/Register"
import { useContext, useEffect, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Login = (handleClose) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUsuario, usuarioLogueado } = useContext(UsersProvider);

   
  useEffect(() => {
    if (usuarioLogueado) {
      //console.log(usuarioLogueado.nombre,"nombre necesito")
     Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido ",
        showConfirmButton: false,
        timer: 5000,
      });
      
      const usuario = {
        nombre: usuarioLogueado.nombre,
        apellido: usuarioLogueado.apellido,
        email: usuarioLogueado.email,
        admin: usuarioLogueado.admin,
        //id: usuarioLogueado.id,
      };
      
      navigate("/");
      window.location.reload(true);
      localStorage.setItem("user", JSON.stringify(usuario));
      handleClose();
    } 
  }, [usuarioLogueado, handleClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      loginUsuario({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  const registro = () => {
    navigate("/registro");
    handleClose();
  };

  return (
    <>
      <div className="bg_login d-flex justify-content-center align-items-center vh-100">
        <div className="card_login px-4 shadow p-1 p-md-5 mt-5 ">
          <div>
            <div className="text-center titulo">Inicia Sesión</div>
            <Form  onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="input-group mt-3">
                  <div className="input-group-text bg-light">
                    <Image className="login_form_img" 
                    src={iconUsers} 
                    alt="icono usuario"/>
                  </div>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    maxLength="40"
                    minLength="3"
                    placeholder="Escriba su email"
                    
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="input-group mt-3">
                  <div className="input-group-text bg-light">
                    <Image className="login_form_img" 
                    src={iconPassword} 
                    alt="icono password"/>
                  </div>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    maxLength="40"
                    minLength="5"
                    placeholder="Escriba su contraseña"
                    
                  />
                </div>
              </Form.Group>
              <Button
                className="mt-4 w-100  button-login"
                variant=""
                type="submit"
              >
                Iniciar Sesión
              </Button>
            </Form>
          </div>

          <Form.Group className="d-flex flex-column align-items-center flex-md-row  justify-content-center my-4 gap-4 ">
            <Form.Check
              className="d-flex align-items-center gap-1"
              type="checkbox"
              id="recuerdameInput"
            />
            <Form.Label className="pt-1 text-dark" htmlFor="recuerdameInput">
              Recuerdame
            </Form.Label>

            <div className="pt-1 d-inline-block text-center ">
              <a
                href="#"
                className="text-decoration-none text-dark fw-semibold fst-italic"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </Form.Group>
          <div className="d-flex gap-1 justify-content-center mt-2">
            <div>
              <a>
                <p className="text-black">¿No posees cuenta?</p>
              </a>
            </div>
            <a
              onClick={() => navigate("/Register")}
              className="text-decoration-none text-dark fw-bold text__shadow"
            >
              Registrate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

  export default Login; 

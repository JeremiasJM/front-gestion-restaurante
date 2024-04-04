import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import iconUsers from "../../resource/media/iconos/icons-user.png"
import iconPassword from "../../resource/media/iconos/icons-password.png"

const Login = () => {
  return (
    <>
    <div className="bg_login d-flex justify-content-center align-items-center vh-100">
      <div className="card_login px-4 shadow p-1 p-md-5 mt-5 ">
        <div>
          <div className="text-center titulo">Inicia Sesion</div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="input-group mt-3">
                <div className="input-group-text bg-light">
                  <Image
                    className="login_form_img"
                    src={iconUsers}
                  />
                </div>
                <Form.Control
                  type="email"
                  placeholder="Escriba su email"
                  maxLength="40"
                  minLength="5"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="input-group mt-3">
                <div className="input-group-text bg-light">
                  <Image
                    className="login_form_img"
                    src={iconPassword}
                  />
                </div>
                <Form.Control
                  type="password"
                  placeholder="Escriba su contraseña"
                  maxLength="40"
                  minLength="5"
                />

              </div>
            </Form.Group>
            <Button className="mt-4 w-100  button-login" variant="" type="submit">
              Iniciar Sesion
            </Button>
          </Form>
        </div>
        <div className="d-flex flex-column align-items-center flex-md-row  justify-content-center my-4 gap-4">
          <Form.Group className="d-flex align-items-center gap-2 ">
            <Form.Control className="form-check-input  py-2 px-2 " type="checkbox" />
            <Form.Label className="pt-1 text-dark">Recuerdame</Form.Label>
          </Form.Group>
          <div className="pt-1 d-inline-block text-center ">
            <a
              href="#"
              class="text-decoration-none text-dark fw-semibold fst-italic"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <div class="d-flex gap-1 justify-content-center mt-2">
          <div>
            <a>
              <p class="text-black">¿No posees cuenta?</p>
            </a>
          </div>
          <a
            href="../registro/registro.html"
            class="text-decoration-none text-dark fw-bold text__shadow"
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

import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="px-4 shadow p-1 p-md-5 w-50 h-50">
        <div>
          <div className="text-center">Inicia Sesion</div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="input-group mt-3">
                <div className="input-group-text bg-light">
                  <Image
                    className="login_form_img"
                    src="  "
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
              <div className="input-group mt-2">
                <div className="input-group-text bg-light">
                  <Image
                    className="login_form_img"
                    src="https://w7.pngwing.com/pngs/778/12/png-transparent-computer-icons-skype-icon-design-change-password-logo-internet-share-icon.png"
                  />
                </div>
                <Form.Control
                  type="password"
                  placeholder="Escribe tu contraseña"
                />

                <div className="invalid-feedback w-100 bg-danger ">
                  <p className="d-block text center fw-bold  text-dark rounded-1 ">
                    Credenciales incorrectas
                  </p>
                </div>
              </div>
            </Form.Group>
            <Button className="mt-4 w-100" variant="primary" type="submit">
              Iniciar Sesion
            </Button>
          </Form>
        </div>
        <div className="d-flex flex-column align-items-center flex-md-row  justify-content-center my-4 gap-4">
          <Form.Group className="d-flex align-items-center gap-1">
            <Form.Control className="form-check-input bg-ligth" type="checkbox" />
            <Form.Label className="pt-1 text-dark ">Recuerdame</Form.Label>
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
    </>
  );
};

export default Login;

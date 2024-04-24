

import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recoverPassword.css";
import iconPassword from "../../assets/resource/media/iconos/icons-password.png";
import iconUsers from "../../assets/resource/media/iconos/icons-user.png";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";
import axios from "axios";
import Swal from "sweetalert2";

const RecoverPassword = () => {
  const navigate = useNavigate();
  const { getUsers,usuarios} = useContext(UsersProvider);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  let [existe, setExiste] = useState(false);

  const usuariosArray = Object.values(usuarios);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        setError("Por favor, ingrese un correo electrónico válido.");
        return;
    }
    
    // Verificar si el correo electrónico existe en el conjunto de datos de usuarios
    
    console.log("Email ingresado:", email);
    console.log("Usuarios existentes:", usuarios);
    
    console.log(usuariosArray,"<-----------------usuarios desde el handlesumit")
    
    const existe = usuariosArray.some((user) => user.email === email);
    console.log(existe," valor del some de usuarios")
    if (!existe) {
      setError(`El correo ingresado no tiene ningun usuario asociado.`);
      return;
    }
    
    
    // Enviar la solicitud al servidor
    const enviarCorreo = async (correo) => {
        try {
          const response = await axios.post('https://gestion-restaurante.onrender.com/api/user/generateCode', { correo });
          console.log(response.data.message,"respuesta del servidor"); // Mensaje de respuesta del servidor
          console.log("codigo mandado al correo ingresado")
          // Aquí puedes manejar la respuesta del servidor como desees
        } catch (error) {
          console.error('Error al enviar la solicitud:', error);
          setError(`Error al enviar la solicitud.`);
          return;
          // Aquí puedes manejar el error como desees
        }
      };

      await enviarCorreo(email);
     

  };
  return (
    <>
      <div className="bg_login d-flex justify-content-center align-items-center vh-100">
        <div className="card_login px-4 shadow p-1 p-md-5 mt-5 ">
          <div>
            <div className="text-center titulo">Recuperar Contraseña</div>
            {error && <div className="alert alert-danger text-center text-wrap">{error}</div>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="input-group mt-3">
                  <div className="input-group-text bg-light">
                    <Image
                      className="login_form_img"
                      src={iconUsers}
                      alt="icono usuario"
                    />
                  </div>
                  <Form.Control
                    type="email"
                    placeholder="Escriba su email "
                    name="email"
                    maxLength="40"
                    minLength="5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Form.Group>
              <Button
                className="mt-4 w-100  button-login"
                variant=""
                type="submit"
              >
                Recuperar Contraseña
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default RecoverPassword;

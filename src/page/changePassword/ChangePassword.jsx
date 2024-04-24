import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./changepassword.css";
import iconPassword from "../../assets/resource/media/iconos/icons-password.png";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";


const ChangePassword = () => {
  const navigate = useNavigate();
  const { getUsers} = useContext(UsersProvider);
  const [codRecuperacion, setcodRecuperacion] = useState('');  
  const [password, setPassword] = useState('');
  const [confirmarPassword, setconfirmarPassword] = useState('');
  const [error, setError] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  
  const handleChange = (e) => {
    if (password !== confirmarPassword) {
      setPasswordsMatch(false);
      setError("las Contraseñas no coinciden");
      console.log("desde  onChange={handleChange}")
        return;

    } else {
      setPasswordsMatch(true);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (password===confirmarPassword) {
      console.log(password===confirmarPassword)
       setError("Por favor, ingrese un correo electrónico válido.");
        return;
    }
    
    // Verificar si el correo electrónico existe en el conjunto de datos de usuarios
    
   /*  console.log("Email ingresado:", email);
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

      await enviarCorreo(email); */

  };

 return (
    <>
    <div className="bg_login d-flex justify-content-center align-items-center vh-100">
    <div className="card_login px-4 shadow p-1 p-md-5 mt-5 ">
      <div>
        <div className="text-center titulo">Recupera tu cuenta</div>
         {error && <div className="alert alert-danger">{error}</div>}
        <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="input-group mt-3">
                  <Form.Control
                    type="number"
                    value={codRecuperacion}
                    onChange={(d) => setcodRecuperacion(d.target.value)} 
                    name="codigo de recuperación"
                    maxLength="40"
                    minLength="5"
                    placeholder="Escriba el código de recuperación"
                    
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="input-group mt-3">
                  <div className="input-group-text bg-light">
                    <Image className="login_form_img" 
                    src={iconPassword} 
                    alt="icono password"/>
                  </div>
                  <Form.Control
                    type="password"
                    value={confirmarPassword}
                    onChange={(f) => setconfirmarPassword(f.target.value)} 
                    name="confirmarPassword"
                    maxLength="40"
                    minLength="5"
                    placeholder="Vuelva a escribir su contraseña"
                    
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
  )
}
export default ChangePassword;
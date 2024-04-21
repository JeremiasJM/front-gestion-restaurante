import "./contact.css";
import { MdAttachEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser"; // Cambiado el import
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1nkaoro",
        "template_ksu455f",
        form.current,
        "-XOoOGOrLu6Ah7acu"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Correo enviado",
            text: "Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error al Enviar el Correo",
            text: "Vuelva a intertar mas tarde",
            icon: "warning",
            confirmButtonText: "Ok",
          });
        }
      );
  };

  return (
    <>
      <section className="container-md align-items-center justify-content-center mt-4">
        <article className="row justify-content-center contact__container">
          <div className="col-12">
            <h2 className="text-center titulo py-2 text-decoration-none">
              ¿En qué podemos ayudarte?
            </h2>
            <h4 className="text-center subtitulo ">
              No dudes en ponerte en contacto con nosotros si tienes dudas o
              sugerencias.
            </h4>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="row needs-validation mt-2 g-4"
          >
            <div className="col-12 col-lg-6">
              <label className="form-label" htmlFor="validationName">
                Nombre
              </label>
              <input
                className="form-control input-contacto"
                id="validationName"
                maxLength="20"
                minLength="3"
                name="name"
                pattern="[A-Za-z\s]+"
                required
                title="Solo se permiten letras y espacios."
                type="text"
              />
            </div>
            <div className="col-12 col-lg-6">
              <label className="form-label" htmlFor="validationLastName">
                Apellido
              </label>
              <input
                className="form-control input-contacto "
                id="validationLastName"
                maxLength="20"
                minLength="3"
                name="lastName"
                pattern="[A-Za-z\s]+"
                required
                title="Solo se permiten letras y espacios."
                type="text"
              />
            </div>
            <div className="col-12 col-lg-6">
              <label className="form-label" htmlFor="validationEmail">
                Correo
              </label>
              <div className="input-group has-validation">
                <span
                  className="input-group-text bg-transparent"
                  id="inputGroupPrepend"
                >
                  <MdAttachEmail className="fs-4 icono-contacto" />
                </span>
                <input
                  aria-describedby="inputGroupPrepend"
                  className="form-control input-contacto "
                  id="validationEmail"
                  maxLength="100"
                  minLength="3"
                  name="mail"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                  title="Ingresa una dirección de correo electrónico válida."
                  type="email"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <label className="form-label" htmlFor="validationPhone">
                Telefono
              </label>
              <div className="input-group has-validation">
                <span
                  className="input-group-text bg-transparent"
                  id="inputGroupPrepend"
                >
                  <BsFillTelephoneForwardFill className="fs-5 icono-contacto" />
                </span>
                <input
                  aria-describedby="inputGroupPrepend"
                  className="form-control input-contacto "
                  id="validationPhone"
                  maxLength="20"
                  minLength="8"
                  name="phone"
                  pattern="[0-9]*"
                  required
                  title="Ingrese solo números."
                  type="tel"
                />
              </div>
            </div>
            <div className="col-12 form-floating mt-4">
              <textarea
                className="form-control input-contacto "
                id="validationMessage"
                maxLength="300"
                minLength="5"
                name="message"
                placeholder="Leave a comment here"
                required
                style={{
                  height: "150px",
                }}
              />
              <label
                className="contact__textarea__mensaje ms-2 me-0"
                htmlFor="validationMessage"
              >
                Mensaje
              </label>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12 my-4 d-flex align-self-center justify-content-center">
              <button
                className="btn contact__form__btnSubmit Light w-50 button-enviar"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </article>
        {/* Otro contenido */}
      </section>
    </>
  );
};

export default Contact;

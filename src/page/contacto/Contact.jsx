import "./contact.css";
import { MdAttachEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
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
          Swal.fire({
            imageUrl:
              "https://i.pinimg.com/originals/98/e1/2a/98e12ad7295a3b653cae1d3e7f4de764.gif",
            imageHeight: "200",
            imageWidth: "240",
            title: "Correo Enviado",
            html: "<p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>",
            showConfirmButton: false,
            timer: "3500",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            imageUrl:
              "https://i.pinimg.com/originals/ab/a7/24/aba724ba3b793dbd8058bccf0b5f3b9e.gif",
            imageHeight: "200",
            imageWidth: "240",
            title: "Error al Enviar el Correo",
            html: "<p>Vuelva a intertar mas tarde</p>",
            showConfirmButton: false,
            timer: "3500",
          });
        }
      );
  };

  return (
    <>
      <section className="container-md align-items-center justify-content-center mt-4 mb-4">
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
        <article className="row mt-2 contact__sucursales border-subtle">
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center contact__sucursales__text">
            <h3 className="text-center text-white text-decoration-none">
              Conoce nuestro local:
            </h3>
            <i className="bi bi-globe-americas parrafo mt-3" />
            <p>General Paz 576</p>
            <p>San miguel de Tucumán</p>
          </div>

          <div className="col-12 col-md-8 mt-2 mt-md-0 ps-md-0">
            <iframe
              allowFullScreen
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1100201477684!2d-65.20963307589784!3d-26.836452770675116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e93a13151%3A0xb598352fc0c71f5b!2sGral.%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1713819676291!5m2!1ses!2sar"
              style={{
                border: "0",
              }}
              width="100%"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import "./contact.css";
import { MdAttachEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section className="container-md align-items-center justify-content-center">
        <article className="row justify-content-center contact__container">
          <div className="col-12">
            <h2 className="text-center titulo py-2">¿En qué podemos ayudarte?</h2>
            <h4 className="text-center subtitulo ">
              No dudes en ponerte en contacto con nosotros si tienes dudas o
              sugerencias.
            </h4>
          </div>
          <form className="row needs-validation mt-2 g-4">
            <div className="col-12 col-lg-6">
              <label className="form-label" htmlFor="validationName">
                Nombre
              </label>
              <input
                className="form-control bg-transparent "
                defaultValue=""
                id="validationName"
                maxLength="20"
                minLength="3"
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
                className="form-control bg-transparent "
                defaultValue=""
                id="validationLastName"
                maxLength="20"
                minLength="3"
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
                <span className="input-group-text" id="inputGroupPrepend">
                <MdAttachEmail className="fs-4"  />
                </span>
                <input
                  aria-describedby="inputGroupPrepend"
                  className="form-control bg-transparent "
                  id="validationEmail"
                  maxLength="100"
                  minLength="3"
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
                <span className="input-group-text" id="inputGroupPrepend">
                <BsFillTelephoneForwardFill className="fs-5" />
                </span>
                <input
                  aria-describedby="inputGroupPrepend"
                  className="form-control bg-transparent "
                  id="validationPhone"
                  maxLength="20"
                  minLength="8"
                  name="telefono"
                  pattern="[0-9]*"
                  required
                  title="Ingrese solo números."
                  type="tel"
                />
              </div>
            </div>
            <div className="col-12 form-floating mt-4">
              <textarea
                className="form-control bg-transparent  "
                id="validationMessage"
                maxLength="300"
                minLength="5"
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
            <h2 className="text-center">Conoce nuestras sucursales</h2>
            <i className="bi bi-globe-americas parrafo" />
            <p>Av. Juan Domingo Perón 1800</p>
            <p>Yerba Buena, Tucumán</p>
          </div>

          <div className="col-12 col-md-8 mt-2 mt-md-0 ps-md-0">
          <iframe
                allowFullScreen
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.262682594325!2d-65.2930908!3d-26.799763300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242ceb5fd108f%3A0x9a698fce9e76eda4!2sAv.%20Juan%20Domingo%20Per%C3%B3n%201800%2C%20T4107%20Yerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1711936128819!5m2!1ses-419!2sar"
                style={{
                  border: '0'
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

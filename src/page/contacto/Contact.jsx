import React from 'react'

const Contact = () => {
  return (
    <>
	<section id="contacto" class="container-md align-items-center justify-content-center">
				<article class="row justify-content-center contact__container">
					<div class="col-12">
						<h1 class="text-center title py-2">En que Podemos Ayudarte</h1>
						<h3 class="text-center subtitle">No dudes en ponerte en contacto con nosotros si tienes dudas o sugerencias.</h3>
					</div>
					<form class="row needs-validation mt-2 g-4">
						<div class="col-12 col-lg-6">
							<label for="validationName" class="form-label">Nombre</label>
							<input
								type="text"
								class="form-control bg-transparent text-light"
								id="validationName"
								value=""
								minlength="3"
								maxlength="20"
								pattern="[A-Za-z\s]+"
								title="Solo se permiten letras y espacios."
								required
							/>
						</div>
						<div class="col-12 col-lg-6">
							<label for="validationLastName" class="form-label">Apellido</label>
							<input
								type="text"
								class="form-control bg-transparent text-light"
								id="validationLastName"
								value=""
								minlength="3"
								maxlength="20"
								pattern="[A-Za-z\s]+"
								title="Solo se permiten letras y espacios."
								required
							/>
						</div>
						<div class="col-12 col-lg-6">
							<label for="validationEmail" class="form-label">Correo</label>
							<div class="input-group has-validation">
								<span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-envelope"></i></span>
								<input
									type="email"
									class="form-control bg-transparent text-light"
									id="validationEmail"
									aria-describedby="inputGroupPrepend"
									minlength="3"
									maxlength="100"
									required
									pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
									title="Ingresa una dirección de correo electrónico válida."
								/>
							</div>
						</div>
						<div class="col-12 col-lg-6">
							<label for="validationPhone" class="form-label">Telefono</label>
							<div class="input-group has-validation">
								<span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-telephone"></i></span>
								<input
									type="tel"
									class="form-control bg-transparent text-light"
									id="validationPhone"
									aria-describedby="inputGroupPrepend"
									name="telefono"
									minlength="8"
									maxlength="20"
									pattern="[0-9]*"
									title="Ingrese solo números."
									required
								/>
							</div>
						</div>
						<div class="col-12 form-floating mt-4">
							<textarea
								class="form-control bg-transparent text-light"
								placeholder="Leave a comment here"
								id="validationMessage"
								style="height: 150px"
								required
								minlength="5"
								maxlength="300"
							></textarea>
							<label for="validationMessage" class="contact__textarea__mensaje">Mensaje</label>
							<div class="valid-feedback">Looks good!</div>
						</div>
						<div class="col-12 my-4 d-flex align-self-center justify-content-center">
							<button class="btn contact__form__btnSubmit w-50" type="submit">Enviar</button>
						</div>
					</form>
				</article>
				<article class="row mt-5 contact__sucursales">
					<div
						class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center contact__sucursales__text"
					>
						<h2 class="text-center">Conoce nuestras sucursales</h2>
						<p>Av. Juan Domingo Perón 1800</p>
						<p>Yerba Buena, Tucumán</p>
					</div>s
					<div class="col-12 col-md-8 mt-4 mt-md-0 ps-md-0">
						<iframe
							src="https://maps.app.goo.gl/nWBuVnbADsiAWZkP9"
							width="100%"
							height="100%"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</article>
			</section>
  
    </>

  )
}

export default Contact;
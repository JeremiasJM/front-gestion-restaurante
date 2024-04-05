import './galeria.css';
import 'animate.css';
const Galeria = () => {
  return (
    <>
      <section  className="container">
        <h2 className="text-center pt-5 animate__animated  animate__zoomInDown ">Un Poco de Nosotros</h2>
        <article className="container text-center mt-4">
          <div className="grid-gallery">
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image d-none d-md-block scrollFadeAnimation"
                src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="ImagenGaleria1"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria2"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/2734114/pexels-photo-2734114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria3"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/15441280/pexels-photo-15441280/free-photo-of-pan-pizza-restaurante-mujer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria4"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/c5/a1/2c/salon.jpg"
                alt="ImagenGaleria5"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/5056625/pexels-photo-5056625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria6"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada d-none d-md-block">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/5953550/pexels-photo-5953550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria7"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/4691224/pexels-photo-4691224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria8"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/3756623/pexels-photo-3756623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image d-none d-md-block scrollFadeAnimation"
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/a4/43/33/vista-plaza-independencia.jpg"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/1673876/pexels-photo-1673876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image d-none d-md-block scrollFadeAnimation"
                src="https://media-cdn.tripadvisor.com/media/photo-f/14/7a/c3/ab/patio-los-naranjos.jpg"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada d-none d-md-block">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada d-none d-md-block">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada d-none d-md-block">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/8941711/pexels-photo-8941711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria9"
              />
            </a>
            <a className="grid-gallery__item animate__animated  animate__tada d-none d-md-block">
              <img
                className="grid-gallery__image scrollFadeAnimation"
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ImagenGaleria9"
              />
            </a>
          </div>
        </article>
      </section>
    </>
  );
};

export default Galeria;

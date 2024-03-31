import './About.css';
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <>
      <div className='contenedor-about'>
        <img className='imagen-about'
          src={props.imagen}
          alt={props.alt} />
        <div className='contenedor-texto-about parrafo'>
          <p className='nombre-about'><strong>{props.nombre}</strong></p>
          <p>Aqui van las redes sociales</p>
          <p className='texto-about'>{props.testimonio}</p>
        </div>
      </div>
    </>
  )
}

About.propTypes = {
  imagen: PropTypes.string,
  alt: PropTypes.string,
  nombre: PropTypes.string,
  testimonio: PropTypes.string,
}

export default About
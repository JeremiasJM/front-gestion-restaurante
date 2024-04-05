import './CardAbout.css';
import PropTypes from "prop-types";

const CardAbout = (props) => {
  return (
    <>
      <div className='contenedor-about'>
        <img className='imagen-about'
          src={props.imagen}
          alt={props.alt} />
        <div className='contenedor-texto-about parrafo'>
          <p className='nombre-about'><strong>{props.nombre}</strong></p>
          <div className='estilosIconos'>{props.email} {props.linkedIn} {props.gitHub}</div>
          <p className='texto-about'>{props.testimonio}</p>
        </div>
      </div>
    </>
  )
}

CardAbout.propTypes = {
  imagen: PropTypes.string,
  alt: PropTypes.string,
  nombre: PropTypes.string,
  testimonio: PropTypes.string,
}

export default CardAbout
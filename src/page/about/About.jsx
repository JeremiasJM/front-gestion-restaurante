import './About.css';

const About = (props) => {
  return (
    <>
      <div className='contenedor-about'>
        <img className='imagen-about'
          src={props.imagen}
          alt={props.alt}/>
          <div className='contenedor-texto-about parrafo'>
            <p className='nombre-about'><strong>{props.nombre}</strong></p>
            <p className='contacto-about'>redes sociales</p>
            <p className='texto-about'>{props.testimonio}</p>
          </div>
      </div>

    </>
  )
}

export default About
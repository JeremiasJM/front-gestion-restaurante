import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <>
      <div className='seccion-pagina-404'>
        <div className='numero-error'>
          <div className='contenedor-msj'>
            <h3>404</h3>
          </div>
        </div>
        <div className='contenido-error'>
          <div className='seccion-contenedor'>
            <h1>Página no encontrada</h1>
            <p>La Página que estás solicitando no está disponible</p>
          </div>
          <div className='seccion-contenedor'>
            <p>Pero puedes regresar al inicio desde aquí</p>
            <div className='botones-regresar'>
              <Link className='boton-regresar' to='/'>Regresar</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error404;

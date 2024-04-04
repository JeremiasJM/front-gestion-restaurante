import './Footer.css';
import logoRollingFood from '../../assets/resource/media/img-footer/logo-letrasDoradas.png';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='container-fluid text-center mt-5'>
        <div className='row'>
          <div className='col col-md-3 pt-5 mt-4 mb-4'>
            <a href=''>
              {/* --->>>>   CAMBIAR 'href' cuando se use ruteo <------ */}
              <img src={logoRollingFood} className="w-75" alt="Logo Rolling Food" />
            </a>
          </div>

          <div className='col-md-4'>
            <h4 className='sombreado titulo p-3'>
              <strong>NUESTROS HORARIOS</strong>
            </h4>
            <div className='subtitulo border border-3 rounded p-3'>
              <p>Martes a Domingos</p>
              <p>12:00hs a 16hs | 20:00hs a 00:30hs</p>
            </div>
            <h4 className='sombreado titulo p-3'>
              <strong>ENCONTRANOS EN</strong>
            </h4>
            <a href='' className='btn btn-outline-light btn-mapa pb-3'>
              <i className='bi bi-pin-map-fill'></i>{' '}
              <span className='fw-bold fs-4'>
                Gral. Paz 576, piso 9 of 2 - S.M. Tucumán{' '}
              </span>
            </a>
          </div>

          <div className='col-md-5'>
            <h4 className='sombreado titulo p-3'>
              <strong>¿TENÉS ALGUNA DUDA?</strong>
            </h4>
            <div className='border border-3 rounded p-3'>
              <a className='subtitulo text-decoration-none'>
                <h6 className='subtitulo sombreado'>
                  <i className='bi bi-whatsapp me-2'></i>
                  <strong>PEDIDOS:</strong> +549 3838 402-648
                </h6>
              </a>
              <a className='text-decoration-none'>
                <h6 className='subtitulo sombreado'>
                  <i className='bi bi-whatsapp me-2'></i>
                  <strong>RESERVAS:</strong> +549 381 486-268
                </h6>
              </a>
            </div>
            <h4 className='sombreado titulo pt-5 pb-2'>
              <strong>¡SEGUINOS AHORA!</strong>
            </h4>
            <div>
              <a href='https://www.facebook.com/' className='facebook' target='_blank'><FaFacebook /></a>
              <a href='https://www.instagram.com/' className='instagram' target='_blank'><FaInstagram /></a>
              <a href='https://twitter.com/' className='twitter' target='_blank'><FaTwitterSquare /></a>
              <a href='https://www.youtube.com/' className='youTube' target='_blank'><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <p className='text-center text-white bg-dark subtitulo rounded-top p-1'>
            © 2024 Rolling Food - reservas
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

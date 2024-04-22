import './Footer.css';
import logoRollingFood from '../../assets/resource/media/img-footer/logo-letrasDoradas-removebg.png';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube, FaPhoneAlt, FaMapPin, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='container-fluid text-center colorFondo curved'>
        <div className='row mb-3'>
          <div className='col col-md-4'>
            <img src={logoRollingFood} className="w-50 mt-4 mb-3 pt-5" alt="Logo Rolling Food" />
            <div>
              <a href='https://www.facebook.com/' className='facebook' target='_blank'><FaFacebook /></a>
              <a href='https://www.instagram.com/' className='instagram' target='_blank'><FaInstagram /></a>
              <a href='https://twitter.com/' className='twitter' target='_blank'><FaTwitterSquare /></a>
              <a href='https://www.youtube.com/' className='youTube' target='_blank'><FaYoutube /></a>
            </div>
          </div>

          <div className='col-md-4 mt-5'>
            <h4 className='titulo mt-4 mb-3 pt-5'>
              <strong>Nos encontramos en:</strong>
            </h4>
            <a href='https://www.google.com.ar/maps/place/Gral.+Paz+576+piso+9+of+2,+T4000+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8362027,-65.2096526,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c0e8d0271b7:0xf8248f974b58de5d!8m2!3d-26.8362027!4d-65.2070777?entry=ttu'
              className='text-decoration-none p-4' target='_blank'>
              <FaMapPin className='btn-outline-light' />
              <span className='fw-bold fs-4 colorLetras'>
                Gral. Paz 576 - San Miguel de Tucumán
              </span>
            </a>
          </div>

          <div className='col-md-4 mt-5 subtitulo p-5'>
            <p>
              <FaClock className='me-2' />
              <strong>Horarios y días de atención:</strong>
            </p>
            <p>martes a domingos</p>
            <p>20:00hs a 02:00hs</p>
            <p className='subtitulo'>
              <FaPhoneAlt className='me-2' />
              <strong>Consultas:</strong> 381-5432100
            </p>
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

import CardAbout from "../../components/about/CardAbout.jsx";
import './styleAbout.css';
import imagenAndrea from '../../assets/resource/media/img-about/img-andrea.png';
import imagenGeorgina from '../../assets/resource/media/img-about/img-georgina.png';
import imagenJeremias from '../../assets/resource/media/img-about/img-jeremias.png';
import imagenBraian from '../../assets/resource/media/img-about/img-braian.png';
import imagenCristian from '../../assets/resource/media/img-about/img-cristian.png';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function About() {
  return (
    <>
      <div className='App'>
        <div className='contenedor-principal'>
          <h1 className='titulo estilos-titulo-about'>Sobre nosotros..</h1>
          <CardAbout
            nombre='Andrea Orlandi'
            imagen={imagenAndrea}
            alt='foto de Andrea Orlandi'
            email={<a href="mailto:andijoorlandi@gmail.com"><FaEnvelope /></a>}
            linkedIn={<a href="https://www.linkedin.com/in/andreajosefinaorlandi" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
            gitHub={<a href="https://github.com/AndiOrlandi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            testimonio='"Me considero una persona proactiva, creativa, curiosa. Poseo habilidades 
            analíticas sólidas y resolutivas. Tengo capacidad para adaptarme rápidamente a diversos equipos de trabajo 
            y una mentalidad innovadora para abordar los desafíos que se presenten".'/>
          <CardAbout
            nombre='Georgina Costilla'
            imagen={imagenGeorgina}
            alt='foto de Georgina Costilla'
            email={<a href="mailto:georginacostilla@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>}
            linkedIn={<a href="https://www.linkedin.com/in/georgina-costilla/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
            gitHub={<a href="https://github.com/georginacostilla" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            testimonio='"Me identifico como una mente intrépida y ansiosa del aprendizaje constante, con especial interés en 
            la programación y comunicación. Disfruto explorando nuevas tecnologías y desafíos digitales, y en 
            mi tiempo libre, me gusta participar en excursiones de trekking grupales."' />
          <CardAbout
            nombre='Jeremias Juarez Marrades'
            imagen={imagenJeremias}
            alt='foto de Jeremias Juarez Marrades'
            email={<a href="mailto:jeremiasjuarezmarrades15@gmail.com"><FaEnvelope /></a>}
            linkedIn={<a href="https://www.linkedin.com/in/jeremiasjm/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
            gitHub={<a href="https://github.com/JeremiasJM" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            testimonio='Soy un entusiasta de la programación. Mi dedicación se refleja en cada línea de código que 
            escribo. Con habilidad para resolver problemas y una curiosidad que no conoce límites, disfruto explorando 
            nuevas tecnologías y desafiándome a mí mismo en este fascinante mundo de la informática.' />
          <CardAbout
            nombre='Braian Mena'
            imagen={imagenBraian}
            alt='foto de Braian Mena'
            email={<a href="mailto:braianmena@gmail.com"><FaEnvelope /></a>}
            linkedIn={<a href="https://www.linkedin.com/in/braian-mena" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
            gitHub={<a href="https://github.com/mbraian" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            testimonio='"Mi dedicación se manifiesta en cada proyecto que emprendo. Con destreza para resolver problemas 
            y una curiosidad incansable, me encanta explorar nuevas tecnologías y superar desafíos en el emocionante 
            universo de la informática."' />
          <CardAbout
            nombre='Cristian Fernández'
            imagen={imagenCristian}
            alt='foto de Cristian Fernández'
            email={<a href="mailto:fernandezcristian.utn@gmail.com"><FaEnvelope /></a>}
            linkedIn={<a href="https://www.linkedin.com/in/fern%C3%A1ndez-cristian-javier-93-/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
            gitHub={<a href="https://github.com/Fernandez-Cristian-Javier-ISI-UTN-FRT" target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            testimonio='"Mi compromiso se refleja en cada proyecto que inicio. Con habilidad para resolver problemas y 
            una curiosidad inagotable, disfruto explorando nuevas tecnologías y superando retos en el apasionante mundo 
            de la informática."' />
        </div>
      </div>
    </>
  );
}

export default About;
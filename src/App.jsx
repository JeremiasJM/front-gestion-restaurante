import About from "./page/about/About.jsx";
import './App.css';
import imagenAndrea from './resource/media/img-about/img-andrea.png';
import imagenGeorgina from './resource/media/img-about/img-georgina.png';
import imagenJeremias from './resource/media/img-about/img-jeremias.png';
import imagenBraian from './resource/media/img-about/img-braian.png';
import imagenCristian from './resource/media/img-about/img-cristian.png';


function App() {
  return (
    <>
      <div className='App'>
        <div className='contenedor-principal'>
          <h1 className='titulo estilos-titulo-about'>Sobre nosotros..</h1>
          <About
            nombre='Andrea Orlandi'
            imagen={imagenAndrea}
            alt='foto de Andrea Orlandi'
            contacto=''
            testimonio='"Me considero una persona proactiva, creativa, curiosa. Poseo habilidades 
            analíticas sólidas y resolutivas. Tengo capacidad para adaptarme rápidamente a diversos equipos de trabajo 
            y una mentalidad innovadora para abordar los desafíos que se presenten".'/>
          <About
            nombre='Georgina Costilla'
            imagen={imagenGeorgina}
            alt='foto de Georgina Costilla'
            contacto=''
            testimonio='"Me identifico como una mente intrépida y ansiosa del aprendizaje constante, con especial interés en 
            la programación y comunicación. Disfruto explorando nuevas tecnologías y desafíos digitales, y en 
            mi tiempo libre, me gusta participar en excursiones de trekking grupales."' />
          <About
            nombre='Jeremias Juarez Marrades'
            imagen={imagenJeremias}
            alt='foto de Jeremias Juarez Marrades'
            contacto=''
            testimonio='Soy un entusiasta de la programación. Mi dedicación se refleja en cada línea de código que 
            escribo. Con habilidad para resolver problemas y una curiosidad que no conoce límites, disfruto explorando 
            nuevas tecnologías y desafiándome a mí mismo en este fascinante mundo de la informática.' />
          <About
            nombre='Braian Mena'
            imagen={imagenBraian}
            alt='foto de Braian Mena'
            contacto=''
            testimonio='"Mi dedicación se manifiesta en cada proyecto que emprendo. Con destreza para resolver problemas 
            y una curiosidad incansable, me encanta explorar nuevas tecnologías y superar desafíos en el emocionante 
            universo de la informática."' />
          <About
            nombre='Cristian Fernández'
            imagen={imagenCristian}
            alt='foto de Cristian Fernández'
            contacto=''
            testimonio='"Mi compromiso se refleja en cada proyecto que inicio. Con habilidad para resolver problemas y 
            una curiosidad inagotable, disfruto explorando nuevas tecnologías y superando retos en el apasionante mundo 
            de la informática."' />
        </div>
      </div>
    </>
  );
}

export default App;

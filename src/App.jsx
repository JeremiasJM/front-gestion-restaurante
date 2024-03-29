import About from "./page/about/About";

function App() {
  return (
    <>
      <div className='App'>
        <div className='contenedor-principal'>
          <h1>Sobre nosotros..</h1>
          <About
            nombre='Andrea Orlandi'
            imagen='andrea'
            contacto=''
            testimonio='' />
          <About
            nombre='Georgina Costilla'
            imagen='georgina'
            contacto=''
            testimonio='' />
          <About
            nombre='Jeremias Juarez Marrades'
            imagen='jeremias'
            contacto=''
            testimonio='' />
          <About
            nombre='Braian Mena'
            imagen='braian'
            contacto=''
            testimonio='' />
          <About
            nombre='Cristian Fernández'
            imagen='cristian'
            contacto=''
            testimonio='' />
        </div>
      </div>
    </>
  );
}

export default App;

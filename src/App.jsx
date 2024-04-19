import Rutas from './components/routes/Rutas';
import Footer from './components/footer/Footer';
import Navegador from './components/navegador/Navegador';
import ReservaContext from './context/ReservaContext';

function App() {
  return (
    <>
      <ReservaContext>
      <Navegador />
      <Rutas />
      <Footer />
      </ReservaContext>
    </>
  );
}

export default App;

import Rutas from './components/routes/Rutas';
import Footer from './components/footer/Footer';
import Navegador from './components/navegador/Navegador';
import UsersContext from './context/UsersContext';

function App() {
  return (
    <>
      <UsersContext>
        <Navegador />
        <Rutas />
        <Footer />
      </UsersContext>
    </>
  );
}

export default App;

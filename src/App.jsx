import Rutas from "./components/routes/Rutas";
import Footer from "./components/footer/Footer";
import Navegador from "./components/navegador/Navegador";
import UsersContext from "./context/UsersContext";
import ReservaContext from "./context/ReserveContext";

function App() {
  return (
    <>
        <UsersContext>
        <ReservaContext>
            <Navegador />
            <Rutas />
            <Footer />
        </ReservaContext>
        </UsersContext>
    </>
  );
}

export default App;

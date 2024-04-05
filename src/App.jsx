import Rutas from "./components/routes/Rutas";
import Error404 from "./page/error404/Error404";
import Home from "./page/home/Home";

function App() {
  return (
    <>
      <Rutas/>
      <Error404 />
      <Home />
    </>
  );
}

export default App;

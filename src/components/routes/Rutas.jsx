import { Route, Routes } from 'react-router-dom';
import Galeria from '../../page/galeria/Galeria';
import Admin from '../../page/admin/Admin';
import Register from "../../page/register/Register";
import Contact from '../../page/contacto/Contact';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>

    </>
  );
};

export default Rutas;

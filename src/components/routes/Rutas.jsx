import { Route, Routes } from 'react-router-dom';
import Login from "../../page/login/Login";
import Galeria from '../../page/galeria/Galeria';
import Admin from '../../page/admin/Admin';
import Error404 from '../../page/error404/Error404.jsx';
import Register from "../../page/register/Register";
import Home from '../../page/home/Home';
import Contact from '../../page/contacto/Contact';
import About from '../../page/about/About';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default Rutas;

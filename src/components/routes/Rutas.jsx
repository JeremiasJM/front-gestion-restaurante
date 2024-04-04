import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../../page/error404/Error404.jsx';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default Rutas
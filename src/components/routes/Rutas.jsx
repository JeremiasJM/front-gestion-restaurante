import { Route, Routes } from 'react-router-dom'
import Galeria from '../../page/galeria/Galeria'
import Admin from '../../page/admin/Admin'
import About from '../../page/about/About'
import Error404 from '../../page/error404/Error404'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default Rutas
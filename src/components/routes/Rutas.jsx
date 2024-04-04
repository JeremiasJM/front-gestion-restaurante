import { Route, Routes } from 'react-router-dom'
import About from '../../page/about/About'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/About' element={<About />} />
        {/* <Route path='*' element= {<Error404 />} /> */}
      </Routes>
    </>
  )
}

export default Rutas
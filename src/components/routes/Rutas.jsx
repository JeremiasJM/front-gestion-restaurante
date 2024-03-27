import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Galeria from '../../page/galeria/Galeria'
const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/galeria' element={<Galeria/>} />
    </Routes>
    </>
  )
}

export default Rutas
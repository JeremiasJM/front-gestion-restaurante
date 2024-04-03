import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Galeria from '../../page/galeria/Galeria'
import Admin from '../../page/admin/Admin'
import Home from '../../page/home/Home'

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/galeria' element={<Galeria/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/home' element={<Home/>} />

    </Routes>
    </>
  )
}

export default Rutas
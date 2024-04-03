import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../page/about/About'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/About' element={<About />} />
      </Routes>
    </>
  )
}

export default Rutas
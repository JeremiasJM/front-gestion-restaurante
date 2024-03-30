import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../page/home/Home'
import Login from "../../page/login/Login"


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={ <Login/> } />
       
    </Routes>
    </>
  )
}

export default Rutas
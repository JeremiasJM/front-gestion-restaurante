
import { Route, Routes } from 'react-router-dom'
import {Home} from '../../page/home/Home'
import Reserva from '../../page/reserva/Reserva'

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />




        <Route path='/Reserva' element={<Reserva />} />
       
    </Routes>
    </>
  )
}

export default Rutas
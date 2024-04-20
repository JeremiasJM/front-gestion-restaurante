import React from 'react'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const ReservaProvider = createContext();



const ReservaContext = ( {children }) => {

    const [reserve, setReserve] = useState([]);

    const getReserves = async() => {
        try {
            const response = await axios.get ('');
            setReserve(response.data);
        } catch (error){
            console.error(error);
        }
    };

    const createReserve = async (reserva) => {
        try{
            const response = await axios.post('');

            setReserva([...reserva, response.data]);
        } catch (error){
            console.log(error)
        }
    };

    const deleteReserve = async (id) =>{
        try{
            await axios.delete('');
            setReserve(reserve.filter((reserva) => reserva.id !== id));
        } catch (error){
            console.log(error)
        }
    };

    const updateReserve = async (reserva) =>{
        try{
            await axios.put('');
            await getReserves();
        } catch(error){

        }
    };

    useEffect(() => {
        getReserves();
    }, []);



  return ( 
  <>
    <ReservaProvider.Provider value={{reserve,getReserves, createReserve, deleteReserve, updateReserve}}>
        {children}
    </ReservaProvider.Provider>
       
   
    </>
  )
}

export default ReservaContext
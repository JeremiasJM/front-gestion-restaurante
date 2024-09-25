import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ReservaProvider = createContext();

const ReservaContext = ({ children }) => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(false);

  const getReservas = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://gestion-restaurante.onrender.com/api/reserve"
      );
      setReservas(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const addReserva = async (reserva) => {
    try {
      const { data } = await axios.post(
        "https://gestion-restaurante.onrender.com/api/reserve/create",
        reserva
      );
      setReservas([...reservas, data]);
    } catch (error) {}
  };
  const updateReserva = async (id, reserva) => {
    try {
      const { data } = await axios.put(
        `https://gestion-restaurante.onrender.com/api/reserve/update/${id}`,
        reserva
      );
      setReservas(
        reservas.map((reserva) => (reserva._id === id ? data : reserva))
      );
    } catch (error) {}
  };
  const deleteReserva = async (id) => {
    try {
      await axios.delete(
        `https://gestion-restaurante.onrender.com/api/reserve/delete/${id}`
      );
      setReservas(reservas.filter((reserva) => reserva._id !== id));
    } catch (error) {}
  };

  useEffect(() => {
    getReservas();
  }, []);

  return (
    <ReservaProvider.Provider
      value={{
        reservas,
        loading,
        getReservas,
        addReserva,
        updateReserva,
        deleteReserva,
      }}
    >
      {children}
    </ReservaProvider.Provider>
  );
};
export default ReservaContext;

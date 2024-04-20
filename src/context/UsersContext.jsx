import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersProvider = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://gestion-restaurante.onrender.com/api/user"
      );
      setUsuarios(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (usuario) => {
    try {
      console.log(usuario, "<-- user Context");
      await axios.post(
        "https://gestion-restaurante.onrender.com/api/user/registro",
        usuario
      );
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const updateUser = async (id, usuario) => {
    try {
      await axios.put(
        `https://gestion-restaurante.onrender.com/api/user/update/${id}`,
        usuario
      );
      await getUsers();
    } catch (error) {
      console.error(error);
      setError("Error al actualizar el usuario");
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `https://gestion-restaurante.onrender.com/api/user/delete/${id}`
      );
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const disableUser = async (id) => {
    try {
      await axios.put(
        `https://gestion-restaurante.onrender.com/api/user/disable/${id}`
      );
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const enableUser = async (id) => {
    try {
      await axios.put(
        `https://gestion-restaurante.onrender.com/api/user/enable/${id}`
      );
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UsersProvider.Provider
      value={{
        usuarios,
        getUsers,
        createUser,
        updateUser,
        deleteUser,
        disableUser,
        enableUser,
      }}
    >
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;

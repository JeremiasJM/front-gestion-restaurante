import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const UsersProvider = createContext();

const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [validationErrorLogin, setValidationErrorLogin] = useState(false);

  const [usuarioLogueado, setUsuarioLogueado] = useState();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://gestion-restaurante.onrender.com/api/user"
      );
      setUsuarios(response.data.users);
    } catch (error) {}
  };

  const addUser = async (usuario) => {
    try {
      await axios.post(
        "https://gestion-restaurante.onrender.com/api/user/registro",
        usuario
      );
      await getUsers();
    } catch (error) {}
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

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const loginUsuario = async (usuario) => {
    try {
      const response = await axios.post(
        "https://gestion-restaurante.onrender.com/api/user/login",
        usuario
      );

      const { token } = response.data.data;

      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);

      setUsuarioLogueado(decoded);
    } catch (error) {
      const errorLogin = error.response.data.message;
      setValidationErrorLogin(errorLogin);
    }
  };

  return (
    <UsersProvider.Provider
      value={{
        usuarios,
        getUsers,
        addUser,
        logOut,
        loginUsuario,
        usuarioLogueado,
        validationErrorLogin,
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

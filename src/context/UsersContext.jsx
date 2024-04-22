import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersProvider = createContext();

const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/user");
      setUsuarios(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (usuario) => {
    try {
      console.log(usuario, "<-- user Context")
      await axios.post("http://localhost:4000/api/user/registro", usuario);
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
        createUser
      }}
    >
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;
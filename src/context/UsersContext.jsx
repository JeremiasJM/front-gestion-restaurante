import { createContext, useEffect, useState } from "react";

export const UsersProviders = createContext();

const UsersContext = ( { children } ) => {
    const [ usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        
    }, []);

    

  return (
    <UsersProviders>
        {children}
    </UsersProviders>
  )
}

export default UsersContext
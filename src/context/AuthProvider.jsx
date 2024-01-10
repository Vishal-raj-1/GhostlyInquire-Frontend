import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({})
  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

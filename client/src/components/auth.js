import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) =>{
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const login = user => {
    setUser(user);
  }
  const assignCurrentUser = cu => {
    setCurrentUser(cu);
  }
  const logout = () =>{
    setUser(null);
  }

  return <AuthContext.Provider value = {{user,currentUser,assignCurrentUser, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
 return useContext(AuthContext);
}
import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string,role: string) => void;
  logout: () => void;
  isAdmin:boolean;
}

export const AuthContext = createContext<AuthContextType |undefined>(undefined)
import Cookies from "js-cookie";
import { createContext, useContext } from "react";

interface IAuthContextProps {
  isLogged: () => boolean;
  doLogin: (token: string, rememberPassword: boolean) => void;
  doLogout: () => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const isLogged = () => {
    const token = Cookies.get("token");
    return token ? true : false;
  };

  const doLogin = (token: string, rememberPassword: boolean) => {
    if (rememberPassword) {
      Cookies.set("token", token, { expires: 999 });
    } else {
      Cookies.set("token", token);
    }
  };

  const doLogout = () => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ isLogged, doLogin, doLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextProps {
  const context = useContext(AuthContext);
  return context;
}

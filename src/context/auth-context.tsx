import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import * as auth from "auth-provider";
import { User } from "Pages/HooksTest/Search";
import { http } from "utils/http";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
  let user = null;
  let token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext = createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // point free  setUser equal user => setUser(user)
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then((user) => setUser(null));

  useEffect(() => {
    bootstrapUser().then(setUser);
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }

  return context;
};

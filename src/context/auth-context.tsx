import React, { useState } from "react";
import * as auth from "auth-provider";

const AuthContext = React.createContext(null);

interface AuthForm {
  username: string;
  password: string;
}

AuthContext.displayName = "AuthContext";

export const AuthProvider = () => {
  const [user, setUser] = useState(null);

  // const login = (form: AuthForm) => auth.login(form).then(user => {})
};

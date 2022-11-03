import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

function Login() {
  const { user, login } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </p>
      <p>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} autoComplete="off" />
      </p>
      <button type="submit">登录</button>
    </form>
  );
}

export default Login;

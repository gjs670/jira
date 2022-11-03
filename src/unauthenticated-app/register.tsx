import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

function Register() {
  const { register, login } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
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
      <button type="submit">注册</button>
    </form>
  );
}

export default Register;

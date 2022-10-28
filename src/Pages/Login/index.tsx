import { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_URL;

function Login() {
  const login = (parmas: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parmas),
    }).then((res) => {
      if (res.ok) {
      }
    });
  };
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
        <input type="password" id={"password"} />
      </p>
      <button type="submit">确认</button>
    </form>
  );
}

export default Login;

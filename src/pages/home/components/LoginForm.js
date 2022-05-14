import { useState } from "react";

export const LoginForm = ({ onSubmit }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ login, pass });

    setLogin("");
    setPass("");
  };

  return (
    <form onSubmit={handleSubmit}>
      email <input type="email" value={login} onChange={handleChangeLogin} /> <br/>
      pass <input type="password" value={pass} onChange={handleChangePass} /> <br/>
      <input type="submit" />
    </form>
  );
};
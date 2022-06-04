import { useState } from "react";
import {Button, ButtonGroup, TextField} from "@mui/material";

import './loginform.scss';

export const LoginForm = ({ onLogin, onSignIn}) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleLogInButton = () => {
    onLogin({ login, pass });
    setLogin("");
    setPass("");
  };

  const handleSignInButton = () => {
    onSignIn({ login, pass });
    setLogin("");
    setPass("");
  };

  return (
    <>
      <div className='login__box'>
        <TextField type="email" label='email' value={login} onChange={handleChangeLogin} /> <br/>
        <TextField type="password" label='password' value={pass} onChange={handleChangePass} /> <br/>
      </div>
      <ButtonGroup variant="text" aria-label="text button group">
      <Button

        type='submit'
        onClick={handleSignInButton}
      >
        Зарегистрироваться
      </Button>
      <Button

        type='submit'
        onClick={handleLogInButton}
      >
        Войти
      </Button>
      </ButtonGroup>
    </>
  );
};
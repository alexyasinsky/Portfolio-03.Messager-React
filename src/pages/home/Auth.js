import {useState} from "react";
import {Typography} from "@mui/material";
import faker from "@faker-js/faker";
import {set} from "@firebase/database";

import {LoginForm} from "./components/LoginForm/LoginForm";
import {getUsersRefById, logIn, signUp} from "../../services/firebase";
import Area from "../../components/Area/Area";

export default function Auth () {
  const [error, setError] = useState("");
  const onLogIn = async ({ login, pass }) => {
    try {
      await logIn(login, pass);
      console.log('logged in');
    } catch (e) {
      setError(e.message);
    }
  };
  const onSignUp = async ({ login, pass }) => {
    try {
      const response = await signUp(login, pass);
      const id = response.user.uid;
      const email = response.user.email;
      const nickname = response.user.email;
      await set(getUsersRefById(id), {
        id: id,
        email: email,
        avatar: faker.image.avatar(),
        nickname: nickname
      });
    } catch (e) {
      setError(e.message);
    }
  };

  const errorStyle = {
    color: 'red'
  }

  return (
    <Area elevation={3} height={650}>
      <Typography variant="h6">Введите логин и пароль</Typography>
      <LoginForm onLogin={onLogIn} onSignIn={onSignUp} />
      {error && <Typography variant="h6" style={errorStyle}>{error}</Typography>}
    </Area>
  );
};
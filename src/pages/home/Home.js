import {useState} from "react";
import {Typography} from "@mui/material";
import faker from "@faker-js/faker";
import {push, set} from "@firebase/database";

import {LoginForm} from "./components/LoginForm";
import {db, getUserChatsRefById, getUsersRefById, logIn, signUp, usersListRef} from "../../services/firebase";
import Area from "../../components/Area/Area";
import {ref} from "firebase/database";


export default function Home () {
  const [error, setError] = useState("");
  const onLogIn = async ({ login, pass }) => {
    try {
      await logIn(login, pass);
    } catch (e) {
      setError(e.message);
    }
  };
  const onSignUp = async ({ login, pass }) => {
    try {
      const response = await signUp(login, pass);
      const id = response.user.uid;
      const email = response.user.email;
      await set(getUsersRefById(id), {
        id: id,
        email: email,
        avatar: faker.image.avatar(),
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
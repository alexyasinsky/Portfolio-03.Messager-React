import {Button, Grid, TextField} from "@mui/material";
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onValue, push, remove, set} from "@firebase/database";

import {addChat} from "../../../../../../store/chats/actions";

import "./ChatAddForm.scss";
import {
  auth,
  getChatRefById,
  getMsgsRefById, getNicknameFromNicknames, getUserChatRefByIdAndNickname,
  getUsersRefById, msgsRef,
  usersListRef,
  usersRef
} from "../../../../../../services/firebase";
import {selectUsersList} from "../../../../../../store/chats/selectors";
import {selectProfile} from "../../../../../../store/profile/selectors";


export default function ChatAddForm () {

  const [nickname, setNickname] = useState('');

  const profile = useSelector(selectProfile);

  // const dispatch = useDispatch();

  async function handleAddButton() {
    onValue(getNicknameFromNicknames(nickname), snapshot => {
      if (snapshot.exists()) {
        const buddyId = snapshot.val();
        onValue(getUserChatRefByIdAndNickname(profile.id, nickname), snapshot => {
          let chatId;
          if (snapshot.exists()) {
            chatId = snapshot.val();
          } else {
            chatId = push(msgsRef, {exists: true}).key;
          }

          set(getUserChatRefByIdAndNickname(profile.id, nickname), {nickname, chatId});
          set(getUserChatRefByIdAndNickname(buddyId, profile.nickname), {nickname:profile.nickname, chatId});
        })
        setNickname('');
      } else {
        alert('Пользователь с таким ником не зарегистрирован');
      }
    });
  }

  function handleInput(event) {
    setNickname(event.target.value);
  }

  return (
    <Grid container direction='column' rowSpacing={2}>
      <Grid item className='chatAdd__form'>
        <TextField
          label="Введите ник"
          variant="outlined"
          value={nickname}
          onChange={handleInput}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={handleAddButton}
          variant="contained"
        >
          Добавить
        </Button>
      </Grid>
    </Grid>
  )
}
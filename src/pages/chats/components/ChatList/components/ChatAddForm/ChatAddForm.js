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
import {setProfile} from "../../../../../../store/profile/actions";


export default function ChatAddForm () {

  const [buddyNickname, setBuddyNickname] = useState('');

  const profile = useSelector(selectProfile);

  // const dispatch = useDispatch();

  async function handleAddButton() {
    onValue(getNicknameFromNicknames(buddyNickname), snapshot => {
      if (snapshot.exists()) {
        const buddyId = snapshot.val();
        onValue(getUserChatRefByIdAndNickname(profile.id, buddyNickname), snapshot => {
          let chatId;
          if (snapshot.exists()) {
            chatId = snapshot.val();
          } else {
            chatId = push(msgsRef, {exists: true}).key;
          }
          debugger
          set(getUserChatRefByIdAndNickname(profile.id, buddyNickname), {userId:buddyId, chatId});
          set(getUserChatRefByIdAndNickname(buddyId, profile.nickname), {userId:profile.id, chatId});
        })
        setBuddyNickname('');
      } else {
        alert('Пользователь с таким ником не зарегистрирован');
      }
    });
  }

  function handleInput(event) {
    setBuddyNickname(event.target.value);
  }

  return (
    <Grid container direction='column' rowSpacing={2}>
      <Grid item className='chatAdd__form'>
        <TextField
          label="Введите ник"
          variant="outlined"
          value={buddyNickname}
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
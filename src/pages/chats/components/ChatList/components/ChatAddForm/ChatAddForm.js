import {Button, Grid, TextField} from "@mui/material";
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onValue, push, remove, set, get} from "@firebase/database";

import {addChat} from "../../../../../../store/chats/actions";

import "./ChatAddForm.scss";
import {
  auth, getMessagesIdRefFromChats,
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
    get(getNicknameFromNicknames(buddyNickname)).then(snapshot => {
      if (snapshot.exists()) {
        const buddyId = snapshot.val();
        get(getMessagesIdRefFromChats(buddyId, profile.id)).then(snapshot => {
          let messagesId;
            if (snapshot.exists()) {
              messagesId = snapshot.val();
            } else {
              messagesId = push(msgsRef, {exists: true}).key;
              set(getMessagesIdRefFromChats(buddyId, profile.id), messagesId);
            }
            set(getMessagesIdRefFromChats(profile.id, buddyId), messagesId);
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
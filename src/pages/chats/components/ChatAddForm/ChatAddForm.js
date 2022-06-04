import {Button, Grid, TextField} from "@mui/material";
import { useState } from 'react';
import { useSelector} from "react-redux";
import {push, set, get} from "@firebase/database";


import "./ChatAddForm.scss";
import {
  getMessagesIdRefFromChats,
  getNicknameFromNicknames, messagesRef,
} from "../../../../services/firebase";
import {selectProfile} from "../../../../store/profile/selectors";


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
              messagesId = push(messagesRef, {exists: true}).key;
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
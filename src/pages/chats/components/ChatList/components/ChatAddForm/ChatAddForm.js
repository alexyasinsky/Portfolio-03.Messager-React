import {Button, Grid, TextField} from "@mui/material";
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { onValue, remove, set } from "@firebase/database";

import {addChat} from "../../../../../../store/chats/actions";

import "./ChatAddForm.scss";
import {getChatRefById, getMsgsRefById} from "../../../../../../services/firebase";

export default function ChatAddForm () {

  const [buddyName, setBuddyName] = useState('');

  // const dispatch = useDispatch();

  function handleAddButton() {
    // dispatch(addChat(buddyName));
    const newChat = {
      name: buddyName,
      id: `chat-${Date.now()}`,
    };

    set(getChatRefById(newChat.id), newChat);
    set(getMsgsRefById(newChat.id), { exists: true });
    setBuddyName('');
  }

  function handleInput(event) {
    setBuddyName(event.target.value);
  }

  return (
    <Grid container direction='column' rowSpacing={2}>
      <Grid item className='chatAdd__form'>
        <TextField
          label="Введите ник"
          variant="outlined"
          value={buddyName}
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
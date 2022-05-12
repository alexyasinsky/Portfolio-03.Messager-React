import {Button, Grid, TextField} from "@mui/material";
import { useState } from 'react';
import {useDispatch} from "react-redux";

import {addChat} from "../../../../../../store/chats/actions";

import "./ChatAddForm.scss";

export default function ChatAddForm () {

  const [buddyName, setBuddyName] = useState('');

  const dispatch = useDispatch();
  function handleAddButton() {
    dispatch(addChat(buddyName));
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
import {Button, Grid, TextField} from "@mui/material";
import { useState } from 'react';

import "./ChatAddForm.scss";

export default function ChatAddForm ({addBuddy}) {

  const [buddyName, setBuddyName] = useState('');

  function handleAddButton() {
    addBuddy(buddyName);
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
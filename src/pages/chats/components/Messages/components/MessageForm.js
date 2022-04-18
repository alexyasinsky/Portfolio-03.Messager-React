import {useEffect, useRef, useState} from "react";
import moment from "moment";
import {Button, Grid, TextareaAutosize} from "@mui/material";

export default function MessageForm ({addMessage, user}) {
  const author = user;
  let [text, setText] = useState('');

  function handleText (event) {
    setText(event.target.value);
  }

  function handleMessage(e) {
    e.preventDefault();
    const message = {
      date: moment().format('LTS'),
      author: author,
      text: text
    };
    addMessage(message);
  }

  const textAreaRef = useRef(null);
  useEffect(() => {
    textAreaRef.current?.focus();
  });

  return (
    <Grid container direction='column' rowSpacing={2}>
      <TextareaAutosize
        ref={textAreaRef}
        minRows={4}
        maxRows={4}
        onChange={handleText}
        placeholder="Введите сообщение"
        value={text}
        className = 'messages__textarea'
      />
      <Grid item justifyContent="flex-start">
        <Button
          onClick={handleMessage}
          variant="contained"
        >
          Отправить
        </Button>
      </Grid>
    </Grid>


  )
}
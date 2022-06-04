import {useEffect, useRef, useState} from "react";
import moment from "moment";
import {Button, Grid, TextareaAutosize} from "@mui/material";
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../store/profile/selectors";
import { push } from "@firebase/database";
import {getMessagesRefById} from "../../../../services/firebase";

export default function MessageForm ({id}) {

  let [text, setText] = useState('');

  const profile = useSelector(selectProfile);

  function handleText (event) {
    setText(event.target.value);
  }

  function handleMessage() {
    push(getMessagesRefById(id), {
      author: profile.nickname,
      text,
      date: moment().format('L LTS'),
    });
    setText('');
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
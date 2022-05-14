import {useEffect, useRef, useState} from "react";
import moment from "moment";
import {Button, Grid, TextareaAutosize} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithReply} from "../../../../../store/messages/actions";
import {selectName} from "../../../../../store/profile/selectors";
import { onChildAdded, onValue, push } from "@firebase/database";
import {auth, getMsgsListRefById} from "../../../../../services/firebase";

export default function MessageForm ({id}) {
  const author = useSelector(selectName);
  let [text, setText] = useState('');

  function handleText (event) {
    setText(event.target.value);
  }

  const dispatch = useDispatch();

  // function handleMessage(e) {
  //   e.preventDefault();
  //   const message = {
  //     date: moment().format('LTS'),
  //     author: author,
  //     text: text
  //   };
  //   dispatch(addMessageWithReply(message, 'bot'))
  //   setText('');
  // }
  function handleMessage(e) {
    e.preventDefault();
    push(getMsgsListRefById(id), {
      author: auth.currentUser.email,
      text,
      id: `msg-${Date.now()}`,
    });
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
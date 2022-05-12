
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

import moment from "moment";
import {useEffect} from "react";
import {Grid, Paper} from "@mui/material";
import {useParams, Navigate} from "react-router-dom";

import "./Messages.scss";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, initMessagesStore} from "../../../../store/messages/actions";
import {selectMessages} from "../../../../store/messages/selectors";


export default function Messages () {

  const dispatch = useDispatch();
  const {buddy} = useParams();
  useEffect(()=> {
    dispatch(initMessagesStore(buddy));
  }, [dispatch, buddy]);

  const messages = useSelector(selectMessages);

  useEffect(() => {
    let dialog = messages[buddy];
    let timerId = null;
    if (dialog) {
      if (dialog.length !==0 && !(dialog[dialog.length - 1].author === buddy)) {
        timerId = setTimeout(() => {
          let message = {
            date: moment().format('LTS'),
            author: buddy,
            text: `${dialog[dialog.length - 1].text}?`
          };
          dispatch(addMessage(message, buddy));
        }, 1500);
      }
    }

    return () => clearTimeout(timerId);
  }, [messages, dispatch, buddy]);
  
  if (!messages[buddy]) {
    return <Navigate replace to='/chats' />
  }

  return (
    <Grid container direction="column" rowSpacing={4}>
      <Grid item xs>
        <Paper elevation={3} className='messages__area'>
          <div className='messages__list'>
            <MessageList
              messages={messages[buddy]}
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs>
        <MessageForm buddy={buddy}/>
      </Grid>
    </Grid>
    
  )
}
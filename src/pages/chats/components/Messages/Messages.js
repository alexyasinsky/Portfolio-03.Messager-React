
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

import {useEffect, useMemo, useState} from "react";
import {Grid, Paper} from "@mui/material";
import {useParams, Navigate} from "react-router-dom";


import "./Messages.scss";
import {useSelector} from "react-redux";
import {selectMessagesByBuddyName} from "../../../../store/messages/selectors";
import {selectChats} from "../../../../store/chats/selectors";
import {onValue} from "@firebase/database";
import {getMsgsRefById} from "../../../../services/firebase";

function generateBuddyList(chats) {
  return chats.reduce((acc, chat) => {
    acc.push(chat.name);
    return acc;
  }, []);
}

export default function Messages () {

  // const {buddy} = useParams();
  // const getMessages = useMemo(() => selectMessagesByBuddyName(buddy), [buddy]);
  // const messages = useSelector(getMessages);
  const {id} = useParams();

  // const chats = useSelector(selectChats);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        console.log(val.messageList);
        setMessages(Object.values(val.messageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);

  // let buddies = generateBuddyList(chats);
  // if (!buddies.includes(buddy)) {
  //   return <Navigate replace to='/chats' />
  // }

  return (
    <Grid container direction="column" rowSpacing={4}>
      <Grid item xs>
        <Paper elevation={3} className='messages__area'>
          <div className='messages__list'>
            <MessageList
              messages={messages}
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs>
        <MessageForm id={id}/>
      </Grid>
    </Grid>
    
  )
}
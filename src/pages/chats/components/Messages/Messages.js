
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

import {useMemo} from "react";
import {Grid, Paper} from "@mui/material";
import {useParams, Navigate} from "react-router-dom";

import "./Messages.scss";
import {useSelector} from "react-redux";
import {selectMessagesByBuddyName} from "../../../../store/messages/selectors";
import {selectChats} from "../../../../store/chats/selectors";

function generateBuddyList(chats) {
  return chats.reduce((acc, chat) => {
    acc.push(chat.name);
    return acc;
  }, []);
}

export default function Messages () {

  const {buddy} = useParams();
  const getMessages = useMemo(() => selectMessagesByBuddyName(buddy), [buddy]);
  const messages = useSelector(getMessages);

  const chats = useSelector(selectChats);

  let buddies = generateBuddyList(chats);
  if (!buddies.includes(buddy)) {
    return <Navigate replace to='/chats' />
  }

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
        <MessageForm buddy={buddy}/>
      </Grid>
    </Grid>
    
  )
}
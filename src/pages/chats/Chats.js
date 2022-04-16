import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import moment from "moment";
import {useEffect, useState} from "react";
import {Grid, List, Paper} from "@mui/material";

import './Chats.scss';
import ChatList from "../../components/ChatList/ChatlList";

export default function Chats ({user}) {

  let [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages(prevState => {
      return prevState.concat(message);
    });
  };

  useEffect(() => {
    if (messages.length !==0 && !(messages[messages.length - 1].author === 'bot')) {
      setTimeout(() => {
        let message = [{
          date: moment().format('LTS'),
          author: 'bot',
          text: `${messages[messages.length - 1].text}?`
        }];
        addMessage(message);
      }, 1500);
    }
  }, [messages]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item container  xs={3}>
          <Grid item xs>
            <Paper elevation={3} className='chats__list'>
              <List>
                <ChatList/>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Grid item container xs direction="column" rowSpacing={4}>
          <Grid item xs>
            <Paper elevation={3} className='messages__area'>
              <div className='messages__list'>
                <MessageList
                  messages={messages}
                  user={user}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs>
            <MessageForm addMessage={addMessage} user={user}/>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}


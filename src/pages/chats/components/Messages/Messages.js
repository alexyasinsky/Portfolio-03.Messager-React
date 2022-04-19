
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

import moment from "moment";
import {useEffect, useState} from "react";
import {Grid, Paper} from "@mui/material";
import {useParams} from "react-router-dom";

export default function Messages ({user}) {

  const {buddy} = useParams();

  let [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages(prevState => {
      return prevState.concat(message);
    });
  };

  useEffect(() => {
    if (messages.length !==0 && !(messages[messages.length - 1].author === buddy)) {
      setTimeout(() => {
        let message = [{
          date: moment().format('LTS'),
          author: buddy,
          text: `${messages[messages.length - 1].text}?`
        }];
        addMessage(message);
      }, 1500);
    }
  }, [messages, buddy]);

  return (
    <Grid container direction="column" rowSpacing={4}>
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
    
  )
}
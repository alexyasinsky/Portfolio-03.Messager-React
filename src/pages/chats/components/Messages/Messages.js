
import MessageForm from "../MessageForm/MessageForm";
import MessageList from "../MessagesList/MessageList";

import {useEffect} from "react";
import {Grid, Paper} from "@mui/material";
import {useParams} from "react-router-dom";


import "./Messages.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../../../store/messages/selectors";
import {initMessagesTrack, stopMessagesTrack} from "../../../../store/messages/actions";

export default function Messages () {

  const dispatch = useDispatch();

  const {id} = useParams();

  const messages = useSelector(selectMessages);

  useEffect(()=> {
      dispatch(initMessagesTrack(id));
    return () => {
      dispatch(stopMessagesTrack());
    }
  }, [id, dispatch]);

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
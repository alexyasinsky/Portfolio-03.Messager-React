
import ChatList from "../../components/ChatList/ChatlList";
import Messages from './components/Messages';

import {Grid, List, Paper} from "@mui/material";

import './Chats.scss';
import { Outlet } from 'react-router-dom';


export default function Chats ({user}) {

  return (
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
        <Outlet>
          <Messages user={user}/>
        </Outlet>
      </Grid>
    </Grid>
  )
}


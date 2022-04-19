
import ChatList from "./components/ChatList/ChatlList";
import {Grid, List, Paper} from "@mui/material";
import { Outlet } from 'react-router-dom';

import './Chats.scss';

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
      <Grid item xs>
        <Outlet user={user}/>
      </Grid>
    </Grid>
  )
}


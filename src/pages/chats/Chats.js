
import {Grid} from "@mui/material";
import { Outlet } from 'react-router-dom';
import ChatList from "./components/ChatList/ChatList";

export default function Chats ({user, buddies, addBuddy, deleteBuddy}) {
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <ChatList user={user} buddies={buddies} addBuddy={addBuddy} deleteBuddy={deleteBuddy}/>
      </Grid>
      <Grid item xs>
        <Outlet/>
      </Grid>
    </Grid>
  )
}


import {Grid, Paper} from "@mui/material";
import Buddies from "./components/Buddies/Buddies";
import ChatAddForm from "./components/ChatAddForm/ChatAddForm";
import User from "./components/User/User";

import "./ChatList.scss";


export default function ChatList ({user, buddies}) {
  return (
      <Paper elevation={3} className='chatlist'>
          <User user={user}/>
          <Buddies buddies={buddies}/>
          <ChatAddForm/>
      </Paper>
  )
}
import {Paper} from "@mui/material";
import Buddies from "./components/Buddies/Buddies";
import ChatAddForm from "./components/ChatAddForm/ChatAddForm";
import User from "./components/User/User";

import "./ChatList.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectChats} from "../../../../store/chats/selectors";
import {initChatsFB} from "../../../../store/chats/actions";
import {selectProfile} from "../../../../store/profile/selectors";



export default function ChatList () {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  console.log(useSelector(selectChats));

  useEffect(() => {
    dispatch(initChatsFB(profile.id));
  }, [profile, dispatch]);

  return (
      <Paper elevation={3} className='chatlist'>
          <User/>
          <Buddies/>
          <ChatAddForm/>
      </Paper>
  )
}
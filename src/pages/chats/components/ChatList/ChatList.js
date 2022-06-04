import {Paper} from "@mui/material";
import Buddies from "../Buddies/Buddies";
import ChatAddForm from "../ChatAddForm/ChatAddForm";
import User from "../User/User";

import "./ChatList.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initChatsTrack, stopChatsTrack} from "../../../../store/chats/actions";
import {selectProfile} from "../../../../store/profile/selectors";




export default function ChatList () {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initChatsTrack(profile.id));
    return () => {
      dispatch(stopChatsTrack());
    };
  }, [profile, dispatch]);

  return (
      <Paper elevation={3} className='chatlist'>
          <User/>
          <Buddies/>
          <ChatAddForm/>
      </Paper>
  )
}
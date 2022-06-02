import {ListItem} from "@mui/material";
import BuddyItem from "./components/BuddyItem/BuddyItem";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {onValue} from "@firebase/database";
import {chatsRef} from "../../../../../../../../services/firebase";
import {selectChats} from "../../../../../../../../store/chats/selectors";


export default function BuddiesList() {

  const chats = useSelector(selectChats);




  return (
    chats.map((buddyId) =>
      <ListItem key={buddyId} >
        <BuddyItem buddyId={buddyId}/>
      </ListItem>
    )
  )
}
import {ListItem} from "@mui/material";
import BuddyItem from "./components/BuddyItem/BuddyItem";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {onValue} from "@firebase/database";
import {chatsRef} from "../../../../../../../../services/firebase";
import {selectBuddies, selectChats} from "../../../../../../../../store/chats/selectors";


export default function BuddiesList() {

  const buddies = useSelector(selectBuddies);

  if (buddies) {
    return (
      buddies.map((buddyId) =>
        <ListItem key={buddyId} >
          <BuddyItem buddyId={buddyId}/>
        </ListItem>
      )
    )
  } else {
    return (
      <></>
    );
  }

}
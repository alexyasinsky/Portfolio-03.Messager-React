import {ListItem} from "@mui/material";
import BuddyItem from "./components/BuddyItem/BuddyItem";
import {useSelector} from "react-redux";
import {selectChats} from "../../../../../../../../store/chats/selectors";
import {useEffect, useState} from "react";
import {onValue} from "@firebase/database";
import {chatsRef} from "../../../../../../../../services/firebase";


export default function BuddiesList() {

  // const chats = useSelector(selectChats);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);

  return (
    chats.map((buddy) =>
      <ListItem key={buddy.id} >
        <BuddyItem buddy={buddy}/>
      </ListItem>
    )
  )
}
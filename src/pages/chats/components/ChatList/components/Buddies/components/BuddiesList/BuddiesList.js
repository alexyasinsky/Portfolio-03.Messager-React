import {ListItem} from "@mui/material";
import BuddyItem from "./components/BuddyItem/BuddyItem";
import {useSelector} from "react-redux";
import {selectChats} from "../../../../../../../../store/chats/selectors";


export default function BuddiesList() {

  const chats = useSelector(selectChats);
  return (
    chats.map((buddy) =>
      <ListItem key={buddy.id} >
        <BuddyItem buddy={buddy}/>
      </ListItem>
    )
  )
}
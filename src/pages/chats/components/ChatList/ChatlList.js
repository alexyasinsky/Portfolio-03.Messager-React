import ChatListItem from "./components/ChatListItem";

import {ListItem} from "@mui/material";

export default function ChatList ({buddies}) {

  return (
    buddies.map((buddy) =>
      <ListItem key={buddy.id} >
        <ChatListItem  item = {buddy}/>
      </ListItem>
    )
  )
}
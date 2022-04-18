import ChatListItem from "./components/ChatListItem";
import faker from "@faker-js/faker";
import {ListItem} from "@mui/material";

const list = Array.from({
  length: 5,
}).map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.image.avatar(),
  name: faker.name.firstName()
}));

export default function ChatList () {

  return (
    list.map((buddy) =>
      <ListItem key={buddy.id} >
        <ChatListItem  item = {buddy}/>
      </ListItem>
    )
  )
}
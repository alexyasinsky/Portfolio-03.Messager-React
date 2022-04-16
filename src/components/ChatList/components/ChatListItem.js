import {Avatar, ListItem, ListItemText} from "@mui/material";

import './ChatListItem.scss';

export default function ChatListItem(props) {
  const buddy = props.item;

  return (
    <ListItem button>
      <Avatar alt={buddy.name} src={buddy.avatar} className={'chat__avatar'} />
      <ListItemText
        primary={buddy.name}
      />
    </ListItem>
  )
}
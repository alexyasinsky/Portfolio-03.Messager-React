import {Avatar, ListItem, ListItemText} from "@mui/material";

import './ChatListItem.scss';
import {NavLink} from "react-router-dom";

export default function ChatListItem(props) {
  const buddy = props.item;

  return (
    <NavLink
      to={buddy.id}
      className="chat__link"
    >
      <ListItem button>
        <Avatar alt={buddy.name} src={buddy.avatar} className={'chat__avatar'} />
        <ListItemText
          primary={buddy.name}
        />
      </ListItem>
    </NavLink>
  )
}
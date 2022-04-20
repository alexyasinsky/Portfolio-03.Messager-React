import {NavLink} from "react-router-dom";
import {Avatar, ListItem, ListItemText} from "@mui/material";

import "./User.scss";

export default function User ({user}) {
  return (
    <NavLink
      to="/"
      className="user__link"
    >
      <ListItem button>
        <Avatar alt={user.name} src={user.avatar} className={'user__avatar'} />
        <ListItemText
          primary={user.name}
        />
      </ListItem>
    </NavLink>
  )
}
import {NavLink} from "react-router-dom";
import {Avatar, ListItem, ListItemText} from "@mui/material";

import "./User.scss";
import {useSelector} from "react-redux";
import {selectName} from "../../../../../../store/profile/selectors";

export default function User () {
  const user = useSelector(selectName);
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
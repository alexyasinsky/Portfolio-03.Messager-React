import {NavLink} from "react-router-dom";
import {Avatar, ListItem, ListItemText} from "@mui/material";

import "./User.scss";
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../../../store/profile/selectors";

export default function User () {
  const profile = useSelector(selectProfile);
  return (
    <NavLink
      to="/"
      className="user__link"
    >
      <ListItem button>
        <Avatar alt={profile.nickname} src={profile.avatar} className={'user__avatar'} />
        <ListItemText
          primary={profile.nickname}
        />
      </ListItem>
    </NavLink>
  )
}
import {Avatar, IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import './BuddyItem.scss';
import {NavLink} from "react-router-dom";

export default function BuddyItem({buddy}) {
  return (
    <NavLink
      to={buddy.name}
      className="buddyItem__link"
    >
      <ListItem button>
        <Avatar alt={buddy.name} src={buddy.avatar} className='buddyItem__avatar' />
        <ListItemText
          primary={buddy.name}
        />
        <IconButton
          className='buddyItem__delete'
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </NavLink>
  )
}
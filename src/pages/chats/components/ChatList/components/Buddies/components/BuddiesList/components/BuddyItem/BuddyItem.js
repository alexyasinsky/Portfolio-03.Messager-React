import {Avatar, IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import './BuddyItem.scss';
import {NavLink} from "react-router-dom";

export default function BuddyItem({buddy, deleteBuddy}) {

  function handleDeleteButton() {
    deleteBuddy(buddy.name);
  }

  return (
    <>
      <NavLink
        to={buddy.name}
        className="buddyItem__link"
      >
        <ListItem button>
          <Avatar alt={buddy.name} src={buddy.avatar} className='buddyItem__avatar' />
          <ListItemText
            primary={buddy.name}
          />
        </ListItem>
      </NavLink>
      <IconButton onClick={handleDeleteButton}>
        <DeleteIcon/>
      </IconButton>
    </>
  )
}
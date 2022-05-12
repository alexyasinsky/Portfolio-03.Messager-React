import {Avatar, IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {deleteChat} from "../../../../../../../../../../store/chats/actions";

import './BuddyItem.scss';

export default function BuddyItem({buddy}) {

  const dispatch = useDispatch();
  function handleDeleteButton() {
    dispatch(deleteChat(buddy.name));
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
import {Avatar, IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { remove, set } from "@firebase/database";

import {deleteChat} from "../../../../../../../../../../store/chats/actions";

import './BuddyItem.scss';
import {initMessagesStore} from "../../../../../../../../../../store/messages/actions";
import { getMsgsRefById} from "../../../../../../../../../../services/firebase";

export default function BuddyItem({buddyId}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 const buddy = {};
  async function handleDeleteButton() {
  //   // await remove(getChatsRefById(buddy.id));
  //   await set(getMsgsRefById(buddy.id), null);
  //   // dispatch(deleteChat(buddy.name));
  //   navigate('/chats');
  }
  //
  function handleLink() {
  //   // dispatch(initMessagesStore(buddy.name))
  //   // navigate(`/chats/${buddy.name}`);
  //   navigate(`/chats/${buddy.id}`);
  }

  return (
    <>
      <div
        onClick={handleLink}
        className="buddyItem__link"
      >
        <ListItem button>
          <Avatar alt={buddy.name} src={buddy.avatar} className='buddyItem__avatar' />
          <ListItemText
            primary={buddy.name}
          />
        </ListItem>
      </div>
      <IconButton onClick={handleDeleteButton}>
        <DeleteIcon/>
      </IconButton>
    </>
  )
}
import {Avatar, IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {get, remove, set} from "@firebase/database";

import {deleteChat} from "../../../../../../../../../../store/chats/actions";

import './BuddyItem.scss';
import {initMessagesStore, initMessagesTrack} from "../../../../../../../../../../store/messages/actions";
import {getCurrentChatRef, getMsgsRefById, getUsersRefById} from "../../../../../../../../../../services/firebase";
import {useEffect, useState} from "react";
import {selectChats} from "../../../../../../../../../../store/chats/selectors";
import {selectProfile} from "../../../../../../../../../../store/profile/selectors";

export default function BuddyItem({buddyId}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector(selectProfile);

  const chats = useSelector(selectChats);

  const [buddy, setBuddy] = useState({});
  useEffect(() => {
    get(getUsersRefById(buddyId)).then(snapshot => {
      setBuddy(snapshot.val());
    });
  }, [buddyId])


  async function handleDeleteButton() {
    await remove(getCurrentChatRef(profile.id, buddyId));
    navigate('/chats');
  }

  function handleLink() {
    let messagesId = chats[buddyId];
    navigate(`/chats/${messagesId}`);
  }

  return (
    <>
      <div
        onClick={handleLink}
        className="buddyItem__link"
      >
        <ListItem button>
          <Avatar alt={buddy.nickname} src={buddy.avatar} className='buddyItem__avatar' />
          <ListItemText
            primary={buddy.nickname}
          />
        </ListItem>
      </div>
      <IconButton onClick={handleDeleteButton}>
        <DeleteIcon/>
      </IconButton>
    </>
  )
}
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../../store/profile/selectors";

export default function MessageList ({messages}) {
  const profile = useSelector(selectProfile);
  if (messages.length === 0) {
    return (
      <Typography variant="h6" className='messages__empty'>
        Здесь будут Ваши сообщения...
      </Typography>
    )
  } else {
    return messages.map((message, ind) => {
      let className;
      message.author === profile.nickname ? className = 'messages__item messages__item_user' : className = 'messages__item';
      return (
        <div key={ind} className={className}>
          <p className='messages__author'>{message.author}</p>
          <p className='messages__text'>{message.text}</p>
          <i className='messages__date'>{message.date}</i>
        </div>
      )
    });
  }


}


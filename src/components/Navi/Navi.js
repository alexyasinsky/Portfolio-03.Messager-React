import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import Icon from "@mdi/react";
import {mdiAccount, mdiChatOutline, mdiHomeCircle} from "@mdi/js";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "@types/react";


function highlightLinkButton(highlightFunc) {
  const pathname = window.location.pathname;
  let pathArray = pathname.split('/');
  switch (pathArray[1]) {
    case "":
      highlightFunc(0);
      break;
    case "profile":
      highlightFunc(1);
      break;
    case "chats":
      highlightFunc(2);
      break;
    default:
      break;
  }
}

export default function Navi() {
  const [highlightLinkNumber, setHighlightLinkNumber] = useState(0);

  useEffect(() => {
    highlightLinkButton(setHighlightLinkNumber);
  }, []);

  return (
    <Paper>
      <BottomNavigation
        showLabels
        value={highlightLinkNumber}
        onChange={(event, newValue) => {
          setHighlightLinkNumber(newValue);
        }}
      >
        <BottomNavigationAction
          label="Auth"
          icon={<Icon path={mdiHomeCircle}/>}
          component={NavLink}
          to='/'
        />
        <BottomNavigationAction
          label="Profile"
          icon={<Icon path={mdiAccount}/>}
          component={NavLink}
          to='/profile'
        />
        <BottomNavigationAction
          label="Chats"
          icon={<Icon path={mdiChatOutline}/>}
          component={NavLink}
          to='/chats'
        />

        <BottomNavigationAction label="Empty"/>
      </BottomNavigation>
    </Paper>
  )
}
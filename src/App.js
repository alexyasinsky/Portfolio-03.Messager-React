import { Routes, Route, NavLink } from 'react-router-dom';
import {useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction, Grid, Paper} from "@mui/material";
import { mdiChatOutline, mdiHomeCircle, mdiAccount } from '@mdi/js';
import Icon from "@mdi/react";

import './App.scss';

import Chats from "./pages/chats/Chats";
import Messages from './pages/chats/components/Messages/Messages';
import Profile from './pages/profile/Profile';
import Area from "./components/Area/Area";
import Home from "./pages/home/Home";




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

function App() {
  const [highlightLinkNumber, setHighlightLinkNumber] = useState(0);

  useEffect(() => {
    highlightLinkButton(setHighlightLinkNumber);
  }, []);

  return (


        <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/chats' element={<Chats />}>
              <Route path=":buddy" element={<Messages/>} />
              <Route path="" element={<Area height={650}>Выберите собеседника</Area>} />
            </Route>
          </Routes>
        </Grid>
          <Grid item xs={12}>
          <Paper>
            <BottomNavigation
              showLabels
              value={highlightLinkNumber}
              onChange={(event, newValue) => {
                setHighlightLinkNumber(newValue);
              }}
            >
              <BottomNavigationAction
                label="Home"
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
        </Grid>
        </Grid>
      </div>

  );
}

export default App;

import { Routes, Route, NavLink } from 'react-router-dom';
import {useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction, Grid, Paper} from "@mui/material";
import { mdiChatOutline, mdiHomeCircle } from '@mdi/js';
import Icon from "@mdi/react";
import { onAuthStateChanged } from "@firebase/auth";

import './App.scss';

import Chats from "./pages/chats/Chats";
import Messages from './pages/chats/components/Messages/Messages';
import Profile from './pages/profile/Profile';
import Area from "./components/Area/Area";
import Auth from "./pages/home/Auth";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";
import {auth} from "./services/firebase";

export default function App() {

  const [highlightLinkNumber, setHighlightLinkNumber] = useState(0);

  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);

  return (
        <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Routes>
            <Route path="/">
              <Route path="" element={<PublicRoute authed={authed} />}>
                <Route path="" element={<Auth/>} />
              </Route>
              <Route path='profile' element={<PrivateRoute authed={authed}/>}>
                <Route path="" element={<Profile/>} />
              </Route>
            </Route>
            <Route path='/chats' element={<PrivateRoute authed={authed}/>}>
              <Route path='' element={<Chats />}>
                <Route path=":id" element={<Messages/>} />
                <Route path="" element={<Area height={650} justText>Выберите собеседника</Area>} />
              </Route>
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
                label="Auth"
                icon={<Icon path={mdiHomeCircle}/>}
                component={NavLink}
                to='/profile'
              />
              <BottomNavigationAction
                label="Chats"
                icon={<Icon path={mdiChatOutline}/>}
                component={NavLink}
                to='/chats'
              />
            </BottomNavigation>
          </Paper>

        </Grid>
        </Grid>
      </div>

  );
}

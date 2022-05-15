import { Routes, Route, NavLink } from 'react-router-dom';
import {useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction, Grid, Paper} from "@mui/material";
import { mdiChatOutline, mdiHomeCircle, mdiAccount } from '@mdi/js';
import Icon from "@mdi/react";
import { onAuthStateChanged } from "@firebase/auth";

import './App.scss';

import Chats from "./pages/chats/Chats";
import Messages from './pages/chats/components/Messages/Messages';
import Profile from './pages/profile/Profile';
import Area from "./components/Area/Area";
import Home from "./pages/home/Home";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {PublicRoute} from "./components/PublicRoute/PublicRoute";
import {auth} from "./services/firebase";
import {getUsersListDB} from "./store/chats/actions";
import {useDispatch} from "react-redux";


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

export default function App() {

  const [highlightLinkNumber, setHighlightLinkNumber] = useState(0);

  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {

    setAuthed(true);
  };
  const handleLogout = () => {
    setAuthed(false);
  };

  const dispatch = useDispatch;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogin();
        setHighlightLinkNumber(1);

      } else {
        handleLogout();
        setHighlightLinkNumber(0);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    highlightLinkButton(setHighlightLinkNumber);
  }, [highlightLinkNumber]);

  return (

        <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<PublicRoute authed={authed} />}>
              <Route
                path=""
                element={<Home />}
              />
              <Route
                path="signup"
                element={<Home isSignUp />}
              />
            </Route>
            <Route path='/profile' element={<PrivateRoute authed={authed}/>}>
              <Route path="" element={<Profile/>} />
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
            </BottomNavigation>
          </Paper>

        </Grid>
        </Grid>
      </div>

  );
}

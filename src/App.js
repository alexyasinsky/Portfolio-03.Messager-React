import { Routes, Route, NavLink } from 'react-router-dom';
import {useEffect, useState} from "react";
import faker from "@faker-js/faker";
import {BottomNavigation, BottomNavigationAction, Grid, Paper} from "@mui/material";
import { mdiChatOutline, mdiHomeCircle, mdiAccount } from '@mdi/js';
import Icon from "@mdi/react";
import {Provider} from "react-redux";

import Chats from "./pages/chats/Chats";
import Messages from './pages/chats/components/Messages/Messages';
import Profile from './pages/profile/Profile';
import Area from "./components/Area/Area";
import Home from "./pages/home/Home";
import {store} from "./store";

import './App.scss';


function App() {

  const user = {
    name: 'Alex',
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
  };

  const [value, setValue] = useState(0);

  useEffect(() => {
    const pathname = window.location.pathname;
    pathname.replace(/\/*/, "");
    switch (pathname) {
      case "/":
        setValue(0);
        break;
      case "/chats":
        setValue(1);
        break;
      default:
        break;
    }
  }, []);
 
  const initBuddies = Array.from({
    length: 5,
  }).map(() => ({
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    name: faker.name.firstName()
  }));

  let [buddies, setBuddies] = useState(initBuddies);


  function addBuddy(name) {
    let buddy = {
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      name: name
    };
    setBuddies([buddy, ...buddies]);
  }

  function deleteBuddy(name) {
    let index = buddies.findIndex(item => item.name === name);
    const newBuddies = [...buddies];
    newBuddies.splice(index, 1);
    setBuddies(newBuddies);
  }

  return (

    <Provider store={store}>
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/chats' element={<Chats user={user} buddies={buddies} addBuddy={addBuddy} deleteBuddy={deleteBuddy}/>}>
              <Route path=":buddy" element={<Messages user={user.name} buddies={buddies}/>} />
              <Route path="" element={<Area height={650}>Выберите собеседника</Area>} />
            </Route>
          </Routes>
        </Grid>
          <Grid item xs={12}>
          <Paper>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
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
    </Provider>

  );
}

export default App;

import './App.scss';
import Chats from "./pages/chats/Chats";
import Messages from './pages/chats/components/Messages/Messages';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import {BottomNavigation, BottomNavigationAction, Grid, Paper} from "@mui/material";
import { mdiChatOutline, mdiHomeCircle } from '@mdi/js';
import Icon from "@mdi/react";
import Area from "./components/Area/Area";
import {useState} from "react";

function App() {

  const user = 'Alex';

  const [value, setValue] = useState(0);

  return (

    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/chats' element={<Chats user={user}/>}>
              <Route path=":id" element={<Messages />} />
              <Route path="default" element={<Area height={650}>Выберите собеседника</Area>} />
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
                label="Chats"
                icon={<Icon path={mdiChatOutline}/>}
                component={NavLink}
                to='/chats/default'
              />
              <BottomNavigationAction label="Empty1"/>
              <BottomNavigationAction label="Empty2"/>
            </BottomNavigation>
          </Paper>
        </Grid>
      </Grid>
    </div>


    
  );
}

export default App;
